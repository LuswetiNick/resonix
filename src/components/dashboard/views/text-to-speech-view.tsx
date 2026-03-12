"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { TTSFormValues } from "@/config/zod-validation";
import { TTSVoicesProvider } from "@/contexts/tts-voices-context";
import { useTRPC } from "@/server/trpc/client";
import SettingsPanel from "../text-to-speech/settings-panel";
import TextInputPanel from "../text-to-speech/text-input-panel";
import TextToSpeechForm, {
  defaultTTSValues,
} from "../text-to-speech/text-to-speech-form";
import VoicePreviewPlaceholder from "../text-to-speech/voice-preview-placeholder";

const TextToSpeechView = ({
  initialValues,
}: {
  initialValues?: Partial<TTSFormValues>;
}) => {
  const trpc = useTRPC();
  const { data: voices } = useSuspenseQuery(trpc.voices.getAll.queryOptions());
  const { custom: customVoices, system: systemVoices } = voices;

  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";

  // Requested voice may no longer exist (deleted); fall back to first available
  const resolvedVoiceId =
    initialValues?.voiceId &&
    allVoices.some((v) => v.id === initialValues.voiceId)
      ? initialValues.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    ...defaultTTSValues,
    ...initialValues,
    voiceId: resolvedVoiceId,
  };
  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm defaultValues={defaultValues}>
        <main className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col space-y-6 p-4 lg:p-8">
            <TextInputPanel />
            <VoicePreviewPlaceholder />
          </div>
          <SettingsPanel />
        </main>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
};

export default TextToSpeechView;
