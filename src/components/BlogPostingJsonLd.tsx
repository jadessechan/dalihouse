interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tag?: string;
}

export default function BlogPostingJsonLd({
  slug,
  title,
  description,
  date,
  image = "/dali-house-hero.jpg",
  tag,
}: Props) {
  const url = `https://dalihouse.co/blog/${slug}`;
  const absoluteImage = image.startsWith("http")
    ? image
    : `https://dalihouse.co${image}`;

  const post = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    description,
    image: absoluteImage,
    datePublished: date,
    dateModified: date,
    inLanguage: "en-US",
    url,
    author: {
      "@type": "Person",
      name: "Jadesse Chan",
      url: "https://dalihouse.co",
    },
    publisher: { "@id": "https://dalihouse.co/#business" },
    ...(tag ? { articleSection: tag } : {}),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dalihouse.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: "https://dalihouse.co/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
