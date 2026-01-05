import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Next.js 15 için Props Tipi
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // 1. Params'ı await ile çözüyoruz (Next.js 15 kuralı)
  const { locale } = await params;

  // 2. Güvenli Dil Kontrolü (as any kullanmadan)
  // Gelen locale, bizim desteklediğimiz dillerden biri mi?
  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  // 3. Mesajları sunucu tarafında çek
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
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
