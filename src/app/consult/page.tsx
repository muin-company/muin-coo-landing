"use client";

import Link from "next/link";
import { useState } from "react";
import { track } from "@vercel/analytics";

const tiers = [
  { value: "starter", label: "Starter (₩59만/월)" },
  { value: "growth", label: "Growth (₩119만/월)" },
  { value: "scale", label: "Scale (₩199만/월)" },
  { value: "unsure", label: "아직 잘 모르겠어요" },
];

export default function ConsultPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    tier: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Read A/B variant from cookie for API tracking
      const abCookie =
        document.cookie
          .split("; ")
          .find((c) => c.startsWith("ab-headline="))
          ?.split("=")[1] || "unknown";

      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ab_variant: abCookie }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        setSubmitting(false);
        return;
      }

      // Read A/B variant from cookie
      const abVariant =
        document.cookie
          .split("; ")
          .find((c) => c.startsWith("ab-headline="))
          ?.split("=")[1] || "unknown";

      // Track successful conversion with variant info
      track("consult_submit", {
        tier: form.tier,
        has_message: form.message.length > 0 ? "yes" : "no",
        ab_headline: abVariant,
      });

      setSubmitted(true);
    } catch {
      setError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
      setSubmitting(false);
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <>
        <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight">
              MUIN<span className="text-blue-600">.</span>
            </Link>
          </div>
        </nav>
        <main className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
              ✅
            </div>
            <h1 className="mt-6 text-3xl font-extrabold">신청 완료!</h1>
            <p className="mt-4 text-slate-600">
              상담 신청이 성공적으로 접수되었습니다.
              <br />
              <strong>24시간 이내</strong>에 입력하신 이메일로 회신드리겠습니다.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            MUIN<span className="text-blue-600">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            ← 홈으로
          </Link>
        </div>
      </nav>

      <main className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold md:text-4xl">
              무료 상담 신청
            </h1>
            <p className="mt-3 text-slate-500">
              30분 화상 미팅으로 AI COO가 귀사에 어떤 가치를 줄 수 있는지
              확인해보세요.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* 이름 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700"
              >
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="홍길동"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700"
              >
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="hello@company.com"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* 회사명 */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-slate-700"
              >
                회사명 <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                required
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="주식회사 OOO"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* 관심 서비스 티어 */}
            <div>
              <label
                htmlFor="tier"
                className="block text-sm font-semibold text-slate-700"
              >
                관심 서비스 티어 <span className="text-red-500">*</span>
              </label>
              <select
                id="tier"
                required
                value={form.tier}
                onChange={(e) => update("tier", e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
              >
                <option value="">선택해주세요</option>
                {tiers.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 추가 메시지 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700"
              >
                추가 메시지{" "}
                <span className="text-slate-400 font-normal">(선택)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="현재 운영 상황이나 궁금한 점을 알려주세요"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-blue-600 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {submitting ? "전송 중..." : "무료 상담 신청하기 →"}
            </button>

            <p className="text-center text-xs text-slate-400">
              24시간 이내에 회신드립니다. 정보는 상담 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
