// Past guests of Dali House, shown on /alumni and in the home-page teaser.
//
// PRIVACY: only publish a profile once the alum has explicitly opted in to
// having her name + LinkedIn shown. Replace the placeholders below with real,
// consented profiles. `photo` is optional — omit it to render a monogram.

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
}

export const alumni: AlumniProfile[] = [
  {
    name: "Placeholder Name",
    role: "Product Designer",
    stayed: "2024 · 8 months",
    blurb:
      "Relocated from the East Coast for a new role and wanted a calm place to land while she found her footing in Dallas.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Placeholder Name",
    role: "Nurse",
    stayed: "2023 · 1 year",
    blurb:
      "Moved to Dallas for a hospital residency and stayed through her first year while building a community here.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Placeholder Name",
    role: "Software Engineer",
    stayed: "2024 · 6 months",
    blurb:
      "Between leases and starting a new job, she needed a furnished, drama-free home with other focused women.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Placeholder Name",
    role: "Grad Student",
    stayed: "2023 · 10 months",
    blurb:
      "Came to Dallas for school and wanted somewhere intentional rather than a random roommate situation.",
    linkedin: "https://www.linkedin.com/",
  },
];
