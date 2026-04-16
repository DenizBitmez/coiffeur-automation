"use server";

import {
  personalizedStyleAdvisor,
  PersonalizedStyleAdvisorInput,
  PersonalizedStyleAdvisorOutput,
} from "@/ai/flows/personalized-style-advisor-flow";
import { z } from "zod";
import { headers } from "next/headers";

const styleAdvisorSchema = z.object({
  hairType: z.string(),
  desiredLook: z.string(),
  faceShape: z.string().optional(),
  occasion: z.string().optional(),
  currentStylePreference: z.string().optional(),
});

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 1000; // 1 Dakika

export type StyleAdvisorResponse = PersonalizedStyleAdvisorOutput;

export async function getStyleAdvice(
  data: unknown
): Promise<StyleAdvisorResponse | null> {
  // IP bazlı Rate Limiting mantığı
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "anonymous_ip";
  const now = Date.now();
  const limitInfo = rateLimitMap.get(ip);

  if (limitInfo) {
    if (now < limitInfo.resetTime) {
      if (limitInfo.count >= MAX_REQUESTS) {
        throw new Error("Çok fazla istek gönderdiniz. Lütfen 1 dakika bekleyip tekrar deneyin.");
      }
      limitInfo.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  }

  const parsedData = styleAdvisorSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error("Geçersiz form verileri.");
  }
  
  // Filter out empty optional fields before sending to the AI
  const input: PersonalizedStyleAdvisorInput = {
    hairType: parsedData.data.hairType,
    desiredLook: parsedData.data.desiredLook,
  };

  if (parsedData.data.faceShape) {
    input.faceShape = parsedData.data.faceShape;
  }
  if (parsedData.data.occasion) {
    input.occasion = parsedData.data.occasion;
  }
  if (parsedData.data.currentStylePreference) {
    input.currentStylePreference = parsedData.data.currentStylePreference;
  }

  try {
    const response = await personalizedStyleAdvisor(input);
    if (!response || !response.summary) {
      throw new Error("AI'dan geçerli bir yanıt alınamadı.");
    }
    return response;
  } catch (error) {
    console.error("Stil danışmanı hatası:", error);
    throw new Error("Stil önerileri alınırken bir sunucu hatası oluştu.");
  }
}
