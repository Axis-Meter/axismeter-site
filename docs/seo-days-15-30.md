# SEO Days 15–30 Baseline and Priority Map

Baseline captured from Google Search Console on July 11, 2026. Performance range: March 10, 2025 through July 9, 2026.

## Performance baseline

| Segment | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| All countries | 3,730 | 740,582 | 0.5% | 22.6 |
| United States | 1,537 | 473,509 | 0.3% | 17.2 |
| Canada | 1,709 | 51,466 | 3.3% | — |

The United States has roughly nine times Canada's impressions but fewer clicks. This makes US relevance and click-through rate the largest growth opportunity, while Canada's higher click-through rate and branded demand should be protected.

## Indexing baseline

- Sitemap: `https://www.axismeter.com/sitemap.xml`
- Sitemap status: Success
- Discovered sitemap URLs: 84
- Sitemap resubmitted after the Days 1–14 deployment: July 11, 2026
- Index report snapshot last updated by Google: June 29, 2026
- Submitted URLs indexed in that snapshot: 10
- Submitted URLs not indexed in that snapshot: 74
  - Discovered, currently not indexed: 60
  - Crawled, currently not indexed: 14

The index snapshot predates the July 11 deployment and still references old non-`www` URLs. Production now redirects non-`www` and legacy `/post/*` routes to the preferred `www` `/blog/*` URLs with HTTP 308 responses. Recheck the report after Google processes the resubmitted sitemap.

Redirect evidence verified July 11, 2026:

- `https://axismeter.com/blog/what-is-a-water-submeter` returned HTTP 308 and resolved to `https://www.axismeter.com/blog/what-is-a-water-submeter`.
- `https://www.axismeter.com/post/what-is-a-water-submeter` returned HTTP 308 and resolved to `https://www.axismeter.com/blog/what-is-a-water-submeter`.

## Historical URL consolidation

The 16-month page report contains substantial historical performance under the old `/post/*` URLs:

- Legacy `/post/*`: 55 URLs, 1,578 clicks, 658,436 impressions
- Current `/blog/*`: 60 URLs, 346 clicks, 125,126 impressions

This is primarily historical because legacy routes now redirect correctly. Monitor Google as signals consolidate onto `/blog/*`; do not remove the redirects.

## Keyword-to-page map

| Intent | Primary query | Current signal | Assigned URL | Action |
| --- | --- | --- | --- | --- |
| Commercial water service | water submetering services / system / company | High US impressions, positions mostly 40–55 | `/solutions/water-submetering` | Expand commercial service page, clarify US/Canada scope, add FAQs and internal links |
| Broad water product/service | water submeter | 10,279 impressions, position 21.9 overall | `/solutions/water-submetering` for commercial intent; blog for definition | Differentiate service and informational intent; avoid duplicate pages |
| Informational water | what is a water submeter | 1,444 impressions, position 7.3 overall | `/blog/what-is-a-water-submeter` | Refresh factual guide, improve title, route qualified readers to service page |
| General education | what is submetering / how does submetering work | Strong Canada impressions, positions 30–80 | `/resources/submetering-101` | Refresh after current water batch and strengthen links to utility-specific services |
| Gas service | gas submeter / gas submetering installation | 2,773 impressions overall, position 26.4 | `/solutions/gas-submetering` | Next service-page refresh after water |
| Electricity service | electricity submetering / electric submeter | Canada visibility remains weak | `/solutions/electricity-submetering` | Add OEB licence proof and clearer Ontario/US scope in next batch |
| Brand | Axis Meter / Axis Meter login | Strong position 1 demand | `/` and `myaccount.axismeter.com` | Protect navigational paths and prevent marketing/login confusion |

## US water-query examples

- `water submeter`: 2,279 impressions, position 27.7
- `water submetering`: 2,231 impressions, position 42.7
- `water submetering systems`: 1,814 impressions, position 44.8
- `water submetering system`: 1,582 impressions, position 43.1
- `what is a water submeter`: 787 impressions, position 8.8
- `water submetering company`: 527 impressions, position 48.8
- `water submetering service`: 407 impressions, position 55.1

## Canada submetering-query examples

- `what is submetering`: 1,198 impressions, position 49.5
- `submetering`: 1,043 impressions, position 79.5
- `how does submetering work`: 826 impressions, position 30.2
- `water submetering`: 649 impressions, position 47.5
- `water submeter`: 635 impressions, position 21.5
- `gas submeter`: 546 impressions, position 23.8
- `what is a water submeter`: 512 impressions, position 5.6

## Compliance and trust finding

Before this batch, the marketing site used broad claims such as “100% Regulatory Compliant” and “Fully Certified,” but did not display Axis Meter Solutions Inc.'s verifiable Ontario Energy Board Unit Sub-Metering Provider licence.

Days 15–30 actions:

- Identify Axis as an OEB-licensed Unit Sub-Meter Provider for Ontario electricity submetering.
- Display licence `ES-2022-0268` and link to the OEB licensed-company register.
- State the licence scope explicitly so it is not presented as authorization for water, gas, or US projects.
- Replace blanket US/Canada certification claims with project- and jurisdiction-specific wording.

## Measurement cadence

1. Recheck sitemap processing and submitted-page indexing weekly for four weeks.
2. Track the assigned water service and informational URLs separately.
3. Compare US and Canada clicks, impressions, CTR, and average position every 28 days.
4. Do not create additional water pages until Google has recrawled this batch and query ownership is clearer.
5. Refresh gas and general submetering pages next, using the same intent-separation approach.
