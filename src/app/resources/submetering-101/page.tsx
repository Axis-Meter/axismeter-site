import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Submetering 101: Everything You Need to Know — Axis Meter Solutions",
  description: "The complete guide to utility submetering. Learn what it is, how it works, benefits, types, and how it compares to bulk metering and RUBS.",
};

export default function Submetering101Page() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://axismeter.com" }, { name: "Resources", url: "https://axismeter.com/resources" }, { name: "Submetering 101", url: "https://axismeter.com/resources/submetering-101" }]} />
      <FAQSchema faqs={[
        { question: "How much does submetering cost?", answer: "With Axis Meter, $0 upfront. We own all equipment during the agreement term. Some providers sell meters outright, which can cost $200-500 per meter plus installation." },
        { question: "How long does installation take?", answer: "With Axis Meter, 8-10 weeks from agreement to live meters. Equipment ordering takes about 6 weeks, and installation is typically 1-2 days of building access." },
        { question: "Can you submeter an older building?", answer: "Yes. Retrofit submetering is common and can be done in most buildings regardless of age." },
        { question: "Do tenants have to agree to submetering?", answer: "In most jurisdictions, the property owner can implement submetering as part of building operations. Specific rules vary by location — we handle compliance for you." },
        { question: "What happens if a meter malfunctions?", answer: "With Axis Meter, we own and maintain all equipment. If a meter needs repair or replacement, we handle it at no cost to you." },
      ]} />
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
          alt="Utility submetering equipment and meters"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase">Resource Guide</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-2">
              Submetering 101:{" "}
              <span className="text-accent">Everything You Need to Know</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              The complete guide to utility submetering for property owners. What it is, how it works,
              and why it&apos;s one of the smartest investments you can make for your building.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* What Is Submetering */}
            <div className="relative h-[300px] rounded-xl overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                alt="Utility meters and submetering equipment overview"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Submetering?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Submetering is the practice of installing individual utility meters in each unit of a multi-unit
              building to measure actual consumption. Instead of one bulk meter for the entire building, each
              apartment, condo unit, or commercial space gets its own meter — and each tenant is billed based
              on what they actually use.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              Think of it this way: without submetering, every tenant in a building shares one water bill equally,
              regardless of whether they take 5-minute showers or 30-minute baths. With submetering, everyone pays
              for their own usage. It&apos;s the same principle as having your own electricity account in a house — but
              applied to multi-unit buildings.
            </p>

            {/* How Does It Work */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does Submetering Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The process is straightforward:
            </p>
            <ol className="space-y-4 mb-12">
              <li className="flex gap-4">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span className="text-gray-600"><strong className="text-gray-900">Meters are installed</strong> — Certified meters are placed on each unit&apos;s electrical panel and/or water supply line.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span className="text-gray-600"><strong className="text-gray-900">Data is collected automatically</strong> — Modern meters transmit consumption data wirelessly to a central billing platform. No manual reads needed.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span className="text-gray-600"><strong className="text-gray-900">Tenants are billed monthly</strong> — Each tenant receives a bill based on their actual usage. The submetering company handles all billing and collections.</span>
              </li>
            </ol>

            {/* Benefits for Property Owners */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Property Owners</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: "Cost Recovery", text: "The most immediate benefit. Stop paying utility costs that tenants should be covering. A typical 20-unit building can recover $2,000-4,000/month." },
                { title: "Increased Property Value", text: "Lower operating costs mean higher NOI, which directly increases your property's value. Average property value increase with submetering is 32%." },
                { title: "Reduced Consumption", text: "When tenants pay for what they use, they conserve. Buildings see 30-40% reduction in utility consumption after submetering." },
                { title: "Better Data", text: "Real-time consumption data helps you identify issues, track trends, and make informed decisions about your building." },
                { title: "Leak Detection", text: "Water meters and leak sensors can catch problems early — before a small drip becomes a $50,000 flood." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  <div className="text-gray-600"><strong className="text-gray-900">{item.title}:</strong> {item.text}</div>
                </div>
              ))}
            </div>

            {/* Benefits for Tenants */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Tenants</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: "Fairness", text: "You only pay for what you use. No more subsidizing your neighbor's energy habits." },
                { title: "Control", text: "You can actively manage your utility costs by conserving. Small changes — LED bulbs, shorter showers — make a real difference on your bill." },
                { title: "Transparency", text: "Clear, detailed bills show exactly what you consumed and what you're paying for." },
                { title: "Lower Overall Costs", text: "Because submetered buildings consume 30-40% less, individual bills are often lower than what tenants expect." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  <div className="text-gray-600"><strong className="text-gray-900">{item.title}:</strong> {item.text}</div>
                </div>
              ))}
            </div>

            {/* Types of Submetering */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Submetering</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "⚡", title: "Electricity", text: "The most common type. Meters installed in electrical panels measure per-unit power consumption." },
                { icon: "💧", title: "Water", text: "Meters on water supply lines measure individual water usage. Often paired with leak detection." },
                { icon: "🌡️", title: "Thermal (Heating/Cooling)", text: "Measures heat or cooling delivered to each unit. Common in buildings with central HVAC systems." },
                { icon: "🔥", title: "Gas", text: "Individual gas meters for buildings with per-unit gas connections. Less common but available." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Submetering vs Bulk Metering */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Submetering vs. Bulk Metering</h2>
            <div className="bg-gray-50 rounded-xl overflow-hidden mb-12">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-4 font-semibold text-gray-900 bg-gray-100" />
                <div className="p-4 font-semibold text-gray-900 bg-gray-100 text-center">Bulk Metering</div>
                <div className="p-4 font-semibold text-accent bg-navy text-center">Submetering</div>
                {[
                  ["Billing accuracy", "Estimated/split evenly", "Exact per-unit usage"],
                  ["Conservation incentive", "None", "30-40% reduction"],
                  ["Cost recovery", "Owner pays all", "Tenants pay their usage"],
                  ["Tenant fairness", "Heavy users subsidized", "Pay for what you use"],
                  ["Data available", "Building total only", "Per-unit, real-time"],
                  ["Leak detection", "Not possible", "Built-in capability"],
                ].map(([label, bulk, sub]) => (
                  <>
                    <div key={label} className="p-4 text-gray-900 font-medium border-t border-gray-200">{label}</div>
                    <div className="p-4 text-gray-600 border-t border-gray-200 text-center">{bulk}</div>
                    <div className="p-4 text-gray-600 border-t border-gray-200 text-center">{sub}</div>
                  </>
                ))}
              </div>
            </div>

            {/* Submetering vs RUBS */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Submetering vs. RUBS</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RUBS (Ratio Utility Billing System) allocates utility costs to tenants based on formulas — usually
              square footage, number of occupants, or a combination. It&apos;s better than bulk billing, but it&apos;s not
              based on actual usage.
            </p>
            <div className="bg-gray-50 rounded-xl p-8 mb-12 space-y-4">
              <div className="flex gap-3">
                <span className="text-red-400 shrink-0">✗</span>
                <span className="text-gray-600"><strong>RUBS:</strong> Estimates based on formulas. A single person in a large unit may pay more than a family in a small unit. Tenants often find it unfair and dispute bills.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent shrink-0">✓</span>
                <span className="text-gray-600"><strong>Submetering:</strong> Actual measured consumption. Every tenant pays for exactly what they use. No estimation, no disputes, real conservation incentive.</span>
              </div>
            </div>

            {/* Regulatory Landscape */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Landscape</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Submetering regulations vary by jurisdiction. Here&apos;s a brief overview:
            </p>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🇨🇦 Canada</h3>
                <p className="text-gray-600">
                  In Ontario, submetering is regulated under the Ontario Energy Board (OEB). All meters must be
                  Measurement Canada approved and regularly inspected. Many provinces now require or encourage
                  submetering in new multi-unit construction. Alberta, British Columbia, and Quebec each have
                  their own regulatory frameworks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🇺🇸 United States</h3>
                <p className="text-gray-600">
                  Regulations vary by state. Many states allow submetering with specific consumer protection
                  requirements. States like New York, California, and Texas have established submetering frameworks.
                  Local utility commission rules may also apply.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              {[
                { q: "How much does submetering cost?", a: "With Axis Meter, $0 upfront. We own all equipment during the agreement term. Some providers sell meters outright, which can cost $200-500 per meter plus installation." },
                { q: "How long does installation take?", a: "With Axis Meter, 8-10 weeks from agreement to live meters. Equipment ordering takes about 6 weeks, and installation is typically 1-2 days of building access." },
                { q: "Can you submeter an older building?", a: "Yes. Retrofit submetering is common and can be done in most buildings regardless of age. The meters are installed in existing electrical panels and on existing water lines." },
                { q: "Do tenants have to agree to submetering?", a: "In most jurisdictions, the property owner can implement submetering as part of building operations. Specific rules vary by location — we handle compliance for you." },
                { q: "What happens if a meter malfunctions?", a: "With Axis Meter, we own and maintain all equipment. If a meter needs repair or replacement, we handle it at no cost to you." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Explore Submetering?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Now that you know the basics, let&apos;s talk about your specific property.
            Book a free consultation and get a custom assessment — no obligation.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
