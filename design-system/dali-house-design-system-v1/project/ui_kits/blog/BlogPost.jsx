/* BlogPost.jsx — the editorial article template.
   Composes the magazine-style cover and body fragments from ArticleParts.jsx. */

import { Bloom, CategoryLabel, SectionHead, Callout, PullQuote, InfoCard } from "./ArticleParts";

function ArticleCover({ section, issue, title, titleItalic, subtitle, photo, page, byline, lede }) {
  return (
    <section className="cover">
      <div className="cover-photo" style={{ backgroundImage: `url(${photo})` }}>
        <span className="section-label">{section}</span>
        <span className="issue">{issue}</span>

        <Bloom size={22} className="floral f1" />
        <Bloom size={18} className="floral f2" />
        <Bloom size={14} className="floral f3" color="var(--color-crimson-warm)" />

        <div className="headline-wrap">
          <h1>
            {title}{titleItalic && <> <em>{titleItalic}</em></>}
          </h1>
          <div className="subtitle-wrap">
            <span className="subtitle">{subtitle}</span>
          </div>
        </div>
        <div className="page-num right">{page}</div>
      </div>

      <div className="band">
        <div className="band-inner">
          <p className="byline">{byline}</p>
          <p className="lede">{lede}</p>
        </div>
      </div>
    </section>
  );
}

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
  </svg>
);
const IGIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><polyline points="12,7 12,12 15,14" />
  </svg>
);

export default function BlogPost() {
  return (
    <main>
      <ArticleCover
        section="Journal · Community"
        issue="Issue No. 04 · Spring"
        title="Why community"
        titleItalic="matters"
        subtitle="When you're starting over in a new city."
        photo="/assets/dali-house-bg.jpg"
        page="04"
        byline={<><span style={{ color: "var(--color-brown)" }}>Words by</span> <span style={{ color: "var(--color-crimson)", fontWeight: 600 }}>Jadesse</span> &nbsp;·&nbsp; <span style={{ color: "var(--color-brown)" }}>Photography by</span> <span style={{ color: "var(--color-crimson)", fontWeight: 600 }}>Dali House</span></>}
        lede="You got the job. You signed the lease. You drove (or flew) to a brand new city. Here's why having a built-in community makes all the difference when you're starting fresh."
      />

      <article className="article">
        <div className="spread">
          <Callout>
            <strong>The hardest part of relocating</strong> isn't logistics. It's the social gap.
            Most people underestimate how long it takes to build meaningful friendships in a new
            city — the average is six months to a year before you feel like you truly belong.
          </Callout>
          <div>
            <div className="photo-card">
              <img src="/assets/room-living.jpg" alt="The living room at Dali House" />
            </div>
            <p className="photo-caption">
              <strong>The Living Room</strong>
              Vintage pieces and original artwork — the soft places where weeks turn into a life.
            </p>
          </div>
        </div>

        <SectionHead label="Reality">The loneliness curve is real.</SectionHead>
        <div className="columns">
          <p>Research consistently shows that the hardest part of relocating isn't logistics — it's the social gap…</p>
          <p>That's a long time to eat dinner alone.</p>
        </div>

        <PullQuote attribution="— Jadesse, Dali House">
          Community isn't a feature of where you live. It's the infrastructure your new life is built on.
        </PullQuote>

        <SectionHead label="The Difference" labelColor="tan" headingColor="brown">
          The coliving difference.
        </SectionHead>
        <div className="single-col">
          <p>Intentional coliving flips the script…</p>
        </div>

        <InfoCard
          name="Dali House"
          location="Dallas, TX"
          items={[
            { icon: <PinIcon />,   text: "Near Carrollton / Plano · address shared after Stage 1" },
            { icon: <MailIcon />,  text: "dalihouse.dtx@gmail.com" },
            { icon: <IGIcon />,    text: "instagram.com / @dalihouse.dtx" },
            { icon: <ClockIcon />, text: "Applications accepted on a rolling basis" },
          ]}
        />
      </article>
    </main>
  );
}
