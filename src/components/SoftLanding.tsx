import Button from "@/components/ui/Button";

export default function SoftLanding() {
  return (
    <section
      className="relative overflow-hidden bg-green-deep bg-cover bg-center px-8 py-[104px]"
      style={{ backgroundImage: "url(/dali-house-bg.png)" }}
    >
      <div aria-hidden className="absolute inset-0 bg-[rgba(20,30,18,0.74)]" />

      <div className="relative mx-auto grid max-w-[1080px] items-center gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-serif text-[clamp(34px,5vw,56px)] leading-[1.08] font-medium tracking-[-0.02em] text-cream">
            Start your soft
            <br />
            landing in Dallas.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-cream/70">
            Move-in ready, thoughtfully designed, and built for women navigating
            a new city, new role, or whatever&rsquo;s next.
          </p>
        </div>
        <div className="flex items-center md:justify-center">
          <Button
            href="https://form.typeform.com/to/J9BtSauc"
            external
            variant="primary"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
