import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Mokshaa Yoga",
  description:
    "Privacy policy for Mokshaa Yoga, Neelankarai Chennai — how we collect, use and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        text="How we protect and manage your personal data at Mokshaa Yoga."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
        alt="Privacy policy banner"
      />

      <section className="section-pad bg-neutral-bg">
        <div className="container max-w-3xl rounded-2xl border border-brand-text/8 bg-white p-8 shadow-card prose-yoga">
          <p className="text-xs font-bold text-neutral-mid">Last updated: {currentDate}</p>

          <h2>1. Introduction</h2>
          <p>
            Mokshaa Yoga (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
            <a href={site.url} className="text-brand-accent hover:underline">
              {site.url}
            </a>. This Privacy Policy details our practices regarding the collection, use, and disclosure of personal data when you use our website, contact forms, or register for yoga classes. We comply with the Information Technology Act, 2000, and related rules of India.
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p>
            We collect personal data that you provide directly to us through our contact forms, newsletter signups, or when booking a trial class:
          </p>
          <ul>
            <li>• Name and contact info (email address, telephone number)</li>
            <li>• Health concerns or yoga experience disclosed during registration</li>
            <li>• Billing or transaction details if purchasing memberships</li>
          </ul>

          <h2>3. Cookies and Analytics</h2>
          <p>
            We use anonymized Google Analytics cookies to monitor traffic volumes, landing page visits, and click-through actions to optimize website performance. You can block cookie downloads inside your browser preferences.
          </p>

          <h2>4. How We Use Your Data</h2>
          <p>
            We process your information to fulfill service actions, respond to inquiries, dispatch booking updates, or distribute periodic newsletter reminders (if explicitly opted in). We do not sell or lease personal student records to third parties.
          </p>

          <h2>5. Data Retention and Security</h2>
          <p>
            Contact submissions are stored securely in our database for 12 months for administrative purposes. We employ safety standards (SSL certificates, secure server layers) to safeguard records against unauthorized disclosures.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You hold the right to request access to, correction of, or deletion of your personal records. Email your request to{" "}
            <a href={`mailto:${site.email}`} className="text-brand-accent hover:underline">
              {site.email}
            </a>{" "}
            and our director S. Maheswari will fulfill it within 30 days.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For privacy enquiries, contact us at:
            <br />
            Mokshaa Yoga
            <br />
            {site.address}
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
