import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Axis Meter Solutions",
  description: "Real results from real properties. See how submetering transformed utility management for apartment buildings, condos, and commercial properties.",
};

const caseStudies = [
  {
    title: "20-Unit Apartment Building in Toronto",
    type: "Residential Retrofit",
    icon: "🏠",
    challenge: "A 20-unit apartment building in Toronto's east end was spending $4,200/month on bulk electricity and water. The owner had been absorbing the cost for years, watching it climb annually while tenants had no incentive to conserve. Two water damage incidents in the previous year had cost an additional $35,000 in repairs.",
    solution: "Axis installed per-unit electricity and water meters across all 20 units, with leak and flood detection sensors in every bathroom, kitchen, and mechanical room. The entire process took 9 weeks from agreement to live billing.",
    results: [
      { metric: "$3,100/mo", label: "In recovered utility costs" },
      { metric: "34%", label: "Reduction in water consumption" },
      { metric: "28%", label: "Reduction in electricity consumption" },
      { metric: "$0", label: "Water damage since installation" },
    ],
    quote: "I was losing over $3,000 a month and didn't even realize how much until Axis showed me the numbers. The leak detection alone has paid for itself — we caught a slow leak in unit 12 within the first month that would have been another $15,000 repair.",
    quoteName: "Michael R.",
    quoteRole: "Building Owner, Toronto",
  },
  {
    title: "New Construction Condo — 45 Units",
    type: "Condo New Construction",
    icon: "🏙️",
    challenge: "A developer building a 45-unit condominium in the GTA wanted to minimize maintenance fees to make units more competitive in presale. Similar projects in the area had maintenance fees of $0.65-0.75/sq ft — the developer wanted to come in significantly lower.",
    solution: "Axis was brought in during the design phase to integrate electricity and water submetering into the building plans. Meters were installed during construction, before drywall, with leak detection sensors placed throughout. The condo corporation launched with per-unit billing from day one.",
    results: [
      { metric: "$0.48/sq ft", label: "Maintenance fees at launch" },
      { metric: "26%", label: "Lower fees than comparable buildings" },
      { metric: "100%", label: "Of presale units sold before occupancy" },
      { metric: "$0", label: "Upfront cost to the developer" },
    ],
    quote: "The lower maintenance fees were a genuine selling point. Buyers could see the difference immediately compared to other projects. And having leak detection built in from day one gave the condo board real peace of mind.",
    quoteName: "Sarah L.",
    quoteRole: "Development Manager, GTA",
  },
  {
    title: "Mixed-Use Commercial Property",
    type: "Commercial Mixed-Use",
    icon: "🏢",
    challenge: "A mixed-use property with 8 retail units on the ground floor and 12 residential apartments above was allocating utility costs using square footage estimates. Commercial tenants were subsidizing residential usage, leading to lease disputes. The owner was absorbing roughly $2,800/month in unrecovered costs.",
    solution: "Axis installed separate electricity and water meters for all 20 units — 8 commercial and 12 residential — with different billing rates for each tenant type. Leak detection sensors were placed throughout the building, with extra coverage in the ground-floor retail spaces.",
    results: [
      { metric: "$2,800/mo", label: "In recovered utility costs" },
      { metric: "Zero", label: "Billing disputes since installation" },
      { metric: "2", label: "Leaks caught in the first 6 months" },
      { metric: "100%", label: "Tenant retention after transition" },
    ],
    quote: "Axis transformed our commercial property management with their submetering technology. We've seen significant cost reductions and greater tenant accountability. The billing disputes vanished overnight.",
    quoteName: "Darren K.",
    quoteRole: "Commercial Landlord, Toronto",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Real Properties.{" "}
              <span className="text-accent">Real Results.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              See how property owners across Canada are recovering utility costs, preventing water damage,
              and increasing property value with Axis Meter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((cs, i) => (
            <div key={i} className="border-b border-gray-200 pb-20 last:border-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{cs.icon}</span>
                <div>
                  <span className="text-sm font-semibold text-accent uppercase">{cs.type}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{cs.title}</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">The Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent">{r.metric}</div>
                        <div className="text-sm text-gray-600 mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-accent text-2xl mb-3">&ldquo;</div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">{cs.quote}</p>
                  <div className="font-semibold text-gray-900">{cs.quoteName}</div>
                  <div className="text-sm text-gray-500">{cs.quoteRole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Want Results Like These?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and get a custom assessment for your property. We&apos;ll show you exactly
            what submetering can do for your bottom line.
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
