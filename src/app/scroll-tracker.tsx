"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth, type Variant } from "@/lib/tracking";

/**
 * 스크롤 깊이 자동 추적 컴포넌트
 *
 * 사용법:
 *   <ScrollTracker variant="a" />
 */
export function ScrollTracker({ variant }: { variant: Variant }) {
  const tracked = useRef({ s50: false, s75: false, s100: false });

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const scrollable = docHeight - viewHeight;

      if (scrollable <= 0) return;

      const pct = (window.scrollY / scrollable) * 100;

      if (pct >= 50 && !tracked.current.s50) {
        trackScrollDepth(variant, 50);
        tracked.current.s50 = true;
      }
      if (pct >= 75 && !tracked.current.s75) {
        trackScrollDepth(variant, 75);
        tracked.current.s75 = true;
      }
      if (pct >= 95 && !tracked.current.s100) {
        trackScrollDepth(variant, 100);
        tracked.current.s100 = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return null;
}
