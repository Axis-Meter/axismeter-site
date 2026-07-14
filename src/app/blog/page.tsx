import { BlogIndex } from "@/app/blog/BlogIndex";
import { getBlogPostSummaries } from "@/lib/blog";

export const revalidate = 86_400;

export default async function BlogPage() {
  const posts = await getBlogPostSummaries();
  return <BlogIndex posts={posts} />;
}
