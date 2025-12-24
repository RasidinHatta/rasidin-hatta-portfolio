"use client";

import AnimatedBackground from "@/components/animation/AnimatedBackground";
import { ThemeToggle } from "@/components/themes/theme-toggle";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <AnimatedBackground />

      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Hello World
      </p>
    </div>
  );
}
