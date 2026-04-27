---
name: topic-eval
description: Pre-approval blog topic evaluation rooted in Tavily. Use when a blog topic is proposed in Dali Socials (topic 4) — explicit `new blog topic: …` or implicit ("let's write about X"). Produces the Step 2 SEO eval block. Chat-only, no repo writes until `approve topic`. Defaults to Tavily for all research; falls back only if Tavily fails.
---

# Topic eval — Tavily-rooted Step 2

This is the **only** skill the agent runs before topic approval. Everything
post-approval (drafting, publishing, socials) lives in `docs/workflows/`.

## Hard rules

1. **Tavily is the root.** No memory-pattern guessing of SERP, competitors, or Dallas-local sources. If you didn't run a Tavily query this turn, you don't have a SERP — say so and run one.
2. **Chat only.** No repo touch, no `git`, no file writes, no pipeline folder until the user replies `approve topic`.
3. **Topic gate:** only run in Beet HQ → Dali Socials thread `4`. Anywhere else, refuse with the one-line redirect.

## Default research path (escalation)

Start at the lightest tool that gives a usable signal. Escalate only if the prior level was thin.

| Step | Tool | Why |
| --- | --- | --- |
| 1 | `tavily_search` (basic, top 10) on the **primary keyword** | Establish the actual SERP — domains, formats, intent |
| 2 | `tavily_search` with `time_range: "month"` (or `"year"` for evergreen) | Catch fresh angles, find what's been covered recently |
| 3 | `tavily_search` with Dallas-local qualifiers + `include_domains` for `eater.com`, `dmagazine.com`, `dallasnews.com`, `culturemap.com`, `dallasobserver.com` | Local authority signal for any Dallas-bound topic |
| 4 | `tavily_search` for adjacent / variant queries (2–3 sub-queries) | Map secondary keywords and intent variants |
| 5 | `tavily_extract` (basic → advanced) on 1–2 top-ranking pages | Only if SERP snippets aren't enough to spot the gap |
| 6 | `tavily_search` with `include_answer: true` | Last resort — when you need a synthesized fact, not a SERP |

Stop at the earliest step that lets you fill in the eval block honestly.

## Query construction

- Keep queries under 400 chars; think *search query*, not prompt.
- Break wide topics into 2–3 sub-queries instead of one fat one.
- Always include the geo qualifier for Dallas-local topics ("Dallas", "DFW", neighborhood name).
- For evergreen content, use `time_range: "year"`. For trend-bait, `"month"` or `"week"`.

## Required output (Step 2 eval block)

The reply MUST contain every field. Empty / "TBD" fields are bugs.

```
🎯 Topic Evaluation: "<title-cased topic>"

- Search intent: <informational | transactional | navigational | commercial> + 1-line rationale
- Primary keyword: `<kw>`
- Secondary keywords: `<kw1>`, `<kw2>`, `<kw3>`
- Likely keyword difficulty: <low | medium | high> — anchored in actual SERP authority you saw
- Business relevance for Dali House: 1–2 sentences
- Recommended angle: 1–2 sentences (must reference a specific gap from the SERP)
- Title suggestions: 2–3 options
- Research notes: one line summarizing what Tavily surfaced (top domains, formats, gap)
- Verdict: ✅ keep / ⚠ narrow / ❌ reject + 1-line reason

Reply with "approve topic", "revise topic: <new angle>", or "reject topic".
```

## Companion skills (use when relevant)

Tavily is always the root. These layer on top:

- **`seo-research-master`** — for KD scoring discipline and a structured keyword cluster
- **`competitor-analysis`** — when the SERP is dominated by 2–3 strong domains; produce a gap-analysis vector
- **`ai-seo`** — when the topic is a likely AI Overview / Perplexity citation target (informational, question-shaped)
- **`meta-tags-optimizer`** — only when a title suggestion needs CTR pressure-testing
- **`research_orchestrator`** — for ambiguous / multi-claim topics needing source-backed verification before angle is locked

Do **not** run these as a checklist. Pick the one that addresses the specific weak spot in your eval. If Tavily already gave you a clean signal, skip them.

## Anti-patterns (these are bugs)

- ❌ Replying with eval before any Tavily call — guessing the SERP from training
- ❌ "Topic noted: X. Say 'approve topic' when you're ready." → no eval, hard fail
- ❌ "Looks like we were chatting about X — ready to draft?" → resumption without eval
- ❌ Touching the repo (any commit, file write, `git` command) before `approve topic`
- ❌ Running the eval in any thread other than `4`

## On `approve topic`

Hand off to `docs/workflows/BLOG-AUTOMATION.md` Step 3. First repo write
is `content/pipeline/active/<slug>/` — see that doc for the file shape.
