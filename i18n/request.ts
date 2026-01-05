import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Bu, [locale] segmentine karşılık gelir
  let locale = await requestLocale;

  // Geçerli bir dil gelip gelmediğini kontrol et
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale, // <--- BU SATIR EKSİKTİ, ARTIK ZORUNLU
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
