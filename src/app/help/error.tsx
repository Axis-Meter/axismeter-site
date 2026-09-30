'use client';

export default function HelpError({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-2xl font-bold">We couldn’t load the help articles</h1>
      <p className="mt-4 text-gray-600">Please try again, or contact <a href="mailto:info@axismeter.com" className="text-navy underline">info@axismeter.com</a>.</p>
      <button type="button" onClick={reset} className="mt-6 rounded-lg bg-navy px-5 py-2 text-gray-50">Try again</button>
    </div>
  );
}
