"use client";
import Script from "next/script";

export default function LegacyScript() {
  return (
    <Script 
      src="/build/js/main-e03077acdb.js" 
      strategy="afterInteractive"
      onLoad={() => {
        // trigger the legacy js bootstrap only if not already triggered
        // @ts-ignore
        if (!window.Main) {
          window.dispatchEvent(new Event("DOMContentLoaded"));
          window.dispatchEvent(new Event("load"));
        }
      }}
    />
  );
}
