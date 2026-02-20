import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Affordable Housing Submetering — Fair Billing for Community Housing — Axis Meter Solutions",
  description: "Support affordability goals with fair, accurate utility billing. Submetering for subsidized and community housing with $0 upfront cost.",
};

export default function AffordableHousingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Markets", url: "https://axismeter.com/markets" }, { name: "Affordable Housing", url: "https://axismeter.com/markets/affordable-housing" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1920&q=80"
          alt="Community affordable housing development"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Submetering for{" "}
              <span className="text-accent">Affordable Housing</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Fair billing that supports affordability goals. Accurate per-unit metering helps housing
              providers manage costs, promote conservation, and ensure tenants pay only for what they use.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Fairness, Conservation, and Sustainability</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Affordable housing operators work with tight budgets. Every dollar matters — and rising utility
              costs can threaten the financial sustainability of housing programs that communities depend on.
              Whether you manage public housing, non-profit developments, or rent-geared-to-income properties,
              submetering provides a proven path to reducing operating costs while maintaining fairness for residents.
            </p>
            <p>
              Submetering brings fairness and transparency to utility billing. Residents who conserve pay less.
              Residents who use more pay for their actual consumption. It&apos;s not about penalizing anyone — it&apos;s
              about creating a system that&apos;s fair to everyone and sustainable for the long term. In affordable
              housing, where cross-subsidization between units can disproportionately burden careful consumers,
              this fairness is especially important.
            </p>
            <p>
              The result: lower building-wide utility costs, more accurate budgeting, and a conservation incentive
              that benefits the entire community. Buildings typically see a 30-40% reduction in overall utility
              consumption after submetering is installed, freeing up critical budget for maintenance, improvements,
              and resident services.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8">Regulatory Compliance and Government Programs</h3>
            <p>
              Many government housing programs and regulatory frameworks now encourage or require submetering in
              affordable housing developments. Submetering helps housing authorities demonstrate responsible resource
              management and environmental stewardship — key factors in securing and maintaining government funding
              and tax credits. Axis Meter ensures full compliance with Measurement Canada standards and all applicable
              US and Canadian regulations, so your properties always meet program requirements.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8">Supporting Resident Empowerment</h3>
            <p>
              Submetering gives residents visibility into their utility consumption and control over their costs.
              When residents can see how much energy and water they use, they make smarter decisions — shorter
              showers, turning off lights, reporting leaks promptly. This empowerment leads to lower bills for
              residents and a more sustainable building for operators. Combined with free leak detection on every
              Axis Meter install, affordable housing properties get comprehensive utility management and water
              damage protection at $0 upfront cost.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Benefits for Housing Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⚖️", title: "Fair Billing", description: "Every resident pays for their actual usage. No more cross-subsidization between units — just transparent, accurate billing." },
              { icon: "📉", title: "Lower Operating Costs", description: "Conservation incentives reduce building-wide consumption by 30-40%, freeing up budget for other priorities." },
              { icon: "🌿", title: "Conservation Culture", description: "When residents can see their usage, they make smarter choices. Submetering naturally promotes resource conservation." },
              { icon: "💧", title: "Free Leak Protection", description: "Protect affordable housing units from water damage with leak detection sensors included at no extra cost." },
              { icon: "📊", title: "Budget Accuracy", description: "Real consumption data means more accurate budgeting and forecasting. No more utility cost surprises." },
              { icon: "💰", title: "$0 Upfront Cost", description: "No capital expenditure required. Axis owns all equipment — critical for organizations operating on limited budgets." },
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

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Support Affordability with Fair Billing</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation to learn how submetering can help your affordable housing properties manage costs fairly and sustainably.
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
