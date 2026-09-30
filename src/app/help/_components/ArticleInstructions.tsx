import type { HelpArticle } from '@/lib/help-content';
import { ArticleBody } from './ArticleBody';

function groupSections(body: HelpArticle['body']) {
  const intro: HelpArticle['body'] = [];
  const sections: { id: string; title: string; blocks: HelpArticle['body'] }[] = [];

  for (const block of body) {
    if (block._type === 'block' && block.style === 'h2' && !block.listItem) {
      sections.push({
        id: `guide-section-${sections.length + 1}`,
        title: block.children.map((span) => span.text).join(''),
        blocks: [block],
      });
    } else {
      const section = sections.at(-1);
      if (section) section.blocks.push(block);
      else intro.push(block);
    }
  }

  return { intro, sections };
}

export function ArticleInstructions({ body }: { body: HelpArticle['body'] }) {
  const { intro, sections } = groupSections(body);

  return (
    <div className="mt-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">At your own pace</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">Written instructions</h2>
        <p className="mt-3 text-gray-600">Keep this guide open as you follow along in your account.</p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
        <div className="min-w-0 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-8">
          {intro.length > 0 && <div className={sections.length ? 'mb-8' : undefined}><ArticleBody body={intro} /></div>}
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-label={section.title} className="relative scroll-mt-28 border-b border-gray-200 py-7 first:pt-0 last:border-0 last:pb-0 sm:py-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold tabular-nums text-emerald-900">{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0 flex-1 pt-1"><ArticleBody body={section.blocks} /></div>
              </div>
            </section>
          ))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          {sections.length > 1 && (
            <nav aria-label="In this guide" className="hidden lg:block">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">In this guide</p>
              <ol className="space-y-1 border-l border-gray-200">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="-ml-px flex gap-3 border-l-2 border-transparent py-2.5 pl-4 text-sm leading-5 text-gray-600 transition-colors hover:border-emerald-500 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                      <span aria-hidden="true" className="text-xs tabular-nums text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <a href="https://myaccount.axismeter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-gray-50 transition-colors hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">
            <span>Open My Account<span className="sr-only"> (opens in a new tab)</span></span> <span aria-hidden="true">↗</span>
          </a>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-base font-semibold text-navy">We’re here to help</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">Stuck on a step? Get in touch with our team.</p>
            <a href="mailto:info@axismeter.com" className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-navy underline decoration-emerald-300 underline-offset-4">Email support <span aria-hidden="true">↗</span></a>
            <a href="tel:+12267025500" className="mt-3 block text-sm text-gray-700 hover:underline">226-702-5500</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
