"use server";

import { z } from "zod";
import { format } from "date-fns";

const appointmentSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string(),
  date: z.date(),
  time: z.string(),
});

// This is a placeholder. Replace with your actual n8n webhook URL.
const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook-test/your-id";

export async function handleAppointmentRequest(data: unknown) {
  const parsedData = appointmentSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Geçersiz form verileri." };
  }

  const { name, phone, email, service, date, time } = parsedData.data;

  const payload = {
    customerName: name,
    phone,
    email,
    serviceType: service,
    appointmentDate: format(date, "yyyy-MM-dd"),
    appointmentTime: time,
  };

  try {
    // In a real application, you would not want to use a placeholder URL.
    // This should be stored in environment variables.
    if (N8N_WEBHOOK_URL.includes("your-n8n-instance.com")) {
        console.log("Using placeholder webhook. Data not sent.", payload);
        // Simulate a successful API call for demonstration purposes.
        return { success: true, message: "Randevu talebi başarıyla alındı (simülasyon)." };
    }
      
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook isteği başarısız: ${response.statusText}`);
    }

    return { success: true, message: "Randevu talebi başarıyla gönderildi." };
  } catch (error) {
    console.error("Webhook gönderme hatası:", error);
    return {
      success: false,
      message: "Randevu talebiniz gönderilirken bir sunucu hatası oluştu.",
    };
  }
}
