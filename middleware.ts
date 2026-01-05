import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // API, resimler ve statik dosyalar hariç her şeyi yakala
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
