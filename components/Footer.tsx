import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="surface-navy relative overflow-hidden">
      <div className="grid-overlay absolute inset-0" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{site.tagline}. {site.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={site.apps.ios} target="_blank" rel="noreferrer" className="btn btn-ghost-dark !py-2 !px-4 text-xs">App Store</a>
              <a href={site.apps.android} target="_blank" rel="noreferrer" className="btn btn-ghost-dark !py-2 !px-4 text-xs">Google Play</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterCol title="Products" links={nav.products.map((p) => ({ label: p.label, href: p.href }))} />
            <FooterCol title="Company" links={nav.company} />
            <FooterCol
              title="Partners"
              links={[
                { label: "Banks & loyalty", href: "/products/daleel-business/#segments" },
                { label: "Telcos & wallets", href: "/products/daleel-api/" },
                { label: "Resellers", href: "/products/daleel-business/" },
                { label: "Brands (DaleelX)", href: "/products/daleelx/" },
                { label: "Developers", href: "/products/daleel-api/" },
              ]}
            />
            <FooterCol
              title="Legal & trust"
              links={[
                { label: "Privacy policy", href: `${site.storeUrl}/en/pages/privacy-policy` },
                { label: "Terms of use", href: `${site.storeUrl}/en/pages/terms-of-use` },
                { label: "Security", href: "/products/daleel-guard/" },
                { label: "Media kit", href: "/newsroom/#media-kit" },
              ]}
            />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. {site.hq}.</p>
          <div className="flex gap-5">
            <a href={site.social.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.social.x} className="hover:text-white" target="_blank" rel="noreferrer">X</a>
            <a href={site.social.instagram} className="hover:text-white" target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.social.tiktok} className="hover:text-white" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
