---
name: image-sourcing
description: Source open-license or properly credited images for a blog draft using Tavily image search. Runs at Step 4 of the blog automation, alongside draft generation. No AI image generation — flag and skip when no real-world image fits. Outputs a manifest + downloaded files that get pushed to the dalihouse-images draft gallery on Vercel.
---

# image-sourcing — Step 4 image research

This skill produces a small set of **real, attributable** candidate images
for a blog draft so Jadesse can pick by hand before publish. AI-generated
imagery is **not allowed** — if a topic genuinely has no good real-world
photo, flag and skip.

## Invocation modes

This skill is **isolated from the blog state machine** — the same logic powers
three entry points. Pipeline mode is automatic; the others are direct chat
commands so Jadesse can run image research for any post (existing, archived,
ad-hoc) without touching the workflow.

| Mode | Triggered by | Context source | Output folder |
| --- | --- | --- | --- |
| **1. Pipeline (Step 4)** | Cron, on `approved_for_draft` | `content/pipeline/active/<slug>/brief.md` + `draft.md` (same tick) | `content/pipeline/active/<slug>/images/` |
| **2. Existing post** | Chat: `source images: <slug>` (in topic 4) | `content/blog/<slug>.md` (frontmatter + body) | `content/image-runs/<slug>/images/` |
| **3. Ad-hoc** | Chat: `source images: topic: <free text>` (in topic 4) | The free text + agent-derived subject list | `content/image-runs/<auto-slug>/images/` |

**Optional refinement (any mode):** append `with focus: <guidance>` to bias
queries (e.g. `source images: why-community-matters with focus: shared
breakfast scenes`).

**Re-run / regenerate:** `revise images: <slug>` regenerates the manifest from
scratch and archives prior files under `images/_archived/<timestamp>/`.

**Mirror behavior is identical across all modes** — the gallery at
`https://dalihouse-images.vercel.app/<slug>/` is the latest image set for that
slug. A standalone run for an existing post overwrites a prior pipeline run
for the same slug; that's by design.

**Mode-specific notes:**

- Pipeline mode **never** runs before `approve topic` — there's no slug folder yet.
- Pipeline mode **never** runs twice for the same slug; re-run uses `revise images:`.
- Standalone modes (2 + 3) run inline in the chat agent, not via cron — Jadesse gets the gallery URL in the same chat reply once the run finishes.
- Standalone modes do **not** write to `content/pipeline/active/` and do **not** touch `status.json`. Pipeline state is untouched.

### Slug derivation (Mode 3)

When the trigger is `source images: topic: <free text>`:
1. Lowercase, strip punctuation, collapse whitespace to `-`
2. Truncate to 60 chars on a word boundary
3. If `content/image-runs/<slug>/` already exists, suffix `-YYYYMMDD-HHMM`

Example: `source images: topic: cozy fall coffee shop vibes` → `cozy-fall-coffee-shop-vibes`.

### Subject extraction (Modes 2 + 3)

Before running Tavily:
- **Mode 2:** read the post's frontmatter `title`, headings (`##`), and any explicit visual cues in the body. Build a list of 3–5 distinct subjects (hero + section illustrations).
- **Mode 3:** parse the free text into 3–5 concrete visual subjects. If the topic is too abstract to picture, reply with a flag-and-skip and do not run Tavily — same rule as the no-AI policy.

## Tavily-only source policy

- **Search engine: Tavily.** No other engine, no skipping the search.
- **Allowed source tiers:**

  | Tier | Source type | License tag |
  | --- | --- | --- |
  | 1 | Wikimedia Commons | `cc-by`, `cc-by-sa`, `cc0`, `public-domain` |
  | 2 | Unsplash | `unsplash` |
  | 3 | Pexels | `pexels` |
  | 4 | Pixabay | `pixabay` |
  | 5 | Other CC-licensed sites verified by Tavily extract | `cc-by` / `cc-by-sa` / `cc0` |
  | 6 | Public social media posts (Instagram, TikTok, X, Threads, Facebook) — image embedded in the post itself, account public, **link to the source post + credit the account in `attribution`** | `social-credit` |

