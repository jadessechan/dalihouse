/* MeetYourHost.jsx — founder portrait + cat photo + first-person intro + pull-quote.
   Source: jadessechan/dalihouse@master src/components/MeetYourHost.tsx */

export default function MeetYourHost() {
  return (
    <section id="meet-your-host" className="host">
      <p className="eyebrow-c">Your host</p>
      <div className="host-grid">
        <div>
          <div className="host-photo" />
          <img className="host-cats" src="/assets/dali-house-cats.png" alt="Pookie and Spooky" />
          <p className="host-cats-caption">Permanent residents: Pookie &amp; Spooky 🐱</p>
        </div>
        <div className="host-content">
          <p className="greet">Hi, I'm Jadesse</p>
          <p>
            Even though I grew up in Dallas, it took me years after moving back to truly feel a sense of belonging.
            I know firsthand that finding your people and your rhythm takes time — and it's hard to do that when
            you're also dealing with the stress of getting settled.
          </p>
          <p>
            That's why I created Dali House. Dali House is designed to give you a soft landing — so you can skip
            the friction of moving and focus your energy on what actually matters: building community, exploring
            the city, and creating your dream life.
          </p>
          <blockquote>
            "Home isn't just about where you live — it's about the people and the life you build."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
