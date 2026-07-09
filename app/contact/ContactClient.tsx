"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2, AlertCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { classes, site } from "@/lib/content";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classInterest: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", classInterest: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: `${site.url}/contact`,
          telephone: `+91${site.phone}`,
          image: site.ogImage,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street",
            addressLocality: "Neelankarai",
            addressRegion: "Tamil Nadu",
            postalCode: site.pincode,
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: site.coordinates.lat,
            longitude: site.coordinates.lng,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "06:00",
              closes: "20:00",
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-brand-text text-white py-20 text-center">
        <div className="container max-w-4xl">
          <p className="eyebrow text-brand-primary">Contact Us</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Get in touch.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Book a free trial class, enquire about personal coaching rates, or request custom schedules.
          </p>
        </div>
      </section>

      {/* Main Form and details */}
      <section className="section-pad bg-neutral-bg">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl border border-brand-text/8 bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl font-semibold text-brand-text mb-6">Send a Message</h2>

            {status === "sent" ? (
              <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center space-y-3">
                <CheckCircle2 size={40} className="text-brand-primary mx-auto" />
                <h3 className="font-display text-xl font-bold text-brand-text">Message Sent!</h3>
                <p className="text-sm text-neutral-mid leading-6">
                  Thank you for reaching out to Mokshaa Yoga. S. Maheswari or our team will call or email you back within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="focus-ring mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2" htmlFor="contact-name">
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-brand-text/15 bg-white px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-accent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2" htmlFor="contact-email">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="focus-ring w-full rounded-xl border border-brand-text/15 bg-white px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-accent"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2" htmlFor="contact-phone">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="focus-ring w-full rounded-xl border border-brand-text/15 bg-white px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-accent"
                      placeholder="Your contact number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2" htmlFor="contact-class">
                    Class Interest <span className="text-brand-accent">*</span>
                  </label>
                  <select
                    id="contact-class"
                    name="classInterest"
                    required
                    value={formData.classInterest}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-brand-text/15 bg-white px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-accent"
                  >
                    <option value="">-- Select Class Batch --</option>
                    {classes.map((cls) => (
                      <option value={cls.slug} key={cls.slug}>
                        {cls.title} ({cls.level})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2" htmlFor="contact-message">
                    Your Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-brand-text/15 bg-white px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-accent"
                    placeholder="Details about your health goals, preferred timings, or questions..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-xs font-semibold text-brand-accent">
                    <AlertCircle size={16} />
                    <span>Failed to send. Please check your network or call us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="focus-ring flex items-center justify-center gap-2 w-full rounded-full bg-brand-accent py-4 text-sm font-bold text-white transition hover:bg-brand-accent/80 disabled:bg-neutral-mid"
                >
                  {status === "sending" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-brand-text">Direct Contacts</h2>
              <p className="mt-3 text-sm text-neutral-mid">
                Reach out to our founding yoga acharyas directly for immediate assistance or registration.
              </p>

              {/* Founder cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-text/5 bg-white p-5 shadow-card">
                  <span className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-bold text-brand-accent uppercase">
                    Primary / Director
                  </span>
                  <h4 className="mt-2 font-display text-lg font-bold text-brand-text">{site.phoneName}</h4>
                  <p className="text-xs text-neutral-mid">{site.phoneTitle}</p>
                  <a
                    href={site.phoneHref}
                    className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-text hover:text-brand-accent transition-colors"
                  >
                    <Phone size={14} className="text-brand-accent" />
                    {site.phoneFormatted}
                  </a>
                </div>

                <div className="rounded-xl border border-brand-text/5 bg-white p-5 shadow-card">
                  <span className="rounded-full bg-neutral-bgAlt px-2 py-0.5 text-[10px] font-bold text-brand-text uppercase">
                    Co-Founder / MD
                  </span>
                  <h4 className="mt-2 font-display text-lg font-bold text-brand-text">{site.phone2Name}</h4>
                  <p className="text-xs text-neutral-mid">{site.phone2Title}</p>
                  <a
                    href={site.phone2Href}
                    className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-text hover:text-brand-accent transition-colors"
                  >
                    <Phone size={14} className="text-brand-accent" />
                    {site.phone2Formatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Email + Address */}
            <div className="space-y-4 text-sm text-neutral-mid">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-accent font-semibold transition-colors">
                  {site.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-7">
                  {site.address}
                </address>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full bg-brand-primary px-5 py-3 text-xs font-bold text-white transition hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full border border-brand-text/15 bg-white px-5 py-3 text-xs font-bold text-brand-text hover:bg-neutral-bgAlt transition"
              >
                Instagram {site.instagramHandle}
              </a>
            </div>

            {/* Map placeholder */}
            <div className="reveal rounded-2xl border border-brand-text/8 bg-white p-6 shadow-card flex flex-col items-center text-center gap-3">
              <MapPin size={32} className="text-brand-accent" />
              <p className="text-sm font-bold text-brand-text">Studio Location</p>
              <p className="text-xs text-neutral-mid">
                Located near Kapaleeswarar Nagar North corridor, Neelankarai (ECR), Chennai.
              </p>
              <a
                href="https://maps.google.com/?q=Mokshaa+Yoga+Neelankarai+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full bg-brand-text px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-accent transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
