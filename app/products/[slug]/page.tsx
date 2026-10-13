import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { products, productBySlug } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion";
import { ProductDemo } from "@/components/ProductDemos";
import { ProductIcon } from "@/components/Icons";
import { Segments } from "@/components/home/Segments";
import { CTA } from "@/components/home/CTA";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  return p ? { title: p.name, description: p.tagline } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="surface-navy relative overflow-hidden pt-[72px]">
        <div className="grid-overlay absolute inset-0" />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-lavender">
              <ProductIcon name={p.icon} className="h-4 w-4" /> {p.short} · for {p.audience}
            </p>
            <h1 className="h-display mt-6 text-balance text-4xl text-white sm:text-5xl lg:text-6xl">{p.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-lavender-300">{p.tagline}</p>
            <p className="mt-5 max-w-xl text-lg text-white/70">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={p.cta.href} className="btn btn-light">{p.cta.label} <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact/" className="btn btn-ghost-dark">Book a demo</Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {p.proof.map((pr) => (
                <div key={pr.label}><dt className="text-2xl font-extrabold text-white">{pr.value}</dt><dd className="text-xs text-white/60">{pr.label}</dd></div>
              ))}
            </dl>
          </div>
          <div className="min-w-0 lg:col-span-6"><ProductDemo demo={p.demo} /></div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Capabilities" title={`Everything ${p.name} does`} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f, i) => (
            <Reveal key={f.title} as="li" delay={i} className="card p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-lavender text-navy"><Check className="h-4 w-4" /></span>
              <h3 className="mt-4 text-lg font-extrabold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="How it works" title="From first contact to first order in days, not quarters." />
        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {p.howItWorks.map((s, i) => (
            <Reveal key={s.step} as="li" delay={i} className="relative card p-6">
              <span className="text-5xl font-extrabold text-lavender-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-mono text-lg font-extrabold text-navy">{s.step}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {(p.slug === "daleel-business" || p.slug === "daleel-api") && <Segments />}

      <Section>
        <SectionHeading eyebrow="Explore more" title="Products that work together" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/products/${o.slug}/`} className="card group block p-6 transition hover:-translate-y-1 hover:border-navy">
                <ProductIcon name={o.icon} className="h-6 w-6 text-indigo" />
                <h3 className="mt-4 text-lg font-extrabold text-navy">{o.name}</h3>
                <p className="mt-1 text-sm text-muted">{o.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-indigo">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CTA />
    </>
  );
}
