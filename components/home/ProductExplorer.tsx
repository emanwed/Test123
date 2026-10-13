"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "../Section";
import { products } from "@/lib/content";
import { ProductIcon } from "../Icons";
import { ProductDemo } from "../ProductDemos";

export function ProductExplorer() {
  const [active, setActive] = useState(products[0].slug);
  const p = products.find((x) => x.slug === active)!;

  return (
    <Section id="products" tone="dark">
      <div className="grid-overlay absolute inset-0" />
      <div className="relative">
        <SectionHeading dark eyebrow="Products" title="Seven products. One platform for digital value." body="Pick a product to see what it does, who it is for and the numbers behind it." />

        {/* Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {products.map((x) => (
            <button
              key={x.slug}
              onClick={() => setActive(x.slug)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                active === x.slug ? "border-white bg-white text-navy" : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
              }`}
              aria-pressed={active === x.slug}
            >
              <ProductIcon name={x.icon} className="h-4 w-4" />
              {x.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <AnimatePresence mode="wait">
            <motion.div key={p.slug + "-copy"} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 14 }} transition={{ duration: 0.3 }} className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lavender-300">{p.audience}</p>
              <h3 className="h-section mt-3 text-3xl text-white md:text-4xl">{p.tagline}</h3>
              <p className="mt-4 text-white/70">{p.description}</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.slice(0, 4).map((f) => (
                  <li key={f.title} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint"><Check className="h-3 w-3" /></span>
                    <span><span className="font-bold text-white">{f.title}.</span> {f.body}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {p.proof.map((pr) => (
                  <div key={pr.label} className="card-dark p-3">
                    <p className="text-lg font-extrabold text-white">{pr.value}</p>
                    <p className="text-[11px] leading-snug text-white/60">{pr.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/products/${p.slug}/`} className="btn btn-light">Learn more <ArrowRight className="h-4 w-4" /></Link>
                <Link href={p.cta.href} className="btn btn-ghost-dark">{p.cta.label}</Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={p.slug + "-demo"} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="min-w-0 lg:col-span-7">
              <ProductDemo demo={p.demo} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
