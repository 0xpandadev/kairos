let kairosMoments = [
  {
    id: "compute-to-power-bottleneck",
    title: "Compute to Power Bottleneck",
    category: "infra",
    score: 88,
    review: "3M",
    atTheTime: "市場はまだAI勝者をGPUとhyperscaler中心に見ている。",
    oracleView:
      "AIの主戦場はモデル性能から、電力・冷却・送電・立地という物理制約へ移り始めている。",
    signal:
      "Hyperscaler CapEx、データセンター建設、電力制約、Wall StreetのAI infrastructure論調、SALP/ARK系の周辺銘柄観測。",
    mechanism:
      "Compute需要がGPUだけでなく、データセンターの建設速度、電力契約、冷却、送電網を制約にしている。",
    moneyPath: ["AI model demand", "compute", "data centers", "power/cooling/grid", "energy infrastructure"],
    valueChain: [
      "Compute: NVDA, AMD, AVGO, TSM, ASML",
      "Data center buildout: EQIX, DLR, CORZ, IREN, APLD",
      "Power/cooling/grid: VRT, ETN, GEV, CEG, BE, SMR",
      "Materials/industrial: CAT, NUE, FCX, MP"
    ],
    consensus: "AI winners are GPUs and hyperscalers.",
    nonConsensus: "二次受益者は、電力・冷却・送電・産業機器かもしれない。",
    whitespace:
      "GPUの隣ではなく、電力契約、冷却、水、送電接続、データセンター立地の制約を可視化する領域。",
    map: [
      { label: "Model demand", size: 96, items: ["OpenAI", "Anthropic", "Meta", "Google"] },
      { label: "Compute", size: 90, items: ["NVDA", "AMD", "AVGO", "TSM", "ASML"] },
      { label: "Data centers", size: 76, items: ["EQIX", "DLR", "CORZ", "IREN", "APLD"] },
      { label: "Power & cooling", size: 68, items: ["VRT", "ETN", "GEV", "CEG", "BE", "SMR"] },
      { label: "White space", size: 42, items: ["PPA intelligence", "grid queue analytics", "cooling risk data"] }
    ],
    watchlist: ["NVDA", "AVGO", "TSM", "ASML", "VRT", "ETN", "GEV", "CEG", "BE", "SMR", "CORZ", "IREN", "APLD"],
    evidence: [
      {
        date: "2026-04-23",
        source: "ARK Trade Notifications",
        type: "official process",
        url: "https://www.ark-funds.com/ark-trade-notifications",
        fact:
          "ARK says it posts portfolio holdings files daily and sends trade information for actively managed ETFs, with exclusions and reconciliation caveats."
      },
      {
        date: "2026-04-23",
        source: "ARK Latest Trade File",
        type: "official file",
        url: "https://etfs.ark-funds.com/hubfs/idt/trades/ARK_Trades.xls",
        fact:
          "Daily ARK trade rows should be imported from the latest trade file with fund, ticker, direction, shares, and notes as raw facts."
      }
    ],
    futureReceipt:
      "3ヶ月後にCapEx、受注残、関連銘柄の相対パフォーマンス、セルサイド論調変化を見る。",
    falsifier: "Hyperscaler CapExが鈍化し、power/cooling backlogが弱まる。"
  },
  {
    id: "agent-led-growth",
    title: "Agent-led Growth",
    category: "distribution",
    score: 82,
    review: "1M",
    atTheTime: "企業はまだSEO/広告/人間向け検索を中心に流通を設計している。",
    oracleView:
      "ChatGPT、Claude、Geminiのようなエージェントが比較・選定・購買の前段を担うと、ブランド発見のルールが変わる。",
    signal:
      "SequoiaのAgent-led Growth発信、AI検索最適化スタートアップ、企業のLLM向け構造化データ対応。",
    mechanism:
      "ユーザーが検索結果を読む前に、AIエージェントが候補を圧縮する。選ばれるためのデータ、評判、引用可能性が新しい流通になる。",
    moneyPath: ["AI assistants", "answer engines", "brand visibility", "agent-readable content", "new marketing stack"],
    valueChain: [
      "Model/interface: MSFT, GOOGL, META, AAPL",
      "Enterprise system of record: CRM, NOW, HUBS, ADBE",
      "Discovery/commerce surfaces: SHOP, AMZN, RDFN, ABNB",
      "Measurement layer: AEO and brand visibility startups"
    ],
    consensus: "AI検索はSEOの延長。",
    nonConsensus: "顧客は人間だけでなく、購買エージェントになる。",
    whitespace:
      "人間向けSEOではなく、AIエージェントに読まれ、引用され、比較されるためのブランド/商品データ層。",
    map: [
      { label: "Interfaces", size: 88, items: ["MSFT", "GOOGL", "META", "AAPL"] },
      { label: "Enterprise data", size: 74, items: ["CRM", "NOW", "HUBS", "ADBE"] },
      { label: "Commerce surfaces", size: 70, items: ["SHOP", "AMZN", "RDFN", "ABNB"] },
      { label: "Measurement", size: 46, items: ["AEO", "agent visibility", "structured reputation"] },
      { label: "White space", size: 38, items: ["agent-readable catalogs", "LLM brand analytics"] }
    ],
    watchlist: ["MSFT", "GOOGL", "META", "AAPL", "CRM", "NOW", "HUBS", "ADBE", "SHOP", "AMZN", "RDFN"],
    evidence: [
      {
        date: "2026-04-23",
        source: "Sequoia Training Data",
        type: "thought source",
        url: "https://sequoiacap.com/podcast/from-seo-to-agent-led-growth-profounds-james-cadwallader/",
        fact:
          "Sequoia published a Training Data episode framing the move from SEO toward agent-led growth."
      },
      {
        date: "2026-04-23",
        source: "ARK Venture Fund 1st Quarter 2026 Update",
        type: "official fund commentary",
        url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
        fact:
          "ARK said Shopify's native support for Model Context Protocol endpoints lets merchants feed product and inventory data directly into the agentic web as AI purchasing agents reshape discovery and buying."
      },
      {
        date: "2026-05-05",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK buying SHOP ($20.7M) on 2026-05-05."
      },
      {
        date: "2026-05-04",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK buying SHOP ($6.6M) on 2026-05-04."
      },
      {
        date: "2026-05-08",
        source: "Sequoia AI Ascent 2026",
        type: "official event recap",
        url: "https://sequoiacap.com/article/ai-ascent-2026/",
        fact:
          "Sequoia's AI Ascent 2026 recap said Sonya Huang declared 2026 the year of agents and described models, tools, and harnesses as the three ingredients that have finally come together."
      },
      {
        date: "2026-05-08",
        source: "Y Combinator Summer 2026 RFS",
        type: "official thesis",
        url: "https://www.ycombinator.com/rfs",
        fact:
          "YC's Summer 2026 Requests for Startups argued the next trillion internet users will be AI agents and said agent-first software should be rebuilt around APIs, MCPs, and CLIs rather than human UIs."
      }
    ],
    futureReceipt:
      "AI検索流入、answer engine optimization、B2B discoveryツールの資金調達を確認する。",
    falsifier: "AIアシスタント経由の購買/比較行動が伸びず、従来SEOが支配を保つ。"
  },
  {
    id: "stablecoin-rails",
    title: "Stablecoin Financial Rails",
    category: "finance",
    score: 79,
    review: "6M",
    atTheTime: "市場はcryptoを価格変動資産として見がちで、決済/送金/財務インフラの視点は薄い。",
    oracleView:
      "Stablecoinは投機商品ではなく、国境を越えるドル決済・企業財務・新興国金融の基盤として再評価され始めている。",
    signal:
      "YC RFS、規制整備、payment/treasury系スタートアップ、上場crypto infrastructure銘柄の収益多様化。",
    mechanism:
      "ドル需要、24/7 settlement、低コスト国際送金、API化された金融機能が、既存銀行/送金ネットワークの摩擦を攻める。",
    moneyPath: ["dollar demand", "stablecoin issuers", "exchanges", "payment APIs", "merchant and treasury workflows"],
    valueChain: [
      "Issuer/exchange: COIN, HOOD",
      "Payment and merchant rails: SQ, PYPL, V, MA",
      "Treasury/custody infrastructure: banks, custodians, tokenization platforms",
      "Risk side: compliance, reserves, regulation"
    ],
    consensus: "Crypto is a risk-on trade.",
    nonConsensus: "Stablecoinは新しい金融配管として、決済/財務SaaSを侵食する。",
    whitespace:
      "投機ではなく、企業財務、越境決済、加盟店精算、コンプライアンスをAPI化する実務レイヤー。",
    map: [
      { label: "Dollar demand", size: 92, items: ["emerging markets", "treasury", "cross-border"] },
      { label: "Issuers/exchanges", size: 76, items: ["COIN", "HOOD"] },
      { label: "Payments", size: 70, items: ["SQ", "PYPL", "V", "MA"] },
      { label: "Compliance/custody", size: 58, items: ["banks", "custodians", "regtech"] },
      { label: "White space", size: 44, items: ["stablecoin treasury ops", "merchant settlement risk"] }
    ],
    watchlist: ["COIN", "HOOD", "SQ", "PYPL", "V", "MA", "MSTR", "CME"],
    evidence: [
      {
        date: "2026-04-23",
        source: "Y Combinator RFS",
        type: "official thesis",
        url: "https://www.ycombinator.com/rfs",
        fact:
          "YC's Spring 2026 Requests for Startups includes stablecoin financial services and AI-native hedge funds among requested startup directions."
      },
      {
        date: "2026-04-23",
        source: "a16z Prediction Markets",
        type: "thought source",
        url: "https://a16z.com/prediction-markets-they-grow-up-so-fast/",
        fact:
          "a16z framed prediction markets as an emerging information and price-discovery layer."
      },
      {
        date: "2026-04-29",
        source: "Cathie's Ark ARKW ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkw/trades",
        fact:
          "Cathie's Ark lists ARKW buying HOOD ($4.0M) and selling ARKB ($4.1M) on 2026-04-29."
      },
      {
        date: "2026-04-29",
        source: "Cathie's Ark ARKF ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkf/trades",
        fact:
          "Cathie's Ark lists ARKF buying HOOD ($2.0M) and selling ARKB ($2.0M) on 2026-04-29."
      },
      {
        date: "2026-04-28",
        source: "Robinhood Q1 2026 Results",
        type: "official company release",
        url: "https://investors.robinhood.com/news-releases/news-release-details/robinhood-reports-first-quarter-2026-results",
        fact:
          "Robinhood said it launched the public testnet for Robinhood Chain, a financial-grade Ethereum Layer 2 built to support tokenized real-world assets, and that the network had already processed more than 100 million transactions."
      },
      {
        date: "2026-05-06",
        source: "Coinbase Investor Relations Events",
        type: "official schedule",
        url: "https://investor.coinbase.com/events-and-presentations/events/event-details/2026/First-Quarter-2026-Earnings-Call-2026-c_9lDnYzu7/default.aspx",
        fact:
          "Coinbase's investor events page lists its First Quarter 2026 Earnings Call scheduled for 2026-05-07."
      }
    ],
    futureReceipt:
      "規制法案、stablecoin supply、決済会社の対応、exchange revenue mixを検証する。",
    falsifier: "規制逆風、準備資産問題、実需決済の停滞。"
  },
  {
    id: "defense-autonomy",
    title: "Defense Autonomy",
    category: "defense",
    score: 77,
    review: "6M",
    atTheTime: "防衛テックは一部の注目スタートアップと政府契約の話として見られている。",
    oracleView:
      "地政学、ドローン戦、低コスト自律システム、調達改革が重なることで、防衛はソフトウェア/ロボティクス市場になり始めている。",
    signal:
      "VCのdefense投資、a16zの海洋/自律システム投資、政府予算、ドローン/センサー企業の受注。",
    mechanism:
      "高価な有人プラットフォームから、安価で消耗可能な自律システムへ需要が広がる。調達スピードも競争力になる。",
    moneyPath: ["geopolitical risk", "defense budgets", "autonomous systems", "sensors", "edge AI"],
    valueChain: [
      "Prime contractors: LMT, RTX, NOC, GD",
      "Autonomy/software: PLTR, KTOS, AVAV",
      "Sensors/components: LHX, TDY, BWXT",
      "Second-order: shipbuilding, energy, secure communications"
    ],
    consensus: "Defense is slow, prime-contractor dominated.",
    nonConsensus: "新しい勝者は、ソフトウェア速度と量産可能な自律ハードを持つ会社かもしれない。",
    whitespace:
      "大型兵器の隣ではなく、安価な自律機、センサー、海洋/宇宙/通信、調達オペレーションのソフト化。",
    map: [
      { label: "Budgets", size: 86, items: ["US/EU/Japan defense", "Ukraine lessons"] },
      { label: "Primes", size: 78, items: ["LMT", "RTX", "NOC", "GD"] },
      { label: "Autonomy", size: 66, items: ["PLTR", "KTOS", "AVAV"] },
      { label: "Sensors/components", size: 62, items: ["LHX", "TDY", "BWXT"] },
      { label: "White space", size: 46, items: ["mission software", "fleet ops", "undersea autonomy"] }
    ],
    watchlist: ["PLTR", "AVAV", "KTOS", "LMT", "RTX", "NOC", "GD", "LHX", "TDY", "BWXT"],
    evidence: [
      {
        date: "2026-04-23",
        source: "a16z Ulysses",
        type: "investment announcement",
        url: "https://a16z.com/announcement/investing-in-ulysses/",
        fact:
          "a16z announced an investment in Ulysses, a company building autonomous underwater systems."
      }
    ],
    futureReceipt:
      "政府契約、量産発表、戦場での利用事例、上場defense techの受注残を追う。",
    falsifier: "調達が従来企業に戻り、新興autonomy企業がスケールしない。"
  },
  {
    id: "ai-native-services",
    title: "AI-native Services",
    category: "services",
    score: 84,
    review: "3M",
    atTheTime: "多くの企業はAIを既存SaaS機能の追加として見ている。",
    oracleView:
      "AIの本当の市場はソフトウェア予算ではなく、人件費、外注費、BPO、導入支援費を直接取りに行くサービスの置換にある。",
    signal:
      "SequoiaのServices: The New Software、AI agency/autopilot企業、会計・法務・医療請求・保険業務の自動化。",
    mechanism:
      "顧客はツールではなく成果を買う。AIが作業を完遂できるなら、SaaS ARRより大きいサービス予算が開く。",
    moneyPath: ["labor budgets", "outsourced services", "AI operators", "vertical workflows", "outcome-based pricing"],
    valueChain: [
      "Incumbent SaaS: NOW, CRM, MSFT, ADBE",
      "Human service incumbents: ACN, ADP, PAYX, FIS",
      "Vertical workflow targets: healthcare, insurance, legal, accounting, recruiting",
      "Pressure side: BPO, IT services, seat-based SaaS"
    ],
    consensus: "Enterprise AI = SaaS copilots.",
    nonConsensus: "AI企業はSaaSではなく、AIで再設計されたサービス会社として巨大化する。",
    whitespace:
      "座席課金SaaSではなく、人間の外注費、BPO、導入支援、専門業務そのものを成果課金で置き換える領域。",
    map: [
      { label: "Labor budgets", size: 94, items: ["BPO", "IT services", "professional services"] },
      { label: "SaaS incumbents", size: 82, items: ["NOW", "CRM", "MSFT", "ADBE"] },
      { label: "Service incumbents", size: 70, items: ["ACN", "ADP", "PAYX", "FIS"] },
      { label: "Vertical workflows", size: 62, items: ["healthcare", "insurance", "legal", "accounting"] },
      { label: "White space", size: 48, items: ["AI operator firms", "outcome-priced vertical services"] }
    ],
    watchlist: ["NOW", "CRM", "MSFT", "ADBE", "ACN", "ADP", "PAYX", "FIS", "EXLS", "WNS"],
    evidence: [
      {
        date: "2026-04-23",
        source: "Sequoia Services: The New Software",
        type: "thought source",
        url: "https://sequoiacap.com/article/services-the-new-software/",
        fact:
          "Sequoia argued that services can become the new software as AI companies sell outcomes rather than tools."
      }
    ],
    futureReceipt:
      "AI-native service企業の粗利、顧客継続率、既存BPO/IT services企業の成長率を確認する。",
    falsifier: "AIが業務完遂できず、copilot止まりで人件費置換が進まない。"
  },
  {
    id: "ark-risk-on-rebuild",
    title: "ARK Risk-on Rebuild",
    category: "fund-flow",
    score: 81,
    review: "1M",
    atTheTime: "ARKの売買は単発ニュースとして消費されがちで、テーマ別の増減としては見られていない。",
    oracleView:
      "ARKはPLTR、HOOD、TSLA、WGSのようなAI/fintech/autonomy/genomics露出を足し、AMD、ROKU、TER、TWSTの一部を削る形で、リスクオンの中身を入れ替えている可能性がある。",
    signal:
      "Cathie's Arkの二次トラッカーでは、PLTR/HOOD/TSLA/WGSのBuy、AMD/ROKU/TER/TWST/BWXTのSellが観測される。公式ARKファイルでの照合が必要。",
    mechanism:
      "同じイノベーションETFの中でも、単なる高成長ではなく、AI意思決定、取引/暗号資産、ロボティクス、ゲノミクスへウェイトを寄せるリバランスが起きる。",
    moneyPath: ["ARK ETF flows", "risk-on innovation", "AI/fintech/autonomy/genomics", "ticker rotation"],
    valueChain: [
      "AI decision layer: PLTR",
      "Retail finance/crypto: HOOD",
      "Autonomy/robotics: TSLA",
      "Genomics adds: WGS, TEM, NTLA, NTRA",
      "Genomics trims: TWST, CDNA, ADPT",
      "Trim side: AMD, TSM, TER, TWST"
    ],
    consensus: "ARK trades are noisy daily flows.",
    nonConsensus: "日次ノイズを束ねると、ARKがどの未来カテゴリを再加速しているか見える。",
    whitespace:
      "単一銘柄ではなく、ETF内のテーマ間ローテーションを追う“イノベーション資本配分レンズ”。",
    map: [
      { label: "ETF capital", size: 62, items: ["ARKK", "ARKW", "ARKQ"] },
      { label: "Adds", size: 78, items: ["PLTR", "HOOD", "TSLA", "WGS", "CRWV", "TOST", "TEM", "NTLA", "NTRA"] },
      { label: "Trims", size: 64, items: ["AMD", "TSM", "TER", "TWST", "CDNA", "ADPT"] },
      { label: "Themes", size: 70, items: ["AI decisions", "fintech", "autonomy", "genomics"] },
      { label: "White space", size: 36, items: ["daily ETF theme delta", "conviction build detector"] }
    ],
    watchlist: ["PLTR", "HOOD", "TSLA", "WGS", "CRWV", "TOST", "TEM", "NTLA", "NTRA", "TSM", "AMD", "TER", "TWST", "CDNA", "ADPT"],
    evidence: [
      {
        date: "2026-04-24",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK selling AMD ($32.7M) and buying AMZN ($32.3M) on 2026-04-24."
      },
      {
        date: "2026-04-24",
        source: "Cathie's Ark ARKW ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkw/trades",
        fact: "Cathie's Ark lists ARKW selling AMD ($25.5M) and buying AMZN ($25.1M) on 2026-04-24."
      },
      {
        date: "2026-04-28",
        source: "Cathie's Ark ARKW ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkw/trades",
        fact: "Cathie's Ark lists ARKW selling ROKU ($4.2M) and buying SPOT ($3.3M) on 2026-04-28."
      },
      {
        date: "2026-04-29",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK buying HOOD ($33.7M) and KTOS ($11.5M) on 2026-04-29."
      },
      {
        date: "2026-04-30",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK selling AMD ($32.2M) and buying GOOG ($16.4M) and META ($16.3M) on 2026-04-30."
      },
      {
        date: "2026-05-01",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact: "Cathie's Ark lists ARKK buying RBLX ($9.9M) and NTLA ($1.9M) and selling AMD ($9.1M) and TWST ($7.3M) on 2026-05-01."
      },
      {
        date: "2026-05-01",
        source: "Cathie's Ark ARKW ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkw/trades",
        fact: "Cathie's Ark lists ARKW buying RBLX ($2.6M) and selling AMD ($2.5M) on 2026-05-01."
      },
      {
        date: "2026-05-01",
        source: "Cathie's Ark ARKF ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkf/trades",
        fact: "Cathie's Ark lists ARKF buying RBLX ($1.3M) and selling AMD ($1.2M) on 2026-05-01."
      },
      {
        date: "2026-05-05",
        source: "Cathie's Ark ARKK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades",
        fact:
          "Cathie's Ark lists ARKK buying SHOP ($20.7M), WGS ($6.8M), and NTLA ($2.9M) while selling CRWV ($10.8M), AMD ($10.2M), and TER ($7.6M) on 2026-05-05."
      },
      {
        date: "2026-05-05",
        source: "Cathie's Ark ARKG ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkg/trades",
        fact: "Cathie's Ark lists ARKG buying WGS ($1.8M) while selling TXG ($818.0K) and TWST ($476.9K) on 2026-05-05."
      },
      {
        date: "2026-05-12",
        source: "Cathie's Ark Combined ARK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/ark-funds-combined/trades",
        fact:
          "Cathie's Ark combined feed lists ARKK and ARKG buying NTRA ($690.9K and $156.0K) and ARKK buying NTLA ($590.4K) while ARKK and ARKG kept selling TWST ($2.9M and $338.7K) plus ARKG sold CDNA ($314.7K) on 2026-05-12."
      },
      {
        date: "2026-05-13",
        source: "Cathie's Ark Combined ARK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/ark-funds-combined/trades",
        fact:
          "Cathie's Ark combined feed lists ARKK and ARKG buying NTRA ($1.4M and $2.1M) while ARKK and ARKG kept selling TWST ($236.4K and $568.4K), and ARKG also sold CDNA ($353.9K) and ADPT ($166.9K) on 2026-05-13."
      },
      {
        date: "2026-05-15",
        source: "Cathie's Ark Combined ARK ETF Trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/ark-funds-combined/trades",
        fact:
          "Cathie's Ark combined feed shows the 2026-05-14 to 2026-05-15 source-of-funds basket broadening: ARKK and ARKW kept trimming TSM ($11.6M, $18.5M, $4.9M, and $5.8M), ARKW kept selling AMD ($5.1M and $5.8M), ARKK kept selling TER ($8.1M and $12.6M) and TWST ($564.1K and $816.3K), and ARKG continued TWST, CDNA, and ADPT trims into 2026-05-15."
      },
      {
        date: "2026-04-25",
        source: "ARK Trade Notifications",
        type: "official process",
        url: "https://www.ark-funds.com/ark-trade-notifications",
        fact: "ARK publishes trade notification files via its Trade Notifications page and provides a latest trade file link."
      }
    ],
    futureReceipt:
      "1ヶ月後にPLTR/HOOD/TSLA/WGSが継続的にAddか、単発リバランスかを確認する。",
    falsifier: "翌週以降に同テーマが反転し、Buyが単発のフロー調整だったと分かる。"
  },
  {
    id: "berkshire-quality-boring-alpha",
    title: "Berkshire Quality Boring Alpha",
    category: "fund-flow",
    score: 78,
    review: "6M",
    atTheTime: "市場はAI/成長株に注意を向け、Berkshireの低頻度資本配分は退屈に見えやすい。",
    oracleView:
      "Berkshireの最新13Fは、AIを完全に避けているというより、Alphabetを抱えつつ、Delta・Macy's・NYT・Lennarを増やし、Chevron・Amazon・Visa・Mastercard・UnitedHealthを引く形で、巨大テック/決済から国内消費・住宅・輸送・信頼メディアへ資本を再配分している。",
    signal:
      "2026-03-31の13FではDAL/M新規、NYT拡大、Alphabet/Lennar保有、CVX縮小、AMZN/V/MA/UNH退出が見え、品質の中身が更新されている。",
    mechanism:
      "短期AIテーマの有無ではなく、キャッシュ創出、国内需要、住宅/輸送の実物循環、信頼メディア、そして選別されたメガキャップへ資本を再配置する。",
    moneyPath: ["Berkshire capital", "domestic demand", "housing/transport/media", "select mega-cap quality", "cash optionality"],
    valueChain: [
      "Selected mega-cap tech: GOOGL, AAPL",
      "Domestic transport/consumer: DAL, M, LEN",
      "Media/data trust: NYT",
      "Trim/exit side: CVX, AMZN, V, MA, UNH",
      "Balance sheet optionality: cash, insurance float"
    ],
    consensus: "Berkshire is old-economy and slow.",
    nonConsensus: "AI熱狂の裏側で、価格決定力とキャッシュフローへの逃避/選別が別のαになる。",
    whitespace:
      "派手な成長ではなく、AI時代にも壊れにくい国内需要、住宅、輸送、信頼メディア、選別されたメガキャップの再評価。",
    map: [
      { label: "Float/cash", size: 90, items: ["insurance float", "cash optionality"] },
      { label: "Adds/new", size: 74, items: ["DAL", "M", "NYT", "LEN", "GOOGL"] },
      { label: "Trims/exits", size: 70, items: ["CVX", "AMZN", "V", "MA", "UNH"] },
      { label: "Themes", size: 66, items: ["quality", "domestic demand", "housing", "transport", "trusted media"] },
      { label: "White space", size: 34, items: ["boring alpha screen", "anti-hype compounders"] }
    ],
    watchlist: ["BRK.B", "GOOGL", "DAL", "M", "NYT", "LEN", "CVX", "AAPL", "AMZN", "V", "MA", "OXY"],
    evidence: [
      {
        date: "2025-12-31",
        source: "13F.info Berkshire",
        type: "13F tracker",
        url: "https://13f.info/manager/0001067983-berkshire-hathaway-inc",
        fact: "13F.info summarizes Berkshire's latest 13F at about $274.16B across 42 holdings."
      },
      {
        date: "2026-02-14",
        source: "TrustFinance Berkshire 13F summary",
        type: "secondary 13F summary",
        url: "https://www.trustfinance.com/blog/berkshire-hathaway-13f-q4-2025-nyt-stake-trims-tech",
        fact: "TrustFinance summarized Berkshire's Q4 2025 13F as adding NYT and trimming large technology positions."
      },
      {
        date: "2026-02-14",
        source: "MarketWatch Berkshire 13F summary",
        type: "secondary 13F summary",
        url: "https://www.marketwatch.com/story/berkshire-returns-to-the-newspaper-business-takes-bigger-bite-of-dominos-pizza-5c4dc5d8",
        fact: "MarketWatch reported Berkshire increased Domino's Pizza and Chevron in Q4 2025."
      }
    ],
    futureReceipt:
      "6ヶ月後にBerkshireの追加/削減が継続するか、AI高成長株との相対リターンと利益耐久性を確認する。",
    falsifier: "次回13FでNYT/CVX/DPZが短期的に反転し、資本配分テーマとして継続しない。"
  },
  {
    id: "consumer-attention-reset",
    title: "Consumer Attention Reset",
    category: "consumer",
    score: 72,
    review: "3M",
    atTheTime: "メディア/広告/消費者接点は、AIやplatform shiftの脇役として見られがち。",
    oracleView:
      "ROKUのTrimとNYTのNewは逆向きの小さなシグナルだが、広告依存のattentionと、信頼/サブスク/データを持つメディアの差が広がっている可能性がある。",
    signal:
      "ARKはROKUをTrimし、BerkshireはNYTを新規保有したと二次13F要約が示す。どちらもAIではないが、消費者の注意と信頼の再配分を示す。",
    mechanism:
      "AI検索/生成コンテンツで広告在庫が増えるほど、信頼ブランド、一次データ、課金関係を持つメディアの価値が相対的に上がる。",
    moneyPath: ["consumer attention", "ad platforms", "trusted subscriptions", "data rights", "AI content licensing"],
    valueChain: [
      "Ad-supported attention: ROKU, SNAP, PINS",
      "Trusted subscriptions: NYT, SPOT, NFLX",
      "Commerce/data: AMZN, SHOP",
      "AI interface pressure: GOOGL, META, MSFT"
    ],
    consensus: "Consumer media is a low-quality ad cycle trade.",
    nonConsensus: "AI時代の希少資産は、信頼、直接課金、一次データ、ライセンス交渉力かもしれない。",
    whitespace:
      "AI検索後のメディア価値を、広告在庫ではなく信頼/サブスク/データ権利で測る分析領域。",
    map: [
      { label: "Attention", size: 84, items: ["video", "search", "social", "streaming"] },
      { label: "Ad exposure", size: 70, items: ["ROKU", "SNAP", "PINS"] },
      { label: "Trust/subscription", size: 62, items: ["NYT", "SPOT", "NFLX"] },
      { label: "AI licensing", size: 42, items: ["content rights", "training data"] },
      { label: "White space", size: 38, items: ["trust premium index", "AI media licensing tracker"] }
    ],
    watchlist: ["NYT", "ROKU", "NFLX", "SPOT", "PINS", "SNAP", "META", "GOOGL"],
    evidence: [
      {
        date: "2026-04-08",
        source: "Cathie's Ark ARKK trades",
        type: "secondary tracker",
        url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
        fact: "Cathie's Ark shows an ARKK Sell row for ROKU on Apr 8, 2026."
      },
      {
        date: "2026-02-14",
        source: "TrustFinance Berkshire 13F summary",
        type: "secondary 13F summary",
        url: "https://www.trustfinance.com/blog/berkshire-hathaway-13f-q4-2025-nyt-stake-trims-tech",
        fact: "TrustFinance summarized Berkshire as initiating a NYT position in Q4 2025."
      }
    ],
    futureReceipt:
      "3ヶ月後にROKU/NYTの相対パフォーマンス、広告指標、AI licensing/データ契約ニュースを見る。",
    falsifier: "広告プラットフォームが回復し、信頼/サブスク銘柄との相対差が広がらない。"
  }
];

