import { z } from 'zod';

export const helpSlugSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(96);
const assetUrl = z.string().url().refine((value) => value.startsWith('https://'));
const optionalAsset = assetUrl.nullish();

export function safeHelpLink(value: unknown): string | undefined {
  if (typeof value !== 'string' || /[\s\\]/.test(value)) return undefined;
  if (value.startsWith('/') && !value.startsWith('//')) return value;
  try {
    const url = new URL(value);
    return ['https:', 'mailto:', 'tel:'].includes(url.protocol) ? value : undefined;
  } catch {
    return undefined;
  }
}

export const helpImageSchema = z.object({
  _type: z.literal('helpImage'),
  _key: z.string(),
  url: assetUrl,
  alt: z.string(),
  caption: z.string().nullish(),
});

const textBlock = z.object({
  _type: z.literal('block'),
  _key: z.string(),
  style: z.enum(['normal', 'h2', 'h3']).optional(),
  listItem: z.enum(['bullet', 'number']).optional(),
  level: z.number().int().positive().optional(),
  children: z.array(z.object({
    _type: z.literal('span'), _key: z.string(), text: z.string(), marks: z.array(z.string()).optional(),
  })),
  markDefs: z.array(z.object({ _type: z.literal('link'), _key: z.string(), href: z.string() })).optional(),
});

export const helpSummarySchema = z.object({
  slug: helpSlugSchema,
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  keywords: z.array(z.string()).catch([]),
  searchText: z.string().catch(''),
  hasVideo: z.boolean(),
});
export const helpArticleSchema = helpSummarySchema.extend({
  body: z.array(z.union([textBlock, helpImageSchema])).min(1),
  videoUrl: optionalAsset,
  posterUrl: optionalAsset,
  captionsUrl: optionalAsset,
  noAudio: z.boolean().catch(false),
});

export type HelpSummary = z.infer<typeof helpSummarySchema>;
export type HelpArticle = z.infer<typeof helpArticleSchema>;

export function filterHelpArticles(articles: HelpSummary[], query: string, category: string) {
  const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return articles.filter((article) => {
    if (category && article.category !== category) return false;
    const text = [article.title, article.summary, article.category, ...article.keywords, article.searchText].join(' ').toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  });
}
