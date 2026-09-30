import 'server-only';
import { cache } from 'react';
import { z } from 'zod';
import { helpArticleSchema, helpSlugSchema, helpSummarySchema } from './help-content';

import { SANITY_PROJECT_ID as PROJECT, SANITY_DATASET as DATASET, SANITY_API_VERSION } from '@/sanity/env';
const REVALIDATE_SECONDS = 60;
const PUBLIC_ARTICLES = '_type == "helpArticle" && archived != true && defined(slug.current)';
const SUMMARY_FIELDS = '"slug": slug.current, title, summary, category, keywords, "searchText": pt::text(body), "hasVideo": defined(video.asset) || defined(videoUrl)';

async function querySanity(query: string, slug?: string): Promise<unknown> {
  if (!/^[a-z0-9]+$/.test(PROJECT) || !/^[a-z0-9_-]+$/.test(DATASET)) {
    throw new Error('Invalid Help Centre content configuration');
  }
  const url = new URL(`https://${PROJECT}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${DATASET}`);
  url.searchParams.set('perspective', 'published');
  url.searchParams.set('query', query);
  if (slug) url.searchParams.set('$slug', JSON.stringify(slug));
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ['help-articles'] },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`Help Centre content request failed (${response.status})`);
  const payload: unknown = await response.json();
  return z.object({ result: z.unknown() }).parse(payload).result;
}

export const getHelpArticles = cache(async () => {
  const result = await querySanity(`*[${PUBLIC_ARTICLES}] | order(title asc) {${SUMMARY_FIELDS}}`);
  return z.array(helpSummarySchema).parse(result);
});

export const getHelpArticle = cache(async (slug: string) => {
  if (!helpSlugSchema.safeParse(slug).success) return null;
  const result = await querySanity(`*[${PUBLIC_ARTICLES} && slug.current == $slug][0] {
    ${SUMMARY_FIELDS},
    body[]{..., _type == "helpImage" => {"url": asset->url}},
    "videoUrl": coalesce(video.asset->url, videoUrl),
    "posterUrl": coalesce(poster.asset->url, posterUrl),
    "captionsUrl": coalesce(captions.asset->url, captionsUrl),
    noAudio
  }`, slug);
  return result === null ? null : helpArticleSchema.parse(result);
});