const computeToPowerMoment = kairosMoments.find((moment) => moment.id === "compute-to-power-bottleneck");
if (computeToPowerMoment) {
  computeToPowerMoment.evidence = [
    {
      date: "2026-04-23",
      source: "ARK Trade Notifications",
      type: "official process",
      url: "https://www.ark-funds.com/ark-trade-notifications",
      fact: "ARK says it posts portfolio holdings files daily and sends trade information for actively managed ETFs, with exclusions and reconciliation caveats."
    },
    {
      date: "2026-04-23",
      source: "ARK Latest Trade File",
      type: "official file",
      url: "https://etfs.ark-funds.com/hubfs/idt/trades/ARK_Trades.xls",
      fact: "Daily ARK trade rows should be imported from the latest trade file with fund, ticker, direction, shares, and notes as raw facts."
    },
    {
      date: "2026-04-23",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      type: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      fact: "ARK said it initiated a new position in Crusoe and described it as an energy-first AI infrastructure company building scalable computing platforms for next-generation AI workloads."
    }
  ];
}

const agentLedGrowthMoment = kairosMoments.find((moment) => moment.id === "agent-led-growth");
if (agentLedGrowthMoment) {
  agentLedGrowthMoment.evidence = [
    {
      date: "2026-04-23",
      source: "Sequoia Training Data",
      type: "thought source",
      url: "https://sequoiacap.com/podcast/from-seo-to-agent-led-growth-profounds-james-cadwallader/",
      fact: "Sequoia published a Training Data episode framing the move from SEO toward agent-led growth."
    },
    {
      date: "2026-04-23",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      type: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      fact: "ARK said Shopify's native support for Model Context Protocol endpoints lets merchants feed product and inventory data directly into the agentic web as AI purchasing agents reshape discovery and buying."
    },
    {
      date: "2026-05-08",
      source: "Sequoia AI Ascent 2026",
      type: "official event recap",
      url: "https://sequoiacap.com/article/ai-ascent-2026/",
      fact:
        "Sequoia's AI Ascent 2026 recap said Sonya Huang declared 2026 the year of agents and described models, tools, and harnesses as the three ingredients that have finally come together."
    },
    {
      date: "2026-05-08",
      source: "Y Combinator Summer 2026 RFS",
      type: "official thesis",
      url: "https://www.ycombinator.com/rfs",
      fact:
        "YC's Summer 2026 Requests for Startups argued the next trillion internet users will be AI agents and said agent-first software should be rebuilt around APIs, MCPs, and CLIs rather than human UIs."
    }
  ];
}

