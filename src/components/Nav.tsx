"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "The Space", href: "/#the-space" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Your Host", href: "/#meet-your-host" },
  { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const bar = scrolled
    ? "bg-[rgba(22,17,13,0.96)] backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.25)]"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow] duration-300 ${bar}`}
    >
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-8">
        <Link href="/" className="flex items-center" aria-label="Dali House — home">
          <Image
            src="/dali-house-title.png"
            alt="Dali House"
            width={180}
            height={36}
            priority
            className="block h-9 w-auto opacity-90 brightness-0 invert"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-[0.04em] text-cream/65 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/35 px-[22px] py-[9px] text-[12px] font-medium tracking-[0.1em] uppercase text-cream/85 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            Apply
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-[1.5px] w-[22px] bg-cream/80 transition-transform duration-200 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-cream/80 transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-cream/80 transition-transform duration-200 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="flex flex-col border-t border-cream/10 bg-[rgba(22,17,13,0.97)] px-7 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-3 text-[15px] text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://form.typeform.com/to/J9BtSauc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block self-start rounded-full bg-brown-deep px-6 py-3 text-[12px] font-medium tracking-[0.1em] uppercase text-cream"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  );
}
