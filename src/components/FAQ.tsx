"use client";

import { useState } from "react";
import { faqs } from "./faqs";

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
