import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { helpImageSchema, safeHelpLink, type HelpArticle } from '@/lib/help-content';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="my-4 leading-7 text-gray-600">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-10 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-7 text-xl font-semibold">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 text-gray-600">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-600">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = safeHelpLink(value?.href);
      return href ? <a href={href} className="text-navy underline underline-offset-2">{children}</a> : <>{children}</>;
    },
  },
  types: {
    helpImage: ({ value }) => {
      const parsed = helpImageSchema.safeParse(value);
      if (!parsed.success) return null;
      const image = parsed.data;
      return (
        <figure className="my-8">
          {/* Sanity serves uploaded images directly; no customer assets are used here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.url} alt={image.alt} loading="lazy" className="h-auto max-w-full rounded-lg border border-gray-200" />
          {image.caption && <figcaption className="mt-2 text-sm text-gray-600">{image.caption}</figcaption>}
        </figure>
      );
    },
  },
};

export function ArticleBody({ body }: { body: HelpArticle['body'] }) {
  return <PortableText value={body} components={components} />;
}
