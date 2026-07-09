# ADDENDUM v2 — Real Client Content & Asset Handoff Instructions
*(Supersedes the previous addendum. Attach this + the Master Build Brief together when briefing the coding agent.)*

---

## 1. HOW TO ORGANIZE YOUR ASSET FOLDER

Same convention as before, now with the new files placed:

```
/client-assets
  /branding
      logo-original.png
      brand-card-2026.pdf        <- mokshaa_yoga_new_design_Bcard...pdf (NAP + social + certs, source of truth)
  /signage
      outdoor-board-5x12ft.pdf   <- shows real-world brand colors/messaging already in physical use
  /instructors
      satheesh-santhanam.pdf
      satheesh-santhanam-photo.jpg
      maheswari-satheesh.pdf
      maheswari-satheesh-photo.jpg
      ladies-class-photo.jpg     <- IMG-20260629-WA0010.jpg, real photo if usable
  /pricing
      group-class-pricing-plan.pdf
  /studio-photos
      (still needed — see Section 6)
  /certificates
      (still needed if scanned copies exist: ISO, E-RYT, YACEP, MSME)
```

Instruction to the agent, unchanged in spirit:
> "Read every file in /client-assets before writing any instructor, pricing, branding, or NAP content. Treat the business card and outdoor board as the authoritative source for contact info and brand colors — these are real, currently-in-use physical assets, not drafts."

---

## 2. CONFIRMED NAP (Name / Address / Phone) — finalized, no more guessing

- **Name:** Mokshaa Yoga
- **Full address:** 122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street, Neelankarai, Chennai – 600115, Tamil Nadu, India
- **Phone (RESOLVED — both numbers are real, one per founder, not a typo):**
  - **S. Maheswari** (Yoga Acharya, Founder & Director): **996 2090 996**
  - **S. Satheesh** (Yoga Acharya, Co-Founder & MD): **996 2080 996**
  - Display both on the contact page and footer, clearly labeled by name — do not collapse to a single number. For Google Business Profile / schema `LocalBusiness` markup, list the primary studio line as Maheswari's (it's the one already associated with the studio's public listings and matches the original live site), and list Satheesh's as a secondary contact/instructor-specific number.
- **Social:** Instagram & Facebook handle **@mokshaa_yoga** — use consistently as the canonical handle everywhere (social icons in footer, Open Graph `same_as` schema, GBP links).
- **Trust/certification badges (confirmed real, use as schema + visual trust badges):**
  - ISO 9001:2015 certified
  - E-RYT 500 (Yoga Alliance, USA)
  - YACEP (Yoga Alliance Continuing Education Provider)
  - MSME registered (Government of India — Micro, Small & Medium Enterprises) — worth a small "Govt. Registered MSME" trust badge near the footer; signals legitimacy for a local Indian business audience.

---

## 3. CONFIRMED CLASS TYPES — real offerings, not inferred

From the outdoor board and pricing flyer, the studio's actual class lineup is:

