export default function SoftLanding() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal bg-cover bg-center px-8 py-[104px]"
      style={{ backgroundImage: "url(/dali-house-bg.png)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(14,10,7,0.72)]"
      />

      <div className="relative mx-auto grid max-w-[1080px] items-center gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-serif text-[clamp(34px,5vw,56px)] leading-[1.18] font-medium text-cream">
            Start your soft
            <br />
            landing in Dallas.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] font-light text-cream/55">
            Move-in ready, thoughtfully designed, and built for women navigating
            a new city, new role, or whatever&rsquo;s next.
          </p>
        </div>
        <div className="flex items-center md:justify-center">
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-cream-light px-11 py-[15px] text-[11px] font-medium tracking-[0.2em] uppercase text-brown-deep shadow-[0_4px_28px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(0,0,0,0.3)]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
