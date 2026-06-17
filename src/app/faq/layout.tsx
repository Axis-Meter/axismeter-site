import type { Metadata } from "next";
import { FAQSchema } from "@/components/JsonLd";

const faqItems = [
  { question: "What is utility submetering?", answer: "Submetering is the installation of individual meters on each unit in a multi-unit building, allowing each tenant to be billed based on their actual utility consumption rather than a flat rate or split." },
  { question: "How much does it cost to install submeters?", answer: "There is zero upfront cost to the property owner. Axis Meter owns, installs, and maintains all metering equipment for the duration of the agreement." },
  { question: "How long is the agreement term?", answer: "Our standard agreement term is 20 years. This allows us to provide $0 upfront installation while ensuring long-term service and equipment maintenance." },
  { question: "What utilities can you submeter?", answer: "We submeter electricity, water, gas, and thermal (heating and cooling) — including complex systems like VRF, hydronic, and fan coil. We also meter common areas." },
  { question: "How long does installation take?", answer: "Equipment delivery typically takes about 6 weeks, with the full process from signed agreement to live meters taking 8–10 weeks." },
  { question: "Why am I receiving a bill from Axis Meter?", answer: "Your building has been set up with utility submetering, which means each unit is billed for its actual utility usage instead of a flat rate." },
  { question: "How is my bill calculated?", answer: "Your bill is based on your actual meter readings — the difference between your current and previous reading, multiplied by the applicable rate, plus a monthly delivery fee." },
  { question: "Do you offer leak and flood detection?", answer: "Yes — every Axis Meter installation includes leak and flood detection sensors at no extra cost." },
  { question: "What areas do you serve?", answer: "We provide full-service submetering across the United States and Canada for residential, commercial, and mixed-use properties of all sizes." },
  { question: "Are your meters Measurement Canada approved?", answer: "Yes. All meters are Measurement Canada approved and regularly inspected to ensure full regulatory compliance." },
];

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Axis Meter Solutions",
  description: "Common questions about utility submetering answered. Installation costs, agreement terms, tenant billing, meter types, and service areas. Property owners and tenants.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      {children}
    </>
  );
}
