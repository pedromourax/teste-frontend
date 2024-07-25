"use client"

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { environment } from "./app/enviroment";
export async function middleware(request: NextRequest) {

  const cookie = cookies().get("token");
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const res = await fetch(`${environment.api}/api/v1/auth/jwt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: cookie.value })
    })
    if (res.status != 201){
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/painel/:path*",
};