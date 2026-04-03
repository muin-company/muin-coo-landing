# A/B 테스트 가이드 — PostHog + Vercel Edge Config

## 개요

COO 랜딩 페이지의 A/B 테스트 시스템.
- **Variant A:** 비용 절감 메시지 ("연봉 1억 대신 월 30만원으로")
- **Variant B:** 생산성 증대 메시지 ("24시간 일하는 AI 임원")

## 아키텍처

```
[사용자 방문] → [Middleware] → Cookie로 variant 배정 (50/50)
                                    ↓
                            [페이지 렌더링]
                                    ↓
                            [PostHog JS SDK] → 이벤트 전송
```

## 설정 방법

### 1. PostHog 계정 설정

1. https://app.posthog.com/signup 가입
2. 프로젝트 생성 → API Key 복사
3. `.env.local` 에 추가:

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

4. Vercel에도 환경변수 추가:
```bash
vercel env add NEXT_PUBLIC_POSTHOG_KEY
vercel env add NEXT_PUBLIC_POSTHOG_HOST
```

### 2. Edge Config 설정 (선택)

비율을 동적으로 변경하려면:

1. Vercel Dashboard > Storage > Edge Config 생성
2. `@vercel/edge-config` 설치: `npm install @vercel/edge-config`
3. `middleware.ts`에서 주석 해제 (Edge Config 섹션)
4. Edge Config에 항목 추가:
```json
{
  "ab_coo_landing": {
    "enabled": true,
    "variants": { "a": 50, "b": 50 }
  }
}
```

Edge Config 없이도 기본 50/50으로 동작합니다.

## 이벤트 트래킹

### 자동 수집 이벤트

| 이벤트 | 설명 | 속성 |
|--------|------|------|
| `ab_page_view` | 페이지 조회 | `variant`, `page` |
| `scroll_depth` | 스크롤 깊이 | `variant`, `depth` (50/75/100) |

### 수동 트래킹 이벤트

| 이벤트 | 설명 | 속성 |
|--------|------|------|
| `cta_click` | CTA 클릭 | `variant`, `cta_type` |
| `form_submit` | 폼 제출 | `variant`, `has_email`, `has_company` |

### 사용법

```tsx
import { trackPageView, trackCTAClick, trackFormSubmit } from "@/lib/tracking";
import { ScrollTracker } from "@/app/scroll-tracker";

// 페이지 컴포넌트에서
function LandingPage() {
  const variant = getCookieVariant(); // "a" | "b"

  useEffect(() => {
    trackPageView(variant);
  }, []);

  return (
    <>
      <ScrollTracker variant={variant} />
      <button onClick={() => trackCTAClick(variant, "primary")}>
        무료 상담 신청
      </button>
    </>
  );
}
```

## 쿠키

| 이름 | 값 | 만료 |
|------|-----|------|
| `ab-coo-variant` | `a` 또는 `b` | 30일 |

## 분석 기준

| 항목 | 값 |
|------|-----|
| Primary Metric | `form_submit` 전환율 |
| Secondary Metrics | `cta_click`율, `scroll_depth`, 체류 시간 |
| 최소 샘플 | 50 visitors/variant |
| 권장 기간 | 14-21일 |
| 신뢰 수준 | 95% (p < 0.05) |

## 파일 구조

```
middleware.ts              # A/B variant 분배 + Cookie 설정
src/lib/posthog.ts         # PostHog SDK 초기화
src/lib/tracking.ts        # 이벤트 트래킹 유틸리티
src/app/posthog-provider.tsx   # PostHog React Provider
src/app/scroll-tracker.tsx     # 스크롤 깊이 자동 추적
docs/ab-test.md            # 이 문서
```

## 체크리스트

- [ ] PostHog 계정 생성 & API Key 발급
- [ ] `.env.local` 환경변수 추가
- [ ] Vercel 환경변수 추가
- [ ] 로컬 테스트 (`vercel dev`)
- [ ] PostHog Live Events에서 이벤트 수신 확인
- [ ] Edge Config 설정 (선택)
- [ ] 프로덕션 배포
