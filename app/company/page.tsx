import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal, Counter } from "@/components/motion";
import { Timeline } from "@/components/home/Timeline";
import { Leadership } from "@/components/home/Leadership";
import { CTA } from "@/components/home/CTA";
import { values, heroStats, site, advisors } from "@/lib/content";

export const metadata: Metadata = { title: "Company", description: "Our story, mission, values and leadership." };

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="We make digital value move as easily as a message." body={`Founded in ${site.founded} in Riyadh, DaleelStore started as a store for Saudi gamers and grew into the platform that banks, telcos and enterprises use to reward, gift and top up millions of people across the region.`}>
        <dl className="grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label}><dt className="text-3xl font-extrabold text-white"><Counter value={s.value} suffix={s.suffix} /></dt><dd className="text-xs text-white/60">{s.label}</dd></div>
          ))}
        </dl>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="card p-8 md:p-10">
            <p className="eyebrow">Mission</p>
            <h2 className="h-section mt-4 text-3xl text-navy">Make every reward, gift and recharge instant, safe and delightful.</h2>
            <p className="mt-4 text-muted">We exist so that a customer never waits for a code, a partner never worries about fraud or stock, and a brand can reach anyone in the region with a few lines of code.</p>
          </Reveal>
          <Reveal delay={1} className="surface-navy rounded-3xl p-8 md:p-10">
            <p className="eyebrow on-dark">Vision</p>
            <h2 className="h-section mt-4 text-3xl text-white">The digital value layer for the Middle East and beyond.</h2>
            <p className="mt-4 text-white/70">Think big is one of our values. We are building the infrastructure that every bank, wallet, telco and employer in the region plugs into when they want to move value to people.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Values" title="Eight values that guide every decision." body="Shared by our CEO at the 2025 all-hands and lived every day across Riyadh and Cairo." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} as="li" delay={i} className="card p-6">
              <span className="text-xs font-extrabold text-indigo">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-extrabold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Timeline />
      <Leadership />

      <Section tone="tint">
        <SectionHeading eyebrow="Board & advisors" title="Guidance from operators and investors." body="Placeholder entries until board composition is finalised." />
        <ul className="mt-10 flex flex-wrap gap-4">
          {advisors.map((a) => (
            <li key={a.name} className="card flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender font-extrabold text-navy">{a.initials}</span>
              <span><span className="block font-bold text-navy">{a.name}</span><span className="text-sm text-muted">{a.title}</span></span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Riyadh HQ", b: "Commercial, product, operations and leadership." },
            { t: "Cairo hub", b: "Engineering, design and customer experience." },
            { t: "Everywhere", b: "20 storefronts, 4 currencies, partners across the GCC, Egypt and beyond." },
          ].map((o) => (
            <div key={o.t} className="card p-6"><h3 className="text-lg font-extrabold text-navy">{o.t}</h3><p className="mt-2 text-sm text-muted">{o.b}</p></div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/careers/" className="btn btn-primary">Join the team <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/newsroom/" className="btn btn-ghost">Newsroom</Link>
        </div>
      </Section>
      <CTA />
    </>
  );
}
