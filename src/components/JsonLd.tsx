export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axis Meter Solutions",
    "url": "https://axismeter.com",
    "logo": "https://axismeter.com/images/logo-green.png",
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
      "url": "https://axismeter.com/contact"
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
      "item": item.url
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ title, description, datePublished, url, image }: { title: string; description: string; datePublished: string; url: string; image?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": "Axis Meter Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Axis Meter Solutions"
    },
    ...(image ? { "image": image } : {})
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
