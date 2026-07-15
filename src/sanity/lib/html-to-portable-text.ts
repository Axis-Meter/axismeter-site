import "server-only";

import { htmlToBlocks } from "@portabletext/block-tools";
import { Schema } from "@sanity/schema";
import { JSDOM } from "jsdom";
import type { SanityBodyBlock } from "@/lib/blog-types";
import { blockContent } from "@/sanity/schemaTypes/blockContent";

const compiledSchema = Schema.compile({
  name: "axisBlogImport",
  types: [blockContent],
});

const blockContentType = compiledSchema.get("blockContent");

export function htmlToPortableText(html: string): SanityBodyBlock[] {
  const normalizedHtml = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<h1(\s|>)/gi, "<h2$1")
    .replace(/<\/h1>/gi, "</h2>");

  return htmlToBlocks(`<html><body>${normalizedHtml}</body></html>`, blockContentType, {
    parseHtml: (value) => new JSDOM(value).window.document,
    matchers: {
      image: ({ props }) =>
        props.src
          ? {
              _type: "externalImage",
              url: props.src,
              alt: props.alt || "",
            }
          : undefined,
      inlineImage: ({ props }) =>
        props.src
          ? {
              _type: "externalImage",
              url: props.src,
              alt: props.alt || "",
            }
          : undefined,
    },
  }) as SanityBodyBlock[];
}
