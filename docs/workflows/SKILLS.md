# Workflow skills index — dalihouse blog

Skills the Dali House blog workflow can pull on. **Tavily is the root** for
all research; everything else layers on top when the eval has a specific weak
spot.

## Pre-approval (Step 1–3, chat-only in topic 4)

| Skill | When to use |
| --- | --- |
| **`tavily`** *(global)* | Always. Every Step 2 eval starts with `tavily_search`. No exceptions. |
| **`topic-eval`** *(local — `skills/topic-eval/`)* | The whole Step 2 eval pattern, with Tavily escalation ladder + required output block. Run this first. |
| **`seo-research-master`** *(global)* | When you need disciplined KD scoring or a structured 1 primary + 3 secondary keyword cluster. |
| **`competitor-analysis`** *(global)* | When the SERP is dominated by 2–3 strong domains and you need a gap vector — what they cover, what they miss. |
| **`ai-seo`** *(global)* | When the topic is question-shaped or likely to land in AI Overviews / Perplexity / ChatGPT citations. Optimizes for AI extractability. |
| **`research_orchestrator`** *(global)* | For ambiguous or multi-claim topics needing source-backed verification before angle is locked. |
| **`cross-validated-search`** *(global)* | Quick fact verification when one specific claim would carry the angle. |

## Post-approval (Steps 4–8, cron-driven on `blog-content`)

| Skill | When to use |
| --- | --- |
| **`SEO Writer`** *(global, "afrexai-seo-writer")* | Step 4 draft generation — SEO-optimized blog drafting framework. |
| **`image-sourcing`** *(local — `skills/image-sourcing/`)* | Step 4, same tick as the draft. Tavily-only sourcing of open-license / credited images, mirror to `dalihouse-images` repo. No AI fallback. |
| **`humanizer`** *(global, "ai-humanizer")* | Run on the draft before the publish gate to strip AI-pattern tells. |
| **`meta-tags-optimizer`** *(global)* | Title tag + meta description CTR optimization before publish. |
| **`ai-seo`** *(global)* | Re-check AI extractability post-draft (FAQ block, lists, definitions). |
| **`vercel`** *(global)* | Only if the deploy step needs CLI-level intervention; default is auto-deploy on PR merge. |

## Rules

- **Tavily before any other research skill.** No competitor-analysis without a SERP. No ai-seo without knowing the SERP shape. No KD score without seeing actual ranking domains.
- **Skills don't replace the workflow spec.** `BLOG-AUTOMATION.md` and `CRON-PROCESSOR.md` are still authoritative for state and HITL gates. Skills are *how* the agent does each phase, not *what* phase to do.
- **Don't invoke skills as a checklist.** Pick the one that addresses the specific weakness in the current eval / draft. If Tavily already gave you a clean signal, skip the rest.
