// app/robots.ts
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"], // İndexlenmesini istemediğin yerler
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
