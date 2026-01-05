"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Building2, TrendingDown, Clock, ShieldCheck } from "lucide-react";

export default function AboutCompany() {
  const t = useTranslations("AboutSection");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Arka Plan Deseni */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8E1B20]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* SOL TARA: Metin İçeriği */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {t("title")}
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              {t("intro")}
            </p>

            <div className="space-y-4 border-l-4 border-[#8E1B20] pl-6 py-2 bg-white/50 rounded-r-xl">
              <p className="text-slate-700 italic font-medium">
                "{t("mission")}"
              </p>
            </div>

            {/* İstatistikler Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700 mt-1">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">%25</h4>
                  <p className="text-sm text-slate-500">{t("stat1")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-700 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">%100</h4>
                  <p className="text-sm text-slate-500">{t("stat2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Görsel ve Yüzen Kartlar */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-10x2 border-4 border-white">
              <Image
                src="/hakkımızda.png"
                alt="Vera Nurses Corporate"
                fill
                className="object-cover object-[65%_50%]"
              />
            </div>

            {/* Yüzen Rozet (Floating Badge) */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-in slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-8 w-8 text-[#8E1B20]" />
                <span className="font-bold text-slate-900 leading-tight">
                  {t("badgeTitle")}
                </span>
              </div>
              <p className="text-xs text-slate-500">{t("badgeText")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
