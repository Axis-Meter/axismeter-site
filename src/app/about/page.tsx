import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us — Axis Meter Solutions",
  description: "Axis Meter Solutions provides full-service utility submetering across the US and Canada. Measurement Canada approved. $0 upfront. Free leak detection included.",
  path: "/about",
});

const values = [
  { icon: "📏", title: "Measurement Canada Approved", description: "All meters are certified, inspected, and fully compliant with regulatory standards across the US and Canada." },
  { icon: "💧", title: "Leak & Flood Detection Included", description: "Every installation includes leak and flood detection sensors at no extra cost — protecting properties from costly water damage." },
  { icon: "💰", title: "$0 Capital Expenditure", description: "Axis Meter owns and maintains all equipment during the agreement term. Property owners pay nothing upfront to get started." },
  { icon: "⚡", title: "8–10 Week Implementation", description: "From signed agreement to live meters in 8–10 weeks. A streamlined process designed to minimize disruption to your operations." },
  { icon: "🤝", title: "Collaborative Approach", description: "We work directly with your engineering teams, property managers, and electricians to design optimal metering configurations." },
  { icon: "🇺🇸", title: "US & Canada Coverage", description: "Full-service submetering across both countries — residential, commercial, and mixed-use properties of all sizes." },
];

const partners = [
  { name: "Next Century", description: "Smart Metering", logo: "/images/partners/nextcentury.svg" },
  { name: "GWF", description: "Water Meters", logo: "/images/partners/gwf.svg" },
  { name: "Accuenergy", description: "Power Meters", logo: "/images/partners/accuenergy.png" },
  { name: "Triacta", description: "Energy Metering", logo: "/images/partners/triacta.svg" },
  { name: "Elvaco", description: "Metering Solutions", logo: "/images/partners/elvaco.jpg" },
];

const stats = [
  { value: "20yr", label: "Standard Agreement Term" },
  { value: "100%", label: "Regulatory Compliance" },
  { value: "8–10 wk", label: "Implementation Timeline" },
  { value: "$0", label: "Upfront Cost" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "About", url: "https://axismeter.com/about" }]} />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1497366216548-37526070297c.jpg"
          alt="Modern professional office environment"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Full-Service Submetering,{" "}
              <span className="text-accent">Built for Property Owners</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Axis Meter Solutions delivers end-to-end utility submetering across the US and Canada —
              from equipment and installation to billing and compliance. We handle everything so you can
              focus on managing your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-light border-y border-navy-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/hero/photo-1560518883-ce09059eeffa.jpg"
                alt="Property management and utility infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">Our Approach</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Submetering That Understands Real Estate
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Axis Meter Solutions was founded with a single focus: deliver submetering services designed
                  around the needs of property owners — not utility companies.
                </p>
                <p>
                  Our team combines deep real estate expertise with utility infrastructure knowledge. We understand
                  NOI, cap rates, and operating budgets because our approach was shaped by the same challenges
                  property owners face every day.
                </p>
                <p>
                  From multi-family residential to commercial and mixed-use properties, we provide turnkey
                  submetering — equipment, installation, billing, maintenance, and full regulatory compliance —
                  with zero upfront cost to the property owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            To make accurate, fair utility billing accessible to every property — regardless of size.
            We believe submetering should reduce costs, promote conservation, and protect buildings
            from water damage, all without requiring capital investment from property owners.
          </p>
        </div>
      </section>

      {/* Why Axis */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Axis Meter</h2>
            <p className="mt-4 text-lg text-gray-600">A different approach to submetering — designed around your needs.</p>
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

      {/* Technology Partners */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Technology Partners</h2>
            <p className="mt-4 text-lg text-gray-600">
              We deploy industry-leading metering technology from trusted manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {partners.map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-6 shadow-sm text-center flex flex-col items-center justify-center min-h-[140px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={`${p.name} — ${p.description}`} className="h-14 w-auto mb-2" />
                <span className="text-xs text-gray-500 mt-1">{p.description}</span>
              </div>
            ))}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Reduce Your Utility Costs?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Speak with a submetering specialist about your property. No obligation, no pressure.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Book a Free Consultation
            </Link>
          </div>
          <p className="mt-4 text-gray-500 text-sm">US & Canada · Measurement Canada Approved · Fully Certified</p>
        </div>
      </section>
    </>
  );
}
