import { BookOpenIcon, MessageCircleQuestionIcon } from "lucide-react";
import Link from "next/link";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const VoicePreviewPlaceholder = () => {
  return (
    <div className="hidden h-full flex-1 flex-col items-center justify-center gap-6 border-t lg:flex">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MessageCircleQuestionIcon />
          </EmptyMedia>

          <EmptyTitle> Preview will appear here</EmptyTitle>
          <EmptyDescription>
            Once you generate, your audio result will appear here. Sit back and
            relax.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <RippleButton asChild size="sm" variant="secondary">
            <Link href="mailto:resonix@email.com">
              <BookOpenIcon />
              Don&apos;t know how?
            </Link>
          </RippleButton>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default VoicePreviewPlaceholder;
