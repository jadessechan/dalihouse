// Past guests of Dali House, shown on /alumni and in the home-page teaser.
//
// PRIVACY: only publish a profile once the alum has explicitly opted in to
// having her name + LinkedIn shown. Replace the placeholders below with real,
// consented profiles. `photo` is optional — omit it to render a monogram.

import type { SchoolKey } from "@/components/ui/SchoolCrest";

export interface AlumniProfile {
  name: string;
  /** When they stayed, e.g. "2024 · 8 months" */
  stayed: string;
  /** A short line on why they stayed / what the stay was for. */
  blurb: string;
  /** Full LinkedIn profile URL. */
  linkedin: string;
  /** Optional role / title shown under the name. */
  role?: string;
  /** Optional headshot in /public. Falls back to a monogram. */
  photo?: string;
  /** University attended, shown with a small crest. */
  university?: string;
  /** Crest key for the school icon (see SchoolCrest). */
  school?: SchoolKey;
}

export const alumni: AlumniProfile[] = [
  {
    name: "Lexi Sederopoulos",
    role: "Incoming J.D. Candidate, UF Law",
    university: "University of Florida",
    school: "uf",
    stayed: "Summer 2026",
    blurb:
      "A recent University of Florida grad heading to UF Levin College of Law this fall, Lexi spent her summer interning in Dallas and wanted a calm, focused place to land between graduation and law school.",
    linkedin: "https://www.linkedin.com/in/lexisederopoulos/",
  },
  {
    name: "Valerie Rodriguez",
    role: "Procurement Intern, PepsiCo",
    university: "Texas A&M University",
    school: "tamu",
    stayed: "Summer 2026",
    blurb:
      "A Texas A&M student spending her summer in Dallas as a procurement intern at PepsiCo, Valerie wanted a welcoming, low-stress home base close to her internship while she's away from home.",
    linkedin: "https://www.linkedin.com/in/valrdz/",
  },
];
