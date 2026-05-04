export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://dalihouse.co/#business",
    name: "Dali House",
    alternateName: "Dali House Coliving",
    description:
      "A co-living space in Dallas for young female professionals who value comfort and intentional living. Fully furnished, flexible lease, built-in community.",
    url: "https://dalihouse.co",
    image: "https://dalihouse.co/dali-house-hero.jpg",
    logo: "https://dalihouse.co/dali-house-title.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Carrollton" },
      { "@type": "AdministrativeArea", name: "Dallas-Fort Worth" },
    ],
    priceRange: "$900",
    audience: {
      "@type": "Audience",
      audienceType: "Young professional women",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fully furnished", value: true },
      { "@type": "LocationFeatureSpecification", name: "Flexible lease", value: true },
      { "@type": "LocationFeatureSpecification", name: "Women-only", value: true },
      { "@type": "LocationFeatureSpecification", name: "Community-focused", value: true },
    ],
    knowsAbout: [
      "Coliving",
      "Coliving for women",
      "Relocating to Dallas",
      "Community living",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dalihouse.co/#website",
    url: "https://dalihouse.co",
    name: "Dali House",
    publisher: { "@id": "https://dalihouse.co/#business" },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
