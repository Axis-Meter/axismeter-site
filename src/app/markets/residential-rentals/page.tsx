import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Residential Rental Submetering — Apartments & Multi-Family — Axis Meter Solutions",
  description: "Stop paying your tenants' utility bills. Per-unit submetering for apartment buildings with $0 upfront, free leak detection, and immediate cost recovery.",
};

const benefits = [
  { icon: "💰", title: "Recover $2,000-4,000/Month", description: "A 20-unit apartment building typically loses $2,000-4,000/month in unrecovered utility costs. Submetering puts that money back in your pocket." },
  { icon: "📈", title: "Increase Property Value by 32%", description: "Lower operating costs mean higher NOI, which means higher property value. Submetering is one of the fastest ways to build equity." },
  { icon: "🔄", title: "Seamless Tenant Turnover", description: "When a tenant moves out, we handle final reads and billing. New tenant? We set up their account automatically. Zero work for you." },
  { icon: "💧", title: "Free Leak Detection", description: "Every install includes leak and flood detection sensors at no cost. Protect your building from water damage 24/7." },
  { icon: "💵", title: "$0 Upfront Cost", description: "Axis owns all equipment. No capital expenditure, no surprise costs. You start saving from day one." },
  { icon: "📉", title: "30-40% Lower Consumption", description: "When tenants pay for their own usage, they conserve. That means lower utility costs for the entire building." },
];

export default function ResidentialRentalsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Markets", url: "https://axismeter.com/markets" }, { name: "Residential Rentals", url: "https://axismeter.com/markets/residential-rentals" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="Multi-family apartment building exterior"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Submetering for{" "}
              <span className="text-accent">Residential Rentals</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              You&apos;re paying thousands every month in utility bills that your tenants should be covering.
              Per-unit submetering fixes that — with $0 upfront and free leak detection included.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">The Bulk Billing Problem</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              If you own a 5-200 unit apartment building and you&apos;re still paying the bulk utility bill,
              you already know the problem: your tenants have zero incentive to conserve. They leave lights on,
              run water freely, and crank the heat — because they don&apos;t see the bill.
            </p>
            <p>
              Meanwhile, you&apos;re watching utility costs climb year after year, eating directly into your NOI
              and your property&apos;s value. It doesn&apos;t have to be this way.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Built for Landlords and Property Managers</h2>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Stop Subsidizing Your Tenants&apos; Utilities</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free call and get a custom assessment for your rental property. No obligation, no pressure.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
