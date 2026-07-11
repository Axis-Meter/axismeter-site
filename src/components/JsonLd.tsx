import { absoluteUrl, SITE_URL } from "@/lib/seo";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axis Meter Solutions",
    "url": SITE_URL,
    "logo": absoluteUrl("/images/logo-green.png"),
    "description": "Utility submetering services for property owners across the US and Canada. $0 upfront, free leak detection included.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": ["US", "CA"]
    },
    "sameAs": [
      "https://www.facebook.com/axismeter",
      "https://www.instagram.com/axismeter"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": absoluteUrl("/contact")
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": absoluteUrl(item.url)
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ title, description, datePublished, url, image }: { title: string; description: string; datePublished: string; url: string; image?: string }) {
  const articleUrl = absoluteUrl(url);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "url": articleUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "author": {
      "@type": "Organization",
      "name": "Axis Meter Solutions",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Axis Meter Solutions",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl("/images/logo-green.png")
      }
    },
    ...(image ? { "image": absoluteUrl(image) } : {})
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
