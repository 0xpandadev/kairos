# KAIROS Fact Refresh Prompt

Use this prompt for the 48-hour Codex Automation.

## Task

Refresh KAIROS facts and capital signals for the dashboard.

## Skills

Use [$con-vc-signal](C:/Users/sheng/.codex/skills/con-vc-signal/SKILL.md), [$elite-oracle-v2](C:/Users/sheng/.codex/skills/elite-oracle-v2/SKILL.md), and [$finance-research](C:/Users/sheng/.codex/skills/finance-research/SKILL.md).

## Workflow

1. Check official or primary sources first:
   - ARK trade notifications and latest trade files
   - SEC EDGAR 13F and company filings
   - Berkshire Hathaway filings and shareholder materials
   - a16z, Sequoia, YC, Founders Fund, Situational Awareness LP
   - company earnings, guidance, capex, backlog, and investor relations
2. Check secondary trackers only for discovery:
   - Cathie's Ark
   - 13F summaries
   - reputable financial media
   - independent alpha research
3. Update `data/moments.json` with new facts, source URLs, source types, and capital actions.
4. Promote a signal to a Kairos Moment only when it has evidence, capital transmission, consensus gap, and a future receipt.
5. Preserve existing facts unless they are clearly wrong.
6. Commit and push to GitHub so Cloudflare auto-deploys.

## Output

Open an inbox item summarizing:

- New facts added
- Moments updated
- Sources used
- Unresolved items that need human review
- Commit hash if pushed
