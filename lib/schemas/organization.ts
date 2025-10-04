export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://parapente-reunion.fr/#organization",
  "name": "Parapente Réunion",
  "description": "École de parapente n°1 à La Réunion depuis 1990. Vol tandem, baptême parapente et formation au-dessus du lagon de Saint-Leu.",
  "url": "https://parapente-reunion.fr",
  "telephone": "+262 692 86 39 75",
  "email": "contact@parapente-reunion.fr",
  "priceRange": "€€",
  "image": "https://parapente-reunion.fr/images/logos/Logo_Parapente_Reunion.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Rue Georges Pompidou",
    "addressLocality": "Saint-Leu",
    "addressRegion": "La Réunion",
    "postalCode": "97436",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-21.1710",
    "longitude": "55.2869"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/parapentereunion",
    "https://www.instagram.com/parapentereunion"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vols Parapente",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vol Découverte",
          "description": "Baptême parapente tandem 15-20 minutes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vol Sunset",
          "description": "Vol coucher de soleil avec photos aériennes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formation Parapente",
          "description": "Stage initiation et perfectionnement"
        }
      }
    ]
  }
}

export function generateProductSchema(params: {
  name: string
  description: string
  image: string
  lowPrice: string
  highPrice: string
  url: string
  reviewCount?: string
  ratingValue?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": params.name,
    "description": params.description,
    "image": params.image,
    "brand": {
      "@type": "Organization",
      "name": "Parapente Réunion"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": params.lowPrice,
      "highPrice": params.highPrice,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": params.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": params.ratingValue || "4.9",
      "reviewCount": params.reviewCount || "180",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
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
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}
