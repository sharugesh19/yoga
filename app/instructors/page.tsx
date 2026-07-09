import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Star, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { instructors, certifications, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certified Yoga Instructors Chennai | E-RYT 500 | Mokshaa Yoga",
  description:
    "Meet S. Maheswari & S. Satheesh — E-RYT 500 certified yoga acharyas and founders of Mokshaa Yoga, Neelankarai Chennai. Over a decade of teaching experience.",
};

export default function InstructorsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: `${site.url}/instructors`,
          telephone: `+91${site.phone}`,
          image: site.ogImage,
        }}
      />
      {instructors.map((inst) => (
        <JsonLd
          key={inst.slug}
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: inst.name,
            jobTitle: inst.role,
            worksFor: {
              "@type": "HealthAndBeautyBusiness",
              name: site.name,
            },
            telephone: `+91${inst.phone.replace(/\s+/g, "")}`,
          }}
        />
      ))}

      <PageHero
        eyebrow="Our Teachers"
        title="E-RYT 500 certified yoga acharyas."
        text="Meet the founders of Mokshaa Yoga — certified teachers holding E-RYT 500, the highest credentials in internationally recognized yoga methodology."
        image={instructors[0].image}
        alt="Instructors at Mokshaa Yoga Neelankarai Chennai"
      />

      {/* Instructors List */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Founders"
            title="Experienced, certified teachers."
            text="Every class at Mokshaa Yoga is taught directly by our founders, ensuring personalized attention and safe posture training."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {instructors.map((inst, i) => (
              <div
                className="reveal flex flex-col overflow-hidden rounded-2xl border border-brand-text/8 bg-white shadow-card transition hover:shadow-soft"
                key={inst.slug}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={inst.image} alt={inst.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div className="p-8">
                  <span className="eyebrow">{i === 0 ? "Founder & Director" : "Co-Founder & MD"}</span>
                  <h3 className="mt-2 font-display text-4xl font-semibold text-brand-text">{inst.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-primary">{inst.role}</p>
                  <p className="mt-2 text-xs font-bold text-neutral-mid uppercase tracking-wide">{inst.experience}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {inst.certifications.map((cert) => (
                      <span key={cert} className="rounded-full bg-neutral-bgAlt px-2.5 py-0.5 text-xs font-semibold text-brand-text">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {inst.specialties.map((spec) => (
                      <span key={spec} className="rounded-full border border-brand-primary/20 px-3 py-1 text-xs font-semibold text-brand-primary">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-8 text-neutral-mid">{inst.bio}</p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-text/5 pt-6">
                    <a
                      href={inst.phoneHref}
                      className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:underline"
                    >
                      <Phone size={15} />
                      {inst.phone}
                    </a>
                    <Link
                      href={`/instructors/${inst.slug}`}
                      className="focus-ring inline-flex items-center gap-1 text-sm font-bold text-brand-text hover:underline"
                    >
                      View Full Profile &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification details */}
      <section className="section-pad bg-brand-text text-white">
        <div className="container">
          <SectionHeader
            eyebrow="Our Credentials"
            title="What our certifications mean for you."
            text="We maintain verified credentials and quality audits to give our students absolute confidence."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-6" key={c.name}>
                  <Icon className="text-brand-primary" size={28} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-xs font-bold text-brand-primary uppercase tracking-wider">{c.detail}</p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {c.name === "ISO 9001:2015" &&
                      "Formally audits our operations, management procedures and student safety guidelines to guarantee consistency."}
                    {c.name === "E-RYT 500" &&
                      "Ensures you are taught by instructors holding the highest credentials for teacher training and student alignment."}
                    {c.name === "YACEP" &&
                      "Confirms we are qualified to conduct continuing education courses and certify other teachers under Yoga Alliance standards."}
                    {c.name === "MSME Registered" &&
                      "Registered business entity with the Ministry of MSME, Government of India, establishing official accountability."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Book a session with our teachers</h2>
          <p className="mt-4 text-lg text-white/80">
            Talk to Maheswari or Satheesh today to map out your private or group goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg"
            >
              Contact Us
            </Link>
            <a
              href={site.phoneHref}
              className="focus-ring rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10"
            >
              Call Primary
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
