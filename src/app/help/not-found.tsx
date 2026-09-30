import Link from 'next/link';

export default function HelpNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <p className="mt-4 text-gray-600">This guide may have moved or is no longer published.</p>
      <Link href="/help" className="mt-6 inline-block text-navy underline">Browse the Help Centre</Link>
    </div>
  );
}
