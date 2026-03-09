import SettingsPanel from "../text-to-speech/settings-panel";
import TextInputPanel from "../text-to-speech/text-input-panel";
import TextToSpeechForm from "../text-to-speech/text-to-speech-form";
import VoicePreviewPlaceholder from "../text-to-speech/voice-preview-placeholder";

const TextToSpeechView = () => {
  return (
    <TextToSpeechForm>
      <main className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col space-y-6 p-4 lg:p-8">
          <TextInputPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </main>
    </TextToSpeechForm>
  );
};

export default TextToSpeechView;
