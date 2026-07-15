import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "content-backups/sanity");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mbfc2nyz";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-07-15";
const query = `*[_type == "blogPost" && defined(slug.current)] | order(slug.current asc) {...}`;
const endpoint = new URL(
  `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`,
);
endpoint.searchParams.set("query", query);
endpoint.searchParams.set("perspective", "published");

const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
if (!response.ok) throw new Error(`Sanity export failed with HTTP ${response.status}`);
const payload = await response.json();
const posts = payload.result || [];

await mkdir(outputDirectory, { recursive: true });
for (const fileName of await readdir(outputDirectory)) {
  if (fileName.endsWith(".json")) await unlink(path.join(outputDirectory, fileName));
}

for (const post of posts) {
  const slug = post.slug?.current;
  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) continue;
  await writeFile(
    path.join(outputDirectory, `${slug}.json`),
    `${JSON.stringify(post, null, 2)}\n`,
    "utf8",
  );
}

await writeFile(
  path.join(outputDirectory, "manifest.json"),
  `${JSON.stringify(
    {
      projectId,
      dataset,
      postCount: posts.length,
      slugs: posts.map((post) => post.slug?.current).filter(Boolean).sort(),
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(`Backed up ${posts.length} published Sanity posts.`);
