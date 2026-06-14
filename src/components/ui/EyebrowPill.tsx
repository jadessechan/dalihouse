/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. */

type Tone = "pink" | "green" | "cream";

const toneClass: Record<Tone, string> = {
  pink: "text-pink",
  green: "text-green",
  cream: "text-cream/70",
};

export default function EyebrowPill({
  children,
  tone = "green",
  pill = false,
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  pill?: boolean;
  className?: string;
}) {
  const base = `eyebrow ${toneClass[tone]}`;
  if (!pill) {
    return <span className={`${base} ${className}`}>{children}</span>;
  }
  const border =
    tone === "cream" ? "border-cream/30" : tone === "pink" ? "border-pink" : "border-green/40";
  return (
    <span
      className={`inline-flex items-center rounded-full border ${border} px-3.5 py-1.5 ${base} ${className}`}
    >
      {children}
    </span>
  );
}
