"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionBoot() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Skip animations — show everything immediately, including future elements
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));

      const mo = new MutationObserver(() => {
        document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => el.classList.add("is-visible"));
      });
      mo.observe(document.body, { childList: true, subtree: true });

      return () => mo.disconnect();
    }

    let observer: IntersectionObserver;

    const revealOrObserve = (el: Element) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    };

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

      document.querySelectorAll(".reveal").forEach(revealOrObserve);
    };

    // Use requestAnimationFrame to defer until after paint, ensuring
    // all React-rendered DOM nodes are present before we query
    const rafId = requestAnimationFrame(() => {
      // A second rAF ensures we wait for the layout pass too
      requestAnimationFrame(init);
    });

    // Watch for elements added/swapped in later — e.g. tab switches, filters,
    // or any client-side state change that mounts new .reveal nodes without
    // a route change (pathname doesn't update, so this effect wouldn't rerun).
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.classList.contains("reveal")) revealOrObserve(node);
          node.querySelectorAll?.(".reveal").forEach(revealOrObserve);
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      mutationObserver.disconnect();
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