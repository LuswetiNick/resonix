"use client";

import { formOptions } from "@tanstack/react-form";
import { type TTSFormValues, ttsFormSchema } from "@/config/zod-validation";
import { useAppForm } from "@/hooks/use-app-form";

export const defaultTTSValues: TTSFormValues = {
  text: "",
  voiceId: "",
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
};
export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSValues,
});

const TextToSpeechForm = ({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: TTSFormValues;
}) => {
  const form = useAppForm({
    ...ttsFormOptions,
    defaultValues: defaultValues ?? defaultTTSValues,
    validators: {
      onSubmit: ttsFormSchema,
    },
    onSubmit: async () => {
      // TODO: Implement text-to-speech generation logic here
    },
  });
  return <form.AppForm>{children}</form.AppForm>;
};

export default TextToSpeechForm;
