# Content audit

Status key: **verified** = taken from an internal system (Slack announcement or Metabase data lake) or a public source with URL; **approx** = derived or rounded; **placeholder** = dummy, replace before launch.

## Company facts

| Claim | Value used | Source | Status |
|---|---|---|---|
| Founded | 2018 | CEO all-hands, Slack #general, 19 Aug 2025 ("Since 2018"); first order in data lake 17 Feb 2018 | verified (public LinkedIn says 2013, reconcile) |
| HQ | Riyadh | LinkedIn / Crunchbase; MoneyHash post correction "Riyadh" | verified (About page on daleelstore.com mentions Cairo entity, reconcile) |
| Legal name | DaleelStore for Information Technology Company, LLC | daleelstore.com terms of use | verified |
| Customers served | 1M+ | CEO all-hands, Aug 2025 | verified |
| Partners | 400+ | CEO all-hands, Aug 2025 | verified |
| Countries | 4 (copy says 20 storefronts) | CEO all-hands says 4 countries; data lake has 20 regional store catalogues | verified / approx |
| Orders since 2018 | 10M+ | Metabase `production.orders` count 10,442,251 (13 Oct 2026) | verified |
| Orders per year chart | 2018–2026 | Metabase, orders grouped by created year | verified |
| Ordering customer accounts | 620K+ (not shown) | Metabase distinct user_id | verified |
| SKUs | 3,000+ | Metabase `product_classes` = 3,004 | verified |
| Categories | 9 | Metabase `categories` (active) | verified |
| Products (brands) | 500+ | Metabase `products` = 516 | verified |
| Suppliers | 50+, 15+ API | Metabase `v_suppliers_information` active rows | approx |
| Record B2B month | SAR 20.8M | CCO post, Slack #ds-allupdates, 1 Oct 2025 | verified |
| B2B revenue growth Q3 2025 | +193% YoY | same | verified |
| B2B profit growth Q3 2025 | +71% YoY | same | verified |
| Active resellers | +19% in the quarter | same | verified |
| Tokenised cards | 140K+ users | CPO release notes, 13 Feb 2025 | verified |
| App rating | 4.5★ | App Store snapshot (varies by storefront) | approx |

## Products

| Product | Evidence | Notes |
|---|---|---|
| DaleelStore (consumer) | daleelstore.com, apps, release notes | Payment methods list from order tables (mada, Apple Pay, STC Pay, Tabby, SADAD, Fawry, PayPal) and MoneyHash rollout (Sep 2026) |
| DaleelBusiness | Release notes, CCO posts, Riyad Marketplace / Taqarub / Foz launches, Salla fields in `platform_order_customers` | "2022 goes live" in timeline is **approx** |
| Daleel API | Product newsletter April 2025 ("Updates to the Daleel API"), webhook tables | Endpoint names in the mockup are illustrative |
| DaleelGuard | First merchant contract 12 Mar 2026; first paying client 17 Sep 2026; `daleel_guard_score` column on orders | "<150ms latency" is **placeholder** |
| Daleel Loyalty & Wallet | DaleelStars page, wallet tables, Mokafaa/Akthr/Hassad/Qitaf integrations | "62% returning customers" is **placeholder** |
| DaleelX | Listed on company.daleelstore.com | "60+ brands", "<2 weeks" are **placeholder** |
| Bonus | Launched 6 Sep 2024 (Slack #general) | "40+ companies" is **placeholder** |

## People

Titles from the Slack directory (Oct 2026). Bios are drafted from internal announcements and public profiles; have each person approve their bio. CEO background (Careem, Saudi Tourism Authority, UQU, Harvard) from aimcongress.com speaker page. Board/advisors section is **placeholder**.

## Partners shown as names

Banks (Al Rajhi Mokafaa, Alinma Akthr, Riyad Bank Hassad), telcos (STC, Mobily, Zain), suppliers, brands and payment methods all appear in internal release notes or order tables. Logo usage rights must be confirmed before replacing text badges with logos.

## Placeholders to replace

- `site.email`, `site.pressEmail`, `site.investorsEmail`, social URLs other than LinkedIn
- `funding.*` (round name, amount, lead investor, investor list)
- `pressMentions` (Arab News, Wamda entries), media kit download link
- `openRoles`, `perks` (equity, learning budget)
- `advisors`
- Product proof points marked `[placeholder]` in `lib/content.ts`
- Timeline years for DaleelBusiness launch (2022) and first bank partnerships (2023)
