import Link from "next/link";
import ClockMark from "@/components/ui/ClockMark";

/* Brand lockup: melting-clock mark + "Dali House" serif wordmark.
   Color is inherited via `currentColor` — set a `text-*` class on the
   wrapper (e.g. text-cream). Wraps in a link to home unless `asLink={false}`. */

export default function Logo({
  markSize = 30,
  showWord = true,
  asLink = true,
  className = "",
  wordClassName = "font-serif text-[19px] font-medium tracking-[-0.01em]",
}: {
  markSize?: number;
  showWord?: boolean;
  asLink?: boolean;
  className?: string;
  wordClassName?: string;
}) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ClockMark size={markSize} className="shrink-0" />
      {showWord && (
        <span className={`leading-none whitespace-nowrap ${wordClassName}`}>
          Dali House
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="Dali House — home" className="inline-flex">
      {inner}
    </Link>
  );
}
