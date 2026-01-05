import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("Legal");

  return (
    <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{t("termsTitle")}</h1>
      <p className="text-slate-500 text-sm mb-8">{t("lastUpdated")}</p>

      <div className="prose prose-slate max-w-none">
        <p>
          Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş
          sayılırsınız.
        </p>

        <h3>1. Hizmet Kapsamı</h3>
        <p>
          VERA Nurses, sağlık personeli ile hastaları buluşturan bir
          platformdur. Tıbbi müdahaleler lisanslı profesyonellerce yapılır.
        </p>

        <h3>2. Sorumluluk Reddi</h3>
        <p>
          Sitedeki bilgiler bilgilendirme amaçlıdır, doktor tavsiyesi yerine
          geçmez.
        </p>
      </div>
    </main>
  );
}
