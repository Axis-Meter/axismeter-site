export type BlogPostSource = "local" | "outrank" | "sanity";

export type SanityBodyBlock = {
  _type: string;
  _key?: string;
  [key: string]: unknown;
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  category: string;
  date: string;
  updated?: string;
  featuredImage: string | null;
  tags: string[];
  readingTimeMinutes?: number;
  source: BlogPostSource;
};

export type BlogArticle = BlogPostSummary & {
  html?: string;
  body?: SanityBodyBlock[];
  noIndex?: boolean;
};
