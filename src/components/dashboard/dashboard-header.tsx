"use client";

import { useUser } from "@clerk/nextjs";

const DashboardHeader = () => {
  const { isLoaded, user } = useUser();
  return (
    <header className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="font-semibold text-xl tracking-tight lg:text-2xl">
          Hello,{" "}
          {isLoaded ? (user?.firstName ?? user?.firstName ?? "there") : "..."}!
        </p>
      </div>
    </header>
  );
};

export default DashboardHeader;
