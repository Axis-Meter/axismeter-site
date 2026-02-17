import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Blog — Axis Meter Solutions",
  description:
    "Expert insights on utility submetering, property management, landlord-tenant utility agreements, and more.",
};

export default function BlogPage() {
  return (
    <div className="bg-navy min-h-screen">
      {/* Hero section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-400">
              Expert insights on utility submetering, property management, and
              maximizing your real estate investment returns.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-navy-light border border-navy-lighter rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-gray-500 text-xs">{post.date}</time>
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-medium mt-4">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
