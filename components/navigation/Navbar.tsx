"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react";
import Dock from "@/components/ui/dock";
import { navItems } from "@/data/navigation";
import { SettingsMenu } from "../themes/settings-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Navbar Component
export const Navbar = () => {
  const isMobile = useIsMobile();

  const router = useRouter();

  const items = [
    {
      icon: <Home className="size-full" />,
      label: "Home",
      onClick: () => router.push("/"),
      className:
        "hover:bg-blue-100/50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-transparent hover:border-blue-500/20",
    },
    {
      icon: <User className="size-full" />,
      label: "About",
      onClick: () => router.push("/about"),
      className:
        "hover:bg-purple-100/50 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-transparent hover:border-purple-500/20",
    },
    {
      icon: <Briefcase className="size-full" />,
      label: "Projects",
      onClick: () => router.push("/projects"),
      className:
        "hover:bg-pink-100/50 dark:hover:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-transparent hover:border-pink-500/20",
    },
    {
      icon: <Mail className="size-full" />,
      label: "Contact",
      onClick: () => router.push("/contact"),
      className:
        "hover:bg-orange-100/50 dark:hover:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-transparent hover:border-orange-500/20",
    },
  ];

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full pt-4 transition-colors duration-500 md:hidden border-b border-white/20 bg-white/10 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="cursor-target text-lg font-bold text-foreground"
            >
              Rasidin
            </Link>

            <div className="flex items-center gap-2">
              <SettingsMenu />
              <SidebarTrigger className="text-foreground" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full pt-4 transition-colors duration-500 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="cursor-target text-xl font-bold text-foreground"
            >
              Rasidin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
              className="border-white/20 bg-white/10 backdrop-blur-lg rounded-full dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10"
            />
          </div>

          <div className="flex items-center space-x-2">
            <SettingsMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

// Mobile Sidebar Component
export function NavbarSidebar() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Sidebar className="fixed left-0 top-0 h-screen md:hidden overflow-hidden border-r border-white/20 bg-white/10 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10">
      <SidebarHeader className="pt-8 pl-6">
        <Link
          href="/"
          className="cursor-target text-lg font-bold text-foreground"
        >
          Rasidin
        </Link>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <SidebarMenu className="pt-2 pl-5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href} className="cursor-target">
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
