export type BlogPostSource = "local" | "outrank";

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  featuredImage: string | null;
  tags: string[];
  readingTimeMinutes?: number;
  source: BlogPostSource;
};

export type BlogArticle = BlogPostSummary & {
  html: string;
};
