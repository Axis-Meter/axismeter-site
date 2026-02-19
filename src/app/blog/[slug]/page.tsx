import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/JsonLd";

// Dynamic import for blog content
async function getContent(slug: string): Promise<string> {
  try {
    const mod = await import(`@/data/blog-content/${slug}`);
    return mod.content;
  } catch {
    return "";
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Axis Meter Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      ...(post.featuredImage ? { images: [post.featuredImage] } : {}),
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = await getContent(slug);

  return (
    <div className="bg-navy min-h-screen">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        url={`https://axismeter-site.vercel.app/blog/${slug}`}
        image={post.featuredImage ?? undefined}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://axismeter-site.vercel.app" },
        { name: "Blog", url: "https://axismeter-site.vercel.app/blog" },
        { name: post.title, url: `https://axismeter-site.vercel.app/blog/${slug}` },
      ]} />
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-accent transition-colors text-sm"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <time className="text-gray-500 text-sm">{post.date}</time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          {post.featuredImage && (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 mt-8 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Article content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-gray-300 prose-li:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:my-6 prose-ol:my-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA Section */}
        <div className="mt-16 bg-navy-light border border-navy-lighter rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Utility Management?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join property owners who have seen a 32% average property value
            increase and 18% lower operating costs with Axis Meter Solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </article>
    </div>
  );
}
