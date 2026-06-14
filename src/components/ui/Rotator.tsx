/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to Dali House. Typewriter rotator: types each word, holds, deletes,
   advances, repeats, with a blinking caret. Pass `renderWord` for a custom
   treatment of the in-progress word (e.g. an underline). Respects
   prefers-reduced-motion by showing the first word statically. */
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useTypewriter, type UseTypewriterOptions } from "@/hooks/useTypewriter";

type Props = UseTypewriterOptions & {
  /** Hide the blinking caret. */
  hideCursor?: boolean;
  /** Custom caret glyph (e.g. "|"). Omit for a CSS block caret. */
  cursor?: string;
  /** Custom renderer for the in-progress word — compose your own treatment. */
  renderWord?: (word: string, index: number) => ReactNode;
  className?: string;
};

export default function Rotator({
  words,
  typeMs,
  deleteMs,
  holdMs,
  loop,
  onWordReached,
  hideCursor,
  cursor,
  renderWord,
  className = "",
}: Props) {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (m) setReduce(m.matches);
  }, []);

  const { word, index } = useTypewriter({
    words,
    typeMs,
    deleteMs,
    holdMs,
    loop,
    onWordReached,
  });

  const display = reduce ? words[0] ?? "" : word;
  const idx = reduce ? 0 : index;
  const showCursor = !hideCursor && !reduce;

  return (
    <span className={className}>
      {renderWord ? renderWord(display, idx) : display}
      {showCursor &&
        (cursor !== undefined ? (
          <span className="dh-caret-glyph" aria-hidden="true">
            {cursor}
          </span>
        ) : (
          <span className="dh-caret" aria-hidden="true" />
        ))}
    </span>
  );
}
