import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-indigo px-8 py-16 text-center text-white md:px-16">
          <div className="grid-overlay absolute inset-0" />
          <div className="relative">
            <h2 className="h-section text-balance text-3xl md:text-5xl">Move digital value with DaleelStore.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">Whether you run a bank loyalty programme, a telco super-app, a reseller network or an HR team, we have a product that goes live in weeks.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact/" className="btn btn-light">Book a call <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/products/daleel-api/" className="btn btn-ghost-dark">Read about the API</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
