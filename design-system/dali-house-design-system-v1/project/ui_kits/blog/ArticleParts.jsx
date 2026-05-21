/* ArticleParts.jsx — reusable editorial fragments for blog posts.
   Token sources: colors_and_type.css */

export function Bloom({ size = 18, color = "var(--accent)", className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden style={{ color }}>
      <g fill="currentColor">
        <ellipse cx="12" cy="6"  rx="2.6" ry="4.6" />
        <ellipse cx="12" cy="18" rx="2.6" ry="4.6" />
        <ellipse cx="6"  cy="12" rx="4.6" ry="2.6" />
        <ellipse cx="18" cy="12" rx="4.6" ry="2.6" />
        <circle  cx="12" cy="12" r="2"   fill="#faf4e8" />
      </g>
    </svg>
  );
}

/* The magazine's highlighter category label.
   - color: "crimson" (default) | "tan"
*/
export function CategoryLabel({ children, color = "crimson" }) {
  const styles =
    color === "tan"
      ? { background: "var(--accent)", color: "var(--color-brown-deep)" }
      : { background: "var(--color-crimson)", color: "#fff" };
  return <span className="cat" style={styles}>{children}</span>;
}

/* Section heading — italic Playfair, crimson by default. */
export function SectionHead({ label, labelColor = "crimson", children, headingColor = "crimson" }) {
  const h2Color = headingColor === "brown" ? "var(--color-brown-deep)" : "var(--color-crimson)";
  return (
    <div className="section-head">
      <div className="cat-row"><CategoryLabel color={labelColor}>{label}</CategoryLabel></div>
      <h2 style={{ color: h2Color }}>{children}</h2>
    </div>
  );
}

/* Bordered callout box with a small ✿ at the top-left. */
export function Callout({ children }) {
  return (
    <aside className="callout">
      <p>{children}</p>
    </aside>
  );
}

/* The big centered pull-quote with a decorative quote mark above. */
export function PullQuote({ children, attribution }) {
  return (
    <div className="pq">
      <span className="pq-mark" aria-hidden>&ldquo;</span>
      <blockquote>{children}</blockquote>
      {attribution && <p className="pq-attr">{attribution}</p>}
    </div>
  );
}

/* Vendor-style info card — small icon list inside crimson circles. */
export function InfoCard({ name, location, items }) {
  return (
    <div className="info-card">
      <p className="name">{name}{location && <span> · {location}</span>}</p>
      <ul className="info-list">
        {items.map((it, i) => (
          <li key={i}><span className="ic">{it.icon}</span>{it.text}</li>
        ))}
      </ul>
    </div>
  );
}
