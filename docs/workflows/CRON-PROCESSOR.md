# CRON-PROCESSOR.md - Dali House Blog Pipeline Cron Runbook

_Status: MVP spec. Companion to `BLOG-AUTOMATION.md`._

## Purpose

A scheduled agent that advances `content/pipeline/active/*/` posts through their state machine without Jadesse prompting each step. Pauses at HITL gates, announces once per gate, resumes when approval arrives.

The cron processor only sees posts that already have a folder under `content/pipeline/active/`. The earliest state it can ever encounter is `approved_for_draft`. Topic intake, SEO viability evaluation, and topic approval all happen in chat (Beet HQ → Dali Socials, topic id `498`) and are owned by the main agent — see `BLOG-AUTOMATION.md` Steps 1–3. The repo is not touched until a human says `approve topic` in chat.

## Cadence

- **Locked: every 15 minutes**
- Rationale: 1 post/week means low urgency, but 15 min keeps pickup fast after Jadesse approves a gate — she never waits more than ~15 min for the next step to start
- Human approvals come through chat, not a tool call, so the gap between approval and pickup is at most one cron tick

## Where it runs

- An OpenClaw cron agent with its own session (isolated from the main Dali House chat)
- Runs headless, only speaks up when action is needed or a milestone completes
- The main Dali House agent stays in charge of chat conversation; the cron agent handles quiet repo progression

## Working copy strategy

Each tick the cron agent:

1. Ensures a working clone at a persistent path, e.g. `~/.dali/site-clone`
2. `git fetch origin` + `git checkout blog-content` + `git reset --hard origin/blog-content`
3. Does its work on a clean tree
4. Commits + pushes back to `blog-content`

Never keeps uncommitted state between runs. The repo is the source of truth.

## Git operations rule (LOCKED)

Every state transition that mutates files MUST commit AND push to `origin/blog-content` in the same tick. Committing without pushing is a bug — the user cannot see drafts, and the next tick may double-process the same change.

- After any `git commit` on `blog-content`, immediately run `git push origin blog-content`
- This applies to ALL state handlers, not just publish: `draft post`, `detect human edit`, `re-evaluate edited draft`, `publish`, `generate social package`, `archive`. (`evaluate topic` does not apply — that step is chat-only and never commits.)
- If `git push` fails (non-fast-forward), `git fetch` + rebase, then push again. If it still fails, stop, write `lastError`, push the error, and announce once
- Never leave a local-only commit at end of tick

## Per-tick loop

```
for slug in content/pipeline/active/*/:
  status = read(status.json)
  if status.state in AUTOMATED_STATES:
    run_state_handler(slug, status)
    write(status.json)
    commit + push if anything changed
  elif status.state in HITL_STATES:
    if not already_announced(status):
      announce(slug, status)
      mark_announced(status)
      commit + push
    # otherwise stay silent
```

## State handlers

| State | Automated? | Handler action |
|---|---|---|
| _`proposed` / `awaiting_topic_approval`_ | n/a | **chat-only** — no folder exists yet, cron never sees these |
| `approved_for_draft` | yes | write `draft.md` + compute checksum, advance to `awaiting_human_edit` |
| `awaiting_human_edit` | mixed | check draft checksum drift; if drifted, advance to `edited_by_human` |
| `edited_by_human` | yes | re-evaluate, append to `notes.md`, advance to `awaiting_final_approval` |
| `awaiting_final_approval` | no | HITL: announce once, wait |
| `approved_for_publish` | yes | copy to `content/blog/<slug>.md`, open PR `blog-content` → `dev`, advance to `published` |
| `published` | yes | generate Instagram package into `socials.md`, advance to `socials_generated` |
| `socials_generated` | yes | announce once, move folder to `content/pipeline/archive/<year>/<slug>/` |
| `rejected` | yes | archive folder, no announcement |

## Drift / human-edit detection