const defenseAutonomyMoment = kairosMoments.find((moment) => moment.id === "defense-autonomy");
if (defenseAutonomyMoment) {
  defenseAutonomyMoment.evidence = [
    {
      date: "2026-04-23",
      source: "a16z Ulysses",
      type: "investment announcement",
      url: "https://a16z.com/announcement/investing-in-ulysses/",
      fact: "a16z announced an investment in Ulysses, a company building autonomous underwater systems."
    },
    {
      date: "2026-04-09",
      source: "Portal Space Systems",
      type: "company press release",
      url: "https://www.portalsystems.space/news/press-release-portal-space-systems-raises-50-million-series-a-to-advance-rapidly-maneuverable-spacecraft-capabilities",
      fact: "Portal Space Systems announced a $50M Series A round and listed ARK Invest among participating investors."
    },
    {
      date: "2026-04-25",
      source: "ARK Venture Fund",
      type: "official fund statement",
      url: "https://www.ark-funds.com/venture-funding-request-form",
      fact: "ARK's site states the ARK Venture Fund has invested in Portal Space Systems' Series A."
    },
    {
      date: "2026-04-23",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      type: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      fact: "ARK said Kodiak AI doubled its fleet of fully driverless trucks to 20, surpassed 10,700 cumulative paid driverless hours, and won a U.S. Marine Corps contract tied to autonomous expeditionary vehicles."
    },
    {
      date: "2026-05-08",
      source: "Y Combinator Summer 2026 RFS",
      type: "official thesis",
      url: "https://www.ycombinator.com/rfs",
      fact:
        "YC's Summer 2026 Requests for Startups said counter-drone defense is becoming a real-time distributed system problem and explicitly called for startups building the counter-swarm stack."
    }
  ];
}

const arkRiskOnRebuildMoment = kairosMoments.find((moment) => moment.id === "ark-risk-on-rebuild");
if (arkRiskOnRebuildMoment) {
  arkRiskOnRebuildMoment.evidence = [
    {
      date: "2026-04-24",
      source: "Cathie's Ark ARKK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      fact: "Cathie's Ark lists ARKK selling AMD ($32.7M) and buying AMZN ($32.3M) on 2026-04-24."
    },
    {
      date: "2026-04-24",
      source: "Cathie's Ark ARKW ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      fact: "Cathie's Ark lists ARKW selling AMD ($25.5M) and buying AMZN ($25.1M) on 2026-04-24."
    },
    {
      date: "2026-04-28",
      source: "Cathie's Ark ARKW ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      fact: "Cathie's Ark lists ARKW selling ROKU ($4.2M) and buying SPOT ($3.3M) on 2026-04-28."
    },
    {
      date: "2026-04-29",
      source: "Cathie's Ark ARKK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      fact: "Cathie's Ark lists ARKK buying HOOD ($33.7M) and KTOS ($11.5M) on 2026-04-29."
    },
    {
      date: "2026-04-30",
      source: "Cathie's Ark ARKK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      fact: "Cathie's Ark lists ARKK selling AMD ($32.2M) and buying GOOG ($16.4M) and META ($16.3M) on 2026-04-30."
    },
    {
      date: "2026-04-25",
      source: "ARK Trade Notifications",
      type: "official process",
      url: "https://www.ark-funds.com/ark-trade-notifications",
      fact: "ARK publishes trade notification files via its Trade Notifications page and provides a latest trade file link."
    },
    {
      date: "2026-05-05",
      source: "Cathie's Ark ARKK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      fact:
        "Cathie's Ark lists ARKK buying SHOP ($20.7M), WGS ($6.8M), and NTLA ($2.9M) while selling CRWV ($10.8M), AMD ($10.2M), and TER ($7.6M) on 2026-05-05."
    },
    {
      date: "2026-05-05",
      source: "Cathie's Ark ARKG ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkg/trades",
      fact:
        "Cathie's Ark lists ARKG buying WGS ($1.8M) while selling TXG ($818.0K) and TWST ($476.9K) on 2026-05-05."
    },
    {
      date: "2026-05-06",
      source: "Cathie's Ark ARKK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      fact:
        "Cathie's Ark lists ARKK buying TEM ($6.3M) and NTLA ($381.1K) while selling AMD ($7.9M) and TWST ($2.7M) on 2026-05-06."
    },
    {
      date: "2026-05-07",
      source: "Cathie's Ark ARKK / TEM Trade Pages",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      fact:
        "Cathie's Ark lists ARKK buying TEM ($6.7M) and NTLA ($1.4M) while selling TER ($3.3M), AMD ($3.3M), and TWST ($684.6K) on 2026-05-07."
    },
    {
      date: "2026-05-08",
      source: "Cathie's Ark ARKK / Combined Trade Pages",
      type: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-crwv",
      fact:
        "Cathie's Ark lists ARKK and ARKW buying CRWV ($10.4M and $2.8M), ARKW and ARKF buying TOST ($3.6M and $1.7M), and ARKK buying NTLA ($372.2K) while still selling AMD ($9.8M) and TWST ($598.5K) on 2026-05-08."
    },
    {
      date: "2026-05-12",
      source: "Cathie's Ark Combined ARK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      fact:
        "Cathie's Ark combined feed lists ARKK and ARKG buying NTRA ($690.9K and $156.0K) and ARKK buying NTLA ($590.4K) while ARKK and ARKG kept selling TWST ($2.9M and $338.7K) plus ARKG sold CDNA ($314.7K) on 2026-05-12."
    },
    {
      date: "2026-05-13",
      source: "Cathie's Ark Combined ARK ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      fact:
        "Cathie's Ark combined feed lists ARKK and ARKG buying NTRA ($1.4M and $2.1M) while ARKK and ARKG kept selling TWST ($236.4K and $568.4K), and ARKG also sold CDNA ($353.9K) and ADPT ($166.9K) on 2026-05-13."
    }
  ];
}

const stablecoinRailsMoment = kairosMoments.find((moment) => moment.id === "stablecoin-rails");
if (stablecoinRailsMoment) {
  stablecoinRailsMoment.evidence = [
    {
      date: "2026-04-23",
      source: "Y Combinator RFS",
      type: "official thesis",
      url: "https://www.ycombinator.com/rfs",
      fact:
        "YC's Spring 2026 Requests for Startups includes stablecoin financial services and AI-native hedge funds among requested startup directions."
    },
    {
      date: "2026-04-23",
      source: "a16z Prediction Markets",
      type: "thought source",
      url: "https://a16z.com/prediction-markets-they-grow-up-so-fast/",
      fact: "a16z framed prediction markets as an emerging information and price-discovery layer."
    },
    {
      date: "2026-04-29",
      source: "Cathie's Ark ARKW ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      fact: "Cathie's Ark lists ARKW buying HOOD ($4.0M) and selling ARKB ($4.1M) on 2026-04-29."
    },
    {
      date: "2026-04-29",
      source: "Cathie's Ark ARKF ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      fact: "Cathie's Ark lists ARKF buying HOOD ($2.0M) and selling ARKB ($2.0M) on 2026-04-29."
    },
    {
      date: "2026-04-28",
      source: "Robinhood Q1 2026 Results",
      type: "official company release",
      url: "https://investors.robinhood.com/news-releases/news-release-details/robinhood-reports-first-quarter-2026-results",
      fact: "Robinhood said it launched the public testnet for Robinhood Chain, a financial-grade Ethereum Layer 2 built to support tokenized real-world assets, and that the network had already processed more than 100 million transactions."
    },
    {
      date: "2026-05-07",
      source: "Coinbase Q1 2026 Financial Results",
      type: "official company release",
      url: "https://investor.coinbase.com/news/news-details/2026/Coinbase-Q1-Financial-Results-Show-Resilient-Financial-Performance-Driven-by-New-All-Time-High-Crypto-Trading-Volume-Market-Share/default.aspx",
      fact:
        "Coinbase said Base processed 62% of total global onchain stablecoin transaction volume, more than 90% of onchain agentic stablecoin transaction volume occurred on Base, and more than 100 million payments had been processed via x402."
    }
  ];
}

const aiNativeServicesMoment = kairosMoments.find((moment) => moment.id === "ai-native-services");
if (aiNativeServicesMoment) {
  aiNativeServicesMoment.evidence = [
    {
      date: "2026-04-23",
      source: "Sequoia Services: The New Software",
      type: "thought source",
      url: "https://sequoiacap.com/article/services-the-new-software/",
      fact: "Sequoia argued that services can become the new software as AI companies sell outcomes rather than tools."
    },
    {
      date: "2026-04-15",
      source: "Sequoia Auctor",
      type: "funding announcement",
      url: "https://sequoiacap.com/article/partnering-with-auctor/",
      fact: "Sequoia wrote that for every dollar spent on software, six are spent on services, with more than $500 billion in annual labor spend across software implementation consultants."
    },
    {
      date: "2026-05-08",
      source: "Y Combinator Summer 2026 RFS",
      type: "official thesis",
      url: "https://www.ycombinator.com/rfs",
      fact:
        "YC's Summer 2026 Requests for Startups said the next step is AI-native companies that do not sell software but instead sell the service, targeting a services spend many times larger than software."
    }
  ];
}

const berkshireQualityMoment = kairosMoments.find((moment) => moment.id === "berkshire-quality-boring-alpha");
if (berkshireQualityMoment) {
  berkshireQualityMoment.evidence = [
    {
      date: "2026-02-17",
      source: "SEC EDGAR 13F-HR (Berkshire Hathaway Inc)",
      type: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526054580/xslForm13F_X02/50240.xml",
      fact: "Berkshire's 2025-12-31 13F showed a new New York Times position plus Chevron and Domino's additions, while Apple and Amazon remained in the portfolio."
    },
    {
      date: "2026-05-15",
      source: "SEC EDGAR 13F-HR (Berkshire Hathaway Inc)",
      type: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      fact:
        "Comparing Berkshire's 2026-03-31 13F with its 2025-12-31 filing shows new Delta Air Lines and Macy's positions, a much larger New York Times stake, disclosed Alphabet holdings, and the absence of Amazon, Visa, Mastercard, and UnitedHealth from the March 31 table."
    },
    {
      date: "2026-05-02",
      source: "Berkshire Hathaway Form 10-Q",
      type: "official filing",
      url: "https://www.berkshirehathaway.com/qtrly/1stqtr26.pdf",
      fact: "Berkshire's Q1 2026 Form 10-Q listed $51.5B of cash and cash equivalents, $339.3B of U.S. Treasury Bills, and $17.2B of payables for unsettled Treasury Bill purchases at March 31, 2026."
    }
  ];
}

const consumerAttentionMoment = kairosMoments.find((moment) => moment.id === "consumer-attention-reset");
if (consumerAttentionMoment) {
  consumerAttentionMoment.evidence = [
    {
      date: "2026-04-17",
      source: "Cathie's Ark ARKW ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      fact: "Cathie's Ark lists ARKW buying NFLX ($2.5M) and selling ROKU ($1.2M on 2026-04-08 and $1.1M on 2026-04-07)."
    },
    {
      date: "2026-04-28",
      source: "Cathie's Ark ARKW ETF Trades",
      type: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      fact: "Cathie's Ark lists ARKW selling ROKU ($4.2M) and buying SPOT ($3.3M) on 2026-04-28."
    },
    {
      date: "2026-04-22",
      source: "SeventySix Capital / Lucra press release",
      type: "portfolio news / press release",
      url: "https://www.seventysixcapital.com/portfolio-news/lucra-raises-20-million",
      fact: "Lucra announced a $20M financing round led by the ARK Invest Venture Fund."
    },
    {
      date: "2026-04-23",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      type: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      fact: "ARK wrote in its ARK Venture Fund Q1 2026 update that it added to an existing position in Lucra."
    },
    {
      date: "2026-02-17",
      source: "SEC EDGAR 13F-HR (Berkshire Hathaway Inc)",
      type: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526054580/xslForm13F_X02/50240.xml",
      fact: "Berkshire's Form 13F information table for period ended 2025-12-31 includes a NYT line item of 5,071,467 shares."
    }
  ];
}

const state = {
  filter: "all",
  language: localStorage.getItem("kairosLanguage") || "ja",
  moments: kairosMoments,
  selectedBrief: "2026-W23"
};

