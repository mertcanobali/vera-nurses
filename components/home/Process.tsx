"use client";

import { useTranslations } from "next-intl";
import {
  ClipboardList,
  UserCheck,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

export default function Process() {
  const t = useTranslations("ProcessSection");

  const steps = [
    { key: "step1", icon: <ClipboardList className="h-10 w-10" /> },
    { key: "step2", icon: <UserCheck className="h-10 w-10" /> },
    { key: "step3", icon: <HeartPulse className="h-10 w-10" /> },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Arka Plan Dekoru (Opsiyonel silik desen) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg">{t("subtitle")}</p>
        </div>

        {/* Adımlar (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Bağlantı Çizgisi (Sadece Masaüstünde Görünür) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-[#8E1B20]/30 to-slate-200 -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* İkon Kutusu */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200 group-hover:scale-110 group-hover:border-[#8E1B20]/10 transition-all duration-300">
                  <div className="text-[#8E1B20] group-hover:text-[#A32026] transition-colors">
                    {step.icon}
                  </div>
                </div>
                {/* Numara Rozeti */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8E1B20] text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                  {index + 1}
                </div>
              </div>

              {/* Metinler */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(`steps.${step.key}.title`)}
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                {t(`steps.${step.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
