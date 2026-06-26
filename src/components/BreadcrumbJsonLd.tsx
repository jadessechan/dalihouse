interface Crumb {
  name: string;
  path: string; // path relative to the site root, e.g. "/the-space"
}

// Emits a schema.org BreadcrumbList. "Home" is prepended automatically.
export default function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const base = "https://dalihouse.co";
  const items = [{ name: "Home", path: "/" }, ...trail];

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? base : `${base}${c.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
    />
  );
}
