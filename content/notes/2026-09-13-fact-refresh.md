# KAIROS fact refresh — 2026-09-13

## Executive Summary

Objective: maintain evidence-grounded capital signals for KAIROS readers. Test selective allocation versus broad risk appetite. The verified September 11 notifications support selective NTLA buying alongside sales of other genomics-related exposures, not sector-wide accumulation. No new Moment is promoted.

## Evidence by issue

- Published baseline: GitHub main `5f846f572ebdb947516ff52297d735952e0b7fe1`, updatedAt `2026-09-04`, 647 capital actions. The public Worker also served September 4 at preflight.
- [Official ARK workbook](https://etfs.ark-funds.com/hubfs/idt/trades/ARK_Trades.xls): twelve September 11 rows. NTLA buys: ARKG 7,633 shares (0.0049% ETF), ARKK 107,356 (0.0199%). ARKK sells: TWST 46,015 (0.092%), TXG 60,556 (0.0653%), WGS 7,631 (0.0103%), TEM 34,631 (0.032%), BLSH 121,217 (0.0661%), GOOGL 1,784 (0.0095%), SLMT 7,035 (0.0004%). ARKF sold 1,763 SLMT (0.0008%); ARKW sold 2,786 SLMT (0.0006%) and 355 GOOGL (0.0067%).
- Prior unpublished September 8 and 10 rows: 28 retained and rechecked against saved official workbook extractions, matching fund, date, direction, ticker, shares and ETF percentage. Combined delta: 40 rows; total: 687; updatedAt `2026-09-11`.
- [Broadcom September 2 Q3 FY2026 release](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial) was reopened to validate retained evidence: revenue $29.591B, AI semiconductor revenue $16.7B, operating cash flow $14.197B, free cash flow $13.665B. Q4 revenue $34.8B and AI revenue $21.7B remain guidance. These reported results support compute demand but do not prove power scarcity.
- Updated `ark-risk-on-rebuild` and retained the unpublished `compute-to-power-bottleneck` update. Eight existing Moments retained; six unaffected Moments preserved exactly.

Inference: NTLA buying coexists with sales of other genomics-related companies. This is evidence against broad sector accumulation. Funding linkage and manager intent are unknown; clinical success cannot be inferred from trades. Next-month receipts are repeated allocation and company primary disclosures.

## Risk Analysis

- Latest workbook Last-Modified: `2026-09-12 00:00:03 GMT`; SHA-256 `749d60ddcf6e31cf0e2a2135c85650c0de92190849ffba49faf081ae72c71e99`. Download and parser output are archived in the local automation directory. Previous extracts are archived evidence, not fresh historical downloads.
- [ARK notification disclosures](https://www.ark-funds.com/ark-trade-notifications) describe the information as unofficial and unreconciled and exclude IPO and creation/redemption activity. The source type refers to the official publisher. The rolling workbook does not establish a complete historical tape, including September 9 coverage.
- No newly validated clinical or operating anchors for NTLA, SOLQ.U, SCTX, CRSP, BEAM or ACHR in this run. Trades alone do not justify new thematic promotion.
- Bounded Berkshire, a16z, Sequoia and SEC/Situational Awareness discovery selected no additional verified post-September-10 fact. Search results included secondary VC funding leads without inspected primary confirmation; these were not published. This is not exhaustive SEC/VC coverage.

## Action Plan

- Publish only the JSON and this note; this combined draft supersedes earlier unpublished refresh drafts.
- Verify GitHub branch, exact-commit JSON and public Worker after push; publication status is reported separately in the automation handoff.
- Preserve original workspace edits and keep the existing renderer. Validate JSON, all 40 new keys, primary row fields, preservation of 647 old rows and six unaffected Moments, and the staged diff.
