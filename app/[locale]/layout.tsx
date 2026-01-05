import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";
import { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData"; // Önceki adımda oluşturduğumuz bileşen

const inter = Inter({ subsets: ["latin"] });

// Projenin canlı domaini
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";

// Viewport Ayarları (Next.js 14+ için ayrı export edilir)
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// Next.js 15 Props Tipi
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// --- SEO: Dinamik Metadata ---
export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;

  // Desteklenmeyen dil kontrolü
  if (!routing.locales.includes(locale as any)) {
    return {};
  }

  // Çeviri dosyasından Metadata alanını çekiyoruz
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | Vera Nurses`,
      default: t("title") || "Vera Nurses - Sağlık Hizmetleri",
    },
    description:
      t("description") || "Profesyonel evde sağlık ve hemşirelik hizmetleri.",
    keywords: [
      "evde sağlık",
      "hemşirelik",
      "check-up",
      "sağlık hizmetleri",
      "Vera Nurses",
    ],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        tr: `${BASE_URL}/tr`,
        en: `${BASE_URL}/en`,
      },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      title: t("og.title") || "Vera Nurses",
      description:
        t("og.description") ||
        t("description") ||
        "Profesyonel Sağlık Hizmetleri",
      url: `${BASE_URL}/${locale}`,
      siteName: "Vera Nurses",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/AviceRNA_Logo.png`,
          width: 1200,
          height: 630,
          alt: "Vera Nurses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@VeraNurses",
      title: t("title") || "Vera Nurses",
      description: t("description") || "Profesyonel Sağlık Hizmetleri",
      images: [`${BASE_URL}/AviceRNA_Logo.png`],
    },
    other: { "theme-color": "#ffffff" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/site.webmanifest",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Güvenli Dil Kontrolü
  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {/* Google Schema Markup (JSON-LD) */}
        <StructuredData />

        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
