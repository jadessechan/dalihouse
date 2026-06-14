/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. Flat / paper — no shadows. */

import Link from "next/link";

type Variant = "primary" | "ghost" | "ghost-cream";

const variantClass: Record<Variant, string> = {
  // pink fill, deep-green text — the canonical CTA
  primary: "bg-pink text-green-deep hover:bg-pink-deep",
  // pink hairline on cream grounds
  ghost: "border border-pink text-pink hover:bg-pink/10",
  // light hairline on dark green grounds
  "ghost-cream": "border border-cream/35 text-cream/90 hover:bg-cream/10 hover:text-cream",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-[12px] font-medium uppercase tracking-[0.12em] font-[family-name:var(--font-mono)] transition-colors";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  external = false,
}: CommonProps & { href: string; external?: boolean }) {
  const cls = `${base} ${variantClass[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
