import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Middleware for locale routing using next-intl.
 * Note: Next.js shows a deprecation warning for `middleware` file convention.
 * Migration to the new `proxy` approach can be planned separately—this keeps behavior stable.
 */
export default createMiddleware(routing);

export const config = {
  // Exclude API, Next internals and static asset requests from middleware
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
