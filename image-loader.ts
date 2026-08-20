// Custom next/image loader for the Cloudflare cutover build.
//
// Only active when CF_ZONE_IMAGES=1 is set at build time (see next.config.ts).
// It requires image transformations to be enabled on the axismeter.com zone,
// so it is deliberately NOT used for the workers.dev preview, which has no
// zone in front of it and would 404 on /cdn-cgi/image/.
//
// A custom loader bypasses `images.remotePatterns`, so each source is routed
// explicitly and anything unrecognised is passed through untouched.

type ImageLoaderArgs = {
  src: string;
  width: number;
  quality?: number;
};

const DEFAULT_QUALITY = 75;

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderArgs): string {
  const q = quality ?? DEFAULT_QUALITY;

  // Sanity resizes on its own CDN. Using it keeps blog imagery off the zone's
  // transformation quota and avoids a second hop through Cloudflare.
  if (src.startsWith("https://cdn.sanity.io/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(q));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }

  // Same-origin assets (everything under /public) go through the zone.
  if (src.startsWith("/")) {
    return `/cdn-cgi/image/width=${width},quality=${q},format=auto${src}`;
  }

  // Unknown remote host: serve the original. Routing it through
  // /cdn-cgi/image/ would need the origin allowlisted on the zone first.
  return src;
}
