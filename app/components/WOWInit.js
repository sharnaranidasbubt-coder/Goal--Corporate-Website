"use client";

import { useEffect } from "react";

export default function WOWInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dynamically import WOW.js
    import("wowjs").then((WOW) => {
      const wow = new WOW.WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 80,
        mobile: true,
        live: true,
        callback: function (box) {
          // Optional: add custom callback
        },
      });
      wow.init();
    });
  }, []);

  return null;
}
