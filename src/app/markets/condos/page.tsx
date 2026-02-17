import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submetering for Condominiums — Axis Meter Solutions",
  description: "Lower condo maintenance fees with per-unit submetering. New construction and retrofit options with $0 upfront and free leak detection.",
};

const benefits = [
  { icon: "📉", title: "Lower Maintenance Fees", description: "When utility costs are billed per-unit instead of included in common expenses, maintenance fees drop — making units more attractive to buyers." },
  { icon: "📈", title: "Higher Resale Value", description: "Condos with submetering command higher prices. Lower maintenance fees and individual billing are major selling points." },
  { icon: "🌿", title: "ESG & Green Building Compliance", description: "Per-unit metering supports green building certifications and ESG reporting requirements that are increasingly important to buyers and boards." },
  { icon: "⚖️", title: "Fair, Transparent Billing", description: "No more arguing about utility allocation. Each owner pays for what they use — period." },
  { icon: "💧", title: "Free Leak Detection", description: "Every install includes leak and flood sensors. Protect common areas and individual units from water damage." },
  { icon: "💰", title: "$0 Upfront for the Corporation", description: "Axis owns all equipment. The condo corporation pays nothing to install — no special assessment needed." },
];

export default function CondosPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern condominium tower with glass facade"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Submetering for{" "}
              <span className="text-accent">Condominiums</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Lower maintenance fees, fairer billing, and higher resale values. Whether you&apos;re building
              new or retrofitting, submetering transforms how your condo manages utilities.
            </p>
            <div className="mt-10">
              <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New vs Retrofit */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">New Construction or Retrofit — We Do Both</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏗️ New Construction</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Working with your engineers and trades from the design phase. Meters are installed during construction,
                integrated into the electrical and plumbing systems before drywall goes up.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Lower installation cost during build</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Cleaner integration with building systems</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Marketing advantage for presale units</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Retrofit</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Already built? No problem. We retrofit existing condos with minimal disruption. Meters are
                installed in electrical panels and on water lines with typically just 1-2 days of access needed.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Minimal disruption to residents</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> No special assessment needed ($0 upfront)</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Start saving within weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Benefits for Condo Corporations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Lower Your Maintenance Fees?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation for your condo corporation. We&apos;ll assess your building and show you exactly how submetering can reduce costs.
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
