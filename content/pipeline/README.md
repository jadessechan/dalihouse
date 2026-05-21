# content/pipeline

This folder holds the Dali House blog workflow queue.

## Structure

- `content/pipeline/active/` for posts currently moving through the workflow
- `content/pipeline/archive/` for optional archived workflow artifacts after publish

Published blog posts still live in:
- `content/blog/`

## Why this structure

Only active work should sit in the queue.
This keeps the repo tidy as the publishing cadence increases.

Use `blog-content` as the working branch for:
- topic intake
- SEO evaluation
- draft creation
- human edits
- final re-evaluation
- publish-ready blog files
- generated Instagram packages

When a post is ready, open a PR from `blog-content` into `dev`.
