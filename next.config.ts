import type { NextConfig } from "next";
import { retiredPostRedirects } from "./src/data/retired-posts";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
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
      // Posts retired on 2026-08-20 (see src/data/retired-posts.ts). Both the
      // current and the legacy Webflow URL go to the replacement in one hop.
      ...Object.entries(retiredPostRedirects).flatMap(([slug, destination]) => [
        { source: `/blog/${slug}`, destination, permanent: true },
        { source: `/post/${slug}`, destination, permanent: true },
      ]),
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
    if (process.env.VERCEL_ENV !== "preview") {
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
