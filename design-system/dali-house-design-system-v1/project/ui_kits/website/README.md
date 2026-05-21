# Dali House — Marketing Website UI Kit

A pixel-faithful recreation of the production marketing site at **dalihouse.co**, rebuilt from `jadessechan/dalihouse@master`. This kit covers every section of the homepage as it ships today.

## Files

- **`index.html`** — full single-page recreation. Open this in the preview to see the entire site assembled. Tailwind is not used — all styles are scoped into a `<style>` block at the top of the file so the markup is editable by hand.
- **`Nav.jsx`** — fixed top nav. `scrolled` state swaps `bg-transparent` → `bg-charcoal/96 + backdrop-blur` above 60px scroll. Pass `alwaysScrolled` to skip the scroll listener.
- **`Hero.jsx`** — full-bleed photo + dark overlay + grain texture + wordmark + cream CTA. The grain is a 200×200 SVG fractal-noise pattern at 6% opacity.
- **`ValueProposition` + `SoftLanding`** (in `Sections.jsx`) — the two text-led editorial sections. Both use the eyebrow → serif headline with italic accent → body → pull-quote rhythm.
- **`Features.jsx`** — three white cards on cream-light. Crimson round badges with emoji icons (the *only* emoji in the system).
- **`TheSpace.jsx`** — pricing block + chip rows + amenity panel + 2×3 room grid on charcoal-mid.
- **`HowItWorks.jsx`** — three steps on brown-deep with hand-rolled SVG icons (chat / house / key) in tan tinted circles.
- **`MeetYourHost.jsx`** — founder portrait + cat photo + first-person intro + pull-quote.
- **`FAQ.jsx`** — accordion with serif question, chevron-down (rotates 180° on open), grid-rows transition for the smoothest possible expand.
- **`Footer.jsx`** — charcoal footer with inverted wordmark, IG + email links, four columns.

## How sections compose

The full homepage (`src/app/page.tsx` in the source) reads top-to-bottom:

```jsx
<Nav />
<Hero />              // dark, full-bleed photo
<ValueProposition />  // cream
<Features />          // cream-light  — the only "warm" section
<TheSpace />          // charcoal-mid — pricing + rooms
<HowItWorks />        // brown-deep   — process
<MeetYourHost />      // cream        — founder
<FAQ />               // cream        — accordion
<SoftLanding />       // dark, full-bleed photo — closing CTA
<Footer />            // charcoal
```

Note the **dark/light rhythm**: dark hero → light → warm → dark → dark → light → light → dark CTA → dark footer. The two consecutive cream sections (Host + FAQ) are deliberate — they let the founder's voice land without visual interruption.

## CSS contract

Components reference class names defined in `index.html`'s `<style>` block. The variables they consume (`--color-*`, `--font-*`, `--shadow-*`, etc) come from `../../colors_and_type.css` at the design-system root. To use these JSX files in a real React project, drop the `<style>` block into a stylesheet and ensure `colors_and_type.css` is imported globally.

## What's not here

- The **blog index** (`src/app/blog/page.tsx`) and individual post pages — flag this if you need them. The blog reuses Nav + Footer plus its own card components.
- JSON-LD structured-data components (`JsonLd`, `FaqJsonLd`, `BlogPostingJsonLd`) — SEO-only, no visual surface.
- Mobile menu — present in production via the hamburger button; omitted here for clarity. Add back if needed.
