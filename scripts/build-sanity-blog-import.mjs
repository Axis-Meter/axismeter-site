import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { htmlToBlocks } from "@portabletext/block-tools";
import { Schema } from "@sanity/schema";
import { JSDOM } from "jsdom";
import { BlogClient } from "outrank-next-js-blog";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = process.env.SANITY_IMPORT_PATH || "/tmp/axis-sanity-blog.ndjson";
const siteUrl = "https://www.axismeter.com";

const schema = Schema.compile({
  name: "axisBlogMigration",
  types: [
    {
      name: "blockContent",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bulleted list", value: "bullet" },
            { title: "Numbered list", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                fields: [
                  { name: "href", type: "string" },
                  { name: "openInNewTab", type: "boolean" },
                ],
              },
            ],
          },
        },
        {
          name: "externalImage",
          type: "object",
          fields: [
            { name: "url", type: "string" },
            { name: "alt", type: "string" },
            { name: "caption", type: "string" },
          ],
        },
      ],
    },
  ],
});

const blockContentType = schema.get("blockContent");

function convertHtml(html) {
  const normalized = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<h1(\s|>)/gi, "<h2$1")
    .replace(/<\/h1>/gi, "</h2>");

  return htmlToBlocks(`<html><body>${normalized}</body></html>`, blockContentType, {
    parseHtml: (value) => new JSDOM(value).window.document,
    matchers: {
      image: ({ props }) =>
        props.src ? { _type: "externalImage", url: props.src, alt: props.alt || "" } : undefined,
      inlineImage: ({ props }) =>
        props.src ? { _type: "externalImage", url: props.src, alt: props.alt || "" } : undefined,
    },
  });
}

function getCategory(tags = []) {
  const joined = tags.join(" ").toLowerCase();
  if (joined.includes("water")) return "Water";
  if (joined.includes("electric")) return "Electricity";
  if (joined.includes("thermal") || joined.includes("hvac")) return "Thermal & HVAC";
  if (joined.includes("gas")) return "Gas";
  if (joined.includes("tenant") || joined.includes("renter")) return "Tenants & Renters";
  if (joined.includes("property owner")) return "Property Owners";
  if (joined.includes("cost") || joined.includes("saving")) return "Cost Savings";
  if (joined.includes("submeter")) return "Submetering";
  return "Insights";
}

