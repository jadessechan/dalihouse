import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SoftLanding from "@/components/SoftLanding";

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

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        <article>
          <div className="mx-auto max-w-[720px] px-6 pt-32 pb-10 md:pt-36">
            <Link
              href="/blog"
              className="text-[12px] font-medium tracking-[0.12em] uppercase text-brown/50 transition-colors hover:text-tan"
            >
              &larr; Back to journal
            </Link>

            <header className="mt-8">
              <h1 className="font-serif text-[clamp(34px,5.4vw,52px)] leading-[1.14] font-medium tracking-[-0.01em] text-brown-deep">
                {post.title}
              </h1>
              <p className="mt-6 text-[18px] leading-[1.55] font-light text-brown/85 md:text-[19px]">
                {post.description}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-tan/40 bg-tan/10 px-3 py-[5px] text-[11px] font-medium tracking-[0.12em] uppercase text-tan">
                  {post.tag}
                </span>
                <span className="rounded-full border border-brown/15 px-3 py-[5px] text-[11px] font-medium tracking-[0.12em] uppercase text-brown/65">
                  {post.readTime}
                </span>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-b border-brown/10 py-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/dali-house-host.jpeg"
                    alt="Jadesse"
                    fill
                    sizes="44px"
                    className="object-cover"
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
            </header>
          </div>

          <div className="mx-auto max-w-[960px] px-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-cream-light shadow-[0_8px_40px_rgba(61,35,20,0.08)]">
              <Image
                src="/dali-house-hero.jpg"
                alt={post.title}
                fill
                sizes="(min-width: 960px) 960px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto grid max-w-[1080px] gap-12 px-6 pt-14 pb-20 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center lg:gap-16">
            {post.headings.length > 0 && (
              <aside className="lg:order-1">
                <nav
                  aria-label="Table of contents"
                  className="lg:sticky lg:top-28 rounded-[14px] border border-brown/10 bg-white/60 p-5 lg:bg-transparent lg:border-0 lg:p-0"
                >
                  <p className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-brown/55">
                    On this page
                  </p>
                  <ul className="space-y-2.5 border-l border-brown/15 pl-4">
                    {post.headings.map((h) => (
                      <li key={h.slug}>
                        <a
                          href={`#${h.slug}`}
                          className={`block text-[13px] leading-[1.5] text-brown/75 transition-colors hover:text-brown-deep ${
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
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}
