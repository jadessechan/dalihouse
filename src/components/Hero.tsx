import Image from "next/image";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-charcoal bg-cover bg-[center_85%] px-6 pt-[120px] pb-20 text-center text-cream"
      style={{ backgroundImage: "url(/dali-house-hero.jpg)" }}
    >
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[rgba(10,7,5,0.58)]"
      />
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
        style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
      />

      <p className="relative z-[2] mb-6 text-[11px] font-normal tracking-[0.4em] uppercase text-cream/35">
        Welcome to
      </p>

      <Image
        src="/dali-house-title.png"
        alt="Dali House"
        width={760}
        height={240}
        priority
        className="relative z-[2] block h-auto w-[min(88vw,520px)] select-none"
      />

      <h1 className="sr-only">Welcome to Dali House</h1>

      <p className="relative z-[2] mt-[22px] text-[12px] tracking-[0.28em] uppercase text-tan">
        Coliving for women in Dallas
      </p>

      <a
        href="https://form.typeform.com/to/J9BtSauc"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-[2] mt-10 inline-block rounded-full bg-cream-light px-11 py-[15px] text-[11px] font-medium tracking-[0.2em] uppercase text-brown-deep shadow-[0_4px_28px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(0,0,0,0.3)]"
      >
        Apply Now
      </a>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 z-[2] -translate-x-1/2 animate-bounce text-cream/30"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
