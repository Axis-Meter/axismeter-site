import Link from "next/link";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/JsonLd";
import { OebLicenceTrust } from "@/components/OebLicenceTrust";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

const description =
  "Compare submetering providers for water, electricity, gas, and thermal systems. See Axis Meter's services, coverage, selection criteria, and verifiable OEB licence.";

export const metadata = createPageMetadata({
  title: "Submetering Company for Multifamily Properties | Axis Meter",
  description,
  path: "/submetering-company",
});

const services = [
  {
    title: "Water submetering",
    text: "Per-unit water measurement, remote meter data collection, consumption reporting, and leak-monitoring options.",
    href: "/solutions/water-submetering",
  },
  {
    title: "Electricity submetering",
    text: "System design coordination, approved metering equipment where required, commissioning, reads, and billing support.",
    href: "/solutions/electricity-submetering",
  },
  {
    title: "Gas submetering",
    text: "Natural gas measurement and billing workflows for multi-unit properties, subject to applicable local requirements.",
    href: "/solutions/gas-submetering",
  },
  {
    title: "Thermal energy metering",
    text: "Heating and cooling measurement for hydronic, fan-coil, VRF, and district-energy applications.",
    href: "/solutions/thermal-submetering",
  },
];

const operatingScope = [
  "Property and existing-system assessment",
  "Meter selection and system design coordination",
  "Installation, commissioning, and data validation",
  "Recurring resident or tenant utility billing",
  "Move-in, move-out, and account lifecycle support",
  "Resident inquiries, reporting, maintenance, and monitoring",
];

const checklist = [
  {
    title: "Utility and property fit",
    text: "Confirm that the provider supports your utility type, building configuration, unit count, and retrofit or new-construction schedule.",
  },
  {
    title: "Regulatory scope",
    text: "Ask which licences, meter approvals, billing rules, and consumer-protection requirements apply in the property's jurisdiction.",
  },
  {
    title: "End-to-end ownership",
    text: "Document who is responsible for design, installation, reads, validation, billing, collections workflow, resident support, and maintenance.",
  },
  {
    title: "Data and billing controls",
    text: "Review how exceptions, estimated reads, rate changes, audit trails, move-ins, move-outs, and billing disputes are handled.",
  },
  {
    title: "Equipment flexibility",
    text: "Determine whether the proposed meters and communications network suit the property instead of forcing every project into one hardware stack.",
  },
  {
    title: "Commercial terms",
    text: "Compare the full contract: implementation cost, ongoing fees, term, ownership, service levels, escalation, and exit provisions.",
  },
];

const faqs = [
  {
    question: "What does a full-service submetering company do?",
    answer:
      "A full-service provider can coordinate system assessment, meter selection, installation and commissioning, meter data collection and validation, recurring billing, resident support, and ongoing maintenance. Exact scope should be confirmed in the project agreement.",
  },
  {
    question: "Does Axis Meter provide water and electricity submetering?",
    answer:
      "Yes. Axis Meter supports water, electricity, natural gas, and thermal energy submetering for multifamily and commercial properties, subject to project feasibility and the requirements of the applicable jurisdiction.",
  },
  {
    question: "Is Axis Meter licensed by the Ontario Energy Board?",
    answer:
      "Axis Meter Solutions Inc. holds Ontario Energy Board Unit Sub-Metering Licence ES-2022-0268 for electricity unit submetering in Ontario. The licence can be independently verified on the OEB's licensed-company register. It does not by itself cover water, gas, or work outside Ontario.",
  },
  {
    question: "Does Axis Meter serve the United States and Canada?",
    answer:
      "Axis evaluates multifamily and commercial submetering projects in Canada and the United States. Availability, equipment, billing structure, and compliance requirements are reviewed for each property and jurisdiction before a proposal is made.",
  },
  {
    question: "How should I compare submetering providers?",
    answer:
      "Compare utility and building fit, licensing and regulatory knowledge, implementation responsibility, meter-data controls, billing and resident support, equipment options, maintenance commitments, total contract cost, and exit terms.",
  },
  {
    question: "Can Axis sell or install submetering equipment without billing services?",
    answer:
      "Project scope can vary. Contact Axis with the utility type, property location, unit count, and desired equipment, installation, data, or billing responsibilities so the team can confirm an appropriate scope.",
  },
];

export default function SubmeteringCompanyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Choose a Submetering Company", url: `${SITE_URL}/submetering-company` },
        ]}
      />
      <ServiceSchema
        name="Utility Submetering and Billing Services"
        description={description}
        path="/submetering-company"
        serviceTypes={[
          "Water submetering",
          "Electricity submetering",
          "Natural gas submetering",
          "Thermal energy metering",
          "Multifamily utility billing",
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-wider text-accent">Canada and United States</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              A Submetering Company for Multifamily and Commercial Properties
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Axis Meter Solutions provides water, electricity, gas, and thermal submetering,
              along with meter data, utility billing, resident support, and system maintenance.
              We assess each property and jurisdiction before recommending a project scope.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?source=submetering-company"
                className="rounded-lg bg-accent px-8 py-4 text-center font-semibold text-navy transition-colors hover:bg-accent-dark"
              >
                Discuss Your Property
              </Link>
              <a
                href="#compare-providers"
                className="rounded-lg border border-gray-500 px-8 py-4 text-center font-semibold text-white transition-colors hover:border-white"
              >
                Compare Providers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Direct answer</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">What Axis can manage</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Axis can support the workflow from initial property assessment through ongoing reads,
              billing, support, and maintenance. The final responsibilities, schedule, equipment,
              pricing, and service levels are defined in the proposal and agreement for each project.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Axis service scope">
            {operatingScope.map((item) => (
              <li key={item} className="rounded-xl bg-gray-50 p-4 text-sm font-medium text-gray-800">
                <span className="mr-2 text-accent-dark" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">One provider across multiple utilities</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              The right system depends on the utility, building infrastructure, billing objective,
              communications environment, and local requirements.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{service.text}</p>
                <Link href={service.href} className="mt-5 font-semibold text-accent-dark hover:underline">
                  Service details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare-providers" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Buyer checklist</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">How to choose a submetering company</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Use the same written questions with every bidder. A credible comparison should cover
              technical fit, compliance, operations, resident experience, and the entire contract—not
              only the meter price.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {checklist.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-gray-200 p-6">
                <span className="text-sm font-bold text-accent-dark">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OebLicenceTrust compact />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Submetering company questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 p-6">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Get a property-specific recommendation</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Share the property location, utility types, unit count, construction stage, and the
            services you need. Axis will confirm whether the project is a fit and outline the next step.
          </p>
          <Link
            href="/contact?source=submetering-company"
            className="mt-8 inline-block rounded-lg bg-accent px-9 py-4 font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Contact Axis Meter
          </Link>
        </div>
      </section>
    </>
  );
}
