"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TEXT_MAX_LENGTH } from "@/constants/text-to-speech";
import { Button } from "../animate-ui/components/buttons/button";
import { Disc3Icon } from "../animate-ui/icons/disc-3";
import { UnplugIcon } from "../animate-ui/icons/unplug";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

const TextInputPanel = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const handleGenerate = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    router.push(
      `/dashboard/text-to-speech?text=${encodeURIComponent(trimmed)}`
    );
  };
  return (
    <div className="rounded-2xl border-2 border-border bg-background p-1 shadow-[0px_1px_1px_0px_rgba(44,54,53,0.03),inset_0px_0px_0px_2px_white] dark:shadow-[0px_1px_1px_0px_rgba(44,54,53,0.03),inset_0px_0px_0px_2px_oklch(1_0_0/8%)]">
      <Textarea
        className="min-h-35 resize-none border-0 p-2 shadow-sm outline-none focus-visible:ring-0"
        maxLength={TEXT_MAX_LENGTH}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        value={text}
      />
      {/* Bottom info */}

      <div className="my-2 flex items-center justify-between px-2">
        <Badge className="gap-1.5" variant="outline">
          <Disc3Icon animate className="size-3 text-primary" />
          <span className="text-xs">
            {text.length === 0 ? (
              "Start typing to estimate"
            ) : (
              <>
                <span className="tabular-nums">
                  ${(text.length * 0.0003).toFixed(4)}
                </span>{" "}
                estimated
              </>
            )}
          </span>
        </Badge>
        <span className="text-muted-foreground text-xs">
          {text.length.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()}{" "}
          characters
        </span>
      </div>
      {/* Action Bar */}
      <div className="flex items-center justify-end p-2">
        <Button
          className="w-full md:w-auto"
          disabled={!text.trim()}
          onClick={handleGenerate}
          size="sm"
        >
          <UnplugIcon animateOnHover />
          Generate
        </Button>
      </div>
    </div>
  );
};

export default TextInputPanel;
