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
// editorial cover can italicize the closing word in tan-light (DS spec).
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
            <div className="relative h-[580px] overflow-hidden bg-charcoal md:h-[680px] lg:h-[760px]">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_50%]"
              />
              {/* Dark gradient — top-to-bottom for legibility of overlaid type */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,7,5,0.55) 0%, rgba(10,7,5,0.35) 28%, rgba(10,7,5,0.30) 60%, rgba(10,7,5,0.65) 100%)",
                }}
              />

              <span className="absolute top-8 left-10 z-10 text-[11px] font-semibold tracking-[0.30em] uppercase text-cream">
                Journal · {post.tag}
              </span>

              {/* Floral motifs — sparse decorative blooms, per editorial spec */}
              <Bloom
                size={22}
                className="absolute top-[22%] left-[5%] z-[2] text-tan opacity-[0.95]"
              />
              <Bloom
                size={18}
                className="absolute top-[30%] right-[6%] z-[2] rotate-[18deg] text-tan opacity-[0.95]"
              />
              <Bloom
                size={14}
                className="absolute top-[40%] left-[12%] z-[2] text-crimson-warm opacity-[0.95]"
              />

              <div className="absolute top-[28%] right-0 left-0 z-10 mx-auto max-w-[980px] px-8 md:top-[24%] md:px-14">
                <h1 className="font-serif font-semibold leading-[0.95] tracking-[-0.025em] text-cream text-[clamp(56px,8vw,110px)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.25)]">
                  {coverLead && <>{coverLead} </>}
                  <em className="font-serif italic text-tan-light">
                    {coverItalic}
                  </em>
                </h1>

                <div className="mt-6 inline-block max-w-[680px]">
                  <span
                    className="font-serif text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.7] tracking-[-0.005em] text-brown-deep"
                    style={{
                      background: "var(--color-cream-light)",
                      padding: "8px 14px 10px",
                      boxDecorationBreak: "clone",
                      WebkitBoxDecorationBreak: "clone",
                    }}
                  >
                    {coverSubtitle}
                  </span>
                </div>
              </div>

              <div className="absolute right-9 bottom-6 z-10 font-serif text-[13px] font-semibold tracking-[0.02em] text-brown-deep">
                {pageNumber}
              </div>
            </div>

            {/* Curved cream-light band carrying byline + lede */}
            <div className="relative bg-cream-light px-8 pt-[68px] pb-14">
              <div
                aria-hidden
                className="absolute right-0 left-0 -top-14 h-[60px] bg-cream-light"
                style={{
                  borderTopLeftRadius: "50% 100%",
                  borderTopRightRadius: "50% 100%",
                }}
              />
              <div className="relative mx-auto max-w-[760px] text-center">
                <p className="font-serif text-[22px] italic leading-[1.55] text-brown md:text-[26px]">
                  {post.description}
                </p>
              </div>
            </div>
          </section>

          {/* ============ ARTICLE BODY ============ */}
          <div className="mx-auto max-w-[1080px] px-6 pt-16 pb-20 md:px-8">
            <Link
              href="/blog"
              className="inline-block text-[12px] font-medium tracking-[0.12em] uppercase text-brown/50 transition-colors hover:text-crimson"
            >
              &larr; Back to journal
            </Link>

            {/* Tag + read time pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-crimson bg-crimson/[0.08] px-3 py-[5px] text-[11px] font-medium tracking-[0.12em] uppercase text-crimson">
                {post.tag}
              </span>
              <span className="rounded-full border border-brown/20 px-3 py-[5px] text-[11px] font-medium tracking-[0.12em] uppercase text-brown/75">
                {post.readTime}
              </span>
            </div>

            {/* Author block */}
            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-b border-brown/10 py-5">
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
                <span className="text-[14px] font-medium text-brown-deep">
                  Jadesse
                </span>
                <span className="text-[12px] font-light text-brown/60">
                  Founder of Dali House
                </span>
              </div>
              <div className="ml-auto text-right">
                <span className="block text-[11px] font-medium tracking-[0.12em] uppercase text-brown/45">
                  Published
                </span>
                <time className="block text-[13px] font-light text-brown/80">
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
                    className="rounded-[14px] border border-brown/15 bg-white/50 p-5 lg:sticky lg:top-28 lg:border-0 lg:bg-transparent lg:p-0"
                  >
                    <p className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-brown/55">
                      On this page
                    </p>
                    <ul className="space-y-2.5 border-l border-brown/15 pl-4">
                      {post.headings.map((h) => (
                        <li key={h.slug}>
                          <a
                            href={`#${h.slug}`}
                            className={`block text-[13px] leading-[1.5] text-brown/75 transition-colors hover:text-crimson ${
                              h.level === 3 ? "pl-3 text-[12.5px] text-brown/60" : ""
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
                <aside className="mt-12 max-w-[520px] rounded-[14px] border-[1.5px] border-tan bg-cream p-7">
                  <p className="mb-4 text-[12px] font-bold tracking-[0.14em] uppercase text-brown-deep">
                    Dali House <span className="text-crimson">· Dallas, TX</span>
                  </p>
                  <ul className="grid gap-2.5">
                    <InfoRow>Near Carrollton / Plano · address shared after Stage 1</InfoRow>
                    <InfoRow>dalihouse.dtx@gmail.com</InfoRow>
                    <InfoRow>instagram.com / @dalihouse.dtx</InfoRow>
                    <InfoRow>Applications accepted on a rolling basis</InfoRow>
                  </ul>
                </aside>

                <div className="mt-14 border-t border-brown/10 pt-8">
                  <Link
                    href="/blog"
                    className="inline-block text-[12px] font-medium tracking-[0.12em] uppercase text-brown/50 transition-colors hover:text-crimson"
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

function Bloom({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <g fill="currentColor">
        <ellipse cx="12" cy="6" rx="2.6" ry="4.6" />
        <ellipse cx="12" cy="18" rx="2.6" ry="4.6" />
        <ellipse cx="6" cy="12" rx="4.6" ry="2.6" />
        <ellipse cx="18" cy="12" rx="4.6" ry="2.6" />
        <circle cx="12" cy="12" r="2" fill="#faf4e8" />
      </g>
    </svg>
  );
}

function InfoRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] font-light leading-[1.55] text-brown">
      <span className="mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-crimson text-white">
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
