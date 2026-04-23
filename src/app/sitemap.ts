import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dalihouse.co";

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Add blog posts
  const blogDir = path.join(process.cwd(), "content/blog");
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      routes.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return routes;
}
