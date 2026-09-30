'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { filterHelpArticles, type HelpSummary } from '@/lib/help-content';

export default function HelpCentre({ articles }: { articles: HelpSummary[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const categories = useMemo(() => [...new Set(articles.map((article) => article.category))].sort(), [articles]);
  const filtered = useMemo(() => filterHelpArticles(articles, query, category), [articles, query, category]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold text-navy">AXIS METER HELP CENTRE</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">How can we help?</h1>
        <p className="mt-5 text-lg text-gray-600">Find clear instructions and video guides for your account and utility service.</p>
        <label htmlFor="help-search" className="mt-8 block text-sm font-medium">Search help articles</label>
        <div className="relative mt-2">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-3.5 h-5 w-5 text-gray-600"><circle cx="10.5" cy="10.5" r="7.5" /><path d="m16 16 5 5" /></svg>
          <input id="help-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try password, payment or moving…" className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-navy" />
        </div>
      </div>
      <div aria-label="Filter articles by category" className="my-8 flex flex-wrap gap-2">
        {['', ...categories].map((value) => (
          <button key={value} type="button" onClick={() => setCategory(value)} aria-pressed={category === value} className={`rounded-full border px-4 py-2 text-sm font-medium ${category === value ? 'border-navy bg-navy text-gray-50' : 'border-gray-200 bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
            {value || 'All topics'}
          </button>
        ))}
      </div>
      <p role="status" className="mb-4 text-sm text-gray-600">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <Link key={article.slug} href={`/help/${article.slug}`} className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy">
            <div className="flex items-center justify-between gap-3 text-xs font-medium text-gray-600">
              <span>{article.category}</span>
              <span className="flex items-center gap-1.5">{article.hasVideo ? 'Video guide' : 'Article'}</span>
            </div>
            <h2 className="mt-5 text-xl font-semibold">{article.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{article.summary}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-navy">Read guide →</span>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="rounded-xl border border-gray-200 p-8">
          <h2 className="text-lg font-semibold">{articles.length ? 'No matching articles' : 'Help articles are on their way'}</h2>
          <p className="mt-2 text-gray-600">{articles.length ? 'Try another search or browse all topics.' : 'Our team can help with your account in the meantime.'}</p>
          {(query || category) && <button type="button" onClick={() => { setQuery(''); setCategory(''); }} className="mt-4 text-sm font-medium text-navy underline">Clear filters</button>}
        </div>
      )}
      <aside className="mt-12 rounded-xl bg-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Need more help?</h2>
        <p className="mt-2 text-gray-600">Contact us at <a href="mailto:info@axismeter.com" className="text-gray-900 underline">info@axismeter.com</a> or <a href="tel:+12267025500" className="whitespace-nowrap text-gray-900 underline">226-702-5500</a>.</p>
      </aside>
    </div>
  );
}
