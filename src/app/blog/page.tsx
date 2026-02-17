import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Axis Meter Solutions",
  description: "Insights on submetering, utility management, leak detection, and property investment from the Axis Meter team.",
};

const posts = [
  {
    title: "5 Ways Submetering Increases Your Property Value",
    excerpt: "Property value is driven by NOI. Here's how submetering directly impacts your bottom line — and why investors are making it a priority in every acquisition.",
    date: "February 10, 2026",
    category: "Property Investment",
    readTime: "5 min read",
  },
  {
    title: "Why Leak Detection Should Be Standard in Every Building",
    excerpt: "Water damage is the #1 property insurance claim, costing over $50,000 on average. Yet most buildings have zero leak detection. Here's why that needs to change.",
    date: "January 28, 2026",
    category: "Leak Detection",
    readTime: "4 min read",
  },
  {
    title: "Submetering vs RUBS: Which Is Better for Your Property?",
    excerpt: "RUBS allocates costs by formula. Submetering measures actual usage. We break down the pros, cons, and real numbers to help you decide which is right for your building.",
    date: "January 15, 2026",
    category: "Education",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              The Axis Meter{" "}
              <span className="text-accent">Blog</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Insights on submetering, utility management, and property investment from people who actually own buildings.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-navy-lighter h-48 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📝</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Want to Learn More?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Skip the reading and talk to an expert. Book a free consultation and get answers to all your submetering questions.
          </p>
          <div className="mt-10">
            <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
