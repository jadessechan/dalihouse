# DaliHouse SEO Blog Workflow

Use this workflow to turn the installed skills into a repeatable content engine for DaliHouse.

## Goal

Publish blog posts that:
- rank for useful search terms
- sound human
- earn clicks from Google and AI search surfaces
- drive readers toward DaliHouse pages that matter

## Skill stack

- `seo-research-master` — keyword research, topic clusters, search intent
- `competitor-analysis` — gap analysis against competing sites
- `research_orchestrator` — source-backed fact gathering
- `afrexai-seo-writer` — SEO-first article drafting
- `ai-writing-agent` — softer brand/storytelling drafts when needed
- `ai-humanizer` — remove obvious AI writing patterns
- `ai-seo` — improve AI-search citation and extractability
- `meta-tags-optimizer` — title tag, meta description, OG/Twitter tags

## Core rule

Do not fake experience, testing, statistics, or sources.
Human-sounding is good. Fabricated trust signals are not.

## Workflow

### 1) Pick the target page first
Before writing any post, decide what page the article should help.

For each article, define:
- primary conversion page
- secondary internal link targets
- desired CTA
- target audience

If a post does not support a real DaliHouse page, rethink it.

### 2) Build topic clusters
Use `seo-research-master` to produce:
- 1 primary keyword
- 3 to 5 secondary keywords
- long-tail variations
- search intent
- content format likely to rank

Group ideas into clusters:
- pillar page
- supporting articles
- comparison / alternative posts
- FAQ posts

### 3) Check the competition
Use `competitor-analysis` on the top-ranking pages for the target term.

Capture:
- what they all cover
- what they miss
- weak headings
- outdated examples
- missing questions
- internal link opportunities for DaliHouse

Output: a short content gap brief.

### 4) Gather facts before drafting
Use `research_orchestrator` for anything factual, numerical, regulatory, or trend-based.

Collect:
- trustworthy sources
- stats you can actually cite
- terminology people search for
- FAQs worth answering

Do not draft from vibes alone.

### 5) Draft the article
Default to `afrexai-seo-writer` for search-focused posts.
Use `ai-writing-agent` when the post needs more brand voice, storytelling, or softer marketing language.

The draft should include:
- H1 with primary keyword
- compelling intro
- H2/H3 structure based on search intent
- examples, lists, tables, or comparisons where useful
- FAQ section if search demand exists
- CTA tied to a DaliHouse page

### 6) Humanize the draft
Run the draft through `ai-humanizer` after the structure is solid.

Focus on:
- reducing repetitive phrasing
- breaking sentence rhythm
- removing canned AI transitions
- making wording sound natural
- keeping claims accurate

Do not let humanizing introduce fake anecdotes or unsupported claims.

### 7) Optimize for AI search too
Run `ai-seo` on the near-final draft.

Check for:
- clear definitions near the top
- concise answer blocks
- strong heading hierarchy
- extractable facts and comparisons
- FAQ / HowTo / Article schema opportunities
- citation-friendly phrasing

Goal: make the page easy to quote, not just easy to rank.

### 8) Final metadata pass
Use `meta-tags-optimizer` to create:
- title tag
- meta description
- Open Graph title/description
- Twitter card copy

Keep them aligned with the actual article and target keyword.

### 9) Publish in the site
Because DaliHouse is on Next.js/Vercel, every published article should include:
- clean URL slug
- page metadata
- canonical URL
- Article / FAQ / HowTo schema when relevant
- internal links to target DaliHouse pages
- links from older posts into the new one

Minimum publish checklist:
- primary keyword in title, H1, intro, and naturally in body
- one clear CTA
- at least 2 to 5 internal links
- at least 1 useful external citation when claims need support
- alt text for images
- no fluff paragraphs

### 10) Refresh winners and near-winners
Every 4 to 8 weeks, review posts that are:
- ranking on page 2
- getting impressions but low CTR
- cited rarely in AI answers
- missing fresh stats or examples

Refresh:
- intro and title tag
- headings
- FAQ section
- internal links
- schema
- outdated examples or numbers

## Recommended weekly cadence

### Weekly
- 1 keyword cluster review
- 1 competitor gap review
- 1 to 2 new articles
- 1 refresh of an older article

### Monthly
- identify best-performing cluster
- identify posts with low CTR
- improve internal linking between related posts
- update stats, FAQs, and metadata

## Content brief template

Use this before drafting:

- Topic:
- Primary keyword:
- Secondary keywords:
- Search intent:
- Audience:
- Primary conversion page:
- Secondary internal links:
- Main CTA:
- Competitor gaps to exploit:
- Sources to cite:
- Desired word count:
- Content format:

## Which writing skill to use

Use `afrexai-seo-writer` when:
- the post is keyword-led
- the goal is organic search traffic
- you want strong SEO structure fast

Use `ai-writing-agent` when:
- the post is founder-led or brand-led
- the post needs more voice than formula
- the article is narrative, opinion, or thought leadership

Use both when:
- you want `afrexai-seo-writer` for structure first
- then `ai-writing-agent` for a second pass on tone
- then `ai-humanizer` as the cleanup pass

## Simple operating order

1. `seo-research-master`
2. `competitor-analysis`
3. `research_orchestrator`
4. `afrexai-seo-writer` or `ai-writing-agent`
5. `ai-humanizer`
6. `ai-seo`
7. `meta-tags-optimizer`
8. publish
9. refresh later

## Quality bar

A DaliHouse post is ready when it is:
- useful without being bloated
- specific instead of generic
- human without sounding fake
- optimized without keyword stuffing
- connected to a real business page or conversion goal
