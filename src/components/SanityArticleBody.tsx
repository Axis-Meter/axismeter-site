import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  toPlainText,
  type PortableTextComponents,
} from "next-sanity";
import type { SanityBodyBlock } from "@/lib/blog-types";

type LinkValue = { href?: string; openInNewTab?: boolean };
type ImageValue = {
  url?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};
type CalloutValue = { tone?: string; title?: string; text?: string };
type CtaValue = { title?: string; text?: string; buttonLabel?: string; href?: string };
type FaqValue = {
  title?: string;
  items?: Array<{ _key?: string; question?: string; answer?: string }>;
};
type TableValue = {
  title?: string;
  columns?: string[];
  rows?: Array<{ _key?: string; cells?: string[] }>;
};

function headingId(value: unknown) {
  return toPlainText(value as Parameters<typeof toPlainText>[0])
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={headingId(value)}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={headingId(value)}>{children}</h3>,
    h4: ({ children, value }) => <h4 id={headingId(value)}>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent bg-navy-light px-6 py-4 text-gray-200">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const { href = "#", openInNewTab } = (value || {}) as LinkValue;
      if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noreferrer noopener" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    articleImage: ({ value }) => {
      const image = value as ImageValue;
      if (!image.url) return null;
      return (
        <figure className="not-prose my-10">
          <div className="overflow-hidden rounded-2xl border border-navy-lighter bg-navy-light">
            <Image
              src={image.url}
              alt={image.alt || ""}
              width={image.width || 1200}
              height={image.height || 675}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    externalImage: ({ value }) => {
      const image = value as ImageValue;
      if (!image.url) return null;
      return (
        <figure className="not-prose my-10">
          <div className="overflow-hidden rounded-2xl border border-navy-lighter bg-navy-light">
            {/* External Outrank hosts are not predictable enough for next/image allowlisting. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.alt || ""}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    callout: ({ value }) => {
      const callout = value as CalloutValue;
      const border = callout.tone === "important" ? "border-amber-400/50" : "border-accent/40";
      return (
        <aside className={`not-prose my-8 rounded-2xl border ${border} bg-navy-light p-6`}>
          {callout.title ? (
            <h3 className="text-lg font-bold text-white">{callout.title}</h3>
          ) : null}
          <p className="mt-2 leading-relaxed text-gray-300">{callout.text}</p>
        </aside>
      );
    },
    articleCta: ({ value }) => {
      const cta = value as CtaValue;
      const href = cta.href || "/contact";
      return (
        <aside className="not-prose my-10 rounded-2xl border border-accent/30 bg-gradient-to-br from-navy-light to-navy-lighter p-8">
          <h3 className="text-2xl font-bold text-white">{cta.title}</h3>
          {cta.text ? <p className="mt-3 text-gray-300">{cta.text}</p> : null}
          <Link
            href={href}
            className="mt-6 inline-flex rounded-lg bg-accent px-5 py-3 font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            {cta.buttonLabel || "Learn more"}
          </Link>
        </aside>
      );
    },
    faqSection: ({ value }) => {
      const faq = value as FaqValue;
      return (
        <section className="not-prose my-12">
          <h2 className="text-2xl font-bold text-white">
            {faq.title || "Frequently asked questions"}
          </h2>
          <div className="mt-6 space-y-3">
            {faq.items?.map((item, index) => (
              <details
                key={item._key || item.question || index}
                className="group rounded-xl border border-navy-lighter bg-navy-light p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-4 leading-relaxed text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      );
    },
    comparisonTable: ({ value }) => {
      const table = value as TableValue;
      return (
        <section className="not-prose my-10">
          {table.title ? <h3 className="mb-4 text-xl font-bold text-white">{table.title}</h3> : null}
          <div className="overflow-x-auto rounded-xl border border-navy-lighter">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-navy-lighter text-white">
                <tr>
                  {table.columns?.map((column) => (
                    <th key={column} className="px-5 py-4 font-semibold">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-lighter bg-navy-light text-gray-300">
                {table.rows?.map((row, rowIndex) => (
                  <tr key={row._key || rowIndex}>
                    {row.cells?.map((cell, cellIndex) => (
                      <td key={`${row._key || rowIndex}-${cellIndex}`} className="px-5 py-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    },
  },
};

function getHeadings(body: SanityBodyBlock[]) {
  return body.flatMap((block) => {
    if (block._type !== "block" || !["h2", "h3"].includes(String(block.style))) return [];
    const text = toPlainText([block] as Parameters<typeof toPlainText>[0]);
    return text ? [{ id: headingId([block]), text, level: block.style === "h3" ? 3 : 2 }] : [];
  });
}

export function getSanityFaqs(body: SanityBodyBlock[]) {
  return body.flatMap((block) => {
    if (block._type !== "faqSection" || !Array.isArray(block.items)) return [];
    return (block.items as FaqValue["items"] || []).flatMap((item) =>
      item.question && item.answer ? [{ question: item.question, answer: item.answer }] : [],
    );
  });
}

export function SanityArticleBody({ body }: { body: SanityBodyBlock[] }) {
  const headings = getHeadings(body);

  return (
    <>
      {headings.length >= 3 ? (
        <nav className="not-prose mb-10 rounded-2xl border border-navy-lighter bg-navy-light p-6" aria-label="Article contents">
          <p className="font-semibold text-white">In this article</p>
          <ol className="mt-4 space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? "pl-5" : undefined}>
                <a href={`#${heading.id}`} className="text-gray-300 hover:text-accent">
                  {heading.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <PortableText value={body} components={portableTextComponents} />
    </>
  );
}
