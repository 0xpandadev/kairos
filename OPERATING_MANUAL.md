# KAIROS Operating Manual

This is the manual-first process before automation.

## One Thing KAIROS Does

KAIROS turns raw market, investor, and capital signals into timestamped Kairos Moments that can be reviewed by the future.

## Weekly Process

1. Scan sources.
   - VC/thought: a16z, Sequoia, YC, Founders Fund, Leopold/Situational Awareness.
   - Capital action: ARK trades, 13F filings, Berkshire, SALP, VC rounds, M&A.
   - Fund action: Druckenmiller, Appaloosa, Pershing, Baupost, Tiger, Coatue, and other 13F managers when relevant.
   - Market translation: Goldman, Morgan Stanley, JPMorgan, Citi, Citrini, earnings, guidance, sector moves.
   - Macro/policy: defense budgets, regulation, energy, rates, private credit.

2. Extract raw signals.
   - Write 20-40 one-line observations.
   - Keep source URL, date, and source type.
   - For numeric capital actions, keep fund, ticker, action, shares, market value, weight, and source file URL.
   - Mark source type clearly: official filing, official trade file, official process, secondary tracker, media, or inference.

3. Promote only the best signals.
   - Choose 5-10 that have a real mechanism, capital movement, or future check.
   - Reject pure news unless it changes a thesis.

4. Create Kairos Moments.
   - Use `content/notes/moment-template.md`.
   - Separate facts, inferences, and views.
   - Add a review horizon.
   - Every Moment must have at least one Evidence URL before it appears on the dashboard.

5. Update the dashboard.
   - For the current static MVP, update `app.js`.
   - Keep the forward data shape in `data/moments.json`.
   - Add the weekly note under `content/notes/`.

6. Review old receipts.
   - Every week, inspect moments with 1M/3M/6M review dates.
   - Add Reality Check notes.
   - Mark reads as confirmed, mixed, early, or falsified.

7. Archive the week.
   - Create a Weekly Brief entry.
   - Freeze the week's thesis, capital flow read, map read, watch-next list, and Future Receipt.
   - Do not rewrite old Weekly Briefs silently. Add a Reality Check instead.

8. Roll up the month.
   - At month end, summarize repeated patterns across weekly briefs.
   - Identify which single-week signals became a broader map.
   - Separate confirmed trends, still-early reads, failed reads, and new open questions.

## Quality Gate

Do not publish a Moment unless it answers:

- What changed?
- Why now?
- What URL proves the key fact?
- Who is moving capital?
- What is the consensus?
- What is the non-consensus view?
- What should future-you check?
- What would prove this wrong?

## Current MVP Boundary

KAIROS is a research dashboard, not investment advice.

It can show watchlists and market transmission, but it should avoid direct buy/sell instructions.

## ARK Tracking Rule

ARK data should be split into two layers:

1. Official ARK process and files.
   - Trade Notifications page
   - Latest Trade File
   - daily holdings files

2. Secondary trackers.
   - Cathie's Ark and similar sites can fill historical gaps or UI examples.
   - Mark them as secondary and reconcile before treating them as core facts.

Do not blend ARK trade rows directly into Oracle View. Show the raw rows first, then explain what pattern they may imply.

## Position Change Taxonomy

Use consistent action labels:

- New: position appears after being absent.
- Add: position size, shares, value, or portfolio weight increases.
- Trim: position decreases but remains.
- Exit: position disappears.
- Conviction Build: repeated Add across multiple periods or funds.
- Conviction Break: repeated Trim or Exit across multiple periods or funds.

For ARK, track this daily. For 13F managers, track this quarterly.

## Moment Depth Rule

Every Kairos Moment should include:

- Capital Path: where the money starts and where it may flow next.
- Value Chain: upstream, core beneficiaries, downstream beneficiaries, second-order winners, and pressured incumbents.
- Watchlist: not only obvious tickers, but also suppliers, bottleneck owners, financing rails, and potential losers.
- Evidence URLs: each major read must map back to a fact row.

## Archive Rule

KAIROS should preserve time.

- Weekly Brief: the best read at that point in time.
- Monthly Summary: connects weekly points into a broader map.
- Future Ledger: checks whether the read held up.

Old reads should remain visible even when they are wrong. The credibility comes from timestamps and review, not from pretending every read was perfect.
