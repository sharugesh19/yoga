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

      {/* Mission & Vision */}
      <section className="section-pad bg-neutral-bg">
        <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={instructors[0].image}
              alt="Yoga practice at Mokshaa Yoga"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow">Our Mission</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-brand-text md:text-4xl">
              Why We Exist
            </h3>
            <p className="mt-4 text-base leading-8 text-neutral-mid">
              Mokshaa Yoga exists to make authentic yoga instruction accessible to every person in Neelankarai and Chennai — regardless of age, body type or fitness level. We believe yoga is not a fitness trend but a lifelong practice, and we are committed to teaching it with the discipline and care it deserves.
            </p>

            <p className="mt-8 eyebrow">Our Vision</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-brand-text md:text-4xl">
              Where We're Headed
            </h3>
            <p className="mt-4 text-base leading-8 text-neutral-mid">
              A Chennai where every family has access to the transformative tools of yoga — taught by certified instructors who genuinely care about each student's safety, progress and wellbeing.
            </p>
          </div>
        </div>
      </section>
            {/* Journey Timeline */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="A Journey of Learning, Service & Growth."
            text="Some milestones are based on verified training and achievements, while a few are temporary placeholders that can be updated with the studio's exact history."
            center
          />

          <div className="relative mt-16">
            <div className="absolute left-[18px] top-0 h-full w-0.5 bg-brand-primary/30 md:left-1/2 md:-translate-x-1/2"></div>

            {[
              {
                year: "2004",
                title: "Yoga Siromani Teacher Training",
                text: "S. Maheswari completed the Yoga Siromani Teacher Training Course, laying the foundation for a lifelong journey in authentic yoga education.",
              },
              {
                year: "2008",
                title: "Mokshaa Yoga Begins",
                text: "Placeholder — Replace this with the actual year and story of the Mokshaa Yoga studio.",
              },
              {
                year: "2010",
                title: "Advanced Teacher Training",
                text: "Both founders completed the Yoga Acharya (Advanced Teacher Training), strengthening their teaching expertise.",
              },
              {
                year: "2011",
                title: "Service Beyond the Studio",
                text: "Participated in Japan tsunami relief volunteer activities while continuing their yoga learning journey.",
              },
              {
                year: "2025",
                title: "Continuing Education",
                text: "Advanced Japanese language studies and continued international learning to further enrich teaching and cultural exchange.",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative mb-14 flex flex-col md:mb-20 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="absolute left-[9px] top-3 h-5 w-5 rounded-full border-4 border-white bg-brand-primary shadow md:left-auto md:right-[-10px] md:top-5 md:translate-x-1/2">
                  {index % 2 !== 0 && (
                    <div className="absolute left-[-22px] top-0 h-5 w-5 rounded-full border-4 border-white bg-brand-primary md:hidden"></div>
                  )}
                </div>

                <span className="ml-12 inline-block w-fit rounded-full bg-brand-accent px-4 py-1 text-sm font-bold text-white md:ml-0">
                  {item.year}
                </span>

                <div className="ml-12 mt-4 rounded-2xl bg-neutral-bg p-6 shadow-card md:ml-0">
                  <h3 className="font-display text-2xl font-semibold text-brand-text">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-mid">
                    {item.text}
                  </p>
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
            eyebrow="What We Stand For"
            title="Our Values."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Authenticity",
                text: "We teach from classical yoga foundations — Hatha and traditional alignment principles — honouring the original teachings of yoga.",
                icon: Sparkles,
              },
              {
                title: "Mindfulness",
                text: "Every class weaves awareness into movement. We teach you to practise yoga not just on the mat but in every moment of life.",
                icon: Star,
              },
              {
                title: "Compassion",
                text: "All bodies are welcome. Our instructors meet every student where they are, with patience, warmth and zero judgment.",
                icon: HeartHandshake,
              },
              {
                title: "Community",
                text: "Mokshaa Yoga is not just a studio. It is a community of practitioners who support, inspire and uplift one another.",
                icon: Shield,
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div className="reveal rounded-2xl bg-white p-8 shadow-card" key={v.title}>
                  <div className="inline-flex rounded-xl bg-brand-primary/10 p-3">
                    <Icon className="text-brand-primary" size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-brand-text">{v.title}</h3>
                  <p className="mt-3 text-base leading-7 text-neutral-mid">{v.text}</p>
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
