# KAIROS Fact Refresh — 2026-11-05

## What changed

- Official ARK trade workbook advanced through 2026-11-03 and yielded 31 new rows.
- `data/moments.json` now has `updatedAt: 2026-11-03` and 1,014 capital actions, up from 983.
- The new tape is selective: PLTR buys across ARKF, ARKK, ARKQ, ARKW, and ARKX; SHOP buys across ARKF, ARKK, and ARKW; CRCL buys across ARKF, ARKK, and ARKW; ARKG buys in CMPS, KYMR, WGS, SCTX, IAM, ILMN, PACB, and TWST; and BLSH reductions across ARKF, ARKK, and ARKW.
- Updated `ark-risk-on-rebuild`, `stablecoin-rails`, and `agent-led-growth`; no new Moment was promoted because the signal remains mixed and trade motive is unverified.

## Evidence used

- ARK official latest trade file: https://etfs.ark-funds.com/hubfs/idt/trades/ARK_Trades.xls
- ARK trade-notification disclosure: https://www.ark-funds.com/ark-trade-notifications
- Circle Q3 2026 results / SEC exhibit: https://www.sec.gov/Archives/edgar/data/1876042/000187604226000309/finalq3epr-110326.htm
- Shopify Q3 2026 results: https://www.shopify.com/news/shopify-q3-2026-financial-results
- Palantir Q3 2026 business update: https://investors.palantir.com/files/Palantir%20-%20Q3%202026%20Business%20Update.pdf
- PacBio Q3 2026 results: https://www.pacb.com/press_releases/pacbio-announces-third-quarter-2026-financial-results/
- Cathie's Ark / ARK Trade Timing was not used as the source of imported rows; all imported rows remain sourced to the official workbook.

## Unresolved review items

- ARK notifications are explicitly unofficial, unreconciled, incomplete, and exclude IPO/secondary and ETF creation/redemption activity.
- Circle's Q3 operating data supports transaction activity, but reserve-income sensitivity, distribution economics, market share, and the impact of the ARC token presale still need review.
- PacBio's Q3 result shows improving product adoption but continued GAAP loss and lower cash; the PACB buys do not prove clinical or commercial conversion.
- CMPS, KYMR, WGS, SCTX, IAM, ILMN, and TWST buys remain raw capital actions without fresh issuer-specific operating anchors in this run.
- PLTR and SHOP results are strong operating anchors, but do not prove ARK motive, valuation support, or broad market risk appetite.
