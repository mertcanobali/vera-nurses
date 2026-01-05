import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/about/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import AppointmentForm from "@/components/home/AppointmentForm";

type Props = {
  params: Promise<{ locale: string }>;
};

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
