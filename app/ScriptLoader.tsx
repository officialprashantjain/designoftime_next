"use client";

import { useEffect } from "react";

export default function ScriptLoader() {
  useEffect(() => {
    // Set the data-pageTitle attribute on the title element to satisfy legacy script constraints.
    const titleElement = document.querySelector("title");
    if (titleElement) {
      titleElement.setAttribute("data-pageTitle", "Design of Time Co");
    }

    // Populate images dynamically since the legacy JS fails to execute/bind properly in React.
    const initializeLegacyElements = () => {
      // 1. Populate images in .entry elements inside imageContainer
      document.querySelectorAll(".entry").forEach(el => {
        const entry = el as HTMLElement;
        const imgContainer = entry.querySelector(".imageContainer") as HTMLElement | null;
        if (imgContainer && !imgContainer.querySelector("img") && !imgContainer.querySelector("video")) {
          const imgSrc = entry.getAttribute("data-landscape-image") || entry.getAttribute("data-portrait-image");
          if (imgSrc) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.style.opacity = "1";
            img.style.display = "block";
            imgContainer.appendChild(img);
          }
        }
      });

      // 2. Handle lazyload images
      document.querySelectorAll("img[data-src]").forEach(el => {
        const img = el as HTMLImageElement;
        const dataSrc = img.getAttribute("data-src");
        if (dataSrc && img.getAttribute("src") !== dataSrc) {
          img.setAttribute("src", dataSrc);
          img.style.opacity = "1";
        }
      });
    };

    // Run initially
    initializeLegacyElements();

    // Run on DOM changes to support React routing and hydration
    const observer = new MutationObserver(initializeLegacyElements);
    observer.observe(document.body, { childList: true, subtree: true });

    // Check if script is already injected
    if (document.querySelector('script[src="/build/js/main-e03077acdb.js"]')) {
      return () => {
        observer.disconnect();
      };
    }

    // Inject script via standard DOM APIs to prevent React script tag warnings
    const script = document.createElement("script");
    script.src = "/build/js/main-e03077acdb.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
