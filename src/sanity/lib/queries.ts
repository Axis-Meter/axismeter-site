import { defineQuery } from "next-sanity";

export const blogPostSummariesQuery = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    coalesce(noIndex, false) == false
  ] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    seoTitle,
    category,
    tags,
    publishedAt,
    updatedAt,
    "featuredImage": coalesce(featuredImage.asset->url, featuredImageUrl),
    readingTimeMinutes
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    seoTitle,
    category,
    tags,
    publishedAt,
    updatedAt,
    "featuredImage": coalesce(featuredImage.asset->url, featuredImageUrl),
    readingTimeMinutes,
    noIndex,
    body[]{
      ...,
      _type == "articleImage" => {
        ...,
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height
      }
    }
  }
`);
