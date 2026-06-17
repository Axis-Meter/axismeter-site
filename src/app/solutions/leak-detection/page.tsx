import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Leak Detection for Submetered Buildings | Axis Meter",
  description: "Every Axis Meter install includes free leak and flood detection. Real-time monitoring, instant alerts, and protection against $50K+ water damage.",
  alternates: {
    canonical: "/solutions/leak-detection",
  },
};

const stats = [
  { value: "$50K+", label: "Average cost of a single undetected water leak" },
  { value: "93%", label: "Of water damage is preventable with early detection" },
  { value: "$0", label: "What you pay for leak detection with Axis Meter" },
];

const features = [
  { icon: "📡", title: "Real-Time Monitoring", description: "Sensors monitor your building 24/7, detecting water where it shouldn't be — under sinks, near water heaters, in mechanical rooms, and along supply lines." },
  { icon: "🔔", title: "Instant Alerts", description: "The moment a leak or flood is detected, you get an immediate notification. No waiting for a tenant to report it, no discovering damage weeks later." },
  { icon: "📊", title: "Consumption Anomaly Detection", description: "Water meters can flag units with unusually high consumption — often the first sign of a running toilet, dripping faucet, or hidden pipe leak." },
  { icon: "📱", title: "Remote Monitoring", description: "Monitor your building's water status from anywhere. Get alerts on your phone, review data online, and respond to issues before they escalate." },
  { icon: "🏗️", title: "Strategic Sensor Placement", description: "We install sensors in the highest-risk areas: near water heaters, under sinks, in laundry rooms, mechanical rooms, and building common areas." },
  { icon: "🔄", title: "Ongoing Maintenance", description: "Axis owns and maintains all leak detection equipment. Sensor batteries, replacements, and system updates are all included." },
];

const reasons = [
  { icon: "💰", title: "Financial Protection", description: "Water damage is the #1 property insurance claim. A single leak can cost $50,000+ in repairs, remediation, and lost rent. Early detection turns a potential disaster into a minor inconvenience." },
  { icon: "🏠", title: "Property Preservation", description: "Water damage causes mold, structural deterioration, and long-term building health issues. Catching leaks early preserves your asset and its value." },
  { icon: "📋", title: "Insurance Benefits", description: "Many insurance companies offer reduced premiums for buildings with active leak detection systems. Your Axis Meter system could pay for itself in premium savings alone." },
  { icon: "😊", title: "Tenant Satisfaction", description: "Nobody wants to live with water damage. Proactive leak detection means faster response, less disruption, and happier tenants who stay longer." },
];

export default function LeakDetectionPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Leak Detection", url: "https://axismeter.com/solutions/leak-detection" }]} />
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1585704032915-c3400ca199e7.jpg"
          alt="Water damage prevention with leak detection sensors"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-navy text-sm font-bold px-4 py-1 rounded-full mb-6">
              FREE WITH EVERY INSTALL
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Leak & Flood Detection{" "}
              <span className="text-accent">That Could Save You $50,000</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Every Axis Meter installation includes leak and flood detection at no extra cost.
              Not as an upsell. Not as an add-on. It&apos;s standard — because we think protecting
              your building shouldn&apos;t be optional.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center">
                Get Protected — Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-light border-y border-navy-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/hero/photo-1585704032915-c3400ca199e7.jpg"
              alt="Water damage that could be prevented with leak detection"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
            Water Damage Is the #1 Property Insurance Claim
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              A burst pipe in an unoccupied unit. A slow leak behind a wall. A water heater that fails overnight.
              These scenarios play out every day in multi-unit buildings — and when they do, the costs are devastating.
            </p>
            <p>
              The average water damage claim costs over $50,000. That includes remediation, repairs, mold treatment,
              displaced tenants, and lost rental income. And the worst part? Most of this damage is completely preventable
              with early detection.
            </p>
            <p className="font-semibold text-gray-900">
              That&apos;s exactly why Axis Meter includes leak detection with every single installation — at no additional cost.
              No other submetering company does this.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">How the System Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Why Leak Detection Matters for Property Owners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-6">
                <div className="text-4xl shrink-0">{r.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">No Other Submetering Company Does This</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            The big submetering companies either don&apos;t offer leak detection, or charge extra for it.
            At Axis Meter, it&apos;s included free with every installation — electricity or water. Because
            protecting your building shouldn&apos;t be a premium add-on.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div className="bg-navy-light rounded-xl p-6 border border-navy-lighter">
              <h3 className="font-semibold text-gray-400 mb-4">Other Companies</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Leak detection not offered</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Charged as add-on if available</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Basic sensors only</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Separate vendor required</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-6 border border-accent">
              <h3 className="font-semibold text-accent mb-4">Axis Meter</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Free with every install</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Real-time monitoring & alerts</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Strategic sensor placement</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Maintained by Axis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Protect Your Building. It&apos;s Free.</h2>
          <p className="mt-6 text-lg text-gray-600">
            Every Axis Meter installation comes with leak and flood detection at no additional cost.
            Book a free consultation to learn how we can protect your property.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-4 text-gray-500 text-sm">No obligation · 15-30 minute call · US & Canada</p>
        </div>
      </section>
    </>
  );
}
