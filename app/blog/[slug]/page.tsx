import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, Phone, Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { posts, classes, site } from "@/lib/content";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Mokshaa Yoga`,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Filter related posts
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: {
              "@type": "ImageObject",
              url: site.ogImage,
            },
          },
        }}
      />

      {/* Featured Image Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-brand-text text-white">
        <Image src={post.image} alt={post.title} fill priority unoptimized className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/50 to-transparent" />
        <div className="container relative z-10 flex h-full items-end pb-8">
          <div>
            <Link
              href="/blog"
              className="focus-ring inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline mb-4"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <h1 className="font-display text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mt-2 text-brand-primary font-semibold text-xs uppercase tracking-widest">{post.keyword}</p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="section-pad bg-neutral-bg">
        <div className="container grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-mid border-b border-brand-text/5 pb-4">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {formattedDate}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <article className="prose-yoga">
              {slug === "best-yoga-classes-beginners-chennai" && (
                <>
                  <p>
                    Starting yoga can feel overwhelming, especially in a major hub like Chennai where hundreds of wellness centres list diverse options. Choosing the correct studio isn't just about finding the closest location; it is about qualifications, batch sizing, safety, and learning foundations at a comfortable pace.
                  </p>
                  <h2>1. Prioritise Rigorous Credentials</h2>
                  <p>
                    Yoga is a precise physical science. An instructor without formal certifications may lead an active session, but they might not notice subtle alignment errors that strain joints over time. Always ask if the founders and teachers are E-RYT certified (experienced registered yoga teachers) under Yoga Alliance USA. E-RYT 500 signifies the highest level of audited instruction.
                  </p>
                  <h2>2. Look for Small Batch Sizes</h2>
                  <p>
                    In massive class formats, you become a face in the crowd. As a beginner, you need verbal feedback and physical posture adjustments to prevent injuries and understand asana mechanics. A studio that caps its class sizes guarantees this individual attention.
                  </p>
                  <h2>3. Choose a Steady Foundation</h2>
                  <p>
                    Don't start with high-intensity power yoga. Look for Hatha-focused batches that break down breathing (pranayama), spine warming, core work, and slow static postures. Developing a baseline of flexibility and strength prepares your body for faster flows later.
                  </p>
                  <p>
                    At Mokshaa Yoga in Neelankarai, our beginner group classes are structured exactly around these principles, overseen by E-RYT 500 acharyas in a clean, quiet space.
                  </p>
                </>
              )}

              {slug === "yoga-for-weight-loss-chennai" && (
                <>
                  <p>
                    When weight management is the primary goal, many default to high-intensity cardiovascular gym routines. While cardio burns immediate calories, yoga operates on a deeper level — combining metabolic strength activation, breath control (pranayama), and mindfulness that supports long-term consistency.
                  </p>
                  <h2>1. Posture Pacing and Core Activation</h2>
                  <p>
                    Dynamic styles like Vinyasa flow and Ashtanga create heat inside the body, increasing heart rate and burning active calories. Static postures like plank, warrior series, and arm balances build lean muscle tissue, which boosts your baseline resting metabolic rate.
                  </p>
                  <h2>2. Breath Control (Pranayama) and Metabolism</h2>
                  <p>
                    Breathwork is key to endocrine system balance. Specific breathing exercises stimulate digestion, regulate thyroid function, and lower cortisol (the primary stress hormone linked to stubborn abdominal fat storage).
                  </p>
                  <h2>3. Mindful Eating and Consistency</h2>
                  <p>
                    Unlike high-impact workouts that can trigger extreme hunger, yoga calms the nervous system, reducing emotional eating and helping you listen to satiety cues. At Mokshaa Yoga, our personal (1:1) and group batches incorporate custom posture flows focused on weight management safely.
                  </p>
                </>
              )}

              {slug === "hatha-vs-vinyasa-yoga-chennai" && (
                <>
                  <p>
                    If you are booking your first class, you've likely seen Hatha and Vinyasa listed side-by-side. While both trace back to classical lineage, they have very different paces, structures, and goals in practice.
                  </p>
                  <h2>What is Hatha Yoga?</h2>
                  <p>
                    Hatha is the parent style of physical yoga. The word combines "Ha" (sun) and "Tha" (moon), representing balance. In a Hatha class, postures are held statically for several breaths, allowing you to check alignment, focus on breathing, and build deep strength. It is the ideal style for beginners learning pose names and mechanics.
                  </p>
                  <h2>What is Vinyasa Yoga?</h2>
                  <p>
                    Vinyasa translates to "arranging in a specific way." It links movement directly with breathing — flowing from one posture to another on an inhale or exhale without holding poses statically. It is a more dynamic, cardiovascular practice.
                  </p>
                  <h2>Which Should You Try First?</h2>
                  <p>
                    If you are new to yoga, Hatha is highly recommended. It allows you to build strength and familiarity safely. If you have moderate fitness and want a faster, flowing pace, Vinyasa is a great fit.
                  </p>
                </>
              )}

              {/* General placeholder content for other posts if any */}
              {!["best-yoga-classes-beginners-chennai", "yoga-for-weight-loss-chennai", "hatha-vs-vinyasa-yoga-chennai"].includes(slug) && (
                <>
                  <p>
                    Developing a consistent practice is the most powerful choice you can make for your health. Yoga works dynamically on the nervous, musculoskeletal, and endocrine systems, building holistic strength and a quiet mind.
                  </p>
                  <h2>Safe Spinal Alignment</h2>
                  <p>
                    A balanced practice moves the spine in all six directions: flexion, extension, lateral bends, and twists. This increases joint fluid, supports posture, and prevents age-related wear.
                  </p>
                  <h2>Breath-Guided Movement</h2>
                  <p>
                    By matching asana sequences with steady breathing, you activate the parasympathetic nervous system, dropping heart rate and clearing mental clutter.
                  </p>
                  <p>
                    Contact Mokshaa Yoga in Neelankarai to speak with our certified teachers about scheduling a free group class trial.
                  </p>
                </>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* CTA Book Trial */}
            <div className="rounded-2xl bg-brand-accent p-6 text-white shadow-soft">
              <h3 className="font-display text-2xl font-semibold">Book a Trial Class</h3>
              <p className="mt-3 text-sm text-white/80">
                Local Chennai residents are welcome to attend one free trial session. Select your batch and book today.
              </p>
              <Link
                href="/contact"
                className="focus-ring mt-6 block w-full rounded-full bg-white py-3.5 text-center text-xs font-bold text-brand-accent hover:bg-neutral-bg transition"
              >
                Book Free Trial
              </Link>
            </div>

            {/* Our Classes quick links */}
            <div className="rounded-2xl bg-white border border-brand-text/8 p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-brand-text">Our Class Formats</h3>
              <div className="mt-4 grid gap-2.5 text-sm text-brand-accent font-semibold">
                {classes.slice(0, 4).map((c) => (
                  <Link key={c.slug} href={`/classes/${c.slug}`} className="hover:underline flex items-center justify-between">
                    <span>{c.title}</span>
                    <span className="text-[10px] font-bold text-brand-primary bg-brand-primary/12 px-2 py-0.5 rounded-full uppercase">
                      {c.level}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="rounded-2xl bg-brand-text p-6 text-white shadow-card">
              <h3 className="font-display text-xl font-semibold">Direct Enquiries</h3>
              <p className="mt-2 text-xs text-white/60">Reach out directly to our founders to ask schedule or batch questions.</p>
              <div className="mt-5 space-y-3.5 text-sm">
                <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-brand-primary transition-colors">
                  <Phone size={14} className="text-brand-primary" />
                  {site.phoneName}: {site.phoneFormatted}
                </a>
                <a href={site.phone2Href} className="flex items-center gap-2.5 hover:text-brand-primary transition-colors">
                  <Phone size={14} className="text-brand-primary" />
                  {site.phone2Name}: {site.phone2Formatted}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-brand-primary transition-colors">
                  <Mail size={14} className="text-brand-primary" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts strip */}
      <section className="section-pad bg-neutral-bgAlt/50 border-t border-brand-text/5">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-brand-text">Related Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((post) => (
              <Link
                key={post.slug}
                className="reveal group flex items-start gap-4 rounded-xl border border-brand-text/8 bg-white p-4 shadow-card hover:-translate-y-0.5 transition duration-300"
                href={`/blog/${post.slug}`}
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={post.image} alt={post.title} fill unoptimized className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-brand-text group-hover:text-brand-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[10px] text-brand-accent font-bold uppercase tracking-wider mt-1">{post.keyword}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="bg-brand-accent text-white py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl font-semibold">Start your yoga practice</h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free trial class at our Neelankarai studio today. Speak to S. Maheswari to find the optimal batch for you.
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
              Call Primary
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
