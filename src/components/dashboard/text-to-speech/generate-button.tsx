"use client";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { LoaderIcon } from "@/components/animate-ui/icons/loader";

const GenerateButton = ({
  size,
  disabled,
  isSubmitting,
  onSubmit,
  className,
}: {
  size?: "default" | "sm";
  disabled: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  className?: string;
}) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={onSubmit}
      size={size}
    >
      {isSubmitting ? (
        <>
          <LoaderIcon animate className="size-3" />
          Generating...
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
};

export default GenerateButton;