const translations = {
  ja: {
    "nav.facts": "Facts",
    "nav.watch": "Watch",
    "nav.moments": "Moments",
    "nav.ledger": "Future Ledger",
    "nav.transmission": "Transmission",
    "nav.sources": "Sources",
    "nav.archive": "Archive",
    "hero.eyebrow": "The moment before consensus",
    "hero.title": "未来があとから証明する、現在の分岐点を記録する。",
    "hero.text":
      "KAIROSは、世界のファクト、資本の流れ、投資家の発信、市場ナラティブをつなぎ、数カ月後に「なぜあの時点で見えていたのか」とわかるシグナルを残す俯瞰型ダッシュボードです。",
    "hero.secondary":
      "ただ流れる時間ではなく、普通のニュースの中に隠れた、歴史が向きを変える一瞬を見る。KAIROSは、その一瞬をコンセンサスになる前にファクトと資本の形で捉えます。",
    "hero.thisWeek": "This Week",
    "metric.moments": "Moments",
    "metric.avgScore": "Avg Score",
    "metric.review": "Review",
    "cockpit.eyebrow": "Oracle Cockpit",
    "cockpit.title": "今見るべき Kairos Moments",
    "cockpit.text": "毎週変わるテーマを、同じ分析フォーマットで比較します。",
    "cockpit.strongest": "Strongest Signal",
    "cockpit.gap": "Consensus Gap",
    "cockpit.nextReview": "Next Review",
    "cockpit.futureReceipt": "Future Receipt",
    "cockpit.futureText": "各Momentを1カ月・3カ月・6カ月後に検証し、Then vs Nowでログ化します。",
    "facts.eyebrow": "Raw Fact Tracker",
    "facts.title": "分析の手前にある事実ベース",
    "facts.text": "Kairos Momentの根拠になるURL、発信、ファイリング、売買ファイル、決算、数字を分層して表示します。",
    "facts.note": "Fact -> Inference -> View",
    "table.date": "Date",
    "table.source": "Source",
    "table.type": "Type",
    "table.fact": "Fact",
    "table.url": "URL",
    "capital.title": "Capital Action Tape",
    "capital.text": "ファンドからテーマ、テーマから銘柄へ、資本がどこに流れているかを見ます。テーマをクリックすると詳細行を展開します。",
    "watch.eyebrow": "Watch Universe",
    "watch.title": "資本シグナルを探す観測ユニバース",
    "watch.text": "日次売買、13F、投資家レター、VC発信、Wall Streetレポート、決算、政策を別々の周期で追い、Factとして蓄積します。",
    "moments.eyebrow": "Moments",
    "moments.title": "Kairos Moment Cards",
    "moments.text": "テーマ名は固定ではありません。日次・週次のシグナルに応じて入れ替わります。",
    "filter.all": "All",
    "filter.infra": "Infra",
    "filter.distribution": "Distribution",
    "filter.finance": "Finance",
    "filter.services": "Services",
    "filter.fundFlow": "Fund Flow",
    "filter.consumer": "Consumer",
    "filter.defense": "Defense",
    "ledger.eyebrow": "Future Ledger",
    "ledger.title": "未来から検証するための台帳",
    "ledger.text": "KAIROSは予言ではなく、検証可能な観測ログです。Momentを固定し、あとからReality Checkで見返します。",
    "transmission.eyebrow": "Transmission Map",
    "transmission.title": "資本シグナルが市場へ伝播する地図",
    "transmission.text": "各Momentをバリューチェーンで分解し、ボリューム感とホワイトスペースを同時に見ます。",
    "sources.eyebrow": "Source Library",
    "sources.title": "観測するソース",
    "sources.text": "常時ウォッチとテーマ別ウォッチを分け、ノイズを減らします。",
    "sources.thought": "Thought Leaders",
    "sources.capital": "Capital Actions",
    "sources.market": "Market Translation",
    "archive.eyebrow": "Archive",
    "archive.title": "週次レポートと月次サマリー",
    "archive.text": "毎週の判断を固定し、月次で点と面をつなぎ直します。",
    "archive.note": "Weekly -> Monthly -> Reality Check",
    "archive.weekly": "Weekly Briefs",
    "footer.text": "KAIROS is a research dashboard, not investment advice. Built for observation, synthesis, and future review.",
    "ui.open": "Open",
    "ui.openSource": "Open source",
    "ui.actions": "actions",
    "ui.latest": "latest",
    "ui.tickerDetail": "Ticker detail",
    "ui.noRows": "No detailed rows yet.",
    "ui.review": "review",
    "ui.evidenceLinks": "evidence links",
    "ui.statusPending": "Status: pending reality check",
    "ui.whiteSpace": "White space",
    "detail.atTheTime": "At The Time",
    "detail.signal": "Signal",
    "detail.mechanism": "Mechanism",
    "detail.capitalPath": "Capital Path",
    "detail.valueChain": "Value Chain",
    "detail.evidence": "Evidence URLs",
    "detail.consensus": "Market Consensus",
    "detail.nonConsensus": "Non-consensus View",
    "detail.watchlist": "Watchlist",
    "detail.futureReceipt": "Future Receipt",
    "detail.falsifier": "Falsifier",
    "archive.moments": "Moments",
    "archive.capitalFlow": "Capital Flow",
    "archive.pointToMap": "Point to Map",
    "archive.watchNext": "Watch Next",
    "archive.monthlyQuestions": "Monthly questions"
  },
  zh: {
    "nav.facts": "事实",
    "nav.watch": "观察",
    "nav.moments": "时刻",
    "nav.ledger": "未来账本",
    "nav.transmission": "传导",
    "nav.sources": "来源",
    "nav.archive": "归档",
    "hero.eyebrow": "共识之前的一瞬",
    "hero.title": "记录未来会回头证明的当下分岔点。",
    "hero.text":
      "KAIROS把事实、资金流、投资人叙事和市场反应连成一张图，留下几个月后仍能回看和验证的早期信号。",
    "hero.secondary":
      "它看的不是普通时间，而是新闻流里隐藏的转向时刻。KAIROS在共识形成前，用事实和资本痕迹捕捉这一瞬。",
    "hero.thisWeek": "本周",
    "metric.moments": "时刻",
    "metric.avgScore": "均分",
    "metric.review": "复盘",
    "cockpit.eyebrow": "观察舱",
    "cockpit.title": "现在值得看的 Kairos Moments",
    "cockpit.text": "用同一套分析格式，比较每周变化的主题。",
    "cockpit.strongest": "最强信号",
    "cockpit.gap": "共识差",
    "cockpit.nextReview": "下次复盘",
    "cockpit.futureReceipt": "未来回执",
    "cockpit.futureText": "每个Moment会在1个月、3个月、6个月后复盘，并记录Then vs Now。",
    "facts.eyebrow": "原始事实追踪",
    "facts.title": "分析之前的事实底座",
    "facts.text": "展示支撑Kairos Moment的URL、发言、备案、交易文件、财报和数字。",
    "facts.note": "Fact -> Inference -> View",
    "table.date": "日期",
    "table.source": "来源",
    "table.type": "类型",
    "table.fact": "事实",
    "table.url": "链接",
    "capital.title": "Capital Action Tape",
    "capital.text": "从基金到主题、从主题到股票，观察资本正在流向哪里。点击主题可展开明细。",
    "watch.eyebrow": "观察宇宙",
    "watch.title": "寻找资本信号的观察范围",
    "watch.text": "按不同节奏追踪日交易、13F、投资人信件、VC观点、华尔街报告、财报和政策，并沉淀为事实。",
    "moments.eyebrow": "时刻",
    "moments.title": "Kairos Moment Cards",
    "moments.text": "主题不是固定栏目，会随着日度和周度信号更新。",
    "filter.all": "全部",
    "filter.infra": "基础设施",
    "filter.distribution": "分发",
    "filter.finance": "金融",
    "filter.services": "服务",
    "filter.fundFlow": "资金流",
    "filter.consumer": "消费",
    "filter.defense": "防务",
    "ledger.eyebrow": "未来账本",
    "ledger.title": "为未来验证而保留的账本",
    "ledger.text": "KAIROS不是预言，而是可验证的观察日志。先固定Moment，再从未来回看。",
    "transmission.eyebrow": "传导地图",
    "transmission.title": "资本信号如何传导到市场",
    "transmission.text": "把每个Moment拆成价值链，同时看体量感和空白机会。",
    "sources.eyebrow": "来源库",
    "sources.title": "要观察的来源",
    "sources.text": "把常态观察和主题观察分开，降低噪音。",
    "sources.thought": "思想源头",
    "sources.capital": "资本动作",
    "sources.market": "市场翻译",
    "archive.eyebrow": "归档",
    "archive.title": "周报与月度摘要",
    "archive.text": "固定每周判断，再按月把点和面重新连接。",
    "archive.note": "Weekly -> Monthly -> Reality Check",
    "archive.weekly": "周度简报",
    "footer.text": "KAIROS是研究仪表盘，不构成投资建议。它用于观察、综合与未来复盘。",
    "ui.open": "打开",
    "ui.openSource": "打开来源",
    "ui.actions": "动作",
    "ui.latest": "最新",
    "ui.tickerDetail": "股票明细",
    "ui.noRows": "暂无明细。",
    "ui.review": "复盘",
    "ui.evidenceLinks": "证据链接",
    "ui.statusPending": "状态：等待未来复盘",
    "ui.whiteSpace": "空白机会",
    "detail.atTheTime": "当时市场怎么看",
    "detail.signal": "信号",
    "detail.mechanism": "机制",
    "detail.capitalPath": "资本路径",
    "detail.valueChain": "价值链",
    "detail.evidence": "证据URL",
    "detail.consensus": "市场共识",
    "detail.nonConsensus": "非共识观点",
    "detail.watchlist": "观察名单",
    "detail.futureReceipt": "未来回执",
    "detail.falsifier": "证伪条件",
    "archive.moments": "时刻",
    "archive.capitalFlow": "资金流",
    "archive.pointToMap": "从点到图",
    "archive.watchNext": "下一步观察",
    "archive.monthlyQuestions": "月度问题"
  },
  en: {
    "nav.facts": "Facts",
    "nav.watch": "Watch",
    "nav.moments": "Moments",
    "nav.ledger": "Future Ledger",
    "nav.transmission": "Transmission",
    "nav.sources": "Sources",
    "nav.archive": "Archive",
    "hero.eyebrow": "The moment before consensus",
    "hero.title": "Record the inflection points the future will later prove.",
    "hero.text":
      "KAIROS connects facts, capital flows, investor narratives, and market reactions into a dashboard of signals that can still be reviewed months later.",
    "hero.secondary":
      "It is not about more news. It is about the precise moment hidden inside ordinary news, before it hardens into consensus.",
    "hero.thisWeek": "This Week",
    "metric.moments": "Moments",
    "metric.avgScore": "Avg Score",
    "metric.review": "Review",
    "cockpit.eyebrow": "Oracle Cockpit",
    "cockpit.title": "Kairos Moments to watch now",
    "cockpit.text": "Compare weekly themes with the same analytical format.",
    "cockpit.strongest": "Strongest Signal",
    "cockpit.gap": "Consensus Gap",
    "cockpit.nextReview": "Next Review",
    "cockpit.futureReceipt": "Future Receipt",
    "cockpit.futureText": "Each Moment is reviewed after 1, 3, and 6 months, then logged as Then vs Now.",
    "facts.eyebrow": "Raw Fact Tracker",
    "facts.title": "The factual base before analysis",
    "facts.text": "Track the URLs, filings, trade files, earnings, statements, and numbers behind every Kairos Moment.",
    "facts.note": "Fact -> Inference -> View",
    "table.date": "Date",
    "table.source": "Source",
    "table.type": "Type",
    "table.fact": "Fact",
    "table.url": "URL",
    "capital.title": "Capital Action Tape",
    "capital.text": "See where capital moves from manager to theme to ticker. Click a theme to expand detailed rows.",
    "watch.eyebrow": "Watch Universe",
    "watch.title": "Observation universe for capital signals",
    "watch.text": "Track daily trades, 13F filings, investor letters, VC narratives, Wall Street notes, earnings, and policy on their natural cadence.",
    "moments.eyebrow": "Moments",
    "moments.title": "Kairos Moment Cards",
    "moments.text": "Themes are not fixed. They change as daily and weekly signals change.",
    "filter.all": "All",
    "filter.infra": "Infra",
    "filter.distribution": "Distribution",
    "filter.finance": "Finance",
    "filter.services": "Services",
    "filter.fundFlow": "Fund Flow",
    "filter.consumer": "Consumer",
    "filter.defense": "Defense",
    "ledger.eyebrow": "Future Ledger",
    "ledger.title": "A ledger for future verification",
    "ledger.text": "KAIROS is not prophecy. It is a verifiable observation log that can be checked later.",
    "transmission.eyebrow": "Transmission Map",
    "transmission.title": "How capital signals transmit into markets",
    "transmission.text": "Break each Moment into a value chain, with size, linkage, and white-space opportunities visible together.",
    "sources.eyebrow": "Source Library",
    "sources.title": "Sources to watch",
    "sources.text": "Separate always-on watchlists from theme-specific tracking to reduce noise.",
    "sources.thought": "Thought Leaders",
    "sources.capital": "Capital Actions",
    "sources.market": "Market Translation",
    "archive.eyebrow": "Archive",
    "archive.title": "Weekly reports and monthly summaries",
    "archive.text": "Freeze weekly judgment, then reconnect the dots monthly.",
    "archive.note": "Weekly -> Monthly -> Reality Check",
    "archive.weekly": "Weekly Briefs",
    "footer.text": "KAIROS is a research dashboard, not investment advice. Built for observation, synthesis, and future review.",
    "ui.open": "Open",
    "ui.openSource": "Open source",
    "ui.actions": "actions",
    "ui.latest": "latest",
    "ui.tickerDetail": "Ticker detail",
    "ui.noRows": "No detailed rows yet.",
    "ui.review": "review",
    "ui.evidenceLinks": "evidence links",
    "ui.statusPending": "Status: pending reality check",
    "ui.whiteSpace": "White space",
    "detail.atTheTime": "At The Time",
    "detail.signal": "Signal",
    "detail.mechanism": "Mechanism",
    "detail.capitalPath": "Capital Path",
    "detail.valueChain": "Value Chain",
    "detail.evidence": "Evidence URLs",
    "detail.consensus": "Market Consensus",
    "detail.nonConsensus": "Non-consensus View",
    "detail.watchlist": "Watchlist",
    "detail.futureReceipt": "Future Receipt",
    "detail.falsifier": "Falsifier",
    "archive.moments": "Moments",
    "archive.capitalFlow": "Capital Flow",
    "archive.pointToMap": "Point to Map",
    "archive.watchNext": "Watch Next",
    "archive.monthlyQuestions": "Monthly questions"
  }
};

