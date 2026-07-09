import type { Metadata } from "next";
import { Star, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
import { testimonials, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Reviews | Mokshaa Yoga Neelankarai Chennai",
  description:
    "Read 5-star student reviews of Mokshaa Yoga in Neelankarai, Chennai. Certified group, ladies, prenatal, kids, and seniors yoga classes.",
};

export default function TestimonialsPage() {
  const averageRating = 5;
  const reviewCount = testimonials.length;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: site.name,
          image: site.ogImage,
          description: site.taglineSub,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating,
            reviewCount: reviewCount,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: t.author,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
            },
            reviewBody: t.quote,
          })),
        }}
      />

      <PageHero
        eyebrow="Student Voices"
        title="What our students say."
        text="Discover how our structured Hatha batches, ladies-only groups, and senior citizen sequences have supported our students' wellness journeys."
        image="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=2000&q=80"
        alt="Testimonials banner"
      />

      {/* Grid of Reviews */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Reviews"
            title="Verified experiences."
            text="Read honest feedback from students in Neelankarai, Thiruvanmiyur, Besant Nagar, Adyar and across South Chennai."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ quote, author, location, rating }) => (
              <figure
                className="reveal flex flex-col justify-between rounded-2xl border border-brand-text/8 bg-white p-8 shadow-card"
                key={author}
              >
                <div>
                  <div className="flex gap-0.5" aria-label={`Rating: ${rating} stars`}>
                    {Array.from({ length: rating }).map((_, idx) => (
                      <Star key={idx} className="fill-brand-gold text-brand-gold" size={16} />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-display text-lg italic leading-8 text-brand-text">
                    "{quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-brand-text/5 pt-4">
                  <p className="text-sm font-bold text-brand-text">{author}</p>
                  <p className="text-xs text-neutral-mid">{location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate review stats */}
      <section className="bg-brand-text text-white py-12 text-center border-t border-white/10">
        <div className="container max-w-xl">
          <div className="flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="fill-brand-gold text-brand-gold" size={24} />
            ))}
          </div>
          <p className="mt-4 font-display text-4xl font-semibold text-white">5.0 / 5.0 Average Rating</p>
          <p className="mt-1 text-sm text-brand-primary font-semibold">
            Based on {reviewCount} verified reviews across our Chennai programs
          </p>
        </div>
      </section>

      {/* Google reviews note */}
      <section className="section-pad bg-neutral-bgAlt text-center">
        <div className="container max-w-2xl">
          <MessageSquare className="mx-auto text-brand-accent" size={36} />
          <h2 className="mt-4 font-display text-3xl font-semibold text-brand-text">Are you a current student?</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-mid">
            We are currently building our online Google Business Profile review footprint. If you have practiced with Maheswari or Satheesh, we would appreciate it if you could share your feedback to assist other Chennai beginners in finding authentic yoga instruction.
          </p>
          <div className="mt-6">
            <a
              href={`https://search.google.com/local/writereview?placeid=TBD`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-text px-6 py-3.5 text-xs font-bold text-white transition hover:bg-brand-accent"
            >
              Write a Google Review &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
