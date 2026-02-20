import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Property Submetering — Office & Retail — Axis Meter Solutions",
  description: "Recover tenant utility costs in office, retail, and commercial properties. Per-tenant billing with $0 upfront and free leak detection.",
};

const benefits = [
  { icon: "💰", title: "Full Cost Recovery", description: "Bill each commercial tenant for their actual electricity and water usage. Stop absorbing utility costs that should be passed through." },
  { icon: "📊", title: "Tenant Accountability", description: "When tenants see their consumption, they manage it. Submetering creates natural incentives for energy-conscious behavior." },
  { icon: "⚙️", title: "Operational Efficiency", description: "Automated meter reads and billing eliminate manual processes. Less admin work, fewer disputes, more accurate numbers." },
  { icon: "💧", title: "Free Leak Detection", description: "Protect your commercial property from water damage with leak and flood sensors included at no cost with every install." },
  { icon: "📈", title: "Higher Property Value", description: "Lower operating costs and accurate utility recovery make your property more valuable and attractive to potential buyers." },
  { icon: "💵", title: "$0 Upfront", description: "Axis owns all metering equipment. No capital expenditure — start recovering costs immediately." },
];

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Markets", url: "https://axismeter.com/markets" }, { name: "Commercial", url: "https://axismeter.com/markets/commercial" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1497366216548-37526070297c.jpg"
          alt="Modern commercial office building"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Commercial Property{" "}
              <span className="text-accent">Submetering</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Office buildings, retail spaces, and commercial properties lose thousands every month in unrecovered
              utility costs. Per-tenant submetering fixes that — and we include free leak detection with every install.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">The Commercial Utility Problem</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              In many commercial properties, utility costs are either included in the lease or allocated using
              rough estimates. This means some tenants pay too much, others pay too little, and the property
              owner often absorbs the difference.
            </p>
            <p>
              Per-tenant submetering gives you accurate data to bill each tenant fairly — whether it&apos;s a
              restaurant using heavy HVAC, a retail shop with extended hours, or an office suite with server rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Benefits for Commercial Properties</h2>
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

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Start Recovering Utility Costs</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and find out how much you could recover with per-tenant utility billing.
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
