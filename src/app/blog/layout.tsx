import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog — Axis Meter Solutions",
  description: "Insights on submetering, utility management, leak detection, and property investment from the Axis Meter team.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
