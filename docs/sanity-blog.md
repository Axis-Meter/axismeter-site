# Axis blog CMS

Sanity project: `Axis Meter Blog` (`mbfc2nyz`), public dataset `production`.

The public routes remain `/blog` and `/blog/[slug]`. The editor is embedded at
`/studio`. Published Sanity documents override migrated local or Outrank content
with the same slug; both older sources remain as runtime fallbacks.

## Environment variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID (`mbfc2nyz`)
- `NEXT_PUBLIC_SANITY_DATASET`: `production`
- `SANITY_API_WRITE_TOKEN`: server-only Editor token used by the Outrank webhook
- `SANITY_REVALIDATE_SECRET`: signature secret for Sanity content webhooks
- `OUTRANK_WEBHOOK_SECRET`: bearer token configured in Outrank
- `OUTRANK_BLOG_API_KEY`: retained temporarily as a fallback content source

Never prefix write tokens or webhook secrets with `NEXT_PUBLIC_`.

## Outrank integration

Configure Outrank's API Webhook integration with:

- Endpoint: `https://www.axismeter.com/api/outrank/webhook`
- Access token: the value of `OUTRANK_WEBHOOK_SECRET`

The route accepts `publish_articles` and `update_article`, converts Outrank HTML
to Portable Text, upserts the published Sanity document, and refreshes the blog,
article and sitemap caches.

## Sanity revalidation webhook

Create a Sanity webhook for create, update and delete events:

- URL: `https://www.axismeter.com/api/sanity/revalidate`
- Dataset: `production`
- Filter: `_type == "blogPost"`
- Projection: `{_type, "slug": slug.current}`
- Secret: the value of `SANITY_REVALIDATE_SECRET`

## Content migration and backup

`npm run sanity:build-import` converts current TypeScript/HTML articles to an
NDJSON import at `/tmp/axis-sanity-blog.ndjson`. When
`OUTRANK_BLOG_API_KEY` is present, it also includes remote Outrank articles.

The `Back up Sanity blog` GitHub Action exports every published document into
`content-backups/sanity` daily and whenever manually dispatched. These files are
the recoverable, versioned copy if Sanity is ever removed.
