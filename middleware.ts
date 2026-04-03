import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * A/B 테스트 Middleware
 *
 * 기능:
 *   1. Edge Config에서 A/B variant 비율 로드 (설정 시)
 *   2. 50/50 랜덤 분배 (fallback)
 *   3. Cookie로 variant 고정 (30일)
 *   4. X-AB-Variant 헤더 추가 (디버깅용)
 *
 * Edge Config 구조 (선택):
 *   키: ab_coo_landing
 *   값: { "enabled": true, "variants": { "a": 50, "b": 50 } }
 *
 * TODO: Edge Config 연결 시 @vercel/edge-config 임포트 활성화
 */

const COOKIE_NAME = "ab-coo-variant";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30일

// Variant 비율 기본값 (Edge Config 미설정 시)
const DEFAULT_VARIANT_WEIGHT_A = 50; // %

interface ABConfig {
  enabled: boolean;
  variants: { a: number; b: number };
}

/**
 * Edge Config에서 A/B 설정 로드
 * @vercel/edge-config 설치 후 활성화
 */
async function getABConfig(): Promise<ABConfig | null> {
  // --- Edge Config 활성화 시 아래 주석 해제 ---
  // try {
  //   const { get } = await import("@vercel/edge-config");
  //   const config = await get<ABConfig>("ab_coo_landing");
  //   return config ?? null;
  // } catch {
  //   return null;
  // }

  // Edge Config 미설정 — 기본 50/50
  return {
    enabled: true,
    variants: { a: DEFAULT_VARIANT_WEIGHT_A, b: 100 - DEFAULT_VARIANT_WEIGHT_A },
  };
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // A/B 설정 로드
  const config = await getABConfig();

  // A/B 비활성 → 패스스루
  if (!config?.enabled) return response;

  // 기존 쿠키 확인 (재방문자 일관성 유지)
  const existingVariant = request.cookies.get(COOKIE_NAME)?.value;

  if (existingVariant && ["a", "b"].includes(existingVariant)) {
    response.headers.set("X-AB-Variant", existingVariant);
    return response;
  }

  // 신규 방문자: 가중치 기반 랜덤 분배
  const weightA = config.variants.a ?? DEFAULT_VARIANT_WEIGHT_A;
  const rand = Math.random() * 100;
  const variant = rand < weightA ? "a" : "b";

  // Cookie 설정 (30일 유지, httpOnly=false로 클라이언트에서 읽을 수 있게)
  response.cookies.set(COOKIE_NAME, variant, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
  });

  response.headers.set("X-AB-Variant", variant);
  return response;
}

export const config = {
  matcher: ["/", "/consult"],
};
