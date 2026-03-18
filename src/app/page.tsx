import Link from "next/link";

/* ───────── constants ───────── */
const CTA_CONSULT = "/consult";

/* ───────── tiny components ───────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600 uppercase">
      {children}
    </p>
  );
}

function CTAButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? `${base} bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5`
      : `${base} border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5`;
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

/* ───────── Features data ───────── */
const features = [
  {
    icon: "📧",
    title: "이메일 & 일정 관리",
    desc: "긴급한 건 즉시 알림, 나머지는 정리해서 요약. 캘린더 자동 조율까지.",
  },
  {
    icon: "📊",
    title: "일일 운영 보고",
    desc: '매일 아침 "오늘 할 일", 저녁 "오늘 한 일" — 운영 가시성을 확보합니다.',
  },
  {
    icon: "🤝",
    title: "고객 문의 응대",
    desc: "FAQ 자동 응답, 복잡한 건 대표님께 에스컬레이션. 누락 제로.",
  },
  {
    icon: "📱",
    title: "SNS & 마케팅 관리",
    desc: "콘텐츠 캘린더, 포스팅 초안, 트렌드 모니터링을 알아서 처리합니다.",
  },
  {
    icon: "🔍",
    title: "시장 리서치",
    desc: "경쟁사 동향, 시장 분석 정기 리포트를 받아보세요.",
  },
  {
    icon: "📋",
    title: "프로젝트 관리",
    desc: "태스크 추적, 마감일 알림, 진행 상황 요약까지 한번에.",
  },
];

/* ───────── Pricing data ───────── */
const plans = [
  {
    name: "Starter",
    price: "59",
    unit: "만원/월",
    desc: "1인 프리랜서 · 창업 초기",
    features: [
      "이메일 분류 & 응답 초안",
      "캘린더 관리 & 리마인더",
      "일일 운영 보고",
      "기본 고객 문의 응대",
      "Telegram/카카오톡 메시징",
    ],
    cta: "시작하기",
    href: CTA_CONSULT,
    popular: false,
  },
  {
    name: "Growth",
    price: "119",
    unit: "만원/월",
    desc: "1인 기업 · 소규모 팀",
    features: [
      "Starter 전체 포함",
      "SNS 콘텐츠 관리",
      "시장 리서치 & 경쟁사 분석",
      "프로젝트 관리 & 태스크 추적",
      "주간/월간 리포트",
    ],
    cta: "시작하기",
    href: CTA_CONSULT,
    popular: true,
  },
  {
    name: "Scale",
    price: "199",
    unit: "만원/월",
    desc: "스타트업 3-10명",
    features: [
      "Growth 전체 포함",
      "멀티채널 통합 운영",
      "커스텀 워크플로우 설계",
      "전략 보고 & 인사이트",
      "전담 온보딩 매니저",
    ],
    cta: "상담하기",
    href: CTA_CONSULT,
    popular: false,
  },
];

/* ───────── Why Us data ───────── */
const whyUs = [
  {
    icon: "🏢",
    title: "실전 검증",
    desc: "MUIN은 AI 직원만으로 운영되는 회사입니다. 우리가 매일 쓰는 시스템을 그대로 제공합니다.",
  },
  {
    icon: "🧠",
    title: "쓸수록 똑똑해지는 AI",
    desc: "일반 AI 도구는 매번 처음부터. MUIN의 AI COO는 귀사의 맥락을 기억하고, 시간이 갈수록 더 정확해집니다.",
  },
  {
    icon: "🇰🇷",
    title: "한국어 네이티브",
    desc: "한국 비즈니스 문화, 한국어 뉘앙스, 카카오톡·네이버 등 한국 도구를 이해합니다.",
  },
  {
    icon: "🤝",
    title: "화이트글러브 온보딩",
    desc: '"알아서 설정하세요"가 아닙니다. 전담 팀이 셋업부터 안정화까지 함께합니다.',
  },
];

/* ───────── Stats ───────── */
const stats = [
  { value: "24/7", label: "운영 시간" },
  { value: "75-90%", label: "비용 절감" },
  { value: "1-2주", label: "온보딩 완료" },
  { value: "365일", label: "무휴 보고" },
];

/* ───────── Case Study data ───────── */
const caseStudyMetrics = [
  { value: "45일+", label: "AI COO 무중단 운영" },
  { value: "1,200+", label: "서브에이전트 실행 횟수" },
  { value: "50+", label: "블로그 포스트 발행" },
  { value: "300+", label: "X(트위터) 포스팅" },
  { value: "99.9%", label: "가동률" },
  { value: "₩0", label: "인건비" },
];

