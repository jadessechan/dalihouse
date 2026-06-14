/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. A quiet scrolling strip
   of mono labels (e.g. neighborhoods served) on a green ground. */

export default function LogoMarquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y border-cream/15 bg-green py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((item, idx) => (
          <span key={idx} className="flex items-center">
            <span className="eyebrow whitespace-nowrap px-7 text-cream/75">{item}</span>
            <span className="text-pink/70">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
