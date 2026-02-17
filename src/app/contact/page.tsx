import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Axis Meter Solutions",
  description: "Get in touch with Axis Meter Solutions. Book a free consultation, ask questions, or request a quote for your property.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Professional communication and customer support"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let&apos;s{" "}
              <span className="text-accent">Talk</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Have questions about submetering? Want a free assessment for your property?
              Reach out — you&apos;ll talk to a real person, not a call center.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select id="propertyType" name="propertyType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-white">
                      <option value="">Select...</option>
                      <option value="residential">Residential Rental</option>
                      <option value="condo">Condominium</option>
                      <option value="commercial">Commercial</option>
                      <option value="mixed-use">Mixed-Use</option>
                      <option value="student">Student Housing</option>
                      <option value="affordable">Affordable Housing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">Number of Units</label>
                  <input type="number" id="units" name="units" placeholder="e.g. 20" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" placeholder="Tell us about your property and what you're looking for..." />
                </div>
                <button type="submit" className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                  <a href="mailto:info@axismeter.com" className="text-accent hover:underline text-lg">info@axismeter.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                  <p className="text-lg text-gray-600">1-800-AXIS-MTR (Coming Soon)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Service Area</h3>
                  <p className="text-gray-600">We serve property owners across the United States and Canada. No matter where your building is, we can help.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⏰ Response Time</h3>
                  <p className="text-gray-600">We respond to all inquiries within 1 business day. Most messages get a response within a few hours.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Prefer to Book a Call Directly?</h3>
                  <p className="text-gray-600 mb-4">Skip the form and schedule a free 15-30 minute consultation at a time that works for you.</p>
                  <Link href="/property-owners" className="bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
                    Book a Free Call →
                  </Link>
                </div>

                {/* Service Area Map */}
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80"
                    alt="Map representing US and Canada service coverage"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center">
                    <h3 className="font-semibold text-white text-lg mb-1">Serving All of US & Canada</h3>
                    <p className="text-gray-300 text-sm">Wherever your property is, we can help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
