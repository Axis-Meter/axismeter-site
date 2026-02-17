import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Axis Meter Solutions",
  description: "Built by a real estate investor who got tired of overpaying for utilities. Meet the team behind Axis Meter Solutions.",
};

const values = [
  { icon: "🤝", title: "Personal Service", description: "You talk to real people — not a call center. We're a founder-led company, and we treat every building like it's our own." },
  { icon: "💧", title: "Leak Detection Included", description: "Every single install includes free leak and flood detection. No upsell, no add-on. It's just how we do business." },
  { icon: "💰", title: "$0 Upfront", description: "We own and maintain all equipment. You pay nothing to get started — because we know the ROI speaks for itself." },
  { icon: "📏", title: "Measurement Canada Approved", description: "All our meters are certified and regularly inspected. 100% compliant with every regulation that applies to your building." },
  { icon: "🇺🇸", title: "US & Canada Coverage", description: "We serve property owners across both countries. Most competitors are Canada-only — we go where you need us." },
  { icon: "⚡", title: "Fast Execution", description: "8–10 weeks from agreement to live meters. We don't drag things out because we know every month without submetering costs you money." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Built by an Investor,{" "}
              <span className="text-accent">for Investors</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Axis Meter wasn&apos;t started by a utility company. It was started by a real estate investor
              who got tired of watching utility costs eat into his returns — and decided to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Story Behind Axis Meter</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Karthik Vasan is a real estate investor. He owns rental properties. And for years, he dealt with the same
                frustration every property owner knows: bulk utility bills that keep climbing while tenants have zero
                incentive to conserve.
              </p>
              <p>
                When he looked into submetering, the options were frustrating. The big companies only wanted to talk if you
                had 200+ units. The process was slow and opaque. And nobody seemed to actually understand the real estate
                business — they were utility companies trying to sell hardware, not partners who understood NOI and cap rates.
              </p>
              <p>
                So Karthik built Axis Meter Solutions. A submetering company designed from the ground up for property owners
                like himself — people who care about the numbers, want straight answers, and don&apos;t have time for corporate
                runaround.
              </p>
              <p>
                The result is a company that does things differently: $0 upfront cost, free leak detection with every install,
                personal service from people who actually understand your business, and a timeline that respects the fact that
                every month without submetering is money left on the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Help property owners stop overpaying for utilities. It&apos;s that simple. We believe every building
            deserves accurate metering, fair billing, and protection against water damage — regardless of size.
          </p>
        </div>
      </section>

      {/* Why Axis Is Different */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Axis Is Different</h2>
            <p className="mt-4 text-lg text-gray-600">We&apos;re not a big utility company. And that&apos;s the point.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-xl p-8">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">A founder-led company with hands-on leadership.</p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-sm text-center">
            <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-accent font-bold">KV</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Karthik Vasan</h3>
            <p className="text-accent font-medium mb-4">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed">
              Real estate investor turned submetering entrepreneur. Karthik built Axis Meter because he
              couldn&apos;t find a submetering partner that understood the property owner&apos;s perspective.
              He brings firsthand experience managing rental properties to every client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold text-gray-900">Measurement Canada Approved</h3>
              <p className="text-sm text-gray-600 mt-2">All meters certified and regularly inspected</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900">100% Regulatory Compliant</h3>
              <p className="text-sm text-gray-600 mt-2">Full compliance with US and Canadian regulations</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900">Insured & Bonded</h3>
              <p className="text-sm text-gray-600 mt-2">Full liability coverage for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s Talk About Your Property</h2>
          <p className="mt-6 text-lg text-gray-300">
            No pressure, no sales pitch. Just a real conversation with someone who understands what you&apos;re dealing with.
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
