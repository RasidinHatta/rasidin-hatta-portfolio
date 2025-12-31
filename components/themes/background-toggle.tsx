"use client";

import { Sparkles } from "lucide-react";
import { useEffects } from "@/components/providers/effects-provider";

export function BackgroundToggle() {
  const { isBackgroundEnabled, toggleBackground } = useEffects();

  return (
    <button
      onClick={toggleBackground}
      className="cursor-target relative rounded-full p-2 bg-transparent transition-colors hover:bg-white/10 dark:hover:bg-white/5"
      aria-label="Toggle background"
    >
      <Sparkles
        className={`h-5 w-5 transition-all ${
          isBackgroundEnabled
            ? "text-yellow-500 fill-yellow-500"
            : "text-muted-foreground opacity-50"
        }`}
      />
    </button>
  );
}
