import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUIN AI COO — 당신의 회사에 AI 임원을 심어드립니다",
  description:
    "이메일, 일정, 고객 관리, 보고서 — AI가 24시간 회사를 운영합니다. 인간 COO 대비 75-90% 비용 절감.",
  keywords: "AI COO, AI 비서, 무인기업, 운영 자동화, 1인 창업자, 소규모 팀",
  openGraph: {
    title: "MUIN AI COO — 당신의 회사에 AI 임원을 심어드립니다",
    description:
      "이메일, 일정, 고객 관리, 보고서 — AI가 24시간 회사를 운영합니다.",
    url: "https://coo.muin.company",
    siteName: "MUIN",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
