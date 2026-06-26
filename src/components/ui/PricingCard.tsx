/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. Flat paper card with a
   2px pink rule, mono labels, and an animated price figure. */

import StatCounter from "./StatCounter";
import Button from "./Button";
import EyebrowPill from "./EyebrowPill";

export default function PricingCard({
  amount,
  period = "per month",
  label = "Pricing",
  features,
  ctaHref,
  ctaLabel = "Apply Now",
  note,
  className = "",
}: {
  amount: number;
  period?: string;
  label?: string;
  features: string[];
  ctaHref: string;
  ctaLabel?: string;
  note?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-pink bg-cream-2 px-8 py-9 ${className}`}
    >
      <EyebrowPill tone="green">{label}</EyebrowPill>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-serif text-[clamp(52px,8vw,76px)] leading-none font-medium tracking-[-0.03em] text-green">
          <StatCounter value={amount} prefix="$" />
        </span>
        <span className="eyebrow text-ink/55">{period}</span>
      </div>

      <ul className="mt-7 grid gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/80">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-1 shrink-0 text-pink-deep"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Button href={ctaHref} external variant="primary" className="mt-8 w-full">
        {ctaLabel}
      </Button>
      {note ? (
        <p className="mt-4 text-center text-[13px] italic text-ink/45">{note}</p>
      ) : null}
    </div>
  );
}
