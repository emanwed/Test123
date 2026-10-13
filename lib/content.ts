/**
 * Single source of truth for all site copy and data.
 *
 * Provenance legend (see README "Content audit"):
 *   [internal]   from company Slack announcements / Metabase data lake
 *   [public]     from public web (company.daleelstore.com, daleelstore.com, press)
 *   [placeholder] dummy data to be replaced before launch
 */

export const site = {
  name: "DaleelStore",
  legalName: "DaleelStore for Information Technology Company, LLC", // [public] terms of use
  tagline: "The digital value infrastructure of the Middle East",
  description:
    "DaleelStore is Saudi Arabia's leading digital gift-card and e-voucher ecosystem: a consumer marketplace, a B2B distribution platform, an API, and a fraud-protection layer serving over a million customers and hundreds of partners.",
  url: "https://company.daleelstore.com",
  storeUrl: "https://daleelstore.com",
  businessUrl: "https://business.daleelstore.com",
  email: "hello@daleelstore.com", // [placeholder]
  pressEmail: "press@daleelstore.com", // [placeholder]
  investorsEmail: "investors@daleelstore.com", // [placeholder]
  hq: "Riyadh, Saudi Arabia", // [public] LinkedIn / Crunchbase. Verify vs Cairo entity copy on daleelstore.com/about
  founded: 2018, // [internal] CEO all-hands, Aug 2025 ("Since 2018")
  social: {
    linkedin: "https://www.linkedin.com/company/daleelstore",
    x: "https://x.com/daleelstore", // [placeholder]
    instagram: "https://www.instagram.com/daleelstore", // [placeholder]
    tiktok: "https://www.tiktok.com/@daleelstore", // [placeholder]
  },
  apps: {
    ios: "https://apps.apple.com/sa/app/daleelstore/id1390260573", // [public]
    android: "https://play.google.com/store/apps/details?id=com.daleelstore", // [public]
  },
};

/* ------------------------------------------------------------------ */
/* Headline traction numbers                                           */
/* ------------------------------------------------------------------ */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string; note?: string; decimals?: number };

export const heroStats: Stat[] = [
  { value: 1, suffix: "M+", label: "customers served", note: "[internal] CEO all-hands, Aug 2025" },
  { value: 10, suffix: "M+", label: "orders fulfilled since 2018", note: "[internal] data lake, Oct 2026" },
  { value: 400, suffix: "+", label: "brand & distribution partners", note: "[internal] CEO all-hands, Aug 2025" },
  { value: 3000, suffix: "+", label: "SKUs across 9 categories", note: "[internal] data lake, Oct 2026" },
];

export const tractionStats: Stat[] = [
  { value: 193, suffix: "%", label: "B2B revenue growth, Q3 2025 vs Q3 2024", note: "[internal]" },
  { value: 20.8, prefix: "SAR ", suffix: "M", decimals: 1, label: "record monthly B2B revenue (Sep 2025)", note: "[internal]" },
  { value: 71, suffix: "%", label: "B2B profit growth, Q3 2025 YoY", note: "[internal]" },
  { value: 19, suffix: "%", label: "active reseller base growth in one quarter", note: "[internal]" },
  { value: 20, suffix: "", label: "regional storefronts, 4 currencies", note: "[internal] data lake" },
  { value: 140, suffix: "K+", label: "customers with tokenised cards on file", note: "[internal] Feb 2025" },
];

/** Orders per year from the data lake (count of orders created). [internal] */
export const ordersByYear = [
  { year: 2018, orders: 101104 },
  { year: 2019, orders: 292374 },
  { year: 2020, orders: 753731 },
  { year: 2021, orders: 917747 },
  { year: 2022, orders: 1089838 },
  { year: 2023, orders: 1625068 },
  { year: 2024, orders: 1876158 },
  { year: 2025, orders: 2072024 },
  { year: 2026, orders: 1714207, partial: true }, // Jan–mid Oct 2026
];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */
export type Product = {
  slug: string;
  name: string;
  short: string;
  audience: string;
  tagline: string;
  description: string;
  accent: string; // tailwind color token
  icon: "store" | "briefcase" | "code" | "shield" | "sparkles" | "layers" | "gift";
  features: { title: string; body: string }[];
  howItWorks: { step: string; body: string }[];
  proof: { label: string; value: string }[];
  cta: { label: string; href: string };
  demo: "consumer" | "business" | "api" | "guard" | "loyalty" | "x" | "bonus";
};

