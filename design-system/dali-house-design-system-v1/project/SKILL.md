---
name: dali-house-design
description: Use this skill to generate well-branded interfaces and assets for Dali House, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here

- `README.md` — voice, palette, type, spacing, motion, iconography rules (start here)
- `colors_and_type.css` — drop-in CSS variables + semantic element styles. Loads Playfair Display + DM Sans from Google Fonts.
- `assets/` — wordmark, melting-clock icon, all production interior photography, founder portrait
- `ui_kits/website/` — full marketing-site recreation as a single HTML file plus per-section JSX components
- `preview/` — small cards that document individual tokens / components

## Brand non-negotiables

- Two type families only: **Playfair Display** (serif, headings + emphasis + the price) and **DM Sans** (sans, everything else, default weight 300)
- Eyebrows are uppercase, `letter-spacing: 0.22em`, in `--color-tan`
- Voice is **warm, calm, grounded** — never hype, never startup, never luxury-flex
- Single accent color: `--color-tan #c9a96e`. Crimson `#7a1c1c` is rare. No gradients.
- Hand-rolled SVG icons at `stroke-width: 1.5–1.6`, rounded caps. If you need new ones, use Heroicons outline.
- Photography is **real interior shots, warm light**. Never generic luxury stock.
- The melting-clock glyph in the wordmark is a proper noun — never recreate.
