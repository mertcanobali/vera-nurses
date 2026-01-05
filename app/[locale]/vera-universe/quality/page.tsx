import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl"; // <-- BU EKLENDİ
import SolutionsList from "@/components/corporate/SolutionsList";

type Props = {
  params: Promise<{ locale: string }>;
};

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("SolutionsPage");
  const title = t("heroTitle");
  const description = t("heroSubtitle");
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

  return {
    title: `${title} | Vera Nurses`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}/vera-universe/quality`,
      languages: {
        tr: `${BASE_URL}/tr/vera-universe/quality`,
        en: `${BASE_URL}/en/vera-universe/quality`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/vera-universe/quality`,
      images: [`${BASE_URL}/AviceRNA_Logo.png`],
      siteName: "Vera Nurses",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@VeraNurses",
      title,
      description,
      images: [`${BASE_URL}/AviceRNA_Logo.png`],
    },
  };
}

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
