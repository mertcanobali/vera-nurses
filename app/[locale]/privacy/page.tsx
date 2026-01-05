import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("Legal");

  return (
    <main className="pt-32 pb-20 container mx-auto px-4 lg:px-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{t("privacyTitle")}</h1>
      <p className="text-slate-500 text-sm mb-8">{t("lastUpdated")}</p>

      <div className="prose prose-slate max-w-none">
        <p>
          VERA Nurses olarak kişisel verilerinizin güvenliğine önem veriyoruz.
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında
          veri sorumlusu sıfatıyla...
        </p>
        {/* Buraya uzun metin gelebilir. Şimdilik placeholder. */}
        <h3>1. Toplanan Veriler</h3>
        <p>
          Hizmetlerimizden yararlanırken ad, soyad, iletişim bilgileri ve sağlık
          verileriniz toplanabilir...
        </p>

        <h3>2. Verilerin Kullanım Amacı</h3>
        <p>
          Toplanan veriler, sağlık hizmetlerinin sunulması, randevu
          oluşturulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla
          işlenir.
        </p>
      </div>
    </main>
  );
}