- **Group Classes** (the flagship offering — has its own detailed pricing tiers, see Section 4)
- **Exclusive Ladies Class**
- **Zoom Online Class** (confirms online classes ARE offered — resolves an open question from the original brief)
- **Personal (1:1) Class**
- **Kids Class**
- **Senior Citizen Class**
- **Pregnant Ladies Class** (from Maheswari's bio — give this its own page, see SEO note below)

Specialty/therapeutic focus areas marketed prominently (treat these as service-page angles, not just bullet points):
- Weight Loss
- Back Pain
- Counselling
- Stress Relief
- Yoga Therapy

Brand taglines/messaging already in use — reuse this copy, it's tested and on-brand, don't replace it with generic AI-sounding copy:
- "Strengthen Body · Calm Mind · Energize Life"
- "Your Health. Your Peace. Your Journey. We're with You Every Step!"
- "Expert Instructors | Personal Attention | Safe & Hygienic Environment | Flexible Timings"
- "Join Today. Transform Forever!"
- "Elevate Your Inner World" (tagline, keep under logo site-wide)

**Build `/classes/[slug]` pages for each of the 7 class types above**, plus dedicated landing pages for the two strongest SEO angles: `/classes/prenatal-yoga` and `/classes/online-yoga-classes` (Zoom). "Yoga teacher training Chennai" is NOT confirmed as an offering — don't invent a TTC/YTT page unless the client confirms they run one.

---

## 4. CONFIRMED PRICING — Group Class Plans (use exactly, do not estimate)

| Plan | Sessions/Month | Price | Notes |
|---|---|---|---|
| 1 Month | 20 sessions | ₹3,500 | |
| 1 Month | 12 sessions | ₹3,000 | |
| 1 Month | 8 sessions | ₹2,500 | |

| Plan | Sessions Option | Total Sessions | Original Price | Offer Price | Per-Session | Savings | Free Gift | Validity | Grace Period | Make-up Sessions |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 Months | 12/month | 36 | ₹9,000 | ₹7,999 | ₹222 | ₹1,001 | Yoga Strap (unltd sessions only on 20/mo pass) | 90 days | 15 days | 4 |
| 3 Months | 20/month | 60 | ₹10,500 | ₹8,999 | ₹150 | ₹1,501 | Yoga Strap | 90 days | 15 days | 4 |
| 6 Months | 12/month | 72 | ₹18,000 | ₹13,999 | ₹194 | ₹4,001 | Yoga Strap, Eye Wash & Neti Pot | 180 days | 30 days | 8 |
| 6 Months | 20/month | 120 | ₹21,000 | ₹15,999 | ₹133 | ₹5,001 | Yoga Strap, Eye Wash & Neti Pot | 180 days | 30 days | 8 |
| 12 Months | 12/month | 144 | ₹36,000 | ₹26,999 | ₹187 | ₹9,001 | Yoga Mat, Strap, Eye Wash & Neti Pot | 365 days | 45 days | 15 |
| 12 Months | 20/month | 240 | ₹42,000 | ₹28,999 | ₹121 | ₹13,001 | Yoga Mat, Strap, Eye Wash & Neti Pot | 365 days | 45 days | 15 |

**Policy text (use verbatim on the pricing page, it's a real, already-approved policy):**
- Missed sessions can be compensated within the grace period after package expiry.
- Prior booking is required for make-up classes.
- Unused sessions beyond the grace period will lapse.

**Build instruction:** the `/pricing` page needs an interactive plan selector (duration tabs → sessions-per-month toggle → live price/savings display) — this is exactly the kind of structured, numeric content that benefits from the motion/interaction standard set in the brief, not just a static table. Pricing for Personal, Kids, Senior Citizen, Ladies-only, and Zoom Online classes is **not yet provided** — flag this as still needed; don't invent numbers for those.

---

## 5. LOGO & BRAND COLOR — REVISED GUIDANCE (correction from the previous addendum)

Earlier guidance suggested recoloring the logo away from the bright red/lime-green palette. **Revise that** — the outdoor 5ft×12ft board and the business card both use this exact red/lime-green/black/gold-accent system consistently, which means it's already the studio's **established, real-world physical brand** (signage, cards, social presence), not just a placeholder web template color. Recoloring it for the website would create a mismatch between the website and the actual storefront/signage a customer sees in person — bad for brand recognition.

**Revised instruction to the agent:**
> "Keep the existing brand colors (red, lime-green, black, with gold/yellow used as a CTA accent in print materials) as the core palette — they're real and already in physical use. Do NOT replace them with a generic earth-tone palette. Instead, *refine the execution*: vectorize the logo mark cleanly (remove any raster artifacts), tighten the line weights on the meditating-figure icon, and on the website specifically, use the brand red and lime-green with more restraint and sophistication than the print materials do — e.g., lime-green and red as accent/CTA colors against a calmer neutral (warm white/cream/charcoal) background, rather than full-bleed bright-color blocks as seen in the pricing flyer. This keeps brand recognition intact while still reading as premium rather than flyer-style. Keep the wordmark font as-is or very lightly refine it; it's already part of the recognized brand."

This replaces Section 5's earlier "premium earth-tone, drop the lime/red" guidance entirely — the new instruction above is the active one.

---

## 6. UPDATED STATUS OF SECTION 11 (info needed from client) — from the master brief

| # | Item | Status |
|---|---|---|
| 1 | Address / map pin | ✅ Full address confirmed with pincode (600115); still need exact Google Maps pin/lat-long |
| 2 | Class list w/ descriptions | ✅ Class types confirmed (7 types, Section 3); still need full descriptions/durations for each, beyond names |
| 3 | Instructor bios/photos | ✅ Complete — bios, credentials, and real headshots in hand for both founders |
| 4 | Pricing/packages | ✅ Group class pricing fully confirmed (Section 4); ❌ Personal/Kids/Senior/Ladies/Online pricing still missing |
| 5 | Weekly schedule | ❌ Still needed |
| 6 | Testimonials | ❌ Still needed |
| 7 | Social handles / WhatsApp | ✅ Instagram/Facebook @mokshaa_yoga confirmed; ❌ WhatsApp Business number not yet confirmed (may be one of the two existing numbers) |
| 8 | Business registration/GST | ✅ MSME registration confirmed; ISO 9001:2015 confirmed; ❌ GST number still needed if invoicing online |
| 9 | Online classes offered? | ✅ Confirmed yes — "Zoom Online Class" is a real offering |
| 10 | Logo / brand assets | ✅ Have original logo + confirmed it's the real, established brand identity (Section 5) |

**Remaining blockers for true launch-readiness:** weekly schedule, testimonials, non-group-class pricing, exact map pin, GST (if needed), WhatsApp number.

---

## 7. WHAT TO TELL THE AGENT, IN ONE LINE

> "Ingest everything in /client-assets per Addendum v2 — this supersedes the earlier addendum, especially the logo/color guidance, which has flipped: keep the existing red/lime-green brand identity, just refine its execution for web. Both phone numbers are correct and real (one per founder) — display both, don't merge them. Use the confirmed Group Class pricing table exactly as given; do not invent pricing for class types not yet quoted."
