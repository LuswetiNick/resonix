"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useVoiceAvatar } from "./use-voice-avatar";

interface VoiceAvatarProps {
  className?: string;
  name: string;
  seed: string;
}

export function VoiceAvatar({ seed, name, className }: VoiceAvatarProps) {
  const avatarUrl = useVoiceAvatar(seed);

  return (
    <Avatar className={cn("size-4 border-border shadow-xs", className)}>
      <AvatarImage alt={name} src={avatarUrl} />
      <AvatarFallback className="text-[8px]">
        {name.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
