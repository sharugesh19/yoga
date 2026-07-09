import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Video, Check, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { classes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga Classes in Chennai | Group, Ladies, Prenatal, Kids, Seniors & Zoom | Mokshaa Yoga",
  description:
    "7 yoga class formats in Neelankarai, Chennai: group classes, exclusive ladies batch, Zoom online classes, private 1:1, kids yoga, seniors, and prenatal yoga. Book a free trial today.",
};

export default function ClassesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: `${site.url}/classes`,
          telephone: `+91${site.phone}`,
          image: site.ogImage,
          address: {
            "@type": "PostalAddress",
            streetAddress: "122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street",
            addressLocality: "Neelankarai",
            addressRegion: "Tamil Nadu",
            postalCode: site.pincode,
            addressCountry: "IN",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Yoga Classes Offered",
            itemListElement: classes.map((cls, idx) => ({
              "@type": "OfferCatalogItem",
              position: idx + 1,
              itemOffered: {
                "@type": "Service",
                name: cls.title,
                description: cls.summary,
              },
            })),
          },
        }}
      />

      <PageHero
        eyebrow="What We Teach"
        title="7 class formats. Taught with care."
        text="From your first beginner class to specialised prenatal, senior and 1:1 sessions — discover the format designed for your routine and goals."
        image={classes[0].image}
        alt="Yoga classes at Mokshaa Yoga Neelankarai Chennai"
      />

      {/* Programs intro band */}
      

      {/* Programs list — alternating layout */}
      <section className="bg-neutral-bg">
        <div className="container">
          {classes.map((cls, idx) => {
            const Icon = cls.icon;
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={cls.slug}
                className="reveal grid items-center gap-10 border-b border-brand-text/8 py-16 last:border-b-0 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={cls.image}
                    alt={cls.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={isReversed ? "md:order-1" : ""}>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                    Program {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-brand-text md:text-4xl">
                    {cls.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-neutral-mid">{cls.summary}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-mid">
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} className="text-brand-primary" />
                      {cls.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon size={16} className="text-brand-primary" />
                      {cls.level}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-mid">
                      Benefits
                    </p>
                    <ul className="mt-3 space-y-2">
                      {cls.whatToExpect.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-brand-text"
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-xl bg-neutral-bgAlt p-4 text-sm leading-6 text-brand-text">
                    <span className="inline-flex items-center gap-1.5 font-bold">
                      <Users size={14} className="text-brand-accent" />
                      Who can join:
                    </span>{" "}
                    {cls.whoIsItFor}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white hover:bg-brand-primaryDark"
                    >
                      Book a Class
                    </Link>
                    <Link
                      href={`/classes/${cls.slug}`}
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-brand-text/15 px-6 py-3 text-sm font-bold text-brand-text hover:bg-white"
                    >
                      Full Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specialty Therapeutic focus areas */}
      <section className="section-pad bg-neutral-bgAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Specialist Focus"
            title="Therapeutic yoga support."
            text="We weave target-oriented, therapeutic yoga alignments into both our group batches and 1:1 custom personal sessions."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6">
            {[
              { title: "Weight Loss", text: "Healthy weight management using active postures and breathwork." },
              { title: "Back Pain", text: "Postural alignments to release tightness, strengthen core & stabilize spine." },
              { title: "Stress Relief", text: "Calming pranayama & restorative flows to ease nervous system." },
              { title: "Yoga Therapy", text: "Gentle modifications for recovering joints and customized wellness goals." },
              { title: "Counselling", text: "One-on-one mindfulness instruction to quiet mental noise." },
            ].map((item, idx) => (
              <div
                className={`reveal rounded-2xl bg-white p-4 shadow-card sm:p-6 ${
                  idx === 4 ? "col-span-2 sm:mx-auto sm:w-1/2" : ""
                }`}
                key={item.title}
              >
                <h3 className="font-display text-xl font-semibold text-brand-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-mid">{item.text}</p>
                <Link
                  href="/contact"
                  className="focus-ring mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-text hover:underline"
                >
                  Enquire &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Quick Reference"
            title="Compare class formats."
            text="A simple side-by-side look at levels, batch durations, locations, and ideal matches."
          />
          <div className="mt-10">
            <p className="mb-2 text-xs text-neutral-mid sm:hidden flex items-center gap-1.5"><ArrowRight size={12}/> Swipe to see full table</p>
            <div className="overflow-x-auto rounded-xl border border-brand-text/8 bg-white shadow-card">
              <table className="w-full min-w-[640px] text-left border-collapse text-sm">
                <thead>
                <tr className="bg-brand-text text-white">
                  <th className="px-6 py-4 font-bold">Class Type</th>
                  <th className="px-6 py-4 font-bold">Level</th>
                  <th className="px-6 py-4 font-bold">Duration</th>
                  <th className="px-6 py-4 font-bold">Mode</th>
                  <th className="px-6 py-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-text/5">
                {classes.map((cls, idx) => (
                  <tr className={idx % 2 === 0 ? "bg-white" : "bg-neutral-bg/40"} key={cls.slug}>
                    <td className="px-6 py-4 font-semibold text-brand-text">{cls.title}</td>
                    <td className="px-6 py-4 text-neutral-mid">{cls.level}</td>
                    <td className="px-6 py-4 text-neutral-mid">{cls.duration}</td>
                    <td className="px-6 py-4">
                      {cls.slug === "zoom-yoga" ? (
                        <span className="inline-flex items-center gap-1 text-brand-primary font-semibold">
                          <Video size={14} /> Zoom Online
                        </span>
                      ) : cls.slug === "personal-yoga" ? (
                        <span className="inline-flex items-center gap-1 text-brand-accent font-semibold">
                          Both (Studio/Zoom)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-neutral-mid">
                          <MapPin size={14} /> Studio
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-neutral-mid">
                      {cls.slug === "group-yoga" && "Consistent Hatha practice"}
                      {cls.slug === "ladies-yoga" && "Private women-only batch"}
                      {cls.slug === "zoom-yoga" && "Live practice from home"}
                      {cls.slug === "personal-yoga" && "Targeted therapeutic work"}
                      {cls.slug === "kids-yoga" && "Children aged 5–14"}
                      {cls.slug === "senior-yoga" && "Elderly mobility & joint care"}
                      {cls.slug === "prenatal-yoga" && "Safe prenatal care (OB-GYN cleared)"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-text text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Not sure which class fits you?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Book a trial or call us to talk to our teachers directly. We will recommend the perfect batch for your health and experience.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="focus-ring flex w-full items-center justify-center rounded-full bg-brand-accent px-7 py-3.5 font-bold text-white hover:bg-brand-accent/80 sm:w-auto"
            >
              Call Primary: {site.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="focus-ring flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-bold text-white hover:bg-white/10 sm:w-auto"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
