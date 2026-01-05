"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* --- ARKA PLAN KATMANI */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.png"
          alt="Vera Nurses - Profesyonel Evde Sağlık"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/30 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/50 md:to-transparent" />
      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="container relative z-10 px-6 md:px-12 h-full flex flex-col justify-center">
        {/* İçerik Kutusu */}
        <div className="max-w-4xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {/* Ana Başlık (Mobilde küçük, masaüstünde devasa) */}
          <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1] tracking-tight drop-shadow-md">
            {t("title")}
          </h1>

          {/* Açıklama */}
          <p className="text-center md:text-left text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto md:mx-0 md:border-l-4 md:border-[#8E1B20] md:pl-6 opacity-90">
            {t("subtitle")}
          </p>

          {/* Butonlar (Mobilde alt alta, masaüstünde yan yana) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-[#8E1B20] hover:bg-[#7a1519] text-white font-bold h-12 md:h-14 px-8 text-base md:text-lg rounded-xl shadow-xl shadow-red-900/20 w-full sm:w-auto transition-transform hover:-translate-y-1"
            >
              <Link href="/contact">
                {t("cta_primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 hover:bg-white/20 text-white border-white/30 hover:border-white h-12 md:h-14 px-8 text-base md:text-lg rounded-xl w-full sm:w-auto backdrop-blur-sm transition-all"
            >
              <Link href="/about">{t("cta_secondary")}</Link>
            </Button>
          </div>
          <div className="pt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 border-t border-white/10 mt-6 md:mt-0">
            <FeatureBox
              icon={
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-[#8E1B20]" />
              }
              text={t("feature1")}
            />
            <FeatureBox
              icon={<MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#8E1B20]" />}
              text={t("feature2")}
            />
            <FeatureBox
              icon={<Clock className="h-4 w-4 md:h-5 md:w-5 text-[#8E1B20]" />}
              text={t("feature3")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Küçük Özellik Bileşeni (Responsive Font)
function FeatureBox({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-slate-200 font-medium text-xs md:text-base bg-black/20 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none border border-white/10 md:border-none backdrop-blur-sm md:backdrop-blur-0">
      <div className="hidden md:block p-2 bg-white/5 rounded-lg border border-white/5">
        {icon}
      </div>
      <div className="md:hidden">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
