export default function MeetYourHost() {
  return (
    <section
      id="meet-your-host"
      className="bg-charcoal px-6 py-24 text-cream"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">
          Meet Your Host
        </h2>

        {/* Avatar placeholder */}
        <div className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full bg-brown text-4xl">
          J
        </div>

        <h3 className="mt-6 font-serif text-2xl font-semibold text-tan">
          Hi, I&apos;m Jadesse
        </h3>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/80">
          <p>
            Even though I grew up in Dallas, it took me years after moving back
            to truly feel a sense of belonging. That&apos;s why I created Dali
            House.
          </p>
          <p>
            Dali House is designed to give you a soft landing&mdash;so you can
            skip the friction of moving and focus your energy on what actually
            matters: building community, exploring the city, and creating your
            dream life.
          </p>
        </div>

        {/* Cats */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-cream/15 px-6 py-3 text-sm text-cream/60">
          <span className="text-xl">🐱🐱</span>
          <span>Permanent residents: Pookie &amp; Spooky</span>
        </div>
      </div>
    </section>
  );
}
