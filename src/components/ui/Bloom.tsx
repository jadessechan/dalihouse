/* Decorative four-petal bloom motif used on the blog covers and the hero.
   Color comes from `currentColor` (set via a text-* class); the center dot
   defaults to cream so it reads as a cut-out on dark grounds. */

export default function Bloom({
  size = 22,
  center = "#efe7d4",
  className = "",
}: {
  size?: number;
  center?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <g fill="currentColor">
        <ellipse cx="12" cy="6" rx="2.6" ry="4.6" />
        <ellipse cx="12" cy="18" rx="2.6" ry="4.6" />
        <ellipse cx="6" cy="12" rx="4.6" ry="2.6" />
        <ellipse cx="18" cy="12" rx="4.6" ry="2.6" />
        <circle cx="12" cy="12" r="2" fill={center} />
      </g>
    </svg>
  );
}
