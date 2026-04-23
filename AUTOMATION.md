# KAIROS Automation

KAIROS uses Codex Automation as the research and update operator. The public site stays static, while Codex periodically updates the repository data and pushes changes to GitHub. Cloudflare then deploys the latest GitHub commit automatically.

## Operating Model

```text
Sources
  -> Codex Automation research
  -> data/moments.json and weekly notes
  -> git commit and push
  -> Cloudflare Worker auto deploy
  -> public KAIROS site
```

No OpenAI API key is required for this workflow. The analysis runs through Codex Automation, not through a Cloudflare runtime API call.

## Update Cadence

- Fact refresh: every 48 hours
- Weekly report: every Monday morning
- Monthly summary: after the last weekly report of each month

## Files Codex Should Update

- `data/moments.json`: structured source of facts, capital actions, watch universe, and moment data
- `content/notes/YYYY-Www-kairos-weekly.md`: weekly archive report
- `content/notes/YYYY-MM-monthly-summary.md`: monthly rollup
- `app.js`: only when the visible dashboard schema changes

## Fact Refresh Rules

1. Prefer primary or official sources.
2. Keep URLs for every fact.
3. Label source type clearly: official filing, official trade file, investor post, company report, media summary, secondary tracker.
4. Do not copy paywalled report text. Record only allowed metadata, public facts, and the user's own notes.
5. Separate fact, inference, and KAIROS view.
6. When unsure, keep the item as a raw fact rather than promoting it to a Moment.

## Moment Promotion Rules

A raw signal becomes a Kairos Moment only when at least three of these are true:

- Capital is moving: trade, filing, funding, M&A, capex, budget, or earnings revision.
- Narrative is forming: VC, founder, investor, analyst, or policy language is converging.
- Market transmission exists: sector, value chain, or ticker map can be drawn.
- Consensus gap exists: the obvious framing misses a second-order implication.
- Future receipt exists: the claim can be checked in 1M, 3M, or 6M.

## Commit Style

- Fact refresh: `Refresh KAIROS facts YYYY-MM-DD`
- Weekly report: `Add KAIROS weekly report YYYY-Www`
- Monthly summary: `Add KAIROS monthly summary YYYY-MM`
- Dashboard schema change: `Update KAIROS dashboard schema`

## Current Cloudflare Path

GitHub repository:

```text
https://github.com/0xpandadev/kairos
```

Cloudflare deployment:

```text
https://kairos.ju2189ts.workers.dev/
```
