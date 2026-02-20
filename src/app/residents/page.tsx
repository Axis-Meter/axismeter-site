import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Residents — Axis Meter Solutions",
  description: "Living in an Axis Meter building? Set up your account, understand your bill, get conservation tips, and find answers to common questions.",
};

const faqs = [
  { q: "Why am I being billed for utilities separately?", a: "Your building has been equipped with individual meters so each unit pays for their actual utility usage. This is fairer than splitting costs equally — you only pay for what you use." },
  { q: "How is my usage measured?", a: "Certified meters installed in your unit measure your actual electricity and/or water consumption. These meters are Measurement Canada approved and regularly inspected for accuracy." },
  { q: "What is the delivery fee on my bill?", a: "The delivery fee ($20-26/month) covers the cost of meter reading, billing, and maintenance of the metering equipment. This is standard across submetered buildings." },
  { q: "My bill seems high. What can I do?", a: "Check our conservation tips below. Common culprits include space heaters, old appliances, running water while brushing teeth, and leaving lights on. If you believe there's an error, contact us and we'll investigate." },
  { q: "How do I set up my account?", a: "Visit myaccount.axismeter.com to create your account. You'll need your unit number and the account number from your first bill." },
  { q: "How do I pay my bill?", a: "You can pay online through your account portal at myaccount.axismeter.com. We accept various payment methods including credit card and bank transfer." },
  { q: "I'm moving out. What do I need to do?", a: "Contact us at least 5 business days before your move-out date. We'll take a final meter reading and send your last bill to your forwarding address." },
  { q: "Who do I contact with questions about my bill?", a: "You can reach our resident support team at info@axismeter.com or through the contact form on this page. We're here to help." },
];

const tips = [
  { icon: "💡", title: "Switch to LED Bulbs", description: "LED bulbs use up to 75% less energy than incandescent bulbs and last 25 times longer." },
  { icon: "🌡️", title: "Manage Your Thermostat", description: "Lowering your thermostat by just 1°C can reduce heating costs by 3%. Use a programmable thermostat if available." },
  { icon: "🚿", title: "Shorter Showers", description: "Cutting your shower by just 2 minutes can save up to 40 litres of water per shower." },
  { icon: "🔌", title: "Unplug When Not in Use", description: "Electronics draw power even when off. Unplug chargers, TVs, and appliances when not in use, or use a power bar." },
  { icon: "🧺", title: "Full Loads Only", description: "Run your dishwasher and washing machine only with full loads. This saves both water and electricity." },
  { icon: "❄️", title: "Check Your Fridge", description: "Make sure your fridge seal is tight and the temperature is set correctly (3-4°C for the fridge, -18°C for the freezer)." },
];

export default function ResidentsPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1522708323590-d24dbb6b0267.jpg"
          alt="Modern apartment interior with comfortable living space"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Welcome,{" "}
              <span className="text-accent">Residents</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Living in an Axis Meter building? We&apos;re here to help. Set up your account,
              understand your bill, and find tips to save on your utilities.
            </p>
            <div className="mt-10">
              <a
                href="https://myaccount.axismeter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
              >
                Access Your Account →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Account Setup */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[250px] rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/hero/photo-1556742049-0cfed4f6a45d.jpg"
              alt="Person using smartphone to manage their utility account"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Setting Up Your Account</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent text-navy font-bold rounded-full flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Visit myaccount.axismeter.com</h3>
                <p className="text-gray-600">Go to the account portal and click &quot;Create Account.&quot;</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent text-navy font-bold rounded-full flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Enter Your Details</h3>
                <p className="text-gray-600">You&apos;ll need your unit number and the account number from your first bill or welcome letter.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent text-navy font-bold rounded-full flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Set Up Payment</h3>
                <p className="text-gray-600">Add your preferred payment method to pay your monthly bills conveniently online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Bill */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Understanding Your Bill</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm space-y-4">
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-900">Usage Charges</span>
              <span className="text-gray-600">Based on your actual meter reading</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-900">Delivery Fee</span>
              <span className="text-gray-600">$20-26/month for meter service</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-900">Billing Period</span>
              <span className="text-gray-600">Monthly, based on meter read dates</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">Due Date</span>
              <span className="text-gray-600">Shown on your bill — typically 21 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Tips */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Tips to Lower Your Bill</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((t) => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-8">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 sm:py-28">
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

      {/* Contact Support */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Need Help?</h2>
          <p className="mt-6 text-lg text-gray-300">
            Our resident support team is here to assist you with any questions about your account, billing, or meters.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-gray-300">
              Email: <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>
            </p>
            <p className="text-gray-300">
              Account Portal: <a href="https://myaccount.axismeter.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">myaccount.axismeter.com</a>
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-10 py-4 rounded-lg text-lg transition-colors inline-block">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