function readingTime(html) {
  const text = new JSDOM(html).window.document.body.textContent || "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function extractContentModule(source, fileName) {
  const prefix = "export const content = `";
  const start = source.indexOf(prefix);
  const end = source.lastIndexOf("`;");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Unable to parse ${fileName}`);
  }
  return source.slice(start + prefix.length, end);
}

async function loadLocalDocuments() {
  const indexSource = await readFile(path.join(root, "src/data/blogPosts.ts"), "utf8");
  const declarationStart = indexSource.indexOf("export const blogPosts");
  const arrayStart = indexSource.indexOf("[", indexSource.indexOf("=", declarationStart));
  const arrayEnd = indexSource.lastIndexOf("];");
  if (arrayStart === -1 || arrayEnd === -1) throw new Error("Unable to parse blogPosts.ts");
  const posts = JSON.parse(indexSource.slice(arrayStart, arrayEnd + 1).replace(/,\s*]$/, "]"));
  const contentDirectory = path.join(root, "src/data/blog-content");
  const availableFiles = new Set(await readdir(contentDirectory));

  return Promise.all(
    posts.map(async (post) => {
      const fileName = `${post.slug}.ts`;
      if (!availableFiles.has(fileName)) throw new Error(`Missing content for ${post.slug}`);
      const source = await readFile(path.join(contentDirectory, fileName), "utf8");
      const html = extractContentModule(source, fileName);
      return {
        _id: `blog-${post.slug}`,
        _type: "blogPost",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        excerpt: post.excerpt,
        category: post.category || "Insights",
        tags: [post.category].filter(Boolean),
        publishedAt: `${post.date}T12:00:00.000Z`,
        updatedAt: post.updated ? `${post.updated}T12:00:00.000Z` : undefined,
        featuredImageUrl: post.featuredImage?.startsWith("/")
          ? `${siteUrl}${post.featuredImage}`
          : post.featuredImage || undefined,
        body: convertHtml(html),
        author: "Axis Meter Solutions",
        readingTimeMinutes: readingTime(html),
        source: "local",
        sourceHtml: html,
        noIndex: false,
      };
    }),
  );
}

async function loadOutrankDocuments(localSlugs) {
  const apiKey = process.env.OUTRANK_BLOG_API_KEY?.trim();
  if (!apiKey) return [];

  const client = new BlogClient(apiKey, { baseUrl: "https://outrank.so", timeoutMs: 30_000 });
  const summaries = await client.getAllArticles(100);
  const articles = await Promise.all(summaries.map((summary) => client.getArticle(summary.slug)));

  return articles.flatMap((article) => {
    if (!article || localSlugs.has(article.slug)) return [];
    return [{
      _id: `outrank-${String(article.id).replace(/[^a-zA-Z0-9_-]/g, "-")}`,
      _type: "blogPost",
      title: article.title,
      slug: { _type: "slug", current: article.slug },
      excerpt: article.meta_description.slice(0, 180),
      category: getCategory(article.tags),
      tags: article.tags,
      publishedAt: article.created_at,
      updatedAt: article.updated_at || undefined,
      featuredImageUrl: article.image_url || undefined,
      body: convertHtml(article.html),
      author: "Axis Meter Solutions",
      readingTimeMinutes: article.reading_time_minutes,
      source: "outrank",
      outrankId: article.id,
      sourceHtml: article.html,
      noIndex: false,
    }];
  });
}

async function loadPublicRemoteDocuments(localSlugs) {
  const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
  if (!sitemapResponse.ok) {
    throw new Error(`Unable to load public sitemap: HTTP ${sitemapResponse.status}`);
  }

  const sitemap = await sitemapResponse.text();
  const slugs = [...sitemap.matchAll(/<loc>https:\/\/www\.axismeter\.com\/blog\/([^<]+)<\/loc>/g)]
    .map((match) => decodeURIComponent(match[1]))
    .filter((slug) => !localSlugs.has(slug) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));

  return Promise.all(
    slugs.map(async (slug) => {
      const response = await fetch(`${siteUrl}/blog/${slug}`);
      if (!response.ok) throw new Error(`Unable to load public article ${slug}: HTTP ${response.status}`);
      const pageHtml = await response.text();
      const document = new JSDOM(pageHtml).window.document;
      const content = document.querySelector(".prose")?.innerHTML;
      const title = document.querySelector("h1")?.textContent?.trim();
      const excerpt = document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim();
      const featuredImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content") || undefined;
      const category = document.querySelector("article header span")?.textContent?.trim() || "Insights";
      const articleSchema = [...document.querySelectorAll('script[type="application/ld+json"]')]
        .map((element) => {
          try {
            return JSON.parse(element.textContent || "null");
          } catch {
            return null;
          }
        })
        .find((value) => value?.["@type"] === "Article");

      if (!content || !title || !excerpt) {
        throw new Error(`Unable to extract public article ${slug}`);
      }

      return {
        _id: `outrank-live-${slug}`,
        _type: "blogPost",
        title,
        slug: { _type: "slug", current: slug },
        excerpt: excerpt.slice(0, 180),
        category,
        tags: [category],
        publishedAt: articleSchema?.datePublished || new Date().toISOString(),
        updatedAt: articleSchema?.dateModified || undefined,
        featuredImageUrl: featuredImage,
        body: convertHtml(content),
        author: "Axis Meter Solutions",
        readingTimeMinutes: readingTime(content),
        source: "outrank",
        sourceHtml: content,
        noIndex: false,
      };
    }),
  );
}

const localDocuments = await loadLocalDocuments();
const localSlugs = new Set(localDocuments.map((document) => document.slug.current));
const outrankDocuments = process.env.OUTRANK_BLOG_API_KEY?.trim()
  ? await loadOutrankDocuments(localSlugs)
  : await loadPublicRemoteDocuments(localSlugs);
const documents = [...localDocuments, ...outrankDocuments];

await writeFile(
  outputPath,
  `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`,
  "utf8",
);

console.log(`Prepared ${documents.length} blog posts at ${outputPath}`);
