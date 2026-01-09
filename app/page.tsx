"use client";

import { HeroShowcase } from "@/components/landing/hero-showcase";
import SettingsPrompt from "@/components/providers/settings-prompt";
import { useEffects } from "@/components/providers/effects-provider";

export default function Home() {
  const { isCursorEnabled } = useEffects();

  return (
    <>
      {!isCursorEnabled && <SettingsPrompt />}
      <HeroShowcase />
    </>
  );
}