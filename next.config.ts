import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        destination: "/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/blog/what-does-submetered-mean",
        destination: "/blog/what-is-submetering",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-sub-meter",
        destination: "/blog/what-is-submetering",
        permanent: true,
      },
      // Preserve old Webflow URL structure
      {
        source: "/post/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
