"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import type { TTSFormValues } from "@/config/zod-validation";
import { TTSVoicesProvider } from "@/contexts/tts-voices-context";
import { useTRPC } from "@/server/trpc/client";
import SettingsPanel from "../text-to-speech/settings-panel";
import TextInputPanel from "../text-to-speech/text-input-panel";
import TextToSpeechForm from "../text-to-speech/text-to-speech-form";
import { VoicePreviewMobile } from "../text-to-speech/voice-preview-mobile";
import VoicePreviewPanel from "../text-to-speech/voice-preview-panel";

const TextToSpeechDetailView = ({ generationId }: { generationId: string }) => {
  const trpc = useTRPC();
  const [generationQuery, voicesQuery] = useSuspenseQueries({
    queries: [
      trpc.generations.getById.queryOptions({ id: generationId }),
      trpc.voices.getAll.queryOptions(),
    ],
  });

  const data = generationQuery.data;
  const { custom: customVoices, system: systemVoices } = voicesQuery.data;
  const allVoices = [...customVoices, ...systemVoices];

  const fallbackVoiceId = allVoices[0]?.id ?? "";

  // Requested voice may no longer exist (deleted); fall back to first available
  const resolvedVoiceId =
    data?.voiceId && allVoices.some((v) => v.id === data.voiceId)
      ? data.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    text: data.text,
    voiceId: resolvedVoiceId,
    temperature: data.temperature,
    topP: data.topP,
    topK: data.topK,
    repetitionPenalty: data.repetitionPenalty,
  };

  // Use the denormalized voiceName snapshot instead of a populated voice relation
  // so the preview always shows the voice name at the time of generation,
  // even if the voice was later renamed or deleted.
  const generationVoice = {
    id: data.voiceId ?? undefined,
    name: data.voiceName,
  };
  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm defaultValues={defaultValues} key={generationId}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewPanel
              audioUrl={data.audioUrl}
              text={data.text}
              voice={generationVoice}
            />
            <VoicePreviewMobile
              audioUrl={data.audioUrl}
              text={data.text}
              voice={generationVoice}
            />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
};

export default TextToSpeechDetailView;
