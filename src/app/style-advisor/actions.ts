"use server";

import {
  personalizedStyleAdvisor,
  PersonalizedStyleAdvisorInput,
  PersonalizedStyleAdvisorOutput,
} from "@/ai/flows/personalized-style-advisor-flow";
import { z } from "zod";

const styleAdvisorSchema = z.object({
  hairType: z.string(),
  desiredLook: z.string(),
  faceShape: z.string().optional(),
  occasion: z.string().optional(),
  currentStylePreference: z.string().optional(),
});

export type StyleAdvisorResponse = PersonalizedStyleAdvisorOutput;

export async function getStyleAdvice(
  data: unknown
): Promise<StyleAdvisorResponse | null> {
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
