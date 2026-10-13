import Link from "next/link";

export default function NotFound() {
  return (
    <section className="surface-navy flex min-h-[70vh] items-center pt-[72px]">
      <div className="container-x text-center">
        <p className="eyebrow on-dark justify-center">404</p>
        <h1 className="h-display mt-4 text-4xl text-white md:text-6xl">This page moved, or never existed.</h1>
        <Link href="/" className="btn btn-light mt-8">Back home</Link>
      </div>
    </section>
  );
}
