/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. Flat green-deep
   announcement bar, dismissible, mono label. Mounts above the nav. */
"use client";

import { useState } from "react";

export default function StickyBanner({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const inner = (
    <span className="eyebrow text-cream/90">{children}</span>
  );

  return (
    <div className="relative z-[60] bg-green-deep">
      <div className="mx-auto flex h-9 max-w-[1120px] items-center justify-center px-10">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            {inner}
          </a>
        ) : (
          inner
        )}
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setOpen(false)}
          className="absolute right-4 text-cream/50 transition-colors hover:text-cream"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>
      </div>
    </div>
  );
}
