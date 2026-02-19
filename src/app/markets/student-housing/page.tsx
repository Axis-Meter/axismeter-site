import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Student Housing Submetering — University & College Residences — Axis Meter Solutions",
  description: "Reduce energy waste in student residences with per-unit submetering. Promote conservation awareness while lowering operating costs.",
};

export default function StudentHousingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Markets", url: "https://axismeter.com/markets" }, { name: "Student Housing", url: "https://axismeter.com/markets/student-housing" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
          alt="University campus and student housing buildings"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Student Housing{" "}
              <span className="text-accent">Submetering</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Students waste energy when they don&apos;t pay for it. Per-unit submetering creates awareness,
              drives conservation, and dramatically reduces operating costs for student residences.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">The Student Housing Challenge</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Student residents are often the highest energy consumers in any building portfolio. When utilities are
              included in rent, there&apos;s no incentive to turn off lights, shorten showers, or manage thermostat settings.
            </p>
            <p>
              Per-unit submetering changes that dynamic overnight. When students see their actual consumption and receive
              a bill based on what they use, conservation becomes second nature. It&apos;s one of the most effective energy
              education tools available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Why Submeter Student Housing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📉", title: "Lower Operating Costs", description: "Submetered student buildings see 30-40% reduction in utility consumption. That translates directly to lower costs for the institution." },
              { icon: "🌿", title: "Environmental Responsibility", description: "Universities committed to sustainability goals can demonstrate measurable energy reduction through per-unit metering data." },
              { icon: "🎓", title: "Educational Component", description: "Students learn real-world energy management skills. Many universities use consumption data in environmental science and sustainability curricula." },
              { icon: "💧", title: "Free Leak Detection", description: "Student residences are high-risk for water damage. Our free leak sensors catch problems before they become expensive emergencies." },
              { icon: "📊", title: "Consumption Data & Reporting", description: "Real-time data on building-wide and per-unit consumption supports institutional reporting, sustainability audits, and budget planning." },
              { icon: "💰", title: "$0 Capital Investment", description: "No budget approval needed for equipment. Axis owns everything. The institution starts saving without any upfront cost." },
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

      {/* Testimonial */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-accent text-5xl mb-6">&ldquo;</div>
          <p className="text-xl text-gray-700 leading-relaxed italic mb-6">
            Thanks to Axis, our student residences are now more energy-efficient than ever.
            Students are more aware of their usage, and costs have plummeted.
          </p>
          <div className="font-semibold text-gray-900">Brian T.</div>
          <div className="text-sm text-gray-500">University Housing Coordinator</div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Reduce Energy Waste?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and find out how submetering can lower costs and promote conservation in your student residences.
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
