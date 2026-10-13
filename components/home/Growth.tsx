"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "../Section";
import { Counter, Reveal } from "../motion";
import { ordersByYear, tractionStats } from "@/lib/content";

export function Growth() {
  const max = Math.max(...ordersByYear.map((o) => o.orders));
  return (
    <Section tone="tint" id="traction">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Traction" title="Eight years of compounding growth, now accelerating on the B2B side." body="Order volume has grown every year since launch. In 2025 the B2B business tripled year on year and became the company's fastest-growing line." />
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {tractionStats.map((s) => (
              <div key={s.label} className="border-l-2 border-indigo pl-4">
                <dt className="text-2xl font-extrabold text-navy"><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} /></dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Reveal className="card p-6 md:p-8 lg:col-span-7">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-extrabold text-navy">Orders per year</h3>
            <span className="text-xs text-muted">Source: DaleelStore data lake · 2026 is Jan–Oct</span>
          </div>
          <div className="mt-8 flex h-64 items-stretch gap-2 sm:gap-3" role="img" aria-label="Bar chart of orders per year from 2018 to 2026, rising from about 100 thousand to over 2 million.">
            {ordersByYear.map((o, i) => (
              <div key={o.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-[11px] font-bold text-navy">{(o.orders / 1e6).toFixed(2)}M</span>
                <motion.div
                  className={`w-full rounded-t-xl ${o.partial ? "bg-[repeating-linear-gradient(135deg,#3d4bff_0_6px,#8b7cff_6px_12px)]" : "bg-gradient-to-t from-navy to-indigo"}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(o.orders / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="text-[11px] text-muted">{o.year}{o.partial ? "*" : ""}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
