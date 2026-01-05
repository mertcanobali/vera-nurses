import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});

// createSharedPathnamesNavigation YERİNE createNavigation kullanıyoruz
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
