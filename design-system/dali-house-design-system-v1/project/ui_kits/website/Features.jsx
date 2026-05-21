/* Features.jsx — three white cards on cream-light, tan stroke-icon badges, hover lift.
   Source: jadessechan/dalihouse@master src/components/Features.tsx
   Iteration: emoji badges replaced with hand-rolled stroke icons matching HowItWorks. */

const SofaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14h18v4H3z" />
    <path d="M5 14v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
    <path d="M8 11h8" />
    <path d="M5 18v2 M19 18v2" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 3v4 M16 3v4" />
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const features = [
  { icon: <SofaIcon />,     title: "Fully Furnished",   description: "Move in with just your suitcase. Every room is thoughtfully furnished and ready to go." },
  { icon: <CalendarIcon />, title: "Flexible Lease",    description: "No long-term commitment required. Stay as long as you need with month-to-month flexibility." },
  { icon: <UsersIcon />,    title: "Built-in Community", description: "Connect with like-minded women who are building their careers and lives in Dallas." },
];

export default function Features() {
  return (
    <section className="section features">
      <p className="eyebrow-c" style={{ color: "var(--accent)" }}>What's included</p>
      <h2 className="title">Everything handled,<br />from day one.</h2>
      <div className="container feature-grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <div className="badge">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
