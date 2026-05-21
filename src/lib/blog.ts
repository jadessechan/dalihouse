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
  // For `.md` posts this is pre-rendered HTML; for `.mdx` posts it is empty
  // and the page dynamically imports the file to render the body.
  content: string;
  headings: Heading[];
  // `true` when the post lives in `<slug>.mdx` (magazine layout via React
  // components). `false` for legacy `<slug>.md` posts that render via remark.
  isMdx: boolean;
  // Editorial cover copy — short hooks that drive the magazine-style cover.
  // The SEO `title` is too long for the cover headline, so each post supplies
  // a 2-3 word `coverTitle` + a one-word `coverItalic` emphasis (matching the
  // UI kit's BlogPost.jsx pattern), plus a short `coverSubtitle` for the
  // highlighter bar (the band below still uses `description` as the lede).
  coverTitle?: string;
  coverItalic?: string;
  coverSubtitle?: string;
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

function injectHeadingIds(rawHtml: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Map<string, number>();

  const out = rawHtml.replace(
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

// MDX posts compose sections via <SectionHead label="..." id="..."> components
// instead of `## Heading` markdown. Regex-scan the raw MDX for those props so
// the TOC stays in sync with the rendered article. We accept a `level` prop
// for deeper headings; default is H2.
function extractMdxHeadings(rawMdx: string): Heading[] {
  const headings: Heading[] = [];
  const used = new Map<string, number>();
  // Match <SectionHead ...> opening tags (props in any order). We pull the
  // visible label from `label="..."` and an optional explicit `id="..."`.
  const tagRe = /<SectionHead\b([^>]*?)>([\s\S]*?)<\/SectionHead>/g;
  const labelRe = /\blabel\s*=\s*"([^"]+)"/;
  const idRe = /\bid\s*=\s*"([^"]+)"/;
  const levelRe = /\blevel\s*=\s*\{(2|3)\}/;

  let match: RegExpExecArray | null;
  while ((match = tagRe.exec(rawMdx)) !== null) {
    const props = match[1];
    const body = match[2].trim();
    const label = labelRe.exec(props)?.[1] ?? body;
    const explicitId = idRe.exec(props)?.[1];
    const level = (Number(levelRe.exec(props)?.[1]) || 2) as 2 | 3;
    let slug = explicitId ?? slugify(body || label);
    const count = used.get(slug) ?? 0;
    used.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count}`;
    // Use the in-body text (the rendered heading) when present, else label.
    headings.push({ level, text: body || label, slug });
  }
  return headings;
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// Resolve `<slug>.mdx` first (preferred for new posts) and fall back to
// `<slug>.md` so we can migrate posts gradually.
function resolvePostPath(slug: string): { file: string; isMdx: boolean } {
  const mdxPath = path.join(blogDir, `${slug}.mdx`);
  if (fs.existsSync(mdxPath)) return { file: mdxPath, isMdx: true };
  return { file: path.join(blogDir, `${slug}.md`), isMdx: false };
}

function isPostFile(name: string): boolean {
  return name.endsWith(".md") || name.endsWith(".mdx");
}

function slugFromFile(name: string): string {
  return name.replace(/\.mdx?$/, "");
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter(isPostFile);

  // Deduplicate by slug — if both .mdx and .md exist, prefer .mdx.
  const bySlug = new Map<string, { file: string; isMdx: boolean }>();
  for (const file of files) {
    const slug = slugFromFile(file);
    const isMdx = file.endsWith(".mdx");
    const existing = bySlug.get(slug);
    if (!existing || (isMdx && !existing.isMdx)) {
      bySlug.set(slug, { file: path.join(blogDir, file), isMdx });
    }
  }

  const posts: BlogPost[] = [];
  for (const [slug, { file, isMdx }] of bySlug) {
    const raw = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(raw);
    posts.push({
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tag: data.tag ?? "Journal",
      readTime: data.readTime ?? estimateReadTime(content),
      cover: resolveCover(slug, data.cover),
      content: "",
      headings: [],
      isMdx,
      coverTitle: data.coverTitle,
      coverItalic: data.coverItalic,
      coverSubtitle: data.coverSubtitle,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const { file, isMdx } = resolvePostPath(slug);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  let processedHtml = "";
  let headings: Heading[] = [];

  if (isMdx) {
    headings = extractMdxHeadings(content);
  } else {
    const result = await remark().use(html).process(content);
    const injected = injectHeadingIds(result.toString());
    processedHtml = injected.html;
    headings = injected.headings;
  }

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
    isMdx,
    coverTitle: data.coverTitle,
    coverItalic: data.coverItalic,
    coverSubtitle: data.coverSubtitle,
  };
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(blogDir).filter(isPostFile);
  return Array.from(new Set(files.map(slugFromFile)));
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

// Northern-hemisphere season name. The cover issue line follows the UI kit
// format ("Issue No. 04 · Spring") — season only, no year.
export function getSeason(iso: string): string {
  const m = new Date(iso).getMonth(); // 0-indexed
  if (m >= 2 && m <= 4) return "Spring";
  if (m >= 5 && m <= 7) return "Summer";
  if (m >= 8 && m <= 10) return "Fall";
  return "Winter";
}