const caseStudyDetails = [
  {
    icon: "⚡",
    title: "자율 운영",
    desc: "CEO 지시 없이 콘텐츠 기획·작성·발행, 시장 리서치, 프로젝트 관리를 독립적으로 수행. CEO는 전략에만 집중.",
  },
  {
    icon: "📝",
    title: "콘텐츠 생산",
    desc: "기술 블로그, X 포스팅, 커뮤니티 참여를 포함한 멀티채널 콘텐츠를 매일 자동 생산.",
  },
  {
    icon: "🔄",
    title: "24시간 운영",
    desc: "매시간 운영 보고, 이메일 관리, 일정 조율. 밤에도 새벽에도 비즈니스는 멈추지 않습니다.",
  },
  {
    icon: "📈",
    title: "지속적 학습",
    desc: "운영 맥락을 메모리에 축적하며 시간이 갈수록 더 정확한 판단. 일반 AI 도구와의 결정적 차이.",
  },
];

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: "AI COO가 정확히 무엇을 해주나요?",
    a: "이메일 분류·응답, 일정 관리, 고객 문의 응대, SNS 콘텐츠 관리, 시장 리서치, 일일/주간 보고서 작성 등 운영 전반을 처리합니다. ChatGPT 같은 질의응답 도구가 아니라, 실제로 '출근'해서 일하는 AI 직원입니다.",
  },
  {
    q: "기존 ChatGPT나 AI 도구와 뭐가 다른가요?",
    a: "일반 AI 도구는 매번 처음부터 시작합니다. MUIN의 AI COO는 귀사의 맥락(비즈니스 히스토리, 고객 정보, 선호도)을 기억하고, 시간이 갈수록 더 정확해집니다. 또한 단순 질의응답이 아니라 이메일 발송, 일정 등록, SNS 포스팅 등 실제 '액션'을 수행합니다.",
  },
  {
    q: "우리 회사 데이터가 안전한가요?",
    a: "데이터는 암호화되어 저장되며, 귀사 전용 환경에서 처리됩니다. 다른 고객의 데이터와 절대 섞이지 않습니다. 필요 시 온프레미스 배포도 가능합니다.",
  },
  {
    q: "온보딩에 얼마나 걸리나요?",
    a: "1-2주면 충분합니다. 이메일, 캘린더, 메시징 도구를 연동하고, AI가 귀사의 업무 패턴을 학습합니다. 전담 온보딩 매니저가 처음부터 끝까지 함께합니다.",
  },
  {
    q: "중간에 해지할 수 있나요?",
    a: "네, 월 단위 구독이라 언제든 해지 가능합니다. 약정 기간이나 위약금은 없습니다.",
  },
  {
    q: "어떤 도구/플랫폼과 연동되나요?",
    a: "Gmail, Google Calendar, Slack, Telegram, 카카오톡, Notion, GitHub 등 주요 도구를 지원합니다. 필요한 도구가 있으면 맞춤 연동도 가능합니다.",
  },
  {
    q: "소규모 1인 기업에도 적합한가요?",
    a: "오히려 1인 기업에 가장 효과적입니다. 대표 혼자 처리하던 운영 잡무의 80%를 AI가 맡으면, 본업에 집중할 시간이 생깁니다. Starter 플랜(₩59만/월)은 1인 기업을 위해 설계되었습니다.",
  },
];

