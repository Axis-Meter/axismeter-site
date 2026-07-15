import "server-only";

import { cache } from "react";
import type { BlogArticle, BlogPostSummary, SanityBodyBlock } from "@/lib/blog-types";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostBySlugQuery, blogPostSummariesQuery } from "@/sanity/lib/queries";

export const SANITY_BLOG_CACHE_TAG = "sanity-blog";

const SANITY_REVALIDATE_SECONDS = process.env.NODE_ENV === "development" ? 1 : 3_600;

type SanityPostRecord = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  category?: string;
  tags?: string[];
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: string;
  readingTimeMinutes?: number;
  noIndex?: boolean;
  body?: SanityBodyBlock[];
};

function toDateOnly(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value.slice(0, 10) : date.toISOString().slice(0, 10);
}

function toSummary(post: SanityPostRecord): BlogPostSummary {
  const date = toDateOnly(post.publishedAt) || new Date().toISOString().slice(0, 10);
  const updated = toDateOnly(post.updatedAt);

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    seoTitle: post.seoTitle,
    category: post.category || "Insights",
    date,
    updated: updated && updated !== date ? updated : undefined,
    featuredImage: post.featuredImage || null,
    tags: post.tags || [],
    readingTimeMinutes: post.readingTimeMinutes,
    source: "sanity",
  };
}

export const getSanityBlogPostSummaries = cache(async (): Promise<BlogPostSummary[]> => {
  const posts = await sanityClient.fetch<SanityPostRecord[]>(
    blogPostSummariesQuery,
    {},
    {
      next: {
        revalidate: SANITY_REVALIDATE_SECONDS,
        tags: [SANITY_BLOG_CACHE_TAG],
      },
    },
  );

  return posts.map(toSummary);
});

export const getSanityBlogArticle = cache(
  async (slug: string): Promise<BlogArticle | null> => {
    const post = await sanityClient.fetch<SanityPostRecord | null>(
      blogPostBySlugQuery,
      { slug },
      {
        next: {
          revalidate: SANITY_REVALIDATE_SECONDS,
          tags: [SANITY_BLOG_CACHE_TAG, `${SANITY_BLOG_CACHE_TAG}:${slug}`],
        },
      },
    );

    if (!post?.body) return null;

    return {
      ...toSummary(post),
      body: post.body,
      noIndex: post.noIndex,
    };
  },
);
