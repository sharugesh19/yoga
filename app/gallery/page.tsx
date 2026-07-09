import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Info, Instagram, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { gallery, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Mokshaa Yoga Studio Neelankarai Chennai",
  description:
    "View photos of our studio space, class setups, and events at Mokshaa Yoga in Neelankarai, Chennai. Real studio photography coming soon.",
};

export default function GalleryPage() {
  // Adding extra Unsplash images for rich layout
  const extraImages = [
    { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80", alt: "Kids yoga practice session" },
    { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", alt: "Prenatal alignment adjustments" },
    { src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=900&q=80", alt: "Yoga mats aligned in clean studio" },
    { src: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=900&q=80", alt: "Pranayama breathing practice" },
    { src: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=900&q=80", alt: "Traditional Hatha sequence hold" },
    { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80", alt: "One-on-one personal session stretch" },
  ];

  const allPhotos = [...gallery, ...extraImages];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life at Mokshaa Yoga."
        text="Take a look inside our clean, hygienic, and quiet studio space in Neelankarai, Chennai. These images show the setups and formats we teach daily."
        image="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2000&q=80"
        alt="Mokshaa Yoga studio gallery banner"
      />

      {/* Masonry image grid */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Inside the Studio"
            title="Studio views."
            text="A clean, quiet, and well-ventilated space for posture and breath practice."
          />

          {/* Honest client notice */}
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-neutral-bgAlt p-4 text-sm text-neutral-mid border border-brand-text/5">
            <Info size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> These photos are high-quality illustrative placeholders. Our official professional studio photoshoot is currently scheduled, and real images of our interior, signage, and instructors will be added here soon.
            </p>
          </div>

          <div className="mt-10 columns-2 gap-4 md:columns-3 space-y-4">
            {allPhotos.map((photo, idx) => (
              <div
                className="reveal break-inside-avoid overflow-hidden rounded-xl bg-white border border-brand-text/8 shadow-card hover:scale-[1.02] transition duration-300"
                key={idx}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={600}
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="w-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-brand-text text-white py-16 text-center">
        <div className="container max-w-2xl">
          <Instagram className="mx-auto text-brand-primary" size={40} />
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">Follow us on Instagram</h2>
          <p className="mt-3 text-sm text-white/70">
            We share daily batch photos, alignment corrections, and announcements on our social handles.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-xs font-bold text-white transition hover:bg-green-600"
          >
            {site.instagramHandle} &rarr;
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold">Visit the studio in person</h2>
          <p className="mt-4 text-lg text-white/80">
            Book your free trial class and experience our Neelankarai location and certified teachers for yourself.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg"
            >
              Contact Us
            </Link>
            <Link
              href="/classes"
              className="focus-ring rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10"
            >
              See Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
