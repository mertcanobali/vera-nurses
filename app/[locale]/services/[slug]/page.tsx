import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ServiceContent from "@/components/services/ServiceContent";
import AppointmentForm from "@/components/home/AppointmentForm";
import Process from "@/components/home/Process";
import StructuredData from "@/components/seo/StructuredData";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations(`ServicePages.${slug}`);
  const title = t("title");
  const description = t("description");
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

  return {
    title: `${title} | Vera Nurses`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}/services/${slug}`,
      languages: {
        tr: `${BASE_URL}/tr/services/${slug}`,
        en: `${BASE_URL}/en/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/services/${slug}`,
      images: [`${BASE_URL}/AviceRNA_Logo.png`],
      siteName: "Vera Nurses",
      type: "article",
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

// Statik parametreleri oluştur (Build performansı için)
export function generateStaticParams() {
  return [
    { slug: "nurse" },
    { slug: "escort" },
    { slug: "elderly" },
    { slug: "birth" },
    { slug: "physio" },
    { slug: "ambulance" },
  ];
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // Geçerli slug kontrolü
  const validSlugs = [
    "nurse",
    "escort",
    "elderly",
    "birth",
    "physio",
    "ambulance",
  ];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Çevirileri alıyoruz
  const t = await getTranslations(`ServicePages.${slug}`);
  const tGlobal = await getTranslations("ServiceGlobal");

  return (
    <main className="flex min-h-screen flex-col">
      {/* Page-specific JSON-LD */}
      <StructuredData
        title={t("title")}
        description={t("description")}
        url={`${BASE_URL}/${locale}/services/${slug}`}
        image={`${BASE_URL}/AviceRNA_Logo.png`}
        breadcrumbs={[
          { name: tGlobal("breadcrumbHome"), url: `${BASE_URL}/${locale}` },
          {
            name: tGlobal("breadcrumbServices"),
            url: `${BASE_URL}/${locale}/services`,
          },
          { name: t("title"), url: `${BASE_URL}/${locale}/services/${slug}` },
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Arka plan */}
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[#8E1B20]" />

        <div className="container relative z-10 text-center px-6 animate-in fade-in zoom-in duration-700">
          {/* Badge: VERA NURSES HİZMETLERİ */}
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest mb-4 uppercase">
            {tGlobal("badge")}
          </span>

          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
            {t("title")}
          </h1>

          {/* Breadcrumb: Ana Sayfa / Hizmetler / ... */}
          <div className="flex justify-center gap-2 text-white/60 text-sm">
            <span>{tGlobal("breadcrumbHome")}</span>
            <span>/</span>
            <span>{tGlobal("breadcrumbServices")}</span>
            <span>/</span>
            <span className="text-white">{t("title")}</span>
          </div>
        </div>
      </section>

      {/* 2. İÇERİK BİLEŞENİ */}
      <ServiceContent slug={slug} />

      <Process />

      {/* 3. RANDEVU FORMU */}
      <div className="bg-slate-50 py-20">
        <AppointmentForm />
      </div>
    </main>
  );
}
