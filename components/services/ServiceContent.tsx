"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

interface ServiceContentProps {
  slug: string;
}

export default function ServiceContent({ slug }: ServiceContentProps) {
  // Hizmet özel çevirisi (ServicePages.nurse)
  const t = useTranslations(`ServicePages.${slug}`);
  // Genel çeviri (ServiceGlobal)
  const tGlobal = useTranslations("ServiceGlobal");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* SOL: Metinler */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {t("subtitle")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t("description")}
            </p>

            {/* Özellik Listesi Kutu */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              {/* Dinamik Başlık: Hizmet Kapsamı */}
              <h3 className="text-xl font-bold text-[#8E1B20] mb-6">
                {tGlobal("featuresTitle")}
              </h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#8E1B20] shrink-0" />
                    <span className="text-slate-700 font-medium">
                      {t(`features.f${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SAĞ: Görsel ve Destek Kutusu */}
          <div className="w-full lg:w-1/2 sticky top-24">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={`/services/${slug}.png`}
                alt={t("title")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Dinamik Destek Kutusu */}
            <div className="absolute -bottom-6 -left-6 bg-[#8E1B20] p-6 rounded-xl shadow-xl text-white max-w-xs hidden md:block">
              <p className="font-bold text-lg">{tGlobal("supportBox.title")}</p>
              <p className="text-sm opacity-90">{tGlobal("supportBox.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
