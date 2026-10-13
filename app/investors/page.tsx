import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal, Counter } from "@/components/motion";
import { Growth } from "@/components/home/Growth";
import { Fundraising } from "@/components/home/Fundraising";
import { funding, tractionStats, site, news } from "@/lib/content";

export const metadata: Metadata = { title: "Investors", description: "Investor overview, traction and funding information." };

export default function InvestorsPage() {
  const thesis = [
    { t: "A category that is large and under-served", b: "Gift cards, gaming credit and top-ups are a multi-billion-SAR category in the GCC with fragmented, offline-heavy supply. We are the digital leader in Saudi Arabia." },
    { t: "A consumer brand and a B2B engine", b: "A million customers on the consumer side feed demand data and supply scale into a B2B business that grew 193% YoY in Q3 2025." },
    { t: "Proprietary infrastructure", b: "Direct supplier APIs, a stored-value wallet, payment orchestration and DaleelGuard, a fraud engine now sold to third parties." },
    { t: "Embedded in the Kingdom's financial system", b: "Redemption and co-branded products with the largest banks and the national telco, with new loyalty and marketplace channels launching every quarter." },
  ];
  return (
    <>
      <PageHero eyebrow="Investors" title="Backing the digital value layer of the Middle East." body="Daleel combines an eight-year consumer franchise with a profitable, fast-growing B2B and infrastructure business. This page summarises the opportunity; the full data room is available to qualified investors on request.">
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/?topic=investors" className="btn btn-light"><Mail className="h-4 w-4" /> Request the deck</Link>
          <a href={`mailto:${site.investorsEmail}`} className="btn btn-ghost-dark">{site.investorsEmail}</a>
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="At a glance" title="Key metrics" body="Internal figures as of October 2026. Audited numbers are shared in the data room." />
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tractionStats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="card p-6">
              <dt className="text-3xl font-extrabold text-navy"><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} /></dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Investment thesis" title="Why now, why Daleel" />
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {thesis.map((t, i) => (
            <Reveal key={t.t} as="li" delay={i} className="card p-7">
              <span className="text-sm font-extrabold text-indigo">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-extrabold text-navy">{t.t}</h3>
              <p className="mt-3 text-muted">{t.b}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Growth />
      <Fundraising />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Governance & reporting" title="Built to institutional standards." body="A placeholder for financial reports, governance documents and shareholder communications once the round closes." />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              { i: FileText, t: "Annual report", b: "FY2025 highlights, available in the data room." },
              { i: ShieldCheck, t: "Risk & compliance", b: "KYB on every B2B partner, DaleelGuard on every order, PCI-compliant payment partners." },
              { i: FileText, t: "Funding history", b: funding.announced ? `${funding.roundName}: ${funding.amount}` : "Bootstrapped and founder-funded to date. Next round in preparation." },
              { i: Mail, t: "Investor relations", b: `Office of the CFO · ${site.investorsEmail}` },
            ].map((c) => (
              <li key={c.t} className="card flex gap-4 p-5"><c.i className="h-6 w-6 shrink-0 text-indigo" /><span><span className="block font-bold text-navy">{c.t}</span><span className="text-sm text-muted">{c.b}</span></span></li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="tint">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Milestones" title="Recent company news" />
          <Link href="/newsroom/" className="btn btn-ghost">Newsroom <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <ul className="mt-8 divide-y divide-line">
          {news.filter((n) => n.category !== "Product").slice(0, 5).map((n) => (
            <li key={n.title} className="flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-6">
              <span className="w-28 shrink-0 text-xs font-bold text-muted">{n.date}</span>
              <span className="font-bold text-navy">{n.title}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
