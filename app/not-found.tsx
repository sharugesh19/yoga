import Link from "next/link";
import { Home, BookOpen, Phone } from "lucide-react";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-neutral-bg flex items-center py-16">
      <div className="container text-center max-w-xl mx-auto space-y-6">
        <p className="eyebrow-red text-brand-accent font-bold text-xs uppercase tracking-widest">Error 404</p>
        <h1 className="font-display text-8xl font-bold text-brand-text">404</h1>
        <h2 className="font-display text-3xl font-semibold text-brand-text">Page not found</h2>
        <p className="text-neutral-mid text-sm leading-6 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Use the links below to find what you need.
        </p>

        <div className="pt-6 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-text px-6 py-3 font-bold text-white transition hover:bg-brand-accent"
          >
            <Home size={15} /> Back to Home
          </Link>
          <Link
            href="/classes"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-bold text-white transition hover:bg-brand-accent/80"
          >
            <BookOpen size={15} /> View Classes
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-brand-text/20 bg-white px-6 py-3 font-bold text-brand-text transition hover:bg-neutral-bgAlt"
          >
            <Phone size={15} /> Contact Us
          </Link>
        </div>

        <div className="pt-12 text-xs text-neutral-mid space-y-1">
          <p>Mokshaa Yoga Studio, Neelankarai, Chennai</p>
          <p>
            Phone: <a href={site.phoneHref} className="hover:underline font-semibold">{site.phoneFormatted}</a> |{" "}
            <a href={site.phone2Href} className="hover:underline font-semibold">{site.phone2Formatted}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
