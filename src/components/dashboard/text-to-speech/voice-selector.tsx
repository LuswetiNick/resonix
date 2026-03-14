"use client";
import { useStore } from "@tanstack/react-form";
import { useEffect } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTTSVoices } from "@/contexts/tts-voices-context";
import { VOICE_CATEGORY_LABELS } from "@/data/voices/voice-categories";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { ttsFormOptions } from "./text-to-speech-form";
import { VoiceAvatar } from "./voice-avatar";

const VoiceSelector = () => {
  const { customVoices, systemVoices, allVoices: voices } = useTTSVoices();
  const form = useTypedAppFormContext(ttsFormOptions);
  const voiceId = useStore(form.store, (s) => s.values.voiceId);
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

  const fallbackVoiceId = voices[0]?.id ?? "";
  const selectedVoice = voices.find((v) => v.id === voiceId);
  const hasMissingSelectedVoice = Boolean(voiceId) && !selectedVoice;
  useEffect(() => {
    if (hasMissingSelectedVoice && fallbackVoiceId) {
      form.setFieldValue("voiceId", fallbackVoiceId);
    }
  }, [fallbackVoiceId, form, hasMissingSelectedVoice]);
  const currentVoice = selectedVoice
    ? selectedVoice
    : hasMissingSelectedVoice
      ? {
          id: voiceId,
          name: "Unavailable voice",
          category: null as null,
        }
      : voices[0];

  return (
    <Field>
      <FieldLabel>Voice Style</FieldLabel>
      <Select
        disabled={isSubmitting}
        onValueChange={(v) => form.setFieldValue("voiceId", v)}
        value={voiceId}
      >
        <SelectTrigger className="h-auto w-full gap-1 rounded-lg bg-background px-2 py-1">
          <SelectValue>
            {currentVoice && (
              <>
                <VoiceAvatar name={currentVoice.name} seed={currentVoice.id} />
                <span className="truncate font-medium text-sm tracking-tight">
                  {currentVoice.name}
                  {currentVoice.category &&
                    ` - ${VOICE_CATEGORY_LABELS[currentVoice.category]}`}
                </span>
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {hasMissingSelectedVoice && currentVoice && (
            <>
              <SelectGroup>
                <SelectLabel>Selected Voice</SelectLabel>
                <SelectSeparator />
                <SelectItem value={currentVoice.id}>
                  <VoiceAvatar
                    name={currentVoice.name}
                    seed={currentVoice.id}
                  />
                  <span className="truncate font-medium text-sm">
                    {currentVoice.name}
                    {currentVoice.category &&
                      ` - ${VOICE_CATEGORY_LABELS[currentVoice.category]}`}
                  </span>
                </SelectItem>
              </SelectGroup>
              {(customVoices.length > 0 || systemVoices.length > 0) && (
                <SelectSeparator />
              )}
            </>
          )}
          {customVoices.length > 0 && (
            <SelectGroup>
              <SelectLabel>Team Voices</SelectLabel>
              <SelectSeparator />
              {customVoices.map((v) => (
                <SelectItem key={v.id} value={v.id}>
                  <VoiceAvatar name={v.name} seed={v.id} />
                  <span className="truncate font-medium text-sm">
                    {v.name} - {VOICE_CATEGORY_LABELS[v.category]}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          )}
          {customVoices.length > 0 && systemVoices.length > 0 && (
            <SelectSeparator />
          )}
          {systemVoices.length > 0 && (
            <SelectGroup>
              <SelectLabel>Built-in Voices</SelectLabel>
              <SelectSeparator />
              {systemVoices.map((v) => (
                <SelectItem key={v.id} value={v.id}>
                  <VoiceAvatar name={v.name} seed={v.id} />
                  <span className="truncate font-medium text-sm">
                    {v.name} - {VOICE_CATEGORY_LABELS[v.category]}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          )}
        </SelectContent>
      </Select>
    </Field>
  );
};

export default VoiceSelector;
