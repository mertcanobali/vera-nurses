"use server";

import { z } from "zod";

// --- ORTAK ŞEMA (Hem Randevu Hem İletişim İçin) ---
// İki form da artık aynı yapıda olduğu için tek şema veya benzer şemalar kullanabiliriz.

const formSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçersiz e-posta adresi"),
  phone: z.string().min(10, "Telefon en az 10 karakter olmalıdır"),
  treatment: z.string().min(1, "Tedavi seçimi zorunludur"),
  service: z.string().min(1, "Hizmet seçimi zorunludur"),
  message: z.string().optional(), // Randevuda opsiyonel, İletişimde zorunlu olabilir. Aşağıda ayıracağız.
});

// --- 1. RANDEVU FORMU (AppointmentForm) ---

export async function submitAppointment(prevState: any, formData: FormData) {
  // Simüle edilmiş bekleme
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    treatment: formData.get("treatment"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  // Randevu için mesaj opsiyonel olabilir
  const result = formSchema.safeParse(data);

  if (!result.success) {
    console.error("❌ RANDEVU HATASI:", result.error.flatten().fieldErrors);
    return { success: false, message: "missing_fields" };
  }

  console.log("✅ Randevu Başarılı:", data);
  return { success: true, message: "success" };
}

// --- 2. İLETİŞİM FORMU (ContactForm) ---

// İletişim için mesajı zorunlu yapalım
const contactSchema = formSchema.extend({
  message: z.string().min(5, "Mesaj en az 5 karakter olmalıdır"),
});

export async function submitContact(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    treatment: formData.get("treatment"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    // Hatayı terminale yazdır ki görelim
    console.error("❌ İLETİŞİM HATASI:", result.error.flatten().fieldErrors);
    console.log("Gelen Veri:", data); // Gelen veriyi de görelim
    return { success: false, message: "missing_fields" };
  }

  console.log("✅ İletişim Formu Başarılı:", data);
  return { success: true, message: "success" };
}
