import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

type FeaturePage = {
  slug: string;
  title: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headline: string;
    accent: string;
    summary: string;
    image: string;
    imageAlt: string;
  };
  benefits: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  compliance: {
    intro: string;
    proofPoints: { title: string; description: string }[];
  };
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    description: string;
  };
};

const featurePages: FeaturePage[] = [
  {
    slug: "multifamily-utility-billing",
    title: "Multifamily Utility Billing Services",
    targetKeyword: "multifamily utility billing",
    metaTitle: "Multifamily Utility Billing Services | Axis Meter",
    metaDescription:
      "Multifamily utility billing services for apartments, condos, and multi-unit communities. Accurate tenant billing, meter data, support, and reporting.",
    hero: {
      eyebrow: "Tenant Billing",
      headline: "Multifamily Utility Billing",
      accent: "built for real property operations",
      summary:
        "Axis Meter helps owners and managers bill residents accurately for electricity, water, gas, and thermal usage without adding billing work to the property team.",
      image: "/images/hero/photo-1545324418-cc1a3fa10c00.jpg",
      imageAlt: "Multifamily apartment building with utility billing services",
    },
    benefits: [
      {
        title: "Resident-level billing",
        description:
          "Convert bulk utility costs into clear resident charges based on actual meter readings, lease rules, and property billing requirements.",
      },
      {
        title: "Lower administrative load",
        description:
          "Axis handles meter reads, bill calculations, account setup, resident questions, move-ins, and final reads so managers can stay focused on operations.",
      },
      {
        title: "Better cost recovery",
        description:
          "Accurate multifamily utility billing reduces unrecovered utility expense and gives owners a cleaner view of building operating costs.",
      },
    ],
    steps: [
      {
        title: "Review property setup",
        description:
          "We confirm utility types, unit count, metering infrastructure, lease requirements, rate structure, and current billing process.",
      },
      {
        title: "Connect meter data",
        description:
          "Meters are installed or connected to automated reading systems so billing is based on reliable consumption data.",
      },
      {
        title: "Bill and support residents",
        description:
          "Axis generates resident bills, manages account changes, answers billing questions, and provides ongoing reporting for the property team.",
      },
    ],
    compliance: {
      intro:
        "Multifamily utility billing needs to be defensible for residents, owners, and auditors. Axis structures billing around clear meter data, documented workflows, and compliant equipment.",
      proofPoints: [
        {
          title: "Revenue-ready meter data",
          description:
            "Readings are collected from approved or revenue-grade equipment appropriate for tenant billing environments.",
        },
        {
          title: "Transparent billing records",
          description:
            "Billing outputs preserve the usage, rates, fees, and dates needed to explain charges and resolve disputes.",
        },
        {
          title: "Resident support",
          description:
            "Residents have a clear path for billing questions, account setup, payment support, and move-out coordination.",
        },
      ],
    },
    faqs: [
      {
        question: "What is multifamily utility billing?",
        answer:
          "Multifamily utility billing is the process of measuring utility consumption by unit and billing residents for their actual or allocated usage instead of leaving the full cost with the property owner.",
      },
      {
        question: "Can Axis Meter handle both apartments and condos?",
        answer:
          "Yes. Axis supports rental apartments, condo communities, mixed-use properties, and other multi-unit buildings that need accurate utility billing.",
      },
      {
        question: "Do property managers still need to calculate resident bills?",
        answer:
          "No. Axis can manage meter reading, bill generation, resident account changes, support, and reporting as part of the service.",
      },
    ],
    cta: {
      title: "Ready to clean up multifamily utility billing?",
      description:
        "Get a property-specific billing review and see how Axis can help recover utility costs with less manual work.",
    },
  },
  {
    slug: "thermal-metering",
    title: "Thermal Metering Services",
    targetKeyword: "thermal metering",
    metaTitle: "Thermal Metering Services | Axis Meter Solutions",
    metaDescription:
      "Thermal metering services for heating and cooling systems, including heat energy measurement, tenant billing, and ongoing metering support.",
    hero: {
      eyebrow: "Heating and Cooling",
      headline: "Thermal Metering Services",
      accent: "for accurate heat energy billing",
      summary:
        "Axis Meter designs and manages thermal metering programs for properties that need to measure heating, cooling, or district energy usage by suite or tenant.",
      image: "/images/hero/photo-1585771724684-38269d6639fd.jpg",
      imageAlt: "Thermal metering infrastructure for heating and cooling systems",
    },
    benefits: [
      {
        title: "Measure thermal energy",
        description:
          "Capture heating and cooling consumption from hydronic, fan coil, VRF, and district energy configurations.",
      },
      {
        title: "Support fair cost allocation",
        description:
          "Bill residents or tenants based on measured usage instead of broad allocations that hide high consumption.",
      },
      {
        title: "Manage complex systems",
        description:
          "Axis coordinates metering design, installation, billing, and maintenance for thermal systems that require specialized handling.",
      },
    ],
    steps: [
      {
        title: "Assess the HVAC design",
        description:
          "We review risers, loops, mechanical rooms, tenant boundaries, and equipment access to determine the correct thermal metering approach.",
      },
      {
        title: "Install and commission meters",
        description:
          "Thermal meters are installed, configured, verified, and connected for repeatable data collection.",
      },
      {
        title: "Turn usage into billing",
        description:
          "Consumption data is translated into tenant or resident billing with the reporting needed for property operations.",
      },
    ],
    compliance: {
      intro:
        "Thermal metering programs need consistent measurement and careful documentation because heating and cooling charges can be scrutinized by residents, owners, and boards.",
      proofPoints: [
        {
          title: "System-specific design",
          description:
            "Metering plans are matched to the building's thermal system instead of forcing a one-size-fits-all setup.",
        },
        {
          title: "Commissioned readings",
          description:
            "Meters are configured and checked so usage data can be relied on for billing and operating decisions.",
        },
        {
          title: "Ongoing maintenance",
          description:
            "Axis supports meter performance, data continuity, and issue resolution after installation.",
        },
      ],
    },
    faqs: [
      {
        question: "What does thermal metering measure?",
        answer:
          "Thermal metering measures heating or cooling energy delivered to a suite, tenant space, or system zone so costs can be billed or allocated more accurately.",
      },
      {
        question: "Which building systems can use thermal metering?",
        answer:
          "Thermal metering can support hydronic heating, chilled water, fan coil systems, VRF configurations, and district energy systems depending on the building design.",
      },
      {
        question: "Can thermal usage be included on the same utility bill?",
        answer:
          "Yes. Axis can consolidate thermal charges with other metered utilities where the property program supports all-in-one billing.",
      },
    ],
    cta: {
      title: "Need reliable thermal metering?",
      description:
        "Talk with Axis about your heating and cooling system and the right path to measured usage billing.",
    },
  },
  {
    slug: "revenue-grade-submeters",
    title: "Revenue-Grade Submeters",
    targetKeyword: "revenue grade submeters",
    metaTitle: "Revenue-Grade Submeters | Axis Meter Solutions",
    metaDescription:
      "Revenue-grade submeters for compliant tenant billing, audit-sensitive utility programs, automated reads, and long-term meter maintenance.",
    hero: {
      eyebrow: "Metering Hardware",
      headline: "Revenue-Grade Submeters",
      accent: "for billing you can defend",
      summary:
        "Axis Meter deploys revenue-grade submeters for owners who need reliable measurement, billing-ready data, and hardware that stands up to operational scrutiny.",
      image: "/images/hero/photo-1621905252507-b35492cc74b4.jpg",
      imageAlt: "Revenue-grade submeters and utility metering equipment",
    },
    benefits: [
      {
        title: "Billing-ready measurement",
        description:
          "Use submeters selected for tenant billing, cost recovery, and audit-sensitive utility management programs.",
      },
      {
        title: "Automated data collection",
        description:
          "Reduce manual reads and missed consumption data with meter systems designed for repeatable remote collection.",
      },
      {
        title: "Full service ownership",
        description:
          "Axis can own, install, maintain, and support metering equipment during the service agreement.",
      },
    ],
    steps: [
      {
        title: "Confirm billing requirements",
        description:
          "We identify the utilities, regulatory expectations, reporting needs, and meter specifications required for the property.",
      },
      {
        title: "Deploy approved hardware",
        description:
          "Meters are installed with the right communication setup, labeling, and commissioning process for the building.",
      },
      {
        title: "Maintain meter integrity",
        description:
          "Axis monitors meter reads, resolves exceptions, and supports replacement or maintenance when equipment needs attention.",
      },
    ],
    compliance: {
      intro:
        "Revenue-grade metering is about more than hardware. The installation, commissioning, data handling, and billing workflow all need to support trust in the final charge.",
      proofPoints: [
        {
          title: "Approved meter selection",
          description:
            "Axis works with metering equipment appropriate for tenant billing and utility cost recovery environments.",
        },
        {
          title: "Documented installation",
          description:
            "Installations are coordinated to preserve meter identity, unit mapping, communication readiness, and serviceability.",
        },
        {
          title: "Exception handling",
          description:
            "Data gaps, unusual readings, and service issues are reviewed so billing does not depend on unexamined exceptions.",
        },
      ],
    },
    faqs: [
      {
        question: "What are revenue-grade submeters?",
        answer:
          "Revenue-grade submeters are utility meters selected and configured to provide accurate consumption data suitable for billing or formal cost recovery.",
      },
      {
        question: "Are revenue-grade submeters only for electricity?",
        answer:
          "No. Revenue-grade or billing-appropriate submetering can apply to electricity, water, gas, and thermal systems depending on the equipment and jurisdiction.",
      },
      {
        question: "Does Axis maintain the meters after installation?",
        answer:
          "Yes. Axis can provide ongoing maintenance, monitoring, data collection, and support as part of a full-service program.",
      },
    ],
    cta: {
      title: "Need billing-ready submeters?",
      description:
        "Get a metering plan built around the hardware, data, and support your property needs.",
    },
  },
  {
    slug: "lease-to-bill-utility-metering",
    title: "Lease-to-Bill Utility Metering",
    targetKeyword: "lease to bill utility metering",
    metaTitle: "Lease-to-Bill Utility Metering | Axis Meter",
    metaDescription:
      "Lease-to-bill utility metering programs that connect tenant utility usage, lease billing rules, move-ins, move-outs, and resident support.",
    hero: {
      eyebrow: "Billing Workflow",
      headline: "Lease-to-Bill Utility Metering",
      accent: "from occupancy to invoice",
      summary:
        "Axis Meter aligns metered utility usage with lease billing workflows so tenant charges follow occupancy dates, billing rules, and property operations.",
      image: "/images/hero/photo-1423666639041-f56000c27a9a.jpg",
      imageAlt: "Lease billing workflow and utility metering support",
    },
    benefits: [
      {
        title: "Align charges to occupancy",
        description:
          "Utility billing can reflect move-ins, move-outs, final reads, and account changes instead of relying on manual spreadsheets.",
      },
      {
        title: "Support lease billing rules",
        description:
          "Axis structures billing programs around the property's utility responsibilities, charges, and resident communication needs.",
      },
      {
        title: "Reduce billing disputes",
        description:
          "Clear meter data and account timelines make it easier to explain charges when residents or tenants have questions.",
      },
    ],
    steps: [
      {
        title: "Map lease requirements",
        description:
          "We document tenant responsibilities, billing dates, move workflows, unit mapping, and utility types.",
      },
      {
        title: "Connect reads to accounts",
        description:
          "Meter data is tied to the correct unit and account so billing follows occupancy and service periods.",
      },
      {
        title: "Run ongoing billing",
        description:
          "Axis supports recurring billing, final reads, resident questions, account updates, and reporting.",
      },
    ],
    compliance: {
      intro:
        "Lease-to-bill utility metering requires consistent account handling because utility charges need to match both measured usage and the tenant relationship.",
      proofPoints: [
        {
          title: "Unit and account mapping",
          description:
            "Billing workflows connect meters, units, residents, and dates so charges are assigned correctly.",
        },
        {
          title: "Move workflow support",
          description:
            "Final reads and new account setup reduce leakage when residents move in or out.",
        },
        {
          title: "Charge transparency",
          description:
            "Bills and support processes are structured to explain usage, service dates, and utility charges.",
        },
      ],
    },
    faqs: [
      {
        question: "What is lease-to-bill utility metering?",
        answer:
          "Lease-to-bill utility metering connects measured utility usage to tenant billing workflows, including lease responsibilities, occupancy dates, move-ins, and move-outs.",
      },
      {
        question: "Does this replace property manager spreadsheets?",
        answer:
          "It can. Axis handles meter data, billing setup, recurring charges, and resident support so the property team does not need to manually calculate utility bills.",
      },
      {
        question: "Can Axis support final bills when tenants move out?",
        answer:
          "Yes. Axis can coordinate final reads, account closeout, and new resident setup as part of the billing workflow.",
      },
    ],
    cta: {
      title: "Need utility billing that follows the lease?",
      description:
        "Axis can review your current workflow and build a metering program that connects occupancy, meter reads, and billing.",
    },
  },
  {
    slug: "utility-metering-installation-maintenance",
    title: "Utility Metering Installation and Maintenance",
    targetKeyword: "utility metering installation and maintenance",
    metaTitle: "Utility Metering Installation and Maintenance | Axis",
    metaDescription:
      "Utility metering installation and maintenance for turnkey submetering programs, including meter deployment, commissioning, support, and repairs.",
    hero: {
      eyebrow: "Turnkey Service",
      headline: "Utility Metering Installation and Maintenance",
      accent: "without the operational burden",
      summary:
        "Axis Meter provides turnkey utility metering installation and maintenance for properties that need a vendor to design, deploy, support, and sustain the metering program.",
      image: "/images/hero/photo-1504328345606-18bbc8c9d7d1.jpg",
      imageAlt: "Technician installing and maintaining utility metering equipment",
    },
    benefits: [
      {
        title: "Turnkey coordination",
        description:
          "Axis coordinates site assessment, meter selection, installation planning, commissioning, and ongoing support.",
      },
      {
        title: "Less capital burden",
        description:
          "Programs can be structured with Axis owning and maintaining equipment during the service agreement.",
      },
      {
        title: "Reliable long-term operation",
        description:
          "Maintenance, read monitoring, exception handling, and support help protect billing continuity after installation.",
      },
    ],
    steps: [
      {
        title: "Survey and design",
        description:
          "We evaluate the building, utilities, access constraints, communication needs, and billing goals.",
      },
      {
        title: "Install and commission",
        description:
          "Meters are installed, mapped, tested, and connected so data can flow into billing and reporting systems.",
      },
      {
        title: "Maintain and support",
        description:
          "Axis manages ongoing maintenance, troubleshooting, replacements, and service support for the metering program.",
      },
    ],
    compliance: {
      intro:
        "Installation quality and maintenance discipline are critical for any billing-grade metering program. Axis manages both the initial deployment and the long-term operating details.",
      proofPoints: [
        {
          title: "Documented commissioning",
          description:
            "Meters are verified, mapped to units, and prepared for ongoing data collection before billing begins.",
        },
        {
          title: "Serviceable equipment plan",
          description:
            "Installations account for access, maintenance, replacements, and communication reliability.",
        },
        {
          title: "Ongoing issue resolution",
          description:
            "Axis supports read exceptions, meter issues, resident questions, and operational reporting.",
        },
      ],
    },
    faqs: [
      {
        question: "What does utility metering installation include?",
        answer:
          "Installation typically includes site review, meter selection, coordination with trades, meter deployment, commissioning, unit mapping, and data connection.",
      },
      {
        question: "Who maintains the meters after installation?",
        answer:
          "Axis can maintain the metering equipment during the service agreement, including troubleshooting, replacements, and data continuity support.",
      },
      {
        question: "Can Axis work on retrofit buildings?",
        answer:
          "Yes. Axis supports both new construction and retrofit metering programs, subject to building access and utility infrastructure.",
      },
    ],
    cta: {
      title: "Need a turnkey metering vendor?",
      description:
        "Get a practical installation and maintenance plan for your building's utility metering program.",
    },
  },
];

