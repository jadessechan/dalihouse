const features = [
  {
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every room is thoughtfully furnished and ready to go.",
    position: "left" as const,
  },
  {
    title: "Flexible Lease",
    description:
      "No long-term commitment required. Stay as long as you need with month-to-month flexibility.",
    position: "center" as const,
  },
  {
    title: "Built-in Community",
    description:
      "Connect with like-minded women who are building their careers and lives in Dallas.",
    position: "right" as const,
  },
];

const spritePosition: Record<"left" | "center" | "right", string> = {
  left: "0% 50%",
  center: "50% 50%",
  right: "100% 50%",
};

export default function Features() {
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-md transition-shadow hover:shadow-lg"
          >
            <div
              aria-hidden
              className="mb-5 h-20 w-20 bg-no-repeat"
              style={{
                backgroundImage: "url(/dali-house-amenities.png)",
                backgroundSize: "300% auto",
                backgroundPosition: spritePosition[f.position],
              }}
            />
            <h3 className="font-serif text-xl font-semibold text-brown-deep">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brown/80">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