- **Forbidden sources:** Getty / Shutterstock / Alamy / AP / Reuters / paywalled stock, news photos without an explicit reuse license, Pinterest re-pins (link rot + credit chain broken), AI-generated images.
- **No AI fallback.** If no tier 1–6 source produces a usable image for an intended placement, write the gap into `flagged_gaps[]` in the manifest and skip — do not generate.

## Tavily query strategy

Two-phase search per intended placement (hero + 2–4 supporting images is the default target):

**Phase A — open-license stock first**
```
tavily_search:
  query: "<concrete subject + setting>"
  include_domains: ["commons.wikimedia.org", "unsplash.com", "pexels.com", "pixabay.com"]
  search_depth: "basic"
  include_images: true
  max_results: 10
```

**Phase B — social credit fallback** (only if A returned nothing usable)
```
tavily_search:
  query: "<concrete subject + setting> instagram OR tiktok"
  include_domains: ["instagram.com", "tiktok.com", "x.com", "threads.net", "facebook.com"]
  search_depth: "basic"
  include_images: true
  max_results: 10
```

For each candidate, run `tavily_extract` on the source page to confirm:
- the image is actually on the page
- the license / credit info you write into the manifest matches reality
- for social posts, the post is still public (no 404 / private)

If extract fails, drop the candidate.

## Query construction

- Be **concrete and specific**. "Coliving common area natural light" beats "coliving lifestyle".
- Avoid Dali-House-internal phrasing ("women-only" → "shared apartment common area"). The image just needs to fit visually.
- For Dallas-specific blogs, use neighborhood / building-style vocabulary ("Bishop Arts row house", "Deep Ellum street view") not "Dallas Texas" generic.
- Two to four well-targeted queries beat ten lazy ones.

## What to download

- Pull the **actual image file** (not a hot-linked URL). Hot-linking Unsplash / Pexels works for a while then breaks; social-post hot-links break immediately.
- Save to the mode's output folder (see Invocation modes table) — `content/pipeline/active/<slug>/images/` for pipeline mode, `content/image-runs/<slug>/images/` for standalone modes
- Naming: `NN-<short-kebab-description>.<ext>` — e.g. `01-coliving-common-area.jpg`, `02-bishop-arts-street.jpg`. Two-digit prefix preserves intended order.
- Max 6 images per draft (hero + 5 supporting). More is noise.
- Max 1.5 MB per file — resize/transcode if larger. Vercel deploys carry the weight.

## Manifest shape — `<output_folder>/sources.json`

(`<output_folder>` = `content/pipeline/active/<slug>/images/` in pipeline mode,
or `content/image-runs/<slug>/images/` in standalone modes.)

```json
{
  "slug": "coliving-vs-random-roommates-dallas-women",
  "title": "Coliving vs random roommates for women moving to Dallas",
  "generated_at": "2026-04-29T10:00:00Z",
  "images": [
    {
      "filename": "01-coliving-common-area.jpg",
      "query": "shared apartment common area natural light",
      "source_url": "https://upload.wikimedia.org/...full-image-url.jpg",
      "source_page": "https://commons.wikimedia.org/wiki/File:...",
      "account": "First Last",
      "license": "cc-by-sa",
      "attribution": "Photo by First Last, CC BY-SA 4.0, via Wikimedia Commons",
      "suggested_placement": "Hero — top of post",
      "flagged": null
    },
    {
      "filename": "02-bishop-arts-street.jpg",
      "query": "Bishop Arts Dallas storefront daytime",
      "source_url": "https://images.unsplash.com/photo-...",
      "source_page": "https://unsplash.com/photos/abc123",
      "account": "@photographerhandle",
      "license": "unsplash",
      "attribution": "Photo by @photographerhandle on Unsplash",
      "suggested_placement": "After 'Where in Dallas' section",
      "flagged": null
    }
  ],
  "flagged_gaps": [
    "no usable image found for: women-only common area lifestyle shot — recommend Jadesse shoot one in-house"
  ]
}
```

`license` enum: `public-domain | cc0 | cc-by | cc-by-sa | unsplash | pexels | pixabay | social-credit | unknown`. `unknown` is a bug — drop the candidate instead.

