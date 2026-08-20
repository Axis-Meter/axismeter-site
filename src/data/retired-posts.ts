// Blog slugs retired on 2026-08-20. Search Console had been declining to index
// every one of them for months (duplicate intent or off-topic 2024 posts).
//
// Shared by next.config.ts (301s), src/middleware.ts (410s) and src/lib/blog.ts
// (drops them from the blog index and sitemap even if a Sanity document with the
// slug still exists). To retire another post, add it here and nothing else.

/** Retired slug -> path of the article that now owns the topic. */
export const retiredPostRedirects: Readonly<Record<string, string>> = {
  // Duplicate of the canonical Google already chose.
  "when-renting-a-house-who-pays-utilities": "/blog/who-pays-utilities-when-renting-a-house",
  "tenant-responsibilities-list": "/blog/tenant-responsibilities",
  // Two posts, one intent, neither indexed.
  "how-to-save-on-utilities-in-an-apartment": "/blog/why-are-my-utility-bills-so-high",
  "how-to-save-money-on-utilities-in-an-apartment": "/blog/why-are-my-utility-bills-so-high",
  // Unpaid-bills trio.
  "who-is-responsible-for-unpaid-utility-bills": "/blog/what-if-tenant-does-not-pay-electricity-bill",
  "are-landlords-responsible-for-unpaid-utility-bills": "/blog/what-if-tenant-does-not-pay-electricity-bill",
  "what-happens-if-a-tenant-leaves-without-paying-utility-bills": "/blog/what-if-tenant-does-not-pay-electricity-bill",
  // Superseded by the 2026 water and electricity guides.
  "water-sub-meters": "/blog/what-is-a-water-submeter",
  "submeter-water-with-axis-meter-solutions": "/blog/what-is-a-water-submeter",
  "submetering-electricity": "/blog/sub-metering-electricity",
  // Closest surviving intent.
  "landlord-tenant-utility-agreement-with-axis-meter-solutions": "/blog/including-utilities-in-rental-agreement",
  "what-utilities-do-you-need-for-a-house": "/blog/what-includes-utilities",
  // Brand post; the about page is the real answer.
  "axis-meter-solutions": "/about",
};

/** Retired slugs with no replacement. Served as 410 Gone. */
export const gonePostSlugs: ReadonlySet<string> = new Set([
  "infinity-water-billing",
  "investing-in-real-estate-notes",
  "utility-and-value-of-axis-meter-solutions-in-modern-industries",
]);

export const retiredPostSlugs: ReadonlySet<string> = new Set([
  ...Object.keys(retiredPostRedirects),
  ...gonePostSlugs,
]);
