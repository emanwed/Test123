import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Section } from "../Section";
import { Reveal } from "../motion";
import { funding } from "@/lib/content";

export function Fundraising() {
  return (
    <Section tone="dark" id="fundraising">
      <div className="grid-overlay absolute inset-0" />
      <div className="relative grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow on-dark">Investors</p>
          <h2 className="h-section mt-4 text-balance text-3xl text-white md:text-5xl">
            {funding.announced ? `DaleelStore raises ${funding.amount} ${funding.roundName}` : "We are preparing our next chapter."}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {funding.announced
              ? `Led by ${funding.leadInvestor}, with participation from ${funding.investors.join(", ")}.`
              : "A profitable, fast-growing B2B business, a consumer brand with a million customers and proprietary infrastructure in payments and risk. We are opening conversations with investors who want to build the digital value layer of the region with us."}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {funding.highlights.map((h, i) => (
              <Reveal key={h} as="li" delay={i} className="card-dark flex items-start gap-3 p-4 text-sm text-white/85">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-mint" /> {h}
              </Reveal>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/investors/" className="btn btn-light">Investor overview <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact/?topic=investors" className="btn btn-ghost-dark">Request the deck</Link>
          </div>
        </div>
        <Reveal className="lg:col-span-5">
          <div className="card-dark p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Use of funds</p>
            <ul className="mt-4 divide-y divide-white/10">
              {funding.useOfFunds.map((u) => (
                <li key={u.title} className="py-3">
                  <p className="font-bold text-white">{u.title}</p>
                  <p className="text-sm text-white/65">{u.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-white/40">Backed by</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {funding.investors.map((i) => (
                <span key={i} className="rounded-full border border-dashed border-white/20 px-3 py-1 text-xs text-white/60">{i}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
