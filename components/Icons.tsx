import { Store, Briefcase, Code2, ShieldCheck, Sparkles, Layers, Gift, type LucideProps } from "lucide-react";
import type { Product } from "@/lib/content";

const map = { store: Store, briefcase: Briefcase, code: Code2, shield: ShieldCheck, sparkles: Sparkles, layers: Layers, gift: Gift };

export function ProductIcon({ name, ...props }: { name: Product["icon"] } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}

export const accentClasses: Record<string, { bg: string; text: string; ring: string; soft: string }> = {
  indigo: { bg: "bg-indigo", text: "text-indigo", ring: "ring-indigo/30", soft: "bg-indigo/10" },
  violet: { bg: "bg-violet", text: "text-violet", ring: "ring-violet/30", soft: "bg-violet/10" },
  mint: { bg: "bg-mint", text: "text-emerald-600", ring: "ring-mint/40", soft: "bg-mint/15" },
  amber: { bg: "bg-amber", text: "text-amber-600", ring: "ring-amber/40", soft: "bg-amber/15" },
};
