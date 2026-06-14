import Image from "next/image";
import EyebrowPill from "@/components/ui/EyebrowPill";
import { alumni, type AlumniProfile } from "@/data/alumni";

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
    </svg>
  );
}

function monogram(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function AlumniCard({ profile }: { profile: AlumniProfile }) {
  return (
    <div className="flex flex-col rounded-2xl border-2 border-pink bg-cream-2 p-6">
      <div className="flex items-center gap-4">
        {profile.photo ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green font-serif text-lg font-medium text-cream"
            aria-hidden
          >
            {monogram(profile.name)}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-serif text-[19px] font-medium leading-tight tracking-[-0.01em] text-ink">
            {profile.name}
          </p>
          {profile.role && (
            <p className="text-[13px] text-ink/60">{profile.role}</p>
          )}
        </div>
      </div>

      <p className="eyebrow mt-4 text-green">{profile.stayed}</p>
      <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-ink/75">
        {profile.blurb}
      </p>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow mt-5 inline-flex items-center gap-2 text-pink-deep transition-colors hover:text-green"
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </a>
    </div>
  );
}

export default function Alumni({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-cream px-8 py-24">
      {heading && (
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <EyebrowPill tone="green" className="mb-4 block">
            Alumni
          </EyebrowPill>
          <h2 className="font-serif text-[clamp(30px,4vw,46px)] leading-[1.08] font-medium tracking-[-0.02em] text-ink">
            Women who&rsquo;ve stayed at Dali House
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.7] text-ink/75">
            Dali House has been a soft landing for women relocating, rebuilding,
            and starting new chapters in Dallas. Here are a few of them.
          </p>
        </div>
      )}

      <div className="mx-auto grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {alumni.map((profile, i) => (
          <AlumniCard key={`${profile.name}-${i}`} profile={profile} />
        ))}
      </div>
    </section>
  );
}
