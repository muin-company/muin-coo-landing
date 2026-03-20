import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "ab-headline";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Assign A/B variant if not already set
  if (!request.cookies.get(COOKIE_NAME)) {
    const variant = Math.random() < 0.5 ? "a" : "b";
    response.cookies.set(COOKIE_NAME, variant, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/", "/consult"],
};
