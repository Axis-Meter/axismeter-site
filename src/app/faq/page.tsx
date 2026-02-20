"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    title: "Property Owners",
    icon: "🏢",
    faqs: [
      {
        q: "What is utility submetering?",
        a: "Submetering is the installation of individual meters on each unit in a multi-unit building, allowing each tenant to be billed based on their actual utility consumption rather than a flat rate or split. This covers electricity, water, gas, and thermal (heating/cooling).",
      },
      {
        q: "How much does it cost to install submeters?",
        a: "There is zero upfront cost to the property owner. Axis Meter owns, installs, and maintains all metering equipment for the duration of the agreement. You pay nothing to get started.",
      },
      {
        q: "Who owns the metering equipment?",
        a: "Axis Meter owns all metering equipment during the agreement term. At the end of the term, the original equipment stays with the building. Any replacement equipment installed during the term is available at fair market value.",
      },
      {
        q: "How long is the agreement term?",
        a: "Our standard agreement term is 20 years. This allows us to provide $0 upfront installation while ensuring long-term service and equipment maintenance.",
      },
      {
        q: "What happens if I want to terminate early?",
        a: "Early termination is available at any time. The buyout amount is based on the remaining term and is outlined in a schedule within your contract — no surprises.",
      },
      {
        q: "How long does installation take?",
        a: "Equipment delivery typically takes about 6 weeks, with the full process from signed agreement to live meters taking 8–10 weeks. We coordinate everything to minimize disruption.",
      },
      {
        q: "Do I need to hire my own electrician?",
        a: "The property owner's electrician handles the wiring work. Axis Meter handles all meter mounting, commissioning, and ongoing maintenance. Any wiring required specifically for Axis equipment and code compliance is covered by Axis.",
      },
      {
        q: "What utilities can you submeter?",
        a: "We submeter electricity, water, gas, and thermal (heating and cooling) — including complex systems like VRF, hydronic, and fan coil. We also meter common areas such as lobbies, hallways, parking, and amenity spaces.",
      },
      {
        q: "How does billing work for my tenants?",
        a: "Tenants receive a single monthly invoice from Axis Meter that consolidates all submetered utilities. We handle all meter reading, billing, account management, and customer support — you don't have to manage any of it.",
      },
      {
        q: "Are your meters Measurement Canada approved?",
        a: "Yes. All meters are Measurement Canada approved and regularly inspected to ensure full regulatory compliance. We maintain 100% compliance across all installations in the US and Canada.",
      },
    ],
  },
  {
    title: "Tenants & Residents",
    icon: "🏠",
    faqs: [
      {
        q: "Why am I receiving a bill from Axis Meter?",
        a: "Your building has been set up with utility submetering, which means each unit is billed for its actual utility usage instead of a flat rate. Axis Meter reads your meter, calculates your consumption, and sends you a monthly bill on behalf of your building.",
      },
      {
        q: "How is my bill calculated?",
        a: "Your bill is based on your actual meter readings — the difference between your current and previous reading, multiplied by the applicable rate. A monthly delivery fee (typically $20–$26) covers metering, billing, and account management.",
      },
      {
        q: "How do I pay my bill?",
        a: "You can pay online through your tenant portal at myaccount.axismeter.com, or by other methods outlined on your bill. We accept multiple payment options for your convenience.",
      },
      {
        q: "What is the delivery fee on my bill?",
        a: "The delivery fee ($20–$26/month depending on equipment) covers the cost of metering infrastructure, automated meter reading, billing, account management, and customer support. It is a standard part of submetered utility billing.",
      },
      {
        q: "What if I think my meter reading is wrong?",
        a: "Contact us and we will investigate. Our meters are Measurement Canada approved and regularly inspected for accuracy. If there is an error, we will correct it and adjust your bill accordingly.",
      },
      {
        q: "How do I set up my account when I move in?",
        a: "Your building manager or property owner will notify us of your move-in. We will set up your account and send you information about how to access your tenant portal and pay your bills.",
      },
      {
        q: "Who do I contact about my utility bill?",
        a: "Contact Axis Meter directly at 226-702-5500 or info@axismeter.com. Our team handles all tenant billing inquiries — you do not need to go through your landlord.",
      },
    ],
  },
  {
    title: "Technical & Service",
    icon: "⚙️",
    faqs: [
      {
        q: "What types of meters do you install?",
        a: "We deploy meters from industry-leading manufacturers including Next Century, GWF, Accuenergy, Triacta, and Elvaco. The specific meter type depends on the utility being measured and your building's configuration.",
      },
      {
        q: "Do you offer leak and flood detection?",
        a: "Yes — every Axis Meter installation includes leak and flood detection sensors at no extra cost. Our sensors provide real-time monitoring and alerts to catch leaks before they cause costly damage.",
      },
      {
        q: "How does common area metering work?",
        a: "We install meters on common area circuits and systems — lobbies, hallways, parking garages, laundry rooms, fitness centers, and other shared spaces. This gives you full visibility into where your building's energy is going and helps identify waste.",
      },
      {
        q: "What areas do you serve?",
        a: "We provide full-service submetering across the United States and Canada. Residential, commercial, and mixed-use properties of all sizes.",
      },
      {
        q: "Are you fully regulatory compliant?",
        a: "Yes. We maintain 100% regulatory compliance across all installations. All meters are Measurement Canada approved and meet applicable US and Canadian standards for revenue-grade utility billing.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <span className={`text-accent text-xl flex-shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <p className="pb-5 text-gray-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Everything you need to know about submetering — whether you&apos;re a property owner, tenant, or just exploring your options.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span> {section.title}
              </h2>
              <div>
                {section.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to answer anything not covered here. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+12267025500"
              className="border border-gray-300 hover:border-accent text-gray-700 hover:text-accent font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              📞 226-702-5500
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
