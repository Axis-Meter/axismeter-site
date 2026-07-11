import Link from "next/link";
import Image from "next/image";
import { FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How It Works — Axis Meter Solutions",
  description: "From free consultation to live meters in 8-10 weeks. Learn exactly how Axis Meter's submetering process works, step by step.",
  path: "/how-it-works",
});

const steps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "It starts with a conversation. Tell us about your building — how many units, what utilities you're paying, and what you're trying to achieve.",
    details: [
      "We assess your building's layout and current utility setup",
      "Recommend the right metering solution (electricity, water, or both)",
      "Provide a clear quote with no hidden costs",
      "Answer every question — no sales pressure, just straight answers",
    ],
  },
  {
    step: "2",
    title: "Installation",
    description: "Once you sign the agreement, we handle everything. Equipment is ordered, installation is coordinated, and you barely have to lift a finger.",
    details: [
      "Equipment delivery: approximately 6 weeks",
      "We coordinate with your electrician for access",
      "Axis handles all meter mounting and commissioning",
      "Regulatory approvals and certifications managed by us",
      "Typical building access needed: 1-2 days",
    ],
  },
  {
    step: "3",
    title: "Go Live",
    description: "Meters are active, tenants are billed, and your leak detection is monitoring 24/7. You start recovering costs from day one.",
    details: [
      "Tenant billing begins automatically",
      "Leak and flood detection sensors are active",
      "Ongoing monitoring and maintenance by Axis",
      "Tenant communication and support handled by us",
      "Real-time consumption data available to you",
    ],
  },
];

const faqs = [
  { q: "What does submetering cost me upfront?", a: "$0. Axis Meter owns all equipment during the 20-year agreement. We handle installation, maintenance, and billing. You pay nothing to get started." },
  { q: "How long does the entire process take?", a: "8-10 weeks from signed agreement to live meters. That includes equipment ordering (about 6 weeks), installation, and commissioning." },
  { q: "What if I only have 10 units? Am I too small?", a: "Not at all. We work with buildings as small as 5 units. The big submetering companies won't bother with smaller properties — we will." },
  { q: "Will my tenants be upset about being submetered?", a: "Most tenants understand that paying for what you use is fair. Average bills are modest because submetered tenants naturally conserve 30-40% more. We handle all tenant communication to make the transition smooth." },
  { q: "What happens if a meter breaks or needs maintenance?", a: "Axis owns and maintains all equipment. If anything needs repair or replacement, we handle it at no cost to you." },
  { q: "Is this legal and compliant?", a: "100%. All meters are Measurement Canada approved and regularly inspected. We maintain full compliance with all applicable Canadian and US regulations." },
  { q: "What about the 20-year agreement? That seems long.", a: "Early termination is available anytime with a buyout based on the remaining term. At the end of 20 years, you can renew, purchase the equipment at fair market value, or we remove it. No lock-in surprises." },
  { q: "Do you serve both the US and Canada?", a: "Yes. We're fully operational in both countries with all required certifications and approvals." },
  { q: "How does leak detection work?", a: "We install sensors in high-risk areas during the metering installation. These sensors monitor 24/7 and alert you immediately if water is detected where it shouldn't be. It's included free with every install." },
  { q: "What if I want both electricity and water metering?", a: "Many of our clients do both. We can install electricity and water meters simultaneously, with leak detection included. One provider, one system, complete utility management." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1581094794329-c8112a89af12.jpg"
          alt="Professional consultation and installation process"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              How It Works:{" "}
              <span className="text-accent">Three Steps to Savings</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              From your first call to live meters, the entire process takes 8-10 weeks.
              We handle everything — you just start saving.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
              TOTAL TIMELINE: 8-10 WEEKS
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-16">
            <Image
              src="/images/hero/photo-1581094794329-c8112a89af12.jpg"
              alt="Professional meter installation and consultation process"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-16">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-accent text-navy font-bold text-2xl rounded-full flex items-center justify-center">
                    {s.step}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-gray-600">
                        <span className="text-accent mt-1">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
        <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "How It Works", url: "https://axismeter.com/how-it-works" }]} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Book a free consultation. No pressure, no obligation — just a straight conversation about whether submetering makes sense for your property.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-4 text-gray-500 text-sm">US & Canada · $0 Upfront · Free Leak Detection</p>
        </div>
      </section>
    </>
  );
}
