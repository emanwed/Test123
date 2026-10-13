import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion";
import { openRoles, perks, values } from "@/lib/content";

export const metadata: Metadata = { title: "Careers", description: "Join the team building the digital value layer of the Middle East." };

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build awesome things with a team that moves fast." body="We are a product-led company with hubs in Riyadh and Cairo. If you care about customers, speed and craft, you'll fit right in.">
        <Link href="#roles" className="btn btn-light">See open roles <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Life at DaleelStore" title="What you get" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} as="li" delay={i} className="card p-6"><h3 className="text-lg font-extrabold text-navy">{p.title}</h3><p className="mt-2 text-sm text-muted">{p.body}</p></Reveal>
          ))}
        </ul>
      </Section>
      <Section tone="tint" id="roles">
        <SectionHeading eyebrow="Open roles" title="Current openings" body="Roles listed are placeholders until the ATS feed is connected." />
        <ul className="mt-10 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
          {openRoles.map((r) => (
            <li key={r.title} className="flex flex-col gap-2 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-extrabold text-navy">{r.title}</p>
                <p className="mt-1 flex items-center gap-3 text-sm text-muted"><span>{r.team}</span><span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{r.location}</span><span>{r.type}</span></p>
              </div>
              <Link href="/contact/?topic=other" className="btn btn-ghost !py-2 text-sm">Apply</Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeading eyebrow="How we work" title="Our values in practice" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-2xl bg-lavender-50 p-5"><p className="font-bold text-navy">{v.title}</p><p className="mt-1 text-sm text-muted">{v.body}</p></li>
          ))}
        </ul>
      </Section>
    </>
  );
}
