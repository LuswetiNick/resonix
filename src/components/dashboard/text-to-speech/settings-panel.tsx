import { History, Settings } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs";
import SettingsPanelHistory from "./settings-panel-history";
import SettingsPanelSettings from "./settings-panel-settings";

const SettingsPanel = () => {
  return (
    <div className="hidden min-h-0 w-105 flex-col border-l p-4 lg:flex lg:p-8">
      <Tabs
        className="flex h-full min-h-0 flex-col gap-y-0"
        defaultValue="settings"
      >
        <TabsList className="h-12 w-full rounded-none border-b bg-transparent p-0 group-data-[orientation=horizontal]/tabs:h-12">
          <TabsTrigger value="settings">
            <Settings className="size-4" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="history">
            <History className="size-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto"
          value="settings"
        >
          <SettingsPanelSettings />
        </TabsContent>
        <TabsContent
          className="mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto"
          value="history"
        >
          <SettingsPanelHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
