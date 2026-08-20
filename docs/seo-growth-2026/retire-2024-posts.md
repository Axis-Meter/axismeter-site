# Retire 16 unindexed 2024 blog posts

Date: 2026-08-20

## Decision

Remove the 16 posts from the 2024 batch that Google had been declining to index, redirecting each to the nearest indexed article and returning 410 for the three with no sensible replacement. The slug list and targets live in `src/data/retired-posts.ts`.

## Search Console evidence

Property `https://www.axismeter.com/`, Page indexing report, data as of 2026-08-16: 85 indexed, 93 not indexed. After excluding migration leftovers (32 redirects, 18 legacy 404s, stale `/post/` entries, a favicon and a font), the only live pages Google refused were these 16 posts and six thin commercial pages. Every one of the 16 sat in "Crawled - currently not indexed" or "Discovered - currently not indexed" for at least three months, and `when-renting-a-house-who-pays-utilities` was flagged "Duplicate without user-selected canonical".

Performance, both properties, last 16 months, all 16 slugs combined: 39 clicks, 28.5K impressions, average position 36. Almost all of it was on the legacy `/post/` URLs. Top earners:

| URL | Clicks | Impressions |
| --- | ---: | ---: |
| `/post/landlord-tenant-utility-agreement-with-axis-meter-solutions` | 13 | 3,572 |
| `/post/who-is-responsible-for-unpaid-utility-bills` | 9 | 2,697 |
| `/post/infinity-water-billing` | 4 | 2,948 |
| `/post/submetering-electricity` | 3 | 6,164 |
| `/post/water-sub-meters` | 3 | 3,191 |

Permanent redirects keep whatever residual signal those URLs carry.

## Disposition

| Retired slug | Disposition |
| --- | --- |
| `when-renting-a-house-who-pays-utilities` | 301 to `who-pays-utilities-when-renting-a-house` (Google's chosen canonical) |
| `tenant-responsibilities-list` | 301 to `tenant-responsibilities` |
| `how-to-save-on-utilities-in-an-apartment`, `how-to-save-money-on-utilities-in-an-apartment` | 301 to `why-are-my-utility-bills-so-high` |
| `who-is-responsible-for-unpaid-utility-bills`, `are-landlords-responsible-for-unpaid-utility-bills`, `what-happens-if-a-tenant-leaves-without-paying-utility-bills` | 301 to `what-if-tenant-does-not-pay-electricity-bill` |
| `water-sub-meters`, `submeter-water-with-axis-meter-solutions` | 301 to `what-is-a-water-submeter` |
| `submetering-electricity` | 301 to `sub-metering-electricity` |
| `landlord-tenant-utility-agreement-with-axis-meter-solutions` | 301 to `including-utilities-in-rental-agreement` |
| `what-utilities-do-you-need-for-a-house` | 301 to `what-includes-utilities` |
| `axis-meter-solutions` | 301 to `/about` |
| `infinity-water-billing`, `investing-in-real-estate-notes`, `utility-and-value-of-axis-meter-solutions-in-modern-industries` | 410 Gone |

## Technical changes

- `src/data/retired-posts.ts` is the single list. `next.config.ts` generates one-hop permanent redirects for both `/blog/<slug>` and `/post/<slug>`; `src/middleware.ts` returns 410 for the gone slugs; `src/lib/blog.ts` drops every retired slug from the blog index, article route and sitemap regardless of content source.
- Static copies under `src/data/blog-content/` and their images were deleted, and `src/data/blogPosts.ts` no longer lists them.
- Sanity still holds published documents for all 16. Run `scripts/retire-sanity-posts.mjs` with an Editor token to delete them; the nightly backup then drops their JSON files.

## After deployment

1. Confirm 308 and 410 responses on the deployed site for a sample of retired URLs.
2. In Search Console, request indexing for the six thin commercial pages once they are rewritten; that work is separate from this change.
3. Check the Page indexing report at 30 and 60 days. Expect the "Crawled - currently not indexed" bucket to lose its live-page entries and the redirect bucket to grow temporarily.
