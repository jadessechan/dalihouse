# Repo-local skills

Use the narrowest one that matches the task. **Tavily is the root** for all
research; `topic-eval` is the only skill that runs before approval.

## Pre-approval (chat-only, topic 4)

- `topic-eval/` — Tavily-rooted Step 2 SEO + audience research pattern. Defaults to Tavily for deep research. Chat-only, no repo writes until `approve topic`.

## Post-approval (cron, Step 4+)

- `image-sourcing/` — Step 4 image research. Tavily-only, open-license + credited social only, no AI fallback. Mirrors output to the [`dalihouse-images`](https://github.com/jadessechan/dalihouse-images) draft gallery repo.

For the full skills stack including global skills (`seo-research-master`,
`competitor-analysis`, `ai-seo`, `humanizer`, `meta-tags-optimizer`, etc.)
and when to layer them on, see `../docs/workflows/SKILLS.md`.
