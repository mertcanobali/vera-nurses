"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitAppointment } from "@/app/actions";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Loader2,
  AlertCircle,
  Phone, // EKLENDİ
  MessageCircle, // EKLENDİ (WhatsApp için)
} from "lucide-react";

// --- SABİT İLETİŞİM BİLGİLERİ (Bunu env veya config'den de çekebilirsin) ---
const CONTACT_PHONE = "0 216 888 75 81";
const CONTACT_PHONE_DISPLAY = "0 216 888 75 81";
const WHATSAPP_URL = `https://wa.me/905426598570?text=Merhaba,%20evde%20sağlık%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`;

// Gönder butonu
function SubmitButton({
  btnText,
  loadingText,
}: {
  btnText: string;
  loadingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#8E1B20] hover:bg-[#701519] disabled:bg-slate-400 text-white font-bold h-12 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-2 flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          {loadingText}
        </>
      ) : (
        btnText
      )}
    </button>
  );
}

export default function AppointmentForm() {
  const t = useTranslations("AppointmentSection");

  const [state, formAction] = useFormState(submitAppointment, {
    success: false,
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const getSubServices = (treatmentKey: string) => {
    if (treatmentKey === "homeHealth") {
      return [
        "chronic",
        "pain",
        "wound",
        "serum",
        "catheter",
        "blood",
        "injection",
        "vitals",
        "pressureUlcer",
        "ptExercises",
        "respiratory",
        "education",
        "psych",
        "social",
        "device",
        "endOfLife",
        "nutrition",
        "cpap",
        "oxygen",
        "respiratoryDevice",
        "homeMedication",
      ];
    }
    return [];
  };

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setSelectedTreatment("");
    }
  }, [state.success]);

  return (
    <section className="py-20 bg-[#8E1B20] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-repeat" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* --- SOL TARAF: Bilgilendirme + İletişim --- */}
          <div className="lg:w-1/2 text-white space-y-8 text-center lg:text-left sticky top-24">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t("title")}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed font-light">
              {t("description")}
            </p>

            {/* Mevcut Bilgi Kutucukları */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
                <ShieldCheck className="h-6 w-6 text-white shrink-0" />
                <span className="font-medium">{t("info1")}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
                <Clock className="h-6 w-6 text-white shrink-0" />
                <span className="font-medium">{t("info2")}</span>
              </div>
            </div>

            {/* --- YENİ EKLENEN İLETİŞİM ALANI --- */}
            <div className="pt-6 border-t border-white/10 mt-8">
              <p className="text-white/80 text-sm mb-4 font-medium uppercase tracking-wider">
                {t("contactCta") || "Hemen Bize Ulaşın"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                {/* Telefon Butonu */}
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="group flex items-center justify-center lg:justify-start gap-3 bg-white text-[#8E1B20] px-6 py-3.5 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
                >
                  <Phone className="h-5 w-5 fill-current" />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </a>

                {/* WhatsApp Butonu */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center lg:justify-start gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            {/* --- İLETİŞİM ALANI SONU --- */}
          </div>

          {/* --- SAĞ TARAF: FORM (Değişmedi) --- */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {!state.success ? (
                <form ref={formRef} action={formAction} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 border-b pb-4">
                    {t("form.submitButton")}
                  </h3>

                  {state.message && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {t(`form.errors.${state.message}` as any)}
                    </div>
                  )}

                  {/* AD SOYAD */}
                  <div className="flex gap-4">
                    <div className="space-y-1.5 w-1/2">
                      <label className="text-sm font-semibold text-slate-700">
                        {t("form.firstNameLabel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="firstName"
                        type="text"
                        placeholder={t("form.firstNamePlaceholder")}
                        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800"
                      />
                    </div>
                    <div className="space-y-1.5 w-1/2">
                      <label className="text-sm font-semibold text-slate-700">
                        {t("form.lastNameLabel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="lastName"
                        type="text"
                        placeholder={t("form.lastNamePlaceholder")}
                        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  {/* E-POSTA */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      {t("form.emailLabel")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800"
                    />
                  </div>

                  {/* TELEFON */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      {t("form.phoneLabel")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800"
                    />
                  </div>

                  {/* TEDAVİ TÜRÜ */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      {t("form.treatmentLabel")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      name="treatment"
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 appearance-none bg-white cursor-pointer"
                    >
                      <option value="" disabled>
                        {t("form.treatmentPlaceholder")}
                      </option>
                      <option value="homeHealth">
                        {t("treatments.homeHealth")}
                      </option>
                    </select>
                  </div>

                  {/* HİZMET SEÇİMİ */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      {t("form.serviceLabel")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        name="service"
                        disabled={!selectedTreatment}
                        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 appearance-none bg-white cursor-pointer disabled:bg-slate-100 disabled:text-slate-400"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t("form.servicePlaceholder")}
                        </option>
                        {selectedTreatment &&
                          getSubServices(selectedTreatment).map((key) => (
                            // @ts-ignore
                            <option key={key} value={key}>
                              {t(`services.${key}`)}
                            </option>
                          ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* MESAJ */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      {t("form.messageLabel")}
                    </label>
                    <textarea
                      name="message"
                      placeholder={t("form.messagePlaceholder")}
                      rows={3}
                      className="w-full p-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 resize-none"
                    />
                  </div>

                  <SubmitButton
                    btnText={t("form.submitButton")}
                    loadingText={t("form.sending")}
                  />
                </form>
              ) : (
                <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t("form.successTitle")}
                  </h3>
                  <p className="text-slate-600 px-4">
                    {t("form.successMessage")}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-[#8E1B20] underline font-medium mt-4 hover:text-[#701519]"
                  >
                    {t("form.newRequestButton")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
