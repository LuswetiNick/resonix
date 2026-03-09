import Link from "next/link";
import type { QuickAction } from "@/data/quick-actions";
import { cn } from "@/lib/utils";
import { Button } from "../animate-ui/components/buttons/button";
import { ArrowRightIcon } from "../animate-ui/icons/arrow-right";

type QuickActionCardProps = QuickAction;
const QuickActionCard = ({
  title,
  description,
  gradient,
  href,
}: QuickActionCardProps) => {
  return (
    <div className="flex gap-4 rounded-xl border bg-card p-3">
      {/* Visual placeholder with gradient */}
      <div
        className={cn(
          "relative h-25 w-25 shrink-0 overflow-hidden rounded-xl bg-linear-to-br",
          gradient
        )}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-white/30" />
        </div>
        <div className="absolute inset-2 rounded-lg ring-2 ring-white/20 ring-inset" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between py-1">
        <div className="space-y-1">
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        </div>
        <Button asChild className="w-fit" size="sm" variant="outline">
          <Link href={href}>
            Try now
            <ArrowRightIcon animate className="size-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActionCard;
