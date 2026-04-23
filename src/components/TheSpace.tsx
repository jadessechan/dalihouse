import Image from "next/image";

const highlights = [
  "Utilities included",
  "Fully stocked essentials",
  "Monthly cleaning",
  "Safe & central location",
  "Curated interiors",
  "Private bedroom, shared bath",
];

const amenities = [
  "Full size bed",
  "Work station",
  "TV",
  "Full-length mirror",
  "Closet space",
  "Original artwork",
];

const rooms = [
  {
    name: "Bedroom 1",
    photo: "/room-bedroom1.jpeg",
    description:
      "Full size bed, work station, TV, full-length mirror, closet space, original artwork",
  },
  {
    name: "Bedroom 2",
    photo: "/room-bedroom2.png",
    description:
      "Full size bed, work station, TV, full-length mirror, closet space, original artwork",
  },
  {
    name: "Shared Bathroom",
    photo: "/room-bathroom.png",
    description:
      "Rain showerhead, hand-held showerhead, bidet, marble detailing",
  },
  {
    name: "Kitchen",
    photo: "/room-kitchen.png",
    description:
      "Fully stocked shared essentials for everyday cooking and meal prep",
  },
  {
    name: "Living Room",
    photo: "/room-living.jpeg",
    description:
      "Vintage pieces and original artwork in a warm, modern setting",
  },
  {
    name: "Laundry",
    photo: "/room-laundry.jpeg",
    description: "In-home washer and dryer for your convenience",
  },
];

function CheckIcon({ className = "text-[#6bcb77]" }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`shrink-0 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function TheSpace() {
  return (
    <section id="the-space" className="bg-charcoal-mid px-8 py-24">
      <p className="mb-3.5 text-center text-[10px] font-medium tracking-[0.22em] uppercase text-tan">
        Pricing & amenities
      </p>
      <h2 className="text-center font-serif text-[clamp(30px,4vw,44px)] leading-[1.2] font-medium text-cream">
        The Space
      </h2>

      <div className="mt-7 text-center">
        <span className="font-serif text-[clamp(52px,8vw,72px)] leading-none font-bold text-tan">
          $900
        </span>
        <span className="ml-1.5 text-[15px] text-cream/45">/month</span>
      </div>

      <div className="mx-auto mt-7 flex max-w-[720px] flex-wrap justify-center gap-2.5">
        {highlights.map((h) => (
          <span
            key={h}
            className="flex items-center gap-[7px] rounded-full border border-cream/15 px-4 py-2 text-[13px] text-cream/75"
          >
            <CheckIcon />
            {h}
          </span>
        ))}
      </div>

      <p className="mt-[18px] text-center text-[13px] font-light text-cream/40">
        Near Carrollton/Plano &middot; &plusmn;20 min from downtown Dallas,
        major suburbs &amp; DFW airport
      </p>

      <div className="mx-auto mt-[52px] max-w-[820px] rounded-[18px] border border-cream/10 bg-cream/[0.04] px-9 py-8">
        <p className="mb-[18px] text-center text-[10px] font-medium tracking-[0.2em] uppercase text-tan">
          Every room includes
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {amenities.map((a) => (
            <span
              key={a}
              className="flex items-center gap-2 rounded-full border border-cream/20 bg-white/[0.08] px-4 py-2 text-[13px] text-cream/80"
            >
              <CheckIcon className="text-cream/70" />
              {a}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs leading-[1.6] italic text-cream/40">
          Shared bathroom: rain showerhead, hand-held showerhead, bidet, and
          marble detailing.
        </p>
      </div>

      <div className="mx-auto mt-[52px] grid max-w-[1080px] gap-5 md:grid-cols-2">
        {rooms.map((r) => (
          <div
            key={r.name}
            className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] transition-colors hover:border-cream/20"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={r.photo}
                alt={r.name}
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover"
              />
            </div>
            <div className="px-[22px] pt-5 pb-6">
              <h4 className="mb-1.5 font-serif text-base font-medium text-tan">
                {r.name}
              </h4>
              <p className="text-[13px] leading-[1.65] font-light text-cream/55">
                {r.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-9 text-center text-xs italic text-cream/25">
        Vintage pieces &middot; original artwork &middot; modern living
      </p>
    </section>
  );
}
