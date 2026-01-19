import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  console.log("====== proxy ======");
  console.log("request url: ", request.url);
  console.log("request pathname: ", request.nextUrl.pathname);

  const isLogin = true;
  if (!isLogin) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