const momentCopy = {
  "compute-to-power-bottleneck": {
    ja: {
      oracleView: "AIの主戦場はモデル性能だけでなく、電力・冷却・送電・立地という物理制約へ移っています。",
      signal: "Hyperscaler CapEx、データセンター建設、電力制約、AI infrastructureへのWall Street再評価が同時に走っています。",
      nonConsensus: "二次受益者はGPUだけでなく、電力、冷却、送電、産業機器に広がる可能性があります。",
      whitespace: "PPA、送電待ち、冷却リスク、立地制約を可視化する分析レイヤーが空白です。",
      futureReceipt: "3カ月後、CapEx、受注残、電力・冷却関連銘柄の相対パフォーマンスで検証します。"
    },
    zh: {
      oracleView: "AI主战场正在从模型性能，转向电力、冷却、输电和选址这些物理约束。",
      signal: "Hyperscaler CapEx、数据中心建设、电力约束和华尔街对AI基础设施的重估正在同时出现。",
      nonConsensus: "第二层受益者不只GPU，还可能扩散到电力、冷却、输电和工业设备。",
      whitespace: "PPA、并网排队、冷却风险和选址约束的数据层仍是空白。",
      futureReceipt: "3个月后，用CapEx、订单积压和电力冷却相关股票的相对表现来复盘。"
    },
    en: {
      oracleView: "The AI battlefield is moving from model performance to physical constraints: power, cooling, grid, and location.",
      signal: "Hyperscaler CapEx, data-center buildout, power bottlenecks, and Wall Street AI-infrastructure narratives are converging.",
      nonConsensus: "The second-order winners may extend beyond GPUs into power, cooling, grid, and industrial equipment.",
      whitespace: "A data layer for PPA intelligence, grid queues, cooling risk, and site constraints remains underbuilt.",
      futureReceipt: "Review CapEx, backlog, and relative performance of power/cooling names in three months."
    }
  },
  "agent-led-growth": {
    ja: {
      oracleView: "検索の次は、AIエージェントが比較・選定・購買の前段を握る世界です。",
      signal: "SequoiaのAgent-led Growth、AI検索最適化、企業のLLM向け構造化データ対応がつながっています。",
      nonConsensus: "顧客獲得は人間向けSEOから、購買エージェントに読まれるブランド・商品データへ移ります。",
      whitespace: "LLMに引用され、比較され、選ばれるためのブランド可視化と商品データ運用が空白です。",
      futureReceipt: "AI検索流入、answer engine optimization、B2B discoveryツールの資金調達を確認します。"
    },
    zh: {
      oracleView: "搜索之后，AI代理会掌握比较、筛选和购买前的关键入口。",
      signal: "Sequoia的Agent-led Growth、AI搜索优化和企业面向LLM的结构化数据正在连接。",
      nonConsensus: "获客会从面向人的SEO，转向能被购买代理读取的品牌与商品数据。",
      whitespace: "让品牌被LLM引用、比较和选择的可见性与商品数据运营仍是空白。",
      futureReceipt: "观察AI搜索流量、AEO工具和B2B discovery工具的融资与采用。"
    },
    en: {
      oracleView: "After search, AI agents may control the pre-purchase layer of comparison, selection, and buying.",
      signal: "Sequoia's agent-led growth framing, AI search optimization, and enterprise LLM data work are lining up.",
      nonConsensus: "Customer acquisition shifts from human SEO to brand and product data readable by buying agents.",
      whitespace: "Brand visibility, citation tracking, and product data ops for LLM comparison remain open.",
      futureReceipt: "Track AI-search traffic, AEO tooling, and funding for B2B discovery infrastructure."
    }
  },
  "stablecoin-rails": {
    ja: {
      oracleView: "Stablecoinは投機商品ではなく、国境を越えるドル決済と企業財務の新しい基盤として再評価されています。",
      signal: "YC RFS、規制整備、payment/treasury系スタートアップ、上場crypto infraの収益多様化が同時に出ています。",
      nonConsensus: "Stablecoinはリスクオン資産ではなく、決済・財務SaaSを侵食する金融配管です。",
      whitespace: "企業財務、加盟店精算、国際決済、コンプライアンスをAPI化する実務レイヤーが狙い目です。",
      futureReceipt: "規制法案、stablecoin supply、決済会社の対応、exchange revenue mixで検証します。"
    },
    zh: {
      oracleView: "Stablecoin正在从投机资产，变成跨境美元结算和企业财务的新基础设施。",
      signal: "YC RFS、监管推进、payment/treasury创业公司和上市crypto infra收入多元化同时出现。",
      nonConsensus: "Stablecoin不是单纯风险资产，而是会侵蚀支付和财务SaaS的金融管道。",
      whitespace: "企业财务、商户结算、跨境支付和合规API化的实务层值得关注。",
      futureReceipt: "用监管进展、stablecoin supply、支付公司动作和交易所收入结构来复盘。"
    },
    en: {
      oracleView: "Stablecoins are being revalued as cross-border dollar settlement and corporate treasury infrastructure.",
      signal: "YC RFS, regulatory progress, payment/treasury startups, and public crypto-infra revenue mix are converging.",
      nonConsensus: "Stablecoins are not just risk-on assets; they are financial rails that can eat payment and treasury SaaS.",
      whitespace: "Enterprise treasury, merchant settlement, cross-border payment, and compliance APIs are the practical layer.",
      futureReceipt: "Review regulation, stablecoin supply, payment-company adoption, and exchange revenue mix."
    }
  },
  "defense-autonomy": {
    ja: {
      oracleView: "防衛は大型装備だけでなく、安価で量産可能な自律システムとミッションソフトウェアの市場になり始めています。",
      signal: "VCのdefense投資、a16zの海洋自律システム投資、政府予算、ドローン・センサー企業の受注がつながります。",
      nonConsensus: "勝者は従来プライムだけでなく、ソフトウェア速度と量産可能な自律ハードを持つ企業かもしれません。",
      whitespace: "ミッションソフト、群制御、センサー統合、調達オペレーションのソフト化に空白があります。",
      futureReceipt: "政府契約、量産発表、実戦利用、defense tech上場銘柄の受注残を追います。"
    },
    zh: {
      oracleView: "防务正在从大型装备，扩展到可低成本量产的自治系统和任务软件。",
      signal: "VC防务投资、a16z海洋自治系统、政府预算和无人机传感器订单正在连接。",
      nonConsensus: "赢家不一定只有传统主承包商，也可能是具备软件速度和可量产自治硬件的公司。",
      whitespace: "任务软件、集群控制、传感器整合和采购运营软件化存在空白。",
      futureReceipt: "追踪政府合同、量产公告、实战使用和defense tech公司的订单积压。"
    },
    en: {
      oracleView: "Defense is becoming a market for low-cost autonomous systems and mission software, not only large platforms.",
      signal: "VC defense funding, a16z underwater autonomy, defense budgets, and drone/sensor orders are connected.",
      nonConsensus: "Winners may include software-speed autonomy companies, not only traditional primes.",
      whitespace: "Mission software, swarm control, sensor integration, and procurement operations remain underbuilt.",
      futureReceipt: "Track contracts, production announcements, battlefield use, and defense-tech backlog."
    }
  },
  "ai-native-services": {
    ja: {
      oracleView: "AIの本当の市場はSaaS席数ではなく、人件費・外注費・BPOを成果課金で置き換えるサービス再設計です。",
      signal: "SequoiaのServices: The New Software、AI agency/autopilot、会計・法務・医療・保険業務の自動化が並んでいます。",
      nonConsensus: "AI企業はSaaS会社ではなく、AIで再設計されたサービス会社として巨大化する可能性があります。",
      whitespace: "人間の外注費、専門業務、BPOを成果課金で置き換える縦型AIサービスが空白です。",
      futureReceipt: "AI-native service企業の粗利、継続率、従来BPO/IT servicesの成長率を見ます。"
    },
    zh: {
      oracleView: "AI真正的大市场不只是SaaS席位，而是用结果付费重构人工、外包和BPO预算。",
      signal: "Sequoia的Services: The New Software、AI agency/autopilot和会计、法律、医疗、保险自动化同时出现。",
      nonConsensus: "AI公司可能不是SaaS公司，而是被AI重构的服务公司。",
      whitespace: "用结果付费替代人工外包、专业流程和BPO的垂直AI服务仍是空白。",
      futureReceipt: "观察AI-native service公司的毛利、留存，以及传统BPO/IT services增速变化。"
    },
    en: {
      oracleView: "The real AI market may be labor, outsourcing, and BPO budgets rebuilt around outcome pricing.",
      signal: "Sequoia's services thesis, AI agencies/autopilots, and vertical workflow automation are moving together.",
      nonConsensus: "AI winners may look less like SaaS vendors and more like AI-rebuilt service companies.",
      whitespace: "Outcome-priced vertical AI services that replace outsourcing and BPO remain open.",
      futureReceipt: "Review gross margins, retention, and growth pressure on traditional BPO/IT-services firms."
    }
  },
  "ark-risk-on-rebuild": {
    ja: {
      oracleView: "ARKはAI意思決定、fintech、自律、genomicsへ足し、AMD/ROKU/TER/TWSTなどを削る形でリスクオンの中身を入れ替えている可能性があります。",
      signal: "PLTR、HOOD、TSLA、WGSのBuyと、AMD、ROKU、TER、TWST、BWXTのSellを二次トラッカーで観測。公式ファイルで照合します。",
      nonConsensus: "単なるグロース買いではなく、イノベーションETF内のテーマ選別と資本再配分です。",
      whitespace: "日次トレードをテーマ別に束ね、何を足して何を捨てたかを自動で読む層が価値になります。",
      futureReceipt: "1カ月後、ARKのAddが継続したか、単発だったかを公式ファイルで検証します。"
    },
    zh: {
      oracleView: "ARK可能正在把风险偏好从泛成长，重新配置到AI决策、fintech、自治和genomics，同时削减部分平台和半导体仓位。",
      signal: "二级追踪器显示PLTR、HOOD、TSLA、WGS买入，以及AMD、ROKU、TER、TWST、BWXT卖出，需要用官方文件核对。",
      nonConsensus: "这不是简单买成长，而是创新ETF内部的主题筛选和资本再配置。",
      whitespace: "把日交易自动归因到主题，读出增加什么、放弃什么，是有价值的数据层。",
      futureReceipt: "1个月后，用ARK官方文件检查这些Add是持续动作还是一次性交易。"
    },
    en: {
      oracleView: "ARK may be rebuilding risk-on exposure toward AI decisioning, fintech, autonomy, and genomics while rotating harder into selected genomics names.",
      signal: "Secondary trackers now show continued buys in TEM, NTLA, and NTRA alongside repeated sells in TWST, CDNA, and ADPT; official files should confirm.",
      nonConsensus: "This is not generic growth buying; it is theme selection and capital rotation inside innovation ETFs.",
      whitespace: "A daily trade-to-theme layer that reads what was added and what was abandoned is valuable.",
      futureReceipt: "Check in one month whether ARK additions persisted in official files or were one-off trades."
    }
  },
  "berkshire-quality-boring-alpha": {
    ja: {
      oracleView: "Berkshireは派手なAIではなく、NYT、CVX、DPZのようなキャッシュフローとブランド耐久性へ資本を置いている可能性があります。",
      signal: "13F要約ではNYT新規、CVX/DPZ追加、AAPL/AMZN削減が示され、品質と流動性の軸が見えます。",
      nonConsensus: "AI熱狂の裏側で、退屈に見える高品質キャッシュフローがアルファ源泉になり得ます。",
      whitespace: "AIに食われにくいブランド、配当、価格決定力、データ資産を持つ銘柄の再評価余地です。",
      futureReceipt: "次回13Fで同じ品質軸が継続するか、NYT/DPZ/CVXの相対パフォーマンスで見ます。"
    },
    zh: {
      oracleView: "Berkshire可能没有追逐显性的AI热潮，而是在NYT、CVX、DPZ这类现金流和品牌耐久性资产上加码。",
      signal: "13F摘要显示NYT新仓、CVX/DPZ加仓、AAPL/AMZN减仓，体现质量和流动性轴。",
      nonConsensus: "AI狂热背后，乏味但高质量的现金流可能成为alpha来源。",
      whitespace: "不易被AI吞噬、具备品牌、分红、定价权和数据资产的公司存在重估空间。",
      futureReceipt: "用下一份13F和NYT/DPZ/CVX相对表现验证质量轴是否延续。"
    },
    en: {
      oracleView: "Berkshire may be rotating toward domestic demand, trusted media, and selected mega-cap quality rather than simply opting out of AI.",
      signal: "The latest 13F shows new DAL and M positions, a bigger NYT stake, Alphabet exposure, and trims/exits in CVX, AMZN, V, MA, and UNH.",
      nonConsensus: "Behind AI euphoria, boring high-quality cash flows may become the alpha source.",
      whitespace: "Domestic demand, housing, transport, trusted media, and selected mega-cap franchises may be revalued.",
      futureReceipt: "Review the next 13F for persistence in DAL/M/NYT/LEN and continued trims in CVX/AMZN/V/MA/UNH."
    }
  },
  "consumer-attention-reset": {
    ja: {
      oracleView: "AIとアルゴリズム変化で、消費者の注意は検索・SNS・動画・購買導線の間で再配分されています。",
      signal: "ROKUや広告プラットフォームの売買、agent-led discovery、ブランド可視性の変化が同じ地図に入ります。",
      nonConsensus: "消費者インターネットの勝敗はMAUではなく、AI時代に再分配される注意と意図の獲得です。",
      whitespace: "AI検索、動画、CTV、creator commerceを横断して注意の移動を測るレイヤーが空白です。",
      futureReceipt: "広告指標、CTV成長、AI検索流入、ブランド検索の変化を追います。"
    },
    zh: {
      oracleView: "AI和算法变化正在让消费者注意力在搜索、社交、视频和购买路径之间重新分配。",
      signal: "ROKU等广告平台交易、agent-led discovery和品牌可见性变化应放在同一张图里看。",
      nonConsensus: "消费者互联网胜负不只是MAU，而是AI时代注意力和购买意图的重新分配。",
      whitespace: "跨AI搜索、视频、CTV和creator commerce测量注意力迁移的数据层仍是空白。",
      futureReceipt: "追踪广告指标、CTV增长、AI搜索流量和品牌搜索变化。"
    },
    en: {
      oracleView: "AI and algorithm changes are reallocating consumer attention across search, social, video, and purchase paths.",
      signal: "ROKU/platform trades, agent-led discovery, and brand-visibility shifts belong on the same map.",
      nonConsensus: "Consumer-internet winners may be decided by attention and intent reallocation, not only MAU.",
      whitespace: "A measurement layer across AI search, video, CTV, and creator commerce remains open.",
      futureReceipt: "Track ad metrics, CTV growth, AI-search traffic, and brand-search changes."
    }
  }
};

const weeklyBriefs = [
  {
    id: "2026-W17",
    title: "KAIROS Weekly 2026-W17",
    dateRange: "2026-04-20 to 2026-04-26",
    status: "first live cut",
    thesis:
      "AI熱狂の表層から、電力/冷却、ARK内ローテーション、Berkshireの退屈な質、agent-led distributionへ視野を広げる週。",
    moments: [
      "Compute to Power Bottleneck",
      "ARK Risk-on Rebuild",
      "Berkshire Quality Boring Alpha",
      "Agent-led Growth"
    ],
    capitalFlow:
      "ARKはPLTR/HOOD/TSLA/WGSを足し、AMD/ROKU/TER/TWSTを削る。BerkshireはNYT新規、CVX/DPZ追加、AAPL/AMZN削減という別時間軸の資本配分を示す。",
    mapRead:
      "短期のリスクオンはAI意思決定/fintech/autonomyへ、長期の質はエネルギー/消費/信頼メディアへ分岐している。",
    watchNext: ["ARKのPLTR/HOOD/WGS継続Add", "Berkshire次回13F", "AI power/cooling backlog", "AI検索流入データ"],
    futureReceipt:
      "1ヶ月後にARKのAddが継続か単発か、3ヶ月後にAI電力銘柄の決算確認、6ヶ月後にBerkshireのテーマ継続を確認。"
  },
  {
    id: "2026-W16",
    title: "KAIROS Weekly 2026-W16",
    dateRange: "2026-04-13 to 2026-04-19",
    status: "backfilled placeholder",
    thesis:
      "初期観測週。VC発信はAI-native services、agent-led growth、stablecoin rails、defense autonomyへ集中。",
    moments: ["AI-native Services", "Agent-led Growth", "Stablecoin Financial Rails", "Defense Autonomy"],
    capitalFlow:
      "まだ資本アクションよりナラティブ発生源が中心。a16z/Sequoia/YCの発信をFactとして固定する段階。",
    mapRead:
      "AIアプリではなく、仕事・流通・金融配管・現実世界インフラにAIが伝播する構図。",
    watchNext: ["VC発信の継続性", "関連銘柄への波及", "ARK/13Fとの接続", "政策/予算の確認"],
    futureReceipt: "翌週以降、ナラティブが実際の売買/決算/政策と接続するか確認。"
  },
  {
    id: "2026-W15",
    title: "KAIROS Weekly 2026-W15",
    dateRange: "2026-04-06 to 2026-04-12",
    status: "example archive seed",
    thesis:
      "KAIROSの初期仮説形成。単一ニュースではなく、資本移動をバリューチェーンで見る必要が見えた週。",
    moments: ["Raw Fact Tracker Design", "Watch Universe Definition", "Future Receipt Format"],
    capitalFlow:
      "実データは薄いが、ARK日次/13F/VC発信/Wall Street/決算を分けて蓄積するデータモデルが固まり始めた。",
    mapRead:
      "Signalは素材、Momentは分析、Briefは固定された判断、Receiptは未来検証という4層構造。",
    watchNext: ["データソース拡張", "週次アーカイブ化", "月次サマリー化", "Reality Check設計"],
    futureReceipt: "月末に、アーカイブが単なる日記ではなく、点と面をつなぐ地図になっているか確認。"
  }
];

weeklyBriefs[0] = {
  id: "2026-W17",
  title: "KAIROS Weekly 2026-W17",
  dateRange: "2026-04-20 to 2026-04-26",
  status: "frozen 2026-04-25",
  thesis:
    "The AI trade broadened from model supply toward control points in distribution, services, and autonomy.",
  moments: ["Agent-led Growth", "AI-native Services", "Defense Autonomy", "ARK Risk-on Rebuild"],
  capitalFlow:
    "ARKK sold AMD and bought AMZN on 2026-04-24, while Portal Space Systems' $50M Series A linked venture, defense, and space mobility capital.",
  mapRead:
    "The incremental edge is moving from AI capex alone toward who captures demand through agent-readable distribution, workflow ownership, and mission-critical autonomy.",
  watchNext: ["ARK AMD or AMZN follow-through", "agent-led traffic and budget shifts", "AI-native services margins", "defense autonomy contracts"],
  futureReceipt:
    "1M: ARK rotation persistence. 3M: agent-led traffic and service-margin evidence. 6M: defense autonomy contracts and rerating."
};

weeklyBriefs.unshift({
  id: "2026-W18",
  title: "KAIROS Weekly 2026-W18",
  dateRange: "2026-04-27 to 2026-05-03",
  status: "frozen 2026-05-04",
  thesis:
    "The control points got concrete: venture and public capital both moved toward agent-ready commerce data, AI implementation labor, and consumer financial rails rather than pure model supply.",
  moments: ["Agent-led Growth", "AI-native Services", "Stablecoin Financial Rails", "ARK Risk-on Rebuild"],
  capitalFlow:
    "ARK Venture Fund initiated SHOP, Crusoe, and RBLX in Q1 2026, while ARKK, ARKF, and ARKW added HOOD, GOOG, META, and KTOS and kept reducing AMD or ARKB exposure in late April 2026.",
  mapRead:
    "The next edge is not just owning the model. It is owning merchant context, implementation workflows, and retail financial distribution once agents start routing demand.",
  watchNext: [
    "SHOP MCP adoption and merchant agent traffic",
    "HOOD chain or tokenized-asset traction",
    "AI-native services gross-margin proof",
    "ARK preference for HOOD, GOOG, META, and KTOS over AMD"
  ],
  futureReceipt:
    "1M: repeated ARK adds into SHOP or HOOD. 3M: agent-led commerce and implementation-margin evidence. 6M: tokenized-asset rails and autonomy contracts translating into revenue mix."
});

weeklyBriefs.unshift({
  id: "2026-W19",
  title: "KAIROS Weekly 2026-W19",
  dateRange: "2026-05-04 to 2026-05-10",
  status: "frozen 2026-05-11",
  thesis:
    "The missing layer around agents got named: Sequoia, YC, Coinbase, Robinhood, and ARK all pointed away from generic model hype and toward context, workflow, and transaction rails.",
  moments: ["Agent-led Growth", "Stablecoin Financial Rails", "AI-native Services", "ARK Risk-on Rebuild"],
  capitalFlow:
    "Across 2026-05-05 to 2026-05-07, Cathie's Ark showed repeated buying in SHOP, TEM, WGS, and NTLA while AMD was sold again across ARKK, ARKW, and ARKF, reinforcing a rotation from generic compute beta into merchant context, precision-data applications, and workflow software.",
  mapRead:
    "The next choke points look less like the chatbot surface and more like the operating layer agents depend on every day: company knowledge, merchant/product context, and machine-native settlement rails.",
  watchNext: [
    "repeated ARK adds into SHOP, TEM, or WGS",
    "Base, x402, and Robinhood Chain usage follow-through",
    "agent-driven workflow or transaction metrics in earnings",
    "whether AMD remains the source of funds for application-layer adds"
  ],
  futureReceipt:
    "1M: ARK add persistence in SHOP, TEM, and WGS. 3M: measurable agent transaction or workflow volume. 6M: valuation rerating for rail and data-moat companies."
});

weeklyBriefs.unshift({
  id: "2026-W20",
  title: "KAIROS Weekly 2026-W20",
  dateRange: "2026-05-11 to 2026-05-17",
  status: "frozen 2026-05-17",
  thesis:
    "The AI tape split into two winning shapes: boring domestic-demand durability on one side, and data-dense healthcare applications on the other, while generic compute beta increasingly became the funding source.",
  moments: ["Berkshire Quality Boring Alpha", "Precision Data Moats", "ARK Risk-on Rebuild", "Agent-led Growth"],
  capitalFlow:
    "Berkshire's 2026-03-31 13F added DAL and M, enlarged NYT, and kept GOOGL while AMZN, V, MA, and UNH disappeared from the disclosed table; Cathie's Ark then kept adding NTRA and NTLA while trimming TSM, AMD, TER, TWST, CDNA, and ADPT through 2026-05-15.",
  mapRead:
    "The capital market is no longer rewarding generic AI exposure by default. It is rewarding either recurring real-world cash flow and trust, or proprietary data and workflow leverage that can survive the next narrowing of the narrative.",
  watchNext: [
    "continued ARK adds into NTRA, NTLA, or TEM",
    "whether AMD, TSM, and TER remain the source of funds",
    "Tempus and Natera margin follow-through",
    "relative performance of Berkshire's domestic-demand additions versus its large-cap exits"
  ],
  futureReceipt:
    "1M: ARK genomics add persistence. 3M: margin and workflow leverage evidence at data-rich healthcare platforms. 6M: Berkshire's boring-alpha basket relative to the names it exited or trimmed."
});

