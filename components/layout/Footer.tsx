"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navigation");

  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Üst Kısım: 4 Kolonlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 1. Kolon: Marka ve Logo */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo */}
              <div className="relative h-20 w-20">
                <Image
                  src="/VERANurses.png"
                  alt="Vera Nurses"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#8E1B20] leading-none">
                  VERA Nurses
                </span>
              </div>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {t("brandDesc")}
            </p>

            {/* Sosyal Medya */}
            <div className="flex gap-3 pt-2">
              <SocialIcon
                icon={<Instagram className="h-4 w-4" />}
                href="https://www.instagram.com/veranurses/"
              />
              <SocialIcon
                icon={<Facebook className="h-4 w-4" />}
                href="https://www.facebook.com/profile.php?id=61565368171656&locale=tr_TR"
              />
              <SocialIcon
                icon={<Twitter className="h-4 w-4" />}
                href="https://twitter.com/VeraNurses"
              />
            </div>
          </div>

          {/* 2. Kolon: Hizmetlerimiz */}
          <div>
            <h3 className="text-base font-bold mb-5 text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#8E1B20] rounded-sm"></span>
              {t("services")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/services/nurse">
                {navT("subMenuServices.nurse")}
              </FooterLink>
              <FooterLink href="/services/escort">
                {navT("subMenuServices.escort")}
              </FooterLink>
              <FooterLink href="/services/elderly">
                {navT("subMenuServices.elderly")}
              </FooterLink>
              <FooterLink href="/services/birth">
                {navT("subMenuServices.birth")}
              </FooterLink>
              <FooterLink href="/services/physio">
                {navT("subMenuServices.physio")}
              </FooterLink>
              <FooterLink href="/services/ambulance">
                {navT("subMenuServices.ambulance")}
              </FooterLink>
            </ul>
          </div>

          {/* 3. Kolon: Hızlı Linkler (GÜNCELLENDİ) */}
          <div>
            <h3 className="text-base font-bold mb-5 text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#8E1B20] rounded-sm"></span>
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/">{navT("home")}</FooterLink>
              <FooterLink href="/about">{navT("about")}</FooterLink>

              {/* Header ile uyumlu VERA Evreni Linkleri */}
              <FooterLink href="/vera-universe/institutions">
                {navT("subMenuCorporate.about")}
              </FooterLink>
              <FooterLink href="/vera-universe/quality">
                {navT("subMenuCorporate.quality")}
              </FooterLink>

              <FooterLink href="/contact">{navT("contact")}</FooterLink>
            </ul>
          </div>

          {/* 4. Kolon: İletişim */}
          <div>
            <h3 className="text-base font-bold mb-5 text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#8E1B20] rounded-sm"></span>
              {t("contact")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="bg-white p-2 rounded-md shadow-sm border border-slate-100 text-[#8E1B20]">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-slate-600 leading-relaxed pt-1">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white p-2 rounded-md shadow-sm border border-slate-100 text-[#8E1B20]">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="tel:02168887581"
                  className="text-slate-600 hover:text-[#8E1B20] transition-colors font-medium"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white p-2 rounded-md shadow-sm border border-slate-100 text-[#8E1B20]">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:info@veranurses.com"
                  className="text-slate-600 hover:text-[#8E1B20] transition-colors"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} VERA Nurses. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#8E1B20] transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#8E1B20] transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Yardımcı Bileşenler ---

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-slate-600 hover:text-[#8E1B20] hover:translate-x-1 transition-all duration-200"
      >
        <span className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-[#8E1B20] transition-colors"></span>
        <span>{children}</span>
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-slate-200 p-2.5 rounded-full text-slate-600 hover:bg-[#8E1B20] hover:text-white hover:border-[#8E1B20] transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}
