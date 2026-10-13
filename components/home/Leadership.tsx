import { Section, SectionHeading } from "../Section";
import { Reveal } from "../motion";
import { leadership } from "@/lib/content";

export function Leadership({ limit }: { limit?: number }) {
  const people = limit ? leadership.slice(0, limit) : leadership;
  return (
    <Section id="leadership">
      <SectionHeading eyebrow="Leadership" title="Operators from Careem, CircleCI and the region's leading fintechs." body="A team that has built, scaled and secured consumer and B2B platforms across the Gulf and beyond." />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <Reveal key={p.name} as="li" delay={i} className="card group p-6 transition hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-indigo text-xl font-extrabold text-white">{p.initials}</div>
            <h3 className="mt-5 text-lg font-extrabold text-navy">{p.name}</h3>
            <p className="text-sm font-semibold text-indigo">{p.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.bio}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
