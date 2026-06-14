/* Adapted from performative-ui (MIT) — https://github.com/vorpus/performativeUI
   Drives a <canvas> with a procedural, cursor-reactive ASCII field. Restyled
   for Dali House: JetBrains Mono default, and a prefers-reduced-motion guard
   that renders a single static frame instead of the rAF loop. */
import { RefObject, useEffect, useMemo } from "react";

export interface UseAsciiFieldOptions {
  /** Grid width in cells. Default: auto-computed from container width. */
  cols?: number;
  /** Grid height in cells. Default: auto-computed from container height. */
  rows?: number;
  /** Font size in px for rendered characters. Default 11. */
  fontSize?: number;
  /** Font family override (must be monospace). */
  fontFamily?: string;
  /** Characters from sparsest to densest. */
  charRamp?: string;

  /* ----- Color ----- */
  /** Paint with the default aurora palette. */
  colorful?: boolean;
  /** Custom palette (overrides `colorful`). */
  palette?: string[];
  /** Base alpha (0–1). Drop low (≈ 0.18) to use as a background. */
  baseOpacity?: number;

  /* ----- Cursor ----- */
  /** Enable cursor reactivity (ripple + spotlight). */
  reactive?: boolean;
  /** Cursor ripple amplitude. */
  rippleStrength?: number;
  /** Cursor ripple falloff radius (cells). */
  rippleRadius?: number;
  /** Alpha used at the cursor center; falls off radially to baseOpacity. */
  spotlightOpacity?: number;
  /** Cursor spotlight radius (cells). */
  spotlightRadius?: number;

  /** ms throttle between frames. Default 50. */
  frameMs?: number;
}

const DEFAULT_RAMP =
  " .`'\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

const DEFAULT_PALETTE = ["#a78bfa", "#ec4899", "#67e8f9", "#fbbf24"];

export function useAsciiField(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  hostRef: RefObject<HTMLElement | null>,
  options: UseAsciiFieldOptions = {},
): void {
  const {
    cols: colsOpt,
    rows: rowsOpt,
    fontSize = 11,
    fontFamily = "JetBrains Mono, ui-monospace, monospace",
    charRamp = DEFAULT_RAMP,
    colorful = false,
    palette: paletteOpt,
    baseOpacity = 1,
    reactive = true,
    rippleStrength = 1.4,
    rippleRadius = 6,
    spotlightOpacity,
    spotlightRadius = 8,
    frameMs = 50,
  } = options;

  const palette = useMemo<string[] | null>(
    () => paletteOpt ?? (colorful ? DEFAULT_PALETTE : null),
    [paletteOpt, colorful],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const wantsCursor = reactive && !reduceMotion;

    let raf = 0;
    let lastFrame = 0;
    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let baseField = new Float32Array(0);
    let dpr = 1;
    const mouse = { x: -9999, y: -9999 };

    const seed = () => {
      baseField = new Float32Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = (x / cols) * 2 - 1;
          const ny = (y / rows) * 2 - 1;
          const r = Math.sqrt(nx * nx + ny * ny);
          const stripes = 0.5 + 0.5 * Math.sin(nx * 6 + ny * 2);
          const radial = 1 - Math.min(1, r * 1.2);
          baseField[y * cols + x] = 0.25 * stripes + 0.55 * radial;
        }
      }
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.textBaseline = "top";

      const m = ctx.measureText("M");
      const measured = m.width || fontSize * 0.6;
      cellW = measured;
      cellH = fontSize * 1.15;

      cols = colsOpt ?? Math.max(1, Math.floor(rect.width / cellW));
      rows = rowsOpt ?? Math.max(1, Math.floor(rect.height / cellH));

      if (colsOpt !== undefined) cellW = rect.width / cols;
      if (rowsOpt !== undefined) cellH = rect.height / rows;

      seed();
    };

    const drawFrame = (t: number) => {
      const time = t * 0.001;
      const rect = canvas.getBoundingClientRect();
      const cx = (mouse.x - rect.left) / cellW;
      const cy = (mouse.y - rect.top) / cellH;
      const margin = 24;
      const mouseInside =
        wantsCursor &&
        mouse.x >= rect.left - margin &&
        mouse.x <= rect.right + margin &&
        mouse.y >= rect.top - margin &&
        mouse.y <= rect.bottom + margin;

      ctx.clearRect(0, 0, rect.width, rect.height);

      const rampMax = charRamp.length - 1;
      const useSpotlight =
        typeof spotlightOpacity === "number" &&
        spotlightOpacity !== baseOpacity;
      const spotR2 = spotlightRadius * spotlightRadius * 2;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const base = baseField[y * cols + x];
          const wave =
            0.15 *
            Math.sin(x * 0.18 + time * 1.4) *
            Math.cos(y * 0.22 - time * 1.1);

          const dx = x - cx;
          const dy = (y - cy) * 1.8;
          const d2 = dx * dx + dy * dy;
          const d = Math.sqrt(d2);

          const ripple = mouseInside
            ? rippleStrength * Math.exp(-d2 / 80) -
              0.6 * Math.exp(-((d - rippleRadius) * (d - rippleRadius)) / 30)
            : 0;

          const v = Math.max(0, Math.min(1, base + wave + ripple));
          const ch = charRamp[Math.floor(v * rampMax)];
          if (ch === " ") continue;

          let alpha = baseOpacity;
          if (useSpotlight && mouseInside) {
            const spot = Math.exp(-d2 / spotR2);
            alpha = baseOpacity + (spotlightOpacity! - baseOpacity) * spot;
            if (alpha < 0) alpha = 0;
            if (alpha > 1) alpha = 1;
          }
          if (alpha <= 0.01) continue;

          let color = "#c8c8d4";
          if (palette && palette.length) {
            const huePos = (x * 0.1 + y * 0.07 + time * 0.12) % palette.length;
            const idx = Math.floor(Math.abs(huePos));
            color = palette[idx % palette.length];
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          ctx.fillText(ch, x * cellW, y * cellH);
        }
      }
      ctx.globalAlpha = 1;
    };

    const render = (t: number) => {
      if (t - lastFrame < frameMs) {
        raf = requestAnimationFrame(render);
        return;
      }
      lastFrame = t;
      if (cols === 0 || rows === 0) {
        resize();
        raf = requestAnimationFrame(render);
        return;
      }
      drawFrame(t);
      raf = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawFrame(0); // repaint the single static frame
    });
    ro.observe(host);
    resize();

    if (reduceMotion) {
      // One static frame, no animation loop, no cursor listeners.
      drawFrame(0);
      return () => ro.disconnect();
    }

    if (wantsCursor) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (wantsCursor) window.removeEventListener("mousemove", onMove);
    };
  }, [
    canvasRef,
    hostRef,
    colsOpt,
    rowsOpt,
    fontSize,
    fontFamily,
    charRamp,
    palette,
    baseOpacity,
    reactive,
    rippleStrength,
    rippleRadius,
    spotlightOpacity,
    spotlightRadius,
    frameMs,
  ]);
}
