const steps = [
  {
    number: "1",
    title: "Get to Know You",
    description:
      "Share your lifestyle and what you're looking for — we're intentional about creating the right fit.",
  },
  {
    number: "2",
    title: "Tour the Space",
    description:
      "Visit in person or virtually to see if Dali House feels like home.",
  },
  {
    number: "3",
    title: "Secure Your Room",
    description:
      "Complete screening, sign your lease, and send your deposit to reserve your spot.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brown-deep px-8 py-24">
      <p className="mb-3.5 text-center text-[10px] font-medium tracking-[0.22em] uppercase text-tan/70">
        The process
      </p>
      <h2 className="text-center font-serif text-[clamp(30px,4vw,44px)] leading-[1.2] font-medium text-cream">
        How It Works
      </h2>

      <div className="mx-auto mt-14 grid max-w-[900px] gap-y-10 gap-x-8 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.number}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-cream font-serif text-xl font-bold text-brown-deep">
              {s.number}
            </div>
            <h3 className="mt-[18px] mb-2.5 font-serif text-lg font-semibold text-tan">
              {s.title}
            </h3>
            <p className="text-sm leading-[1.72] font-light text-cream/60">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[52px] text-center">
        <a
          href="https://form.typeform.com/to/J9BtSauc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-cream-light px-[38px] py-[14px] text-[11px] font-medium tracking-[0.18em] uppercase text-brown-deep transition-all hover:-translate-y-0.5 hover:bg-cream"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
