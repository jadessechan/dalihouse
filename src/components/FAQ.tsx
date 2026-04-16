"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Where can I park?",
    a: "The home is located in a quiet cul-de-sac with minimal street traffic. Guests may park directly in front, just a few steps from the mailbox.",
  },
  {
    q: "Where is Dali House located?",
    a: "Dali House is located near the border of Carrollton and Plano. For privacy and security, the exact address is shared after the Stage 1 application.",
  },
  {
    q: "Are pets allowed?",
    a: "Pets are not permitted. The home currently has two friendly resident cats, Pookie and Spooky.",
  },
  {
    q: "Do you offer prorated rates?",
    a: "If you move in after the first of the month, a prorated rate of $30/day applies. For move-outs extending beyond the month, a flat rate of $45/day applies.",
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
          FAQ
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
