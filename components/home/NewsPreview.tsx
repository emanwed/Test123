import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../motion";
import { news } from "@/lib/content";

export function NewsPreview() {
  return (
    <Section tone="tint" id="news">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Newsroom" title="Latest from DaleelStore" />
        <Link href="/newsroom/" className="btn btn-ghost">All news <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {news.slice(0, 3).map((n, i) => (
          <Reveal key={n.title} as="li" delay={i} className="card flex flex-col p-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-lavender px-2.5 py-1 font-bold text-navy">{n.category}</span>
              <span className="text-muted">{new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{n.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{n.excerpt}</p>
            <Link href={n.href ?? "/newsroom/"} className="mt-5 text-sm font-bold text-indigo">Read more →</Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
