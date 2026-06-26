import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getPostBySlug,
  getAllSlugs,
  getPageNumber,
} from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SoftLanding from "@/components/SoftLanding";
import BlogPostingJsonLd from "@/components/BlogPostingJsonLd";
import Bloom from "@/components/ui/Bloom";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const url = `https://dalihouse.co/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Jadesse Chan"],
      siteName: "Dali House",
      images: [
        {
          url: "/dali-house-hero.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/dali-house-hero.jpg"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Split a title into the first N–1 words and a final emphasized word so the
// editorial cover can italicize the closing word in pink (DS spec).
function splitTitleForCover(title: string): { lead: string; emphasis: string } {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return { lead: "", emphasis: title };
  const emphasis = words.pop() as string;
  return { lead: words.join(" "), emphasis };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // Editorial cover copy: prefer explicit frontmatter, fall back to splitting
  // the SEO title (works but produces awkward results on long titles).
  const fallbackSplit = splitTitleForCover(post.title);
  const coverLead = post.coverTitle ?? fallbackSplit.lead;
  const coverItalic = post.coverItalic ?? fallbackSplit.emphasis;
  const coverSubtitle = post.coverSubtitle ?? post.description;

  const pageNumber = getPageNumber(slug);

  return (
    <>
      <BlogPostingJsonLd
        slug={slug}
        title={post.title}
        description={post.description}
        date={post.date}
        tag={post.tag}
      />
      <Nav />
      <main className="bg-cream">
        <article>
          {/* ============ EDITORIAL COVER ============ */}
          <section className="relative mt-20">
            <div className="relative h-[580px] overflow-hidden bg-green-deep md:h-[680px] lg:h-[760px]">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_50%]"
              />
              {/* Green-tinted gradient — top-to-bottom for legibility of type */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,30,18,0.55) 0%, rgba(20,30,18,0.35) 28%, rgba(20,30,18,0.30) 60%, rgba(20,30,18,0.68) 100%)",
                }}
              />

              <span className="eyebrow absolute top-8 left-10 z-10 tracking-[0.3em] text-cream">
                Journal · {post.tag}
              </span>

              {/* Floral motifs — sparse decorative blooms, per editorial spec */}
              <Bloom
                size={22}
                className="absolute top-[22%] left-[5%] z-[2] text-pink opacity-[0.95]"
              />
              <Bloom
                size={18}
                className="absolute top-[30%] right-[6%] z-[2] rotate-[18deg] text-pink opacity-[0.95]"
              />
              <Bloom
                size={14}
                className="absolute top-[40%] left-[12%] z-[2] text-pink-deep opacity-[0.95]"
              />

              <div className="absolute top-[28%] right-0 left-0 z-10 mx-auto max-w-[980px] px-8 md:top-[24%] md:px-14">
                <h1 className="font-serif font-semibold leading-[0.95] tracking-[-0.025em] text-cream text-[clamp(56px,8vw,110px)]">
                  {coverLead && <>{coverLead} </>}
                  <em className="font-serif italic text-pink">
                    {coverItalic}
                  </em>
                </h1>

                <div className="mt-6 inline-block max-w-[680px]">
                  <span
                    className="font-serif text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.7] tracking-[-0.005em] text-green-deep"
                    style={{
                      background: "var(--color-cream-2)",
                      padding: "8px 14px 10px",
                      boxDecorationBreak: "clone",
                      WebkitBoxDecorationBreak: "clone",
                    }}
                  >
                    {coverSubtitle}
                  </span>
                </div>
              </div>

              <div className="absolute right-9 bottom-6 z-10 font-serif text-[13px] font-semibold tracking-[0.02em] text-cream/80">
                {pageNumber}
              </div>
            </div>

            {/* Curved cream-2 band carrying the lede */}
            <div className="relative bg-cream-2 px-8 pt-[68px] pb-14">
              <div
                aria-hidden
                className="absolute right-0 left-0 -top-14 h-[60px] bg-cream-2"
                style={{
                  borderTopLeftRadius: "50% 100%",
                  borderTopRightRadius: "50% 100%",
                }}
              />
              <div className="relative mx-auto max-w-[760px] text-center">
                <p className="font-serif text-[22px] italic leading-[1.55] text-ink/80 md:text-[26px]">
                  {post.description}
                </p>
              </div>
            </div>
          </section>

          {/* ============ ARTICLE BODY ============ */}
          <div className="mx-auto max-w-[1080px] px-6 pt-16 pb-20 md:px-8">
            <Link
              href="/blog"
              className="eyebrow inline-block text-ink/50 transition-colors hover:text-pink-deep"
            >
              &larr; Back to journal
            </Link>

            {/* Tag + read time pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-pink-deep bg-pink-deep/[0.08] px-3 py-[5px] eyebrow text-pink-deep">
                {post.tag}
              </span>
              <span className="rounded-full border border-ink/20 px-3 py-[5px] eyebrow text-ink/65">
                {post.readTime}
              </span>
            </div>

            {/* Author block */}
            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-b border-ink/10 py-5">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/dali-house-host.jpeg"
                  alt="Jadesse"
                  fill
                  sizes="44px"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-ink">
                  Jadesse
                </span>
                <span className="text-[12px] text-ink/55">
                  Founder of Dali House
                </span>
              </div>
              <div className="ml-auto text-right">
                <span className="eyebrow block text-ink/45">Published</span>
                <time className="block text-[13px] text-ink/70">
                  {formatDate(post.date)}
                </time>
              </div>
            </div>

            {/* TOC + prose */}
            <div className="mt-10 grid gap-12 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center lg:gap-16">
              {post.headings.length > 0 && (
                <aside className="lg:order-1">
                  <nav
                    aria-label="Table of contents"
                    className="rounded-[14px] border border-ink/15 bg-cream-2/60 p-5 lg:sticky lg:top-28 lg:border-0 lg:bg-transparent lg:p-0"
                  >
                    <p className="eyebrow mb-3 text-ink/55">On this page</p>
                    <ul className="space-y-2.5 border-l border-ink/15 pl-4">
                      {post.headings.map((h) => (
                        <li key={h.slug}>
                          <a
                            href={`#${h.slug}`}
                            className={`block text-[13px] leading-[1.5] text-ink/70 transition-colors hover:text-pink-deep ${
                              h.level === 3 ? "pl-3 text-[12.5px] text-ink/55" : ""
                            }`}
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>
              )}

              <div className="lg:order-2">
                <div className="post-content">
                  {post.isMdx ? (
                    <MdxBody slug={slug} />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  )}
                </div>

                {/* Vendor-style info card — single CTA at the close */}
                <aside className="mt-12 max-w-[520px] rounded-[14px] border-[1.5px] border-pink-deep bg-cream-2 p-7">
                  <p className="eyebrow mb-4 text-ink">
                    Dali House <span className="text-pink-deep">· Dallas, TX</span>
                  </p>
                  <ul className="grid gap-2.5">
                    <InfoRow>Near Carrollton / Plano · address shared after Stage 1</InfoRow>
                    <InfoRow>dalihouse.dtx@gmail.com</InfoRow>
                    <InfoRow>instagram.com / @dalihouse.dtx</InfoRow>
                    <InfoRow>Applications accepted on a rolling basis</InfoRow>
                  </ul>
                </aside>

                <div className="mt-14 border-t border-ink/10 pt-8">
                  <Link
                    href="/blog"
                    className="eyebrow inline-block text-ink/50 transition-colors hover:text-pink-deep"
                  >
                    &larr; Back to journal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}

// Dynamic MDX loader — resolved at build time because every slug from
// `generateStaticParams` is statically known, so the bundler can include
// every `.mdx` file under content/blog/ in the chunk graph.
async function MdxBody({ slug }: { slug: string }) {
  const mod = await import(`../../../../content/blog/${slug}.mdx`);
  const Body = mod.default as React.ComponentType;
  return <Body />;
}

function InfoRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-ink/80">
      <span className="mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-pink-deep text-cream">
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
