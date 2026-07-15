import { timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { SANITY_BLOG_CACHE_TAG } from "@/lib/sanity-blog";
import { getSanityWriteClient } from "@/sanity/lib/client";
import { htmlToPortableText } from "@/sanity/lib/html-to-portable-text";

export const runtime = "nodejs";

type OutrankWebhookArticle = {
  id?: string;
  title?: string;
  content_markdown?: string;
  content_html?: string;
  meta_description?: string;
  created_at?: string;
  image_url?: string;
  slug?: string;
  tags?: string[];
  reading_time_minutes?: number;
};

type OutrankWebhookPayload = {
  event_type?: "publish_articles" | "update_article";
  timestamp?: string;
  data?: {
    articles?: OutrankWebhookArticle[];
    article?: OutrankWebhookArticle;
  };
};

const knownCategories = new Map(
  [
    "Cost Savings",
    "Electricity",
    "Gas",
    "Property Owners",
    "Submetering",
    "Tenants & Renters",
    "Thermal & HVAC",
    "Water",
  ].map((category) => [category.toLowerCase(), category]),
);

function isAuthorized(request: NextRequest) {
  const configuredSecret = process.env.OUTRANK_WEBHOOK_SECRET?.trim();
  const authorization = request.headers.get("authorization");
  if (!configuredSecret || !authorization?.startsWith("Bearer ")) return false;

  const suppliedSecret = authorization.slice("Bearer ".length).trim();
  const expected = Buffer.from(configuredSecret);
  const supplied = Buffer.from(suppliedSecret);
  return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

function getCategory(tags: string[]) {
  for (const tag of tags) {
    const normalized = tag.toLowerCase();
    const exact = knownCategories.get(normalized);
    if (exact) return exact;
    if (normalized.includes("water")) return "Water";
    if (normalized.includes("electric")) return "Electricity";
    if (normalized.includes("gas")) return "Gas";
    if (normalized.includes("thermal") || normalized.includes("hvac")) return "Thermal & HVAC";
    if (normalized.includes("tenant") || normalized.includes("renter")) return "Tenants & Renters";
    if (normalized.includes("property owner")) return "Property Owners";
    if (normalized.includes("saving") || normalized.includes("cost")) return "Cost Savings";
    if (normalized.includes("submeter")) return "Submetering";
  }
  return "Insights";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidArticle(article: OutrankWebhookArticle) {
  return Boolean(
    article.title?.trim() &&
      article.slug?.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) &&
      article.meta_description?.trim() &&
      (article.content_html?.trim() || article.content_markdown?.trim()),
  );
}

function articleDocument(
  article: OutrankWebhookArticle,
  webhookTimestamp?: string,
  existingDocumentId?: string,
) {
  if (!isValidArticle(article)) throw new Error("Invalid Outrank article payload");

  const slug = article.slug!.trim();
  const tags = article.tags?.filter((tag): tag is string => typeof tag === "string") || [];
  const html = article.content_html?.trim() || `<p>${escapeHtml(article.content_markdown!.trim())}</p>`;
  const sourceId = (article.id || slug).replace(/[^a-zA-Z0-9_-]/g, "-");
  const now = new Date().toISOString();

  return {
    _id: existingDocumentId || `outrank-${sourceId}`,
    _type: "blogPost",
    title: article.title!.trim(),
    slug: { _type: "slug", current: slug },
    excerpt: article.meta_description!.trim().slice(0, 180),
    category: getCategory(tags),
    tags,
    publishedAt: article.created_at || webhookTimestamp || now,
    updatedAt: now,
    featuredImageUrl: article.image_url || undefined,
    body: htmlToPortableText(html),
    author: "Axis Meter Solutions",
    readingTimeMinutes: article.reading_time_minutes,
    source: "outrank",
    outrankId: article.id,
    sourceHtml: html,
    noIndex: false,
  };
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: OutrankWebhookPayload;
  try {
    payload = (await request.json()) as OutrankWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const articles =
    payload.event_type === "publish_articles"
      ? payload.data?.articles || []
      : payload.event_type === "update_article" && payload.data?.article
        ? [payload.data.article]
        : [];

  if (!articles.length || articles.length > 25) {
    return NextResponse.json({ error: "No supported articles in payload" }, { status: 400 });
  }

  if (!articles.every(isValidArticle)) {
    return NextResponse.json({ error: "Invalid article payload" }, { status: 400 });
  }

  try {
    const writeClient = getSanityWriteClient();
    const slugs = articles.map((article) => article.slug!.trim());
    const existingDocuments = await writeClient.fetch<Array<{ _id: string; slug: string }>>(
      `*[_type == "blogPost" && slug.current in $slugs] | order(_updatedAt desc) {
        _id,
        "slug": slug.current
      }`,
      { slugs },
    );
    const existingIdBySlug = new Map<string, string>();
    for (const document of existingDocuments) {
      if (!existingIdBySlug.has(document.slug)) {
        existingIdBySlug.set(document.slug, document._id);
      }
    }

    const documents = articles.map((article) => {
      const slug = article.slug!.trim();
      return articleDocument(article, payload.timestamp, existingIdBySlug.get(slug));
    });
    const transaction = writeClient.transaction();
    for (const document of documents) transaction.createOrReplace(document);
    await transaction.commit();

    revalidateTag(SANITY_BLOG_CACHE_TAG);
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    for (const document of documents) {
      revalidateTag(`${SANITY_BLOG_CACHE_TAG}:${document.slug.current}`);
      revalidatePath(`/blog/${document.slug.current}`);
    }

    return NextResponse.json({
      processed: documents.length,
      slugs: documents.map((document) => document.slug.current),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown ingestion error";
    console.error(`Outrank webhook failed: ${message}`);
    return NextResponse.json({ error: "Unable to ingest articles" }, { status: 500 });
  }
}
