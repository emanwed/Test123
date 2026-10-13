"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "./Section";
import { news, type NewsItem } from "@/lib/content";

const cats: ("All" | NewsItem["category"])[] = ["All", "Company", "Partnerships", "Product"];

export function NewsList() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const items = news.filter((n) => cat === "All" || n.category === cat);
  return (
    <Section>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${cat === c ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-navy/40"}`} aria-pressed={cat === c}>
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((n) => (
          <li key={n.title} className="card flex flex-col p-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-lavender px-2.5 py-1 font-bold text-navy">{n.category}</span>
              <span className="text-muted">{new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{n.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{n.excerpt}</p>
            {n.href ? (
              <a href={n.href} target="_blank" rel="noreferrer" className="mt-5 text-sm font-bold text-indigo">Read coverage →</a>
            ) : (
              <Link href="/contact/?topic=press" className="mt-5 text-sm font-bold text-indigo">Press enquiries →</Link>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
