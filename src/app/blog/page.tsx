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
      className="mb-7 grid overflow-hidden rounded-[18px] border border-ink/10 bg-cream-2 transition-colors hover:border-pink/40 md:grid-cols-[1fr_1.1fr]"
    >
      <div className="relative min-h-[260px] bg-cream md:min-h-[340px]">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <span className="absolute top-[18px] left-[18px] rounded-full bg-pink px-3.5 py-[6px] eyebrow text-green-deep">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 md:p-11">
        <p className="eyebrow mb-3.5 text-ink/50">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mb-3.5 font-serif text-[28px] leading-[1.2] font-medium tracking-[-0.02em] text-ink">
          {post.title}
        </p>
        <p className="text-[15px] leading-[1.72] text-ink/75">
          {post.description}
        </p>
        <span className="eyebrow mt-[22px] inline-flex items-center gap-1.5 text-pink-deep">
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
      className="flex flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-cream-2 transition-all duration-200 hover:-translate-y-1 hover:border-pink/40"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-cream">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3.5 left-3.5 rounded-full bg-pink-deep px-2.5 py-1 eyebrow text-cream">
          {post.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pb-7">
        <p className="eyebrow mb-2.5 text-ink/50">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mb-3 font-serif text-[20px] leading-[1.25] font-medium tracking-[-0.015em] text-ink">
          {post.title}
        </p>
        <p className="flex-1 text-[14px] leading-[1.72] text-ink/75">
          {post.description}
        </p>
        <span className="eyebrow mt-5 inline-flex items-center gap-1.5 text-pink-deep">
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
        <section className="bg-green-deep px-8 pt-[168px] pb-20 text-center">
          <p className="eyebrow mb-4 text-pink">Journal</p>
          <h1 className="font-serif text-[clamp(36px,6vw,60px)] leading-[1.05] font-medium tracking-[-0.02em] text-cream">
            The Dali House Blog
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.7] text-cream/70">
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
