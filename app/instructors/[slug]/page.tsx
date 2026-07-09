import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { instructors, classes, site } from "@/lib/content";

export async function generateStaticParams() {
  return instructors.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const inst = instructors.find((i) => i.slug === slug);
  if (!inst) return {};
  return {
    title: inst.seoTitle,
    description: inst.seoDescription,
    openGraph: {
      images: [inst.image],
    },
  };
}

export default async function InstructorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const inst = instructors.find((i) => i.slug === slug);
  if (!inst) notFound();

  // Find classes taught by this instructor
  const taught = classes.filter((cls) => {
    if (slug === "maheswari-satheesh") {
      return ["group-yoga", "ladies-yoga", "senior-yoga", "prenatal-yoga"].includes(cls.slug);
    } else {
      return ["group-yoga", "personal-yoga", "zoom-yoga", "kids-yoga"].includes(cls.slug);
    }
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: inst.name,
          jobTitle: inst.role,
          telephone: `+91${inst.phone.replace(/\s+/g, "")}`,
          worksFor: {
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

      {/* Profile section */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <Link
            href="/instructors"
            className="focus-ring mb-8 inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
          >
            <ArrowLeft size={14} /> Back to Instructors
          </Link>

          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
            {/* Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card lg:aspect-auto lg:h-full">
              <Image
                src={inst.image}
                alt={inst.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 380px, 100vw"
              />
            </div>

            {/* Info */}
            <div>
              <p className="eyebrow text-brand-primary">{inst.role}</p>
              <h1 className="mt-2 font-display text-4xl font-semibold text-brand-text md:text-5xl">
                {inst.name}
              </h1>
              <p className="mt-2 text-sm font-bold text-brand-accent md:text-base">{inst.experience}</p>
              <p className="mt-6 text-base leading-8 text-neutral-mid">{inst.bio}</p>

              {/* Certifications / Specializations */}
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-mid">
                    Certifications
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {inst.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2.5 text-sm leading-6 text-brand-text">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-mid">
                    Specializations
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {inst.specialties.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-sm leading-6 text-brand-text">
                        <Sparkles size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-10 flex flex-wrap gap-3">
                
                <a  href={inst.phoneHref}
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white hover:bg-brand-primaryDark"
                >
                  <Phone size={15} /> Call: {inst.phone}
                </a>
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-brand-text/15 px-6 py-3 text-sm font-bold text-brand-text hover:bg-white"
                >
                  Send Inquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Taught */}
      <section className="section-pad bg-neutral-bgAlt/50 border-t border-brand-text/5">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-brand-text">Classes Taught by {inst.name}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {taught.map((tc) => (
              <Link
                key={tc.slug}
                className="reveal group flex flex-col overflow-hidden rounded-xl border border-brand-text/8 bg-white shadow-card hover:-translate-y-1 transition duration-300"
                href={`/classes/${tc.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={tc.image} alt={tc.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
                    {tc.title}
                  </h3>
                  <p className="text-xs text-brand-primary font-semibold mt-0.5">{tc.level}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
