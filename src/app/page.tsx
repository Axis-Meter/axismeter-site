import Link from "next/link";
import Image from "next/image";
import { FAQSchema } from "@/components/JsonLd";

const stats = [
  { value: "32%", label: "Avg. Property Value Increase" },
  { value: "18%", label: "Lower Operating Costs" },
  { value: "100%", label: "Regulatory Compliant" },
];

const differentiators = [
  {
    icon: "💧",
    title: "Free Leak & Flood Detection",
    description:
      "Every install comes with leak and flood detection at no extra cost. Catch water damage before it costs you thousands.",
  },
  {
    icon: "💰",
    title: "$0 Upfront Cost",
    description:
      "We own and maintain all equipment during the 20-year term. You pay nothing to get started — zero capital expenditure.",
  },
  {
    icon: "🏢",
    title: "Deep Real Estate Expertise",
    description:
      "Our team brings decades of combined experience in property management and real estate investment. We understand NOI, cap rates, and your bottom line — because we've sat in your chair.",
  },
  {
    icon: "⚡",
    title: "Live in 8–10 Weeks",
    description:
      "From signed agreement to live meters in 8–10 weeks. No drawn-out timelines, no surprises. We move fast because your time matters.",
  },
  {
    icon: "✅",
    title: "Industry Certification and Compliance",
    description:
      "All meters are Measurement Canada approved and fully certified. We maintain 100% regulatory compliance across the US and Canada so you never have to worry.",
  },
  {
    icon: "🤝",
    title: "Collaborative Cost-Saving Strategies",
    description:
      "We work directly with your engineering team and property managers to design the optimal metering layout. Our approach is collaborative, not cookie-cutter.",
  },
];

const steps = [
  {
    step: "1",
    title: "Share Your Property Details",
    description: "Fill out a quick form or book a call. Tell us about your building — size, units, current utility setup.",
  },
  {
    step: "2",
    title: "Talk to a Real Expert",
    description: "No call centers, no junior reps. You'll speak directly with a submetering specialist who understands property operations inside and out.",
  },
  {
    step: "3",
    title: "Go Live in 8–10 Weeks",
    description: "We handle everything — equipment, installation, regulatory compliance. You start saving from day one.",
  },
];

const marketsList = [
  { name: "Residential Rentals", href: "/markets/residential-rentals", icon: "🏠", description: "Multi-family apartments and rental properties", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
  { name: "Condominiums", href: "/markets/condos", icon: "🏙️", description: "Condo corporations and strata councils", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Commercial", href: "/markets/commercial", icon: "🏢", description: "Office buildings and retail spaces", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Mixed-Use", href: "/markets/mixed-use", icon: "🏗️", description: "Combined residential and commercial properties", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Student Housing", href: "/markets/student-housing", icon: "🎓", description: "University and college residences", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80" },
  { name: "Affordable Housing", href: "/markets/affordable-housing", icon: "🤝", description: "Subsidized and community housing", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80" },
];

const testimonials = [
  {
    quote: "Axis Meter made the entire process seamless. From the initial consultation to installation, everything was handled professionally. Our operating costs dropped significantly.",
    name: "Property Manager",
    role: "Multi-Family Portfolio, Ontario",
  },
  {
    quote: "What sold me was the free leak detection. We had a water leak last year that cost us $40,000 in damage. With Axis Meter, we would have caught it in minutes.",
    name: "Building Owner",
    role: "Commercial Property, Toronto",
  },
  {
    quote: "What sets Axis apart is their deep understanding of property operations. No sales pitch, no runaround — just straight answers and fast execution.",
    name: "Real Estate Investor",
    role: "Residential Portfolio, Canada",
  },
];

const faqs = [
  {
    q: "What does submetering actually cost me?",
    a: "$0 upfront. Axis Meter owns all equipment during the 20-year agreement. We handle installation, maintenance, and billing. You get the savings without the capital outlay.",
  },
  {
    q: "How long does installation take?",
    a: "From signed agreement to live meters, you're looking at 8–10 weeks. We manage the entire process including permits, installation, and regulatory approval.",
  },
  {
    q: "Do you serve both the US and Canada?",
    a: "Yes. We're fully operational in both countries with Measurement Canada approved meters and all required certifications for US markets.",
  },
  {
    q: "Is leak detection really free?",
    a: "Yes. Every Axis Meter installation includes leak and flood detection sensors at no additional cost. It's not an upsell — it's standard.",
  },
  {
    q: "What happens after the 20-year term?",
    a: "You have options: renew, purchase the equipment at fair market value, or we remove it. No lock-in surprises.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="Modern apartment building at dusk with warm lighting"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stop Overpaying for Utilities.{" "}
              <span className="text-accent">Start Building Equity.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              North America&apos;s trusted submetering partner for multi-family and commercial properties.
              $0 upfront. Free leak detection. Live in 8–10 weeks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Book a Free Call
              </Link>
              <Link
                href="/how-it-works"
                className="border border-gray-500 hover:border-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-light border-y border-navy-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Submetering? */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">Why submetering?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Submetering: Greater Utility Control and ROI
              </h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Submetering utilities is pivotal for real estate investors, developers, and builders looking to increase
                their property&apos;s net operating income. By offering precise utility usage data, submetering allows
                property owners to charge tenants accurately and encourages energy conservation. This transparency not
                only elevates property value but also ensures predictable monthly costs, leading to higher tenant
                satisfaction and retention.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                alt="Modern apartment building representing submetered properties"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-navy-light border border-navy-lighter rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-3">Accurate Billing and Fair Charges</h3>
              <p className="text-gray-300 leading-relaxed">
                Submetering provides precise data on individual tenant utility usage, ensuring billing is fair and
                accurate, which helps in maintaining transparent tenant relationships and minimizing disputes over charges.
              </p>
            </div>
            <div className="bg-navy-light border border-navy-lighter rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-3">Predictable Operating Expenses</h3>
              <p className="text-gray-300 leading-relaxed">
                Submetering stabilizes your property&apos;s operating costs by eliminating the variability of utility
                expenses, giving you and your tenants predictable monthly bills that are easier to manage and budget for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80"
                alt="High-rise apartment building representing utility cost challenges"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Utility Costs Are Eating Your Returns
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                If you&apos;re still paying bulk utility bills for your tenants, you&apos;re leaving money on the table.
                Submetering lets each unit pay for what they actually use — cutting your operating costs,
                increasing property value, and promoting conservation. It&apos;s not a nice-to-have anymore.
                In many jurisdictions, it&apos;s the law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Property Owners Choose Axis Meter</h2>
            <p className="mt-4 text-lg text-gray-600">We do things differently. Here&apos;s what that looks like.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{d.title}</h3>
                <p className="text-gray-600 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Three Steps. That&apos;s It.</h2>
            <p className="mt-4 text-lg text-gray-400">No red tape. No drawn-out process. Just results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-navy font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Markets We Serve</h2>
            <p className="mt-4 text-lg text-gray-600">Purpose-built solutions for every property type.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketsList.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group bg-gray-50 hover:bg-navy rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors">{m.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-accent text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-600 leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
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

      {/* Final CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Talk to an Expert Today</h2>
          <p className="mt-6 text-lg text-gray-300">
            No pressure, no sales pitch. Just a real conversation about whether submetering makes sense for your property.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Book a Free Call
            </Link>
          </div>
          <p className="mt-4 text-gray-500 text-sm">US & Canada · Measurement Canada Approved · Fully Certified</p>
        </div>
      </section>
    </>
  );
}