weeklyBriefs.unshift({
  id: "2026-W21",
  title: "KAIROS Weekly 2026-W21",
  dateRange: "2026-05-18 to 2026-05-24",
  status: "frozen 2026-05-24",
  thesis:
    "This week the market paid for regulated tokenization and selective compute, not generic AI or attention beta.",
  moments: ["Stablecoin Financial Rails", "Compute to Power Bottleneck", "Consumer Attention Reset", "ARK Risk-on Rebuild"],
  capitalFlow:
    "Cathie's Ark bought BLSH across ARKK, ARKW, and ARKF and opened CBRS in ARKK on 2026-05-19 and 2026-05-20 while selling ROKU, AMD, TER, ICE, and KSPI; Bullish's own releases tied that rotation to tokenized issuer infrastructure and Equiniti.",
  mapRead:
    "This no longer looks like a generic crypto trade. It looks like a bet that tokenized capital-markets plumbing and differentiated compute are the next control points, while ad-driven attention becomes a funding source.",
  watchNext: [
    "continued ARK adds into BLSH or CBRS",
    "Bullish tokenization or Equiniti integration milestones",
    "whether ROKU, AMD, and TER remain source-of-funds",
    "institutional adoption signals around tokenized equities or issuer rails"
  ],
  futureReceipt:
    "1M: ARK add persistence in BLSH and CBRS. 3M: Bullish adoption and integration milestones. 6M: rerating for tokenized market infrastructure versus attention beta."
});

weeklyBriefs.unshift({
  id: "2026-W22",
  title: "KAIROS Weekly 2026-W22",
  dateRange: "2026-05-25 to 2026-05-31",
  status: "frozen 2026-05-31",
  thesis:
    "The rotation stopped looking like a one-off tokenization trade and started looking like a portfolio rule: capital kept narrowing toward operational control points in selective compute, defense autonomy, healthcare data, and commerce distribution.",
  moments: ["Compute to Power Bottleneck", "Defense Autonomy", "ARK Risk-on Rebuild", "Stablecoin Financial Rails"],
  capitalFlow:
    "Cathie's Ark added CBRS again in ARKK and ARKW, bought KTOS in ARKX, added TEM in ARKG, and added AMZN in ARKK on 2026-05-27, extending the prior week's shift away from generic beta and toward tighter operating chokepoints.",
  mapRead:
    "This is no longer a generic AI rebound. It looks like a filter for assets that translate infrastructure into workflow leverage: compute architecture, defense procurement, healthcare data loops, and commerce distribution.",
  watchNext: [
    "continued ARK adds into CBRS, KTOS, or TEM",
    "whether AMZN remains part of the same rotation basket",
    "defense autonomy contract or backlog evidence",
    "Tempus application, margin, or data-platform follow-through"
  ],
  futureReceipt:
    "1M: ARK add persistence in CBRS, KTOS, and TEM. 3M: defense backlog and Tempus workflow leverage evidence. 6M: sustained premium for narrow operating control points over generic AI beta."
});

weeklyBriefs.unshift({
  id: "2026-W23",
  title: "KAIROS Weekly 2026-W23",
  dateRange: "2026-06-01 to 2026-06-07",
  status: "frozen 2026-06-07",
  thesis:
    "Capital assembled a machine-economy stack across compute, platform distribution, and stablecoin rails instead of chasing second-derivative AI beta.",
  moments: ["Compute to Power Bottleneck", "ARK Risk-on Rebuild", "Stablecoin Financial Rails", "Agent-led Growth"],
  capitalFlow:
    "ARK bought NVDA and CBRS on 2026-06-01, GOOG/GOOGL/META/BABA/AVGO on 2026-06-03 and 2026-06-04, and COIN/CRCL on 2026-06-04 and 2026-06-05, while AMD, TER, BIDU, and ACHR funded part of the move.",
  mapRead:
    "The edge is concentrating into liquid control points that can actually monetize agentic demand: compute, distribution, and programmable payments.",
  watchNext: [
    "continued ARK adds into NVDA, AVGO, COIN, or CRCL",
    "whether AMD, TER, BIDU, and ACHR stay source-of-funds",
    "payment or agent-commerce adoption signals at Coinbase and Circle",
    "platform monetization evidence at Alphabet and Meta"
  ],
  futureReceipt:
    "1M: ARK add persistence in the machine-economy stack. 3M: AI demand and payments-rail adoption evidence. 6M: sustained premium for liquid control points over second-derivative AI names."
});

const monthlySummaries = [
  {
    id: "2026-04",
    title: "April 2026 Map",
    status: "building",
    read:
      "4月は、AIインフラ、agent-led distribution、AI-native services、ARK/Berkshireの資本配分差をつなぐ月。",
    openQuestions: [
      "AI電力は本当にGPUの次の制約になるか",
      "ARKのPLTR/HOOD/TSLA/WGS Addは継続するか",
      "Berkshireの退屈な質への資本配分は市場の避難先か",
      "AI検索/agent-led growthは実流入として確認できるか"
    ]
  }
];

let rawFacts = kairosMoments.flatMap((moment) =>
  moment.evidence.map((evidence) => ({
    ...evidence,
    moment: moment.title
  }))
);

let capitalActions = [
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "PLTR",
    action: "Buy",
    sizeValue: "$5.9M",
    weightChange: "0.10% ETF / 3.26% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "PLTR",
    action: "Buy",
    sizeValue: "$1.5M",
    weightChange: "0.10% ETF / 3.56% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw-trades-of-pltr",
    note: "Shows ARKW adding PLTR on the same date as ARKK."
  },
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$5.9M",
    weightChange: "0.10% ETF / 2.12% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "ARKK trim row from secondary tracker."
  },
  {
    date: "2026-04-09",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "WGS",
    action: "Buy",
    sizeValue: "$1.1M",
    weightChange: "0.02% ETF / 2.26% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Potential build pattern because WGS also appears on Apr 8 and Apr 7."
  },
  {
    date: "2026-04-09",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "BWXT",
    action: "Sell",
    sizeValue: "$617.7K",
    weightChange: "0.01% ETF / 0.86% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Nuclear/defense-adjacent trim; watch whether this is noise or repeated."
  },
  {
    date: "2026-04-08",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "ROKU",
    action: "Sell",
    sizeValue: "$1.6M",
    weightChange: "0.03% ETF / 0.62% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Streaming/ad platform trim."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "HOOD",
    action: "Buy",
    sizeValue: "$9.0M",
    weightChange: "0.15% ETF / 3.61% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Retail trading and crypto-finance exposure add."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "TSLA",
    action: "Buy",
    sizeValue: "$1.8M",
    weightChange: "0.03% ETF / 0.30% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Autonomy and robotics exposure add."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "TER",
    action: "Sell",
    sizeValue: "$3.0M",
    weightChange: "0.05% ETF / 2.45% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Semicap and automation trim."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "TWST",
    action: "Sell",
    sizeValue: "$3.0M",
    weightChange: "0.05% ETF / 1.70% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Synthetic biology trim."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "NYT",
    action: "New",
    sizeValue: "5.07M shares",
    weightChange: "new position",
    source: "TrustFinance / 13F",
    sourceType: "secondary 13F summary",
    url: "https://www.trustfinance.com/blog/berkshire-hathaway-13f-q4-2025-nyt-stake-trims-tech",
    note: "Berkshire initiated a New York Times position in Q4 2025 per 13F summaries."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "AMZN",
    action: "Trim",
    sizeValue: "2.28M shares remaining",
    weightChange: "large reduction",
    source: "TrustFinance / 13F",
    sourceType: "secondary 13F summary",
    url: "https://www.trustfinance.com/blog/berkshire-hathaway-13f-q4-2025-nyt-stake-trims-tech",
    note: "Berkshire reduced Amazon in Q4 2025."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "AAPL",
    action: "Trim",
    sizeValue: "227.92M shares remaining",
    weightChange: "reduced",
    source: "TrustFinance / 13F",
    sourceType: "secondary 13F summary",
    url: "https://www.trustfinance.com/blog/berkshire-hathaway-13f-q4-2025-nyt-stake-trims-tech",
    note: "Berkshire trimmed Apple in Q4 2025."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "CVX",
    action: "Add",
    sizeValue: "130.16M shares",
    weightChange: "increased",
    source: "MarketWatch / 13F",
    sourceType: "secondary 13F summary",
    url: "https://www.marketwatch.com/story/berkshire-returns-to-the-newspaper-business-takes-bigger-bite-of-dominos-pizza-5c4dc5d8",
    note: "Berkshire increased Chevron in Q4 2025."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "DPZ",
    action: "Add",
    sizeValue: ">3.3M shares",
    weightChange: "+12%",
    source: "MarketWatch / 13F",
    sourceType: "secondary 13F summary",
    url: "https://www.marketwatch.com/story/berkshire-returns-to-the-newspaper-business-takes-bigger-bite-of-dominos-pizza-5c4dc5d8",
    note: "Berkshire increased Domino's Pizza in Q4 2025."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "BRK 13F",
    action: "Portfolio",
    sizeValue: "$274.16B",
    weightChange: "42 holdings",
    source: "13F.info",
    sourceType: "13F tracker",
    url: "https://13f.info/manager/0001067983-berkshire-hathaway-inc",
    note: "Use SEC filing as primary source; 13F.info summarizes latest filing metadata."
  },
  {
    date: "2026-04-13",
    manager: "ARK",
    vehicle: "Multi-ETF",
    ticker: "PLTR",
    action: "Add",
    sizeValue: "85,485 shares / $10.95M",
    weightChange: "five ETFs",
    source: "Barron's",
    sourceType: "media cross-check",
    url: "https://www.barrons.com/articles/palantir-stock-price-cathie-wood-ark-arkk-b401cac6",
    note: "Media cross-check for the multi-ETF PLTR add."
  }
];

