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
    a: "Dali House is designed as an intentional living experience — not just a shared home. Each resident is thoughtfully selected to create a respectful, aligned, and supportive environment, offering the balance of community and personal space.",
  },
  {
    q: "Who is the ideal resident?",
    a: "Young professional women who work in-office or hybrid roles and value a healthy work-life balance. She values meaningful connection, respects shared living, and is open to building genuine relationships within the home.",
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
    <div className="border-b border-[rgba(124,92,62,0.11)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-base leading-[1.45] font-medium text-brown-deep">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-[17px] w-[17px] shrink-0 text-brown transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-[380ms] ease-out ${
          open ? "grid-rows-[1fr] pb-[22px]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-[1.78] font-light text-brown">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream px-8 pt-14 pb-24">
      <h2 className="text-center font-serif text-[clamp(30px,4vw,44px)] leading-[1.2] font-medium text-brown-deep">
        FAQs
      </h2>
      <div className="mx-auto mt-12 max-w-[660px]">
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
