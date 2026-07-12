# Core Submetering Cluster Consolidation

Date: 2026-07-12

Status: implemented locally; not committed, pushed, or deployed

## Decision

Use `/blog/what-is-a-submeter-and-how-does-it-work` as the single canonical page for broad informational searches about submeters and submetering.

This URL was selected because its current and legacy versions had the strongest combined Search Console visibility within the overlapping cluster. The retained article now answers the core topic comprehensively, while the redundant pages redirect directly to it.

## Search Console evidence

Search Console property: `sc-domain:axismeter.com`

Date range reviewed: last 16 months

| URL | Clicks | Impressions |
| --- | ---: | ---: |
| `/post/sub-utility-solutions` | 18 | 2,768 |
| `/post/what-is-a-submeter-and-how-does-it-work` | 10 | 30,403 |
| `/post/sub-meter` | 9 | 8,699 |
| `/post/what-is-submetering` | 2 | 19,470 |
| `/resources/submetering-101` | 1 | 892 |
| `/blog/what-is-a-submeter-and-how-does-it-work` | 0 | 13,930 |
| `/blog/what-is-submetering` | 0 | 3,279 |
| `/blog/sub-meter` | 0 | 542 |
| `/blog/sub-utility-solutions` | 0 | 39 |

The existing `/post/*` URLs are legacy paths. Consolidating them into the retained `/blog/*` URL preserves a stable current-site destination while allowing Google to transfer the legacy signals through permanent redirects.

## Pages consolidated

The following current pages were retired:

- `/blog/what-is-submetering`
- `/blog/sub-meter`
- `/blog/utility-submetering`
- `/blog/sub-utility-solutions`
- `/resources/submetering-101`

Their corresponding legacy `/post/*` URLs, plus closely related historical aliases, now redirect in one hop to the retained article.

## Retained article improvements

- Rewritten to provide a direct definition and clear explanation of how submetering works.
- Covers water, electricity, gas, and thermal applications without implying that the same rules apply to every utility or jurisdiction.
- Distinguishes submetering from allocation methods such as RUBS.
- Explains project planning, data collection, validation, billing, leak visibility, limitations, and provider-selection questions.
- Adds scoped Canada, Ontario, and United States regulatory context with primary-source links.
- Adds key takeaways, a comparison table, FAQs, an updated date, and a visible review statement.
- Removes unsupported percentage-savings and universal-compliance claims.

## Technical consolidation

- Permanent one-hop redirects point every retired URL to the retained article.
- Navigation, footer, resource-hub, and water-submetering links now use the retained URL.
- Retired pages were removed from the blog index and sitemap.
- The sitemap uses the article's modified date.
- Article structured data exposes `dateModified`.

## Validation completed

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Local production-server checks confirmed a `200` response for the retained article.
- Local production-server checks confirmed direct `308` responses for all retired cluster URLs tested.

## Post-deployment monitoring

After deployment:

1. Inspect the retained URL in Search Console and request indexing.
2. Submit the updated sitemap.
3. Confirm the deployed redirects return one-hop permanent responses.
4. Monitor the retained URL and retired URLs at 7, 14, 30, 60, and 90 days.
5. Avoid publishing another broad "what is submetering" article; future articles should target distinct supporting intents and link back to this pillar.
