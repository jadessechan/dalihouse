export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-charcoal px-6 text-center text-cream">
      {/* Large decorative type */}
      <div className="mb-6 select-none">
        <span className="font-serif text-[clamp(3rem,12vw,8rem)] font-light leading-none tracking-tight text-cream/20">
          Dali
        </span>
        <br />
        <span className="font-serif text-[clamp(3rem,12vw,8rem)] font-light leading-none tracking-tight text-cream/20">
          House
        </span>
      </div>

      <h1 className="font-serif text-4xl font-semibold md:text-6xl">
        Welcome to Dali House
      </h1>
      <p className="mt-4 text-lg font-light tracking-[0.2em] uppercase text-tan">
        Coliving for women in Dallas
      </p>

      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
        A co-living space in Dallas for young female professionals who value
        comfort and intentional living. Whether you&apos;re relocating or
        building your career, Dali House offers a refined and welcoming
        environment to live and grow.
      </p>

      <p className="mx-auto mt-6 max-w-md font-serif text-lg italic text-tan/90 md:text-xl">
        Not just a place to live&mdash;but a space to land, connect, and grow.
      </p>

      <a
        href="https://form.typeform.com/to/J9BtSauc"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 rounded-full bg-cream-light px-10 py-3.5 text-sm font-semibold tracking-widest text-charcoal uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        Apply
      </a>

      {/* Scroll hint */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="text-cream/40"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
