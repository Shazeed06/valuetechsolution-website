type FAQItem = { q: string; a: string };

export function OrganizationSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Value Tech Solution",
    url: "https://valuetechsolution.com",
    logo: "https://valuetechsolution.com/logo-main.png",
    description:
      "Value Tech Solution is an AI startup of engineers shipping automations on n8n, GoHighLevel, Zapier, and Python — alongside Next.js websites and SEO programs that compound.",
    foundingDate: "2024",
    areaServed: ["IN", "US", "GB", "AE"],
    knowsAbout: [
      "AI Automation",
      "AI Agents",
      "RAG",
      "n8n",
      "GoHighLevel",
      "Zapier",
      "Python automation",
      "Next.js development",
      "Search Engine Optimization",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
    ],
    sameAs: [
      "https://www.linkedin.com/in/valuetech-solution-624528409/",
      "https://twitter.com/valuetechsoln",
      "https://github.com/valuetechsolution",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "admin@valuetechsolution.com",
      telephone: "+918287245032",
      availableLanguage: ["English", "Hindi"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function WebSiteSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Value Tech Solution",
    url: "https://valuetechsolution.com",
    publisher: { "@type": "Organization", name: "Value Tech Solution" },
    inLanguage: "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  offers,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  offers?: { name: string; price: string }[];
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Value Tech Solution",
      url: "https://valuetechsolution.com",
    },
    areaServed: ["IN", "US", "GB", "AE"],
    offers:
      offers?.map((o) => ({
        "@type": "Offer",
        name: o.name,
        priceSpecification: {
          "@type": "PriceSpecification",
          price: o.price,
          priceCurrency: "USD",
        },
      })) ?? undefined,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  image,
  category,
  wordCount,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  image?: string;
  category?: string;
  wordCount?: number;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Value Tech Solution",
      url: "https://valuetechsolution.com",
      logo: {
        "@type": "ImageObject",
        url: "https://valuetechsolution.com/logo.svg",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: image
      ? [{ "@type": "ImageObject", url: image }]
      : undefined,
    articleSection: category,
    wordCount,
    inLanguage: "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function AggregateRatingSchema({
  ratingValue = 4.9,
  reviewCount = 4,
  bestRating = 5,
}: {
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Value Tech Solution",
    url: "https://valuetechsolution.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating: 1,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
