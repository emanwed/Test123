"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Counter } from "../motion";
import { heroStats } from "@/lib/content";
import { ProductDemo } from "../ProductDemos";

export function Hero() {
  return (
    <section className="surface-navy relative overflow-hidden pt-[72px]">
      <div className="grid-overlay absolute inset-0" />
      <div className="absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-indigo/30 blur-[140px]" />
      <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-lavender">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-mint" /></span>
            Riyadh · Since 2018 · Preparing our next funding round
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="h-display mt-6 text-balance text-4xl text-white sm:text-6xl lg:text-7xl">
            The digital value infrastructure of the <span className="grad-text">Middle East</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Daleel runs the region's largest marketplace for gift cards, gaming credit and top-ups, and the B2B platform, API and fraud engine that let banks, telcos and enterprises move digital value to millions of people, instantly.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-light">Partner with us <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/investors/" className="btn btn-ghost-dark">Investor overview</Link>
            <Link href="/#products" className="btn btn-ghost-dark"><PlayCircle className="h-4 w-4" /> Explore products</Link>
          </motion.div>

          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-white sm:text-3xl"><Counter value={s.value} suffix={s.suffix} prefix={s.prefix} /></dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }} className="lg:col-span-5">
          <ProductDemo demo="consumer" />
        </motion.div>
      </div>
    </section>
  );
}
