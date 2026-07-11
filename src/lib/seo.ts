import type { Metadata } from "next";

export const SITE_URL = "https://www.axismeter.com";
export const DEFAULT_SOCIAL_IMAGE = "/images/logo-blue.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) {
    const url = new URL(pathOrUrl);

    if (url.hostname === "axismeter.com") {
      url.hostname = "www.axismeter.com";
    }

    return url.toString();
  }

  return new URL(pathOrUrl, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const openGraphImage =
    image === DEFAULT_SOCIAL_IMAGE
      ? {
          url: imageUrl,
          width: 1280,
          height: 227,
          alt: title,
        }
      : {
          url: imageUrl,
          alt: title,
        };

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Axis Meter Solutions",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
