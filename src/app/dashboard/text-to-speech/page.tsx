import type { Metadata } from "next";
import TextToSpeechView from "@/components/dashboard/views/text-to-speech-view";

export const metadata: Metadata = { title: "Text to Speech" };

export default function TextToSpeechPage() {
  return <TextToSpeechView />;
}
