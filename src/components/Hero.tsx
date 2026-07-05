import Image from "next/image";
import Button from "@/components/ui/Button";

/* Hero background: an impressionist plein air oil painting of the Dallas
   skyline at sunset — Reunion Tower low on the left, the Margaret Hunt Hill
   Bridge on the right, and small peach-lit clouds scattered evenly across a
   lavender-blue sky, painted in the same loose oil brushwork as the city so
   the cream title floats over open sky. Generated with the banana skill and optimized to
   /public/hero-skyline-dusk-warm.jpg (meadow/amber alternate:
   hero-skyline-dusk.jpg). Until that file exists, the dusk-tone fallback
   shows (CSS background-image fails gracefully). */

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#a06d52] bg-cover bg-center px-6 pt-[14vh] pb-20 text-center text-cream"
      style={{ backgroundImage: "url(/hero-skyline-dusk-warm.jpg)" }}
    >
      {/* Light legibility scrim — the painted sky is already deep; this only
          steadies the nav band and fades out above the horizon. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(24,20,36,0.30) 0%, rgba(24,20,36,0.12) 30%, rgba(24,20,36,0) 55%)",
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
