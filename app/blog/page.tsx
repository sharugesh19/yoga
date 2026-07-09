import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yoga Blog Chennai | Tips, Guides & Local Knowledge | Mokshaa Yoga",
  description:
    "Yoga guides, beginner tips, alignment guides, and local Chennai wellness insights from the certified yoga acharyas at Mokshaa Yoga, Neelankarai.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Yoga Journal"
        title="Knowledge, guides &amp; tips."
        text="Practical articles on yoga styles, alignment foundations, health goals, and building a consistent home practice in Chennai."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
        alt="Blog page header"
      />

      {/* Blog Grid */}
      <section className="section-pad bg-neutral-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Recent Articles"
            title="Read our latest posts."
            text="Yoga is a lifelong study. Explore our articles on Hatha foundations, weight loss, prenatal safe movements, and kids focus development."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              return (
                <Link
                  className="reveal group flex flex-col overflow-hidden rounded-2xl border border-brand-text/8 bg-white shadow-card transition hover:shadow-soft hover:-translate-y-1 duration-300"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                      {post.keyword}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-brand-text group-hover:text-brand-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-neutral-mid line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-brand-text/5 pt-4 text-xs text-neutral-mid">
                      <span>{formattedDate}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="bg-brand-text text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Want personalized guidance?</h2>
          <p className="mt-3 text-white/70">
            Our teachers can structure customized practices during personal 1:1 sessions or direct you to the correct group batch.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 font-bold text-white hover:bg-brand-accent/80 transition"
            >
              Contact Our Teachers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
