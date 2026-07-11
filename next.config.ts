import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Blog post consolidation — redirect duplicates to main post
      {
        source: "/blog/what-is-submetered",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/blog/what-does-submetered-mean",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-sub-meter",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
        permanent: true,
      },
      // Send legacy Webflow duplicates directly to the consolidated post
      {
        source: "/post/what-is-submetered",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/post/what-does-submetered-mean",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/post/what-is-a-sub-meter",
        destination: "https://www.axismeter.com/blog/what-is-submetering",
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
