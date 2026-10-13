"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../motion";
import { products } from "@/lib/content";
import { ProductIcon } from "../Icons";

/** Hub-and-spoke diagram: catalogue/supply core → products → audiences. */
export function Ecosystem() {
  const spokes = products.filter((p) => p.slug !== "bonus");
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="One ecosystem"
        title="One catalogue, one wallet, one risk engine. Many ways to reach the customer."
        body="Everything we build sits on the same supply, payments and fraud infrastructure. That is why a product launched for consumers becomes a channel for banks, telcos and resellers within weeks."
      />
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* rings */}
            {[1, 0.74, 0.48].map((s, i) => (
              <motion.div key={i} className="absolute inset-0 rounded-full border border-indigo/20" style={{ scale: s }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40 + i * 10, ease: "linear" }}>
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo" />
              </motion.div>
            ))}
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center text-white shadow-glow">
              <span className="text-[10px] uppercase tracking-widest text-white/60">Core</span>
              <span className="text-sm font-extrabold leading-tight">Supply · Payments<br />Wallet · Guard</span>
            </div>
            {spokes.map((p, i) => {
              const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
              const r = 46;
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              return (
                <Link key={p.slug} href={`/products/${p.slug}/`} className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-white text-navy shadow-card transition hover:bg-navy hover:text-white" style={{ left: `${x}%`, top: `${y}%` }} title={p.name}>
                  <ProductIcon name={p.icon} className="h-6 w-6" />
                </Link>
              );
            })}
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {[
            { t: "Supply", b: "50+ suppliers, 15+ direct APIs and automatic failover keep 3,000+ SKUs in stock at the best cost." },
            { t: "Payments", b: "Every local method, tokenised cards and MoneyHash orchestration for the highest acceptance in the category." },
            { t: "Wallet & loyalty", b: "Stored value, points and partner-point conversion shared by consumers, resellers and programmes." },
            { t: "Guard", b: "A risk engine trained on 10M+ digital-goods orders protects every channel, including partners'." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i} className="card p-6">
              <h3 className="text-lg font-extrabold text-navy">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
