import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Article content",
  type: "array",
  of: [
    defineArrayMember({
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
          defineArrayMember({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL or Axis path",
                type: "string",
                description: "Use /contact for Axis pages or a full https:// URL.",
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: "openInNewTab",
                title: "Open in a new tab",
                type: "boolean",
                initialValue: false,
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: "articleImage",
      title: "Article image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
    }),
    defineArrayMember({
      name: "externalImage",
      title: "External image",
      type: "object",
      fields: [
        defineField({
          name: "url",
          title: "Image URL or Axis path",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "alt", title: "Alternative text", type: "string" }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
      preview: {
        select: { title: "alt", subtitle: "url" },
        prepare: ({ title, subtitle }) => ({ title: title || "External image", subtitle }),
      },
    }),
    defineArrayMember({
      name: "callout",
      title: "Callout",
      type: "object",
      fields: [
        defineField({
          name: "tone",
          title: "Style",
          type: "string",
          options: {
            layout: "radio",
            list: [
              { title: "Key takeaway", value: "takeaway" },
              { title: "Information", value: "info" },
              { title: "Important", value: "important" },
            ],
          },
          initialValue: "takeaway",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
          rows: 4,
          validation: (rule) => rule.required(),
        }),
      ],
      preview: {
        select: { title: "title", subtitle: "text" },
        prepare: ({ title, subtitle }) => ({
          title: title || "Callout",
          subtitle,
        }),
      },
    }),
    defineArrayMember({
      name: "articleCta",
      title: "Call to action",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "text", title: "Supporting text", type: "text", rows: 3 }),
        defineField({
          name: "buttonLabel",
          title: "Button label",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "href",
          title: "Button URL or Axis path",
          type: "string",
          initialValue: "/contact",
          validation: (rule) => rule.required(),
        }),
      ],
      preview: {
        select: { title: "title", subtitle: "buttonLabel" },
      },
    }),
    defineArrayMember({
      name: "faqSection",
      title: "FAQ section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section title",
          type: "string",
          initialValue: "Frequently asked questions",
        }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          validation: (rule) => rule.min(1).required(),
          of: [
            defineArrayMember({
              name: "faqItem",
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  title: "Question",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "answer",
                  title: "Answer",
                  type: "text",
                  rows: 4,
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: { select: { title: "question", subtitle: "answer" } },
            }),
          ],
        }),
      ],
      preview: {
        select: { title: "title", items: "items" },
        prepare: ({ title, items }) => ({
          title: title || "Frequently asked questions",
          subtitle: `${items?.length || 0} questions`,
        }),
      },
    }),
    defineArrayMember({
      name: "comparisonTable",
      title: "Comparison table",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "columns",
          title: "Column headings",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          validation: (rule) => rule.min(2).required(),
        }),
        defineField({
          name: "rows",
          title: "Rows",
          type: "array",
          of: [
            defineArrayMember({
              name: "comparisonRow",
              type: "object",
              fields: [
                defineField({
                  name: "cells",
                  title: "Cells",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: { cells: "cells" },
                prepare: ({ cells }) => ({ title: cells?.join(" | ") || "Table row" }),
              },
            }),
          ],
          validation: (rule) => rule.min(1).required(),
        }),
      ],
      preview: {
        select: { title: "title", columns: "columns" },
        prepare: ({ title, columns }) => ({
          title: title || "Comparison table",
          subtitle: columns?.join(" | "),
        }),
      },
    }),
  ],
});
