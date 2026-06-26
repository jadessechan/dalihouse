import Link from "next/link";
import EyebrowPill from "@/components/ui/EyebrowPill";
import PricingCard from "@/components/ui/PricingCard";

export default function TheSpaceTeaser() {
  return (
    <section className="bg-cream px-8 py-24">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <EyebrowPill tone="green" className="mb-5 block">
            Pricing &amp; amenities
          </EyebrowPill>
          <h2 className="font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.08] font-medium tracking-[-0.02em] text-ink">
            A furnished room,
            <br />
            everything included.
          </h2>
          <p className="mt-5 max-w-[440px] text-[17px] leading-[1.7] text-ink/75">
            Private bedrooms in a thoughtfully designed home near Carrollton /
            Plano. Utilities, cleaning, and shared essentials handled, so you
            can simply move in.
          </p>
          <Link
            href="/the-space"
            className="eyebrow mt-8 inline-flex items-center gap-1.5 text-pink-deep transition-colors hover:text-green"
          >
            See rooms &amp; pricing &rarr;
          </Link>
        </div>

        <PricingCard
          amount={900}
          label="Per month"
          features={[
            "Utilities included",
            "Furnished private bedroom",
            "Monthly cleaning",
            "Fully stocked essentials",
            "Safe, central location",
          ]}
          ctaHref="https://form.typeform.com/to/J9BtSauc"
          note="Move-in & move-out prorated daily."
        />
      </div>
    </section>
  );
}
