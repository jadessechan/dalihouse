/* HowItWorks.jsx — three steps on brown-deep, hand-rolled SVG icons in tan circles.
   Source: jadessechan/dalihouse@master src/components/HowItWorks.tsx */

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);
const HouseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const KeyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const steps = [
  { number: "1", title: "Get to Know You",  icon: <ChatIcon />,  description: "Share your lifestyle and what you're looking for — we're intentional about creating the right fit." },
  { number: "2", title: "Tour the Space",   icon: <HouseIcon />, description: "Visit in person or virtually to see if Dali House feels like home." },
  { number: "3", title: "Secure Your Room", icon: <KeyIcon />,   description: "Complete screening, sign your lease, and send your deposit to reserve your spot." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <p className="eyebrow-c">The process</p>
      <h2 className="title">How It Works</h2>
      <div className="how-grid">
        {steps.map((s) => (
          <div key={s.number} className="step">
            <span className="icon">{s.icon}</span>
            <div className="num">Step {s.number}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
      <div className="cta-row">
        <a href="https://form.typeform.com/to/J9BtSauc" target="_blank" rel="noopener noreferrer" className="btn-apply steps">
          Apply Now
        </a>
      </div>
    </section>
  );
}
