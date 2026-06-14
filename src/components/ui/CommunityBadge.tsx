/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to the Dali House "Editorial Forest" system. Flat pill, mono label. */

export default function CommunityBadge({
  children,
  tone = "cream",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "cream" | "green";
  className?: string;
}) {
  const cls =
    tone === "green"
      ? "border-green/30 text-green"
      : "border-cream/30 text-cream/85";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${cls} px-4 py-1.5 eyebrow ${className}`}
    >
      {children}
    </span>
  );
}
