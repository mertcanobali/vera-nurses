"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react"; // İkon ekleyelim şık dursun

export default function SolutionsList() {
  const t = useTranslations("SolutionsPage");

  // Marka Logoları ve Linkleri
  const solutions = [
    {
      key: "doctors",
      logo: "/VERA DOCTORS.png",
      link: "https://veradoctors.com",
    },
    {
      key: "nurses",
      logo: "/VERANurses.png",
      link: "https://veranurses.com",
    },
    {
      key: "air",
      logo: "/VERAAirclinic.png",
      link: "https://veraairclinic.com",
    },
    {
      key: "intergen",
      logo: "/VERAİNTERGEN.png",
      link: "https://veraintergen.com",
    },
    {
      key: "cellular",
      logo: "/VERACellularTreatments.png",
      link: "https://veracellulartreatments.com/",
    },
    {
      key: "labs",
      logo: "/VERAlabs.png",
      link: "https://veralabservices.com/",
    },
    {
      key: "master",
      logo: "/VERAMasterclass.png",
      link: "https://veramasterclass.com/",
    },
    {
      key: "avicerna",
      logo: "/AviceRNA_Logo.png",
      link: "https://avicerna.com/",
    },
    {
      key: "obesity",
      logo: "/VERAObesity.png",
      link: "https://veraobesity.com/",
    },
    {
      key: "wellbeing",
      logo: "/VERAWellbeing.png",
      link: "https://verawellbeing.com/",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative inline-block">
            {t("title")}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#8E1B20] rounded-full" />
          </h2>
          <p className="text-slate-500 pt-4 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#8E1B20]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              {/* Logo Alanı */}
              <div className="w-full h-24 flex items-center justify-center mb-4 p-2 relative">
                <Image
                  src={item.logo}
                  alt={t(`items.${item.key}.title`)}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Başlık */}
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {t(`items.${item.key}.title`)}
              </h3>

              {/* Açıklama */}
              <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                {t(`items.${item.key}.desc`)}
              </p>

              {/* BUTON - ARTIK LINK OLARAK ÇALIŞIYOR */}
              <a
                href={item.link}
                target="_blank" // Yeni sekmede açar
                rel="noopener noreferrer" // Güvenlik için
                className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide hover:bg-[#8E1B20] hover:text-white hover:border-[#8E1B20] transition-all cursor-pointer"
              >
                {t("ctaText")}
                <ExternalLink className="w-3 h-3 mb-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
