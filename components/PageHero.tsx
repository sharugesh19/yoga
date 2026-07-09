import Image from "next/image";
import Link from "next/link";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=2000&q=80";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt,
  cta,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
  alt: string;
  cta?: string;
  ctaHref?: string;
}) {
  const src = image || FALLBACK_IMAGE;

  return (
    <section className="relative overflow-hidden bg-brand-text text-white">
      <div className="absolute inset-0 opacity-35">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-text/95 via-brand-text/75 to-brand-text/25" />
      <div className="container relative z-10 py-10 md:py-20">
        <p className="eyebrow text-brand-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {text}
          </p>
        )}
        {cta && ctaHref && (
          <Link
            href={ctaHref}
            className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-4 font-bold text-white transition hover:bg-brand-accent/80 sm:w-auto sm:justify-start"
          >
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
