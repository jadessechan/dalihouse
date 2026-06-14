/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to Dali House. Vertical slot-roll: the active word slides into view
   while the previous one rolls out. Styling lives in globals.css (.dh-roll*). */
"use client";

import { useEffect, useState, type CSSProperties } from "react";

export default function WordRoll({
  words,
  intervalMs = 2200,
  transitionMs = 520,
  direction = "up",
  className = "",
}: {
  words: string[];
  intervalMs?: number;
  transitionMs?: number;
  direction?: "up" | "down";
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const t = setInterval(
      () => setI((j) => (j + 1) % words.length),
      intervalMs,
    );
    return () => clearInterval(t);
  }, [intervalMs, words.length]);

  const prev = (i - 1 + words.length) % words.length;
  const style = { ["--dh-roll-ms"]: `${transitionMs}ms` } as CSSProperties;

  return (
    <span
      className={`dh-roll ${direction === "down" ? "dh-roll--down" : ""} ${className}`}
      style={style}
    >
      {/* Sizer keeps the container width matched to the active word. */}
      <span className="dh-roll__sizer" aria-hidden="true">
        {words[i]}
      </span>
      {words.map((w, idx) => (
        <span
          key={idx}
          className={`dh-roll__word ${idx === i ? "dh-roll__word--active" : ""} ${
            idx === prev && i !== prev ? "dh-roll__word--past" : ""
          }`}
          aria-hidden={idx === i ? undefined : "true"}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
