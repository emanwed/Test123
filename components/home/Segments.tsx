"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "../Section";
import { segments } from "@/lib/content";

export function Segments() {
  const [id, setId] = useState<(typeof segments)[number]["id"]>("banks");
  const s = segments.find((x) => x.id === id)!;
  return (
    <Section id="segments">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Who we serve" title="Built for the organisations that move value at scale." body="Select your organisation type to see how partners use Daleel." />
          <div className="mt-8 flex flex-col gap-2">
            {segments.map((x) => (
              <button key={x.id} onClick={() => setId(x.id)} className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left text-sm font-bold transition ${id === x.id ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy/40"}`} aria-pressed={id === x.id}>
                {x.label}
                <ArrowRight className={`h-4 w-4 transition ${id === x.id ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-40"}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="card h-full overflow-hidden">
              <div className="grid h-full md:grid-cols-2">
                <div className="p-8">
                  <h3 className="h-section text-2xl text-navy md:text-3xl">{s.headline}</h3>
                  <p className="mt-4 text-muted">{s.body}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-navy"><Check className="h-4 w-4 text-indigo" /> {b}</li>
                    ))}
                  </ul>
                  <Link href={`/contact/?topic=${s.id}`} className="btn btn-primary mt-8">Talk to the team <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="surface-navy relative flex flex-col justify-center gap-3 p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Live with</p>
                  <div className="flex flex-wrap gap-2">
                    {s.logos.map((l, i) => (
                      <motion.span key={l} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08 * i }} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white">
                        {l}
                      </motion.span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-white/50">Logos shown as names until partner logo rights are confirmed.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
