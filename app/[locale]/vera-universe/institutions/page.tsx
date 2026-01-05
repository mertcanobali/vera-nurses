import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl"; // <-- BU EKLENDİ
import InstitutionList from "@/components/corporate/InstitutionList";

type Props = {
  params: Promise<{ locale: string }>;
};

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("InstitutionsPage");
  const title = t("heroTitle");
  const description = t("heroSubtitle");
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

  return {
    title: `${title} | Vera Nurses`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}/vera-universe/institutions`,
      languages: {
        tr: `${BASE_URL}/tr/vera-universe/institutions`,
        en: `${BASE_URL}/en/vera-universe/institutions`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/vera-universe/institutions`,
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

export default function InstitutionsPage({ params }: Props) {
  // params'ı senkronize bir şekilde alabilmek için use hook'u veya await kullanıyoruz.
  // Next.js server component içinde useTranslations doğrudan çalışır.
  const t = useTranslations("InstitutionsPage");

  // Locale ayarını yap (Build hatası almamak için)
  // Not: Server Component içinde asenkron params kullanımı:
  return <PageContent params={params} t={t} />;
}

// Async bileşen sarmalayıcısı (Params await sorunu yaşamamak için en temiz yöntem)
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
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#8E1B20]" />
        <div className="container relative z-10 text-center px-6">
          {/* ÇEVİRİ BURAYA GELDİ */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-white/80 text-lg">{t("heroSubtitle")}</p>
        </div>
      </section>

      <InstitutionList />
    </main>
  );
}
