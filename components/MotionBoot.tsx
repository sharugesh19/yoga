"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionBoot() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Skip animations — show everything immediately
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    let observer: IntersectionObserver;

    const init = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        // rootMargin adds 10% of the viewport as a buffer above and below
        // so that elements near the viewport edge fire correctly on initial load
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );

      document.querySelectorAll(".reveal").forEach((el) => {
        // Immediately reveal elements already fully in viewport (above-fold, short pages)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Use requestAnimationFrame to defer until after paint, ensuring
    // all React-rendered DOM nodes are present before we query
    const rafId = requestAnimationFrame(() => {
      // A second rAF ensures we wait for the layout pass too
      requestAnimationFrame(init);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [pathname]);


  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanupLenis: (() => void) | undefined;
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.85 });
      let frame = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      cleanupLenis = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    });

    return () => {
      cleanupLenis?.();
    };
  }, []);

  return null;
}
