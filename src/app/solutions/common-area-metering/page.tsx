import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Common Area Metering — Lobby, Parking & Amenity Metering | Axis Meter Solutions",
  description: "Measure and manage utility consumption in common areas — lobbies, hallways, parking garages, amenity spaces. Identify waste and optimize costs.",
};

const benefits = [
  { icon: "🏢", title: "Full Building Visibility", description: "See exactly where common area energy is going — lobbies, hallways, parking garages, laundry rooms, fitness centers, and amenity spaces." },
  { icon: "📊", title: "Identify Waste", description: "Common areas often account for 20-30% of a building's total utility costs. Metering reveals inefficiencies and opportunities for savings." },
  { icon: "💡", title: "Optimize Operations", description: "Data-driven insights help property managers make informed decisions about lighting schedules, HVAC settings, and equipment efficiency." },
  { icon: "📄", title: "Transparent Cost Allocation", description: "Accurately separate common area costs from in-suite consumption. Fair allocation that stands up to tenant scrutiny." },
  { icon: "🌱", title: "Support ESG Goals", description: "Detailed common area consumption data supports sustainability reporting and helps demonstrate progress toward energy reduction targets." },
  { icon: "💰", title: "$0 Upfront Cost", description: "Common area metering is included as part of your comprehensive submetering solution. No additional capital expenditure required." },
];

const areas = [
  "Lobbies & entrance halls",
  "Hallways & corridors",
  "Parking garages & EV charging areas",
  "Fitness centers & amenity rooms",
  "Laundry rooms",
  "Swimming pools & saunas",
  "Mechanical rooms & elevator systems",
  "Outdoor lighting & irrigation",
];

export default function CommonAreaMeteringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Solutions", url: "https://axismeter.com/solutions" }, { name: "Common Area Metering", url: "https://axismeter.com/solutions/common-area-metering" }]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern building lobby and common area"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Common Area Metering for{" "}
              <span className="text-accent">Complete Building Visibility</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Don&apos;t stop at suites. Measure and manage utility consumption across lobbies, hallways,
              parking, and amenity spaces to get a complete picture of your building&apos;s energy use.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">Beyond suite metering</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">The Full Picture</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Suite metering captures tenant consumption, but common areas can account for 20-30% of your
                building&apos;s total utility costs. Without metering these spaces, you&apos;re managing blind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Axis Meter&apos;s common area metering gives you granular visibility into every shared space —
                so you can identify waste, optimize operations, and accurately allocate costs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="Modern building common areas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Benefits</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Areas We Meter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 text-lg text-gray-600">
                  <span className="text-accent">✓</span> {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get Complete Building Visibility</h2>
          <p className="mt-6 text-lg text-gray-300">
            Talk to a specialist about adding common area metering to your submetering plan.
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
