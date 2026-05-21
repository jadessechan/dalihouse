<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## ⛔ STOP — Blog workflow protocol (read first, every session)

**Command dispatch — check IN THIS ORDER, stop at first match. Matching is case-insensitive.**

**1. Standalone image commands** (run in topic 4 only, do NOT trigger the blog workflow):
- `source images: <slug>` — image research for an existing post in `content/blog/<slug>.md`
- `source images: topic: <free text>` — ad-hoc image research, slug auto-derived
- `revise images: <slug>` — regenerate image set for a slug

If the inbound message matches any of these (any casing — `Source images:`, `SOURCE IMAGES:`, etc. all count), follow `skills/image-sourcing/SKILL.md`. Output lands in `content/image-runs/<slug>/` (NOT the pipeline folder). Mirrors to `dalihouse-images.vercel.app/<slug>/`. Pipeline state is untouched. **Do NOT run the SEO eval. Do NOT treat this as a blog topic.** Reply inline with the gallery URL + license breakdown + flagged gaps.

**2. Blog workflow triggers** — only check these if step 1 did NOT match.

**Topic gate.** Look at the inbound metadata `topic_id`.

- `topic_id == 4` (Dali Socials): blog workflow is live, follow the rules below.
- `topic_id != 4` (any other Beet HQ topic, e.g. `296` planning, `1` General): blog workflow is **NOT** active here. If a blog topic gets proposed in the wrong topic, your ONLY allowed reply is one short line:

  > Blog workflow lives in Dali Socials (topic 4). Repost there and I'll run the SEO eval.

  Do not perform the eval. Do not touch the repo. Do not "just this once." Eval-in-wrong-topic defeats the whole point of having a dedicated topic and pollutes planning chat.

If the current chat is in **Beet HQ → Dali Socials topic id `4`** AND any blog topic has appeared (in this turn OR in prior conversation memory), the blog workflow applies. No exceptions.

**Triggers — all of these count as "topic proposed" (only if step 1 did NOT match):**
- Explicit: `new blog topic: <topic>` / `revise topic: <topic>`
- Implicit: any casual phrasing like "happy hour spots in Dallas", "let's write about X", "I want a post on Y"
- Resumption: a prior session memory mentions a topic that hasn't reached `approve topic` yet
- A `source images:` / `revise images:` message is **never** a topic trigger — those go through step 1.

**Tavily is the root of this workflow.** Every Step 2 eval is built on a
live Tavily SERP — no Tavily call this turn, no eval. Pattern-matching
from training is forbidden; Dallas facts, SERP positions, and local
authority shift constantly. Default to Tavily for *all* deep research,
escalating across `tavily_search` (basic → advanced → time-ranged →
domain-filtered → `include_answer`) and `tavily_extract`.

The full research escalation ladder, query construction rules, and
output template live in `skills/topic-eval/SKILL.md` — load it before
producing any eval. Bare minimum:

- `tavily_search` for the primary keyword + 1–2 variants — top 5–10 ranking domains and content types (real signal on competition and intent)
- `tavily_search` with `time_range: "month"` (or `"year"` for evergreen) to catch fresh angles
- For Dallas-specific topics, add the neighborhood / venue / business name and use `include_domains` for `eater.com`, `dmagazine.com`, `dallasnews.com`, `culturemap.com`
- `tavily_extract` only when a SERP snippet isn't enough
- `include_answer: true` is a last resort, not a default

Companion skills (`seo-research-master`, `competitor-analysis`,
`ai-seo`, `research_orchestrator`, `cross-validated-search`) layer on top
when the eval has a specific weak spot — see
`docs/workflows/SKILLS.md` for triggers.

**When triggered, your reply MUST contain the full Step 2 SEO evaluation, in this exact shape:**
- **Search intent:** (informational / transactional / navigational + brief)
- **Primary keyword:** `…`
- **Secondary keywords:** `…`, `…`, `…`
- **Likely keyword difficulty:** low / medium / high + why (anchor in the SERP authority you actually saw)
- **Business relevance for Dali House:** 1–2 sentences
- **Recommended angle:** 1–2 sentences (anchor in a specific gap from the SERP)
- **Title suggestions:** 2–3 options
- **Research notes:** one line summarizing the SERP scan (e.g. "Top results: Eater + Thrillist + OpenTable; gap = women-safety lens")
- **Verdict:** keep / narrow / reject + 1-line reason
- **Closing:** `Reply with "approve topic", "revise topic: <new angle>", or "reject topic".`

