const rooms = [
  { name: "Bedroom 1", description: "Full size bed, work station, TV, full-length mirror, closet space, original artwork" },
  { name: "Bedroom 2", description: "Full size bed, work station, TV, full-length mirror, closet space, original artwork" },
  { name: "Shared Bathroom", description: "Rain showerhead, hand-held showerhead, bidet, marble detailing" },
  { name: "Kitchen", description: "Fully stocked shared essentials for everyday cooking and meal prep" },
  { name: "Living Room", description: "Vintage pieces and original artwork in a warm, modern setting" },
  { name: "Laundry", description: "In-home washer and dryer for your convenience" },
];

const highlights = [
  "Utilities included",
  "Fully stocked shared essentials",
  "Monthly cleaning included",
  "Safe & central location",
  "Curated interiors",
  "Private bedroom, shared bath",
];

export default function TheSpace() {
  return (
    <section id="the-space" className="bg-brown-deep px-6 py-24 text-cream">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-4xl font-semibold md:text-5xl">
          The Space
        </h2>

        {/* Price */}
        <div className="mt-10 text-center">
          <span className="font-serif text-5xl font-bold text-tan md:text-6xl">
            $900
          </span>
          <span className="ml-2 text-lg text-cream/70">/month</span>
        </div>

        {/* Highlights */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {highlights.map((h) => (
            <span
              key={h}
              className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {h}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-cream/70">
          Located in a quiet neighborhood, +/- 20 min from major suburbs,
          downtown, and DFW airport.
        </p>

        {/* Rooms grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <div
              key={r.name}
              className="rounded-xl border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
            >
              <h4 className="font-serif text-lg font-semibold text-tan">
                {r.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm italic text-cream/50">
          Vintage pieces, original artwork, modern living
        </p>
      </div>
    </section>
  );
}
