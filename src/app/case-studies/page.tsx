import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Case Studies — Submetering Projects | Axis Meter Solutions",
  description: "See how Axis Meter delivered full-service submetering for multi-unit properties across Ontario. 118-unit building in Niagara Falls, 107-unit retrofit in Kingston, and more.",
  alternates: {
    canonical: "/case-studies",
  },
};

const caseStudies = [
  {
    title: "118-Unit Residential Building",
    location: "Niagara Falls, Ontario",
    type: "Residential — Electricity Submetering",
    image: "/images/hero/photo-1545324418-cc1a3fa10c00.jpg",
    stats: [
      { metric: "118", label: "Residential Units" },
      { metric: "242", label: "Meters Installed" },
      { metric: "$0", label: "Upfront Cost to Owner" },
      { metric: "8 wk", label: "Project Timeline" },
    ],
    overview: "A 118-unit residential building in Niagara Falls was operating on bulk electricity billing, with the property owner absorbing rising utility costs across the entire building. With no per-unit measurement in place, tenants had no visibility into their consumption and no incentive to conserve — driving costs higher year over year.",
    challenge: "The building required a comprehensive electricity submetering solution that could handle 242 individual meter points across 118 units without major disruption to existing tenants. The owner needed a turnkey solution with zero capital outlay and a provider who could manage the full process — from design and permitting through installation, commissioning, and ongoing billing.",
    solution: "Axis Meter designed and deployed a full electricity submetering system across all 118 units, installing 242 Measurement Canada approved meters. The project was executed in coordination with the building's electrical contractor, with Axis managing all regulatory approvals, meter procurement, installation oversight, and system commissioning. Once live, Axis took over automated meter reading, monthly tenant billing, account management, and customer support — a fully managed, end-to-end solution.",
    approach: [
      "Conducted a detailed site assessment of the building's electrical infrastructure",
      "Designed a metering plan covering all 118 units with 242 individual meter points",
      "Coordinated meter installation with the building's electrical contractor",
      "Managed all Measurement Canada approvals and regulatory compliance",
      "Commissioned the system and validated all meter readings",
      "Launched automated monthly billing to all 118 tenants",
      "Provided ongoing account management, customer support, and maintenance",
    ],
  },
  {
    title: "107-Unit Retrofit During Renovation",
    location: "Kingston, Ontario",
    type: "Residential — Retrofit Submetering",
    image: "/images/hero/photo-1460317442991-0ec209397118.jpg",
    stats: [
      { metric: "107", label: "Residential Units" },
      { metric: "294", label: "Meters Installed" },
      { metric: "$0", label: "Upfront Cost to Owner" },
      { metric: "Retrofit", label: "During Renovation" },
    ],
    overview: "A 107-unit residential building in Kingston was undergoing a phased renovation program. The property owner saw an opportunity to implement utility submetering during the renovation process — taking advantage of open walls and active construction to install meters with minimal additional disruption.",
    challenge: "Retrofitting submetering into an occupied building during active renovations required careful coordination. The metering installation needed to align with the renovation schedule, unit by unit, without delaying the construction timeline or causing additional disruption to tenants in non-renovated units. The scope was significant: 294 meters across 107 units, covering multiple utility types.",
    solution: "Axis Meter integrated the submetering installation into the client's existing renovation workflow. As each unit was opened up for renovation, Axis coordinated meter installation alongside the construction crew — installing 294 meters across all 107 units as the renovation progressed. This phased approach meant meters were installed behind fresh walls during the renovation, not as a separate disruptive project.",
    approach: [
      "Aligned the metering rollout with the client's renovation schedule",
      "Designed a phased installation plan coordinated with the construction team",
      "Installed 294 meters across 107 units during suite turnover renovations",
      "Took advantage of open walls for optimal meter placement with minimal disruption",
      "Managed all regulatory approvals and Measurement Canada compliance",
      "Commissioned meters in phases as renovated units were completed",
      "Launched billing progressively as each batch of meters came online",
      "Provided full ongoing billing, account management, and tenant support",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Case Studies", url: "https://axismeter.com/case-studies" }]} />

      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1449157291145-7efd050a4d0e.jpg"
          alt="Multi-unit residential buildings"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Project Case Studies
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Real submetering projects delivered by Axis Meter. From initial assessment through
              installation, commissioning, and ongoing billing management.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-navy-light border-y border-navy-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">225+</div>
              <div className="mt-1 text-gray-400 text-sm">Units Submetered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">536+</div>
              <div className="mt-1 text-gray-400 text-sm">Meters Installed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">100%</div>
              <div className="mt-1 text-gray-400 text-sm">Regulatory Compliant</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">$0</div>
              <div className="mt-1 text-gray-400 text-sm">Upfront Cost to Owners</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((cs, i) => (
            <div key={i} className="border-b border-gray-200 pb-20 last:border-0 last:pb-0">
              {/* Hero Image */}
              <div className="relative h-[320px] rounded-xl overflow-hidden mb-8">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">{cs.type}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{cs.title}</h2>
                  <p className="text-gray-300 text-sm mt-1">{cs.location}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {cs.stats.map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-lg p-5 text-center">
                    <div className="text-2xl font-bold text-accent">{s.metric}</div>
                    <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{cs.overview}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Approach</h3>
                  <ul className="space-y-3">
                    {cs.approach.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="text-accent font-bold mt-0.5">{j + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Project?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Whether it&apos;s a new construction build or a retrofit during renovation, Axis Meter
            delivers turnkey submetering with zero upfront cost. Let&apos;s discuss your property.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
