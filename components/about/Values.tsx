"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, HeartHandshake, Lightbulb, Clock } from "lucide-react";

export default function Values() {
  const t = useTranslations("AboutPage.Values");

  const values = [
    { key: "v1", icon: ShieldCheck },
    { key: "v2", icon: HeartHandshake },
    { key: "v3", icon: Lightbulb },
    { key: "v4", icon: Clock },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Arka Plan Işıkları */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8E1B20] rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="text-slate-400 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-[#8E1B20]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

              <div className="w-14 h-14 bg-gradient-to-br from-[#8E1B20] to-red-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {t(`items.${item.key}.title`)}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t(`items.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
