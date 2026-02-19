import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Utility Submetering Solutions for Property Owners — Axis Meter Solutions",
  description: "Electricity submetering, water submetering, and free leak detection. Explore our full suite of utility management solutions.",
};

const solutions = [
  {
    icon: "⚡",
    title: "Electricity Submetering",
    href: "/solutions/electricity-submetering",
    description: "Measure and bill each unit for actual electricity consumption. Measurement Canada approved meters with automated data collection and tenant billing.",
    benefits: ["30-40% reduction in consumption", "Automated billing", "Real-time data"],
  },
  {
    icon: "💧",
    title: "Water Submetering",
    href: "/solutions/water-submetering",
    description: "Per-unit water metering that drives conservation, enables fair billing, and identifies leaks before they cause damage.",
    benefits: ["Conservation incentive", "Fair per-unit billing", "Leak identification"],
  },
  {
    icon: "🛡️",
    title: "Leak & Flood Detection",
    href: "/solutions/leak-detection",
    description: "Included FREE with every Axis Meter install. Real-time monitoring that catches leaks before they turn into $50K+ disasters.",
    benefits: ["Free with every install", "Real-time alerts", "Prevent catastrophic damage"],
    highlight: true,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter-site.vercel.app" }, { name: "Solutions", url: "https://axismeter-site.vercel.app/solutions" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
          alt="Smart electrical meter panel and utility management"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Utility Solutions That{" "}
              <span className="text-accent">Actually Work</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Electricity metering, water metering, and leak detection — all managed by Axis, all $0 upfront,
              and all designed to put money back in your pocket.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div
                key={s.href}
                className={`rounded-xl p-8 flex flex-col ${s.highlight ? "bg-navy text-white ring-2 ring-accent" : "bg-gray-50"}`}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-xl">
                  <Image
                    src={s.icon === "⚡" ? "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" : s.icon === "💧" ? "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80" : "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {s.highlight && (
                  <span className="inline-block bg-accent text-navy text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    FREE WITH EVERY INSTALL
                  </span>
                )}
                <h2 className={`text-2xl font-bold mb-4 ${s.highlight ? "text-white" : "text-gray-900"}`}>{s.title}</h2>
                <p className={`leading-relaxed mb-6 ${s.highlight ? "text-gray-300" : "text-gray-600"}`}>{s.description}</p>
                <ul className="space-y-2 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className={`flex items-center gap-2 ${s.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      <span className="text-accent">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={s.href}
                    className={`font-semibold px-6 py-3 rounded-lg transition-colors inline-block ${
                      s.highlight
                        ? "bg-accent hover:bg-accent-dark text-navy"
                        : "bg-navy hover:bg-navy-light text-white"
                    }`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Not Sure What You Need?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and we&apos;ll recommend the right solution for your property. No obligation, no pressure.
          </p>
          <div className="mt-10">
            <Link
              href="/property-owners"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
