import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Water Submetering Services with Free Leak Detection — Axis Meter Solutions",
  description: "Per-unit water metering with free leak detection included. Drive conservation, enable fair billing, and catch leaks before they become disasters.",
};

const benefits = [
  { icon: "🌊", title: "Drive Water Conservation", description: "When tenants see their actual water usage, they conserve. Buildings typically see 20-30% reduction in water consumption after submetering." },
  { icon: "⚖️", title: "Fair, Accurate Billing", description: "No more splitting water bills by square footage. Each unit pays for exactly what they use — eliminating disputes and promoting fairness." },
  { icon: "💧", title: "Early Leak Identification", description: "Water meters can flag unusual consumption patterns that indicate running toilets, dripping faucets, or hidden leaks — saving you thousands." },
  { icon: "🛡️", title: "Free Leak Detection Sensors", description: "Every water submetering install includes dedicated leak and flood detection sensors at no extra cost. Real-time alerts if water is detected where it shouldn't be." },
  { icon: "📊", title: "Consumption Analytics", description: "Track water usage across your building in real time. Identify high-consumption units, spot anomalies, and make data-driven decisions." },
  { icon: "💰", title: "$0 Upfront Investment", description: "Axis owns all equipment. You pay nothing to install water meters. The savings start immediately while we handle everything." },
];

export default function WaterSubmeteringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Water Submetering", url: "https://axismeter.com/solutions/water-submetering" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80"
          alt="Water metering infrastructure and plumbing"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Water Submetering with{" "}
              <span className="text-accent">Built-In Leak Protection</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Fair per-unit water billing, conservation incentives, and free leak detection in every install.
              Your water bill goes down while your property stays protected.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">How Water Submetering Works</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Water submeters are installed on each unit&apos;s water supply line to measure individual consumption.
              The meters transmit usage data automatically to our billing platform, and each tenant receives a monthly
              bill based on their actual water use.
            </p>
            <p>
              Combined with our free leak and flood detection sensors, your water submetering system doesn&apos;t just
              save money — it actively protects your building from water damage.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Why Water Submetering Matters</h2>
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

      {/* Leak Detection Tie-In */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-accent text-navy text-sm font-bold px-4 py-1 rounded-full mb-6">INCLUDED FREE</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Leak & Flood Detection Comes Standard</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A single undetected water leak can cause over $50,000 in damage. That&apos;s why every Axis Meter water
              submetering installation includes leak and flood detection sensors at no additional cost.
              No other submetering company includes this as standard.
            </p>
            <Link href="/solutions/leak-detection" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
              Learn About Leak Detection →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start Billing Water Fairly</h2>
          <p className="mt-6 text-lg text-gray-600">
            Get a free building assessment and find out how much you could save with per-unit water billing — plus free leak protection.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