capitalActions.splice(
  0,
  capitalActions.length,
    {
      date: "2026-05-15",
      manager: "Berkshire Hathaway",
      vehicle: "13F-HR",
      ticker: "DAL",
      action: "Buy New",
      sizeValue: "$2.65B disclosed value",
      weightChange: "39.8M shares / new position",
      source: "SEC EDGAR",
      sourceType: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      note: "Berkshire's 2026-03-31 13F lists a new Delta Air Lines position disclosed on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "Berkshire Hathaway",
      vehicle: "13F-HR",
      ticker: "M",
      action: "Buy New",
      sizeValue: "$55.0M disclosed value",
      weightChange: "3.04M shares / new position",
      source: "SEC EDGAR",
      sourceType: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      note: "Berkshire's 2026-03-31 13F lists a new Macy's position disclosed on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "Berkshire Hathaway",
      vehicle: "13F-HR",
      ticker: "NYT",
      action: "Buy",
      sizeValue: "$1.27B disclosed value",
      weightChange: "15.15M shares / position increased vs 2025-12-31",
      source: "SEC EDGAR",
      sourceType: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      note: "Berkshire's 2026-03-31 13F shows a much larger New York Times stake than the 2025-12-31 filing."
    },
    {
      date: "2026-05-15",
      manager: "Berkshire Hathaway",
      vehicle: "13F-HR",
      ticker: "CVX",
      action: "Sell",
      sizeValue: "$17.46B disclosed value",
      weightChange: "84.38M shares / position reduced vs 2025-12-31",
      source: "SEC EDGAR",
      sourceType: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      note: "Berkshire's 2026-03-31 13F shows a smaller Chevron position than the prior-quarter filing."
    },
    {
      date: "2026-05-15",
      manager: "Berkshire Hathaway",
      vehicle: "13F-HR",
      ticker: "AMZN",
      action: "Sell Exit",
      sizeValue: "$0 remaining in 2026-03-31 13F",
      weightChange: "position absent vs 2025-12-31",
      source: "SEC EDGAR",
      sourceType: "official filing",
      url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526226661/xslForm13F_X02/53405.xml",
      note: "Amazon appears in Berkshire's 2025-12-31 13F but is absent from the 2026-03-31 filing."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TER",
      action: "Sell",
      sizeValue: "$12.6M",
      weightChange: "0.15% ETF / 5.76% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Teradyne again on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TSM",
      action: "Sell",
      sizeValue: "$18.5M",
      weightChange: "0.23% ETF / 10.85% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Taiwan Semiconductor on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$816.3K",
      weightChange: "0.01% ETF / 0.26% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Twist Bioscience again on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$5.8M",
      weightChange: "0.28% ETF / 2.75% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKW trimming AMD on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "TSM",
      action: "Sell",
      sizeValue: "$5.8M",
      weightChange: "0.28% ETF / 9.88% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKW trimming Taiwan Semiconductor on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "CDNA",
      action: "Sell",
      sizeValue: "$132.2K",
      weightChange: "0.01% ETF / 0.36% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming CareDx again on 2026-05-15."
    },
    {
      date: "2026-05-15",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$59.4K",
      weightChange: "0.01% ETF / 0.06% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Twist Bioscience again on 2026-05-15."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "TSM",
      action: "Sell",
      sizeValue: "$4.9M",
      weightChange: "0.29% ETF / 9.15% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKW trimming Taiwan Semiconductor on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$564.1K",
      weightChange: "0.01% ETF / 0.28% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Twist Bioscience again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$67.2K",
      weightChange: "0.01% ETF / 0.07% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Twist Bioscience again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TSM",
      action: "Sell",
      sizeValue: "$11.6M",
      weightChange: "0.18% ETF / 10.22% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Taiwan Semiconductor again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$5.1M",
      weightChange: "0.29% ETF / 2.71% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKW trimming AMD again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "ADPT",
      action: "Sell",
      sizeValue: "$465.0K",
      weightChange: "0.04% ETF / 1.79% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Adaptive Biotechnologies again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "CDNA",
      action: "Sell",
      sizeValue: "$282.6K",
      weightChange: "0.02% ETF / 0.75% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming CareDx again on 2026-05-14."
    },
    {
      date: "2026-05-14",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TER",
      action: "Sell",
      sizeValue: "$8.1M",
      weightChange: "0.12% ETF / 5.56% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Teradyne again on 2026-05-14."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "CDNA",
      action: "Sell",
      sizeValue: "$353.9K",
      weightChange: "0.03% ETF / 0.90% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming CareDx again on 2026-05-13."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTRA",
      action: "Buy",
      sizeValue: "$1.4M",
      weightChange: "0.02% ETF / 1.69% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK adding Natera on 2026-05-13."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$236.4K",
      weightChange: "0% ETF / 0.14% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Twist Bioscience again on 2026-05-13."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "ADPT",
      action: "Sell",
      sizeValue: "$166.9K",
      weightChange: "0.01% ETF / 0.63% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Adaptive Biotechnologies again on 2026-05-13."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$568.4K",
      weightChange: "0.05% ETF / 0.58% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Twist Bioscience again on 2026-05-13."
    },
    {
      date: "2026-05-13",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "NTRA",
      action: "Buy",
      sizeValue: "$2.1M",
      weightChange: "0.18% ETF / 4.44% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG adding Natera on 2026-05-13."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$338.7K",
      weightChange: "0.03% ETF / 0.34% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming Twist Bioscience again on 2026-05-12."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "CDNA",
      action: "Sell",
      sizeValue: "$314.7K",
      weightChange: "0.03% ETF / 0.78% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG trimming CareDx on 2026-05-12."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$2.9M",
      weightChange: "0.04% ETF / 1.61% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK trimming Twist Bioscience again on 2026-05-12."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$590.4K",
      weightChange: "0.01% ETF / 0.38% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK adding Intellia on 2026-05-12."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTRA",
      action: "Buy",
      sizeValue: "$690.9K",
      weightChange: "0.01% ETF / 0.89% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKK adding Natera on 2026-05-12."
    },
    {
      date: "2026-05-12",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "NTRA",
      action: "Buy",
      sizeValue: "$156.0K",
      weightChange: "0.01% ETF / 0.33% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined/trades",
      note: "Secondary tracker row. Cathie's Ark combined feed shows ARKG adding Natera on 2026-05-12."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "CRWV",
      action: "Buy",
      sizeValue: "$10.4M",
      weightChange: "0.15% ETF / 6.08% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-crwv",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKK buying CoreWeave on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "CRWV",
      action: "Buy",
      sizeValue: "$2.8M",
      weightChange: "0.15% ETF / 4.17% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-crwv",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKW buying CoreWeave on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "TOST",
      action: "Buy",
      sizeValue: "$3.6M",
      weightChange: "0.20% ETF / 24.11% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-tost",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKW buying Toast on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "TOST",
      action: "Buy",
      sizeValue: "$1.7M",
      weightChange: "0.20% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-tost",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKF buying Toast on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$9.8M",
      weightChange: "0.15% ETF / 2.63% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming AMD again on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$598.5K",
      weightChange: "0.01% ETF / 0.33% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming Twist Bioscience again on 2026-05-08."
    },
    {
      date: "2026-05-08",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$372.2K",
      weightChange: "0.01% ETF / 0.26% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk-trades-of-ntla",
      note: "Secondary tracker row. Cathie's Ark shows ARKK adding Intellia again on 2026-05-08."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TEM",
      action: "Buy",
      sizeValue: "$6.7M",
      weightChange: "0.10% ETF / 2.10% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-tem",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKK adding Tempus again on 2026-05-07."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TEM",
      action: "Buy",
      sizeValue: "$1.2M",
      weightChange: "0.10% ETF / 1.18% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-tem",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKG adding Tempus on 2026-05-07."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$1.4M",
      weightChange: "0.02% ETF / 1.01% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk-trades-of-ntla",
      note: "Secondary tracker row. Cathie's Ark shows ARKK adding Intellia again on 2026-05-07."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TER",
      action: "Sell",
      sizeValue: "$3.3M",
      weightChange: "0.05% ETF / 2.70% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming Teradyne on 2026-05-07."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$3.3M",
      weightChange: "0.05% ETF / 0.94% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming AMD again on 2026-05-07."
    },
    {
      date: "2026-05-07",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$684.6K",
      weightChange: "0.01% ETF / 0.37% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming Twist Bioscience on 2026-05-07."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TEM",
      action: "Buy",
      sizeValue: "$6.3M",
      weightChange: "0.10% ETF / 2.02% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK adding Tempus on 2026-05-06."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TEM",
      action: "Buy",
      sizeValue: "$1.1M",
      weightChange: "0.10% ETF / 1.13% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/ark-funds-combined-trades-of-tem",
      note: "Secondary tracker row. Combined Cathie's Ark page shows ARKG adding Tempus on 2026-05-06."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$924.4K",
      weightChange: "0.08% ETF / 0.90% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkg/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKG trimming Twist Bioscience on 2026-05-06."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$7.9M",
      weightChange: "0.12% ETF / 2.16% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming AMD again on 2026-05-06."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$2.7M",
      weightChange: "0.04% ETF / 1.43% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming Twist Bioscience on 2026-05-06."
    },
    {
      date: "2026-05-06",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$381.1K",
      weightChange: "0.01% ETF / 0.28% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK adding Intellia on 2026-05-06."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$20.7M",
      weightChange: "0.27% ETF / 27.01% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "CRWV",
      action: "Sell",
      sizeValue: "$10.8M",
      weightChange: "0.16% ETF / 5.49% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming CoreWeave on 2026-05-05."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$2.9M",
      weightChange: "0.04% ETF / 2.16% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk-trades-of-ntla",
      note: "Secondary tracker row. Cathie's Ark shows ARKK adding Intellia on 2026-05-05."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "WGS",
      action: "Buy",
      sizeValue: "$6.8M",
      weightChange: "0.09% ETF / 13.64% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TER",
      action: "Sell",
      sizeValue: "$7.6M",
      weightChange: "0.12% ETF / 5.91% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKK trimming Teradyne on 2026-05-05."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$10.2M",
      weightChange: "0.15% ETF / 2.77% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$5.3M",
      weightChange: "0.28% ETF / 11.70% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$3.4M",
      weightChange: "0.19% ETF / 4.66% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$2.7M",
      weightChange: "0.27% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$2.5M",
      weightChange: "0.25% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TXG",
      action: "Sell",
      sizeValue: "$818.0K",
      weightChange: "0.07% ETF / 1.20% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkg/trades",
      note: "Secondary tracker row. Cathie's Ark shows ARKG trimming 10x Genomics on 2026-05-05."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "WGS",
      action: "Buy",
      sizeValue: "$1.8M",
      weightChange: "0.05% ETF / 24.03% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkg/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-05",
      manager: "ARK",
      vehicle: "ARKG",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$476.9K",
      weightChange: "0.01% ETF / 3.64% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkg/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-04",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$6.6M",
      weightChange: "0.09% ETF / 27.01% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-04",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$1.7M",
      weightChange: "0.09% ETF / 11.70% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-04",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "SHOP",
      action: "Buy",
      sizeValue: "$856.9K",
      weightChange: "0.10% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-04",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$884.1K",
      weightChange: "0.10% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "RBLX",
      action: "Buy",
      sizeValue: "$9.9M",
      weightChange: "0.15% ETF / 6.13% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$9.1M",
      weightChange: "0.13% ETF / 0.85% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "TWST",
      action: "Sell",
      sizeValue: "$7.3M",
      weightChange: "0.12% ETF / 3.64% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKK",
      ticker: "NTLA",
      action: "Buy",
      sizeValue: "$1.9M",
      weightChange: "0.03% ETF / 1.42% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkk/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "RBLX",
      action: "Buy",
      sizeValue: "$2.6M",
      weightChange: "0.16% ETF / 6.24% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKW",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$2.5M",
      weightChange: "0.15% ETF / 1.71% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkw/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "RBLX",
      action: "Buy",
      sizeValue: "$1.3M",
      weightChange: "0.16% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-05-01",
      manager: "ARK",
      vehicle: "ARKF",
      ticker: "AMD",
      action: "Sell",
      sizeValue: "$1.2M",
      weightChange: "0.16% ETF / 100% position",
      source: "Cathie's Ark",
      sourceType: "secondary tracker",
      url: "https://cathiesark.com/arkf/trades",
      note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
    },
    {
      date: "2026-04-23",
      manager: "ARK",
      vehicle: "ARK Venture Fund",
      ticker: "SHOP",
      action: "New",
      sizeValue: "undisclosed",
      weightChange: "new position",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      sourceType: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      note: "ARK said it initiated a new position in Shopify during Q1 2026."
    },
    {
      date: "2026-04-23",
      manager: "ARK",
      vehicle: "ARK Venture Fund",
      ticker: "Crusoe (private)",
      action: "New",
      sizeValue: "undisclosed",
      weightChange: "new position",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      sourceType: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      note: "ARK said it initiated a new position in Crusoe during Q1 2026."
    },
    {
      date: "2026-04-23",
      manager: "ARK",
      vehicle: "ARK Venture Fund",
      ticker: "RBLX",
      action: "New",
      sizeValue: "undisclosed",
      weightChange: "new position",
      source: "ARK Venture Fund 1st Quarter 2026 Update",
      sourceType: "official fund commentary",
      url: "https://www.ark-funds.com/articles/venture-fund/ark-venture-q1-2026-update",
      note: "ARK said it initiated a new position in Roblox during Q1 2026."
    },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "GOOG",
    action: "Buy",
    sizeValue: "$16.4M",
    weightChange: "0.24% ETF / 21.04% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "META",
    action: "Buy",
    sizeValue: "$16.3M",
    weightChange: "0.24% ETF / 71.61% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$32.2M",
    weightChange: "0.48% ETF / 8.90% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKF",
    ticker: "META",
    action: "Buy",
    sizeValue: "$4.1M",
    weightChange: "0.50% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkf/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKF",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$4.1M",
    weightChange: "0.50% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkf/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKX",
    ticker: "GOOG",
    action: "Buy",
    sizeValue: "$4.5M",
    weightChange: "0.52% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkx/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-30",
    manager: "ARK",
    vehicle: "ARKX",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$4.4M",
    weightChange: "0.51% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkx/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "HOOD",
    action: "Buy",
    sizeValue: "$4.0M",
    weightChange: "0.24% ETF / 5.56% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "ARKB",
    action: "Sell",
    sizeValue: "$4.1M",
    weightChange: "0.25% ETF / 4.12% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "HOOD",
    action: "Buy",
    sizeValue: "$33.7M",
    weightChange: "0.48% ETF / 13.03% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "KTOS",
    action: "Buy",
    sizeValue: "$11.5M",
    weightChange: "0.16% ETF / 19.98% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "NTLA",
    action: "Buy",
    sizeValue: "$25.5M",
    weightChange: "0.33% ETF / 26.04% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKF",
    ticker: "HOOD",
    action: "Buy",
    sizeValue: "$2.0M",
    weightChange: "0.24% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkf/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKF",
    ticker: "ARKB",
    action: "Sell",
    sizeValue: "$2.0M",
    weightChange: "0.24% ETF / 100% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkf/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKG",
    ticker: "NTLA",
    action: "Buy",
    sizeValue: "$4.2M",
    weightChange: "0.33% ETF / 11.29% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkg/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-29",
    manager: "ARK",
    vehicle: "ARKG",
    ticker: "TWST",
    action: "Sell",
    sizeValue: "$3.6M",
    weightChange: "0.31% ETF / 3.35% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkg/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-28",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "CRWV",
    action: "Buy",
    sizeValue: "$2.5M",
    weightChange: "0.15% ETF / 3.99% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-28",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "SPOT",
    action: "Buy",
    sizeValue: "$3.3M",
    weightChange: "0.20% ETF / 24.44% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-28",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "BLSH",
    action: "Sell",
    sizeValue: "$1.1M",
    weightChange: "0.07% ETF / 3.04% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-28",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "ROKU",
    action: "Sell",
    sizeValue: "$4.2M",
    weightChange: "0.25% ETF / 5.94% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-24",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$25.5M",
    weightChange: "1.55% ETF / 14.50% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-24",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "AMZN",
    action: "Buy",
    sizeValue: "$25.1M",
    weightChange: "1.51% ETF / 57.26% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-24",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$32.7M",
    weightChange: "0.45% ETF / 6.97% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-24",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "AMZN",
    action: "Buy",
    sizeValue: "$32.3M",
    weightChange: "0.44% ETF / 17.51% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-22",
    manager: "ARK",
    vehicle: "ARK Venture Fund",
    ticker: "Lucra (private)",
    action: "Lead",
    sizeValue: "$20M Series B",
    weightChange: "n/a",
    source: "SeventySix Capital / EZ Newswire",
    sourceType: "portfolio news / press release",
    url: "https://www.seventysixcapital.com/portfolio-news/lucra-raises-20-million",
    note: "Lucra announced a $20M financing round led by ARK Invest Venture Fund (reposted press release)."
  },
  {
    date: "2026-04-17",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "BLSH",
    action: "Sell",
    sizeValue: "$1.3M",
    weightChange: "0.08% ETF / 3.34% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-17",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "CRCL",
    action: "Sell",
    sizeValue: "$1.2M",
    weightChange: "0.07% ETF / 1.56% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-17",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "NFLX",
    action: "Buy",
    sizeValue: "$2.5M",
    weightChange: "0.15% ETF / 12.38% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-17",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "CRWV",
    action: "Sell",
    sizeValue: "$2.6M",
    weightChange: "0.15% ETF / 3.57% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw/trades",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "PLTR",
    action: "Buy",
    sizeValue: "$5.9M",
    weightChange: "0.10% ETF / 3.26% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Secondary tracker row. Use ARK official latest trade file when importing production data."
  },
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKW",
    ticker: "PLTR",
    action: "Buy",
    sizeValue: "$1.5M",
    weightChange: "0.10% ETF / 3.56% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkw-trades-of-pltr",
    note: "Shows ARKW adding PLTR on the same date as ARKK."
  },
  {
    date: "2026-04-10",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "AMD",
    action: "Sell",
    sizeValue: "$5.9M",
    weightChange: "0.10% ETF / 2.12% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "ARKK trim row from secondary tracker."
  },
  {
    date: "2026-04-09",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "WGS",
    action: "Buy",
    sizeValue: "$1.1M",
    weightChange: "0.02% ETF / 2.26% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Potential build pattern because WGS also appears on Apr 8 and Apr 7."
  },
  {
    date: "2026-04-09",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "BWXT",
    action: "Sell",
    sizeValue: "$617.7K",
    weightChange: "0.01% ETF / 0.86% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Nuclear/defense-adjacent trim; watch whether this is noise or repeated."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "HOOD",
    action: "Buy",
    sizeValue: "$9.0M",
    weightChange: "0.15% ETF / 3.61% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Retail trading and crypto-finance exposure add."
  },
  {
    date: "2026-04-07",
    manager: "ARK",
    vehicle: "ARKK",
    ticker: "TSLA",
    action: "Buy",
    sizeValue: "$1.8M",
    weightChange: "0.03% ETF / 0.30% position",
    source: "Cathie's Ark",
    sourceType: "secondary tracker",
    url: "https://cathiesark.com/arkk/trades?rtm_click=5e4d7325",
    note: "Autonomy and robotics exposure add."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "NYT",
    action: "New",
    sizeValue: "5.07M shares",
    weightChange: "new position",
    source: "SEC EDGAR 13F-HR",
    sourceType: "official filing",
    url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526054580/xslForm13F_X02/50240.xml",
    note: "Form 13F information table for period ended 2025-12-31 includes a NYT line item of 5,071,467 shares."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "CVX",
    action: "Add",
    sizeValue: "130.16M shares",
    weightChange: "increased",
    source: "SEC EDGAR 13F-HR",
    sourceType: "official filing",
    url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526054580/xslForm13F_X02/50240.xml",
    note: "Summed from multiple CVX line items in the Form 13F information table for period ended 2025-12-31."
  },
  {
    date: "2025-12-31",
    manager: "Berkshire Hathaway",
    vehicle: "13F",
    ticker: "AAPL",
    action: "Trim",
    sizeValue: "213.45M shares",
    weightChange: "reduced",
    source: "SEC EDGAR 13F-HR",
    sourceType: "official filing",
    url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526054580/xslForm13F_X02/50240.xml",
    note: "Summed from multiple AAPL line items in the Form 13F information table for period ended 2025-12-31."
  }
);

const capitalFlowThemes = [
  {
    id: "ark-ai-decision",
    manager: "ARK",
    theme: "AI decision layer",
    read: "PLTRを複数ETFで足す動き。AI意思決定/政府・企業データOSへの再評価。",
    tickers: ["PLTR"],
    size: 82
  },
  {
    id: "ark-fintech-autonomy",
    manager: "ARK",
    theme: "Fintech + autonomy",
    read: "HOODとTSLAを足し、リスクオンの中でも取引/crypto/自律システムへ寄せる。",
    tickers: ["HOOD", "TSLA"],
    size: 72
  },
  {
    id: "ark-genomics-rotation",
    manager: "ARK",
    theme: "Genomics rotation",
    read: "WGSを足し、TWSTを削る。ゲノミクス内でも銘柄選別が起きている可能性。",
    tickers: ["WGS", "TEM", "NTLA", "NTRA", "TWST", "CDNA", "ADPT"],
    size: 70
  },
  {
    id: "ark-compute-commerce-swing",
    manager: "ARK",
    theme: "Compute + commerce swing",
    read: "AMD、ROKU、TER、BWXTなどを削る。単純なAI/automation一括買いではない。",
    tickers: ["CRWV", "TOST", "AMD", "TER"],
    size: 68
  },
  {
    id: "berkshire-quality",
    manager: "Berkshire Hathaway",
    theme: "Quality cash flow",
    read: "NYT新規、CVX/DPZ追加。ブランド、エネルギー、消費頻度、キャッシュフローへの資本配分。",
    tickers: ["NYT", "CVX", "DPZ"],
    size: 74
  },
  {
    id: "berkshire-tech-trim",
    manager: "Berkshire Hathaway",
    theme: "Mega-cap tech trim",
    read: "AAPL/AMZNを削る。AI熱狂とは別に、集中リスクと期待値を調整している可能性。",
    tickers: ["AAPL", "AMZN"],
    size: 66
  }
];

