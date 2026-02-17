import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mixed-Use Property Submetering — Axis Meter Solutions",
  description: "Unified submetering for properties with residential and commercial tenants. One system, one provider, all billing handled.",
};

export default function MixedUsePage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=80"
          alt="Mixed-use development with retail and residential"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Mixed-Use Property{" "}
              <span className="text-accent">Submetering</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Retail on the ground floor, apartments above. Different tenant types, different billing needs —
              one unified metering system that handles it all.
            </p>
            <div className="mt-10">
              <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">The Mixed-Use Challenge</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Mixed-use buildings are complex. A restaurant on the ground floor uses dramatically more electricity
              and water than a residential unit upstairs. A retail shop has different hours than an office suite.
              Allocating utility costs fairly across different tenant types is nearly impossible without per-unit metering.
            </p>
            <p>
              Axis Meter provides a unified submetering system that handles residential and commercial tenants
              under one platform. Different billing rates, different usage patterns, one seamless system.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">One System for Every Tenant Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏠", title: "Residential Units", description: "Per-unit electricity and water metering with automated monthly billing. Tenants pay for what they use." },
              { icon: "🏪", title: "Retail Spaces", description: "Commercial-rate billing for retail tenants with high-usage tracking and consumption reporting." },
              { icon: "🏢", title: "Office Suites", description: "Accurate per-suite metering for office tenants with different operating hours and consumption patterns." },
              { icon: "📊", title: "Unified Reporting", description: "One dashboard showing consumption across all tenant types. Compare, analyze, and manage from a single platform." },
              { icon: "💧", title: "Free Leak Detection", description: "Protect the entire building — residential, commercial, and common areas — with leak sensors included at no cost." },
              { icon: "💰", title: "$0 Upfront", description: "Whether you have 8 retail units and 40 apartments, or any combination — Axis owns all equipment. You pay nothing." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simplify Your Mixed-Use Billing</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and we&apos;ll show you how one submetering system can handle every tenant in your building.
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
