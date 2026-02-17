import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Housing Submetering — Axis Meter Solutions",
  description: "Support affordability goals with fair, accurate utility billing. Submetering for subsidized and community housing with $0 upfront cost.",
};

export default function AffordableHousingPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
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
              <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Fairness and Conservation</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Affordable housing operators work with tight budgets. Every dollar matters — and rising utility
              costs can threaten the financial sustainability of housing programs that communities depend on.
            </p>
            <p>
              Submetering brings fairness and transparency to utility billing. Residents who conserve pay less.
              Residents who use more pay for their actual consumption. It&apos;s not about penalizing anyone — it&apos;s
              about creating a system that&apos;s fair to everyone and sustainable for the long term.
            </p>
            <p>
              The result: lower building-wide utility costs, more accurate budgeting, and a conservation incentive
              that benefits the entire community.
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
            <Link href="/property-owners" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
