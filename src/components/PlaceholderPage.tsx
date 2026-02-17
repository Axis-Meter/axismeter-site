import Link from "next/link";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="bg-gray-50 min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">This page is coming soon. We&apos;re working on something great.</p>
        <Link
          href="/"
          className="bg-accent hover:bg-accent-dark text-navy font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
