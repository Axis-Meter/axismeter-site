import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Utility Submetering Solutions | Axis Meter Solutions",
  description: "Full-service submetering for electricity, water, gas, and thermal. Common area metering, leak detection, and all-in-one billing. $0 upfront. US & Canada.",
  path: "/solutions",
});

const solutions = [
  {
    icon: "⚡",
    title: "Electricity Submetering",
    href: "/solutions/electricity-submetering",
    description: "Per-unit electricity metering with Measurement Canada approved equipment. Automated data collection and tenant billing.",
    benefits: ["30-40% consumption reduction", "Automated billing", "Real-time data"],
    image: "/images/hero/photo-1473341304170-971dccb5ac1e.jpg",
  },
  {
    icon: "💧",
    title: "Water Submetering",
    href: "/solutions/water-submetering",
    description: "Wireless and ultrasonic water meters that drive conservation, enable fair billing, and identify leaks before they cause damage.",
    benefits: ["Conservation incentive", "Fair per-unit billing", "Leak identification"],
    image: "/images/hero/photo-1585704032915-c3400ca199e7.jpg",
  },
  {
    icon: "🌡️",
    title: "Thermal Submetering",
    href: "/solutions/thermal-submetering",
    description: "In-suite heating and cooling measurement for hydronic, fan coil, VRF, and district energy systems.",
    benefits: ["Heating & cooling metering", "VRF system support", "Fair cost allocation"],
    image: "/images/hero/photo-1585771724684-38269d6639fd.jpg",
  },
  {
    icon: "🔥",
    title: "Gas Submetering",
    href: "/solutions/gas-submetering",
    description: "Per-unit natural gas metering to control one of the most volatile utility costs. Measurement Canada approved.",
    benefits: ["Lower gas consumption", "Stabilize operating costs", "Certified meters"],
    image: "/images/hero/photo-1585771724684-38269d6639fd.jpg",
  },
  {
    icon: "🏢",
    title: "Common Area Metering",
    href: "/solutions/common-area-metering",
    description: "Meter lobbies, hallways, parking, and amenity spaces for complete building visibility and cost optimization.",
    benefits: ["Full building visibility", "Identify waste", "Cost allocation"],
    image: "/images/hero/photo-1497366216548-37526070297c.jpg",
  },
  {
    icon: "🛡️",
    title: "Leak & Flood Detection",
    href: "/solutions/leak-detection",
    description: "Real-time monitoring that catches leaks before they turn into costly disasters. Included FREE with every installation.",
    benefits: ["Free with every install", "Real-time alerts", "Prevent catastrophic damage"],
    image: "/images/hero/photo-1504328345606-18bbc8c9d7d1.jpg",
    highlight: true,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1621905252507-b35492cc74b4.jpg"
          alt="Smart utility metering and building management systems"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Complete Submetering Solutions for{" "}
              <span className="text-accent">Every Utility</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Electricity, water, gas, and thermal — all managed by Axis Meter. One provider,
              one invoice, $0 upfront. Full-service submetering across the US and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* All-in-One Billing Banner */}
      <section className="bg-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy font-semibold text-lg">
            📄 All-in-One Billing — All utilities consolidated on a single monthly tenant invoice. No juggling multiple bills.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div
                key={s.href}
                className={`rounded-xl p-8 flex flex-col ${s.highlight ? "bg-navy text-white ring-2 ring-accent" : "bg-gray-50"}`}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {s.highlight && (
                  <span className="inline-block bg-accent text-navy text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    FREE WITH EVERY INSTALL
                  </span>
                )}
                <h2 className={`text-2xl font-bold mb-4 ${s.highlight ? "text-white" : "text-gray-900"}`}>{s.title}</h2>
                <p className={`leading-relaxed mb-6 ${s.highlight ? "text-gray-300" : "text-gray-600"}`}>{s.description}</p>
                <ul className="space-y-2 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className={`flex items-center gap-2 ${s.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      <span className="text-accent">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={s.href}
                    className={`font-semibold px-6 py-3 rounded-lg transition-colors inline-block ${
                      s.highlight
                        ? "bg-accent hover:bg-accent-dark text-navy"
                        : "bg-navy hover:bg-navy-light text-white"
                    }`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Not Sure What You Need?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation and we&apos;ll recommend the right combination of solutions for your property. No obligation.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
