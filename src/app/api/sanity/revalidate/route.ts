import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_BLOG_CACHE_TAG } from "@/lib/sanity-blog";

type SanityWebhookBody = {
  _type?: string;
  slug?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET?.trim();
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret is not configured" }, { status: 500 });
  }

  const { body, isValidSignature } = await parseBody<SanityWebhookBody>(request, secret);
  if (!isValidSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (body?._type !== "blogPost") {
    return NextResponse.json({ revalidated: false });
  }

  revalidateTag(SANITY_BLOG_CACHE_TAG);
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");

  if (body.slug) {
    revalidateTag(`${SANITY_BLOG_CACHE_TAG}:${body.slug}`);
    revalidatePath(`/blog/${body.slug}`);
  }

  return NextResponse.json({ revalidated: true, slug: body.slug || null });
}
