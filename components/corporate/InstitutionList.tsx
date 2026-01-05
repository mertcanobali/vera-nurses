"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";

export default function InstitutionList() {
  const t = useTranslations("InstitutionsPage");

  const institutions = [
    {
      key: "c1",
      logo: "/VERAHealthGroup.png",
      link: "verahealthgroup.com",
    },
    {
      key: "c2",
      logo: "/VERAHealthGroup.png",
      link: "verahealthandeducation.com",
    }, // Logo aynıysa veya farklıysa değiştir
    { key: "c3", logo: "/VERA DOCTORS.png", link: "verapremiumcare.com" }, // Premium Care logosu yoksa Nurses veya Doctors kullanılabilir geçici olarak
    { key: "c4", logo: "/psitechlab-logo.png", link: "psitechlab.com" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative inline-block">
            {t("title")}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#8E1B20] rounded-full" />
          </h2>
          <p className="text-slate-500 pt-4 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-full h-24 flex items-center justify-center mb-6 relative">
                {/* Logo varsa göster, yoksa placeholder */}
                <Image
                  src={item.logo}
                  alt={t(`items.${item.key}.title`)}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 min-h-[3rem] flex items-center justify-center">
                {t(`items.${item.key}.title`)}
              </h3>
              <a
                href={`https://${item.link}`}
                target="_blank"
                className="mt-auto w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium hover:bg-[#8E1B20] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="h-4 w-4" /> {t("ctaText")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
