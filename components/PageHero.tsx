import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: ReactNode; body?: ReactNode; children?: ReactNode }) {
  return (
    <section className="surface-navy relative overflow-hidden pt-[72px]">
      <div className="grid-overlay absolute inset-0" />
      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-indigo/30 blur-[140px]" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow on-dark">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl text-balance text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{body}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
