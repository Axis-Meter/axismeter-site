# Public Help Centre

The public library is `https://www.axismeter.com/help`; article links use
`/help/{slug}`. It lives in this website independently of the account application.
Customers can read password-reset instructions without a Clerk session. The
account app links directly here and redirects its legacy `/help` paths.

## Content

The existing Sanity Studio at `/studio` edits `helpArticle` documents alongside
`blogPost`. Both public destinations use one editor: `/blog` and `/help`.
The Help Centre uses the same project, dataset and API version as the Studio
(`src/sanity/env.ts`), without a read token. Only the published perspective is
queried. Unpublish or publish `archived: true` to hide an article.

`src/lib/help-centre.ts` validates query responses with Zod. The public pages,
content requests and sitemap revalidate after 60 seconds on subsequent requests;
a page can briefly serve its cached version while Next.js refreshes it. Publishing
an ordinary article does not require a deployment. Failed content requests show
an error state rather than pretending the library is empty. Missing articles
have a not-found page. The sitemap contains published, unarchived article URLs.
If the help-content request fails, the sitemap retains static and blog URLs and
logs the omission; later revalidation retries the help request.

Search matches words across title, summary, category, keywords and body text.
Category buttons use the categories present in published articles. Rich text uses
Portable Text and safe links, never raw HTML.

## Videos and the first guide

The finished 1080p reset recording, cover and English WebVTT captions are in
`public/help-media`. Raw recordings, demo passwords and reset codes are not shipped.
Editors can instead upload MP4, poster and caption assets to Sanity; uploads take
priority over HTTPS URL fields. Native controls support seeking and mobile playback.
Written instructions remain available without playing a video.

The **Password reset guide (with video)** template points to media under
`https://www.axismeter.com/help-media/`. The already-created first article is
`drafts.help-reset-password`. Update its media URLs to this website before
publication; deploy these pages and media first, then publish the saved draft.

Content is public. Do not include customer information, credentials or internal
operating instructions. The daily backup also exports published help documents
using `scripts/export-sanity-help.mjs`.
