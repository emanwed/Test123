"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title="Questions partners and investors ask first." /></div>
        <ul className="divide-y divide-line lg:col-span-8">
          {faqs.map((f, i) => (
            <li key={f.q}>
              <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="text-lg font-bold text-navy">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-indigo transition ${open === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 text-muted">
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
