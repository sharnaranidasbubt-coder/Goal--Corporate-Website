"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollParallax(speed = 0.3) {
  const ref = useRef(null);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      if (ref.current) {
        const scrollY = window.scrollY;
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const relativeScroll = scrollY - elementTop + window.innerHeight;
        const translateY = relativeScroll * speed * 0.1;
        element.style.transform = `translateY(${translateY}px)`;
      }
      rafId.current = null;
    });
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return ref;
}

export function useRevealAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
