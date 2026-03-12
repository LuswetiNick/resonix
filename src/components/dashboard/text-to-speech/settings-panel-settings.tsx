"use client";

import { useStore } from "@tanstack/react-form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { sliders } from "@/data/sliders";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { ttsFormOptions } from "./text-to-speech-form";
import VoiceSelector from "./voice-selector";

const SettingsPanelSettings = () => {
  const form = useTypedAppFormContext(ttsFormOptions);
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

  return (
    <>
      <div className="border-b p-4">
        <VoiceSelector />
      </div>

      {/* Voice Adjustment Controls */}
      <div className="flex-1 p-4">
        <FieldGroup className="gap-6">
          {sliders.map((slider) => (
            <form.Field key={slider.id} name={slider.id}>
              {(field) => (
                <Field>
                  <FieldLabel>{slider.label}</FieldLabel>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      {slider.leftLabel}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {slider.rightLabel}
                    </span>
                  </div>
                  <Slider
                    className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-track]:h-1 **:data-[slot=slider-thumb]:bg-foreground"
                    disabled={isSubmitting}
                    max={slider.max}
                    min={slider.min}
                    onValueChange={(value) => field.handleChange(value[0])}
                    step={slider.step}
                    value={[field.state.value]}
                  />
                </Field>
              )}
            </form.Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
};

export default SettingsPanelSettings;
