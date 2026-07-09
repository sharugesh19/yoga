import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, Video, Phone, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { schedule, events, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga Class Schedule Chennai | Morning & Evening Batches | Mokshaa Yoga",
  description:
    "Full yoga timetable at Mokshaa Yoga, Neelankarai Chennai. Morning batches from 6AM, evening batches from 7PM. Group, Ladies, Zoom, Kids, Senior, Prenatal batches.",
};

export default function SchedulePage() {
  // Group schedule by Day
  const groupedSchedule = schedule.reduce((acc, curr) => {
    const [day] = curr;
    if (!acc[day]) acc[day] = [];
    acc[day].push(curr);
    return acc;
  }, {} as Record<string, typeof schedule[number][]>);

  const daysOrdered = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: site.name,
          url: `${site.url}/schedule`,
          telephone: `+91${site.phone}`,
          image: site.ogImage,
        }}
      />

      <PageHero
        eyebrow="Class Timetable"
        title="Morning &amp; evening batches."
        text="Choose the schedule that fits your daily routine. We offer in-person batches at our Neelankarai studio and live sessions via Zoom."
        image="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2000&q=80"
        alt="Timetable schedule banner"
      />

      {/* Timetable Grid */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Weekly Batches"
            title="Timetable &amp; slots."
            text="Please call or WhatsApp to confirm current batch capacity and book your trial session before visiting."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
            {daysOrdered.map((day) => {
              const rows = groupedSchedule[day] || [];
              return (
                <div key={day} className="reveal rounded-2xl border border-brand-text/8 bg-white p-3 shadow-card md:p-6">
                  <h3 className="font-display text-base font-semibold text-brand-text border-l-4 border-brand-primary pl-2 mb-3 md:text-2xl md:pl-3 md:mb-4">
                    {day}
                  </h3>
                  {rows.length === 0 ? (
                    <p className="text-xs text-neutral-mid italic md:text-sm">No public classes scheduled.</p>
                  ) : (
                    <div className="space-y-4">
                      {rows.map((row, idx) => {
                        const [, time, className, teacher, mode] = row;
                        return (
                          <div key={idx} className="flex flex-col justify-between border-b border-brand-text/5 pb-3 last:border-b-0 last:pb-0">
                            <div className="flex flex-wrap items-center gap-1 md:flex-nowrap md:justify-between md:gap-2">
                              <span className="flex items-center gap-1 text-[11px] font-bold text-brand-accent md:text-xs">
                                <Clock size={11} className="shrink-0 md:hidden" />
                                <Clock size={12} className="hidden shrink-0 md:block" />
                                {time}
                              </span>
                              <span className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold md:px-2 md:text-[10px] ${
                                mode === "Zoom" ? "bg-brand-primary/12 text-brand-primary" : "bg-neutral-bgAlt text-neutral-mid"
                              }`}>
                                {mode === "Zoom" ? <Video size={9} className="md:hidden" /> : <MapPin size={9} className="md:hidden" />}
                                {mode === "Zoom" ? <Video size={10} className="hidden md:block" /> : <MapPin size={10} className="hidden md:block" />}
                                {mode}
                              </span>
                            </div>
                            <h4 className="mt-1 text-xs font-semibold text-brand-text md:text-sm">{className}</h4>
                            <p className="text-[11px] text-neutral-mid md:text-xs">Instructor: {teacher}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Disclaimer/Note */}
          <div className="mt-10 rounded-2xl bg-neutral-bgAlt p-6">
            <h3 className="font-display text-lg font-semibold text-brand-text">Important Schedule Notes:</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-mid">
              <li>• Batch timings are subject to change based on capacity and enrollment.</li>
              <li>• Personal (1:1) sessions are scheduled individually around the student's calendar.</li>
              <li>• Exclusive Ladies and Senior Citizen batches have separate mid-day/early evening priority timings.</li>
              <li>
                • Contact founders directly:{" "}
                <a href={site.phoneHref} className="text-brand-accent font-bold hover:underline">{site.phoneName} ({site.phoneFormatted})</a> or{" "}
                <a href={site.phone2Href} className="text-brand-accent font-bold hover:underline">{site.phone2Name} ({site.phone2Formatted})</a>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events / Workshops */}
      <section className="section-pad bg-brand-text text-white">
        <div className="container">
          <SectionHeader
            eyebrow="Special Sessions"
            title="Workshops &amp; community events."
            text="Beyond weekly classes, we hold regular meditation sessions, breathing intensives, and beginner foundation workshops."
            light
          />

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {events.map((event, idx) => {
              const eventDate = new Date(event.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                <div
                  key={event.title}
                  className={`reveal flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 ${
                    idx === 2 ? "col-span-2 md:col-span-1 md:mx-auto md:w-full" : ""
                  }`}
                >
                  <div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-brand-primary uppercase tracking-wider">
                      <CalendarDays size={14} />
                      {eventDate}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-white">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{event.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-semibold text-brand-primary">
                      {event.spots} spots available
                    </span>
                    <Link
                      href="/contact"
                      className="focus-ring inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                    >
                      Book Spot <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Book a free trial batch</h2>
          <p className="mt-4 text-lg text-white/80">
            Tell us your preferred days and times. Our teachers will recommend the optimal batch slot for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg sm:w-auto"
            >
              Request Free Trial
            </Link>
            <a
              href={site.phoneHref}
              className="focus-ring flex w-full items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10 sm:w-auto"
            >
              Call {site.phoneName}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
