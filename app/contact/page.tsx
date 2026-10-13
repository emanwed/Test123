import type { Metadata } from "next";
import { Mail, MapPin, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Talk to our partnerships, API, investor or press teams." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's move value together." body="Partnerships, API access, fraud protection, investor and press enquiries. We reply within one business day." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            {[
              { i: Building2, t: "Partnerships & B2B", b: site.email },
              { i: Mail, t: "Investors", b: site.investorsEmail },
              { i: Mail, t: "Press", b: site.pressEmail },
              { i: MapPin, t: "Headquarters", b: site.hq },
            ].map((c) => (
              <div key={c.t} className="card flex gap-4 p-5"><c.i className="h-5 w-5 shrink-0 text-indigo" /><div><p className="font-bold text-navy">{c.t}</p><p className="text-sm text-muted">{c.b}</p></div></div>
            ))}
          </div>
          <div className="lg:col-span-8"><LeadForm /></div>
        </div>
      </Section>
    </>
  );
}
