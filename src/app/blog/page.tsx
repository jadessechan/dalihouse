import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips on coliving, relocating to Dallas, and building community as a young professional woman.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream px-6 pt-28 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-brown-deep md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-brown/70">
            Guides and stories on coliving, relocating, and building your life
            in Dallas.
          </p>

          <div className="mt-12 space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-sm text-brown/50">{post.date}</time>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-brown-deep transition-colors group-hover:text-tan">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-brown/70">
                    {post.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-tan">
                    Read more &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
