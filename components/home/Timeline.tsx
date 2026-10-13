import { Section, SectionHeading } from "../Section";
import { Reveal } from "../motion";
import { timeline } from "@/lib/content";

export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="story">
      {!compact && <SectionHeading eyebrow="Our story" title="From a gift-card store for Saudi gamers to the region's digital value platform." />}
      <ol className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-line lg:block" />
        {timeline.map((t, i) => (
          <Reveal key={t.year} as="li" delay={i} className="relative">
            <span className="relative z-10 inline-flex h-10 items-center rounded-full border border-line bg-white px-4 text-sm font-extrabold text-indigo shadow-card">{t.year}</span>
            <h3 className="mt-4 text-lg font-extrabold text-navy">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