export const products: Product[] = [
  {
    slug: "daleelstore",
    name: "DaleelStore",
    short: "Consumer marketplace",
    audience: "Consumers",
    tagline: "The region's largest marketplace for digital cards, gaming credit and top-ups.",
    description:
      "Web, iOS and Android storefronts where more than a million customers buy gift cards, game credits, app-store cards, telecom recharges and services from 400+ brands, delivered instantly and paid for with the methods they already trust.",
    accent: "indigo",
    icon: "store",
    features: [
      { title: "3,000+ SKUs, 9 categories", body: "Games, app stores, shopping, restaurants, telecom recharge, services and DaleelStore's own gift cards." },
      { title: "Instant, automated delivery", body: "Direct API connections to suppliers such as STC, Mobily and Zain deliver codes in seconds, not hours." },
      { title: "Every payment method that matters", body: "mada, Apple Pay, cards, STC Pay, Tabby, SADAD, Fawry and PayPal, orchestrated through MoneyHash for higher acceptance." },
      { title: "Gifting built in", body: "Send any card as a designed gift with a personal message, scheduled for the occasion." },
      { title: "Wallet and DaleelStars", body: "Top up a wallet, earn points on every order and redeem them at checkout." },
      { title: "Local in 20 storefronts", body: "Dedicated catalogues for KSA, UAE, Kuwait, Qatar, Bahrain, Oman, Egypt and global markets in SAR, USD, EGP and KWD." },
    ],
    howItWorks: [
      { step: "Choose", body: "Browse by brand, category or occasion across web and mobile." },
      { step: "Pay", body: "One-tap checkout with tokenised cards, wallet balance or BNPL." },
      { step: "Receive", body: "The code lands in the app, by email and by WhatsApp within seconds." },
    ],
    proof: [
      { label: "Customers", value: "1M+" },
      { label: "Orders in 2025", value: "2.07M" },
      { label: "App rating", value: "4.5★" },
    ],
    cta: { label: "Visit daleelstore.com", href: "https://daleelstore.com" },
    demo: "consumer",
  },
  {
    slug: "daleel-business",
    name: "DaleelBusiness",
    short: "B2B distribution platform",
    audience: "Banks, wallets, telcos, resellers, corporates",
    tagline: "Wholesale digital value for banks, wallets, resellers and enterprises.",
    description:
      "A self-serve B2B platform where partners fund a wallet, buy in bulk at wholesale pricing, distribute codes to their own customers or employees, and reconcile everything with live reports. The engine behind loyalty catalogues at leading Saudi banks and hundreds of active resellers.",
    accent: "violet",
    icon: "briefcase",
    features: [
      { title: "Wallet-funded bulk ordering", body: "Pre-fund in SAR, USD, EGP or KWD and order thousands of codes in one transaction." },
      { title: "Loyalty-programme catalogues", body: "Powering redemption for bank and telco programmes such as Mokafaa, Akthr, Hassad and Qitaf." },
      { title: "Co-branded products", body: "Issue partner-branded cards, like the Riyad Bank gaming card, with custom denominations." },
      { title: "Reseller tooling", body: "Stock alerts, retail-price feeds, invoices with tax IDs, and an account team that onboards partners from first SAR to first order." },
      { title: "Marketplace integrations", body: "Native Salla app and marketplace listings so merchants can sell our catalogue inside their own stores." },
      { title: "Reports and reconciliation", body: "Sales, cost and wallet-movement reports filterable by date, product and payment method." },
    ],
    howItWorks: [
      { step: "Onboard", body: "KYB in days, contract, and a funded wallet." },
      { step: "Order", body: "Buy via dashboard, bulk upload, or API at wholesale pricing." },
      { step: "Distribute", body: "Deliver codes through your app, CRM, POS or HR system." },
      { step: "Reconcile", body: "Live wallet statement and monthly audit reports." },
    ],
    proof: [
      { label: "Record B2B month", value: "SAR 20.8M" },
      { label: "B2B revenue growth, Q3 2025", value: "+193%" },
      { label: "Active resellers, QoQ", value: "+19%" },
    ],
    cta: { label: "Talk to our B2B team", href: "/contact/?topic=business" },
    demo: "business",
  },
  {
    slug: "daleel-api",
    name: "Daleel API",
    short: "Catalogue & fulfilment API",
    audience: "Developers, platforms, super-apps",
    tagline: "One integration to sell 3,000+ digital products with real-time stock and pricing.",
    description:
      "A REST API and webhooks that expose the full DaleelStore catalogue, multi-currency pricing, live availability and instant fulfilment. Built for wallets, super-apps, telcos and marketplaces that want to embed digital cards without holding inventory.",
    accent: "mint",
    icon: "code",
    features: [
      { title: "Catalogue and pricing", body: "Brands, denominations, retail and partner prices in SAR, USD, EGP and KWD." },
      { title: "Live availability", body: "Stock signals and out-of-stock webhooks so you never sell a product you cannot deliver." },
      { title: "Fulfilment and webhooks", body: "Create an order, receive the code, get notified on every status change." },
      { title: "Sandbox and keys", body: "Test environment, scoped API keys and request signing out of the box." },
      { title: "Supplier-grade uptime", body: "Backed by direct supplier APIs with automatic failover between sources." },
      { title: "Partner success", body: "Integration engineers and a shared Slack channel from kickoff to go-live." },
    ],
    howItWorks: [
      { step: "GET /catalog", body: "Pull products, denominations and your partner prices." },
      { step: "POST /orders", body: "Place an order against your wallet balance." },
      { step: "Webhook", body: "Receive fulfilment events and the encrypted code payload." },
    ],
    proof: [
      { label: "Products", value: "3,000+" },
      { label: "Currencies", value: "4" },
      { label: "Supplier APIs", value: "15+" },
    ],
    cta: { label: "Request API access", href: "/contact/?topic=api" },
    demo: "api",
  },
  {
    slug: "daleel-guard",
    name: "DaleelGuard",
    short: "Fraud detection & prevention",
    audience: "Merchants, fintechs, marketplaces",
    tagline: "Risk scoring trained on millions of digital-goods orders.",
    description:
      "DaleelGuard scores every request and order in real time, using signals learned from eight years of fighting fraud in one of the highest-risk categories in e-commerce. Now available to merchants as a service, with the first paying clients live in 2026.",
    accent: "amber",
    icon: "shield",
    features: [
      { title: "Real-time order scoring", body: "Device, velocity, payment and behavioural signals combined into a single risk score." },
      { title: "Tuned for digital goods", body: "Models trained on 10M+ orders where delivery is instant and chargebacks are expensive." },
      { title: "Rules plus models", body: "Country allow-lists, velocity rules and manual review queues alongside the model." },
      { title: "Drop-in integration", body: "A single API call before checkout, or a white-label review console." },
      { title: "Proven internally first", body: "Protects DaleelStore's own checkout across web, iOS and Android." },
      { title: "Analyst support", body: "Shared playbooks and weekly reviews with our fraud operations team." },
    ],
    howItWorks: [
      { step: "Score", body: "Send order context; receive a score and reason codes in milliseconds." },
      { step: "Decide", body: "Approve, review or decline based on your thresholds." },
      { step: "Learn", body: "Feed back outcomes to keep the model sharp." },
    ],
    proof: [
      { label: "Orders scored", value: "10M+" },
      { label: "First paying client", value: "2026" },
      { label: "Decision latency", value: "<150ms" }, // [placeholder]
    ],
    cta: { label: "Protect your checkout", href: "/contact/?topic=guard" },
    demo: "guard",
  },
  {
    slug: "daleel-loyalty",
    name: "Daleel Loyalty & Wallet",
    short: "Wallet, points and rewards engine",
    audience: "Consumers and loyalty programmes",
    tagline: "A wallet and rewards engine that turns one-time buyers into members.",
    description:
      "DaleelStars points, cashback, referrals, streaks and badges, all backed by a stored-value wallet that customers top up with cards, bank rewards or loyalty points from partners. The same engine is exposed to partners as a redemption network.",
    accent: "violet",
    icon: "sparkles",
    features: [
      { title: "DaleelStars", body: "Earn on every order, redeem at checkout, with occasion-based boosts." },
      { title: "Stored-value wallet", body: "Top up with cards, DaleelStore gift cards or partner points; spend instantly." },
      { title: "Partner points in", body: "Customers convert bank and telco points into DaleelStore balance." },
      { title: "Gamification", body: "Streaks, badges and challenges that lift retention and frequency." },
      { title: "Referral programme", body: "Invite friends, earn credit, tracked end to end." },
      { title: "Cashback and campaigns", body: "Run occasions with discounts, cashback or double points in minutes." },
    ],
    howItWorks: [
      { step: "Earn", body: "Points on purchases, referrals and challenges." },
      { step: "Convert", body: "Bring points from partner programmes into the wallet." },
      { step: "Redeem", body: "Pay for any product with balance or points." },
    ],
    proof: [
      { label: "Returning customers", value: "62%" }, // [placeholder]
      { label: "Wallet top-up sources", value: "6" },
      { label: "Partner programmes", value: "4+" },
    ],
    cta: { label: "Partner your programme", href: "/contact/?topic=loyalty" },
    demo: "loyalty",
  },
  {
    slug: "daleelx",
    name: "DaleelX",
    short: "Issue your own branded vouchers",
    audience: "Brands and retailers",
    tagline: "Launch, distribute and redeem your own gift cards on our rails.",
    description:
      "DaleelX lets any brand issue its own digital gift cards and vouchers, sell them across DaleelStore, DaleelBusiness and partner channels, and redeem them in-store or online, with settlement and reporting handled by us.",
    accent: "indigo",
    icon: "layers",
    features: [
      { title: "Issue in days", body: "Branded card designs, denominations and terms configured without engineering." },
      { title: "Distribute everywhere", body: "List on DaleelStore, bank loyalty catalogues and reseller channels from day one." },
      { title: "Redeem anywhere", body: "POS, e-commerce plugin or API redemption with balance tracking." },
      { title: "Settlement and reporting", body: "Breakage, liability and redemption reports your finance team will love." },
      { title: "Campaign tools", body: "Promo codes, bundles and seasonal drops." },
      { title: "Charity and CSR", body: "Issue donation vouchers for causes, as we do with partner associations." },
    ],
    howItWorks: [
      { step: "Design", body: "Upload artwork and set denominations." },
      { step: "Sell", body: "Go live across our consumer and B2B channels." },
      { step: "Redeem", body: "Accept at checkout with a scan or a code." },
    ],
    proof: [
      { label: "Brands onboarded", value: "60+" }, // [placeholder]
      { label: "Time to launch", value: "< 2 weeks" }, // [placeholder]
      { label: "Channels", value: "3" },
    ],
    cta: { label: "Issue your card", href: "/contact/?topic=daleelx" },
    demo: "x",
  },
  {
    slug: "bonus",
    name: "Bonus",
    short: "Employee recognition & rewards",
    audience: "HR teams and employers",
    tagline: "Peer-to-peer recognition with rewards employees actually want.",
    description:
      "Bonus (bonus.sa) is DaleelStore's workplace recognition platform. Teams give points for great work, managers run budgets, and employees redeem for thousands of gift cards from the DaleelStore catalogue. Launched in 2024.",
    accent: "mint",
    icon: "gift",
    features: [
      { title: "Peer recognition", body: "Public shout-outs with points, in Slack and in the app." },
      { title: "Manager budgets", body: "Allocate credits by team and track spend." },
      { title: "Rewards catalogue", body: "Instant redemption across the full DaleelStore catalogue." },
      { title: "Culture analytics", body: "Who recognises whom, values most celebrated, engagement over time." },
      { title: "Slack integration", body: "Recognise without leaving the conversation." },
      { title: "Arabic-first", body: "Built for GCC workplaces with bilingual UX." },
    ],
    howItWorks: [
      { step: "Recognise", body: "Give points tied to a company value." },
      { step: "Celebrate", body: "Feed, leaderboards and milestones." },
      { step: "Redeem", body: "Employees pick any card, delivered instantly." },
    ],
    proof: [
      { label: "Launched", value: "2024" },
      { label: "Rewards available", value: "3,000+" },
      { label: "Companies", value: "40+" }, // [placeholder]
    ],
    cta: { label: "Visit bonus.sa", href: "https://bonus.sa" },
    demo: "bonus",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Audience segments (B2B)                                             */
/* ------------------------------------------------------------------ */
export const segments = [
  {
    id: "banks",
    label: "Banks & loyalty",
    headline: "Rewards your cardholders redeem the same minute.",
    body: "We power redemption catalogues and co-branded products for leading Saudi banks. Points convert into 3,000+ products with instant delivery, settlement in SAR and monthly audit statements.",
    bullets: ["Points-to-value conversion", "Co-branded gift and gaming cards", "Catalogue API or hosted store"],
    logos: ["Al Rajhi Mokafaa", "Alinma Akthr", "Riyad Bank Hassad", "STC Qitaf"],
  },
  {
    id: "telcos",
    label: "Telcos & wallets",
    headline: "Embed digital cards and top-ups in your super-app.",
    body: "Direct integrations with STC, Mobily and Zain, plus the full gift-card catalogue, exposed through one API with multi-currency pricing and webhooks.",
    bullets: ["Airtime and data bundles", "Gaming and app-store credit", "Wallet-funded settlement"],
    logos: ["STC", "Mobily", "Zain", "STC Pay"],
  },
  {
    id: "resellers",
    label: "Resellers & merchants",
    headline: "Wholesale pricing, live stock and tools to grow.",
    body: "Hundreds of active resellers buy through DaleelBusiness every month. Fund a wallet, order in bulk, get stock alerts and retail-price feeds, and sell through your own store, Salla app or POS.",
    bullets: ["Wholesale tiers", "Salla and marketplace integrations", "Dedicated account manager"],
    logos: ["Riyad Marketplace", "Taqarub", "Foz", "Salla"],
  },
  {
    id: "enterprises",
    label: "Enterprises & HR",
    headline: "Gift, reward and incentivise at any scale.",
    body: "Bulk gifting for Eid and Ramadan, employee recognition with Bonus, sales incentives and customer win-back campaigns, delivered by email, WhatsApp or API.",
    bullets: ["Bulk CSV or API sends", "Branded reward pages", "Budget control and reporting"],
    logos: ["Bonus", "Corporate gifting", "Incentives", "CSR vouchers"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Partners (names rendered as text badges; swap for logo SVGs)        */
/* ------------------------------------------------------------------ */
export const partnerGroups = {
  brands: ["PlayStation", "Xbox", "PUBG Mobile", "Yalla Ludo", "iTunes", "Google Play", "Amazon", "Noon", "Jarir", "Hungerstation", "Careem", "Mrsool", "Almosafer", "Airalo", "Nahdi", "LuLu", "Nice One", "The Chefz"],
  telecom: ["STC", "Mobily", "Zain", "STC Pay"],
  banks: ["Al Rajhi Bank", "Riyad Bank", "Alinma Bank"],
  payments: ["mada", "Apple Pay", "Tabby", "SADAD", "Fawry", "PayPal", "MoneyHash"],
  suppliers: ["Wupex", "WWG Card", "EZ PIN", "Mintroute", "Bamboo", "Abady", "Kuwait Star", "CardZone", "Joker", "Merit", "Reloadly"],
};

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */
export const timeline = [
  { year: "2018", title: "DaleelStore launches in Riyadh", body: "A gift-card and gaming-credit store built for Saudi gamers. First orders in February 2018." },
  { year: "2020", title: "Crossing 750K orders a year", body: "Lockdown-era demand triples volume; telecom top-ups and app-store cards join gaming." },
  { year: "2022", title: "DaleelBusiness goes live", body: "Wholesale platform for resellers and corporates, with wallet funding and bulk ordering." },
  { year: "2023", title: "Bank loyalty partnerships", body: "Redemption catalogues for Al Rajhi Mokafaa and STC Qitaf; retail-media partnership with ArabyAds." },
  { year: "2024", title: "New brand, new platform, Bonus launches", body: "Complete rebrand across web and apps, Seamless KSA partnerships, Riyad Bank Hassad and Alinma Akthr integrations, and the launch of Bonus." },
  { year: "2025", title: "Record B2B quarter", body: "SAR 20.8M in a single B2B month, +193% YoY revenue, direct STC top-up API, and the Riyad Bank co-branded gaming card." },
  { year: "2026", title: "DaleelGuard, MoneyHash and the next chapter", body: "First paying DaleelGuard clients, payment orchestration with MoneyHash, new CTO and growth leadership, and preparation for our next funding round." },
];

/* ------------------------------------------------------------------ */
/* Leadership (titles from internal directory, Oct 2026)               */
/* ------------------------------------------------------------------ */
export const leadership = [
  { name: "AbdulRahman M. Suliman", title: "Partner & Chief Executive Officer", bio: "Joined DaleelStore in 2023 after leadership roles at Careem and the Saudi Tourism Authority. Computer-engineering graduate (UQU) with Harvard executive education.", initials: "AS" },
  { name: "Khalid Olayan", title: "Chief Product Officer", bio: "Leads product, design and data. Drove the 2024 rebrand, the new checkout and wallet, and the Arabic UX-writing system used across the platform.", initials: "KO" },
  { name: "Muhammad Badrah", title: "Chief Technology Officer", bio: "20+ years in software engineering leadership, including CircleCI and Flipp. Scaling our engineering organisation and platform reliability.", initials: "MB" },
  { name: "Shehab Salah", title: "Chief Financial Officer", bio: "Owns finance, treasury and investor relations, including supplier wallets, reconciliation and the company's fundraising process.", initials: "SS" },
  { name: "Basheer Alomari", title: "Chief Commercial Officer", bio: "Leads B2B sales, resellers and bank partnerships. Delivered the record 2025 B2B quarter and the first DaleelGuard clients.", initials: "BA" },
  { name: "Ahmed Zaater", title: "Head of Growth & Communications", bio: "Brand, PR and retention. Leads communications for partnerships such as MoneyHash and the upcoming funding announcement.", initials: "AZ" },
  { name: "Saif Eliwat", title: "Head of Marketing", bio: "Performance marketing and SEO across KSA and international markets; 11+ years in regional agencies before DaleelStore.", initials: "SE" },
  { name: "Jumanah Olayan", title: "Supply & Procurement Manager", bio: "Manages 50+ supplier relationships, inventory health and new product launches across the catalogue.", initials: "JO" },
];

export const advisors = [
  // [placeholder] board / advisors
  { name: "Board member", title: "Independent director", initials: "BD" },
  { name: "Advisor", title: "Payments & risk", initials: "AD" },
];

/* ------------------------------------------------------------------ */
/* Values (CEO all-hands, Aug 2025) [internal]                          */
/* ------------------------------------------------------------------ */
export const values = [
  { title: "Customer obsession", body: "Everything starts with the customer. Their trust is our most valuable asset." },
  { title: "Great isn't good enough", body: "Each win is the next step toward something better." },
  { title: "People, then process", body: "Processes matter, but people drive real change." },
  { title: "Values, then attitude, then skills", body: "We can teach skills; we can't teach values." },
  { title: "Move fast", body: "Act, learn and adjust quickly instead of waiting for perfection." },
  { title: "Think big", body: "We imagine what DaleelStore can become in the region and the world." },
  { title: "Build awesome things", body: "Tech, partnerships and experiences people are proud to use and share." },
  { title: "Be bold and proud", body: "We started small and came far. We face challenges with confidence." },
];

/* ------------------------------------------------------------------ */
/* Investors & fundraising                                              */
/* ------------------------------------------------------------------ */
export const funding = {
  // [placeholder] round details to be confirmed by leadership before publishing
  announced: false,
  roundName: "Series A",
  amount: "Undisclosed",
  leadInvestor: "To be announced",
  investors: ["Lead investor", "Regional VC", "Strategic bank partner", "Angel syndicate"],
  useOfFunds: [
    { title: "Regional expansion", body: "Launch and localise storefronts in the UAE, Egypt and Kuwait with local payment rails." },
    { title: "Product and platform", body: "Daleel API, DaleelGuard and DaleelX as standalone revenue lines." },
    { title: "Supply and working capital", body: "Deeper direct supplier contracts and inventory for peak seasons." },
    { title: "Team", body: "Engineering, risk and enterprise sales hires in Riyadh and Cairo." },
  ],
  highlights: [
    "Profitable B2B line with +193% YoY revenue growth in Q3 2025",
    "10M+ orders and 1M+ customers served since 2018",
    "Embedded in the loyalty programmes of the Kingdom's largest banks",
    "Proprietary fraud engine now sold as a service",
  ],
};

/* ------------------------------------------------------------------ */
/* Newsroom                                                             */
/* ------------------------------------------------------------------ */
export type NewsItem = { date: string; category: "Company" | "Partnerships" | "Product"; title: string; excerpt: string; href?: string; placeholder?: boolean };

export const news: NewsItem[] = [
  { date: "2026-09-28", category: "Partnerships", title: "DaleelStore moves payment infrastructure to MoneyHash", excerpt: "Payment orchestration across multiple gateways to raise acceptance rates, lower processing cost and add new payment methods faster." },
  { date: "2026-09-17", category: "Product", title: "DaleelGuard signs its first paying client", excerpt: "Our in-house fraud detection and prevention system is now available to merchants, with a white-label option for partners." },
  { date: "2026-06-17", category: "Company", title: "Muhammad Badrah joins as Chief Technology Officer", excerpt: "Former CircleCI and Flipp engineering leader to scale DaleelStore's platform and teams." },
  { date: "2025-10-14", category: "Partnerships", title: "Riyad Bank and DaleelStore sign co-branded gaming card agreement", excerpt: "A co-branded gaming card offering exclusive deals and a seamless gaming experience for Riyad Bank customers." },
  { date: "2025-10-09", category: "Product", title: "STC top-up goes live with a direct API", excerpt: "Sawa, Sawa packages and Quicknet recharges, fully automated through a direct connection with STC." },
  { date: "2025-10-01", category: "Company", title: "Record quarter: SAR 20.8M monthly B2B revenue", excerpt: "+193% B2B revenue growth and +71% profit growth versus Q3 2024, with a 19% larger active reseller base." },
  { date: "2024-12-19", category: "Company", title: "DaleelStore unveils a new brand across web and apps", excerpt: "A complete overhaul of the brand, storefront, checkout and wallet experience." },
  { date: "2024-10-24", category: "Partnerships", title: "DaleelStore concludes Seamless KSA 2024 with partnership deals", excerpt: "Agreements with Moyasar, Qsalary, Maqsam, Adjust and others.", href: "https://english.mubasher.info/news/4358890/DaleelStore-concludes-Seamless-KSA-2024-with-mega-partnership-deals/" },
  { date: "2024-09-06", category: "Product", title: "Bonus, our employee recognition platform, is live", excerpt: "Peer-to-peer recognition with instant rewards from the DaleelStore catalogue." },
  { date: "2023-07-18", category: "Partnerships", title: "Exclusive retail-media partnership with ArabyAds' Ritelo", excerpt: "Bringing retail-media technology to the region's largest gift-card marketplace.", href: "https://mmaglobal.com/news/daleelstore-partners-exclusively-arabyads-ritelo-retail-media-technology" },
];

export const pressMentions = [
  // [placeholder] outlets; replace with real coverage
  { outlet: "Mubasher", quote: "Mega partnership deals at Seamless KSA 2024." },
  { outlet: "MMA Global", quote: "The region's largest gift-card marketplace." },
  { outlet: "Arab News", quote: "Placeholder quote from upcoming coverage." },
  { outlet: "Wamda", quote: "Placeholder quote from upcoming coverage." },
];

/* ------------------------------------------------------------------ */
/* Careers                                                              */
/* ------------------------------------------------------------------ */
export const openRoles = [
  // [placeholder] roles
  { title: "Senior Backend Engineer (Laravel / Go)", team: "Engineering", location: "Riyadh or Cairo", type: "Full-time" },
  { title: "Risk & Fraud Analyst", team: "DaleelGuard", location: "Riyadh", type: "Full-time" },
  { title: "Enterprise Account Executive", team: "DaleelBusiness", location: "Riyadh", type: "Full-time" },
  { title: "Product Designer", team: "Product", location: "Remote (GCC / Egypt)", type: "Full-time" },
  { title: "Partnerships Manager, Banks & Telcos", team: "Commercial", location: "Riyadh", type: "Full-time" },
];

export const perks = [
  { title: "Hybrid, two hubs", body: "Riyadh headquarters and a Cairo engineering hub, with remote-friendly teams." },
  { title: "Ownership", body: "Equity for every full-time employee." }, // [placeholder]
  { title: "Bonus, naturally", body: "Recognition points every month, redeemable on anything in our catalogue." },
  { title: "Learning budget", body: "Courses, conferences and certifications." }, // [placeholder]
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */
export const faqs = [
  { q: "What does DaleelStore do?", a: "We operate the region's largest marketplace for digital gift cards, gaming credit and top-ups, and we provide the B2B platform, API and fraud engine that let banks, telcos, resellers and enterprises distribute digital value to their own customers." },
  { q: "Which markets do you serve?", a: "Saudi Arabia is our home market. We operate dedicated storefronts for the UAE, Kuwait, Qatar, Bahrain, Oman, Egypt and international catalogues, with pricing in SAR, USD, EGP and KWD." },
  { q: "How do I become a reseller or partner?", a: "Use the contact form and choose 'DaleelBusiness'. Our commercial team completes onboarding, from KYB to a funded wallet, typically within days." },
  { q: "Do you offer an API?", a: "Yes. Daleel API exposes the catalogue, pricing, availability and fulfilment with webhooks and a sandbox. Request access through the contact page." },
  { q: "Are you raising capital?", a: "We are preparing our next funding round. Qualified investors can reach the CFO's office via the Investors page." },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                           */
/* ------------------------------------------------------------------ */
export const nav = {
  products: products.map((p) => ({ label: p.name, short: p.short, href: `/products/${p.slug}/`, icon: p.icon })),
  company: [
    { label: "About & leadership", href: "/company/" },
    { label: "Investors", href: "/investors/" },
    { label: "Newsroom", href: "/newsroom/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact", href: "/contact/" },
  ],
};
