import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Thermal Submetering — Heating & Cooling Metering | Axis Meter Solutions",
  description: "Submeter in-suite heating and cooling consumption including complex systems like VRF. Measurement Canada approved. $0 upfront. Serving US & Canada.",
};

const benefits = [
  { icon: "🌡️", title: "Heating & Cooling Measurement", description: "Accurately measure in-suite thermal energy consumption for both heating and cooling systems, including hydronic, fan coil, and VRF configurations." },
  { icon: "📉", title: "Drive Conservation", description: "When tenants see what their heating and cooling actually costs, consumption drops. Fair billing encourages responsible use across the building." },
  { icon: "🔧", title: "Complex System Support", description: "Our thermal metering solutions handle VRF, hydronic, and district energy systems — configurations that most submetering providers can't support." },
  { icon: "✅", title: "Certified & Compliant", description: "All thermal meters meet industry accreditation standards and regulatory requirements for revenue-grade billing in the US and Canada." },
  { icon: "💰", title: "$0 Upfront Cost", description: "Like all Axis solutions, thermal submetering requires zero capital expenditure. We own and maintain all equipment during the agreement term." },
  { icon: "📄", title: "All-in-One Billing", description: "Thermal charges are consolidated with electricity, water, and other utilities on a single monthly tenant invoice — no juggling multiple bills." },
];

const steps = [
  { step: "1", title: "System Assessment", description: "We evaluate your HVAC configuration and design the optimal thermal metering solution for your building's specific setup." },
  { step: "2", title: "Meter Installation", description: "Certified thermal meters are installed on each unit's heating and cooling lines. Wireless and ultrasonic options available for minimal disruption." },
  { step: "3", title: "Billing & Management", description: "Consumption data is collected automatically and tenants receive accurate monthly bills reflecting their actual thermal energy use." },
];

export default function ThermalSubmeteringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Thermal Submetering", url: "https://axismeter.com/solutions/thermal-submetering" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
          alt="HVAC system and thermal energy infrastructure"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Thermal Submetering for{" "}
              <span className="text-accent">Heating & Cooling</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Accurately measure and bill tenants for in-suite heating and cooling consumption.
              Support for hydronic, fan coil, VRF, and district energy systems.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">How Thermal Submetering Works</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Supported HVAC Systems</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4 text-left">
              <p>Our thermal submetering solutions support a wide range of heating and cooling configurations:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Variable Refrigerant Flow (VRF) systems</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Hydronic heating and cooling</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Fan coil units</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> District energy connections</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Heat pump systems</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> In-suite HVAC configurations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Submeter Heating & Cooling?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Get a free assessment of your building&apos;s HVAC system and find out how thermal submetering can reduce costs and improve tenant satisfaction.
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
