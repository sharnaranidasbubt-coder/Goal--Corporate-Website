"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(animationClass = "animate__fadeInUp", threshold = 0.15, delay = "0ms", once = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay && delay !== "0ms") {
            const ms = parseInt(delay);
            setTimeout(() => setIsVisible(true), ms);
          } else {
            setIsVisible(true);
          }
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay, once, animationClass]);

  const className = isVisible ? `wow animate__animated ${animationClass}` : "wow";
  return { ref, isVisible, className };
}

export function ScrollReveal({ children, animation = "animate__fadeInUp", delay = "0ms", threshold = 0.15, className = "", once = true }) {
  const { ref, isVisible } = useScrollAnimation(animation, threshold, delay, once);
  const combinedClass = `${className} ${isVisible ? `wow animate__animated ${animation}` : "wow"}`.trim();
  return (
    <div ref={ref} className={combinedClass}>
      {children}
    </div>
  );
}

export function StaggerContainer({ children, animation = "animate__fadeInUp", staggerDelay = 100, threshold = 0.1, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={isVisible ? `wow animate__animated ${animation}` : "wow"}
              style={{
                animationDelay: isVisible ? `${i * staggerDelay}ms` : "0ms",
                visibility: isVisible ? "visible" : "hidden",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
