const amenities = [
  "Full size bed",
  "Work station",
  "TV",
  "Full-length mirror",
  "Closet space",
  "Original artwork",
];

export default function GoodHands() {
  return (
    <section className="bg-tan px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">
          You&apos;re in good hands
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Each room has a full size bed, work station, TV, full-length mirror,
          closet space, and original artwork.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {amenities.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium backdrop-blur-sm"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-cream-light"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <p className="mt-10 text-sm italic text-white/70">
          The bathroom is shared between both guest bedrooms. It includes rain
          showerhead, hand-held showerhead, bidet, and marble detailing.
        </p>
      </div>
    </section>
  );
}
