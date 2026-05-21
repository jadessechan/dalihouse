/* Hero.jsx — full-bleed photo, dark overlay, grain texture, wordmark, CTA.
   Source: jadessechan/dalihouse@master src/components/Hero.tsx */

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: "url(/assets/dali-house-hero.jpg)" }}>
      <div aria-hidden className="overlay" />
      <div aria-hidden className="grain" style={{ backgroundImage: GRAIN_SVG }} />

      <p className="welcome">Welcome to</p>

      <img className="title" src="/assets/logo-wordmark.png" alt="Dali House" width={760} height={240} />
      <h1 className="sr">Welcome to Dali House</h1>

      <p className="tag">Coliving for women in Dallas</p>

      <a
        href="https://form.typeform.com/to/J9BtSauc"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-apply cta"
      >
        Apply Now
      </a>

      <div aria-hidden className="down">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
