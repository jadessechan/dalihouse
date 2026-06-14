import Button from "@/components/ui/Button";

const steps = [
  {
    number: "1",
    title: "Get to Know You",
    description:
      "Share your lifestyle and what you're looking for — we're intentional about creating the right fit.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Tour the Space",
    description:
      "Visit in person or virtually to see if Dali House feels like home.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Secure Your Room",
    description:
      "Complete screening, sign your lease, and send your deposit to reserve your spot.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-green-deep px-8 py-24">
      <p className="eyebrow mb-3.5 text-center text-pink">The process</p>
      <h2 className="text-center font-serif text-[clamp(30px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.02em] text-cream">
        How It Works
      </h2>

      <div className="mx-auto mt-14 grid max-w-[900px] gap-y-10 gap-x-8 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.number}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-pink/30 bg-pink/[0.12] text-pink">
              {s.icon}
            </div>
            <div className="eyebrow mb-0.5 text-cream/55">Step {s.number}</div>
            <h3 className="mt-3 mb-2.5 font-serif text-lg font-medium text-pink">
              {s.title}
            </h3>
            <p className="text-sm leading-[1.72] text-cream/65">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-[52px] text-center">
        <Button
          href="https://form.typeform.com/to/J9BtSauc"
          external
          variant="primary"
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
}
