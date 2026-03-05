"use client";

import { OrganizationSwitcher, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../animate-ui/components/radix/sidebar";
import { GalleryHorizontalEndIcon } from "../animate-ui/icons/gallery-vertical-end";
import { LayoutDashboardIcon } from "../animate-ui/icons/layout-dashboard";
import { LightbulbIcon } from "../animate-ui/icons/lightbulb";
import { RadioIcon } from "../animate-ui/icons/radio";
import { RouteIcon } from "../animate-ui/icons/route";
import { SettingsIcon } from "../animate-ui/icons/settings";
import { Skeleton } from "../ui/skeleton";

interface MenuItem {
  icon: React.ReactNode;
  onClick?: () => void;
  title: string;
  url?: string;
}

interface NavSectionProps {
  items: MenuItem[];
  label?: string;
  pathname: string;
}

function NavMain({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="text-muted-foreground uppercase">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild={!!item.url}
                className="border border-transparent data-[active=true]:border-border data-[active=true]:shadow-[0px_1px_1px_0px_rgba(44,54,53,0.03),inset_0px_0px_0px_2px_white]"
                isActive={
                  item.url
                    ? item.url === "/dashboard"
                      ? pathname === "/dashboard"
                      : pathname.startsWith(item.url)
                    : false
                }
                onClick={item.onClick}
                tooltip={item.title}
              >
                {item.url ? (
                  <Link href={item.url}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <>
                    {item.icon}
                    <span>{item.title}</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  const clerk = useClerk();
  const mainNav: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon animateOnHover />,
    },
    {
      title: "Explore Voices",
      url: "/dashboard/voices",
      icon: <GalleryHorizontalEndIcon animateOnHover />,
    },
    {
      title: "Text to Speech",
      url: "/dashboard/text-to-speech",
      icon: <RadioIcon animateOnHover />,
    },
    {
      title: "Voice Cloning",
      icon: <RouteIcon animateOnHover />,
    },
  ];
  const othersNav: MenuItem[] = [
    {
      title: "Settings",
      onClick: () => clerk.openOrganizationProfile(),
      icon: <SettingsIcon animateOnHover />,
    },
    {
      title: "Help & Support",
      //   Later change to docs
      url: "mailto:luswetideveloper@gmail.com",
      icon: <LightbulbIcon animateOnHover />,
    },
  ];
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      {...props}
      suppressHydrationWarning
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  organizationSwitcherTrigger:
                    "w-full! justify-between! bg-background! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!",
                  organizationPreview: "gap-2!",
                  organizationPreviewAvatarBox: "size-6! rounded-sm!",
                  organizationPreviewTextContainer:
                    "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                  organizationPreviewMainIdentifier: "text-[13px]!",
                  organizationSwitcherTriggerIcon:
                    "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
                },
              }}
              fallback={
                <Skeleton className="h-8.5 w-full rounded-md border bg-background group-data-[collapsible=icon]:size-8" />
              }
              hidePersonal
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="border-border border-b" />
      <SidebarContent>
        <NavMain items={mainNav} pathname={pathname} />
        <NavMain items={othersNav} label="Other" pathname={pathname} />
      </SidebarContent>
      <div className="border-border border-b" />
      <SidebarFooter className="gap-3">
        <SidebarMenu>
          <SidebarMenuItem suppressHydrationWarning>
            <UserButton
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  userButtonTrigger:
                    "w-full! justify-between! bg-background! border! border-border! rounded-md! pl-1! pr-2! py-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden! [--border:color-mix(in_srgb,transparent,var(--clerk-color-neutral,#000000)_15%)]!",
                  userButtonBox: "flex-row-reverse! gap-2!",
                  userButtonOuterIdentifier:
                    "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                  userButtonAvatarBox: "size-6!",
                },
              }}
              fallback={
                <Skeleton className="h-8.5 w-full rounded-md border border-border bg-background group-data-[collapsible=icon]:size-8" />
              }
              showName
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
