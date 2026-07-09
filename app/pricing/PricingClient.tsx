"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info, Phone, ArrowRight, Gift, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { monthlyPlans, multiMonthPlans, pricingPolicy, site } from "@/lib/content";

export default function PricingClient() {
  const [selectedDuration, setSelectedDuration] = useState<1 | 3 | 6 | 12>(3);
  const [selectedSessions, setSelectedSessions] = useState<12 | 20>(12);

  // Filter multi-month plans based on state  
  const filteredPlans = multiMonthPlans.filter(
    (p) => p.durationMonths === selectedDuration && p.sessionsPerMonth === selectedSessions
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-text text-white py-20 text-center">
        <div className="container max-w-4xl">
          <p className="eyebrow text-brand-primary">Transparent Pricing</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Honest, structured yoga pricing.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            No hidden administration fees. Clear, upfront plans designed to help you stay consistent in your practice.
          </p>
        </div>
      </section>

      {/* Main interactive plans */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Membership Plans"
            title="Group Class Pricing"
            text="Choose your frequency and length. Multi-month plans offer verified session discounts, extended validity and free props/gifts."
            center
          />

          {/* Interactive selectors */}
          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Duration selector tabs */}
            <div className="grid grid-cols-2 sm:flex flex-wrap justify-center gap-2 rounded-2xl sm:rounded-full bg-neutral-bgAlt p-1.5 border border-brand-text/5">
              {[
                { label: "1 Month", value: 1 },
                { label: "3 Months", value: 3 },
                { label: "6 Months", value: 6 },
                { label: "12 Months", value: 12 },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedDuration(tab.value as 1 | 3 | 6 | 12)}
                  className={`focus-ring rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                    selectedDuration === tab.value
                      ? "bg-brand-text text-white shadow-card"
                      : "text-neutral-mid hover:bg-neutral-bg hover:text-brand-text"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sessions frequency selector (only visible for 3, 6, 12 months) */}
            {selectedDuration !== 1 && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-neutral-mid uppercase">Frequency:</span>
                <div className="flex flex-col sm:flex-row rounded-2xl sm:rounded-full bg-neutral-bgAlt p-1 border border-brand-text/5">
                  {[12, 20].map((sess) => (
                    <button
                      key={sess}
                      onClick={() => setSelectedSessions(sess as 12 | 20)}
                      className={`focus-ring rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                        selectedSessions === sess
                          ? "bg-brand-primary text-white"
                          : "text-neutral-mid hover:text-brand-text"
                      }`}
                    >
                      {sess} Sessions / Month
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Plans Display */}
          <div className="mt-10 max-w-4xl mx-auto">
            {selectedDuration === 1 ? (
              /* Render the 3 monthly plans */
              <div className="grid gap-6 md:grid-cols-3">
                {monthlyPlans.map((plan) => (
                  <div
                    className="reveal rounded-2xl border border-brand-text/8 bg-white p-6 shadow-card flex flex-col justify-between"
                    key={plan.sessions}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">1-Month Plan</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-brand-text">{plan.sessions} Sessions / Month</h3>
                      <p className="mt-1 text-xs text-neutral-mid">Valid for 30 days</p>
                      <p className="mt-6 font-display text-4xl sm:text-5xl font-semibold text-brand-accent">₹{plan.price.toLocaleString("en-IN")}</p>
                      <p className="mt-1.5 text-xs text-neutral-mid">≈ ₹{plan.perSession} per session</p>
                    </div>
                    <div className="mt-8 border-t border-brand-text/5 pt-4">
                      <Link
                        href="/contact"
                        className="focus-ring block w-full rounded-full bg-brand-text py-3 text-center text-xs font-bold text-white transition hover:bg-brand-accent"
                      >
                        Select Plan &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Render the selected multi-month plan */
              /* Render the selected multi-month plan */
              <div className="grid gap-6 justify-center">
                {filteredPlans.length === 0 && (
                  <p className="text-center text-red-500 font-bold">
                    DEBUG: No plan found for {selectedDuration} months / {selectedSessions} sessions.
                    Found {multiMonthPlans.length} total plans in multiMonthPlans array.
                  </p>
                )}
                {filteredPlans.map((plan) => (
                  <div
                    className={`reveal w-full max-w-2xl rounded-2xl border bg-white p-8 shadow-soft flex flex-col md:flex-row gap-8 justify-between relative overflow-hidden ${
                      plan.highlighted ? "border-brand-primary border-2" : "border-brand-text/8"
                    }`}
                    key={plan.id}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-brand-primary text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                        Best Value
                      </div>
                    )}
                    {/* Left: values */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                          {plan.durationMonths}-Month Package
                        </p>
                        <h3 className="font-display text-3xl font-semibold text-brand-text">
                          {plan.sessionsPerMonth} Sessions / Month
                        </h3>
                        <p className="text-xs text-neutral-mid">Total of {plan.totalSessions} sessions over {plan.validityDays} days</p>
                      </div>

                      {/* Info points */}
                      <div className="space-y-2.5 text-sm text-neutral-mid pt-2">
                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-brand-primary flex-shrink-0" />
                          <span>Validity: {plan.validityDays} Days</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-brand-primary flex-shrink-0" />
                          <span>Grace Period: +{plan.graceDays} Days for extensions</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-brand-primary flex-shrink-0" />
                          <span>Make-up Classes: Up to {plan.makeupSessions} sessions</span>
                        </p>
                      </div>

                      {/* Gifts */}
                      {plan.freeGifts.length > 0 && (
                        <div className="pt-2">
                          <p className="flex items-center gap-1 text-xs font-bold text-brand-text uppercase">
                            <Gift size={14} className="text-brand-accent" /> Free Welcome Gifts:
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {plan.freeGifts.map((gift) => (
                              <span
                                key={gift}
                                className="rounded-full bg-brand-accent/10 border border-brand-accent/25 px-3 py-1 text-xs font-bold text-brand-accent"
                              >
                                {gift}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: prices */}
                    <div className="w-full md:w-60 border-t md:border-t-0 md:border-l border-brand-text/5 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-neutral-mid line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</span>
                          <span className="rounded-full bg-brand-primary/12 px-2.5 py-0.5 text-xs font-bold text-brand-primary">
                            Save ₹{plan.savings.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="mt-2 font-display text-5xl sm:text-6xl font-semibold text-brand-accent">
                          ₹{plan.offerPrice.toLocaleString("en-IN")}
                        </p>
                        <p className="mt-2 text-xs text-neutral-mid">≈ ₹{plan.perSession} per session</p>
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="focus-ring block w-full rounded-full bg-brand-text py-3.5 text-center text-xs font-bold text-white hover:bg-brand-accent transition-all"
                        >
                          Book Trial &amp; Join
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-pad bg-neutral-bgAlt">
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Membership Policy"
            title="Terms of enrollment."
            text="Please read our standard studio guidelines regarding sessions, extensions and cancelations."
          />
          <div className="mt-8 rounded-2xl bg-white border border-brand-text/8 p-6 shadow-card">
            <ul className="space-y-4">
              {pricingPolicy.map((policy, idx) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-neutral-mid" key={idx}>
                  <Check size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Non-Group Pricing Notice */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Other Classes"
            title="Specialist batch fees."
            text="Pricing for specialized, ladies-only, kids, seniors, online Zoom, and personal training is structured individually based on requirements."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[
              { title: "Personal (1:1) Class", desc: "Private sessions customized for therapy, weight loss, or schedule alignment." },
              { title: "Zoom Online Class", desc: "Interactive remote instruction batches on Zoom." },
              { title: "Exclusive Ladies Class", desc: "Women-only batches led by S. Maheswari." },
              { title: "Kids & Senior Classes", desc: "Gentle senior citizen mobility or structured children classes." },
            ].map((card) => (
              <div className="reveal rounded-2xl border border-brand-text/8 bg-white p-3 shadow-card flex flex-col justify-between md:p-6" key={card.title}>
                <div>
                  <h3 className="font-display text-sm font-semibold text-brand-text md:text-xl">{card.title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-neutral-mid md:mt-3 md:text-xs md:leading-6">{card.desc}</p>
                </div>
                <div className="mt-4 border-t border-brand-text/5 pt-3 md:mt-6 md:pt-4">
                  <p className="text-[11px] font-semibold text-brand-accent md:text-xs">Pricing on Request</p>
                  
                  <a  href={site.phoneHref}
                    className="focus-ring mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-text hover:underline md:mt-3 md:gap-1.5 md:text-xs"
                  >
                    Enquire Now <ArrowRight size={12} className="md:hidden" /><ArrowRight size={14} className="hidden md:inline" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Your first class is free.</h2>
          <p className="mt-4 text-lg text-white/80">
            Book your free trial class to experience our studio environment and meet our founders before committing.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-full bg-white px-7 py-3.5 font-bold text-brand-accent hover:bg-neutral-bg"
            >
              Book Free Trial
            </Link>
            <a
              href={site.phoneHref}
              className="focus-ring rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10"
            >
              Call {site.phoneName}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-pad bg-neutral-bg border-t border-brand-text/5">
        <div className="container max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Pricing Q&amp;A" center />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Is there a free trial class?",
                a: "Yes. All local Chennai students are welcome to attend one free trial class in our group batches. Prior booking is mandatory.",
              },
              {
                q: "Can I freeze or pause my membership?",
                a: "Yes. Multi-month plans (3, 6, 12 months) include a grace period policy (15, 30, 45 days) that allows you to extend your validity for travel or health reasons.",
              },
              {
                q: "What happens to missed classes?",
                a: "Missed sessions can be compensated with make-up classes during the validity and grace period of your plan, subject to prior booking. Unused sessions beyond the grace period will lapse.",
              },
              {
                q: "Do you offer family discounts?",
                a: "Yes, we offer special rates when family members join together. Contact Maheswari or Satheesh to discuss family package slots.",
              },
            ].map((faq) => (
              <div key={faq.q} className="reveal rounded-xl border border-brand-text/5 bg-white p-6">
                <h4 className="font-display text-lg font-semibold text-brand-text flex gap-2">
                  <HelpCircle size={18} className="text-brand-primary flex-shrink-0 mt-1" />
                  {faq.q}
                </h4>
                <p className="mt-3 text-sm leading-6 text-neutral-mid pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