const featurePageMap = new Map(featurePages.map((page) => [page.slug, page]));

export function generateStaticParams() {
  return featurePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = featurePageMap.get(slug);

  if (!page) {
    return {
      title: "Feature Not Found | Axis Meter Solutions",
    };
  }

  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/features/${page.slug}`,
    image: page.hero.image,
  });
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = featurePageMap.get(slug);

  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://axismeter.com" },
          { name: "Solutions", url: "https://axismeter.com/solutions" },
          { name: page.title, url: `https://axismeter.com/features/${page.slug}` },
        ]}
      />
      <FAQSchema faqs={page.faqs} />

      <section id="hero" className="bg-navy relative overflow-hidden">
        <Image
          src={page.hero.image}
          alt={page.hero.imageAlt}
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase">
              {page.hero.eyebrow}
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white leading-tight">
              {page.hero.headline}{" "}
              <span className="text-accent">{page.hero.accent}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              {page.hero.summary}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block text-center"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/solutions"
                className="border border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block text-center"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase">
              Benefits
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Why property teams choose {page.targetKeyword}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              A managed path from assessment to billing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.steps.map((step, index) => (
              <div key={step.title} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-accent text-navy font-bold rounded-full flex items-center justify-center mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent font-semibold text-sm uppercase">
                Compliance
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Built for accountable utility billing
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {page.compliance.intro}
              </p>
            </div>
            <div className="space-y-5">
              {page.compliance.proofPoints.map((point) => (
                <div key={point.title} className="border-l-4 border-accent pl-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Common questions
            </h2>
          </div>
          <div className="space-y-5">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {page.cta.title}
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            {page.cta.description}
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
