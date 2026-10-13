"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ProductIcon } from "./Icons";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"products" | "company" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  const dark = !scrolled; // every page opens with a navy hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-line shadow-[0_1px_0_rgb(9_15_48/0.04)]" : "bg-transparent"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo dark={dark} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavButton label="Products" active={menu === "products"} dark={dark} onHover={() => setMenu("products")} />
          <NavLink href="/investors/" dark={dark} label="Investors" />
          <NavButton label="Company" active={menu === "company"} dark={dark} onHover={() => setMenu("company")} />
          <NavLink href="/newsroom/" dark={dark} label="Newsroom" />
          <NavLink href="/careers/" dark={dark} label="Careers" />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.storeUrl} target="_blank" rel="noreferrer" className={`text-sm font-semibold ${dark ? "text-white/80 hover:text-white" : "text-muted hover:text-navy"}`}>
            Shop <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
          <Link href="/contact/" className={`btn ${dark ? "btn-light" : "btn-primary"} !py-2.5 !px-5 text-sm`}>
            Partner with us
          </Link>
        </div>

        <button
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${dark ? "text-white" : "text-navy"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            key={menu}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-[72px] hidden border-b border-line bg-white/95 shadow-[0_30px_60px_-30px_rgb(9_15_48/0.3)] backdrop-blur-xl lg:block"
            onMouseEnter={() => setMenu(menu)}
          >
            <div className="container-x py-7">
              {menu === "products" ? (
                <div className="grid grid-cols-4 gap-3">
                  {nav.products.map((p) => (
                    <Link key={p.href} href={p.href} className="group flex gap-3 rounded-2xl p-3 transition hover:bg-lavender-50">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender text-navy transition group-hover:bg-navy group-hover:text-white">
                        <ProductIcon name={p.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-navy">{p.label}</span>
                        <span className="block text-xs text-muted">{p.short}</span>
                      </span>
                    </Link>
                  ))}
                  <Link href="/#products" className="flex items-center justify-between rounded-2xl bg-navy p-4 text-white transition hover:bg-indigo">
                    <span>
                      <span className="block text-sm font-bold">One ecosystem</span>
                      <span className="block text-xs text-white/70">See how the products connect</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-5 gap-3">
                  {nav.company.map((c) => (
                    <Link key={c.href} href={c.href} className="rounded-2xl border border-line p-4 text-sm font-bold text-navy transition hover:border-navy hover:bg-lavender-50">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line bg-white lg:hidden"
          >
            <div className="container-x space-y-6 py-6">
              <div>
                <p className="eyebrow mb-3">Products</p>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {nav.products.map((p) => (
                    <Link key={p.href} href={p.href} className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-lavender-50">
                      <ProductIcon name={p.icon} className="h-5 w-5 text-indigo" />
                      <span className="text-sm font-semibold text-navy">{p.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3">Company</p>
                <div className="grid grid-cols-2 gap-1">
                  {nav.company.map((c) => (
                    <Link key={c.href} href={c.href} className="rounded-xl px-2 py-2.5 text-sm font-semibold text-navy hover:bg-lavender-50">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/contact/" className="btn btn-primary flex-1">Partner with us</Link>
                <a href={site.storeUrl} className="btn btn-ghost flex-1">Shop</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label, dark }: { href: string; label: string; dark: boolean }) {
  return (
    <Link href={href} className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${dark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-navy/80 hover:bg-lavender-50 hover:text-navy"}`}>
      {label}
    </Link>
  );
}

function NavButton({ label, active, dark, onHover }: { label: string; active: boolean; dark: boolean; onHover: () => void }) {
  return (
    <button
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onHover}
      className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition ${
        dark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-navy/80 hover:bg-lavender-50 hover:text-navy"
      } ${active ? (dark ? "bg-white/10 text-white" : "bg-lavender-50 text-navy") : ""}`}
      aria-expanded={active}
    >
      {label}
      <ChevronDown className={`h-4 w-4 transition ${active ? "rotate-180" : ""}`} />
    </button>
  );
}
