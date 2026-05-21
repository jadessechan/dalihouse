import Image from "next/image";
import type { ReactNode } from "react";

// Editorial magazine components used in MDX blog posts. Direct ports of
// design-system/dali-house-design-system-v1/project/ui_kits/blog/post.html
// + ArticleParts.jsx, restyled with Tailwind v4 utilities and the project's
// CSS variables (cream/crimson/tan tokens defined in src/app/globals.css).

// ─── Spread ──────────────────────────────────────────────────────────────
// Two-column grid: callout on the left, photo card on the right. The first
// editorial spread of a post lives here.
export function Spread({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.1fr]">
      {children}
    </div>
  );
}

// ─── Callout ─────────────────────────────────────────────────────────────
// Crimson-bordered card with a ✿ notch at the top-left.
export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="relative rounded-[14px] border-[1.5px] border-crimson bg-cream px-7 py-6">
      <span
        aria-hidden
        className="absolute -top-[12px] left-[18px] block h-6 w-6 rounded-full bg-cream"
        style={{ boxShadow: "inset 0 0 0 1.5px var(--color-crimson), 0 0 0 6px var(--color-cream)" }}
      />
      <span
        aria-hidden
        className="absolute -top-4 left-6 bg-cream px-[2px] text-[14px] leading-none text-crimson"
      >
        ✿
      </span>
      <div className="text-[14px] font-light leading-[1.75] text-brown [&_strong]:font-semibold [&_strong]:text-crimson">
        {children}
      </div>
    </aside>
  );
}

