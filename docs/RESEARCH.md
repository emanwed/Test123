# Corporate-site research brief

Benchmarks reviewed before building, and what was adopted. Direct page fetches were blocked by the sandbox network policy, so structure notes come from indexed page copy and third-party teardowns rather than live inspection.

## What top corporate sites share

Products/Solutions mega-menu (by product and by audience) · Developers/API · Customers/case studies · Company (About, Leadership, Newsroom, Careers, Partners) · Contact/Book a demo · footer with Legal, Security, language switch.

| Site | Takeaways used here |
|---|---|
| Tamara | Funding rounds as first-class pages on the main domain; investors named inline; Financial Reports slot in footer. → `/investors` with round template and governance slot. |
| Tabby | Newsroom with Company / Partnerships / Product filters and a media kit. → `/newsroom` filters + media-kit section. |
| Checkout.com | Leadership index, newsroom, annual letter with hard numbers; animated UI mockups and scroll reveals. → leadership grid, animated product mockups. |
| Stripe | Bento product grid with hover detail, real HTML demos instead of GIFs. → product explorer with live CSS mockups. |
| Runa / Tremendous / Tillo | Stat strip in hero (payout options, countries, uptime); investors on About/Careers; compliance badges. → hero counters, traction section, risk & compliance block. |
| Prezzee / Wise | Founding-story timeline. → "Our story" timeline. |
| Rasan | Saudi IR hub as the formal local benchmark. → governance & reporting section. |
| Like Card / Resal / YouGotaGift | Audience-split CTAs (Merchant / Partner), API pages with uptime and sandbox, enterprise proof points. → audience switcher (Banks · Telcos · Resellers · Enterprises), Daleel API page. |

## Interactive patterns adopted

- Tabbed product explorer with animated mockups (Stripe-style progressive disclosure)
- Audience switcher with "live with" partner badges (Tillo / Like Card)
- Hero stat counters and an animated orders-per-year chart (Runa / Tremendous)
- Hub-and-spoke ecosystem diagram with orbiting rings
- Scroll-reveal sections, marquee of partner names, accordion FAQ

## Fundraising-ready checklist (from Tamara, Tabby, Resal, Foodics)

1. Funding announcement page with investor names/logos, round size, use of funds, CEO and lead-investor quotes, boilerplate (template in `Fundraising.tsx`, flip `funding.announced`).
2. Newsroom with category filters and a downloadable media kit.
3. About page = story timeline + mission + stat strip + leadership grid + "backed by".
4. Trust block: licences (confirm SCEGA / SAMA status), ISO 27001 / PCI if held, bank partner logos.
5. Reconcile public inconsistencies before investors look: founding year (2013 on LinkedIn vs 2018 internally), legal entity/HQ copy (Riyadh vs Cairo on daleelstore.com/about), placeholder zeros on the current company.daleelstore.com.

## Public facts about DaleelStore found

- company.daleelstore.com lists DaleelStore, DaleelBusiness, Daleel Loyalty, DaleelX; stats on the page are placeholders ("0 M").
- CEO AbdulRahman M. Suliman (Partner & CEO, joined 2023; ex-Careem, Saudi Tourism Authority) — aimcongress.com/speaker/1216, mmaglobal.com.
- Seamless KSA 2024 partnership deals (Moyasar, Qsalary, Maqsam, Adjust) — english.mubasher.info/news/4358890.
- ArabyAds Ritelo exclusive retail-media partnership, July 2023 — mmaglobal.com.
- Alinma "akthr" and Al Rajhi "mokafaa" campaign pages reference DaleelStore.
- No public funding round, investor or valuation found (Crunchbase, Wamda, MENAbytes, Magnitt).
- Name collisions to avoid in PR: "Daleel" (Bahrain fintech marketplace), "Daleel KSA" shopping app.

## Reference URLs

- https://company.daleelstore.com/ · https://daleelstore.com/en/about · https://daleelstore.com/en/stars
- https://tamara.co/en-SA/tamara-series-c · https://tamara.co/en-kw/about
- https://tabby.ai/press · https://tabby.ai/en-SA/about
- https://www.checkout.com/leadership · https://www.checkout.com/blog/annual-letter-2025
- https://stripe.com/newsroom/information · https://summify.io/discover/how-stripe-built-their-new-website-ypzNhw/
- https://runa.io/about · https://runa.io/why-runa
- https://www.tremendous.com/about/ · https://www.tremendous.com/newsroom/
- https://www.tillo.com/about-us · https://www.tillo.com/our-leadership
- https://prezzee.com/en-us/about · https://www.prezzee.com/business/
- https://blackhawknetwork.com/company
- https://www.foodics.com/press/saas-series-c-funding/
- https://rasan.sa/pages/ir
- https://wise.com/us/about/our-story
- https://en-saudi.likecard.com/about-us/ · https://likecard.com/business
- https://www.resal.me/en/resal-connect/ · https://www.resal.me/en/enterprises/ · https://resal.me/en/press-release/
- https://yougotagift.com/business/about-us/ · https://rewards.yougotagift.com/
- https://aimcongress.com/speaker/1216
- https://mmaglobal.com/news/daleelstore-partners-exclusively-arabyads-ritelo-retail-media-technology
- https://english.mubasher.info/news/4358890/DaleelStore-concludes-Seamless-KSA-2024-with-mega-partnership-deals/
- https://www.framer.com/community/marketplace/components/concept-stepper/ · https://azurodigital.com/fintech-website-examples/
- https://help.pr.co/en/articles/9619537-best-practices-setting-up-a-press-page
