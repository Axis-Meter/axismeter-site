import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resources — Utility Submetering Guides | Axis Meter Solutions",
  description:
    "Utility submetering resources, guides, and insights for property owners, managers, and residents.",
  path: "/resources",
});

const featuredResources = [
  {
    title: "Submetering 101",
    href: "/resources/submetering-101",
    description:
      "A complete guide to what utility submetering is, how it works, and why it matters for multi-unit properties.",
  },
  {
    title: "Utility Management Insights",
    href: "/blog",
    description:
      "Articles on utility billing, tenant responsibilities, conservation, and building operating costs.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-semibold text-sm uppercase">Resources</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Utility Submetering Guides and Insights
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
            Practical resources for understanding submetering, utility billing, conservation,
            and cost recovery across residential, commercial, and mixed-use properties.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-sm transition"
              >
                <h2 className="text-xl font-bold text-gray-900">{resource.title}</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{resource.description}</p>
                <span className="mt-5 inline-block text-accent font-semibold">Read more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
