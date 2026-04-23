# KAIROS

The moment before consensus.

KAIROS is a light, readable intelligence dashboard for tracking capital signals, investor narratives, market transmission, and future receipts before they become obvious.

It does not try to predict the future. It records the present moments that the future may later prove were decisive.

Kairos is not ordinary time. It is the decisive instant hidden inside ordinary days. This project watches facts, capital, and narratives until a pattern becomes visible before consensus.

## What It Shows

- Kairos Moments: analysis cards for important emerging signals
- Future Ledger: a record of what should be checked later
- Archive: weekly briefs and monthly rollups
- Transmission Map: how ideas, capital, sectors, and tickers connect
- Source Library: the source classes to watch
- Watch Universe: the sources KAIROS watches by cadence and fact type

## Manual Update Flow

1. Read core sources: VC posts, ARK trades, 13F filings, earnings, Wall Street notes, independent research.
2. Extract raw signals.
3. Promote only important signals into Kairos Moments.
4. Add `At The Time`, `Signal`, `Mechanism`, `Capital Path`, `Consensus`, `Non-consensus`, `Watchlist`, `Future Receipt`, and `Falsifier`.
5. Update `app.js` for the live static demo and `data/moments.json` for the future app data shape.
6. Add a weekly Markdown brief under `content/notes/`.
7. Revisit the Future Receipt after 1M, 3M, and 6M.
8. Roll weekly briefs into monthly summaries so old signals become a map instead of a feed.

Use `OPERATING_MANUAL.md` for the weekly workflow and `content/notes/moment-template.md` when writing a new Moment.

## Current MVP

This is a static MVP. Open `index.html` in a browser.

Later, this can become a Next.js app with:

- `data/moments.json` as the data source
- Markdown/MDX weekly briefs
- scheduled research updates
- private/public data separation
- outcome tracking

## Disclaimer

KAIROS is for research and observation. It is not investment advice.
