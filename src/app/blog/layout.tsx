import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Axis Meter Solutions",
  description: "Insights on submetering, utility management, leak detection, and property investment from the Axis Meter team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
