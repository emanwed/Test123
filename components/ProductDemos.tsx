"use client";

import { motion } from "motion/react";
import { ShieldCheck, Smartphone, Wallet, Gift, Sparkles, Check, ArrowRight, Star, Gamepad2, Zap } from "lucide-react";
import type { Product } from "@/lib/content";

const cardBrands = [
  { n: "PlayStation", c: "from-[#0b2b8f] to-[#1e63ff]" },
  { n: "PUBG", c: "from-[#b45309] to-[#f59e0b]" },
  { n: "iTunes", c: "from-[#3b3b3b] to-[#8a8a8a]" },
  { n: "Amazon", c: "from-[#0f172a] to-[#f97316]" },
  { n: "STC", c: "from-[#4f0b7b] to-[#9d3cff]" },
  { n: "Noon", c: "from-[#b58a00] to-[#ffd84d]" },
];

export function ProductDemo({ demo }: { demo: Product["demo"] }) {
  switch (demo) {
    case "consumer":
      return <ConsumerDemo />;
    case "business":
      return <BusinessDemo />;
    case "api":
      return <ApiDemo />;
    case "guard":
      return <GuardDemo />;
    case "loyalty":
      return <LoyaltyDemo />;
    case "x":
      return <XDemo />;
    case "bonus":
      return <BonusDemo />;
  }
}

/* ---------- shared frames ---------- */
function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] rounded-[2.6rem] border-[6px] border-navy-700 bg-navy p-2 shadow-[0_40px_80px_-30px_rgb(9_15_48/0.6)]">
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" />
      <div className="h-[500px] overflow-hidden rounded-[2rem] bg-white text-navy">{children}</div>
    </div>
  );
}

