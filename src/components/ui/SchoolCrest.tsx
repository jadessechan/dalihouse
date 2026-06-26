/* Custom, non-infringing university marks for the alumni cards: a small
   monogram shield in each school's primary colors. These are original crests,
   not official university logos (which are trademarked). Add a school by
   extending SchoolKey + CRESTS. */

export type SchoolKey = "uf" | "tamu";

interface Crest {
  initials: string;
  shield: string; // primary color
  ink: string; // monogram color
  label: string;
  /** Override monogram size for wider initials (default 8.5). */
  fontSize?: number;
}

const CRESTS: Record<SchoolKey, Crest> = {
  uf: {
    initials: "UF",
    shield: "#0021A5", // UF blue
    ink: "#FA4616", // UF orange
    label: "University of Florida",
  },
  tamu: {
    initials: "A&M",
    shield: "#500000", // Aggie maroon
    ink: "#FFFFFF",
    label: "Texas A&M University",
    fontSize: 6.5,
  },
};

export default function SchoolCrest({
  school,
  size = 18,
  className = "",
}: {
  school: SchoolKey;
  size?: number;
  className?: string;
}) {
  const crest = CRESTS[school];
  if (!crest) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={crest.label}
    >
      <path
        d="M12 1.5l9 2.6v6.4c0 5.7-3.8 10-9 12-5.2-2-9-6.3-9-12V4.1l9-2.6z"
        fill={crest.shield}
      />
      <text
        x="12"
        y="13.4"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={crest.fontSize ?? 8.5}
        fontWeight="700"
        fill={crest.ink}
      >
        {crest.initials}
      </text>
    </svg>
  );
}
