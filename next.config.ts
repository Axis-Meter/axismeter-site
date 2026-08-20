import type { NextConfig } from "next";

// Set by the `cf:*` scripts so the Cloudflare Workers build can differ from the
// Vercel build. It is never set on Vercel, so Vercel behaviour is unchanged.
const isCloudflareBuild = process.env.CF_WORKERS_BUILD === "1";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    // Workers has no built-in Next image optimizer and the Cloudflare Images
    // binding is paid-plan only, so the preview serves originals from
    // /public and from the Sanity/Unsplash CDNs directly.
    unoptimized: isCloudflareBuild,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      // Core submetering cluster — one authoritative pillar URL.
      {
        source: "/blog/what-is-submetered",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/what-does-submetered-mean",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-sub-meter",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/what-is-submetering",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/sub-meter",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/utility-submetering",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/sub-utility-solutions",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/resources/submetering-101",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      // Send legacy Webflow URLs directly to the pillar to avoid redirect chains.
      {
        source: "/post/what-is-submetered",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/what-does-submetered-mean",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/what-is-a-sub-meter",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/what-is-submetering",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/sub-meter",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/utility-submetering",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/post/sub-utility-solutions",
        destination: "/blog/what-is-a-submeter-and-how-does-it-work",
        permanent: true,
      },
      // Preserve old Webflow URL structure
      {
        source: "/post/:slug",
        destination: "https://www.axismeter.com/blog/:slug",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "axismeter.com" }],
        destination: "https://www.axismeter.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "axismeter-site.vercel.app" }],
        destination: "https://www.axismeter.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Keep non-production deployments (Vercel previews and the workers.dev
    // preview) out of search indexes.
    if (process.env.VERCEL_ENV !== "preview" && !isCloudflareBuild) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
