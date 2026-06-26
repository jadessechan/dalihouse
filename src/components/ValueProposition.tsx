import EyebrowPill from "@/components/ui/EyebrowPill";
import WordRoll from "@/components/ui/WordRoll";

export default function ValueProposition() {
  return (
    <section className="bg-cream px-8 py-[112px] md:py-[112px]">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <EyebrowPill tone="green" className="mb-5 block">
            About Dali House
          </EyebrowPill>
          <h2 className="font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.12] font-medium tracking-[-0.02em] text-ink">
            Your{" "}
            <em className="font-serif italic text-pink">
              <WordRoll words={["relocation oasis", "soft landing", "fresh start"]} />
            </em>{" "}
            in Dallas.
          </h2>
        </div>

        <div className="pt-2">
          <p className="mb-5 text-[17px] leading-[1.7] text-ink/75">
            A co-living space for young female professionals who value comfort
            and intentional living. Whether you&rsquo;re relocating or building
            your career, Dali House offers a refined, welcoming environment to
            land and grow.
          </p>
          <p className="text-[17px] leading-[1.7] text-ink/75">
            We handle the friction of moving (furnished rooms, flexible leases,
            utilities included) so you can pour your energy into what actually
            matters.
          </p>
          <blockquote className="mt-9 border-l-2 border-pink pl-[22px] font-serif text-[21px] leading-[1.6] italic text-green-deep">
            &ldquo;Not just a place to live, but a space to land, connect, and
            grow.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
