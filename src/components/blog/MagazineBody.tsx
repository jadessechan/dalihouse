import Image from "next/image";
import type { ReactNode } from "react";

// Editorial magazine components used in MDX blog posts. Originally ported from
// design-system/dali-house-design-system-v1/project/, restyled with Tailwind v4
// utilities and the "Editorial Forest" tokens (green/pink/cream/ink) defined in
// src/app/globals.css.

// ─── Spread ──────────────────────────────────────────────────────────────
// Two-column grid: callout on the left, photo card on the right. The first
// editorial spread of a post lives here.
export function Spread({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.1fr]">
      {children}
    </div>
  );
}

// ─── Callout ─────────────────────────────────────────────────────────────
// Pink-bordered card with a ✿ notch at the top-left.
export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="relative rounded-[14px] border-[1.5px] border-pink-deep bg-cream px-7 py-6">
      <span
        aria-hidden
        className="absolute -top-[12px] left-[18px] block h-6 w-6 rounded-full bg-cream"
        style={{ boxShadow: "inset 0 0 0 1.5px var(--color-pink-deep), 0 0 0 6px var(--color-cream)" }}
      />
      <span
        aria-hidden
        className="absolute -top-4 left-6 bg-cream px-[2px] text-[14px] leading-none text-pink-deep"
      >
        ✿
      </span>
      <div className="text-[15px] leading-[1.75] text-ink/80 [&_strong]:font-semibold [&_strong]:text-pink-deep">
        {children}
      </div>
    </aside>
  );
}

// ─── PhotoCard ───────────────────────────────────────────────────────────
// A single photo with an italic serif caption. `eyebrow` renders the
// uppercase mono label above the caption (e.g. "The Living Room").
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
      <div className="relative overflow-hidden rounded-2xl">
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
        <figcaption className="mt-3 font-serif text-[14px] italic leading-[1.55] text-ink/70">
          {eyebrow && (
            <strong className="eyebrow mb-[3px] block not-italic text-ink">
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
// Category pill above the italic serif section heading. The prop VALUES
// ("crimson"/"tan", "crimson"/"brown") are a stable MDX API — keep them; only
// the emitted classes map to the new palette. `labelColor=tan` → pink pill;
// `headingColor=brown` → ink heading.
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
      ? "bg-pink text-green-deep"
      : "bg-pink-deep text-cream";
  const heading =
    headingColor === "brown" ? "text-ink" : "text-pink-deep";
  return (
    <header className="not-prose mt-25">
      <span
        className={`mb-[2em] inline-block whitespace-nowrap rounded px-3 py-[5px] text-[11px] font-semibold leading-none uppercase tracking-[0.14em] ${pill}`}
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
    <div className="not-prose mt-7 columns-1 gap-10 text-[16px] leading-[1.75] text-ink/80 md:columns-2 [&_p]:mb-[1em] [&_p]:break-inside-avoid [&_strong]:font-semibold [&_strong]:text-green-deep [&_p:first-of-type::first-letter]:float-left [&_p:first-of-type::first-letter]:mt-[6px] [&_p:first-of-type::first-letter]:mr-[10px] [&_p:first-of-type::first-letter]:font-serif [&_p:first-of-type::first-letter]:text-[56px] [&_p:first-of-type::first-letter]:font-semibold [&_p:first-of-type::first-letter]:leading-[0.9] [&_p:first-of-type::first-letter]:text-pink-deep">
      {children}
    </div>
  );
}

// ─── SingleCol ───────────────────────────────────────────────────────────
// Standard single-column body block. Used for shorter sections after the
// opening multi-column spread.
export function SingleCol({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-7 max-w-[720px] text-[16px] leading-[1.75] text-ink/80 [&_p]:mb-[1em] [&_strong]:font-semibold [&_strong]:text-green-deep">
      {children}
    </div>
  );
}

// ─── Lede ────────────────────────────────────────────────────────────────
// Opening paragraph(s) of a post, sitting above the first <Spread>. Same
// single-column typography as SingleCol but with the drop-cap rule on its
// first paragraph.
export function Lede({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose max-w-[720px] text-[16px] leading-[1.75] text-ink/80 [&_p]:mb-[1em] [&_strong]:font-semibold [&_strong]:text-green-deep [&_p:first-of-type::first-letter]:float-left [&_p:first-of-type::first-letter]:mt-[6px] [&_p:first-of-type::first-letter]:mr-[10px] [&_p:first-of-type::first-letter]:font-serif [&_p:first-of-type::first-letter]:text-[56px] [&_p:first-of-type::first-letter]:font-semibold [&_p:first-of-type::first-letter]:leading-[0.9] [&_p:first-of-type::first-letter]:text-pink-deep">
      {children}
    </div>
  );
}

// ─── PullQuote ───────────────────────────────────────────────────────────
// Centered serif italic quote with a giant decorative " above and an
// optional pink attribution underneath.
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
        className="block h-8 font-serif text-[96px] italic leading-none text-pink-deep opacity-45"
      >
        &ldquo;
      </span>
      <blockquote className="mx-0 mt-[-10px] font-serif text-[clamp(24px,2.5vw,30px)] font-normal italic leading-[1.45] tracking-[-0.01em] text-green-deep">
        {children}
      </blockquote>
      {attribution && (
        <p className="eyebrow mt-[18px] tracking-[0.2em] text-pink-deep">
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
    <div className="not-prose mx-auto mt-18 text-center text-pink">
      <span className="inline-block h-px w-20 align-middle bg-ink/15 mr-3" />
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
          <circle cx="12" cy="12" r="2" fill="#efe7d4" />
        </g>
      </svg>
      <span className="inline-block h-px w-20 align-middle bg-ink/15 ml-3" />
    </div>
  );
}
