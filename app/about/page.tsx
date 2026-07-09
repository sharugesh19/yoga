import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Star, HeartHandshake, Phone, CheckCircle2, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { instructors, certifications, values, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Mokshaa Yoga | E-RYT 500 Certified Studio, Neelankarai Chennai",
  description:
    "Meet the founders of Mokshaa Yoga — S. Maheswari and S. Satheesh, ISO 9001:2015 certified E-RYT 500 yoga acharyas teaching authentic Hatha & Ashtanga in Neelankarai, Chennai.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: `${site.url}/about`,
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
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: instructors[0].name,
          jobTitle: instructors[0].role,
          worksFor: {
            "@type": "HealthAndBeautyBusiness",
            name: site.name,
          },
          telephone: `+91${instructors[0].phone.replace(/\s+/g, "")}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: instructors[1].name,
          jobTitle: instructors[1].role,
          worksFor: {
            "@type": "HealthAndBeautyBusiness",
            name: site.name,
          },
          telephone: `+91${instructors[1].phone.replace(/\s+/g, "")}`,
        }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Our Story"
        title="Two certified yoga acharyas. One mission."
        text="Mokshaa Yoga was founded in Neelankarai, Chennai, by two E-RYT 500 certified yoga acharyas. We believe authentic yoga instruction, rigorous qualifications and personal attention are the foundation for safe, life-long practice."
        image={instructors[0].image}
        alt="Mokshaa Yoga founders and training space"
      />

      {/* Founders */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Founders & Lead Teachers"
            title="Learn from certified, experienced instructors."
            text="Our founders bring over a decade of teaching experience and the highest international qualifications directly to every batch."
          />
          <div className="mt-12 space-y-16 md:space-y-20">
            {instructors.map((inst, i) => (
              <div
                className={`reveal flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                key={inst.slug}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:w-[380px] flex-shrink-0">
                  <Image
                    src={inst.image}
                    alt={inst.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 380px, 100vw"
                  />
                </div>
                <div className="flex-1">
                  <p className="eyebrow">{i === 0 ? "Founder & Director" : "Co-Founder & MD"}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-brand-text md:text-4xl">
                    {inst.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-brand-accent">{inst.experience}</p>
                  <p className="mt-4 text-base leading-8 text-neutral-mid">{inst.bio}</p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow">Certifications</p>
                      <ul className="mt-3 space-y-2.5">
                        {inst.certifications.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm leading-6 text-brand-text">
                            <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-brand-primary" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Specializations</p>
                      <ul className="mt-3 space-y-2.5">
                        {inst.specialties.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm leading-6 text-brand-text">
                            <Sparkles size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    
                    <a  href={inst.phoneHref}
                      className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:underline"
                    >
                      <Phone size={15} />
                      {inst.phone}
                    </a>
                    <span className="text-neutral-bgAlt">|</span>
                    <Link
                      href={`/instructors/${inst.slug}`}
                      className="focus-ring text-sm font-bold text-brand-text hover:underline"
                    >
                      View profile &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-brand-text text-white">
        <div className="container">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Three pillars of practice at Mokshaa Yoga."
            light
            center
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "Strengthen & Calm", text: site.taglineHero },
              { num: "02", title: "With You Every Step", text: site.taglineSub },
              { num: "03", title: "Safe & Professional", text: site.taglineTrust },
            ].map((p, idx) => (
              <div
                className={`reveal rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8 ${
                  idx === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
                key={idx}
              >
                <span className="font-display text-4xl font-bold text-brand-primary md:text-5xl">{p.num}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white md:mt-6 md:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70 md:mt-3 md:leading-7">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications wall */}
      <section id="credentials" className="section-pad bg-neutral-bgAlt scroll-mt-24">
        <div className="container">
          <SectionHeader
            eyebrow="Accredited & Audited"
            title="Our formal credentials."
            text="We believe in quality standards that can be audited. Here is what our credentials mean for your practice."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <div className="reveal rounded-2xl bg-white p-4 shadow-card sm:p-6" key={c.name}>
                  <Icon className="text-brand-primary" size={28} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-text sm:mt-5 sm:text-xl">{c.name}</h3>
                  <p className="mt-2 text-[11px] font-bold text-brand-accent uppercase tracking-wider sm:text-xs">{c.detail}</p>
                  <p className="mt-3 text-xs leading-5 text-neutral-mid sm:text-sm sm:leading-6">
                    {c.name === "ISO 9001:2015" && "Formal audit of teaching quality standards, safety and operations."}
                    {c.name === "E-RYT 500" && "Audited 500+ hours of certified teacher training and 1000+ hours of teaching."}
                    {c.name === "YACEP" && "Approved Continuing Education Provider, certifying ongoing education."}
                    {c.name === "MSME Registered" && "Registered with the Ministry of MSME, Govt of India, as a verified business."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Core Values"
            title="What we stand for."
            text="Our day-to-day decisions and teachings are guided by these core principles."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div className="reveal rounded-2xl border border-brand-text/8 bg-white p-4 sm:p-6" key={v.title}>
                  <Icon className="text-brand-accent" size={24} />
                  <h3 className="mt-3 font-display text-lg font-semibold text-brand-text sm:mt-4 sm:text-xl">{v.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-mid sm:mt-3 sm:text-sm sm:leading-6">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Ready to start your practice?</h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free trial class at our Neelankarai studio. No obligation, no pressure.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg sm:w-auto"
            >
              Book Free Trial
            </Link>
            <Link
              href="/classes"
              className="focus-ring flex w-full items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10 sm:w-auto"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
