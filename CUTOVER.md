# Vercel to Cloudflare Workers cutover

Preview worker: https://axismeter-site-preview.karthik-dd9.workers.dev
Cloudflare account: `dd90aa33b1bc9fba13338cccaa1bc6a5`
Worker name: `axismeter-site-preview`

The branch adds a second deploy target. Nothing here changes Vercel until the
DNS step. Work top to bottom.

## How the Workers deployment differs

| Concern | Vercel today | Workers |
| --- | --- | --- |
| ISR / revalidate | Runtime, on a timer and via webhook | None. Content ships on redeploy (`.github/workflows/deploy-cloudflare.yml`) |
| `/studio` | Served by the app | Not built. Moves to Sanity hosted studio |
| `next/image` | Vercel optimizer | Zone transformations via `image-loader.ts`, enabled by `CF_ZONE_IMAGES=1` |
| Worker size | n/a | 3 MiB gzip on the free plan. Current build is 2.29 MiB |

## Checklist

### 1. Worker secrets

```
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put SANITY_REVALIDATE_SECRET
npx wrangler secret put SANITY_API_WRITE_TOKEN
npx wrangler secret put OUTRANK_WEBHOOK_SECRET
npx wrangler secret put OUTRANK_BLOG_API_KEY
```

Pull the current values from the Vercel project settings. Without
`RESEND_API_KEY` the contact form silently logs instead of emailing, which is
the single highest-impact miss.

`NEXT_PUBLIC_SANITY_PROJECT_ID` (`mbfc2nyz`) and `NEXT_PUBLIC_SANITY_DATASET`
(`production`) are committed defaults in `src/sanity/env.ts`. Blog reads are
public dataset reads and need no token.

### 2. Hosted Sanity Studio

The embedded studio is ~2.2 MiB gzipped and alone pushes the worker past the
free-plan limit, so `scripts/cf-build.mjs` excludes `src/app/studio` from the
Workers build. It stays excluded.

```
npx sanity deploy
```

Needs an interactive Sanity login. Publishes to `*.sanity.studio`. Afterwards,
update any bookmarks or docs that point at `axismeter.com/studio`, and confirm
nothing in the app links to that route.

### 3. Zone

Add `axismeter.com` to the Cloudflare account if it is not already there, and
move the nameservers. Do this before touching the worker's routing so the zone
is active and testable.

### 4. Custom domain

Attach `www.axismeter.com` to the worker as a custom domain and redirect the
apex to `www`. `next.config.ts` already redirects `axismeter.com` to
`https://www.axismeter.com` at the app layer, so a zone-level redirect rule is
optional belt and braces.

Then drop the preview noindex: `next.config.ts` `headers()` currently returns
`X-Robots-Tag: noindex, nofollow` whenever `CF_WORKERS_BUILD=1`. Once the
worker serves the real domain, that condition needs to key off the preview
deployment rather than the Cloudflare build, or the production site ships
noindex. **Do not skip this.**

### 5. Image transformations

Enable image transformations on the zone (Speed > Optimization > Images), then
build with the flag set:

```
CF_ZONE_IMAGES=1 npm run cf:build
```

`image-loader.ts` then emits `/cdn-cgi/image/width=...,quality=...,format=auto/<src>`
for `/public` assets and Sanity CDN parameters for `cdn.sanity.io`. Free tier
allows 5k unique transformations per month, well above this site's needs.

Set `CF_ZONE_IMAGES=1` in the deploy workflow's build step at the same time.

Known gap: `src/components/BlogImage.tsx` renders blog *featured* images with a
plain `<img>`, not `next/image`, so the loader does not reach them. They serve
full-size from `cdn.sanity.io`. Fixing that means editing the component, which
also changes Vercel output, so it was left alone. Worth doing after cutover.

### 6. Deploy credentials

Create an API token scoped to **Workers Scripts: Edit** on this account, then:

```
gh secret set CLOUDFLARE_API_TOKEN
```

`.github/workflows/deploy-cloudflare.yml` skips build and deploy while the
secret is unset, so it is inert until this step.

Verify with a manual run (`workflow_dispatch`) before wiring anything to it.

### 7. Publish webhook

Point Sanity at GitHub so publishing triggers a redeploy.

- Sanity webhook target: `POST https://api.github.com/repos/Axis-Meter/axismeter-site/dispatches`
- Body: `{"event_type": "content-published"}`
- Headers: `Accept: application/vnd.github+json`, `Authorization: Bearer <PAT>`

The PAT needs a fine-grained token with **Contents: read and write** on this
repo (the `dispatches` endpoint requires it). Sanity webhooks can send custom
headers, so no bridge worker is needed. If that turns out to be too coarse a
permission to accept, put a small Worker in front that holds the PAT and
exposes a shared-secret endpoint instead.

Leave the existing `/api/sanity/revalidate` route in place. It returns 200 but
is a no-op against the read-only cache.

### 8. Cache headers

Prerendered HTML comes back as `cache-control: s-maxage=31536000`. On
workers.dev nothing caches in front of the worker, so it is harmless today.
Behind the zone it means a year in Cloudflare's edge cache. Either shorten it
or add a cache purge to the deploy workflow, otherwise a redeploy will not be
visible to users.

### 9. Decommission Vercel

Wait 48 hours after DNS with clean logs. Check Workers observability for 5xx
and for contact form submissions actually reaching Resend. Then delete the
Vercel project and remove `@vercel/analytics` and `@vercel/speed-insights` from
`package.json` if nothing replaces them.

## Rollback

DNS back to Vercel. The Vercel project builds from `main` unchanged, and every
Cloudflare-specific behaviour is behind `CF_WORKERS_BUILD` / `CF_ZONE_IMAGES`,
neither of which Vercel sets.
