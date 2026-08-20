// Deletes the Sanity documents for every slug in src/data/retired-posts.ts.
// The site already hides and redirects those slugs, so this is cleanup that
// keeps Studio and the nightly backup honest. Requires an Editor token:
//
//   SANITY_API_WRITE_TOKEN=... node scripts/retire-sanity-posts.mjs          # dry run
//   SANITY_API_WRITE_TOKEN=... node scripts/retire-sanity-posts.mjs --apply  # delete
import { retiredPostRedirects, gonePostSlugs } from "../src/data/retired-posts.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mbfc2nyz";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-07-15";
const token = process.env.SANITY_API_WRITE_TOKEN;
const apply = process.argv.includes("--apply");

if (!token) throw new Error("SANITY_API_WRITE_TOKEN is required");

const slugs = [...Object.keys(retiredPostRedirects), ...gonePostSlugs];
const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`;
const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

const query = new URL(`${base}/query/${dataset}`);
query.searchParams.set("query", `*[_type == "blogPost" && slug.current in $slugs]{_id, "slug": slug.current}`);
query.searchParams.set("$slugs", JSON.stringify(slugs));
const found = (await (await fetch(query, { headers })).json()).result ?? [];

console.log(`${found.length} of ${slugs.length} retired slugs exist in Sanity (${dataset}):`);
for (const doc of found) console.log(`  ${doc._id}  ${doc.slug}`);
if (!apply) {
  console.log("Dry run. Re-run with --apply to delete.");
  process.exit(0);
}

// Published and draft variants share the slug; delete both ids.
const ids = found.flatMap((doc) => [doc._id, `drafts.${doc._id.replace(/^drafts\./, "")}`]);
const response = await fetch(`${base}/mutate/${dataset}`, {
  method: "POST",
  headers,
  body: JSON.stringify({ mutations: ids.map((id) => ({ delete: { id } })) }),
});
if (!response.ok) throw new Error(`Delete failed with HTTP ${response.status}: ${await response.text()}`);
console.log(`Deleted ${found.length} documents.`);
