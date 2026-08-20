import { NextResponse, type NextRequest } from "next/server";
import { gonePostSlugs } from "@/data/retired-posts";

// Retired posts with no replacement return 410 so Google drops them quickly
// instead of retrying a 404. Redirected retirements never reach here: the
// permanent redirects in next.config.ts run first.
export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && gonePostSlugs.has(slug)) {
    return new NextResponse(null, { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:slug",
};
