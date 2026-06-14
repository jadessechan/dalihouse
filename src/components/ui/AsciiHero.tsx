/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Restyled to Dali House. A canvas ASCII field — use variant="bare" as an
   absolute background layer behind hero content. */
"use client";

import { useRef } from "react";
import {
  useAsciiField,
  type UseAsciiFieldOptions,
} from "@/hooks/useAsciiField";

type Props = UseAsciiFieldOptions & {
  /** "bare" = absolute background layer; "panel" = a self-contained block. */
  variant?: "bare" | "panel";
  className?: string;
};

export default function AsciiHero({
  variant = "bare",
  className = "",
  ...options
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAsciiField(canvasRef, hostRef, options);

  const base =
    variant === "bare"
      ? "absolute inset-0 overflow-hidden"
      : "relative w-full overflow-hidden rounded-2xl";

  return (
    <div ref={hostRef} aria-hidden="true" className={`${base} ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
