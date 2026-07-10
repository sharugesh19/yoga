import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { certifications, classes, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-28 pt-14 text-white lg:pb-12">
      <Image
        src="/footer.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-brand-text/80" />
      <div className="container relative grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.1fr]">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-white p-0.5 shadow-md">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image src="/logo.png" alt="Mokshaa Yoga logo" fill className="object-cover" sizes="48px" />
              </div>
            </div>
            <span className="ml-3 font-display text-lg font-semibold text-white">Mokshaa Yoga</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            {site.taglineSub}
          </p>
          {/* Certification badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map(({ name }) => (
              <span key={name} className="rounded-full border border-brand-primary/40 px-3 py-1 text-xs font-bold text-brand-primary">
                {name}
              </span>
            ))}
          </div>
          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            <a className="focus-ring rounded-full border border-white/20 p-3 transition hover:border-brand-primary hover:text-brand-primary" href={site.phoneHref} aria-label="Call Mokshaa Yoga">
              <Phone size={16} />
            </a>
            <a className="focus-ring rounded-full border border-white/20 p-3 transition hover:border-brand-primary hover:text-brand-primary" href={`mailto:${site.email}`} aria-label="Email Mokshaa Yoga">
              <Mail size={16} />
            </a>
            <a className="focus-ring rounded-full border border-white/20 p-3 transition hover:border-brand-primary hover:text-brand-primary" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Mokshaa Yoga on Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Explore links */}
        <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
          <p className="text-sm font-bold text-white">Explore</p>
          <div className="mt-4 grid gap-2.5 text-sm text-white/65">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-brand-primary transition-colors min-h-[36px] flex items-center">{label}</Link>
            ))}
            <Link href="/gallery" className="hover:text-brand-primary transition-colors min-h-[36px] flex items-center">Gallery</Link>
            <Link href="/faq" className="hover:text-brand-primary transition-colors min-h-[36px] flex items-center">FAQ</Link>
            <Link href="/events" className="hover:text-brand-primary transition-colors min-h-[36px] flex items-center">Events</Link>
          </div>
        </div>

        {/* Classes */}
        <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
          <p className="text-sm font-bold text-white">Classes</p>
          <div className="mt-4 grid gap-2.5 text-sm text-white/65">
            {classes.map((item) => (
              <Link key={item.slug} href={`/classes/${item.slug}`} className="hover:text-brand-primary transition-colors min-h-[36px] flex items-center">{item.title}</Link>
            ))}
          </div>
        </div>

        {/* Contact + newsletter */}
        <div className="border-t border-white/10 pt-8 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-1">
          <p className="text-sm font-bold text-white">Contact Us</p>
          <address className="mt-4 not-italic text-sm leading-7 text-white/65">
            {site.addressShort}<br />
            <a href={site.phoneHref} className="hover:text-brand-primary transition-colors">
              {site.phoneName}: {site.phoneFormatted}
            </a><br />
            <a href={site.phone2Href} className="hover:text-brand-primary transition-colors">
              {site.phone2Name}: {site.phone2Formatted}
            </a><br />
            {site.hours[0]}
          </address>
        </div>
      </div>
    </footer>
  );
}
