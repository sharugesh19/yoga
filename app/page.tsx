import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import {
  certifications,
  classes,
  gallery,
  instructors,
  schedule,
  site,
  testimonials,
  trustStats,
  values,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga Studio in Chennai | Mokshaa Yoga, Neelankarai",
  description:
    "Mokshaa Yoga in Neelankarai, Chennai — ISO 9001 certified, E-RYT 500 instructors. Group, Ladies, Prenatal, Kids, Senior Citizen, Personal & Zoom yoga classes. Book a free trial.",
  openGraph: {
    title: "Yoga Studio in Chennai | Mokshaa Yoga, Neelankarai",
    description: "7 yoga class formats. E-RYT 500 certified instructors. ISO 9001:2015 certified studio in Neelankarai, Chennai. Book your free trial today.",
    images: [site.ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: site.url,
          telephone: `+91${site.phone}`,
          telephone2: `+91${site.phone2}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street",
            addressLocality: "Neelankarai",
            addressRegion: "Tamil Nadu",
            postalCode: site.pincode,
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: site.coordinates.lat, longitude: site.coordinates.lng },
          priceRange: "₹₹",
          image: site.ogImage,
          sameAs: [site.instagram, site.facebook],
          hasCredential: ["ISO 9001:2015", "E-RYT 500", "YACEP", "MSME Registered"],
        }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative flex h-[calc(100vh-88px)] flex-col overflow-hidden bg-brand-text text-white">
        <Image
          src="/footer.jpg"
          alt="Yoga practice at Mokshaa Yoga, Neelankarai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay — moody, desaturated */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content block — pinned top-to-bottom */}
        <div className="container relative z-10 flex flex-1 flex-col items-center justify-between px-4 pt-8 pb-8 text-center sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
          <div>
            {/* Eyebrow */}
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary drop-shadow-md sm:text-xs sm:tracking-[0.3em]">
              Mokshaa Yoga Centre &middot; Chennai
            </p>

            {/* Headline */}
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.05] drop-shadow-md sm:text-5xl md:text-6xl">
              Transform Your Mind,{" "}
              <span className="font-script text-[1.2em] font-normal text-brand-primary drop-shadow-md">
                Body &amp; Soul
              </span>{" "}
              Through Yoga
            </h1>
          </div>

          {/* CTA Buttons */}
           <div className="flex flex-row items-center gap-2.5 sm:gap-4">
            <Link
              className="focus-ring inline-flex min-w-[130px] items-center justify-center gap-2 rounded-full bg-brand-primary px-4 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-brand-primaryDark sm:min-w-[160px] sm:px-7 sm:py-3.5 sm:text-sm"
              href="/contact"
            >
              Book a Class
            </Link>
            
            <a className="focus-ring inline-flex min-w-[130px] items-center justify-center gap-2 rounded-full border border-white/70 bg-white/8 backdrop-blur-sm px-4 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-white/20 sm:min-w-[160px] sm:px-7 sm:py-3.5 sm:text-sm"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="bg-neutral-bg py-8">
        <div className="container grid grid-cols-2 gap-3 md:grid-cols-4">
          {trustStats.map(({ value, label }) => (
            <div
              className="reveal flex min-h-[130px] flex-col justify-center rounded-xl border border-brand-text/8 bg-white p-5 shadow-card"
              key={label}
            >
              <p className="font-display text-3xl font-semibold leading-tight text-brand-accent">{value}</p>
              <p className="mt-1 text-sm font-semibold text-neutral-mid">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATION BADGES ── */}
      <section className="bg-neutral-bg pb-8">
        <div className="container flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-mid">Certified &amp; Registered:</span>
          {certifications.map(({ name, detail }) => (
            <span
              key={name}
              className="rounded-full border border-brand-primary/40 bg-white px-4 py-1.5 text-xs font-bold text-brand-primary"
              title={detail}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. ABOUT INTRO ── */}
      <section className="section-pad bg-neutral-bgAlt/50">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeader
            eyebrow="Who we are"
            title="A certified yoga studio built around real teaching, not templates."
            text="Mokshaa Yoga is an ISO 9001:2015 certified studio in Neelankarai, Chennai, founded by two E-RYT 500 certified yoga acharyas. We teach 7 class formats designed for every age, goal and life stage — with the credentials, structure and personal attention to back it up."
          />
          <div className="reveal space-y-5 text-neutral-mid leading-8">
            <div className="flex flex-wrap gap-2">
              {site.taglineTrust.split("|").map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-primary/25 bg-white px-4 py-1.5 text-sm font-semibold text-brand-text"
                >
                  {item.trim()}
                </span>
              ))}
            </div>
            <p>
              Located at Neelankarai on the ECR corridor, Mokshaa Yoga serves students from Thiruvanmiyur, Besant Nagar, Adyar and across South Chennai — in person and via live Zoom sessions for students anywhere in India.
            </p>
            <Link
              href="/about"
              className="focus-ring mt-2 inline-flex items-center gap-2 font-bold text-brand-accent hover:underline"
            >
              Our story & certifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. CLASSES GRID ── */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="What we teach"
            title="7 yoga class formats. One for every stage of life."
            text="From your first beginner class to specialist prenatal, senior and 1:1 sessions — each format is designed with a specific student in mind."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classes.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  className="reveal group overflow-hidden rounded-2xl border border-brand-text/8 bg-white shadow-card transition hover:shadow-soft hover:-translate-y-1 duration-300"
                  href={`/classes/${item.slug}`}
                  key={item.slug}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-brand-primary" />
                      <span className="rounded-full bg-brand-primary/12 px-3 py-0.5 text-xs font-bold text-brand-primary">
                        {item.level}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-brand-text">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-mid">{item.summary}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-accent">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Specialty focus angles */}
          <div className="mt-10 rounded-2xl bg-neutral-bgAlt p-5 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-mid">Specialist focus areas</p>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              {["Weight Loss", "Back Pain", "Stress Relief", "Yoga Therapy", "Counselling"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white border border-brand-accent/20 px-4 py-2 text-center text-sm font-semibold text-brand-accent sm:py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY MOKSHAA ── */}
      <section className="section-pad bg-brand-text text-white">
        <div className="container">
          <SectionHeader
            eyebrow="Why Mokshaa Yoga"
            title="Credentials, structure and genuine care — not just a class."
            text="We are one of very few yoga studios in Chennai with ISO 9001:2015 certification and E-RYT 500 qualified founders. These aren't marketing words — they're audited, verified standards."
            light
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {values.map(({ title, text, icon: Icon }) => (
              <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-6" key={title}>
                <Icon className="text-brand-primary" size={28} />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/65">{text}</p>
                <Link
                  href="/about#credentials"
                  className="focus-ring mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                >
                  Read more <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FEATURED INSTRUCTORS ── */}
      <section className="section-pad bg-neutral-bg">
        <div className="container grid gap-8 lg:grid-cols-2">
          {instructors.map((inst, i) => (
            <div key={inst.slug} className="reveal flex gap-6 rounded-2xl border border-brand-text/8 bg-white p-6 shadow-card">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-4 border-brand-primary/30">
                <Image src={inst.image} alt={inst.alt} fill unoptimized className="object-cover" sizes="96px" />
              </div>
              <div>
                {i === 0 && <p className="eyebrow">Founder &amp; Director</p>}
                {i === 1 && <p className="eyebrow">Co-Founder &amp; MD</p>}
                <h3 className="mt-1 font-display text-2xl font-semibold text-brand-text">{inst.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-primary">{inst.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {inst.certifications.slice(0, 2).map((cert) => (
                    <span key={cert} className="rounded-full bg-neutral-bgAlt px-3 py-1 text-xs font-bold text-brand-text">
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-mid line-clamp-2">{inst.shortBio}</p>
              </div>
            </div>
          ))}
          <div className="lg:col-span-2 text-center reveal">
            <Link
              href="/instructors"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-text px-7 py-4 font-bold text-white transition hover:bg-brand-accent"
            >
              Meet our instructors <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. SCHEDULE PREVIEW ── */}
      <section className="section-pad bg-brand-accent text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-white/70">This week</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              See the schedule &amp; reserve your spot.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">{site.taglineCta}</p>
          </div>
          <div className="grid gap-3">
            {schedule.slice(0, 5).map(([day, time, className, teacher, mode]) => (
              <div
                className="reveal rounded-xl bg-white/12 px-5 py-3.5"
                key={`${day}-${time}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold">{day}</span>
                  {mode === "Zoom" && (
                    <span className="rounded-full bg-brand-primary/25 px-2 py-0.5 text-xs font-bold text-white">Zoom</span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
                  <span className="text-brand-primary font-semibold">{time}</span>
                  <span className="text-white/40">·</span>
                  <span className="truncate">{className}</span>
                </div>
              </div>
            ))}
            <Link
              className="focus-ring mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-brand-accent transition hover:bg-neutral-bg"
              href="/schedule"
            >
              Full timetable <CalendarDays size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── 9. GALLERY TEASER ── */}
      <section className="section-pad bg-neutral-bgAlt/60">
        <div className="container">
          <SectionHeader eyebrow="Gallery" title="A glimpse of life at Mokshaa Yoga." />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {gallery.map(({ src, alt }, index) => (
              <div
                className={`reveal relative overflow-hidden rounded-xl ${index === 0 || index === 5 ? "col-span-2 row-span-2" : "col-span-1"
                  } aspect-square`}
                key={src}
              >
                <Image src={src} alt={alt} fill unoptimized sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center reveal">
            <Link href="/gallery" className="focus-ring inline-flex items-center gap-2 rounded-full border border-brand-text/20 bg-white px-6 py-3.5 font-bold text-brand-text transition hover:bg-brand-text hover:text-white">
              See full gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>



      {/* ── 11. LOCATION / CONTACT ── */}
      <section className="section-pad bg-brand-text text-white">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div>
            <p className="eyebrow text-brand-primary">Find us</p>
            <h2 className="mt-3 font-display text-5xl font-semibold">
              Visit Mokshaa Yoga in Neelankarai.
            </h2>
            <address className="mt-5 not-italic leading-8 text-white/75">
              {site.address}
            </address>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-white hover:text-brand-primary transition-colors">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                {site.phoneName}: {site.phoneFormatted}
              </a>
              <a href={site.phone2Href} className="flex items-center gap-3 text-sm font-semibold text-white hover:text-brand-primary transition-colors">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                {site.phone2Name}: {site.phone2Formatted}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="focus-ring rounded-full bg-brand-accent px-6 py-4 font-bold text-white transition hover:bg-brand-accent/80" href={site.phoneHref}>
                Call Now
              </a>
              <a className="focus-ring rounded-full bg-brand-primary px-6 py-4 font-bold text-white transition hover:bg-green-600" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link className="focus-ring rounded-full border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10" href="/contact">
                Send a message
              </Link>
            </div>
          </div>
          <div className="reveal h-80 overflow-hidden rounded-2xl border border-white/10 lg:h-auto">
            <iframe
              title="Mokshaa Yoga location map"
              src={`https://maps.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
