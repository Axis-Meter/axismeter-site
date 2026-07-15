import "server-only";

import { htmlToBlocks } from "@portabletext/block-tools";
import { Schema } from "@sanity/schema";
import { JSDOM } from "jsdom";
import type { SanityBodyBlock } from "@/lib/blog-types";

const compiledSchema = Schema.compile({
  name: "axisBlogImport",
  types: [
    {
      name: "blockContent",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bulleted list", value: "bullet" },
            { title: "Numbered list", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                fields: [
                  { name: "href", type: "string" },
                  { name: "openInNewTab", type: "boolean" },
                ],
              },
            ],
          },
        },
        {
          name: "externalImage",
          type: "object",
          fields: [
            { name: "url", type: "string" },
            { name: "alt", type: "string" },
            { name: "caption", type: "string" },
          ],
        },
      ],
    },
  ],
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
