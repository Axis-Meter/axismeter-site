import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been received by Axis Meter Solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <main className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-green-200 bg-white p-8 shadow-sm sm:p-12">
          <div aria-hidden="true" className="text-5xl">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Thank You for Contacting Axis
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Your message has been received. We&apos;ll review your property details and respond
            within one business day.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-navy transition-colors hover:bg-accent-dark"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-navy transition-colors hover:border-navy"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
