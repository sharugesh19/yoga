import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { pricingPolicy, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mokshaa Yoga",
  description:
    "Terms and conditions for booking classes, packages, make-up sessions, and studio rules at Mokshaa Yoga, Neelankarai Chennai.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms &amp; Conditions."
        text="General studio rules, cancellation guidelines, and membership policies for students at Mokshaa Yoga."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
        alt="Terms and conditions banner"
      />

      <section className="section-pad bg-neutral-bg">
        <div className="container max-w-3xl rounded-2xl border border-brand-text/8 bg-white p-8 shadow-card prose-yoga">
          <h2>1. Agreement to Terms</h2>
          <p>
            By enrolling in a class, purchasing a package, or using our studio facilities in Neelankarai, you agree to comply with these Terms and Conditions.
          </p>

          <h2>2. Class Booking &amp; Capacity</h2>
          <p>
            Advance booking is required for all classes, including free trials, to ensure batch capacity limits are respected. Walk-ins are not guaranteed entry without confirmation from our founders.
          </p>

          <h2>3. Membership Package Policies</h2>
          <p>
            The following guidelines apply verbatim to all multi-month and monthly packages (as agreed with Mokshaa Yoga management):
          </p>
          <ul>
            {pricingPolicy.map((policy, idx) => (
              <li key={idx}>• {policy}</li>
            ))}
          </ul>
          <p>
            Missed sessions cannot be carried over beyond the designated grace period (15 days for 3-month packages, 30 days for 6-month packages, 45 days for 12-month packages).
          </p>

          <h2>4. Health &amp; Safety Disclosures</h2>
          <p>
            Students are fully responsible for disclosing any prior health conditions, joint issues, or spinal concerns to our instructors before class begins. Pregnant participants must present written clearance from their OB-GYN before attending the Pregnant Ladies (prenatal) batch.
          </p>

          <h2>5. Punctuality &amp; Studio Rules</h2>
          <p>
            Arrive at least 5–10 minutes before the scheduled batch start time. To preserve studio hygiene, footwear must be left in the entrance racks. Cell phones must be placed on silent during practice.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising out of memberships or services shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions regarding bookings or membership policies, reach out to S. Maheswari at:
            <br />
            Email: {site.email}
            <br />
            Phone: {site.phoneFormatted}
          </p>
        </div>
      </section>
    </>
  );
}
