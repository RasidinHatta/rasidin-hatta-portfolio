"use client";

import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { ThemeToggle } from "../themes/theme-toggle";

// Navbar Component
export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full pt-4 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="cursor-target text-xl font-bold text-foreground">
              Rasidin
            </Link>
          </div>

          {/* Navigation Items */}
          <NavigationMenu className="border border-white/10 bg-white/5 backdrop-blur-lg rounded-full px-6 py-2 dark:border-white/5 dark:bg-black/5 supports-backdrop-filter:bg-white/5">
            <NavigationMenuList className="flex items-center space-x-6">
              {/* Map regular nav items */}
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
