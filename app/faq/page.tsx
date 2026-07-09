import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { faqItems, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga FAQ | Classes, Pricing & Booking | Mokshaa Yoga Chennai",
  description:
    "Answers to common questions about yoga classes at Mokshaa Yoga in Neelankarai, Chennai — pricing, booking, trial classes, prenatal, ladies batches, and zoom classes.",
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Common questions."
        text="Everything you need to know about starting your practice at Mokshaa Yoga, Neelankarai."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
        alt="FAQ banner"
      />

      {/* Accordion List */}
      <section className="section-pad bg-neutral-bg">
        <div className="container max-w-3xl">
          <SectionHeader
            eyebrow="Yoga Q&amp;A"
            title="Frequently asked questions."
            text="Have a look through our answers below. If you don't find what you are looking for, reach out to S. Maheswari directly."
            center
          />

          <div className="mt-12 space-y-3">
            {faqItems.map((item, idx) => (
              <details
                className="reveal group rounded-2xl border border-brand-text/8 bg-white p-5 shadow-card [&_summary::-webkit-details-marker]:hidden"
                key={idx}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-brand-text outline-none transition hover:text-brand-accent select-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-brand-primary flex-shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown size={18} className="text-brand-primary transition-transform duration-300 group-open:-rotate-180" />
                </summary>
                <div className="mt-4 border-t border-brand-text/5 pt-4 text-sm leading-7 text-neutral-mid pl-7">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="bg-brand-text text-white py-16 text-center">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl font-semibold">Still have a question?</h2>
          <p className="mt-3 text-white/70">
            Get in touch directly with our teachers S. Maheswari or S. Satheesh to discuss schedules or health concerns.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <a href={site.phoneHref} className="focus-ring rounded-full bg-brand-accent px-6 py-3 font-bold text-white transition hover:bg-brand-accent/80">
              Call Maheswari: {site.phoneFormatted}
            </a>
            <a href={site.phone2Href} className="focus-ring rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Call Satheesh: {site.phone2Formatted}
            </a>
            <Link href="/contact" className="focus-ring rounded-full border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition">
              Send Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
