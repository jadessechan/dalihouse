import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "content/blog");

export interface Heading {
  level: 2 | 3;
  text: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  readTime: string;
  cover: string;
  content: string;
  headings: Heading[];
}

const DEFAULT_COVER = "/dali-house-bg.png";
const COVER_BY_SLUG: Record<string, string> = {
  "relocating-to-dallas-as-a-woman": "/dali-house-bg.png",
  "why-community-matters": "/room-living.jpeg",
  "coliving-vs-random-roommates-dallas-women": "/room-bedroom1.jpeg",
  "how-to-meet-people-in-dallas-in-real-life": "/dali-house-hero.jpg",
  "moving-to-dallas-fort-worth": "/room-kitchen.png",
};

function resolveCover(slug: string, fromFrontmatter?: string): string {
  if (fromFrontmatter) return fromFrontmatter;
  return COVER_BY_SLUG[slug] ?? DEFAULT_COVER;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function injectHeadingIds(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Map<string, number>();

  const out = html.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_match, levelStr: string, inner: string) => {
      const level = Number(levelStr) as 2 | 3;
      const cleanedInner = inner.replace(/^\s*\d+\.\s+/, "");
      const text = cleanedInner.replace(/<[^>]+>/g, "").trim();
      let slug = slugify(text);
      const count = used.get(slug) ?? 0;
      used.set(slug, count + 1);
      if (count > 0) slug = `${slug}-${count}`;
      headings.push({ level, text, slug });
      return `<h${level} id="${slug}">${cleanedInner}</h${level}>`;
    }
  );

  return { html: out, headings };
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tag: data.tag ?? "Journal",
      readTime: data.readTime ?? estimateReadTime(content),
      cover: resolveCover(slug, data.cover),
      content: "",
      headings: [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);

  const result = await remark().use(html).process(content);
  const { html: processedHtml, headings } = injectHeadingIds(result.toString());

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tag: data.tag ?? "Journal",
    readTime: data.readTime ?? estimateReadTime(content),
    cover: resolveCover(slug, data.cover),
    content: processedHtml,
    headings,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// 1-indexed chronological position (oldest = 01) — used for the editorial
// page number in the post cover. Zero-padded to 2 digits.
export function getPageNumber(slug: string): string {
  const chronological = getAllPosts().sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const idx = chronological.findIndex((p) => p.slug === slug);
  const n = idx < 0 ? 1 : idx + 1;
  return String(n).padStart(2, "0");
}

// Northern-hemisphere season label, named for the year the post was published.
// "Issue · Spring 2026" feels closer to the magazine cadence than "April 2026".
export function getSeasonLabel(iso: string): string {
  const d = new Date(iso);
  const m = d.getMonth(); // 0-indexed
  const year = d.getFullYear();
  let season: string;
  if (m >= 2 && m <= 4) season = "Spring";
  else if (m >= 5 && m <= 7) season = "Summer";
  else if (m >= 8 && m <= 10) season = "Fall";
  else season = "Winter";
  return `${season} ${year}`;
}
