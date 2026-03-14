import { History } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SettingsPanelHistory from "./settings-panel-history";

export function HistoryDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button aria-label="Open history" size="sm" variant="outline">
          <History className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>History</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto">
          <SettingsPanelHistory />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
