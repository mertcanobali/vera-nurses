import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

// next-intl'nin createMiddleware fonksiyonu dönen handler, Proxy içinde çağrılabilir.
const handler = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // Forward to next-intl middleware handler
  // (it returns a Response/NextResponse or undefined)
  return handler(request as any);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
