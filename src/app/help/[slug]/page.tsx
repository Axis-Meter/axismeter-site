import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHelpArticle } from '@/lib/help-centre';
import { ArticleBody } from '../_components/ArticleBody';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getHelpArticle(slug);
  if (!article) return { title: 'Article not found | Axis Meter Help', robots: { index: false } };
  return { title: `${article.title} | Axis Meter Help`, description: article.summary, alternates: { canonical: `https://www.axismeter.com/help/${article.slug}` } };
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getHelpArticle(slug);
  if (!article) notFound();
  return (
    <article className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <Link href="/help" className="text-sm font-medium text-navy hover:underline">← All help articles</Link>
      <p className="mt-8 text-sm text-gray-600">{article.category}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{article.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">{article.summary}</p>
      {article.videoUrl && (
        <section className="mt-8" aria-label="Video walkthrough">
          <video controls playsInline preload="none" crossOrigin="anonymous" poster={article.posterUrl ?? undefined} aria-label={article.title} className="aspect-video w-full rounded-xl bg-gray-100">
            <source src={article.videoUrl} type="video/mp4" />
            {article.captionsUrl && <track kind="captions" src={article.captionsUrl} srcLang="en" label="English instructions" />}
            Your browser cannot play this video. Follow the written instructions below.
          </video>
          <div className="mt-3 flex flex-wrap justify-between gap-3 text-sm text-gray-600">
            <span>{article.noAudio ? 'On-screen instructions · No audio' : 'Video walkthrough'}</span>
            <a href={article.videoUrl} className="underline">Open video</a>
          </div>
        </section>
      )}
      <div className="mx-auto mt-10 max-w-3xl"><ArticleBody body={article.body} /></div>
      <aside className="mx-auto mt-12 max-w-3xl rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold">Still need help?</h2>
        <p className="mt-2 text-gray-600">Email <a href="mailto:info@axismeter.com" className="text-navy underline">info@axismeter.com</a> or call <a href="tel:+12267025500" className="text-navy underline">226-702-5500</a>.</p>
      </aside>
    </article>
  );
}
