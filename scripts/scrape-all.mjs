import { JSDOM } from 'jsdom';
import { writeFileSync } from 'fs';

const slugs = [
  "10-ways-to-increase-traction-on-your-launch-campaign",
  "are-landlords-required-to-pay-for-water-and-garbage",
  "are-landlords-responsible-for-unpaid-utility-bills",
  "axis-meter-solutions",
  "best-hvac-meter",
  "brand-optics-and-what-it-means-for-your-business",
  "can-a-landlord-request-utility-bills",
  "developing-your-product-teams-communication-skills",
  "electricity-bill-from-previous-tenant",
  "electricity-sub-meter",
  "gas-sub-meter-solutions",
  "getting-out-into-nature-has-never-been-more-important",
  "how-can-ai-deliver-better-at-home-care",
  "how-to-apply-a-second-electricity-meter",
  "how-to-save-money-on-utilities-in-an-apartment",
  "how-to-save-on-utilities-in-an-apartment",
  "how-to-set-up-utilities-when-renting",
  "including-utilities-in-rental-agreement",
  "infinity-water-billing",
  "instituting-a-culture-of-positive-psychology",
  "investing-in-real-estate-notes",
  "is-rent-considered-a-utility",
  "landlord-tenant-utility-agreement-with-axis-meter-solutions",
  "lease-agreement-with-utilities-included",
  "motivational-podcasts-to-help-with-mental-health-and-productivity",
  "perfecting-your-outdoor-workout-routine",
  "presenting-your-product-in-the-era-of-unboxing",
  "rent-and-utilities",
  "rental-agreement-with-utilities-included",
  "sub-meter",
  "sub-metered-water",
  "sub-utility-solutions",
  "submeter-water-with-axis-meter-solutions",
  "submetering-electricity",
  "submetering-gas",
  "supercharge-your-brainstorming-sessions-outdoors",
  "tenant-responsibilities",
  "tenant-responsibilities-list",
  "tenant-submetering",
  "tenants-rights-regarding-electricity",
  "usage-based-billing-with-axis-meter-solutions",
  "utility-and-value-of-axis-meter-solutions-in-modern-industries",
  "utility-in-real-estate",
  "utility-submetering",
  "water-sub-meters",
  "water-submeter-solutions",
  "what-does-all-utilities-included-mean",
  "what-does-submetered-mean",
  "what-happens-if-a-tenant-leaves-without-paying-utility-bills",
  "what-if-tenant-does-not-pay-electricity-bill",
  "what-includes-utilities",
  "what-is-a-sub-meter",
  "what-is-a-submeter-and-how-does-it-work",
  "what-is-a-utility-bill",
  "what-is-a-water-submeter",
  "what-is-submetered",
  "what-is-submetering",
  "what-is-utility-computing",
  "what-utilities-do-you-need-for-a-house",
  "when-renting-a-house-who-pays-utilities",
  "who-is-responsible-for-unpaid-utility-bills",
  "who-pays-utilities-when-renting-a-house",
  "why-are-my-utility-bills-so-high",
  "working-from-home-tips-and-tricks",
];

const PLACEHOLDER = "Aenean dolor sed non euismod ut erat id";

async function scrapePost(slug) {
  const url = `https://www.axismeter.com/post/${slug}`;
  try {
    const res = await fetch(url);
    const html = await res.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    
    // Get title from og:title or h1 or title tag
    const ogTitle = doc.querySelector('meta[property="og:title"]');
    const h1 = doc.querySelector('h1');
    const title = ogTitle?.getAttribute('content') || h1?.textContent?.trim() || doc.title || slug;
    
    // Get date
    const timeEl = doc.querySelector('time');
    const date = timeEl?.getAttribute('datetime') || timeEl?.textContent?.trim() || null;
    
    // Get featured image
    const ogImage = doc.querySelector('meta[property="og:image"]');
    const featuredImage = ogImage?.getAttribute('content') || null;
    
    // Get description
    const ogDesc = doc.querySelector('meta[property="og:description"]');
    const description = ogDesc?.getAttribute('content') || null;
    
    // Get the main blog content - try rich-text-block first, then article, then main
    const richText = doc.querySelector('.rich-text-block') || doc.querySelector('.w-richtext') || doc.querySelector('[class*="rich-text"]');
    const article = doc.querySelector('article');
    const main = doc.querySelector('main');
    
    let contentEl = richText || article || main;
    let contentHtml = contentEl?.innerHTML || '';
    let contentText = contentEl?.textContent?.trim() || '';
    
    const isPlaceholder = contentText.startsWith(PLACEHOLDER);
    
    return {
      slug,
      title,
      date,
      featuredImage,
      description,
      contentHtml,
      contentText: contentText.substring(0, 200),
      isPlaceholder,
      category: isPlaceholder ? 'General' : 'Utility Management',
    };
  } catch (err) {
    console.error(`Error scraping ${slug}:`, err.message);
    return { slug, title: slug, error: err.message, isPlaceholder: true };
  }
}

async function main() {
  console.log(`Scraping ${slugs.length} blog posts...`);
  
  // Process in batches of 10
  const results = [];
  for (let i = 0; i < slugs.length; i += 10) {
    const batch = slugs.slice(i, i + 10);
    console.log(`Batch ${Math.floor(i/10) + 1}/${Math.ceil(slugs.length/10)}...`);
    const batchResults = await Promise.all(batch.map(scrapePost));
    results.push(...batchResults);
  }
  
  writeFileSync('scripts/blog-data.json', JSON.stringify(results, null, 2));
  
  const real = results.filter(r => !r.isPlaceholder);
  const placeholder = results.filter(r => r.isPlaceholder);
  console.log(`\nDone! ${real.length} real posts, ${placeholder.length} placeholder posts`);
  console.log('Placeholder posts:', placeholder.map(p => p.slug).join(', '));
}

main();
