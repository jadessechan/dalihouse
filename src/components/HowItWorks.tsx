const steps = [
  {
    number: "1",
    title: "Tour the Space",
    description:
      "Visit in person or virtually to see if Dali House feels like home.",
  },
  {
    number: "2",
    title: "Get to Know You",
    description:
      "Share your lifestyle and what you're looking for\u2014we're intentional about creating the right fit.",
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
    <section id="how-it-works" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-4xl font-semibold text-brown-deep md:text-5xl">
          How It Works
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-deep font-serif text-2xl font-bold text-cream">
                {s.number}
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-brown-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown/70">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brown-deep px-10 py-3.5 text-sm font-semibold tracking-widest text-cream uppercase shadow-md transition-all hover:scale-105 hover:bg-brown"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
