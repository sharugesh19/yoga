"use client";

import { useRef, useState } from "react";
import { MessageCircle, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
  rating: number;
};

export default function TestimonialsCarousel({ testimonials }: { testimonials: readonly Testimonial[] }) {
  // Desktop grid pagination (unchanged)
  const perPage = 3;
  const pageCount = Math.ceil(testimonials.length / perPage);
  const [page, setPage] = useState(0);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  // Mobile swipe carousel
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (el && card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="text-center">
        <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
          <MessageCircle size={14} />
          Customer Reviews
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-brand-text md:text-5xl">
          What Students <span className="text-brand-accent">Say</span>
        </h2>
      </div>

      {/* Mobile: horizontal swipe carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map(({ quote, author, location, rating }) => (
          <figure
            className="w-[85%] flex-shrink-0 snap-center rounded-2xl bg-neutral-bgAlt p-6"
            key={author}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />
              ))}
            </div>
            <blockquote className="mt-4 text-sm italic leading-7 text-neutral-mid">"{quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                {author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-brand-text">{author}</p>
                <p className="text-xs text-neutral-mid">{location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Mobile dots — one per testimonial */}
      <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            suppressHydrationWarning
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-brand-accent" : "w-2 bg-brand-text/20 hover:bg-brand-text/35"
            }`}
          />
        ))}
      </div>

      {/* Desktop: original grid layout (unchanged) */}
      <div className="mt-12 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {visible.map(({ quote, author, location, rating }) => (
          <figure className="rounded-2xl bg-neutral-bgAlt p-6" key={author}>
            <div className="flex gap-0.5">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />
              ))}
            </div>
            <blockquote className="mt-4 text-sm italic leading-7 text-neutral-mid">"{quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                {author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-brand-text">{author}</p>
                <p className="text-xs text-neutral-mid">{location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Show testimonials page ${i + 1}`}
              suppressHydrationWarning
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-brand-accent" : "w-2 bg-brand-text/20 hover:bg-brand-text/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}