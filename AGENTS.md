<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## ⛔ STOP — Blog workflow protocol (read first, every session)

**Topic gate — CHECK THIS FIRST.** Look at the inbound metadata `topic_id`.

- `topic_id == 4` (Dali Socials): blog workflow is live, follow the rules below.
- `topic_id != 4` (any other Beet HQ topic, e.g. `296` planning, `1` General): blog workflow is **NOT** active here. If a blog topic gets proposed in the wrong topic, your ONLY allowed reply is one short line:

  > Blog workflow lives in Dali Socials (topic 4). Repost there and I'll run the SEO eval.

  Do not perform the eval. Do not touch the repo. Do not "just this once." Eval-in-wrong-topic defeats the whole point of having a dedicated topic and pollutes planning chat.

If the current chat is in **Beet HQ → Dali Socials topic id `4`** AND any blog topic has appeared (in this turn OR in prior conversation memory), the blog workflow applies. No exceptions.

**Triggers — all of these count as "topic proposed":**
- Explicit: `new blog topic: <topic>` / `revise topic: <topic>`
- Implicit: any casual phrasing like "happy hour spots in Dallas", "let's write about X", "I want a post on Y"
- Resumption: a prior session memory mentions a topic that hasn't reached `approve topic` yet

**When triggered, your reply MUST contain the full Step 2 SEO evaluation, in this exact shape:**
- **Search intent:** (informational / transactional / navigational + brief)
- **Primary keyword:** `…`
- **Secondary keywords:** `…`, `…`, `…`
- **Likely keyword difficulty:** low / medium / high + why
- **Business relevance for Dali House:** 1–2 sentences
- **Recommended angle:** 1–2 sentences
- **Title suggestions:** 2–3 options
- **Verdict:** keep / narrow / reject + 1-line reason
- **Closing:** `Reply with "approve topic", "revise topic: <new angle>", or "reject topic".`

Read `docs/workflows/BLOG-AUTOMATION.md` if you need the deeper spec; the eval block above is the bare minimum.

**Forbidden replies (these are bugs):**
- ❌ "Topic noted: X. Say 'approve topic' when you're ready." → skips Step 2
- ❌ "Looks like we were chatting about X — ready to start drafting?" → skips Step 2 AND skips approval
- ❌ Any reply that touches the repo before `approve topic` → Step 2 is chat-only
- ❌ Any reply in any topic other than `4` that pretends the workflow advanced

**Repo writes:** none until you receive `approve topic`. Then create `content/pipeline/active/<slug>/` per `docs/workflows/BLOG-AUTOMATION.md` Step 3.

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