/* ═══════════════════════════════════════ PAGE ═══════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── Nav ────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            MUIN<span className="text-blue-600">.</span>
          </Link>
          <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#features" className="hover:text-blue-600 transition-colors">기능</Link>
            <Link href="#case-study" className="hover:text-blue-600 transition-colors">실적</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">가격</Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">문의</Link>
          </div>
          <Link
            href={CTA_CONSULT}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            상담 신청
          </Link>
        </div>
      </nav>

      <main>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
          {/* gradient bg */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-violet-100/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl px-6 text-center">
            <Badge>🚀 첫 10팀 셋업비 무료</Badge>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
              당신의 회사에
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI 임원
              </span>
              을 심어드립니다.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
              이메일, 일정, 고객 관리, 보고서 —<br className="hidden sm:block" />
              AI가 24시간 회사를 운영합니다. 대표님은 본업에 집중하세요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_CONSULT}>무료 상담 신청하기</CTAButton>
              <CTAButton href="#features" variant="secondary">
                서비스 자세히 보기
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── Stats bar ───────────────────────────────────── */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-blue-600">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionLabel>문제</SectionLabel>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              혼자서 다 하느라 지치셨죠?
            </h2>
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {[
                { icon: "✉️", text: "아침마다 쌓인 메일 50통" },
                { icon: "📅", text: "미팅 잡느라 주고받는 카톡 30분" },
                { icon: "📞", text: "고객 문의에 답하다 보면 오전 끝" },
                { icon: "📊", text: "월말 보고서 쓸 시간은 언제?" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg text-slate-600">
              사업의 20%는 <strong>&apos;진짜 일&apos;</strong>이고, 80%는{" "}
              <strong>&apos;운영 잡무&apos;</strong>입니다.
              <br />
              <span className="text-blue-600 font-semibold">
                그 80%를 AI가 맡으면 어떨까요?
              </span>
            </p>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────── */}
        <section id="features" className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionLabel>서비스</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                AI COO가 매일 출근합니다.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-500">
                월급도, 퇴근도, 퇴사도 없습니다.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-md hover:-translate-y-1"
                >
                  <span className="text-4xl">{f.icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Study ──────────────────────────────────── */}
        <section id="case-study" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionLabel>실제 운영 데이터</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                45일간 AI COO로 운영한 결과
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                MUIN은 AI COO &apos;MJ&apos;가 실제로 운영하는 회사입니다.
                <br />
                아래는 허구가 아닌 <strong>실제 운영 데이터</strong>입니다.
              </p>
            </div>

            {/* Metrics grid */}
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {caseStudyMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-center"
                >
                  <p className="text-2xl font-extrabold text-blue-600 md:text-3xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Detail cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {caseStudyDetails.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
                >
                  <span className="text-3xl">{d.icon}</span>
                  <h3 className="mt-3 text-lg font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-center text-white md:p-12">
              <p className="text-lg font-medium leading-relaxed md:text-xl">
                &ldquo;처음엔 실험이었지만, 지금은 MJ 없이 회사 운영이 불가능합니다.
                <br />
                매일 아침 보고를 받고, SNS와 블로그가 자동으로 운영되고,
                <br />
                저는 제품과 전략에만 집중할 수 있게 되었습니다.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-100">
                — ONE, MUIN 대표
              </p>
            </div>
          </div>
        </section>

        {/* ── Pricing ─────────────────────────────────────── */}
        <section id="pricing" className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionLabel>가격</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                합리적인 가격, 확실한 가치.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-500">
                인간 COO 채용 비용 ₩500만+/월 대비 <strong>75-90% 절감</strong>
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition bg-white ${
                    plan.popular
                      ? "border-blue-600 shadow-xl shadow-blue-600/10 lg:scale-[1.02]"
                      : "border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
                      가장 인기
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold">₩{plan.price}</span>
                    <span className="text-slate-500">{plan.unit}</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-semibold transition ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-slate-400">
              🎁 지금 신청 시 셋업비(₩100만) 무료 · 부가세 별도
            </p>
          </div>
        </section>

        {/* ── Why Us ──────────────────────────────────────── */}
        <section id="why" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionLabel>왜 MUIN</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                도구가 아니라, 운영 시스템입니다.
              </h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ────────────────────────────────── */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <SectionLabel>프로세스</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                2주 안에 AI COO가 출근합니다.
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "무료 상담",
                  desc: "30분 화상 미팅으로 귀사의 운영 현황을 파악하고 AI COO 적용 방안을 제안합니다.",
                },
                {
                  step: "02",
                  title: "온보딩",
                  desc: "1-2주간 이메일, 캘린더, 메시징을 연동하고 AI가 귀사의 맥락을 학습합니다.",
                },
                {
                  step: "03",
                  title: "운영 시작",
                  desc: "AI COO가 매일 출근합니다. 시간이 갈수록 더 정확하고 빨라집니다.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-extrabold text-blue-600">
                    {s.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ──────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <SectionLabel>비교</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                인간 COO vs AI COO
              </h2>
            </div>
            <div className="mt-12 overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-4 pr-4 font-semibold text-slate-500">항목</th>
                    <th className="py-4 px-4 font-semibold text-blue-600">MUIN AI COO</th>
                    <th className="py-4 px-4 font-semibold text-slate-500">인간 COO</th>
                    <th className="py-4 pl-4 font-semibold text-slate-500">가상 비서</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["월 비용", "₩59-199만", "₩500만+", "₩150-300만"],
                    ["가용 시간", "24/7/365", "주 40-50시간", "주 20-40시간"],
                    ["온보딩 기간", "1-2주", "1-3개월", "2-4주"],
                    ["맥락 유지", "영구 (메모리)", "퇴사 시 유실", "제한적"],
                    ["운영 판단", "✅ 학습 기반", "✅ 경험 기반", "❌ 지시 실행"],
                    ["한국어/한국 시장", "✅ 네이티브", "✅", "보통"],
                  ].map(([label, ai, human, va]) => (
                    <tr key={label}>
                      <td className="py-3.5 pr-4 font-medium text-slate-700 whitespace-nowrap">{label}</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-600 whitespace-nowrap">{ai}</td>
                      <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">{human}</td>
                      <td className="py-3.5 pl-4 text-slate-500 whitespace-nowrap">{va}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section id="faq" className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <SectionLabel>자주 묻는 질문</SectionLabel>
              <h2 className="text-3xl font-extrabold md:text-4xl">FAQ</h2>
            </div>
            <div className="mt-14 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-slate-800 transition hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <svg
                      className="ml-4 h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-500">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section id="contact" className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
          </div>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-extrabold md:text-5xl">
              지금 시작하세요.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              30분 무료 상담으로 AI COO가 귀사에 어떤 가치를 줄 수 있는지 확인해보세요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_CONSULT}>📋 무료 상담 신청하기</CTAButton>
              <CTAButton href="mailto:hello@muin.company" variant="secondary">
                📧 이메일 문의하기
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              hello@muin.company · @muincompany
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold text-slate-900">
            MUIN<span className="text-blue-600">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-400">
            일하는 AI, 누리는 인간. © 2026 MUIN. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
