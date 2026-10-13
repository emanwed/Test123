"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Check } from "lucide-react";

const topics = [
  { v: "business", l: "DaleelBusiness (banks, telcos, resellers)" },
  { v: "api", l: "Daleel API integration" },
  { v: "guard", l: "DaleelGuard fraud protection" },
  { v: "loyalty", l: "Loyalty & wallet partnership" },
  { v: "daleelx", l: "DaleelX (issue my own cards)" },
  { v: "investors", l: "Investor enquiry" },
  { v: "press", l: "Press & media" },
  { v: "other", l: "Something else" },
];

function Form() {
  const params = useSearchParams();
  const preset = params.get("topic") ?? "business";
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card p-10 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-emerald-700"><Check /></span>
        <h3 className="mt-5 text-2xl font-extrabold text-navy">Thanks, we'll be in touch within one business day.</h3>
        <p className="mt-2 text-muted">This demo form does not send data yet. Connect it to your CRM or a form backend before launch.</p>
      </div>
    );
  }

  return (
    <form
      className="card grid gap-4 p-6 md:grid-cols-2 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="text-sm font-semibold text-navy">
        Full name
        <input required className="input mt-1.5" name="name" placeholder="Your name" />
      </label>
      <label className="text-sm font-semibold text-navy">
        Work email
        <input required type="email" className="input mt-1.5" name="email" placeholder="you@company.com" />
      </label>
      <label className="text-sm font-semibold text-navy">
        Company
        <input className="input mt-1.5" name="company" placeholder="Company or organisation" />
      </label>
      <label className="text-sm font-semibold text-navy">
        Topic
        <select className="input mt-1.5" name="topic" defaultValue={topics.some((t) => t.v === preset) ? preset : "other"}>
          {topics.map((t) => (
            <option key={t.v} value={t.v}>{t.l}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-navy md:col-span-2">
        How can we help?
        <textarea className="input mt-1.5 min-h-32" name="message" placeholder="Tell us about your use case, volumes and timeline." />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
        <p className="text-xs text-muted">By submitting you agree to our privacy policy.</p>
        <button className="btn btn-primary" type="submit">Send message</button>
      </div>
    </form>
  );
}

export function LeadForm() {
  return (
    <Suspense fallback={<div className="card h-96 animate-pulse" />}>
      <Form />
    </Suspense>
  );
}
