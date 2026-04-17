import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="bg-charcoal px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Image
          src="/dali-house-quote.png"
          alt="Home isn&rsquo;t just about where you live&mdash;it&rsquo;s about the people and the life you build."
          width={1024}
          height={200}
          className="mx-auto h-auto w-full"
        />
        <blockquote className="sr-only">
          Home isn&rsquo;t just about where you live&mdash;it&rsquo;s about the
          people and the life you build.
        </blockquote>
      </div>
    </section>
  );
}
