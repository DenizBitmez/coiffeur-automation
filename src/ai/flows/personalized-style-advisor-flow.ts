'use server';
/**
 * @fileOverview An AI style advisor that provides personalized recommendations for hairstyles, treatments, and beauty tips.
 *
 * - personalizedStyleAdvisor - A function that handles the personalized style advisory process.
 * - PersonalizedStyleAdvisorInput - The input type for the personalizedStyleAdvisor function.
 * - PersonalizedStyleAdvisorOutput - The return type for the personalizedStyleAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const PersonalizedStyleAdvisorInputSchema = z.object({
  hairType: z.string().describe('The customer\'s hair type (e.g., düz, kıvırcık, dalgalı, ince, kalın, yağlı, kuru, boyalı).'),
  desiredLook: z.string().describe('The customer\'s desired aesthetic or look (e.g., modern, klasik, doğal, cesur, bakımlı).'),
  faceShape: z.string().optional().describe('The customer\'s face shape (e.g., oval, yuvarlak, kare, kalp).'),
  occasion: z.string().optional().describe('The occasion for which the style is desired (e.g., günlük, özel davet, iş).'),
  currentStylePreference: z.string().optional().describe('The customer\'s current style preferences or desired changes (e.g., kısa, uzun, orta boy, saç rengi değişikliği).'),
});
export type PersonalizedStyleAdvisorInput = z.infer<typeof PersonalizedStyleAdvisorInputSchema>;

// Output Schema
const PersonalizedStyleAdvisorOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the personalized style recommendations.'),
  hairstyleRecommendations: z.array(z.object({
    name: z.string().describe('The name of the recommended hairstyle.'),
    description: z.string().describe('A detailed description of the recommended hairstyle, explaining why it suits the customer and how to achieve it.'),
  })).describe('A list of personalized hairstyle recommendations.'),
  treatmentRecommendations: z.array(z.object({
    name: z.string().describe('The name of the recommended hair treatment or beauty service.'),
    description: z.string().describe('A detailed description of the recommended treatment, explaining its benefits and how it can improve the customer\'s hair/beauty.'),
  })).describe('A list of personalized treatment recommendations.'),
  beautyTips: z.array(z.string()).describe('A list of general beauty and styling tips relevant to the customer\'s preferences.'),
});
export type PersonalizedStyleAdvisorOutput = z.infer<typeof PersonalizedStyleAdvisorOutputSchema>;

// Wrapper function
export async function personalizedStyleAdvisor(input: PersonalizedStyleAdvisorInput): Promise<PersonalizedStyleAdvisorOutput> {
  return personalizedStyleAdvisorFlow(input);
}

// Define the prompt
const personalizedStyleAdvisorPrompt = ai.definePrompt({
  name: 'personalizedStyleAdvisorPrompt',
  input: {schema: PersonalizedStyleAdvisorInputSchema},
  output: {schema: PersonalizedStyleAdvisorOutputSchema},
  prompt: `You are an expert style advisor for a beauty salon. Your task is to provide personalized recommendations for hairstyles, treatments, and beauty tips based on the customer's preferences.\n\nCustomer Preferences:\n- Hair Type: {{{hairType}}}\n- Desired Look: {{{desiredLook}}}\n{{#if faceShape}}- Face Shape: {{{faceShape}}}{{/if}}\n{{#if occasion}}- Occasion: {{{occasion}}}{{/if}}\n{{#if currentStylePreference}}- Current Style Preference/Desired Change: {{{currentStylePreference}}}{{/if}}\n\nPlease provide a summary of your recommendations, followed by specific hairstyle recommendations, treatment recommendations, and general beauty tips. Ensure your recommendations are tailored, actionable, and inspiring for a salon customer looking to explore new options.\n\nConsider the following:\n1.  **Hair Type**: How does their hair type influence styling and treatment options?\n2.  **Desired Look**: What styles align with their desired aesthetic?\n3.  **Face Shape (if provided)**: How can hairstyles complement their face shape?\n4.  **Occasion (if provided)**: Are the recommendations suitable for the specified occasion?\n5.  **Current Style (if provided)**: Are the recommendations building upon or changing their current style effectively?\n\nProvide the output in a structured JSON format as described by the output schema.\n`,
});

// Define the flow
const personalizedStyleAdvisorFlow = ai.defineFlow(
  {
    name: 'personalizedStyleAdvisorFlow',
    inputSchema: PersonalizedStyleAdvisorInputSchema,
    outputSchema: PersonalizedStyleAdvisorOutputSchema,
  },
  async (input) => {
    const {output} = await personalizedStyleAdvisorPrompt(input);
    return output!;
  }
);
