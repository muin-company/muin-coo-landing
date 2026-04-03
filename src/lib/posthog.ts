/**
 * PostHog SDK 초기화 및 설정
 *
 * 환경변수:
 *   NEXT_PUBLIC_POSTHOG_KEY  — PostHog Project API Key
 *   NEXT_PUBLIC_POSTHOG_HOST — PostHog 인스턴스 URL (기본: https://us.i.posthog.com)
 *
 * ONE이 PostHog 계정 생성 후 .env.local에 추가:
 *   NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
 */

import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (typeof window === "undefined") return posthog;
  if (initialized) return posthog;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  if (!key) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[PostHog] NEXT_PUBLIC_POSTHOG_KEY가 설정되지 않았습니다. 이벤트가 전송되지 않습니다."
      );
    }
    return posthog;
  }

  posthog.init(key, {
    api_host: host,
    person_profiles: "identified_only",
    capture_pageview: false, // variant 정보 포함을 위해 수동 전송
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    loaded: (ph) => {
      // 개발 환경에서는 디버그 모드
      if (process.env.NODE_ENV === "development") {
        ph.debug();
      }
    },
  });

  initialized = true;
  return posthog;
}

export { posthog };
