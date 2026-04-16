import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      <main className="min-h-screen bg-cream px-6 pt-28 pb-24">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm text-brown/50 transition-colors hover:text-tan"
          >
            &larr; Back to blog
          </Link>

          <header className="mt-6">
            <time className="text-sm text-brown/50">{post.date}</time>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-brown-deep md:text-4xl">
              {post.title}
            </h1>
          </header>

          <div
            className="prose prose-lg mt-10 max-w-none text-brown/80 prose-headings:font-serif prose-headings:text-brown-deep prose-a:text-tan prose-strong:text-brown-deep"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
