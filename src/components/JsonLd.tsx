import { absoluteUrl, SITE_URL } from "@/lib/seo";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Axis Meter Solutions",
    "legalName": "Axis Meter Solutions Inc.",
    "url": SITE_URL,
    "logo": absoluteUrl("/images/logo-green.png"),
    "description": "Utility submetering, meter data, billing, resident support, and system maintenance for multifamily and commercial properties in Canada and the United States.",
    "telephone": "+1-226-702-5500",
    "email": "info@axismeter.com",
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United States" }
    ],
    "knowsAbout": [
      "Water submetering",
      "Electricity submetering",
      "Natural gas submetering",
      "Thermal energy metering",
      "Multifamily utility billing",
      "Meter installation and maintenance"
    ],
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "Ontario Energy Board Unit Sub-Metering Licence",
      "value": "ES-2022-0268",
      "url": "https://www.oeb.ca/ontarios-energy-sector/list-licensed-companies"
    },
    "sameAs": [
      "https://www.facebook.com/axismeter",
      "https://www.instagram.com/axismeter"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+1-226-702-5500",
      "email": "info@axismeter.com",
      "areaServed": ["CA", "US"],
      "availableLanguage": "English",
      "url": absoluteUrl("/contact")
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceSchema({
  name,
  description,
  path,
  serviceTypes,
}: {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": absoluteUrl(path),
    "provider": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Axis Meter Solutions",
      "url": SITE_URL
    },
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United States" }
    ],
    "serviceType": serviceTypes,
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Multifamily and commercial property owners, operators, developers, and managers"
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