// ─── PhotoCard ───────────────────────────────────────────────────────────
// A single photo with an italic Playfair caption. `eyebrow` renders the
// uppercase label above the caption (e.g. "The Living Room").
export function PhotoCard({
  src,
  alt,
  eyebrow,
  caption,
  height = 320,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  height?: number;
}) {
  return (
    <figure className="not-prose">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(61,35,20,0.14)]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={height}
          className="block h-auto w-full object-cover"
          style={{ aspectRatio: `${800 / height}` }}
        />
      </div>
      {(eyebrow || caption) && (
        <figcaption className="mt-3 font-serif text-[13.5px] italic leading-[1.55] text-brown">
          {eyebrow && (
            <strong className="mb-[3px] block font-sans text-[12px] font-semibold uppercase not-italic tracking-[0.06em] text-brown-deep">
              {eyebrow}
            </strong>
          )}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── PhotoStrip ──────────────────────────────────────────────────────────
// Two photos side-by-side with a magazine offset — left is taller, right is
// shorter, aligned to the baseline. Pass exactly two children.
export function PhotoStrip({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-16 grid grid-cols-1 items-end gap-8 md:grid-cols-[1.3fr_1fr]">
      {children}
    </div>
  );
}

// ─── SectionHead ─────────────────────────────────────────────────────────
// Category pill above the italic Playfair section heading. `labelColor=tan`
// switches the pill to tan + brown-deep text; `headingColor=brown` swaps the
// heading itself from crimson to brown-deep.
export function SectionHead({
  label,
  labelColor = "crimson",
  headingColor = "crimson",
  id,
  children,
}: {
  label: string;
  labelColor?: "crimson" | "tan";
  headingColor?: "crimson" | "brown";
  id?: string;
  children: ReactNode;
}) {
  const pill =
    labelColor === "tan"
      ? "bg-tan text-brown-deep"
      : "bg-crimson text-white";
  const heading =
    headingColor === "brown" ? "text-brown-deep" : "text-crimson";
  return (
    <header className="not-prose mt-36">
      <span
        className={`inline-block whitespace-nowrap rounded px-3 py-[5px] text-[11px] font-semibold leading-none uppercase tracking-[0.14em] ${pill}`}
      >
        {label}
      </span>
      <h2
        id={id}
        className={`scroll-mt-28 font-serif font-semibold italic leading-[1.05] tracking-[-0.015em] text-[clamp(34px,4.5vw,46px)] ${heading}`}
      >
        {children}
      </h2>
    </header>
  );
}

// ─── Columns ─────────────────────────────────────────────────────────────
// Two-column body with a drop cap on the first paragraph (the lede). Used
// for the long opening section of a post.
export function Columns({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-7 columns-1 gap-10 text-[15px] font-light leading-[1.78] text-brown md:columns-2 [&_p]:mb-[1em] [&_p]:break-inside-avoid [&_strong]:font-medium [&_strong]:text-brown-deep [&_p:first-of-type::first-letter]:float-left [&_p:first-of-type::first-letter]:mt-[6px] [&_p:first-of-type::first-letter]:mr-[10px] [&_p:first-of-type::first-letter]:font-serif [&_p:first-of-type::first-letter]:text-[56px] [&_p:first-of-type::first-letter]:font-semibold [&_p:first-of-type::first-letter]:leading-[0.9] [&_p:first-of-type::first-letter]:text-crimson">
      {children}
    </div>
  );
}

// ─── SingleCol ───────────────────────────────────────────────────────────
// Standard single-column body block. Used for shorter sections after the
// opening multi-column spread.
export function SingleCol({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-7 max-w-[720px] text-[15px] font-light leading-[1.78] text-brown [&_p]:mb-[1em] [&_strong]:font-medium [&_strong]:text-brown-deep">
      {children}
    </div>
  );
}

// ─── Lede ────────────────────────────────────────────────────────────────
// Opening paragraph(s) of a post, sitting above the first <Spread>. Same
// single-column typography as SingleCol but with the same drop-cap rule
// Columns applies to its first paragraph — keeps the magazine opener
// visually anchored without forcing a two-column layout.
export function Lede({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose max-w-[720px] text-[15px] font-light leading-[1.78] text-brown [&_p]:mb-[1em] [&_strong]:font-medium [&_strong]:text-brown-deep [&_p:first-of-type::first-letter]:float-left [&_p:first-of-type::first-letter]:mt-[6px] [&_p:first-of-type::first-letter]:mr-[10px] [&_p:first-of-type::first-letter]:font-serif [&_p:first-of-type::first-letter]:text-[56px] [&_p:first-of-type::first-letter]:font-semibold [&_p:first-of-type::first-letter]:leading-[0.9] [&_p:first-of-type::first-letter]:text-crimson">
      {children}
    </div>
  );
}

// ─── PullQuote ───────────────────────────────────────────────────────────
// Centered Playfair italic quote with a giant decorative " above and an
// optional crimson attribution underneath.
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <div className="not-prose mx-auto my-16 max-w-[760px] text-center">
      <span
        aria-hidden
        className="block h-8 font-serif text-[96px] italic leading-none text-crimson opacity-35"
      >
        &ldquo;
      </span>
      <blockquote className="mx-0 mt-[-10px] font-serif text-[clamp(24px,2.5vw,30px)] font-normal italic leading-[1.45] tracking-[-0.01em] text-brown-deep">
        {children}
      </blockquote>
      {attribution && (
        <p className="mt-[18px] text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson">
          {attribution}
        </p>
      )}
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────
// Subtle horizontal line with a small bloom in the middle. Used between
// long sections when an extra breath is wanted.
export function Divider() {
  return (
    <div className="not-prose mx-auto mt-18 text-center text-tan">
      <span className="inline-block h-px w-20 align-middle bg-brown/20 mr-3" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="inline-block align-middle"
        aria-hidden
      >
        <g fill="currentColor">
          <ellipse cx="12" cy="6" rx="2.6" ry="4.6" />
          <ellipse cx="12" cy="18" rx="2.6" ry="4.6" />
          <ellipse cx="6" cy="12" rx="4.6" ry="2.6" />
          <ellipse cx="18" cy="12" rx="4.6" ry="2.6" />
          <circle cx="12" cy="12" r="2" fill="#faf4e8" />
        </g>
      </svg>
      <span className="inline-block h-px w-20 align-middle bg-brown/20 ml-3" />
    </div>
  );
}
