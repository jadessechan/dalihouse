export default function MeetYourHost() {
  return (
    <section
      id="meet-your-host"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-4xl font-semibold text-brown-deep md:text-5xl">
          Meet Your Host
        </h2>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          {/* Image placeholder — will be replaced with real photo */}
          <div className="flex items-center justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-charcoal font-serif text-6xl text-cream/60">
              J
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-tan">
              Hi, I&apos;m Jadesse
            </h3>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brown/80">
              <p>
                Even though I grew up in Dallas, it took me years after moving
                back to truly feel a sense of belonging. I know firsthand that
                finding your people and your rhythm takes time, and it&apos;s
                hard to do that when you&apos;re also dealing with the stress of
                getting settled.
              </p>
              <p>
                That&apos;s why I created Dali House. Dali House is designed to
                give you a soft landing&mdash;so you can skip the friction of
                moving and focus your energy on what actually matters: building
                community, exploring the city, and creating your dream life.
              </p>
            </div>

            {/* Cats */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-brown/15 px-6 py-3 text-sm text-brown/60">
              <span className="text-xl">🐱🐱</span>
              <span>Permanent residents: Pookie &amp; Spooky</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
