"use client";

import { useEffect } from "react";

export default function WOWInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initWOW = async () => {
      try {
        const WOWModule = await import("wowjs");
        const WOW = WOWModule.default || WOWModule.WOW || WOWModule;

        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 100,
          mobile: true,
          live: true,
          scrollContainer: null,
          resetAnimation: true,
        });

        wow.init();
      } catch (err) {
        console.warn("WOW.js init failed:", err);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initWOW, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
