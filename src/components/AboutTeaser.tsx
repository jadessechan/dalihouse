import Image from "next/image";
import EyebrowPill from "@/components/ui/EyebrowPill";
import Button from "@/components/ui/Button";

export default function AboutTeaser() {
  return (
    <section className="bg-cream-2 px-8 py-24">
      <div className="mx-auto grid max-w-[980px] items-center gap-10 md:grid-cols-[300px_1fr] md:gap-16">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/dali-house-host.jpeg"
            alt="Jadesse, host of Dali House"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover object-[center_20%]"
          />
        </div>

        <div>
          <EyebrowPill tone="green" className="mb-5 block">
            Your host
          </EyebrowPill>
          <h2 className="font-serif text-[clamp(30px,4vw,44px)] leading-[1.1] font-medium tracking-[-0.02em] text-ink">
            Hi, I&rsquo;m Jadesse.
          </h2>
          <p className="mt-5 max-w-[460px] text-[17px] leading-[1.7] text-ink/75">
            I grew up in Dallas, and I know how long it can take to feel at home
            here. I created Dali House to give women a soft landing &mdash; so
            you can skip the friction of moving and focus on building your life.
          </p>
          <Button href="/about" variant="ghost" className="mt-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
