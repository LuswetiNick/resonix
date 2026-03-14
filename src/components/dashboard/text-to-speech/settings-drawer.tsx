import { Settings } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SettingsPanelSettings from "./settings-panel-settings";

interface SettingsDrawerProps {
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function SettingsDrawer({
  open,
  onOpenChange,
  children,
}: SettingsDrawerProps) {
  return (
    <Drawer onOpenChange={onOpenChange} open={open}>
      {children ?? (
        <DrawerTrigger asChild>
          <Button aria-label="Open settings" size="sm" variant="outline">
            <Settings className="size-4" />
          </Button>
        </DrawerTrigger>
      )}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto">
          <SettingsPanelSettings />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
