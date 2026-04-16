"use client";

import { useState } from "react";

const links = [
  { label: "The Space", href: "#the-space" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Your Host", href: "#meet-your-host" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-2xl font-bold text-brown-deep">
          Dali House
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-brown transition-colors hover:text-brown-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brown-deep px-6 py-2 text-sm font-medium text-cream transition-colors hover:bg-brown"
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-brown-deep transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown-deep transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown-deep transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brown/10 bg-cream px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-brown transition-colors hover:text-brown-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full bg-brown-deep px-6 py-2 text-sm font-medium text-cream"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  );
}
