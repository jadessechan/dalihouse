const features = [
  {
    icon: "\u{1F6CB}\u{FE0F}",
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every room is thoughtfully furnished and ready to go.",
  },
  {
    icon: "\u{1F4C5}",
    title: "Flexible Lease",
    description:
      "No long-term commitment required. Stay as long as you need with month-to-month flexibility.",
  },
  {
    icon: "\u{1F49E}",
    title: "Built-in Community",
    description:
      "Connect with like-minded women who are building their careers and lives in Dallas.",
  },
];

export default function Features() {
  return (
    <section className="bg-cream-light px-8 py-24">
      <p className="mb-3.5 text-center text-[10px] font-medium tracking-[0.22em] uppercase text-tan">
        What&rsquo;s included
      </p>
      <h2 className="text-center font-serif text-[clamp(30px,4vw,44px)] leading-[1.2] font-medium text-brown-deep">
        Everything handled,
        <br />
        from day one.
      </h2>

      <div className="mx-auto mt-14 grid max-w-[1080px] gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white p-10 text-center shadow-[0_2px_20px_rgba(61,35,20,0.055)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(61,35,20,0.1)]"
          >
            <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full bg-crimson text-[26px]">
              {f.icon}
            </div>
            <h3 className="mb-2.5 font-serif text-lg font-semibold text-brown-deep">
              {f.title}
            </h3>
            <p className="text-sm leading-[1.75] font-light text-brown">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
