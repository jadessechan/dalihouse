/* TheSpace.jsx — pricing + amenities chips + room grid on charcoal-mid.
   Source: jadessechan/dalihouse@master src/components/TheSpace.tsx */

const highlights = [
  "Utilities included", "Fully stocked essentials", "Monthly cleaning",
  "Safe & central location", "Curated interiors", "Private bedroom, shared bath",
];

const amenities = [
  "Full size bed", "Work station", "TV",
  "Full-length mirror", "Closet space", "Original artwork",
];

const rooms = [
  { name: "Bedroom 1",        photo: "/assets/room-bedroom1.jpg", description: "Full size bed, work station, TV, full-length mirror, closet space, original artwork" },
  { name: "Bedroom 2",        photo: "/assets/room-bedroom2.jpg",  description: "Full size bed, work station, TV, full-length mirror, closet space, original artwork" },
  { name: "Shared Bathroom",  photo: "/assets/room-bathroom.jpg",  description: "Rain showerhead, hand-held showerhead, bidet, marble detailing" },
  { name: "Kitchen",          photo: "/assets/room-kitchen.jpg",   description: "Fully stocked shared essentials for everyday cooking and meal prep" },
  { name: "Living Room",      photo: "/assets/room-living.jpg",   description: "Vintage pieces and original artwork in a warm, modern setting" },
  { name: "Laundry",          photo: "/assets/room-laundry.jpg",  description: "In-home washer and dryer for your convenience" },
];

function Check({ fill = "#6bcb77" }) {
  return (
    <svg className="check" width="13" height="13" viewBox="0 0 20 20" fill={fill}>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}

export default function TheSpace() {
  return (
    <section id="the-space" className="section space">
      <p className="eyebrow-c">Pricing &amp; amenities</p>
      <h2 className="title">The Space</h2>

      <div className="price-wrap">
        <span className="price">$900</span>
        <span className="per">/month</span>
      </div>

      <div className="hl-row">
        {highlights.map((h) => (
          <span key={h} className="chip hl"><Check />{h}</span>
        ))}
      </div>

      <p className="loc">Near Carrollton/Plano · ±20 min from downtown Dallas, major suburbs &amp; DFW airport</p>

      <div className="am-panel">
        <p className="label">Every room includes</p>
        <div className="am-row">
          {amenities.map((a) => (
            <span key={a} className="chip am"><Check fill="rgba(250,244,232,0.70)" />{a}</span>
          ))}
        </div>
        <p className="note">Shared bathroom: rain showerhead, hand-held showerhead, bidet, and marble detailing.</p>
      </div>

      <div className="container rooms">
        {rooms.map((r) => (
          <div key={r.name} className="room">
            <div className="photo" style={{ backgroundImage: `url(${r.photo})` }} />
            <div className="body">
              <h4>{r.name}</h4>
              <p>{r.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="closing">Vintage pieces · original artwork · modern living</p>
    </section>
  );
}
