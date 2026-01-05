// app/sitemap.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitedeki statik sayfalar listesi
  const routes = [
    "", // Ana sayfa
    "/about", // Hakkımızda
    "/services", // Hizmetler (slug yapısı varsa veritabanından çekilmeli)
    "/contact", // İletişim
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Statik rotalar için tüm dillerde URL oluştur
  routes.forEach((route) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
      });
    });
  });

  // Bilinen hizmet slug'ları (generateStaticParams ile eşleştir)
  const serviceSlugs = [
    "nurse",
    "escort",
    "elderly",
    "birth",
    "physio",
    "ambulance",
  ];
  serviceSlugs.forEach((slug) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: new Date(),
      });
    });
  });

  return sitemapEntries;
}
