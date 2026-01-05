"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ChevronDown,
  Send,
} from "lucide-react";

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
        <>
          {btnText}
          <Send className="h-4 w-4 ml-1" />
        </>
      )}
    </button>
  );
}

export default function ContactForm() {
  // Çeviriler: Form etiketleri için AppointmentSection kullanıyoruz (tutarlılık için)
  const t = useTranslations("AppointmentSection");
  const tContact = useTranslations("ContactPage.form"); // Sadece başarı mesajları vs. için

  // Server Action State Yönetimi
  const [state, formAction] = useFormState(submitContact, {
    success: false,
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Dinamik Hizmet Listesi Yönetimi (AppointmentForm ile AYNI)
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

  // Başarılı olduğunda formu temizle
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setSelectedTreatment("");
    }
  }, [state.success]);

  // Başarı Ekranı
  if (state.success) {
    return (
      <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {tContact("successTitle")}
        </h3>
        <p className="text-slate-600 px-4">{tContact("successDesc")}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-[#8E1B20] underline font-medium mt-4 hover:text-[#701519]"
        >
          {tContact("sendNew")}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      {/* Hata Mesajı */}
      {state.message && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          {t(`form.errors.${state.message}` as any)}
        </div>
      )}

      {/* AD SOYAD */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-1.5 w-full md:w-1/2">
          <label className="text-sm font-semibold text-slate-700">
            {t("form.firstNameLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="firstName"
            type="text"
            placeholder={t("form.firstNamePlaceholder")}
            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>
        <div className="space-y-1.5 w-full md:w-1/2">
          <label className="text-sm font-semibold text-slate-700">
            {t("form.lastNameLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="lastName"
            type="text"
            placeholder={t("form.lastNamePlaceholder")}
            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 placeholder:text-slate-400"
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
          className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 placeholder:text-slate-400"
        />
      </div>

      {/* TELEFON */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">
          {t("form.phoneLabel")} <span className="text-red-500">*</span>
        </label>
        <input
          required
          name="phone"
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 placeholder:text-slate-400"
        />
      </div>

      {/* TEDAVİ TÜRÜ */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">
          {t("form.treatmentLabel")} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
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
            <option value="homeHealth">{t("treatments.homeHealth")}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* HİZMET SEÇİMİ (Dinamik) */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">
          {t("form.serviceLabel")} <span className="text-red-500">*</span>
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
            <ChevronDown className="h-4 w-4" />
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
          rows={4}
          placeholder={t("form.messagePlaceholder")}
          className="w-full p-4 rounded-lg border border-slate-200 focus:border-[#8E1B20] focus:ring-1 focus:ring-[#8E1B20] outline-none transition-all text-slate-800 resize-none placeholder:text-slate-400"
        />
      </div>

      <SubmitButton
        btnText={tContact("submit") || t("form.submitButton")} // İletişim sayfasındaki butonu veya fallback olarak randevuyu kullan
        loadingText={tContact("sending") || t("form.sending")}
      />
    </form>
  );
}
