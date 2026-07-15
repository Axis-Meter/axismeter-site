import "server-only";

import { cache } from "react";
import { unstable_cache } from "next/cache";
import {
  BlogClient,
  type Article as OutrankArticle,
  type ArticleSummary as OutrankArticleSummary,
} from "outrank-next-js-blog";
import { blogPosts, type BlogPostMeta } from "@/data/blogPosts";
import type { BlogArticle, BlogPostSummary } from "@/lib/blog-types";
import { getSanityBlogArticle, getSanityBlogPostSummaries } from "@/lib/sanity-blog";

const OUTRANK_REVALIDATE_SECONDS = process.env.NODE_ENV === "development" ? 1 : 86_400;
const OUTRANK_ARTICLE_PAGE_SIZE = 100;
const OUTRANK_API_BASE_URL = "https://outrank.so";

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

const localPostsBySlug = new Map(blogPosts.map((post) => [post.slug, post]));

function toDateOnly(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
}

function toLocalSummary(post: BlogPostMeta): BlogPostSummary {
  return {
    ...post,
    tags: [post.category],
    source: "local",
  };
}

function getOutrankCategory(tags: string[]): string {
  for (const tag of tags) {
    const normalizedTag = tag.toLowerCase();
    const category = knownCategories.get(normalizedTag);
    if (category) return category;

    if (normalizedTag.includes("water")) return "Water";
    if (normalizedTag.includes("electric")) return "Electricity";
    if (normalizedTag.includes("thermal") || normalizedTag.includes("hvac")) {
      return "Thermal & HVAC";
    }
    if (normalizedTag.includes("gas")) return "Gas";
    if (normalizedTag.includes("tenant") || normalizedTag.includes("renter")) {
      return "Tenants & Renters";
    }
    if (normalizedTag.includes("property owner")) return "Property Owners";
    if (normalizedTag.includes("cost") || normalizedTag.includes("saving")) {
      return "Cost Savings";
    }
    if (normalizedTag.includes("submeter")) return "Submetering";
  }

  return "Insights";
}

function toOutrankSummary(article: OutrankArticleSummary): BlogPostSummary {
  const date = toDateOnly(article.created_at);
  const updated = article.updated_at ? toDateOnly(article.updated_at) : undefined;

  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.meta_description,
    category: getOutrankCategory(article.tags),
    date,
    updated: updated && updated !== date ? updated : undefined,
    featuredImage: article.image_url || null,
    tags: article.tags,
    readingTimeMinutes: article.reading_time_minutes,
    source: "outrank",
  };
}

function getOutrankClient(): BlogClient | null {
  const apiKey = process.env.OUTRANK_BLOG_API_KEY?.trim();
  if (!apiKey) return null;

  return new BlogClient(apiKey, {
    baseUrl: OUTRANK_API_BASE_URL,
    timeoutMs: 30_000,
  });
}

const getOutrankArticleSummaries = unstable_cache(
  async (): Promise<OutrankArticleSummary[]> => {
    const client = getOutrankClient();
    if (!client) return [];
    return client.getAllArticles(OUTRANK_ARTICLE_PAGE_SIZE);
  },
  ["outrank-blog-article-summaries"],
  { revalidate: OUTRANK_REVALIDATE_SECONDS },
);

const getOutrankArticle = unstable_cache(
  async (slug: string): Promise<OutrankArticle | null> => {
    const client = getOutrankClient();
    if (!client) return null;
    return client.getArticle(slug);
  },
  ["outrank-blog-article"],
  { revalidate: OUTRANK_REVALIDATE_SECONDS },
);

export const getBlogPostSummaries = cache(async (): Promise<BlogPostSummary[]> => {
  let outrankPosts: BlogPostSummary[] = [];
  let sanityPosts: BlogPostSummary[] = [];

  const [outrankResult, sanityResult] = await Promise.allSettled([
    getOutrankArticleSummaries(),
    getSanityBlogPostSummaries(),
  ]);

  if (outrankResult.status === "fulfilled") {
    outrankPosts = outrankResult.value.map(toOutrankSummary);
  } else {
    console.error(`Unable to load Outrank article summaries: ${outrankResult.reason}`);
  }

  if (sanityResult.status === "fulfilled") {
    sanityPosts = sanityResult.value;
  } else {
    console.error(`Unable to load Sanity article summaries: ${sanityResult.reason}`);
  }

  const postsBySlug = new Map(outrankPosts.map((post) => [post.slug, post]));

  // Existing local URLs remain authoritative until they are explicitly migrated.
  for (const post of blogPosts) {
    postsBySlug.set(post.slug, toLocalSummary(post));
  }

  // A published Sanity document is the editorial source of truth after migration.
  for (const post of sanityPosts) {
    postsBySlug.set(post.slug, post);
  }

  return [...postsBySlug.values()].sort((a, b) => b.date.localeCompare(a.date));
});

export const getBlogArticle = cache(async (slug: string): Promise<BlogArticle | null> => {
  try {
    const sanityPost = await getSanityBlogArticle(slug);
    if (sanityPost) return sanityPost;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`Unable to load Sanity article ${slug}: ${message}`);
  }

  const localPost = localPostsBySlug.get(slug);
  if (localPost) {
    try {
      const contentModule = await import(`@/data/blog-content/${slug}`);
      return {
        ...toLocalSummary(localPost),
        html: contentModule.content,
      };
    } catch (error) {
      console.error(`Unable to load local article: ${slug}`, error);
      return null;
    }
  }

  let outrankArticle: OutrankArticle | null = null;

  try {
    outrankArticle = await getOutrankArticle(slug);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`Unable to load Outrank article ${slug}: ${message}`);
  }

  if (!outrankArticle) return null;

  return {
    ...toOutrankSummary(outrankArticle),
    html: outrankArticle.html,
  };
});
