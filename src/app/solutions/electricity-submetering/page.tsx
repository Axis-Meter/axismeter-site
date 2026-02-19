import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electricity Submetering Services for US & Canada — Axis Meter Solutions",
  description: "Measure and bill each unit for actual electricity use. Measurement Canada approved meters, 30-40% consumption reduction, $0 upfront.",
};

const benefits = [
  { icon: "📉", title: "30-40% Consumption Reduction", description: "When tenants pay for what they use, they use less. Industry data shows submetered buildings see 30-40% lower electricity consumption." },
  { icon: "🎯", title: "Accurate Per-Unit Billing", description: "No more estimates or square footage allocations. Every unit gets billed for exactly what they consume, down to the kilowatt-hour." },
  { icon: "📊", title: "Automated Data Collection", description: "Meters transmit data automatically — no manual reads, no site visits. Real-time consumption data available 24/7." },
  { icon: "✅", title: "Measurement Canada Approved", description: "Every meter is certified, inspected, and fully compliant with Canadian and US regulations. No compliance risk." },
  { icon: "💰", title: "$0 Upfront Cost", description: "Axis owns and maintains all equipment during the agreement term. Zero capital expenditure for you." },
  { icon: "💧", title: "Free Leak Detection Included", description: "Every electricity submetering install also includes leak and flood detection sensors at no extra cost." },
];

const steps = [
  { step: "1", title: "Meter Installation", description: "Certified meters are installed in each unit's electrical panel. We coordinate with your electrician and handle all regulatory requirements." },
  { step: "2", title: "Data Transmission", description: "Meters automatically transmit consumption data to our billing platform. No manual reads, no site visits needed." },
  { step: "3", title: "Tenant Billing", description: "We generate and send accurate monthly bills to each tenant based on actual usage. You recover costs from day one." },
];

export default function ElectricitySubmeteringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Electricity Submetering", url: "https://axismeter.com/solutions/electricity-submetering" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Electrical panel with smart meters for submetering"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Electricity Submetering{" "}
              <span className="text-accent">That Pays for Itself</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Stop subsidizing tenant electricity. Per-unit metering with Measurement Canada approved equipment,
              automated billing, and 30-40% average consumption reduction.
            </p>
            <div className="mt-10">
              <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">How Electricity Submetering Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-navy font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6">{s.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Benefits for Property Owners</h2>
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

      {/* Who It's For */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Who Is Electricity Submetering For?</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4 text-left">
              <p>Electricity submetering is ideal for any multi-unit property where the owner currently pays the bulk electricity bill. That includes:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Apartment buildings (5-200+ units)</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Condominiums (new construction and retrofit)</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Commercial properties (office, retail, mixed-use)</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Student housing and university residences</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Affordable and subsidized housing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Stop Subsidizing Electricity?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Get a free assessment of your building and find out how much you could recover with per-unit electricity billing.
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