`attribution` rules:
- Public domain / CC0: `Public domain, via Wikimedia Commons` (or wherever)
- CC BY / CC BY-SA: `Photo by <name>, <license short>, via <site>`
- Unsplash / Pexels / Pixabay: their canonical credit line — `Photo by <handle> on Unsplash`
- Social credit: `@<handle> on <platform> — <link to source post>` and `source_page` MUST be the specific post, not the profile

## Mirror to dalihouse-images repo

Identical for all three modes. After writing the manifest and downloading
the files, publish them to the draft gallery so Jadesse can scan them on a
real URL.

Steps:
1. Ensure clone at `~/.dali/images-clone` (clone if missing from `https://github.com/jadessechan/dalihouse-images.git`)
2. `git fetch origin && git checkout master && git reset --hard origin/master`
3. Copy:
   - `<output_folder>/*.{jpg,jpeg,png,webp}` → `public/images/<slug>/`
   - `<output_folder>/sources.json` → `data/drafts/<slug>.json`
4. `git add -A && git commit -m "draft(<slug>): publish image set" && git push origin master`
5. Vercel auto-deploys; the gallery URL is `https://dalihouse-images.vercel.app/<slug>/`

**Pipeline mode only:**
- Write `imageGalleryUrl` into the dalihouse repo's `status.json` so the draft-review announcement can include it
- Commit + push the dalihouse repo per the standard Step 4 git rule

**Standalone modes:**
- Reply in chat (topic 4) with: image count, license breakdown, any `flagged_gaps[]`, and the gallery URL **as the last line** of the reply, in this exact format:

  ```
  🖼 Gallery: https://dalihouse-images.vercel.app/<slug>/
  ```

  This line is non-negotiable. Every successful standalone reply ends with it. If the push to `dalihouse-images` failed, replace the URL with `(deploy pending — push failed, see lastError)` so the user knows.

- The run also commits the manifest + files into the dalihouse repo on `blog-content` under `content/image-runs/<slug>/` so the work is preserved (one commit per run, subject `images(<slug>): standalone run`). No `status.json` update.

- Vercel takes ~30–60s to redeploy after the push to `dalihouse-images`. The URL in the reply may 404 for the first minute — call this out once if the build is fresh.

If the push to `dalihouse-images` fails (auth, rebase, etc.), do NOT block the
flow. In pipeline mode, write the failure into `status.lastError` (with
`state: "step-4-image-mirror"`) and announce the draft-review gate without the
gallery URL. In standalone modes, surface the failure in the chat reply and
point Jadesse at the local manifest path on GitHub as a fallback.

## On revise / rerun

When Jadesse types `revise draft: <guidance>`, the cron is allowed to **append**
new images to `images/sources.json` if the guidance asks for new visuals
(e.g. "add a Bishop Arts street shot"). Existing entries are not overwritten —
prepend new ones with a fresh `NN-` prefix.

If she types `revise images: <guidance>` (future command), the manifest is
regenerated from scratch but old files are preserved on disk under
`images/_archived/<timestamp>/` to avoid losing previously-shortlisted
candidates.

## Anti-patterns (these are bugs)

- ❌ Hot-linking image URLs in the manifest's `source_url` for production rendering — `source_url` is metadata; the gallery uses the downloaded file at `public/images/<slug>/<filename>`
- ❌ Skipping `tavily_extract` and trusting search-result snippets for license info
- ❌ Pinterest re-pin URLs in `source_page` — not a primary source
- ❌ Stock-site URLs you can't actually verify reuse rights for (Getty, Shutterstock)
- ❌ AI-generated images, even labelled — user said no
- ❌ Filling the manifest with a single hero and calling it done when the post needs 3–4 placements
- ❌ Generating fake `attribution` strings — if you can't read the credit off the source page, drop the candidate

## Quality bar

Two real, well-credited images that fit the post > six dubious ones. Err
toward `flagged_gaps[]` rather than padding.

## Output checklist (before pushing)

- [ ] `images/sources.json` parses as valid JSON
- [ ] Every entry has a non-null `attribution` and a real `source_page`
- [ ] Every `filename` exists on disk in the same folder
- [ ] No file > 1.5 MB
- [ ] `license` is one of the allowed enum values
- [ ] dalihouse-images push succeeded (or `lastError` is written)
- [ ] dalihouse `status.json` has `imageGalleryUrl` set (or null with reason)
