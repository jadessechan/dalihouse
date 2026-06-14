import Image from "next/image";
import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";
import AsciiHero from "@/components/ui/AsciiHero";
import Bloom from "@/components/ui/Bloom";

// Brand-tinted ASCII palette: pink, pink-deep, cream, green-lite.
const ASCII_PALETTE = ["#e89cb1", "#d27e96", "#efe7d4", "#3a5a36"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-green-deep px-6 pt-[120px] pb-20 text-center text-cream">
      {/* ASCII field background (reactive, cursor spotlight) */}
      <AsciiHero
        variant="bare"
        palette={ASCII_PALETTE}
        baseOpacity={0.18}
        spotlightOpacity={0.85}
        spotlightRadius={10}
        fontSize={12}
        className="z-0"
      />

      {/* Legibility vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 45%, rgba(20,30,18,0.35) 0%, rgba(20,30,18,0.66) 60%, rgba(20,30,18,0.82) 100%)",
        }}
      />

      {/* Decorative blooms */}
      <Bloom size={20} center="#243a21" className="absolute top-[20%] left-[8%] z-[2] text-pink/80" />
      <Bloom
        size={16}
        center="#243a21"
        className="absolute top-[28%] right-[10%] z-[2] rotate-[18deg] text-pink/70"
      />

      <p className="eyebrow relative z-[3] mb-6 text-cream/55">Welcome to</p>

      <Image
        src="/dali-house-title.png"
        alt="Dali House"
        width={760}
        height={240}
        priority
        className="relative z-[3] block h-auto w-[min(88vw,520px)] select-none"
      />

      <h1 className="sr-only">
        Dali House — coliving in Dallas for women
      </h1>

      <p className="eyebrow relative z-[3] mt-[22px] tracking-[0.28em] text-pink">
        Coliving for Women in Dallas
      </p>

      <StatusDot tone="pink" className="relative z-[3] mt-7">
        Now accepting applications
      </StatusDot>

      <Button
        href="https://form.typeform.com/to/J9BtSauc"
        external
        variant="primary"
        className="relative z-[3] mt-9"
      >
        Apply Now
      </Button>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 z-[3] -translate-x-1/2 animate-bounce text-cream/30"
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
