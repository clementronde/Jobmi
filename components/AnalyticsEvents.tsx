"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCtaClick } from "@/lib/analytics";

const TRACKED_INTERNAL_CTA_PATHS: Record<string, string> = {
  "/test": "test",
  "/test-orientation": "test",
  "/tester-un-metier": "tester_un_metier",
  "/stage-et-formation": "stage_et_formation",
  "/me-connecter": "login",
  "/inscription": "signup",
};

function getLinkPath(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (!href) return null;

  try {
    return new URL(href, window.location.origin).pathname;
  } catch {
    return null;
  }
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const linkPath = getLinkPath(anchor);
      if (!linkPath || !TRACKED_INTERNAL_CTA_PATHS[linkPath]) return;

      trackCtaClick(anchor.textContent?.trim() || "CTA test", pathname, {
        cta_destination: linkPath === "/test-orientation" ? "/test" : linkPath,
        cta_type: TRACKED_INTERNAL_CTA_PATHS[linkPath],
        link_url: anchor.href,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
