const features = [
  {
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every room is thoughtfully furnished and ready to go.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path d="M3 9.5V21h18V9.5M3 9.5L12 3l9 6.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21V14h6v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Flexible Lease",
    description:
      "No long-term commitment required. Stay as long as you need with month-to-month flexibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" />
        <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built-in Community",
    description:
      "Connect with like-minded women who are building their careers and lives in Dallas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeLinecap="round" />
        <path d="M17 11a4 4 0 014 4v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-brown-deep">
              {f.icon}
            </div>
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
