import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/about/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import AppointmentForm from "@/components/home/AppointmentForm";

import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("AboutPage");
  const title = t("Hero.title");
  const description = t("Story.p1");
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";
  return {
    title: `${title} | Vera Nurses`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
      languages: {
        tr: `${BASE_URL}/tr/about`,
        en: `${BASE_URL}/en/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/about`,
      images: [`${BASE_URL}/about-corporate.png`],
      siteName: "Vera Nurses",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@VeraNurses",
      title,
      description,
      images: [`${BASE_URL}/about-corporate.png`],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <PageHero />
      <Story />
      <Values />

      {/* Sayfa sonu güçlü bir çağrı */}
      <div className="bg-white py-0">
        <AppointmentForm />
      </div>
    </main>
  );
}
