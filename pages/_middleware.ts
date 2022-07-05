import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const { pathname } = req.nextUrl;

  const hostname = req.headers.get("host");
  if (!hostname)
    return new Response(null, {
      status: 400,
      statusText: "No hostname found in request headers",
    });

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname
        .replace(`.multi-tenant-nextjs-saasbase.vercel.app`, "")
        .replace(`.blawg.cc`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (hostname === "localhost:3000" || hostname === "blawg.cc") {
    return NextResponse.next();
  }

  if (currentHost == "app" &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/sites")) {
    url.pathname = `/__app${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (
    !pathname.includes(".") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/sites")
  ) {
    console.log({ pathname }, { hostname });
    url.pathname = `/__sites/${currentHost}${pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
