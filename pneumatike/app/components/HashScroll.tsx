"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * After client navigations to `/#fragment`, scroll the target into view.
 * Native smooth scroll + scroll-padding on `html` handle in-page clicks.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, [pathname]);

  return null;
}
