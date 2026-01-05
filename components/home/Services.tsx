"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Stethoscope,
  HeartHandshake,
  Baby,
  Activity,
  UserRoundCog,
  Plane,
} from "lucide-react";

export default function Services() {
  const t = useTranslations("ServicesSection");

  // Hizmet Listesi ve İkon Eşleştirmeleri
  const services = [
    {
      key: "nurse",
      icon: <Stethoscope className="h-8 w-8" />,
      link: "/services/nurse",
    },
    {
      key: "care",
      icon: <HeartHandshake className="h-8 w-8" />,
      link: "/services/escort",
    },
    {
      key: "elderly",
      icon: <UserRoundCog className="h-8 w-8" />,
      link: "/services/elderly",
    },
    {
      key: "baby",
      icon: <Baby className="h-8 w-8" />,
      link: "/services/birth",
    },
    {
      key: "physio",
      icon: <Activity className="h-8 w-8" />,
      link: "/services/physio",
    },
    {
      key: "ambulance",
      icon: <Plane className="h-8 w-8" />,
      link: "/services/ambulance",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-lg">{t("subtitle")}</p>
        </div>

        {/* Hizmet Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#8E1B20]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* İkon Kutusu */}
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-[#8E1B20] mb-6 group-hover:bg-[#8E1B20] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Başlık ve Açıklama */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#8E1B20] transition-colors">
                {t(`items.${item.key}.title`)}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {t(`items.${item.key}.desc`)}
              </p>

              {/* Devamını Oku Linki (Artık JSON'dan geliyor) */}
              <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-[#8E1B20] transition-colors">
                {t("moreInfo")}
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
