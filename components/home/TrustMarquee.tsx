import { partnerGroups } from "@/lib/content";

export function TrustMarquee() {
  const items = [...partnerGroups.banks, ...partnerGroups.telecom, ...partnerGroups.brands, ...partnerGroups.payments];
  const doubled = [...items, ...items];
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="container-x">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">Trusted by the brands, banks and telcos people already love</p>
      </div>
      <div className="marquee mt-6">
        <div className="marquee-track gap-3 px-3">
          {doubled.map((n, i) => (
            <span key={n + i} className="inline-flex items-center rounded-full border border-line bg-lavender-50 px-5 py-2.5 text-sm font-bold text-navy/80">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
