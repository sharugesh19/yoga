import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, MapPin, Video, Phone, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { classes, monthlyPlans, site } from "@/lib/content";

export async function generateStaticParams() {
  return classes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cls = classes.find((c) => c.slug === slug);
  if (!cls) return {};
  return {
    title: cls.seoTitle,
    description: cls.seoDescription,
    openGraph: {
      images: [cls.image],
    },
  };
}

export default async function ClassDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cls = classes.find((c) => c.slug === slug);
  if (!cls) notFound();

  // Filter 3 related classes
  const related = classes.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: cls.title,
          description: cls.summary,
          provider: {
            "@type": "HealthAndBeautyBusiness",
            name: site.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: "122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street",
              addressLocality: "Neelankarai",
              addressRegion: "Tamil Nadu",
              postalCode: site.pincode,
              addressCountry: "IN",
            },
          },
        }}
      />

      {/* Hero */}
      <PageHero
        eyebrow={cls.level}
        title={cls.title}
        text={cls.summary}
        image={cls.image}
        alt={cls.alt}
        cta="Book a Free Trial"
        ctaHref="/contact"
      />

      {/* Two column overview */}
      <section className="section-pad bg-neutral-bg">
        <div className="container grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-brand-text">About this class</h2>
              <p className="mt-4 text-base leading-8 text-neutral-mid">{cls.body}</p>
            </div>

            {/* What to expect */}
            <div className="rounded-2xl border border-brand-text/8 bg-white p-6 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-brand-text">What to expect</h3>
              <ul className="mt-4 space-y-3.5">
                {cls.whatToExpect.map((expect, idx) => (
                  <li className="flex items-start gap-3 text-sm leading-6 text-neutral-mid" key={idx}>
                    <Check size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{expect}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it is for */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-brand-text">Who is this for?</h3>
              <div className="mt-3 rounded-xl bg-neutral-bgAlt p-5 border-l-4 border-brand-primary text-sm leading-7 text-neutral-mid">
                {cls.whoIsItFor}
              </div>
            </div>
          </div>

          {/* Sidebar Quick facts */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-brand-text p-6 text-white shadow-soft">
              <h3 className="font-display text-2xl font-semibold">Quick Facts</h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-primary" />
                  <div>
                    <p className="font-bold text-white/50 text-[11px] uppercase tracking-wider">Duration</p>
                    <p className="font-semibold">{cls.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {slug === "zoom-yoga" ? (
                    <Video size={16} className="text-brand-primary" />
                  ) : (
                    <MapPin size={16} className="text-brand-primary" />
                  )}
                  <div>
                    <p className="font-bold text-white/50 text-[11px] uppercase tracking-wider">Location / Mode</p>
                    <p className="font-semibold">
                      {slug === "zoom-yoga" ? "Zoom Live Online" : slug === "personal-yoga" ? "In-Person or Zoom" : "Neelankarai Studio"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-brand-primary" />
                  <div>
                    <p className="font-bold text-white/50 text-[11px] uppercase tracking-wider">Batch level</p>
                    <p className="font-semibold">{cls.level}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/60">Reserve your trial slot or contact our teachers.</p>
                <div className="mt-4 grid gap-2.5">
                  <Link
                    href="/contact"
                    className="focus-ring rounded-full bg-brand-accent py-3 text-center text-xs font-bold text-white transition hover:bg-brand-accent/80"
                  >
                    Send Message
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="focus-ring rounded-full border border-white/20 py-3 text-center text-xs font-bold text-white transition hover:bg-white/10"
                  >
                    Call Maheswari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-pad bg-neutral-bgAlt/50 border-t border-brand-text/5">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-brand-text">Pricing Overview</h2>
          {slug === "group-yoga" ? (
            <div className="mt-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {monthlyPlans.map((plan) => (
                  <div className="rounded-2xl bg-white border border-brand-text/8 p-6 shadow-card" key={plan.sessions}>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">{plan.sessions} Sessions / Month</p>
                    <p className="mt-4 font-display text-4xl font-semibold text-brand-accent">₹{plan.price.toLocaleString("en-IN")}</p>
                    <p className="mt-1 text-xs text-neutral-mid">≈ ₹{plan.perSession} per session</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral-mid">
                We also offer multi-month packages (3, 6, and 12 months) with substantial savings and free gifts (Strap, Neti Pot, Mat).{" "}
                <Link href="/pricing" className="text-brand-accent font-bold hover:underline">
                  View multi-month pricing plans &rarr;
                </Link>
              </p>
            </div>
          ) : (
            <div className="mt-6 max-w-xl rounded-2xl bg-white border border-brand-text/8 p-6 shadow-card">
              <p className="text-sm leading-7 text-neutral-mid">
                Pricing for <strong>{cls.title}</strong> is structured around customized plans (e.g. personal requirements, group formats, children programs, or Zoom online classes).
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="focus-ring rounded-full bg-brand-accent px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-accent/80"
                >
                  Call {site.phoneName}
                </a>
                <a
                  href={site.phone2Href}
                  className="focus-ring rounded-full bg-brand-text px-5 py-2.5 text-xs font-bold text-white hover:bg-neutral-mid"
                >
                  Call {site.phone2Name}
                </a>
                <Link
                  href="/contact"
                  className="focus-ring rounded-full border border-brand-text/15 px-5 py-2.5 text-xs font-bold text-brand-text hover:bg-neutral-bgAlt"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Classes */}
      <section className="section-pad bg-neutral-bg border-t border-brand-text/5">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-brand-text">Other Classes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((rc) => {
              const RIcon = rc.icon;
              return (
                <Link
                  className="reveal group flex items-start gap-4 rounded-xl border border-brand-text/8 bg-white p-5 shadow-card hover:-translate-y-0.5 transition duration-300"
                  href={`/classes/${rc.slug}`}
                  key={rc.slug}
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src={rc.image} alt={rc.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
                      {rc.title}
                    </h3>
                    <p className="text-xs text-brand-primary font-semibold mt-0.5">{rc.level}</p>
                    <p className="mt-1 text-xs text-neutral-mid line-clamp-1">{rc.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Ready to join {cls.title}?</h2>
          <p className="mt-4 text-lg text-white/80">
            Book your free trial class today at our studio or online. Our teachers will assist you in getting started safely.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg"
            >
              Request Free Trial
            </Link>
            <a
              href={site.phoneHref}
              className="focus-ring rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10"
            >
              Call {site.phoneName}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
