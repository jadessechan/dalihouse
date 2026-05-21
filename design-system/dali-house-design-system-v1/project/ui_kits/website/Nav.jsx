/* Nav.jsx — fixed top nav, transparent over hero, scrolled = charcoal + blur.
   Source: jadessechan/dalihouse@master src/components/Nav.tsx */
import { useEffect, useState } from "react";

const links = [
  { label: "The Space",    href: "#the-space" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Your Host",    href: "#meet-your-host" },
  { label: "FAQ",          href: "#faq" },
];

export default function Nav({ alwaysScrolled = false }) {
  const [scrolled, setScrolled] = useState(alwaysScrolled);

  useEffect(() => {
    if (alwaysScrolled) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysScrolled]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="/" aria-label="Dali House — home">
          <img src="/assets/logo-wordmark.png" alt="Dali House" />
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="nav-apply" href="https://form.typeform.com/to/J9BtSauc" target="_blank" rel="noopener noreferrer">
            Apply
          </a>
        </div>
      </div>
    </nav>
  );
}
