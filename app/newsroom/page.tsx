import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { NewsList } from "@/components/NewsList";
import { pressMentions, site } from "@/lib/content";
import { Download } from "lucide-react";

export const metadata: Metadata = { title: "Newsroom", description: "Company news, partnerships and product announcements." };

export default function NewsroomPage() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="News, partnerships and product launches." body={`Media enquiries: ${site.pressEmail}`} />
      <NewsList />
      <Section tone="tint" id="media-kit">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Media kit" title="Logos, product shots and boilerplate." body="Download assets approved for editorial use. Executive headshots available on request." />
            <a href="#" className="btn btn-primary mt-8"><Download className="h-4 w-4" /> Download media kit (placeholder)</a>
          </div>
          <div className="lg:col-span-7">
            <div className="card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Boilerplate</p>
              <p className="mt-3 text-navy">{site.description}</p>
              <p className="mt-3 text-sm text-muted">Founded in {site.founded} and headquartered in {site.hq}, DaleelStore operates DaleelStore, DaleelBusiness, Daleel API, DaleelGuard, Daleel Loyalty, DaleelX and Bonus.</p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pressMentions.map((m) => (
                <li key={m.outlet} className="card p-4"><p className="text-xs font-bold uppercase tracking-wider text-indigo">{m.outlet}</p><p className="mt-1 text-sm text-navy">“{m.quote}”</p></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
