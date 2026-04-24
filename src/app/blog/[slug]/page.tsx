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
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-tan">
                {post.tag} &middot; {post.readTime}
              </p>
              <h1 className="mt-5 font-serif text-[clamp(34px,5.4vw,52px)] leading-[1.14] font-medium tracking-[-0.01em] text-brown-deep">
                {post.title}
              </h1>
              <p className="mt-6 text-[18px] leading-[1.55] font-light text-brown/85 md:text-[19px]">
                {post.description}
              </p>

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

          <div className="mx-auto max-w-[720px] px-6 pt-14 pb-20">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <SoftLanding />
      <Footer />
    </>
  );
}
