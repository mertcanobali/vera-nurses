"use server";

type ActionState = {
  success: boolean;
  message: string;
};

export async function submitAppointment(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const payload = {
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),

    // API Zorunlu Alanlar
    clinic_slug: process.env.VERA_CLINIC_SLUG,
    treatment_slug: process.env.VERA_TREATMENT_SLUG,
    language: "tr",

    // ÖNEMLİ DÜZELTME: "Website" yerine "Organic" yaz.
    source: "Organic",
  };

  if (!payload.first_name || !payload.last_name || !payload.phone) {
    return { success: false, message: "missing_fields" };
  }

  try {
    const apiUrl = process.env.VERA_API_URL;
    if (!apiUrl) throw new Error("API URL eksik");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Vera API Detaylı Hata:", errorText);

      // Hata mesajını daha anlaşılır hale getirip logluyoruz
      // Kullanıcıya yine genel hata dönüyoruz ama konsolda sen göreceksin.
      throw new Error(`API Reddeti: ${errorText}`);
    }

    return { success: true, message: "success" };
  } catch (error) {
    console.error("Action Hatası:", error);
    return { success: false, message: "error_occurred" };
  }
}
