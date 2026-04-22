export default function SoftLanding() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal bg-cover bg-center px-8 py-[104px] text-center"
      style={{ backgroundImage: "url(/dali-house-bg.png)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(14,10,7,0.72)]"
      />

      <div className="relative">
        <h2 className="font-serif text-[clamp(34px,5vw,56px)] leading-[1.18] font-medium text-cream">
          Start your soft
          <br />
          landing in Dallas.
        </h2>

        <p className="mx-auto mt-4 max-w-[360px] text-[15px] leading-[1.7] font-light text-cream/55">
          Spots are limited and filled on a rolling basis.
        </p>

        <a
          href="https://form.typeform.com/to/J9BtSauc"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-cream-light px-11 py-[15px] text-[11px] font-medium tracking-[0.2em] uppercase text-brown-deep shadow-[0_4px_28px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(0,0,0,0.3)]"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
