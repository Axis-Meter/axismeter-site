import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const data = JSON.parse(readFileSync('scripts/blog-data.json', 'utf-8'));

// Filter to only real posts (not placeholder lorem ipsum)
const posts = data.filter(d => !d.isPlaceholder);

// Clean HTML content - remove script tags, sanitize for React
function cleanHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/class="[^"]*"/g, '') // remove Webflow classes
    .replace(/style="[^"]*"/g, '') // remove inline styles  
    .replace(/data-[a-z-]+="[^"]*"/g, '') // remove data attributes
    .replace(/id="[^"]*"/g, '') // remove ids
    .replace(/<div[^>]*>/g, '<div>')
    .replace(/\s+>/g, '>')
    .replace(/>\s+</g, '><')
    .trim();
}

// Generate excerpt from text
function getExcerpt(html, maxLen = 155) {
  // Strip all HTML tags
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLen) return text;
  return text.substring(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

// Build the blog posts data file
const blogPosts = posts.map((post, i) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.description || getExcerpt(post.contentHtml),
  category: post.category || 'Utility Management',
  date: `2024-${String(Math.floor(i / 5) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
  featuredImage: post.featuredImage || null,
}));

// Sort by date descending
blogPosts.sort((a, b) => b.date.localeCompare(a.date));

// Write the blog posts index
writeFileSync(
  'src/data/blogPosts.ts',
  `// Auto-generated blog post index\nexport interface BlogPostMeta {\n  slug: string;\n  title: string;\n  excerpt: string;\n  category: string;\n  date: string;\n  featuredImage: string | null;\n}\n\nexport const blogPosts: BlogPostMeta[] = ${JSON.stringify(blogPosts, null, 2)};\n`
);
console.log(`Generated blogPosts.ts with ${blogPosts.length} posts`);

// Create individual content files for each post
const contentDir = 'src/data/blog-content';
if (!existsSync(contentDir)) mkdirSync(contentDir, { recursive: true });

for (const post of posts) {
  const cleaned = cleanHtml(post.contentHtml);
  // Escape backticks and ${} for template literals
  const escaped = cleaned.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  
  writeFileSync(
    `${contentDir}/${post.slug}.ts`,
    `// Auto-generated from axismeter.com\nexport const content = \`${escaped}\`;\n`
  );
}
console.log(`Generated ${posts.length} content files`);

// Also include the 11 placeholder posts but with a note
const placeholderPosts = data.filter(d => d.isPlaceholder);
for (const post of placeholderPosts) {
  const title = post.title || post.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  // Create a simple placeholder content
  const placeholderContent = `<p>This article is coming soon. Check back for updates on ${title.toLowerCase()}.</p>`;
  const escaped = placeholderContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  
  writeFileSync(
    `${contentDir}/${post.slug}.ts`,
    `// Auto-generated placeholder\nexport const content = \`${escaped}\`;\n`
  );
  
  blogPosts.push({
    slug: post.slug,
    title: title,
    excerpt: `This article is coming soon. Check back for updates on ${title.toLowerCase()}.`,
    category: 'General',
    date: '2024-01-01',
    featuredImage: null,
  });
}

// Re-sort and rewrite
blogPosts.sort((a, b) => b.date.localeCompare(a.date));
writeFileSync(
  'src/data/blogPosts.ts',
  `// Auto-generated blog post index\nexport interface BlogPostMeta {\n  slug: string;\n  title: string;\n  excerpt: string;\n  category: string;\n  date: string;\n  featuredImage: string | null;\n}\n\nexport const blogPosts: BlogPostMeta[] = ${JSON.stringify(blogPosts, null, 2)};\n`
);

console.log(`Total: ${blogPosts.length} posts (${posts.length} real + ${placeholderPosts.length} placeholder)`);
