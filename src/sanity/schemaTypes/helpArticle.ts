import { defineArrayMember, defineField, defineType } from "sanity";

const categories = ["Account access", "Bills and payments", "Moving in and out", "Meters and usage"];

export const helpBody = defineType({
  name: "helpBody",
  title: "Help article content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Paragraph", value: "normal" }, { title: "Heading", value: "h2" }, { title: "Subheading", value: "h3" }],
      lists: [{ title: "Bulleted list", value: "bullet" }, { title: "Numbered list", value: "number" }],
      marks: {
        decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }],
        annotations: [defineArrayMember({
          name: "link", type: "object", title: "Link",
          fields: [defineField({ name: "href", type: "url", title: "URL", validation: (rule) => rule.required().uri({ allowRelative: true, scheme: ["https", "mailto", "tel"] }) })],
        })],
      },
    }),
    defineArrayMember({
      type: "image", name: "helpImage", title: "Image",
      fields: [
        defineField({ name: "alt", title: "Describe the image", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
    }),
  ],
});

export const helpArticle = defineType({
  name: "helpArticle",
  title: "Help Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "slug", title: "Link name", type: "slug", options: { source: "title", maxLength: 96 }, description: "Published at www.axismeter.com/help/ followed by this name. Keep it unchanged after sharing the link.", validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ? true : "Use lowercase letters, numbers and hyphens.") }),
    defineField({ name: "summary", title: "Short summary", type: "text", rows: 3, validation: (rule) => rule.required().max(240) }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: categories }, validation: (rule) => rule.required() }),
    defineField({ name: "keywords", title: "Search keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "body", title: "Instructions", type: "helpBody", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "video", title: "Video (optional)", type: "file", options: { accept: "video/mp4" }, description: "Upload an MP4. Include written instructions above so customers can follow without watching." }),
    defineField({ name: "videoUrl", title: "Existing MP4 URL", type: "url", description: "Optional alternative to uploading. The uploaded video takes priority.", validation: (rule) => rule.uri({ scheme: ["https"] }) }),
    defineField({ name: "poster", title: "Video cover image", type: "image" }),
    defineField({ name: "posterUrl", title: "Existing cover image URL", type: "url", validation: (rule) => rule.uri({ scheme: ["https"] }) }),
    defineField({ name: "captions", title: "English captions (WebVTT)", type: "file", options: { accept: ".vtt,text/vtt" } }),
    defineField({ name: "captionsUrl", title: "Existing caption URL", type: "url", validation: (rule) => rule.uri({ scheme: ["https"] }) }),
    defineField({ name: "noAudio", title: "Video has no audio", type: "boolean", initialValue: false }),
    defineField({ name: "archived", title: "Hide from the Help Centre", type: "boolean", initialValue: false, description: "Publish this change to remove the article from the public Help Centre." }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "poster" } },
});
