/* ValueProposition.jsx + SoftLanding.jsx — two text-led sections.
   Source: jadessechan/dalihouse@master src/components/{ValueProposition,SoftLanding}.tsx */

export function ValueProposition() {
  return (
    <section className="section lg value">
      <div className="container value-grid">
        <div>
          <p className="eyebrow-c" style={{ textAlign: "left", color: "var(--accent)", marginBottom: 20 }}>
            About Dali House
          </p>
          <h2>Your <em>relocation oasis</em> in Dallas.</h2>
        </div>
        <div className="copy">
          <p>
            A co-living space for young female professionals who value comfort and intentional living.
            Whether you're relocating or building your career, Dali House offers a refined, welcoming
            environment to land and grow.
          </p>
          <p>
            We handle the friction of moving — furnished rooms, flexible leases, utilities included —
            so you can pour your energy into what actually matters.
          </p>
          <blockquote>"Not just a place to live — but a space to land, connect, and grow."</blockquote>
        </div>
      </div>
    </section>
  );
}

export function SoftLanding() {
  return (
    <section className="soft">
      <div className="soft-grid">
        <div>
          <h2>Start your soft<br />landing in Dallas.</h2>
          <p>
            Move-in ready, thoughtfully designed, and built for women navigating a new city,
            new role, or whatever's next.
          </p>
        </div>
        <div className="cta-pos">
          <a href="https://form.typeform.com/to/J9BtSauc" target="_blank" rel="noopener noreferrer" className="btn-apply">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
