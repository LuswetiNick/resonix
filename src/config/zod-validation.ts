import { z } from "zod";

export const ttsFormSchema = z.object({
  text: z.string().min(1, "Enter some text"),
  voiceId: z.string().min(1, "Select a voice"),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
});
export type TTSFormValues = z.infer<typeof ttsFormSchema>;
