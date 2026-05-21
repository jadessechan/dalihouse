import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, type BlogPost } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on coliving, relocating, and building a life you love in Dallas.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="mb-7 grid overflow-hidden rounded-[18px] bg-white shadow-[0_2px_20px_rgba(61,35,20,0.055)] transition-shadow hover:shadow-[0_12px_40px_rgba(61,35,20,0.11)] md:grid-cols-[1fr_1.1fr]"
    >
      <div className="relative min-h-[260px] bg-cream-light md:min-h-[340px]">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <span className="absolute top-[18px] left-[18px] rounded-full bg-tan px-3.5 py-[6px] text-[10px] font-medium tracking-[0.1em] uppercase text-brown-deep">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 md:p-11">
        <p className="mb-3.5 text-xs tracking-[0.04em] text-brown/50">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mb-3.5 font-serif text-[28px] leading-[1.3] font-medium tracking-[-0.01em] text-brown-deep">
          {post.title}
        </p>
        <p className="text-[14px] leading-[1.72] font-light text-brown">
          {post.description}
        </p>
        <span className="mt-[22px] inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.08em] uppercase text-tan">
          Read article →
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_2px_20px_rgba(61,35,20,0.055)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(61,35,20,0.11)]"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-cream-light">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3.5 left-3.5 rounded-full bg-crimson px-2.5 py-1 text-[10px] font-medium tracking-[0.1em] uppercase text-white">
          {post.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pb-7">
        <p className="mb-2.5 text-[11px] tracking-[0.04em] text-brown/50">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mb-3 font-serif text-[19px] leading-[1.35] font-medium tracking-[-0.005em] text-brown-deep">
          {post.title}
        </p>
        <p className="flex-1 text-[13px] leading-[1.72] font-light text-brown">
          {post.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.08em] uppercase text-tan">
          Read →
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        <section className="bg-charcoal px-8 pt-[168px] pb-20 text-center">
          <p className="mb-4 text-[10px] font-medium tracking-[0.26em] uppercase text-tan">
            Journal
          </p>
          <h1 className="font-serif text-[clamp(36px,6vw,60px)] leading-[1.15] font-medium tracking-[-0.01em] text-cream">
            The Dali House Blog
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.7] font-light text-cream/55">
            Thoughts on coliving, relocating, and building a life you love in
            Dallas.
          </p>
        </section>

        <section className="px-8 py-20">
          <div className="mx-auto max-w-[1080px]">
            {featured && <FeaturedCard post={featured} />}
            {rest.length > 0 && (
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