- After the agent writes `draft.md`, it stores `draftChecksum` (sha256) in `status.json`
- Each tick, recompute the checksum
- If it differs AND `state == awaiting_human_edit`, advance to `edited_by_human`
- If it differs in any other state, log a warning and leave state unchanged (don't auto-revert human work)

## Anti-spam announcements

`status.json` tracks:

```json
"announcedStates": ["awaiting_topic_approval"]
```

Rules:
- Announce only once per state entry
- If state changes and returns (e.g. revise → re-approve cycle), clear the old entry so the new gate can announce again
- Completion milestones (`published`, `socials_generated`) also announce once

## Announcement surface

- **Locked: Beet HQ → Dali Socials topic (id `498`)** — the same topic where Jadesse types every workflow command
- Rationale: keeps announcements and approvals in one place; the main agent and cron agent both read/write here only
- Topic ID is also configured at cron registration time so the processor routes to the right thread

## Announcement format

Single message. Template:

```
[Dali House blog cron]
slug: <slug>
state: <state>
next action: <status.nextAction>
path: content/pipeline/active/<slug>/
```

Keep it terse. The main agent can expand on it when Jadesse asks.

## Approval language → state transitions

Jadesse's approvals are picked up by the main agent, not the cron processor. The main agent is responsible for translating chat commands into `status.json` edits + commits on `blog-content`. The cron processor only reads state; it does not parse chat.

All commands are typed in **Beet HQ → Dali Socials topic (id `498`)**. The main agent ignores them anywhere else.

Chat command → main agent update:

| Command | Updates |
|---|---|
| `new blog topic: …` | **no repo write** — main agent runs SEO eval as a chat reply and waits for approval |
| `revise topic: <guidance>` | **no repo write** — main agent re-runs SEO eval in chat with the guidance |
| `reject topic` | **no repo write** — proposal dropped in chat |
| `approve topic` | **first repo write**: create `content/pipeline/active/<slug>/` with `brief.md`, `notes.md`, `status.json` (state `approved_for_draft`), commit + push to `blog-content` |
| `approve draft <slug>` | state → `approved_for_publish` |
| `revise draft <slug>: <guidance>` | append guidance, state → `edited_by_human` |
| `hold <slug>` | state unchanged, `needsHuman=false`, processor leaves it alone |

If slug is omitted and there is exactly one active post, it applies to that one. (`new blog topic`, `revise topic`, `reject topic`, and `approve topic` always refer to the most recent in-chat proposal — no slug needed.)

## Commit conventions

Cron processor commit subjects:

- `pipeline(<slug>): draft post`
- `pipeline(<slug>): detect human edit`
- `pipeline(<slug>): re-evaluate edited draft`
- `pipeline(<slug>): publish to content/blog/`
- `pipeline(<slug>): generate social package`
- `pipeline(<slug>): archive completed workflow`

Main agent (HITL) commit subjects:

- `pipeline(<slug>): create from approved topic` — first commit for a post, after `approve topic` in chat
- `pipeline(<slug>): approve publish`
- `pipeline(<slug>): reject / hold`

## Auto-PR on publish

- **Locked: yes**
- **PR target branch is `dev`. NEVER `master`. NEVER `main`.** Use `gh pr create --base dev --head blog-content`. If `gh pr create` is invoked without `--base dev`, treat it as a bug and abort.
- When `approved_for_publish` is handled, after copying the finalized post into `content/blog/<slug>.md`, the processor opens a PR from `blog-content` into `dev`
- PR title: `blog: publish <slug>`
- PR body: summary + link to `content/blog/<slug>.md`
- If a PR for `blog-content` → `dev` already exists (because multiple posts are in flight), update that PR's description instead of opening a new one
- Jadesse owns the `dev` → `master` merge. The cron processor never touches `master`.

## Archive timing

- **Locked: archive only after `socials_generated`** (current spec)
- Rationale: keeps the full pipeline artifacts together while the social package is still being produced; single clean sweep at the end

## Guardrails

- Never auto-publish without `approved_for_publish`
- Never overwrite `draft.md` after first human edit
- Never modify `content/blog/*` for any post not in `approved_for_publish`
- Never open a PR with `--base master` or `--base main`. Only `--base dev`.
- Never merge the auto-opened PR; creation only
- Never end a tick with a local-only commit. Push or roll back.
- Skip any slug whose `status.json` is malformed; log a warning for the main agent
- If two ticks produce identical output, do not commit
- If push fails (non-fast-forward), re-fetch and retry once; if still failing, stop and announce

## Failure handling

- Any exception: mark `status.lastError` with `{ at, state, message }`, push, surface in next announcement
- Repeated errors (3 consecutive ticks in same state): announce once and stop progressing that slug until cleared

## Extended `status.json` fields

Fields the processor adds on top of the base shape:

```json
{
  "draftChecksum": "sha256:...",
  "lastProcessedAt": "2026-04-24T07:15:00Z",
  "announcedStates": ["awaiting_topic_approval"],
  "lastError": null
}
```

## First-run health check

On first execution the processor should:

1. Verify write access to `origin/blog-content` (dry run push)
2. Verify `content/pipeline/active/` exists
3. Announce once: `cron processor online, sweeping every 15 min`
4. Proceed with the normal loop

## Next implementation step

1. Register the cron via OpenClaw (15 min cadence, Dali Socials topic)
2. Script the per-state handlers as a skill or agent prompt
3. Dry-run against the existing sample slug
4. Promote to live when the dry-run cycle produces expected transitions