function Window({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`w-full min-w-0 max-w-[560px] overflow-hidden rounded-2xl border shadow-[0_40px_80px_-30px_rgb(9_15_48/0.45)] ${dark ? "border-white/10 bg-[#0d1440] text-white" : "border-line bg-white text-navy"}`}>
      <div className={`flex items-center gap-2 border-b px-4 py-2.5 text-xs ${dark ? "border-white/10 text-white/60" : "border-line text-muted"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-semibold">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* ---------- Consumer ---------- */
function ConsumerDemo() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative w-[260px]">
        <motion.div className="absolute -left-40 top-16 z-10 hidden lg:block" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <MiniCard brand="PUBG Mobile" amount="600 UC" cls="from-[#b45309] to-[#f59e0b]" />
        </motion.div>
        <motion.div className="absolute -right-40 bottom-24 z-10 hidden lg:block" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
          <MiniCard brand="PlayStation" amount="SAR 200" cls="from-[#0b2b8f] to-[#1e63ff]" />
        </motion.div>
        <Phone>
          <div className="bg-navy px-4 pb-4 pt-8 text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/60">Good evening</p>
            <p className="text-sm font-bold">What are we playing today?</p>
            <div className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs text-white/70">Search 3,000+ cards</div>
          </div>
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between text-xs"><span className="font-bold">Best sellers</span><span className="text-indigo">See all</span></div>
            <div className="grid grid-cols-2 gap-2">
              {cardBrands.map((b, i) => (
                <motion.div key={b.n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className={`h-12 rounded-xl bg-gradient-to-br ${b.c} p-2 text-[11px] font-bold text-white`}>
                  {b.n}
                </motion.div>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-line p-3">
              <div className="flex items-center justify-between text-xs"><span className="font-semibold">PlayStation SAR 200</span><span className="font-bold">SAR 199</span></div>
              <motion.button className="mt-2 w-full rounded-lg bg-navy py-2 text-xs font-bold text-white" animate={{ scale: [1, 1.03, 1] }} transition={{ repeat: Infinity, duration: 2.2 }}>
                Quick buy with Apple Pay
              </motion.button>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-lavender-50 p-2 text-[11px]"><Check className="h-3.5 w-3.5 text-emerald-600" /> Delivered in 3s · code sent via WhatsApp</div>
          </div>
        </Phone>
      </div>
    </div>
  );
}

function MiniCard({ brand, amount, cls }: { brand: string; amount: string; cls: string }) {
  return (
    <div className={`w-36 rounded-xl bg-gradient-to-br ${cls} p-3 text-white shadow-xl`}>
      <p className="text-[10px] uppercase tracking-wider opacity-80">{brand}</p>
      <p className="mt-4 text-lg font-extrabold">{amount}</p>
    </div>
  );
}

/* ---------- Business ---------- */
function BusinessDemo() {
  const rows = [
    { p: "PUBG 600 UC", q: 2500, s: "Delivered" },
    { p: "iTunes SAR 100", q: 1200, s: "Delivered" },
    { p: "STC Sawa 50", q: 4000, s: "Processing" },
    { p: "Amazon SAR 250", q: 300, s: "Delivered" },
  ];
  return (
    <div className="flex justify-center py-4">
      <Window title="business.daleelstore.com · Orders">
        <div className="grid grid-cols-3 gap-3 p-4">
          <Kpi label="Wallet balance" value="SAR 1,240,500" />
          <Kpi label="Orders this month" value="18,420" />
          <Kpi label="Codes delivered" value="99.98%" />
        </div>
        <div className="px-4 pb-4">
          <div className="overflow-hidden rounded-xl border border-line text-xs">
            <div className="grid grid-cols-[1fr_80px_90px] bg-lavender-50 px-3 py-2 font-bold text-muted"><span>Product</span><span>Qty</span><span>Status</span></div>
            {rows.map((r, i) => (
              <motion.div key={r.p} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 * i }} className="grid grid-cols-[1fr_80px_90px] border-t border-line px-3 py-2">
                <span className="font-semibold">{r.p}</span>
                <span>{r.q.toLocaleString()}</span>
                <span className={r.s === "Delivered" ? "text-emerald-600" : "text-amber-600"}>{r.s}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <span className="btn btn-primary !py-1.5 !px-3 text-xs">Bulk order</span>
            <span className="btn btn-ghost !py-1.5 !px-3 text-xs">Top up wallet</span>
            <span className="btn btn-ghost !py-1.5 !px-3 text-xs">Export report</span>
          </div>
        </div>
      </Window>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-lavender-50 p-3">
      <p className="text-[10px] uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-navy">{value}</p>
    </div>
  );
}

/* ---------- API ---------- */
function ApiDemo() {
  const lines = [
    { t: "POST /v1/orders", c: "text-mint" },
    { t: "{", c: "text-white/70" },
    { t: '  "product_class_id": 148,', c: "text-white/90" },
    { t: '  "quantity": 1,', c: "text-white/90" },
    { t: '  "currency": "SAR",', c: "text-white/90" },
    { t: '  "callback_url": "https://partner.app/hooks"', c: "text-white/90" },
    { t: "}", c: "text-white/70" },
    { t: "", c: "" },
    { t: "201 Created · 184 ms", c: "text-mint" },
    { t: '{ "order_id": "ord_8f2k", "status": "fulfilled",', c: "text-white/90" },
    { t: '  "code": "••••-••••-4821", "delivered_at": "2026-10-13T12:40:11Z" }', c: "text-white/90" },
  ];
  return (
    <div className="flex w-full min-w-0 justify-center py-4">
      <Window title="Daleel API · sandbox" dark>
        <pre className="max-w-full overflow-x-auto p-5 font-mono text-[12.5px] leading-6">
          {lines.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 * i }} className={l.c}>
              {l.t || " "}
            </motion.div>
          ))}
        </pre>
        <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-3 text-[11px] text-white/70">
          <span className="rounded-full bg-white/10 px-2 py-1">GET /catalog</span>
          <span className="rounded-full bg-white/10 px-2 py-1">GET /products/:id/availability</span>
          <span className="rounded-full bg-white/10 px-2 py-1">POST /orders</span>
          <span className="rounded-full bg-white/10 px-2 py-1">webhook: order.fulfilled</span>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Guard ---------- */
function GuardDemo() {
  const signals = [
    { k: "Device fingerprint", v: "known · 14 orders", ok: true },
    { k: "Velocity (1h)", v: "3 orders / 2 cards", ok: true },
    { k: "Geo vs. billing", v: "Riyadh / Riyadh", ok: true },
    { k: "Email age", v: "11 days", ok: false },
    { k: "Card BIN risk", v: "low", ok: true },
  ];
  return (
    <div className="flex justify-center py-4">
      <Window title="DaleelGuard · order review">
        <div className="grid gap-4 p-5 md:grid-cols-[180px_1fr]">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-navy p-4 text-white">
            <ShieldCheck className="h-6 w-6 text-mint" />
            <motion.p className="mt-2 text-4xl font-extrabold" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              12
            </motion.p>
            <p className="text-[10px] uppercase tracking-widest text-white/60">risk score / 100</p>
            <span className="mt-3 rounded-full bg-mint/20 px-2.5 py-1 text-[11px] font-bold text-mint">APPROVE</span>
          </div>
          <ul className="space-y-2 text-xs">
            {signals.map((s, i) => (
              <motion.li key={s.k} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="flex items-center justify-between rounded-xl border border-line px-3 py-2">
                <span className="font-semibold">{s.k}</span>
                <span className="flex items-center gap-2 text-muted">
                  {s.v}
                  <span className={`h-2 w-2 rounded-full ${s.ok ? "bg-emerald-500" : "bg-amber-500"}`} />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Loyalty ---------- */
function LoyaltyDemo() {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <motion.div className="w-full max-w-[380px] rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-indigo p-6 text-white shadow-[0_40px_80px_-30px_rgb(61_75_255/0.6)]" animate={{ rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 8 }}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-bold"><Wallet className="h-4 w-4" /> My Wallet</span>
          <span className="flex items-center gap-1 text-xs text-lavender"><Star className="h-3.5 w-3.5 fill-amber text-amber" /> 4,820 Stars</span>
        </div>
        <p className="mt-6 text-xs text-white/60">Available balance</p>
        <p className="text-3xl font-extrabold">SAR 1,250.00</p>
        <div className="mt-6 flex gap-2 text-[11px]">
          <span className="rounded-full bg-white/15 px-3 py-1">Top up</span>
          <span className="rounded-full bg-white/15 px-3 py-1">Convert Mokafaa points</span>
          <span className="rounded-full bg-white/15 px-3 py-1">Send gift</span>
        </div>
      </motion.div>
      <div className="grid w-full max-w-[380px] grid-cols-3 gap-2 text-center text-[11px]">
        {[["7-day streak", "🔥"], ["Gamer badge", "🎮"], ["2x Stars week", "✨"]].map(([t, e]) => (
          <div key={t} className="rounded-xl border border-line bg-white p-2"><div className="text-lg">{e}</div><div className="font-semibold text-navy">{t}</div></div>
        ))}
      </div>
    </div>
  );
}

/* ---------- DaleelX ---------- */
function XDemo() {
  return (
    <div className="flex justify-center py-4">
      <Window title="DaleelX · card designer">
        <div className="grid gap-4 p-5 md:grid-cols-[1fr_200px]">
          <div>
            <motion.div className="aspect-[1.6] w-full rounded-2xl bg-gradient-to-br from-[#1b1f3b] via-[#3d4bff] to-[#8b7cff] p-5 text-white shadow-xl" initial={{ rotateY: -10 }} animate={{ rotateY: 0 }}>
              <p className="text-[10px] uppercase tracking-widest opacity-80">Your Brand</p>
              <p className="mt-10 text-2xl font-extrabold">SAR 500</p>
              <p className="text-[11px] opacity-80">Gift card · redeem online & in store</p>
            </motion.div>
            <div className="mt-3 flex gap-2">
              {["#3d4bff", "#090f30", "#5ee6c3", "#ffc857"].map((c) => (
                <span key={c} className="h-6 w-6 rounded-full border border-line" style={{ background: c }} />
              ))}
            </div>
          </div>
          <ul className="space-y-2 text-xs">
            {["Denominations: 100 / 250 / 500", "Channels: DaleelStore, Banks, Resellers", "Redemption: POS + API", "Settlement: weekly"].map((t, i) => (
              <motion.li key={t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 * i }} className="flex items-start gap-2 rounded-xl bg-lavender-50 p-2.5"><Check className="mt-0.5 h-3.5 w-3.5 text-indigo" />{t}</motion.li>
            ))}
            <li className="btn btn-primary !py-2 w-full text-xs">Publish card <ArrowRight className="h-3.5 w-3.5" /></li>
          </ul>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Bonus ---------- */
function BonusDemo() {
  const feed = [
    { who: "Rahaf → Almaha", why: "Customer obsession", pts: 50 },
    { who: "Khalid → Huda", why: "Build awesome things", pts: 30 },
    { who: "Basheer → Issa", why: "Move fast", pts: 40 },
  ];
  return (
    <div className="flex justify-center py-4">
      <Window title="Bonus · recognition feed">
        <div className="p-5">
          {feed.map((f, i) => (
            <motion.div key={f.who} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }} className="mb-2 flex items-center justify-between rounded-xl border border-line p-3 text-xs">
              <span><span className="font-bold">{f.who}</span> <span className="text-muted">· {f.why}</span></span>
              <span className="flex items-center gap-1 rounded-full bg-mint/20 px-2 py-1 font-bold text-emerald-700"><Sparkles className="h-3 w-3" /> +{f.pts}</span>
            </motion.div>
          ))}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-navy p-3 text-xs text-white">
            <span className="flex items-center gap-2"><Gift className="h-4 w-4 text-amber" /> 1,240 points · redeem for any card</span>
            <span className="rounded-full bg-white px-2.5 py-1 font-bold text-navy">Redeem</span>
          </div>
        </div>
      </Window>
    </div>
  );
}

export const demoIcons = { Smartphone, Gamepad2, Zap };
