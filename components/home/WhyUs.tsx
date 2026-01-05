"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("WhyUsSection");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* SOL TARA: Görsel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Buraya projenizdeki uygun bir görseli koyun. Örn: public/why-us.jpg */}
              <Image
                src="/why-choose section.png"
                alt="Vera Nurses Care"
                fill
                className="object-cover"
              />
              {/* Hafif Overlay */}
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
            {/* Dekoratif Çizgi/Kutu (Görselin arkasına derinlik katar) */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8E1B20]/10 rounded-full -z-10 blur-2xl" />
          </div>

          {/* SAĞ TARAF: İçerik Grid */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-[#8E1B20] font-bold tracking-wider uppercase text-sm mb-2 border-b-2 border-[#8E1B20] inline-block pb-1">
                {t("badge")}
              </h2>
              {/* Başlık istersen ekleyebilirsin, görselde sadece Badge var gibi */}
            </div>

            {/* 2x2 Grid Yapısı */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-3">
                  {/* Numara */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#8E1B20]/20 text-[#8E1B20] font-bold text-lg bg-[#8E1B20]/5">
                    {item}
                  </div>
                  {/* Başlık ve Açıklama */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {t(`items.item${item}.title`)}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(`items.item${item}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
