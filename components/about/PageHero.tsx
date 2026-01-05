"use client";

import { useTranslations } from "next-intl";

export default function PageHero() {
  const t = useTranslations("AboutPage.Hero");

  return (
    <section className="relative w-full h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#8E1B23]" />
      <div className="absolute inset-0 z-0 opacity-10  mix-blend-overlay" />

      {/* 3. IŞIK EFEKTLERİ (Glows) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8E1B20] rounded-full blur-[120px] opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* 4. İÇERİK */}
      <div className="container relative z-10 px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-white font-semibold tracking-widest text-xs uppercase">
            {t("badge")}
          </span>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          {t("title")}
        </h1>

        {/* Alt Başlık */}
        <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
