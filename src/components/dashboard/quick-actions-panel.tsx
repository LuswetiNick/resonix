import { quickActions } from "@/data/quick-actions";
import QuickActionCard from "./quick-action-card";

const QuickActionPanel = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Quick actions</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {quickActions.map((action) => (
          <QuickActionCard
            description={action.description}
            gradient={action.gradient}
            href={action.href}
            key={action.title}
            title={action.title}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActionPanel;
