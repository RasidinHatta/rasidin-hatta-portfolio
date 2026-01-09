"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { SettingsMenu } from "../themes/settings-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Navbar Component
export const Navbar = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full pt-4 transition-colors duration-500 md:hidden">
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
          <NavigationMenu className="border border-white/20 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10">
            <NavigationMenuList className="flex items-center space-x-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="cursor-target font-medium text-sm text-foreground relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
    <Sidebar className="fixed left-0 top-0 h-screen md:hidden overflow-hidden">
      <SidebarContent className="overflow-hidden">
        <SidebarMenu>
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
