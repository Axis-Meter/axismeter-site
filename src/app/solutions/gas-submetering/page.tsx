import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gas Submetering Services — Natural Gas Metering | Axis Meter Solutions",
  description: "Submeter natural gas consumption per unit. Measurement Canada approved meters, automated billing, $0 upfront. Serving US & Canada.",
};

const benefits = [
  { icon: "🔥", title: "Per-Unit Gas Billing", description: "Eliminate bulk gas bills by measuring each unit's actual natural gas consumption. Fair billing that incentivizes conservation." },
  { icon: "📉", title: "Lower Gas Consumption", description: "Submetered buildings consistently show reduced gas usage. When tenants pay for what they use, waste drops significantly." },
  { icon: "💰", title: "Decrease Utility Costs", description: "Natural gas is one of the most volatile commodities. Submetering shifts consumption costs to the end user and stabilizes your operating budget." },
  { icon: "✅", title: "Measurement Canada Approved", description: "All gas meters are certified, inspected, and fully compliant with regulatory requirements in both the US and Canada." },
  { icon: "📄", title: "All-in-One Billing", description: "Gas charges are consolidated with electricity, water, and thermal utilities on a single monthly tenant invoice." },
  { icon: "💧", title: "Free Leak Detection", description: "Every Axis Meter installation includes leak and flood detection sensors at no extra cost — standard with all our solutions." },
];

const steps = [
  { step: "1", title: "Site Assessment", description: "We evaluate your building's gas distribution infrastructure and design a metering plan tailored to your specific configuration." },
  { step: "2", title: "Meter Installation", description: "Measurement Canada approved gas meters are installed on each unit's gas line. We coordinate all regulatory approvals and permits." },
  { step: "3", title: "Billing & Support", description: "Automated data collection and monthly billing to each tenant. Full ongoing support, maintenance, and compliance management." },
];

export default function GasSubmeteringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Gas Submetering", url: "https://axismeter.com/solutions/gas-submetering" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
          alt="Natural gas infrastructure and metering systems"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Gas Submetering for{" "}
              <span className="text-accent">Multi-Unit Properties</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Take control of natural gas costs with per-unit metering and billing.
              Measurement Canada approved equipment. $0 upfront. Full-service management.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">How Gas Submetering Works</h2>
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

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Ideal For</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4 text-left">
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Multi-family apartments with individual gas appliances</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Condominiums with gas-fired heating</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Commercial kitchens and restaurants</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Mixed-use properties with gas distribution</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Buildings with rooftop gas equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Submeter Natural Gas?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Get a free assessment of your building&apos;s gas infrastructure and see how much you could save with per-unit billing.
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
