import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "tint" | "dark";
}) {
  const bg = tone === "dark" ? "surface-navy" : tone === "tint" ? "bg-lavender-50" : "bg-white";
  return (
    <section id={id} className={`relative py-20 md:py-28 ${bg} ${className}`}>
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "on-dark" : ""} ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`h-section mt-4 text-balance text-3xl md:text-5xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {body && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{body}</p>}
    </div>
  );
}
