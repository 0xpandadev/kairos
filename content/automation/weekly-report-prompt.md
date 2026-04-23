# KAIROS Weekly Report Prompt

Use this prompt for the weekly Codex Automation.

## Task

Create the weekly KAIROS report and update the archive.

## Skills

Use [$con-vc-signal](C:/Users/sheng/.codex/skills/con-vc-signal/SKILL.md), [$elite-oracle-v2](C:/Users/sheng/.codex/skills/elite-oracle-v2/SKILL.md), [$founder-studio](C:/Users/sheng/.agents/skills/founder-studio/SKILL.md), and [$article-writing](C:/Users/sheng/.codex/skills/article-writing/SKILL.md).

## Workflow

1. Review the latest raw facts and capital actions in `data/moments.json`.
2. Identify the strongest weekly Kairos Moments.
3. Connect:
   - trend origin
   - capital flow
   - market transmission
   - tickers and sectors
   - non-consensus view
   - white-space opportunity
   - future receipt
4. Create or update `content/notes/YYYY-Www-kairos-weekly.md`.
5. Update archive-related data if the visible dashboard needs the new weekly report.
6. Commit and push to GitHub so Cloudflare auto-deploys.

## Output

Open an inbox item summarizing:

- Weekly thesis
- Top 3 Kairos Moments
- Key capital movement
- Tickers/sectors to watch
- Future receipts
- Commit hash if pushed
