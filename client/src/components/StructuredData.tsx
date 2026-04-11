import { COMPANY, PHONE_NUMBERS } from "@/lib/constants";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  description:
    "Greater Boston's trusted general contractor for 25+ years. Home remodeling, kitchen & bathroom renovation, roofing, new construction, and more. Licensed, insured, 100% in-house crews.",
  url: `https://${COMPANY.website}`,
  telephone: PHONE_NUMBERS.MAIN.display,
  email: COMPANY.email,
  foundingDate: "2001",
  priceRange: "$$-$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  areaServed: [
    { "@type": "State", name: "Massachusetts" },
    { "@type": "State", name: "New Hampshire" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "MA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.3601",
    longitude: "-71.0589",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "General Contractor License",
    recognizedBy: {
      "@type": "Organization",
      name: "Commonwealth of Massachusetts",
    },
    identifier: "CS-119608",
  },
  knowsAbout: [
    "Home Remodeling",
    "Kitchen Remodeling",
    "Bathroom Renovation",
    "Roofing",
    "New Home Construction",
    "Home Additions",
    "Basement Finishing",
    "Siding Installation",
    "Deck Building",
    "Window and Door Installation",
  ],
  slogan: COMPANY.tagline,
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
  },
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://${COMPANY.website}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
