import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { events, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga Workshops & Events Chennai | Mokshaa Yoga",
  description:
    "Upcoming yoga workshops, meditation sessions, breathing exercises and special practices at Mokshaa Yoga, Neelankarai Chennai. Follow @mokshaa_yoga for announcements.",
};

export default function EventsPage() {
  // Filter events where date >= today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  return (
    <>
      <PageHero
        eyebrow="Events &amp; Workshops"
        title="Special sessions &amp; community practices."
        text="Beyond our daily weekly batches, we run weekend intensives, breathing workshops, meditation circles, and community yoga gatherings in Neelankarai."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
        alt="Yoga workshops and events banner"
      />

      {/* Upcoming events grid */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Workshops"
            title="Upcoming events."
            text="Reserve your spot for these weekend events. Spots are limited to ensure direct teacher guidance for all participants."
          />

          {upcomingEvents.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => {
                const eventDate = new Date(event.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
                return (
                  <div
                    key={event.title}
                    className="reveal flex flex-col justify-between rounded-2xl border border-brand-text/8 bg-white p-6 shadow-card"
                  >
                    <div>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-brand-accent uppercase tracking-wider">
                        <CalendarDays size={14} />
                        {eventDate}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-brand-text">{event.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-mid">{event.description}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-brand-text/5 pt-4">
                      <span className="text-xs font-semibold text-brand-primary">
                        {event.spots} spots available
                      </span>
                      <Link
                        href="/contact"
                        className="focus-ring inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:underline"
                      >
                        Register Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 text-center rounded-2xl border border-brand-text/5 bg-neutral-bgAlt/50 p-12 max-w-xl mx-auto">
              <CalendarDays size={40} className="text-neutral-mid mx-auto" />
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-text">No upcoming events.</h3>
              <p className="mt-2 text-sm text-neutral-mid leading-6">
                We are currently planning our next schedule of workshops. Follow us on Instagram{" "}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent font-bold hover:underline"
                >
                  {site.instagramHandle}
                </a>{" "}
                to get notified immediately.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past events notice */}
      <section className="bg-brand-text text-white py-12 text-center">
        <div className="container max-w-2xl">
          <h2 className="font-display text-2xl font-semibold">Missed a session?</h2>
          <p className="mt-2 text-sm text-white/70">
            We announce all new workshops and batch slots on our Instagram feed. Connect with us at{" "}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-bold hover:underline"
            >
              {site.instagramHandle}
            </a>.
          </p>
        </div>
      </section>

      {/* Newsletter / Notifications form */}
      <section className="section-pad bg-neutral-bgAlt">
        <div className="container max-w-2xl text-center">
          <SectionHeader
            eyebrow="Notifications"
            title="Get workshop updates."
            text="Enter your email to receive early notifications and discounts for upcoming Chennai and Neelankarai weekend workshops."
            center
          />
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/contact">
            <label className="sr-only" htmlFor="event-newsletter-email">Email Address</label>
            <input
              id="event-newsletter-email"
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="focus-ring flex-1 rounded-full border border-brand-text/15 bg-white px-5 py-3.5 text-sm text-brand-text placeholder:text-neutral-mid outline-none"
            />
            <button
              type="submit"
              className="focus-ring rounded-full bg-brand-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-accent/80"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
