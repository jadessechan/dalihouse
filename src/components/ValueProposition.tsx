export default function ValueProposition() {
  return (
    <section className="bg-cream px-8 py-[112px] md:py-[112px]">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-5 text-[10px] font-medium tracking-[0.22em] uppercase text-tan">
            About Dali House
          </p>
          <h2 className="font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.18] font-medium text-brown-deep">
            The <em className="font-serif italic text-tan">relocation oasis</em>
            <br />
            for women
            <br />
            in Dallas.
          </h2>
        </div>

        <div className="pt-2">
          <p className="mb-5 text-base leading-[1.8] font-light text-brown">
            A co-living space in Dallas for young female professionals who value
            comfort and intentional living. Whether you&rsquo;re relocating or
            building your career, Dali House offers a refined and welcoming
            environment to live and grow.
          </p>
          <p className="text-base leading-[1.8] font-light text-brown">
            We handle the friction of moving &mdash; furnished rooms, flexible
            leases, utilities included &mdash; so you can pour your energy into
            what actually matters.
          </p>
          <blockquote className="mt-9 border-l-2 border-tan pl-[22px] font-serif text-[21px] leading-[1.6] italic text-brown-deep">
            &ldquo;Not just a place to live &mdash; but a space to land,
            connect, and grow.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
