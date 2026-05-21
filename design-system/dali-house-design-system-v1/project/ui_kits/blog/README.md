# Dali House — Blog UI Kit (Editorial)

A magazine-style recreation of the Dali House Journal, with an editorial post template inspired by the magazine spread reference (large overlaid display headline, highlighted subtitle bar, curved color band, category labels, callout boxes, multi-column body, vendor-style info cards).

## Files

- **`index.html`** — blog listing page. Featured-post card (tan "FEATURED" pill) on top, three regular-post cards (crimson tag pills) below. Reuses the same Nav + Footer chrome as the marketing site.
- **`post.html`** — single editorial article. Magazine-style cover with overlaid serif headline, cream-light highlighter subtitle bar, curved bottom band carrying byline + lede; then a body with callout boxes, multi-column drop-cap intro, big pull-quote, and a vendor-style info card at the close.
- **`BlogIndex.jsx`** — React shape of the listing page (FeaturedCard + PostCard).
- **`BlogPost.jsx`** — React shape of the article page (ArticleCover + Spread + Section + PullQuote + InfoCard).
- **`ArticleParts.jsx`** — the reusable editorial fragments: `<CategoryLabel>`, `<Callout>`, `<PullQuote>`, `<InfoCard>`, `<Bloom>`.

## Editorial design vocabulary

The blog uses a different layout system from the marketing site — more magazine, less landing page — but **the same tokens**. Everything below is built from `colors_and_type.css` variables.

### The cover module

- **Photo** background fills the full hero area (760px tall on desktop); a top-to-bottom dark gradient keeps overlaid type readable
- **Section label** ("Journal · Community") top-left, uppercase 0.30em tracking — the small editorial signpost
- **Issue line** ("Issue No. 04 · Spring") top-right, Playfair italic — sets a quarterly-zine cadence
- **Headline** in Playfair Display 600, clamp(56–110px), `letter-spacing: -0.025em`. One word in italic + tan-light for emphasis. White with a soft drop-shadow.
- **Subtitle bar** — `box-decoration-break: clone` on an inline `<span>` gives that magazine *highlighter* effect where the cream-light fill wraps with the line breaks
- **Curved band** below the photo is a `cream-light` block with a `border-top-left-radius: 50% 100%` (and right) pseudo to fake a soft hill. Inside: byline (uppercase tracked, with `WORDS BY` / `PHOTOGRAPHY BY` in muted brown, names in crimson) + italic Playfair lede
- **Page numbers** in bottom-left of the photo, Playfair 600 — the smallest editorial touch

### Body grammar

- **Category labels** are the magazine's signature highlighter pills: rectangle, 4px radius, crimson background, white text, tracked 0.14em uppercase. They sit *above* the section heading.
- **Section headings** are Playfair **italic** 600, in **crimson** (`var(--color-crimson)`) — bigger and more expressive than the marketing site's headings. They lift the editorial register.
- **Drop cap** on the first paragraph of the multi-column section: 56px Playfair crimson, floated.
- **Pull-quote** is centered, Playfair italic, with a giant decorative `"` mark above (crimson, 35% opacity). No left rule — pull-quotes here are *louder* than the inline rule used on the marketing site.
- **Callout box** has a crimson rounded border with a small `✿` flower notch at the top-left — a quiet nod to the magazine's botanical accents.
- **Info card** at the article close mimics the magazine's vendor-info card: bold uppercase name, then a small icon list (pin / email / IG / clock) inside crimson circles. Use it for one clear CTA per article ("Apply to Dali House") rather than embedding multiple links throughout.

### Floral motifs

Two `<symbol>` definitions in the inline SVG sprite:
- `#bloom` — a simple 4-petal flower with cream center (24×24)
- `#leaf` — a single sweeping leaf

Use sparingly: a couple at the cover, one as the section divider, occasionally beside a quote. **Never** scatter them like an Instagram carousel.

### Tokens used (and added in this iteration)

- `--color-crimson` (`#7a1c1c`) is now treated as the **primary editorial accent**, paired with tan
- `--color-crimson-warm` (`#9a2828`) for headlines when the deep crimson feels heavy
- `--highlight` for the subtitle highlighter bar (cream-light)

## What's intentionally different from the marketing site

| Marketing site | Blog post |
|---|---|
| Sentence-case Playfair 500 headings | Italic Playfair 600 headings in crimson |
| Eyebrow above title (`text-align: center`) | Highlighter category label (rectangle, left-aligned) |
| Cream + cream-light + charcoal rhythm | Heavy cream surface w/ crimson + tan editorial accents |
| Tan blockquote with thin left rule | Centered Playfair pull-quote with giant decorative quote mark |
| Three even feature cards | One callout box (crimson border) + photo with caption |
| Apply CTA cream pill, several times | One vendor-style info card at the close |

Both surfaces share **nav, footer, fonts, and the underlying color tokens** — the blog is an editorial dialect of the same brand, not a different brand.
