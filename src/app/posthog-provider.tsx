"use client";

import { useEffect } from "react";
import { initPostHog } from "@/lib/posthog";

/**
 * PostHog Provider — layout.tsx에서 감싸서 사용
 *
 * 사용법:
 *   <PostHogProvider>
 *     {children}
 *   </PostHogProvider>
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <>{children}</>;
}
