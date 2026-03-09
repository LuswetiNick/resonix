import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../animate-ui/components/animate/tooltip";
import { Button } from "../animate-ui/components/buttons/button";
import { ThemeTogglerButton } from "../animate-ui/components/buttons/theme-toggler";
import { SidebarTrigger } from "../animate-ui/components/radix/sidebar";
import { CrossIcon } from "../animate-ui/icons/cross";
import { MessageCircleHeartIcon } from "../animate-ui/icons/message-circle-heart";
import { Separator } from "../ui/separator";
import DashboardBreadcrumb from "./dashboard-breadcrumb";

const SiteHeader = () => {
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-2 border-b px-4 py-2.5"
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator className="mx-2 self-stretch" orientation="vertical" />
        <DashboardBreadcrumb />
      </div>

      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="sm" variant="outline">
              <Link href="mailto:contact@example.com">
                <MessageCircleHeartIcon animateOnHover />
                <span className="hidden md:block">Feedback</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="md:hidden">Feedback</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="sm" variant="outline">
              <Link href="mailto:contact@example.com">
                <CrossIcon animateOnHover />
                <span className="hidden md:block">Need help?</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="md:hidden">Need help?</TooltipContent>
        </Tooltip>
        <ThemeTogglerButton
          size="sm"
          suppressHydrationWarning
          variant="outline"
        />
      </div>
    </header>
  );
};

export default SiteHeader;
