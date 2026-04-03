/**
 * A/B 테스트 이벤트 트래킹 유틸리티
 *
 * Events:
 *   ab_page_view  — 페이지 조회 (variant 포함)
 *   cta_click     — CTA 버튼 클릭
 *   form_submit   — 상담 신청 / 이메일 제출
 *   scroll_depth  — 스크롤 깊이 (50%, 75%, 100%)
 */

import { posthog } from "./posthog";

export type Variant = "a" | "b";

// ------------------------------------------------------------------
// Page View
// ------------------------------------------------------------------

export function trackPageView(variant: Variant) {
  posthog.capture("ab_page_view", {
    variant,
    page: "coo_landing",
  });
}

// ------------------------------------------------------------------
// CTA Click
// ------------------------------------------------------------------

export function trackCTAClick(
  variant: Variant,
  ctaType: "primary" | "secondary" | "header" | "footer"
) {
  posthog.capture("cta_click", {
    variant,
    cta_type: ctaType,
    page: "coo_landing",
  });
}

// ------------------------------------------------------------------
// Form Submit
// ------------------------------------------------------------------

export function trackFormSubmit(
  variant: Variant,
  formData: {
    hasEmail: boolean;
    hasCompany?: boolean;
    hasPhone?: boolean;
  }
) {
  posthog.capture("form_submit", {
    variant,
    has_email: formData.hasEmail,
    has_company: formData.hasCompany ?? false,
    has_phone: formData.hasPhone ?? false,
    page: "coo_landing",
  });
}

// ------------------------------------------------------------------
// Scroll Depth
// ------------------------------------------------------------------

export function trackScrollDepth(variant: Variant, depth: 50 | 75 | 100) {
  posthog.capture("scroll_depth", {
    variant,
    depth,
    page: "coo_landing",
  });
}
