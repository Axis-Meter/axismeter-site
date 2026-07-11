"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      propertyType: (form.elements.namedItem("propertyType") as HTMLSelectElement).value,
      units: (form.elements.namedItem("units") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1423666639041-f56000c27a9a.jpg"
          alt="Professional communication and customer support"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Get in{" "}
              <span className="text-accent">Touch</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Have questions about submetering? Want a free assessment for your property?
              Reach out — we respond to all inquiries within 1 business day.
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

              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 1 business day.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-accent font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <option value="Residential Rental">Residential Rental</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Mixed-Use">Mixed-Use</option>
                        <option value="Student Housing">Student Housing</option>
                        <option value="Affordable Housing">Affordable Housing</option>
                        <option value="Other">Other</option>
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

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      Something went wrong. Please try again or email us directly at info@axismeter.com.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors w-full disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                  <a href="mailto:info@axismeter.com" className="text-accent hover:underline text-lg">info@axismeter.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                  <a href="tel:+12267025500" className="text-accent hover:underline text-lg">226-702-5500</a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Service Area</h3>
                  <p className="text-gray-600">We serve property owners across the United States and Canada.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⏰ Response Time</h3>
                  <p className="text-gray-600">We respond to all inquiries within 1 business day. Most messages get a response within a few hours.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Not Sure Where to Start?</h3>
                  <p className="text-gray-600 mb-4">Fill out the form with your building details and we&apos;ll come back with a custom assessment — no obligation.</p>
                </div>

                {/* Service Area */}
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero/photo-1526778548025-fa2f459cd5c1.jpg"
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
