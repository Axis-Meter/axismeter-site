import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Axis Meter for Submetering Consultation Today",
  description:
    "Contact Axis Meter Solutions to discuss utility submetering for your property. Free consultation, $0 upfront, and responses within 1 business day.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
