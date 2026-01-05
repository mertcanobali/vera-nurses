"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export default function Story() {
  const t = useTranslations("AboutPage");

  const stats = [
    { value: "20+", label: t("Stats.s1") },
    { value: "5000+", label: t("Stats.s2") },
    { value: "150+", label: t("Stats.s3") },
    { value: "81", label: t("Stats.s4") },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Üst Kısım: Hikaye ve Görsel */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* Metin Alanı */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-[#8E1B20] font-bold tracking-widest uppercase text-sm border-b-2 border-[#8E1B20] inline-block pb-2">
              {t("Story.badge")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2]">
              {t("Story.title")}
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>{t("Story.p1")}</p>
              <p>{t("Story.p2")}</p>
            </div>

            {/* Alıntı Kutusu */}
            <div className="relative p-6 bg-slate-50 border-l-4 border-[#8E1B20] rounded-r-xl mt-6">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-[#8E1B20]/10 rotate-180" />
              <p className="text-slate-800 italic font-medium relative z-10 pl-2">
                "{t("Story.quote")}"
              </p>
            </div>
          </div>

          {/* Görsel Alanı (Layered Effect) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/about-corporate.png"
                alt="Vera Nurses Vision"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            {/* Dekoratif Daire */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8E1B20] rounded-full blur-[80px] opacity-20" />
          </div>
        </div>

        {/* Alt Kısım: İstatistik Şeridi */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-100 bg-slate-50/50 rounded-2xl px-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-extrabold text-[#8E1B20] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
