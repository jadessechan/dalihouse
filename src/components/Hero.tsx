import Image from "next/image";
import Button from "@/components/ui/Button";

/* Hero background: a cozy lofi-illustration scene — side/profile view of a
   girl in a red sweater at her lamp-lit desk by a white-framed window, the
   Dallas skyline at sunset beyond, a gray cat, and a single melting clock —
   generated with the banana skill and optimized to /public/hero-room.jpg.
   Until that file exists, the dusk-tone fallback shows (CSS background-image
   fails gracefully). */

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#1f2640] bg-cover bg-center px-6 pt-[14vh] pb-20 text-center text-cream"
      style={{ backgroundImage: "url(/hero-room.jpg)" }}
    >
      {/* Legibility scrim — darker over the open upper sky (nav + title),
          clearing toward the lamp-lit desk below. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,16,34,0.60) 0%, rgba(14,16,34,0.34) 28%, rgba(14,16,34,0.08) 48%, rgba(14,16,34,0) 64%)",
        }}
      />

      <p
        className="eyebrow relative z-[2] mb-6 text-cream/80"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
      >
        Welcome to
      </p>

      <Image
        src="/dali-house-title.png"
        alt="Dali House"
        width={760}
        height={240}
        priority
        className="relative z-[2] block h-auto w-[min(86vw,480px)] select-none drop-shadow-[0_3px_16px_rgba(0,0,0,0.45)]"
      />

      <h1 className="sr-only">Dali House — coliving in Dallas for women</h1>

      <p
        className="relative z-[2] mt-5 font-mono text-[14px] font-medium uppercase tracking-[0.2em] text-cream sm:text-[16px]"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.75), 0 2px 18px rgba(0,0,0,0.6)" }}
      >
        Coliving for Women in Dallas
      </p>

      <Button
        href="https://form.typeform.com/to/J9BtSauc"
        external
        variant="primary"
        className="relative z-[2] mt-9 shadow-[0_6px_24px_rgba(0,0,0,0.28)]"
      >
        Apply Now
      </Button>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 z-[2] -translate-x-1/2 animate-bounce text-cream/40"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
