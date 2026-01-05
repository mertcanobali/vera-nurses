import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Gelen veriyi oku
    const body = await request.json();
    const { firstName, lastName, email, phone, treatment, service } = body;

    // 2. Basit Doğrulama
    if (!firstName || !lastName || !phone || !treatment || !service) {
      return NextResponse.json(
        { success: false, message: "Lütfen zorunlu alanları doldurunuz." },
        { status: 400 }
      );
    }

    // 3. Veriyi Konsola Yaz
    console.log("--- YENİ RANDEVU TALEBİ ---");
    console.log(`Ad Soyad: ${firstName} ${lastName}`);
    console.log(`İletişim: ${phone} | ${email}`);
    console.log(`Tedavi: ${treatment}`);
    console.log(`Hizmet: ${service}`);
    console.log("---------------------------");

    // 4. Başarılı yanıt dön
    return NextResponse.json(
      { success: true, message: "Talebiniz başarıyla alındı." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
