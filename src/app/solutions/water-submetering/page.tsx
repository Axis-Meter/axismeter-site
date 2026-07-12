import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Water Submetering Services for Multifamily Properties",
  description:
    "Water submetering systems for apartments, condos, and commercial properties. Per-unit measurement, remote readings, billing support, and leak detection.",
  path: "/solutions/water-submetering",
});

const benefits = [
  {
    icon: "⚖️",
    title: "Usage-Based Cost Allocation",
    description:
      "Replace estimates and square-footage formulas with unit-level consumption data when local rules and lease terms permit usage-based billing.",
  },
  {
    icon: "📡",
    title: "Remote Meter Reading",
    description:
      "Collect consistent readings without entering every suite. Communications design is matched to the building, meter outputs, and reporting needs.",
  },
  {
    icon: "💧",
    title: "Consumption Anomaly Detection",
    description:
      "Review unexpected continuous flow or usage spikes that may point to running fixtures, leaks, incorrect assignments, or unusual consumption.",
  },
  {
    icon: "🛡️",
    title: "Leak and Flood Protection",
    description:
      "Pair consumption monitoring with dedicated leak sensors in mechanical rooms, suites, and other high-risk locations for faster alerts.",
  },
  {
    icon: "📊",
    title: "Property-Level Reporting",
    description:
      "Compare unit, common-area, and master-meter usage to investigate gaps, support maintenance, and improve billing review workflows.",
  },
  {
    icon: "🧰",
    title: "Design Through Ongoing Support",
    description:
      "Coordinate meter selection, installation, commissioning, unit assignments, data collection, billing setup, maintenance, and resident questions.",
  },
];

const projectSteps = [
  {
    number: "1",
    title: "Survey the property",
    description:
      "Document pipe sizes, branches, shared loads, unit count, access, existing meters, communications conditions, and the intended use of the data.",
  },
  {
    number: "2",
    title: "Design the system",
    description:
      "Select meters for the expected flow range and water conditions, then define reading, network, leak-detection, and billing components.",
  },
  {
    number: "3",
    title: "Install and commission",
    description:
      "Use qualified trades, verify flow direction and meter identity, test communications, and confirm every meter is assigned to the correct unit.",
  },
  {
    number: "4",
    title: "Read, validate, and support",
    description:
      "Collect readings on schedule, review exceptions, preserve an audit trail, maintain equipment, and apply the approved billing workflow.",
  },
];

const faqs = [
  {
    question: "What is a water submetering system?",
    answer:
      "A water submetering system measures water consumption for individual units or defined areas downstream of a property's main water meter. It can include meters, pulse or digital outputs, communications devices, gateways, software, leak sensors, and a billing or reporting workflow.",
  },
  {
    question: "Can water submeters be installed in an existing apartment building?",
    answer:
      "Often, yes. Retrofit feasibility depends on whether unit piping can be separated, pipe access, available installation space, shutoff coordination, expected flow, communications coverage, and local plumbing and billing requirements. A site survey is the appropriate first step.",
  },
  {
    question: "Can a landlord bill tenants from water submeter readings?",
    answer:
      "The answer depends on the jurisdiction, property type, lease language, meter requirements, permitted charges, disclosures, and consumer-protection rules. Axis reviews the intended billing model and applicable requirements before implementation; property owners should obtain local legal advice where necessary.",
  },
  {
    question: "Do you provide water submetering in Canada and the United States?",
    answer:
      "Axis supports Canadian and US project assessments. Equipment availability, installation coverage, approvals, and tenant-billing services are confirmed for the specific province, state, municipality, property type, and project scope.",
  },
  {
    question: "How much does a water submetering project cost?",
    answer:
      "Cost depends on unit count, pipe configuration, meter size and type, installation access, communications, leak sensors, commissioning, and ongoing reading or billing services. Axis prepares a property-specific assessment rather than applying one generic price.",
  },
  {
    question: "Does a water submeter detect every leak?",
    answer:
      "No single device detects every possible leak. Consumption data can reveal unusual usage patterns, while dedicated leak and flood sensors detect water at selected locations. A combined design provides broader protection than either approach alone.",
  },
];

export default function WaterSubmeteringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Water Submetering", url: "/solutions/water-submetering" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1585704032915-c3400ca199e7.jpg"
          alt="Water meter and plumbing system for a multifamily property"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wide text-accent">
              Water meters, remote reading, billing, and leak monitoring
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Water Submetering Services for Multifamily Properties
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Measure water consumption by unit, collect readings remotely, support transparent
              billing, and identify abnormal usage across apartments, condominiums, mixed-use,
              student housing, and commercial properties.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Request a Property Assessment
              </Link>
              <Link
                href="/blog/what-is-a-water-submeter"
                className="border border-gray-500 hover:border-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Read the Water Submeter Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              A Complete Water Submetering System, Not Just a Meter
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The meter is one part of the system. A reliable project also needs correct sizing,
              accessible installation, verified unit assignments, dependable communications,
              reading validation, billing rules, maintenance, and resident support. Axis brings
              those pieces together around the actual building and operating model.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-xl bg-gray-50 p-8">
                <div className="text-4xl mb-4" aria-hidden="true">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-semibold uppercase tracking-wide text-accent-dark">Project workflow</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                From Site Survey to Validated Readings
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Good results depend on field verification and ongoing operations. Selecting equipment
                before confirming the building&apos;s piping, flow conditions, communications, and billing
                objective can create expensive rework.
              </p>
            </div>
            <ol className="space-y-6">
              {projectSteps.map((step) => (
                <li key={step.number} className="flex gap-5 rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-navy">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-navy-lighter bg-navy-light p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Canada</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Canadian Water Submetering</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Provincial, municipal, plumbing, meter, lease, privacy, and consumer-protection
                requirements can affect project design and billing. Axis confirms the intended use of
                readings and the requirements relevant to the property before implementation.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-lighter bg-navy-light p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">United States</p>
              <h2 className="mt-3 text-2xl font-bold text-white">US Water Submetering</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                State and local rules determine meter acceptance, installation, disclosures, billing,
                fees, recordkeeping, and dispute procedures. US availability is reviewed by state,
                municipality, property type, equipment, and service scope.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-gray-400">
            This overview is operational information, not legal advice. Local requirements should be
            confirmed before meters are purchased, installed, or used for occupant billing.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Water Submetering Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Assess Your Property&apos;s Water Metering Options
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Share the property location, unit count, piping configuration, current billing method,
            and whether you need remote readings, leak alerts, or resident billing.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Request a Property Assessment
            </Link>
            <Link
                href="/blog/what-is-a-submeter-and-how-does-it-work"
              className="border border-gray-300 hover:border-navy text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Explore Submetering 101
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
