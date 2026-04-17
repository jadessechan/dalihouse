"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the parking situation?",
    a: "The home is located in a quiet cul-de-sac with minimal street traffic. Guests may park directly in front of the home, just a few steps from the mailbox.",
  },
  {
    q: "Any prorated rates?",
    a: "Yes. If your move-in date falls after the first of the month, a prorated rate of $30/day will apply. For move-outs extending beyond the end of the month, a flat rate of $45/day is charged.",
  },
  {
    q: "Are pets allowed?",
    a: "Pets are not permitted. The home currently has two friendly resident cats.",
  },
  {
    q: "Where is Dali House located?",
    a: "Dali House is located near the border of Carrollton and Plano. For privacy and security, the exact address is shared after completion of Stage 1 of the application process.",
  },
  {
    q: "Are overnight guests allowed?",
    a: "No, but exceptions can be made for friends or family at the discretion of the host and other tenant (if present).",
  },
  {
    q: "What makes Dali House different from a typical roommate situation?",
    a: "Dali House is designed as an intentional living experience\u2014not just a shared home. Rather than a random mix of roommates, each resident is thoughtfully selected to create a respectful, aligned, and supportive environment. The experience is also tailored to the individuals who live here. Some seasons may include shared dinners or outings, while others remain quiet and restorative, depending on the needs of the home. At its core, Dali House offers the balance of community and personal space\u2014so you can feel both connected and fully at ease.",
  },
  {
    q: "Who is the ideal resident for Dali House?",
    a: "Dali House is designed for young professional women who work in-office or hybrid roles and value a healthy work-life balance. She values meaningful connection, respects shared living, and is open to building genuine relationships within the home.",
  },
  {
    q: "When should I apply?",
    a: "Applications are accepted on a rolling basis, first come first serve.",
  },
  {
    q: "How is rent collected?",
    a: "Rent is due by the first of the month via Zelle. Late fees apply.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brown/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-serif text-lg font-semibold text-brown-deep">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-5 w-5 shrink-0 text-brown transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-brown/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-serif text-4xl font-semibold text-brown-deep md:text-5xl">
          FAQs
        </h2>
        <div className="mt-12">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