let watchUniverse = [
  {
    name: "ARK Daily Trades",
    cadence: "Daily",
    category: "Capital Action",
    url: "https://www.ark-funds.com/ark-trade-notifications",
    extract: [
      "new buys, adds, trims, exits",
      "fund, ticker, direction, shares, market value, ETF weight",
      "latest trade file and daily holdings file caveats"
    ]
  },
  {
    name: "Berkshire Hathaway",
    cadence: "Quarterly / Annual",
    category: "Capital Allocation",
    url: "https://www.sec.gov/edgar/browse/?CIK=1067983",
    extract: [
      "13F position changes",
      "new positions, full exits, concentration changes",
      "shareholder letters and cash/repurchase posture"
    ]
  },
  {
    name: "Superinvestor 13F Set",
    cadence: "Quarterly",
    category: "Fund Actions",
    url: "https://www.sec.gov/edgar/search/",
    extract: [
      "Druckenmiller, Appaloosa, Pershing, Baupost, Tiger, Coatue",
      "position deltas and crowded emerging themes",
      "consensus versus contrarian fund behavior"
    ]
  },
  {
    name: "Situational Awareness LP",
    cadence: "Quarterly / Irregular",
    category: "Frontier AI Capital",
    url: "https://situationalawarenesslp.com/about",
    extract: [
      "AI timeline thesis",
      "compute, power, data center, optical, and AI infrastructure exposure",
      "AGI-timeline-driven portfolio implications"
    ]
  },
  {
    name: "VC Thought Layer",
    cadence: "Weekly",
    category: "Narrative Origin",
    url: "https://www.ycombinator.com/rfs",
    extract: [
      "a16z, Sequoia, YC, Founders Fund",
      "new category language and startup requests",
      "what elite builders are being told to build"
    ]
  },
  {
    name: "Wall Street Theme Notes",
    cadence: "Weekly / Event-driven",
    category: "Market Translation",
    url: "https://www.morganstanley.com/insights/articles/ai-market-trends-institute-2026",
    extract: [
      "Goldman, Morgan Stanley, JPMorgan, Citi, selected specialist research",
      "capex revisions, sector rotations, macro framing",
      "where consensus is forming or breaking"
    ]
  },
  {
    name: "Independent Alpha Research",
    cadence: "Event-driven",
    category: "Non-consensus Radar",
    url: "https://www.citriniresearch.com/",
    extract: [
      "Citrini, SemiAnalysis, Stratechery, The Information, high-signal Substacks",
      "contrarian scenarios and market psychology",
      "early language before institutional consensus"
    ]
  },
  {
    name: "Company Reality Check",
    cadence: "Earnings Season",
    category: "Fundamental Data",
    url: "https://www.sec.gov/edgar/search/",
    extract: [
      "earnings, guidance, backlog, capex, margins",
      "whether company data confirms the narrative",
      "beneficiaries, second-order winners, disrupted incumbents"
    ]
  },
  {
    name: "Policy and Budget Signals",
    cadence: "Event-driven",
    category: "State Capital",
    url: "https://www.congress.gov/",
    extract: [
      "defense, energy, chips, nuclear, critical minerals, stablecoin regulation",
      "government budget as capital flow",
      "regulatory tailwinds and blockers"
    ]
  }
];

function buildRawFacts(moments) {
  return moments.flatMap((moment) =>
    moment.evidence.map((evidence) => ({
      ...evidence,
      moment: moment.title
    }))
  );
}

function applyDashboardData(payload) {
  if (!payload || typeof payload !== "object") return;

  if (Array.isArray(payload.moments)) {
    kairosMoments = payload.moments;
  }

  if (Array.isArray(payload.capitalActions)) {
    capitalActions = payload.capitalActions;
  }

  if (Array.isArray(payload.watchUniverse)) {
    watchUniverse = payload.watchUniverse;
  }

  rawFacts = buildRawFacts(kairosMoments);
  state.moments = kairosMoments;
}

async function loadDashboardData() {
  try {
    const response = await fetch("data/moments.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    applyDashboardData(payload);
  } catch (error) {
    console.warn("KAIROS data fallback active:", error);
  }
}

function t(key) {
  return translations[state.language]?.[key] || translations.ja[key] || key;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });
}

function momentField(moment, field) {
  return momentCopy[moment.id]?.[state.language]?.[field] || momentCopy[moment.id]?.ja?.[field] || moment[field];
}

function rerenderDashboard() {
  applyStaticTranslations();
  renderHero();
  renderFacts();
  renderCapitalActions();
  renderWatchUniverse();
  renderArchive();
  renderMoments();
  renderLedger();
  renderTransmission();
}

function getVisibleMoments() {
  if (state.filter === "all") return state.moments;
  return state.moments.filter((moment) => moment.category === state.filter);
}

function renderHero() {
  const moments = state.moments;
  const top = [...moments].sort((a, b) => b.score - a.score)[0];
  const average = Math.round(moments.reduce((sum, moment) => sum + moment.score, 0) / moments.length);

  document.getElementById("heroTheme").textContent = top.title;
  document.getElementById("heroVerdict").textContent = momentField(top, "oracleView");
  document.getElementById("momentCount").textContent = moments.length;
  document.getElementById("avgScore").textContent = average;
  document.getElementById("topSignalTitle").textContent = top.title;
  document.getElementById("topSignalText").textContent = momentField(top, "signal");

  const gap = [...moments].sort((a, b) => b.score - a.score)[1];
  document.getElementById("gapTitle").textContent = gap.title;
  document.getElementById("gapText").textContent = momentField(gap, "nonConsensus");
}

function renderMoments() {
  const grid = document.getElementById("momentGrid");
  grid.innerHTML = "";

  getVisibleMoments().forEach((moment) => {
    const card = document.createElement("article");
    card.className = "moment-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${t("ui.open")} ${moment.title}`);
    card.innerHTML = `
      <div class="score-row">
        <span class="score">Kairos ${moment.score}</span>
        <span class="tag">${moment.review} ${t("ui.review")}</span>
      </div>
      <h3>${moment.title}</h3>
      <p>${momentField(moment, "oracleView")}</p>
      <span class="tag">${moment.evidence.length} ${t("ui.evidenceLinks")}</span>
      <div class="watchlist">
        ${moment.watchlist.map((ticker) => `<span class="ticker">${ticker}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openMoment(moment.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openMoment(moment.id);
    });
    grid.appendChild(card);
  });
}

function renderFacts() {
  const table = document.getElementById("factTable");
  table.innerHTML = rawFacts
    .map(
      (fact) => `
      <tr>
        <td>${fact.date}</td>
        <td><strong>${fact.source}</strong><br><span class="ledger-status">${fact.moment}</span></td>
        <td><span class="fact-label">${fact.type}</span></td>
        <td>${fact.fact}</td>
        <td><a href="${fact.url}" target="_blank" rel="noreferrer">${t("ui.open")}</a></td>
      </tr>
    `
    )
    .join("");
}

function renderCapitalActions() {
  renderCapitalActionSummary();
  renderCapitalFlowBoard();
}

function renderCapitalActionSummary() {
  const summary = document.getElementById("capitalActionSummary");
  const byManager = countBy(capitalActions, "manager");
  const byAction = countBy(capitalActions, "action");
  const latestDate = capitalActions
    .map((action) => action.date)
    .sort()
    .reverse()[0];

  const pills = [
    `${capitalActions.length} ${t("ui.actions")}`,
    `${t("ui.latest")} ${latestDate}`,
    ...Object.entries(byManager).map(([name, count]) => `${name} ${count}`),
    ...Object.entries(byAction).map(([name, count]) => `${name} ${count}`)
  ];

  summary.innerHTML = pills.map((pill) => `<span class="action-pill">${pill}</span>`).join("");
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function renderCapitalFlowBoard(selectedId = capitalFlowThemes[0].id) {
  const board = document.getElementById("capitalFlowBoard");
  const detail = document.getElementById("capitalFlowDetail");
  const managers = [...new Set(capitalFlowThemes.map((theme) => theme.manager))];
  const selected = capitalFlowThemes.find((theme) => theme.id === selectedId) || capitalFlowThemes[0];

  board.innerHTML = `
    <section class="flow-column">
      <h4>Manager</h4>
      ${managers
        .map((manager) => {
          const count = capitalFlowThemes.filter((theme) => theme.manager === manager).length;
          return `<button class="flow-node" data-flow-manager="${manager}" style="--flow-size: ${Math.min(100, count * 28)}%">
            <strong>${manager}</strong><span>${count} themes</span>
          </button>`;
        })
        .join("")}
    </section>
    <section class="flow-column">
      <h4>Theme</h4>
      ${capitalFlowThemes
        .map(
          (theme) => `<button class="flow-node ${theme.id === selected.id ? "is-active" : ""}" data-flow-theme="${theme.id}" style="--flow-size: ${theme.size}%">
            <strong>${theme.theme}</strong><span>${theme.manager}</span>
          </button>`
        )
        .join("")}
    </section>
    <section class="flow-column">
      <h4>Tickers</h4>
      ${selected.tickers
        .map((ticker) => {
          const actions = capitalActions.filter((action) => action.ticker === ticker);
          const size = Math.min(100, 24 + actions.length * 18);
          return `<button class="flow-node" data-flow-ticker="${ticker}" style="--flow-size: ${size}%">
            <strong>${ticker}</strong><span>${actions.length || 1} fact rows</span>
          </button>`;
        })
        .join("")}
    </section>
  `;

  renderFlowDetail(selected);

  board.querySelectorAll("[data-flow-theme]").forEach((button) => {
    button.addEventListener("click", () => renderCapitalFlowBoard(button.dataset.flowTheme));
  });

  board.querySelectorAll("[data-flow-ticker]").forEach((button) => {
    button.addEventListener("click", () => renderTickerDetail(button.dataset.flowTicker));
  });

  board.querySelectorAll("[data-flow-manager]").forEach((button) => {
    button.addEventListener("click", () => {
      const theme = capitalFlowThemes.find((item) => item.manager === button.dataset.flowManager);
      renderCapitalFlowBoard(theme.id);
    });
  });

  function renderFlowDetail(theme) {
    const rows = capitalActions.filter((action) => theme.tickers.includes(action.ticker));
    detail.innerHTML = `
      <span class="card-kicker">${theme.manager}</span>
      <h4>${theme.theme}</h4>
      <p>${theme.read}</p>
      ${rows.map(flowActionRow).join("")}
    `;
  }

  function renderTickerDetail(ticker) {
    const rows = capitalActions.filter((action) => action.ticker === ticker);
    detail.innerHTML = `
      <span class="card-kicker">${t("ui.tickerDetail")}</span>
      <h4>${ticker}</h4>
      ${rows.length ? rows.map(flowActionRow).join("") : `<p>${t("ui.noRows")}</p>`}
    `;
  }
}

function flowActionRow(action) {
  return `
    <div class="flow-action-row">
      <strong>${action.date} · ${action.manager} · ${action.vehicle} · <span class="${getActionClass(action.action)}">${action.action}</span></strong>
      <p>${action.sizeValue} · ${action.weightChange}<br>${action.note}</p>
      <a href="${action.url}" target="_blank" rel="noreferrer">${action.source}</a>
    </div>
  `;
}

function renderArchive() {
  const list = document.getElementById("archiveList");
  list.innerHTML = weeklyBriefs
    .map(
      (brief) => `
      <button class="archive-item ${brief.id === state.selectedBrief ? "is-active" : ""}" data-brief="${brief.id}">
        <span>${brief.id}</span>
        <strong>${brief.title.replace("KAIROS Weekly ", "")}</strong>
        <small>${brief.status}</small>
      </button>
    `
    )
    .join("");

  document.querySelectorAll(".archive-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedBrief = button.dataset.brief;
      renderArchive();
    });
  });

  const selected = weeklyBriefs.find((brief) => brief.id === state.selectedBrief) || weeklyBriefs[0];
  document.getElementById("archiveReport").innerHTML = `
    <span class="card-kicker">${selected.dateRange}</span>
    <h3>${selected.title}</h3>
    <p class="archive-thesis">${selected.thesis}</p>
    <div class="archive-section">
      <h4>${t("archive.moments")}</h4>
      <div class="watchlist">
        ${selected.moments.map((moment) => `<span class="ticker">${moment}</span>`).join("")}
      </div>
    </div>
    <div class="archive-section">
      <h4>${t("archive.capitalFlow")}</h4>
      <p>${selected.capitalFlow}</p>
    </div>
    <div class="archive-section">
      <h4>${t("archive.pointToMap")}</h4>
      <p>${selected.mapRead}</p>
    </div>
    <div class="archive-section">
      <h4>${t("archive.watchNext")}</h4>
      ${listItems(selected.watchNext)}
    </div>
    <div class="archive-section">
      <h4>${t("detail.futureReceipt")}</h4>
      <p>${selected.futureReceipt}</p>
    </div>
  `;

  document.getElementById("monthlyStrip").innerHTML = monthlySummaries
    .map(
      (summary) => `
      <article class="monthly-card">
        <span class="card-kicker">${summary.id} · ${summary.status}</span>
        <h3>${summary.title}</h3>
        <p>${summary.read}</p>
        <h4>${t("archive.monthlyQuestions")}</h4>
        ${listItems(summary.openQuestions)}
      </article>
    `
    )
    .join("");
}

function getActionClass(action) {
  if (["Buy", "Add", "New", "Conviction Build"].includes(action)) return "action-buy";
  if (["Sell", "Trim", "Exit", "Conviction Break"].includes(action)) return "action-sell";
  return "";
}

function renderWatchUniverse() {
  const grid = document.getElementById("watchGrid");
  grid.innerHTML = watchUniverse
    .map(
      (source) => `
      <article class="watch-card">
        <span class="card-kicker">${source.category}</span>
        <h3>${source.name}</h3>
        <p class="watch-meta">${source.cadence}</p>
        <ul>
          ${source.extract.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <a href="${source.url}" target="_blank" rel="noreferrer">${t("ui.openSource")}</a>
      </article>
    `
    )
    .join("");
}

function renderLedger() {
  const list = document.getElementById("ledgerList");
  const latestBriefId = weeklyBriefs[0]?.id || state.selectedBrief;
  list.innerHTML = state.moments
    .map(
      (moment) => `
      <article class="ledger-item">
        <div class="ledger-date">${latestBriefId}<br>${moment.review} ${t("ui.review")}</div>
        <div>
          <h3>${moment.title}</h3>
          <p>${momentField(moment, "futureReceipt")}</p>
        </div>
        <div class="ledger-status">${t("ui.statusPending")}</div>
      </article>
    `
    )
    .join("");
}

function renderTransmission() {
  const board = document.getElementById("transmissionBoard");
  const visibleMoments = getVisibleMoments();
  board.innerHTML = visibleMoments
    .map(
      (moment) => `
      <article class="transmission-column">
        <h3>${moment.title}</h3>
        <div class="map-flow">
          ${moment.map
            .map(
              (node) => `
              <div class="map-node" style="--node-size: ${node.size}%">
                <strong>${node.label}</strong>
                <span>${node.items.join(" · ")}</span>
              </div>
            `
            )
            .join("")}
        </div>
        <p class="white-space"><strong>${t("ui.whiteSpace")}:</strong> ${momentField(moment, "whitespace")}</p>
      </article>
    `
    )
    .join("");
}

function openMoment(id) {
  const moment = state.moments.find((item) => item.id === id);
  if (!moment) return;

  const dialog = document.getElementById("momentDialog");
  document.getElementById("dialogContent").innerHTML = `
    <div class="dialog-body">
      <span class="score">Kairos ${moment.score}</span>
      <h2>${moment.title}</h2>
      <p>${momentField(moment, "oracleView")}</p>
      <div class="detail-grid">
        ${detailBlock(t("detail.atTheTime"), momentField(moment, "atTheTime"))}
        ${detailBlock(t("detail.signal"), momentField(moment, "signal"))}
        ${detailBlock(t("detail.mechanism"), momentField(moment, "mechanism"))}
        ${detailBlock(t("detail.capitalPath"), listItems(moment.moneyPath))}
        ${detailBlock(t("detail.valueChain"), listItems(moment.valueChain))}
        ${detailBlock(t("detail.evidence"), evidenceItems(moment.evidence))}
        ${detailBlock(t("detail.consensus"), momentField(moment, "consensus"))}
        ${detailBlock(t("detail.nonConsensus"), momentField(moment, "nonConsensus"))}
        ${detailBlock(t("detail.watchlist"), listItems(moment.watchlist))}
        ${detailBlock(t("detail.futureReceipt"), momentField(moment, "futureReceipt"))}
        ${detailBlock(t("detail.falsifier"), momentField(moment, "falsifier"))}
      </div>
    </div>
  `;
  dialog.showModal();
}

function detailBlock(title, content) {
  return `
    <section class="detail-block">
      <h3>${title}</h3>
      ${content.startsWith("<") ? content : `<p>${content}</p>`}
    </section>
  `;
}

function listItems(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function evidenceItems(items) {
  return `
    <div class="evidence-list">
      ${items
        .map(
          (item) => `
          <div class="evidence-item">
            <span class="evidence-meta">${item.date} · ${item.source} · ${item.type}</span>
            <p>${item.fact}</p>
            <a href="${item.url}" target="_blank" rel="noreferrer">${t("ui.openSource")}</a>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderMoments();
      renderTransmission();
    });
  });
}

function setupDialog() {
  const dialog = document.getElementById("momentDialog");
  document.querySelector(".close-button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.lang;
      localStorage.setItem("kairosLanguage", state.language);
      rerenderDashboard();
    });
  });
}

async function init() {
  await loadDashboardData();
  rerenderDashboard();
  setupFilters();
  setupDialog();
  setupLanguageSwitcher();
}

init();
