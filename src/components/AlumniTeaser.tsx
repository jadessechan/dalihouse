import Link from "next/link";
import EyebrowPill from "@/components/ui/EyebrowPill";
import { AlumniCard } from "@/components/Alumni";
import { alumni } from "@/data/alumni";

export default function AlumniTeaser() {
  const featured = alumni.slice(0, 3);

  return (
    <section className="bg-cream px-8 py-24">
      <div className="mx-auto mb-12 max-w-[680px] text-center">
        <EyebrowPill tone="green" className="mb-4 block">
          Alumni
        </EyebrowPill>
        <h2 className="font-serif text-[clamp(30px,4vw,46px)] leading-[1.08] font-medium tracking-[-0.02em] text-ink">
          Women who&rsquo;ve stayed here
        </h2>
        <p className="mx-auto mt-4 max-w-[500px] text-[16px] leading-[1.7] text-ink/75">
          Real women who found a soft landing at Dali House while they got
          settled in Dallas.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((profile, i) => (
          <AlumniCard key={`${profile.name}-${i}`} profile={profile} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/alumni"
          className="eyebrow inline-flex items-center gap-1.5 text-pink-deep transition-colors hover:text-green"
        >
          Meet the alumni &rarr;
        </Link>
      </div>
    </section>
  );
}
