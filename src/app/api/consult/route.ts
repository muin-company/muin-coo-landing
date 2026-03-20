import { NextResponse } from "next/server";

const TIERS: Record<string, string> = {
  starter: "Starter (₩59만/월)",
  growth: "Growth (₩119만/월)",
  scale: "Scale (₩199만/월)",
  unsure: "아직 잘 모르겠어요",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, tier, message, ab_variant } = body;

    // Validate required fields
    if (!name || !email || !company || !tier) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const tierLabel = TIERS[tier] || tier;

    // Send via Formspree
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      console.error("FORMSPREE_ENDPOINT env var not set");
      return NextResponse.json(
        { error: "서버 설정 오류입니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    const formspreeRes = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        tier: tierLabel,
        message: message || "(없음)",
        ab_variant: ab_variant || "unknown",
        _subject: `[AI COO 상담 신청] ${company} - ${name}`,
        _replyto: email,
      }),
    });

    if (!formspreeRes.ok) {
      const errText = await formspreeRes.text();
      console.error("Formspree error:", formspreeRes.status, errText);
      return NextResponse.json(
        { error: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Consult API error:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
