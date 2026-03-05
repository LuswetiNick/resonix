import DashboardHeader from "../dashboard-header";
import QuickActionPanel from "../quick-actions-panel";
import TextInputPanel from "../text-input-panel";

const DashboardView = () => {
  return (
    <main className="relative space-y-6 p-4 lg:p-8">
      <DashboardHeader />
      <TextInputPanel />
      <QuickActionPanel />
    </main>
  );
};

export default DashboardView;
