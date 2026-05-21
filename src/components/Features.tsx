function SofaIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 14h18v4H3z" />
      <path d="M5 14v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M8 11h8" />
      <path d="M5 18v2 M19 18v2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4 M16 3v4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const features = [
  {
    Icon: SofaIcon,
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every room is thoughtfully furnished and ready to go.",
  },
  {
    Icon: CalendarIcon,
    title: "Flexible Lease",
    description:
      "No long-term commitment required. Stay as long as you need with month-to-month flexibility.",
  },
  {
    Icon: UsersIcon,
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
        {features.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl bg-white p-10 text-center shadow-[0_2px_20px_rgba(61,35,20,0.055)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(61,35,20,0.1)]"
          >
            <div
              className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full text-tan"
              style={{
                background: "rgba(201,169,110,0.12)",
                border: "1px solid rgba(201,169,110,0.20)",
              }}
            >
              <Icon />
            </div>
            <h3 className="mb-2.5 font-serif text-lg font-semibold text-brown-deep">
              {title}
            </h3>
            <p className="text-sm leading-[1.75] font-light text-brown">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
