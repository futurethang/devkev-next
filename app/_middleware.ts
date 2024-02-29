// This is /middleware.js or /middleware.ts if you're using TypeScript

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const referrer = request.headers.get("referer") || "";

  if (referrer.includes("news.grets.store")) {
    console.log("Redirecting from news.grets.store");
    return NextResponse.redirect(new URL("/error-page", request.url));
  }

  return NextResponse.next();
}
