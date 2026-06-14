/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. A soft pulsing dot with
   a mono label — e.g. "Now accepting applications". */

type Tone = "pink" | "green" | "cream";

const dot: Record<Tone, string> = {
  pink: "bg-pink",
  green: "bg-green-lite",
  cream: "bg-cream",
};

const text: Record<Tone, string> = {
  pink: "text-pink",
  green: "text-green",
  cream: "text-cream/80",
};

export default function StatusDot({
  children,
  tone = "pink",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot[tone]} opacity-60`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dot[tone]}`} />
      </span>
      <span className={`eyebrow ${text[tone]}`}>{children}</span>
    </span>
  );
}
