import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl"; // <-- BU EKLENDİ
import SolutionsList from "@/components/corporate/SolutionsList";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function QualityPage({ params }: Props) {
  const t = useTranslations("SolutionsPage");

  return <PageContent params={params} t={t} />;
}

async function PageContent({
  params,
  t,
}: {
  params: Promise<{ locale: string }>;
  t: any;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#8E1B20]" />
        <div className="container relative z-10 text-center px-6">
          {/* ÇEVİRİ BURAYA GELDİ */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {t("heroTitle")}
          </h1>
          <p className="text-white/80">{t("heroSubtitle")}</p>
        </div>
      </section>

      <SolutionsList />
    </main>
  );
}
