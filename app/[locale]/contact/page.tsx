import { useTranslations } from "next-intl";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const tFooter = useTranslations("Footer"); // Ortak verileri buradan çekebiliriz

  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Başlık */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">{t("title")}</h1>
          <p className="text-lg text-slate-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-8 border-b pb-4">
                {t("infoTitle")}
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#8E1B20] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {t("address")}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tFooter("address")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#8E1B20] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {t("phone")}
                    </h4>
                    <a
                      href={`tel:${tFooter("phone").replace(/\s/g, "")}`}
                      className="text-slate-600 text-sm hover:text-[#8E1B20]"
                    >
                      {tFooter("phone")}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#8E1B20] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {t("email")}
                    </h4>
                    <a
                      href={`mailto:${tFooter("email")}`}
                      className="text-slate-600 text-sm hover:text-[#8E1B20]"
                    >
                      {tFooter("email")}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#8E1B20] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {t("workingHours")}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {t("workingHoursDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {t("formTitle")}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
