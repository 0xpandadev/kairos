# KAIROS fact refresh — 2026-11-28

## New facts

- The official ARK trade workbook advanced through 2026-11-27 and yielded 13 new rows.
- ARKK bought SPCX, CRSP, TWST, BEAM, RXRX, TEM, and NTRA; ARKG bought TWST, BEAM, and ARCT; ARKK sold ILMN and SHOP; ARKQ sold BYDDY.
- The largest disclosed ETF-weight change was the ARKK SPCX buy at 0.1685% of the ETF. The file remains an unofficial, unreconciled, incomplete account of ARK activity.

## Moments updated

- `compute-to-power-bottleneck`: added the 2026-11-27 precision-medicine and SPCX rotation as a selective capital-access signal, without promoting a new Moment.
- `ark-risk-on-rebuild`: added the 13-row cross-theme rotation and kept the interpretation bounded: selective reallocation, not proof of broad risk-on behavior or ARK motive.

## Sources

- [ARK Latest Trade File](https://etfs.ark-funds.com/hubfs/idt/trades/ARK_Trades.xls)
- [ARK Trade Notifications](https://www.ark-funds.com/ark-trade-notifications)
- Existing operating anchors retained in `data/moments.json`: Anthropic IPO disclosures, Cerebras Q3 2026 results, NVIDIA Q3 FY2027 results, and Recursion's FDA-alignment release.

## Unresolved review items

- The ARK workbook is explicitly unreconciled and does not establish motive, valuation, net flow, causality, or broad risk appetite.
- SPCX, ARCT, BEAM, TEM, NTRA, ILMN, SHOP, and BYDDY were kept as capital actions; no new issuer-specific operating or clinical anchor was added in this run.
- The public Worker must be checked separately after GitHub push because a GitHub commit is not proof of live deployment.
