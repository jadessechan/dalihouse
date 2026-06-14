/* Dali House melting-clock mark — a stylized Salvador Dalí "soft watch":
   a round clock face that sags into a drip on the lower edge. Drawn with
   currentColor (set the color via a `text-*` class on this element or a
   parent), so it works on any ground and at any size. */

export default function ClockMark({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label="Dali House"
    >
      {/* Melting face: round at top, drooping into a drip at the bottom. */}
      <path
        d="M24 5
           C31 5 37 11 37 18
           C37 23 34 27 30 29
           C33 32 33 40 28 43
           C25 45 22 43 23 39
           C24 35 22 31 18 30
           C14 28 11 24 11 18
           C11 11 17 5 24 5 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Hour ticks (6 o'clock omitted — that edge is melting). */}
      <g fill="currentColor">
        <circle cx="23" cy="9" r="1" />
        <circle cx="32" cy="18" r="1" />
        <circle cx="14" cy="18" r="1" />
      </g>
      {/* Hands */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="23" y1="18" x2="23" y2="11" />
        <line x1="23" y1="18" x2="29" y2="21" />
      </g>
      {/* Center pin */}
      <circle cx="23" cy="18" r="1.7" fill="currentColor" />
    </svg>
  );
}
