# Workflow skills index — dalihouse blog

Skills the Dali House blog workflow can pull on. **Tavily is the root** for
all research; everything else layers on top when the eval has a specific weak
spot.

## Pre-approval (Step 1–3, chat-only in topic 4)

| Skill | When to use |
| --- | --- |
| **`tavily`** *(global)* | Always. Every Step 2 eval starts with `tavily_search`. No exceptions. |
| **`topic-eval`** *(local — `skills/topic-eval/`)* | The whole Step 2 eval pattern, with Tavily escalation ladder + required output block. Run this first. |
| **`seo-research-master`** *(global)* | Disciplined KD scoring or a structured 1-primary + 3-secondary keyword cluster. |
| **`seo-geo/research/keyword-research`** *(global — `seo-geo/`)* | Keyword discovery + clustering when seo-research-master isn't enough. Adds intent classification + long-tail variants. |
| **`seo-geo/research/serp-analysis`** *(global)* | Structured SERP teardown — content type per result, snippet shape, PAA. Use when SERP is mixed-intent. |
| **`seo-geo/research/competitor-analysis`** *(global)* | Deeper competitor read than `competitor-analysis` — CORE-EEAT signals + content depth scoring. |
| **`seo-geo/research/content-gap-analysis`** *(global)* | When 2+ strong competitors cover the topic and you need the un-covered angle, sub-question, or audience. |
| **`competitor-analysis`** *(global)* | Lightweight competitor scan when seo-geo's version is overkill. |
| **`ai-seo`** *(global)* | Topic is question-shaped or likely to land in AI Overviews / Perplexity / ChatGPT citations. |
| **`research_orchestrator`** *(global)* | Ambiguous or multi-claim topics needing source-backed verification before angle is locked. |
| **`cross-validated-search`** *(global)* | Quick fact verification when one specific claim would carry the angle. |

## Post-approval (Steps 4–8, cron-driven on `blog-content`)

### Drafting

| Skill | When to use |
| --- | --- |
| **`SEO Writer`** *(global, "afrexai-seo-writer")* | Step 4 draft generation — SEO-optimized blog drafting framework. |
| **`seo-geo/build/seo-content-writer`** *(global)* | Alternative drafting framework with CORE-EEAT structure baked in. Use when the topic needs heavy authority signaling. |
| **`seo-geo/build/geo-content-optimizer`** *(global)* | Optimize the draft for *Generative Engine Optimization* — getting cited by AI answer engines. Apply after `SEO Writer`. |
| **`humanizer`** *(global — `humanizer/`, blader)* | Run on the draft before publish gate to strip AI-pattern tells. Heavyweight skill — uses controlled vocabulary, sentence-rhythm checks, perplexity diagnostics. |
| **`image-sourcing`** *(local — `skills/image-sourcing/`)* | Step 4, same tick as the draft. Tavily-only sourcing of open-license / credited images, mirror to `dalihouse-images` repo. No AI fallback. **Also runs standalone** via chat: `source images: <slug>` (existing post), `source images: topic: <free text>` (ad-hoc), `revise images: <slug>` (regen). Standalone runs write to `content/image-runs/<slug>/` and bypass the state machine. |

### Polish (pre-publish)

| Skill | When to use |
| --- | --- |
| **`seo-geo/optimize/on-page-seo-auditor`** *(global)* | Audits H1/H2 hierarchy, keyword placement, anchor text, image alts. Run on draft before publish gate. |
| **`seo-geo/optimize/internal-linking-optimizer`** *(global)* | Suggests internal links from this draft to other published posts (and vice versa). |
| **`seo-geo/optimize/content-refresher`** *(global)* | When updating an existing post — surfaces stale claims, dead links, outdated stats. |
| **`seo-geo/build/meta-tags-optimizer`** *(global)* | Title tag + meta description CTR optimization. Replaces the older `meta-tags-optimizer-2`. |
| **`seo-geo/build/schema-markup-generator`** *(global)* | JSON-LD `Article` / `FAQPage` / `BreadcrumbList` blocks for the post `<head>`. |
| **`seo-geo/cross-cutting/entity-optimizer`** *(global)* | Wikipedia-grade entity coverage — for posts where authority on a place / brand / concept matters. |
| **`seo-geo/cross-cutting/content-quality-auditor`** *(global)* | Final pass: depth, originality, source diversity. Catches "thin content" before publish. |
| **`ai-seo`** *(global)* | Re-check AI extractability post-draft (FAQ block, lists, definitions). |

### Site / surface work (not blog content)

| Skill | When to use |
| --- | --- |
| **`ui-ux-pro-max`** *(global — `ui-ux-pro-max/`)* | When working on `dalihouse.co` itself (layout, color, typography, components). Includes 67 UI styles, 161 palettes, 57 font pairings. Sub-skills: `design`, `design-system`, `ui-styling`, `brand`, `slides`, `banner-design`. **Not for blog content.** |
| **`vercel`** *(global)* | Only if the deploy step needs CLI-level intervention; default is auto-deploy on PR merge. |

### Post-publish (optional)

| Skill | When to use |
| --- | --- |
| **`seo-geo/monitor/rank-tracker`** *(global)* | Track ranking position for the primary keyword over time. Skip until we have ≥10 published posts. |
| **`seo-geo/monitor/backlink-analyzer`** *(global)* | Analyze inbound links once a post starts gaining traction. |
| **`seo-geo/monitor/performance-reporter`** *(global)* | Aggregate ranking + backlink + traffic into a monthly report. |

## Rules

- **Tavily before any other research skill.** No competitor-analysis without a SERP. No ai-seo without knowing the SERP shape. No KD score without seeing actual ranking domains.
- **Skills don't replace the workflow spec.** `BLOG-AUTOMATION.md` and `CRON-PROCESSOR.md` are still authoritative for state and HITL gates. Skills are *how* the agent does each phase, not *what* phase to do.
- **Don't invoke skills as a checklist.** Pick the one that addresses the specific weakness in the current eval / draft. If Tavily already gave you a clean signal, skip the rest.
- **Prefer `seo-geo/*` over the older single-purpose globals** when both exist (e.g. `seo-geo/build/meta-tags-optimizer` over the standalone `meta-tags-optimizer-2`). Older ones stay listed as fallbacks until the bundle has been battle-tested.
