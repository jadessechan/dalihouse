# Dali House Design System

A working design system for **Dali House** — a coliving home in Dallas for young professional women. The brand voice is **warm, calm, grounded, editorial**: a soft landing, not a startup.

This system is reverse-engineered directly from the production codebase: [`jadessechan/dalihouse`](https://github.com/jadessechan/dalihouse) (Next.js 16 + Tailwind v4). If you have access, open the repo for context beyond what's captured here — especially the live components in `src/components/`, the brand brief in `docs/brand/BRAND-KIT.md`, and the published blog posts in `content/blog/`.

## Sources used to build this

| Source | What it gave us |
|---|---|
| `jadessechan/dalihouse@master` | Components, colors, fonts, copy patterns |
| `src/app/globals.css` | Color tokens, post-content type scale |
| `src/app/layout.tsx` | Font stack: Playfair Display (serif) + DM Sans (sans) |
| `src/components/*` | Component recipes (Hero, Nav, Footer, FAQ, TheSpace, …) |
| `docs/brand/BRAND-KIT.md` | Voice, positioning, audience, content rules |
| `docs/social/SOCIALS.md` | Carousel structure & visual rules for IG |
| `content/blog/*.md` | Long-form copy samples, tone exemplars |
| `uploads/dali-house-title.png` | Wordmark with the surreal melting-clock glyph |

The live site lives at **dalihouse.co**.

---

## Index — what's in this folder

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (cross-compatible)
├── colors_and_type.css        ← all CSS tokens + semantic element styles
├── assets/                    ← logo, photography, icon, favicon
│   ├── logo-wordmark.png      ← primary lockup ("Dali House" w/ melting clock)
│   ├── icon-clock.svg         ← standalone melting-clock mark (favicon source)
│   ├── dali-house-hero.jpg    ← Dallas skyline at night (production hero)
│   ├── dali-house-bg.jpg      ← softer interior backdrop (CTA + blog cover)
│   ├── dali-house-host.jpg    ← founder portrait
│   ├── dali-house-cats.png    ← Pookie & Spooky (resident cats, used playfully)
│   └── room-*.jpg             ← bedroom 1, bedroom 2, bath, kitchen, living, laundry
├── preview/                   ← Design-System-tab cards (one concept per file)
└── ui_kits/
    ├── website/
    │   ├── marketing.html     ← full marketing-site recreation
    │   ├── README.md
    │   └── *.jsx              ← componentized pieces (Nav, Hero, TheSpace, …)
    └── blog/
        ├── index.html         ← Journal listing page
        ├── post.html          ← magazine-style editorial article (with TOC)
        ├── post-tour.html     ← list-style "Six rooms" editorial template
        ├── README.md
        └── *.jsx              ← BlogIndex, BlogPost, ArticleParts (Callout, PullQuote, …)
```

> **Asset note:** All interior photography was originally shipped at ~4032×3024 (3–4MB each). Files have been downscaled to 1600px max width / JPEG quality 0.82 (under 400KB each) for fast preview loading. If you need higher-res masters for production, re-pull from `jadessechan/dalihouse@master/public/`.

---

## CONTENT FUNDAMENTALS

**Tone:** warm, calm, grounded, clear. Feminine without being cutesy. Elevated without being pretentious. Reassuring and practical. The brief calls this *"a soft landing."*

**Voice rules** (from `docs/brand/BRAND-KIT.md`):

- **Avoid:** hype, salesy phrasing, "startup energy," party-hostel vibes, generic luxury language, exaggeration, filler marketing copy
- **Reach for:** clarity over cleverness, emotional truth, practical reassurance
- Always anchor the message back to a real pain point — relocation friction, loneliness, the cost of starting over

**Casing & punctuation:**

- **Eyebrows** above section titles are `UPPERCASE TRACKED 0.22em` — e.g. `WELCOME TO`, `THE PROCESS`, `PRICING & AMENITIES`, `ABOUT DALI HOUSE`
- **CTAs** are also `UPPERCASE TRACKED` — `APPLY NOW`, `APPLY`
- **Headlines** use Title Case in serif (Playfair), often broken across two lines with `<br>`. Em-dashes (—) are preferred over hyphens for emphasis pauses.
- **Curly quotes**, em-dashes, mid-dots (·), and the ampersand are all part of the editorial feel. The blog uses real typographic punctuation: `&ldquo; … &rdquo;`, `&mdash;`, `&middot;`.
- Body copy stays in sentence case, low contrast, light weight.

**Pronouns:** mostly *we / you*. "We handle the friction of moving — so you can pour your energy into what matters." The founder section switches to first person ("Hi, I'm Jadesse").

**Emoji usage:** **none in the UI.** Earlier iterations of the marketing site used emoji inside the round Features badges (🛋️ 📅 💞); those have been replaced with hand-rolled stroke icons in tan circles so iconography reads consistently across Features and HowItWorks. The only emoji that remains is **🐱** in the cat-photo caption ("Permanent residents: Pookie & Spooky 🐱") — a single warm wink, not a system.

**Signature phrases** (treat as anchor copy — reuse, don't paraphrase):

> - *"a soft landing in Dallas"*
> - *"your relocation oasis in Dallas"*
> - *"everything handled, from day one"*
> - *"not just a place to live — but a space to land, connect, and grow"*
> - *"built for women navigating a new city, new role, or whatever's next"*
> - *"coliving for women in Dallas"* (the tagline)

**Copy examples in the wild:**

- Hero eyebrow → headline → tagline → CTA
  *"WELCOME TO"* / *Dali House* (logotype) / *"COLIVING FOR WOMEN IN DALLAS"* / *"APPLY NOW"*
- Value section title: *"Your **relocation oasis** in Dallas."* — single italic-serif word for emphasis
- Features section title is split on two lines: *"Everything handled, / from day one."*
- Pricing displays as `$900` (Playfair, ~72px, tan) followed by `/month` (small, muted)

---

## VISUAL FOUNDATIONS

### Colors

Two surface modes alternate down the page to create rhythm:

- **Light surface** — `--color-cream #faf4e8` with `--color-brown-deep #3d2314` text (the default)
- **Warm surface** — `--color-cream-light #f3ead6` (Features section, blog cover curved band)
- **Dark surface** — `--color-charcoal #1a1612` or `--color-charcoal-mid #241d16` with `--color-cream` text (Hero, The Space, How It Works, Footer, blog cover photo)

The brand has **two primary accents**:

- **`--color-tan #c9a96e`** — the *warm* accent, used for eyebrows, the `$900` price, hover states, blockquote rules, italic emphasis inside marketing copy
- **`--color-crimson #7a1c1c`** (with `--color-crimson-warm #9a2828` for headlines) — the *editorial* accent, used for blog category labels, blog section headings, callout borders, info-card icons, and the FEATURED/category pills on the blog index

Tan is the everyday voice; crimson is when the brand turns the page into a magazine spread. They live on the same page comfortably — see `ui_kits/blog/post.html` for both in use.

The page never uses more than two surfaces in a single section. There are no gradients.

### Typography

| Family | Source | Used for |
|---|---|---|
| **Playfair Display** | Google Fonts (loaded via `next/font` in production) | All headings, the `$900` price, pull-quotes, italic emphasis inside body |
| **DM Sans** | Google Fonts | Everything else — body, UI, eyebrows, CTAs, blog meta |

- Weights in use: Playfair 400/500/600/700 (plus italics); DM Sans 300/400/500
- Body copy is **DM Sans 300** (light) by default — never 400
- Headings use Playfair **500** with `letter-spacing: -0.01em`
- Eyebrows are DM Sans **500**, `UPPERCASE`, `letter-spacing: 0.22em`
- Section titles are `clamp(30px, 4vw, 44px)`; hero/section displays go up to `clamp(34px, 5vw, 56px)`
- Blog post body is 17px / 1.78 line-height / weight 300

### Spacing & layout

- Container max-widths: **1080px** for marketing sections, **900px** for "How It Works", **720–820px** for amenity strips, **660px** for FAQ prose
- Section vertical padding: `py-24` (96px) standard, `py-[112px]` on Value Proposition / SoftLanding
- Section horizontal padding: `px-8` (32px) consistent across all sections
- Navigation is fixed (height 80px) with `scroll-padding-top: 100px` on the html element

### Backgrounds

- **Real interior photography** as full-bleed backgrounds on Hero and SoftLanding, always with a heavy dark overlay (`rgba(10,7,5,0.58)` to `rgba(14,10,7,0.72)`) so type stays legible
- **Grain texture** on Hero — a 200×200 SVG fractal-noise pattern at `opacity: 0.06` — adds editorial film-grain feel
- No CSS gradients, no patterns, no decorative SVG shapes. The texture is photographic.
- Solid surfaces (cream / cream-light / charcoal) carry the rest of the page

### Imagery direction

- Warm, natural light. Interiors with real furniture, real artwork, real plants.
- Color palette of the photography is warm — browns, creams, terracotta, sage greens
- Never stock photography of generic luxury condos. Never staged "diverse women laughing at salad."
- Photos sit in rounded containers (`rounded-2xl` / 16–18px corners)

### Animation & interaction

- Motion is **calm and short**: 200–380ms, mostly `ease-out`
- Hover on cards: `-translate-y-1` (4px lift) + shadow swap from `--shadow-card` to `--shadow-card-hover`
- Hover on CTA buttons: `-translate-y-0.5` + shadow grows
- Hover on text links / nav: color fades from `cream/65` to `cream` (or `brown` to `tan`)
- FAQ accordion: `transition-all duration-[380ms] ease-out` on a grid-row trick (no max-height jank)
- Hero has a single `animate-bounce` down-chevron — the only "ambient" animation in the system
- **No** spring bounces, no parallax, no scroll-jacking, no Lottie

### Hover & press states

- **Buttons (cream → cream-light):** lift + shadow grow, no color change
- **Buttons (dark border):** background fills to `cream/10`, text brightens to full cream
- **Cards:** lift + shadow expand; border may darken (`cream/10 → cream/20` on dark)
- **Text links:** color transition only — `tan → brown-deep` on light surfaces; `cream/55 → tan` on dark
- No `:active` scale-down is used. Press is implicit.

### Borders & dividers

- Hairlines on light surfaces: `rgba(124, 92, 62, 0.11)` — used to divide FAQ items
- Hairlines on dark surfaces: `rgba(250, 244, 232, 0.10)` — used in footer and nav bottom
- Chip / pill borders: `border-cream/15` on dark; `border-cream/20` on the brighter chip variant
- Blockquote rules: `2px solid var(--accent)` on the left edge, italic Playfair, indented 18–22px

### Shadow system

```
--shadow-card        : 0 2px 20px rgba(61, 35, 20, 0.055)   /* card rest */
--shadow-card-hover  : 0 10px 36px rgba(61, 35, 20, 0.10)   /* card hover */
--shadow-blog-hover  : 0 12px 40px rgba(61, 35, 20, 0.11)
--shadow-cta         : 0 4px 28px rgba(0, 0, 0, 0.22)        /* button rest */
--shadow-cta-hover   : 0 8px 36px rgba(0, 0, 0, 0.30)        /* button hover */
--shadow-nav         : 0 1px 0  rgba(0, 0, 0, 0.25)          /* nav bottom hairline when scrolled */
```

All shadows are **warm-brown tinted** (`rgba(61,35,20,…)`) on light surfaces and pure black on dark CTAs — never neutral gray.

### Corner radii

- Pills (chips, buttons, badges): `999px` — the default for any inline interactive element
- Room photo cards: `16px`
- Large content cards (host photo, amenity panel, blog cards): `18px`
- Inline code & small chips: `4px`
- Blog images inside post body: `14px`

### Transparency & blur

- The nav transitions from `bg-transparent` to `bg-[rgba(22,17,13,0.96)] backdrop-blur-md` once scroll > 60px
- The featured-room cards use `bg-cream/[0.04]` on charcoal — very subtle warm tint
- Amenity panel uses `bg-cream/[0.04]` with `border-cream/10`
- No frosted glass beyond the nav. Blur is reserved for fixed UI surfaces.

### Cards (the canonical recipe)

```css
background: #fff;            /* on cream-light surface */
border-radius: 16px;          /* or 18px for large editorial cards */
box-shadow: var(--shadow-card);
padding: 40px;                /* feature card; rooms use 22px / 24px */
transition: transform 200ms, box-shadow 200ms;
```

On dark surfaces:

```css
background: rgba(250, 244, 232, 0.04);
border: 1px solid rgba(250, 244, 232, 0.10);
border-radius: 18px;
```

### Layout rules — fixed elements

- The only fixed element is the **nav** (`position: fixed; top:0`, 80px tall, full width, z-50)
- The hero pushes content down with `pt-[120px]` to clear it
- Anchor links scroll-pad 100px so they don't land under the nav
- There are no sticky CTAs, no banners, no chat bubbles, no cookie strips

---

## ICONOGRAPHY

**There is no icon font.** All iconography is hand-rolled inline SVG, consistently sized and stroked. Plus one logo glyph.

1. **The melting-clock mark** — `assets/icon-clock.svg` (also `favicon.ico`). A single hand-drawn surrealist clock used inside the `D` of the wordmark, referencing Salvador Dalí. Treat this as a **proper noun** — never recreate, never re-style, never use as a UI icon. Only appears in the logo lockup and as the favicon.

2. **The icon system** — every UI icon is an inline SVG at `width: 20–22px`, `stroke-width: 1.6`, `stroke-linecap: round`, `stroke-linejoin: round`, no fills. They live inside a 56–64px **tan-tinted circle** (`background: rgba(201,169,110,0.12); border: 1px solid rgba(201,169,110,0.20); color: var(--accent)`). The full inventory:
   - **Features:** sofa (`Fully Furnished`), calendar (`Flexible Lease`), users-group (`Built-in Community`)
   - **HowItWorks:** chat bubble, house, key
   - **Footer:** email envelope, Instagram (rect + circle + dot) — slightly thicker stroke (1.8)
   - **Chips:** small filled checkmark, `width: 13px`, green `#6bcb77` on highlights / `cream/70` on amenities
   - **Hero:** a `1.5px` chevron-down (`M19 9l-7 7-7-7`) with `animate-bounce` — the only ambient animation
   - **Nav:** three `1.5px × 22px` `<span>`s for the mobile hamburger

3. **Blog editorial icons** — in `ui_kits/blog/post.html`, info-card icons (pin / mail / IG / clock) sit in **white-on-crimson** 22px circles instead of tan circles. This is intentional — the blog is the only place crimson takes over as the dominant accent.

4. **Heroicons is installed** (`@heroicons/react@^2.2.0` in `package.json`) but **not yet imported anywhere**. If a new icon is needed and isn't in the inventory above, use Heroicons outline at stroke-width 1.5 — same visual weight as everything we draw by hand. CDN: `https://unpkg.com/@heroicons/react@2.2.0/`.

5. **Emoji in UI: never.** Earlier the Features section used emoji discs — replaced. The only emoji in the entire brand is **🐱** in the cat-photo caption.

6. **Unicode chars** used decoratively in body copy:
   - `&middot;` (·) between meta items: *"Near Carrollton/Plano · ±20 min from downtown Dallas"*
   - `&mdash;` (—) for editorial pauses
   - `&plusmn;` (±) in "±20 min"
   - `→` (right arrow) on "Read article →" links
   - `✿` in the blog callout box notch

7. **Floral motifs** (blog only) — two reusable `<symbol>` definitions in the SVG sprite at the top of `post.html`: `#bloom` (4-petal flower with cream center) and `#leaf`. Used sparingly on the editorial cover and as section dividers.

**Substitution flag:** Heroicons is the closest CDN match to the hand-rolled style. If you need to ship a full canonical Dali House icon set, that's the recommended direction.

---

## Substitutions & flags for the user

- **Fonts:** Playfair Display and DM Sans are both loaded from Google Fonts (the production app does the same via `next/font/google`). No font file substitution was needed. If you'd like the system to bundle local `.woff2` files instead of the Google CDN, let me know.
- **Heroicons** is in `package.json` but unused in the codebase — flagging because the hand-rolled SVGs may need consolidation into Heroicons soon.
- **No real icon library / sprite was found.** I left iconography intentionally light. If you'd like me to ship a canonical Dali House icon set (Heroicons-based, outline 1.5), say the word.

---

## Quick-start: using the system in a new HTML file

```html
<link rel="stylesheet" href="../colors_and_type.css">
<body>
  <section style="background: var(--bg); padding: var(--section-y) var(--space-8);">
    <p class="eyebrow">About Dali House</p>
    <h2>Your <em style="color: var(--accent);">relocation oasis</em> in Dallas.</h2>
    <p style="margin-top: var(--space-5); max-width: 540px;">
      We handle the friction of moving — furnished rooms, flexible leases,
      utilities included — so you can pour your energy into what matters.
    </p>
  </section>
</body>
```

For more, open `ui_kits/website/index.html` — it's a full marketing-site recreation using the system.
