"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-text/10 bg-neutral-bg/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between sm:h-20">
          {/* Logo / wordmark */}
          <Link className="focus-ring flex items-center" href="/" aria-label="Mokshaa Yoga home">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-text/10 flex-shrink-0 sm:h-12 sm:w-12">
              <Image src="/logo.png" alt="Mokshaa Yoga logo" fill className="object-cover" priority sizes="48px" />
            </div>
             <span className="ml-2.5 font-display text-sm font-semibold text-brand-text sm:ml-3 sm:text-lg">
              Mokshaa Yoga
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-text lg:flex" aria-label="Primary navigation">
            {nav.map(([label, href]) => {
              const isActive = pathname === href;
              return (
                <Link
                  className={`focus-ring relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:transition-all hover:text-brand-accent ${
                    isActive ? "text-brand-accent after:w-full after:bg-brand-accent" : "after:w-0 after:bg-brand-accent hover:after:w-full"
                  }`}
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-text hover:text-brand-accent transition-colors" href={site.phoneHref}>
              <Phone size={15} aria-hidden />
              {site.phoneFormatted}
            </a>
            <Link
              className="focus-ring rounded-full bg-white border border-brand-text/10 px-5 py-3 text-sm font-bold text-brand-text shadow-card transition hover:bg-neutral-bgAlt"
              href="/contact"
            >
              Book a Class
            </Link>
          </div>

          {/* Mobile call icon + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            
            <a  className="focus-ring rounded-full border border-brand-text/15 p-2.5 text-brand-text"
              href={site.phoneHref}
              aria-label={`Call ${site.phoneFormatted}`}
            >
              <Phone size={20} aria-hidden />
            </a>
            <button
              className="focus-ring rounded-full border border-brand-text/15 p-2.5 text-brand-text"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
              suppressHydrationWarning
            >
              {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop + panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 bg-brand-text/50 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* Slide-in panel */}
          <div
            id="mobile-menu"
            className="fixed inset-y-0 right-0 z-40 flex w-[min(320px,85vw)] flex-col bg-neutral-bg shadow-2xl lg:hidden"
          >
            {/* Panel header */}
            <div className="flex h-16 items-center justify-between border-b border-brand-text/10 px-5 sm:h-20">
              <span className="font-display text-base font-semibold text-brand-text">Menu</span>
              <button
                className="focus-ring rounded-full border border-brand-text/15 p-2.5 text-brand-text"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
              <div className="grid gap-1">
                {nav.map(([label, href]) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      className={`focus-ring flex min-h-[48px] items-center rounded-xl px-4 font-semibold hover:bg-neutral-bgAlt transition-colors ${
                        isActive ? "bg-neutral-bgAlt text-brand-accent" : "text-brand-text hover:text-brand-accent"
                      }`}
                      href={href}
                      key={href}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* CTA buttons */}
            <div className="border-t border-brand-text/10 p-4 space-y-3">
              <a
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-accent px-5 font-bold text-white"
                href={site.phoneHref}
              >
                <Phone size={16} aria-hidden />
                Call {site.phoneFormatted}
              </a>
              <Link
                className="flex min-h-[48px] items-center justify-center rounded-full bg-white border border-brand-text/10 font-bold text-brand-text shadow-card hover:bg-neutral-bgAlt transition-colors"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Book a Class
              </Link>
            </div>
          </div>
        </>
      )}

    </>
  );
}
