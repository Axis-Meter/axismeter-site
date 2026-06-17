import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

type UtilityPage = {
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
  whyItMatters: { title: string; description: string }[];
  meteringRequirements: { title: string; description: string }[];
  billingSetup: { title: string; description: string }[];
  compliance: {
    intro: string;
    points: { title: string; description: string }[];
  };
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    description: string;
  };
};

const utilityPages: UtilityPage[] = [
  {
    slug: "thermal-energy-metering",
    title: "Thermal Energy Metering for Multi-Unit Properties",
    targetKeyword: "thermal energy metering",
    metaTitle: "Thermal Energy Metering for Multi-Unit Properties",
    metaDescription:
      "Thermal energy metering for multi-unit properties that need heating and cooling measurement, tenant billing, compliance support, and ongoing maintenance.",
    hero: {
      eyebrow: "Thermal Utilities",
      headline: "Thermal Energy Metering",
      accent: "for multi-unit properties",
      summary:
        "Axis Meter helps owners measure heating and cooling energy by unit, convert usage into tenant billing, and maintain the metering program over time.",
      image: "/images/hero/photo-1585771724684-38269d6639fd.jpg",
      imageAlt: "Thermal energy metering equipment for heating and cooling systems",
    },
    whyItMatters: [
      {
        title: "Heating costs need visibility",
        description:
          "Central heating and cooling systems often hide high consumption. Thermal energy metering gives property teams unit-level data instead of broad estimates.",
      },
      {
        title: "Tenant billing becomes fairer",
        description:
          "When thermal usage is measured, residents or tenants can be billed for the energy they actually use rather than subsidizing neighbors.",
      },
      {
        title: "Consumption behavior changes",
        description:
          "Usage-based thermal billing gives residents a reason to manage thermostat settings, open windows, and other habits that drive heating and cooling costs.",
      },
    ],
    meteringRequirements: [
      {
        title: "System-specific meter design",
        description:
          "Thermal energy metering must match the building system, including hydronic heating, chilled water, fan coil, VRF, or district energy layouts.",
      },
      {
        title: "Accurate flow and temperature data",
        description:
          "Heating and cooling energy calculations depend on reliable flow measurement and temperature differential readings.",
      },
      {
        title: "Accessible installation points",
        description:
          "Meters need to be installed where they can measure the correct unit or zone while remaining serviceable for inspection and maintenance.",
      },
    ],
    billingSetup: [
      {
        title: "Map meters to suites",
        description:
          "Axis confirms that each thermal meter is tied to the correct suite, tenant space, account, and billing period.",
      },
      {
        title: "Convert usage into charges",
        description:
          "Thermal consumption is translated into resident or tenant charges using the property billing rules and applicable rate structure.",
      },
      {
        title: "Support account changes",
        description:
          "Move-ins, move-outs, final reads, resident questions, and account updates are handled as part of the billing workflow.",
      },
    ],
    compliance: {
      intro:
        "Thermal energy metering needs defensible measurement, clear unit mapping, and documented billing logic because heating and cooling charges can be reviewed by residents, owners, boards, and auditors.",
      points: [
        {
          title: "Commissioned meter data",
          description:
            "Meters are configured, checked, and connected so billing is based on repeatable usage data.",
        },
        {
          title: "Documented billing records",
          description:
            "Usage, service periods, rates, and account details are preserved to explain charges and resolve questions.",
        },
        {
          title: "Ongoing maintenance support",
          description:
            "Axis supports meter performance, read exceptions, service issues, and replacement coordination over the life of the program.",
        },
      ],
    },
    faqs: [
      {
        question: "What is thermal energy metering?",
        answer:
          "Thermal energy metering measures heating or cooling energy delivered to a suite, tenant space, or zone so usage can be billed or allocated accurately.",
      },
      {
        question: "Which properties need thermal energy metering?",
        answer:
          "Thermal energy metering is useful for apartments, condos, mixed-use buildings, student housing, and commercial properties with central heating, cooling, or district energy systems.",
      },
      {
        question: "Can thermal usage appear on the same bill as other utilities?",
        answer:
          "Yes. Axis can include thermal charges with electricity, water, gas, or other metered utilities when the property program supports consolidated billing.",
      },
      {
        question: "Does Axis maintain thermal meters after installation?",
        answer:
          "Yes. Axis can provide ongoing monitoring, maintenance, troubleshooting, data review, and resident support as part of a managed metering program.",
      },
    ],
    cta: {
      title: "Need thermal energy metering for your building?",
      description:
        "Talk with Axis about your heating and cooling system, tenant billing goals, and the best metering setup for your property.",
    },
  },
];

const utilityPageMap = new Map(utilityPages.map((page) => [page.slug, page]));

export function generateStaticParams() {
  return utilityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = utilityPageMap.get(slug);

  if (!page) {
    return {
      title: "Utility Not Found | Axis Meter Solutions",
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/utilities/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      url: `https://axismeter.com/utilities/${page.slug}`,
      images: [{ url: page.hero.image }],
    },
  };
}

export default async function UtilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = utilityPageMap.get(slug);

  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://axismeter.com" },
          { name: "Solutions", url: "https://axismeter.com/solutions" },
          { name: page.title, url: `https://axismeter.com/utilities/${page.slug}` },
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
            <div className="mt-10">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-it-matters" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase">
              Why It Matters
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Why {page.targetKeyword} matters for multi-unit buildings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.whyItMatters.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metering-requirements" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase">
              Metering Requirements
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              What the metering system needs to capture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.meteringRequirements.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="billing-setup" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase">
              Billing Setup
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              From meter readings to tenant billing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.billingSetup.map((item, index) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-8">
                <div className="w-12 h-12 bg-accent text-navy font-bold rounded-full flex items-center justify-center mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent font-semibold text-sm uppercase">
                Compliance
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Built for clear, defensible billing
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {page.compliance.intro}
              </p>
            </div>
            <div className="space-y-5">
              {page.compliance.points.map((point) => (
                <div key={point.title} className="bg-white rounded-lg p-6 shadow-sm">
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

      <section id="faq" className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Thermal energy metering questions
            </h2>
          </div>
          <div className="space-y-5">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-lg p-6">
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