Read `docs/workflows/BLOG-AUTOMATION.md` if you need the deeper spec; the eval block above is the bare minimum. For the full skill stack (which Tavily features to escalate to, when to layer in `seo-research-master` / `competitor-analysis` / `ai-seo` / `humanizer`), see `docs/workflows/SKILLS.md`.

**Forbidden replies (these are bugs):**
- ❌ "Topic noted: X. Say 'approve topic' when you're ready." → skips Step 2
- ❌ "Looks like we were chatting about X — ready to start drafting?" → skips Step 2 AND skips approval
- ❌ Any reply that touches the repo before `approve topic` → Step 2 is chat-only
- ❌ Any reply in any topic other than `4` that pretends the workflow advanced
- ❌ Treating `source images: <slug>` / `Source images: <slug>` (any casing) as a blog-topic trigger and replying with the SEO eval — those are standalone skill commands and dispatch in step 1, not the workflow
- ❌ Replying to `revise images: <slug>` with anything other than running the image-sourcing skill

**Repo writes:** none until you receive `approve topic`. Then create `content/pipeline/active/<slug>/` per `docs/workflows/BLOG-AUTOMATION.md` Step 3.

**Skill stack (where to look):**
- `skills/topic-eval/SKILL.md` — Step 2 Tavily research + eval pattern (load before any eval reply)
- `skills/README.md` — repo-local skill map
- `docs/workflows/SKILLS.md` — full workflow skills index with global + local skill triggers

## Dali House Project Defaults

### Mission

Help Jadesse build and grow Dali House on the web.

Core goals:
- Ship a strong website MVP quickly
- Improve dalihouse.co beyond a static single-scroll site
- Move toward a clean Next.js + Vercel setup when useful
- Improve blog SEO, metadata, and content quality
- Build a reusable blog -> social media workflow
- Keep the brand calm, warm, and consistent across website, blog, and Instagram

### Current priorities

1. Website MVP and structure
2. Brand kit and visual consistency
3. Blog workflow and SEO
4. Blog -> Instagram / carousel workflow
5. Better deployment workflow on Vercel

### Product and technical defaults

- Prefer a simple shipped MVP over a clever unfinished system
- Prefer Next.js for site work unless there is a strong reason not to
- Prefer Vercel-friendly patterns
- Prefer static or simple serverless solutions over custom infrastructure
- Avoid adding a custom backend, auth system, or complex form flow unless asked
- For inquiries, prefer simple options first: email link, WhatsApp, Tally, Typeform, or a lightweight form
- Keep content structured and reusable so it can power the site, blog, and social posts
- Protect SEO basics: titles, meta descriptions, headings, canonical URLs, internal linking, and clean page structure
- Care about performance, accessibility, and mobile layout from the start

### Brand and content direction

Dali House should feel:
- warm
- calm
- modern
- boutique
- grounded
- airy
- intentional
- design-conscious

Avoid making it feel:
- loud
- flashy
- startup-like
- party-hostel-like
- over-luxury and intimidating
- cluttered or overdesigned

Use copy that is:
- clear
- warm
- understated
- elegant without being pretentious
- concise and readable

Avoid:
- hype language
- generic startup phrasing
- exaggerated luxury language
- filler marketing copy

### Social and carousel workflow

When turning blog content into social content:
- preserve the brand voice and visual consistency
- keep slides spacious and readable
- favor editorial layouts over generic social templates
- use a strong hook, a clean story arc, and one clear CTA
- avoid cramming too much text into a slide
- optimize for mobile readability first

### Supporting docs

When relevant, load and follow:
- `docs/brand/BRAND-KIT.md` for brand voice, positioning, and visual direction
- `docs/workflows/CONTENT-WORKFLOW.md` for blog strategy and repurposing logic
- `docs/workflows/SEO-BLOG-WORKFLOW.md` for SEO-oriented blog production guidance
- `docs/workflows/BLOG-AUTOMATION.md` for the agentic blog workflow and HITL state machine
- `docs/workflows/CRON-PROCESSOR.md` for the scheduled pipeline processor runbook
- `docs/social/SOCIALS.md` for Instagram / carousel structure and social content rules
