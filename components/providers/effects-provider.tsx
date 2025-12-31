"use client";

import React, { createContext, useContext, useState } from "react";
import AnimatedBackground from "../animation/AnimatedBackground";
import TargetCursor from "../react-bits/TargetCursor";

interface EffectsContextType {
  isBackgroundEnabled: boolean;
  isCursorEnabled: boolean;
  toggleBackground: () => void;
  toggleCursor: () => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export function EffectsProvider({ children }: { children: React.ReactNode }) {
  const [isBackgroundEnabled, setIsBackgroundEnabled] = useState(false);
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);

  const toggleBackground = () => setIsBackgroundEnabled((prev) => !prev);
  const toggleCursor = () => setIsCursorEnabled((prev) => !prev);

  return (
    <EffectsContext.Provider
      value={{
        isBackgroundEnabled,
        isCursorEnabled,
        toggleBackground,
        toggleCursor,
      }}
    >
      {isBackgroundEnabled && <AnimatedBackground />}
      {isCursorEnabled && <TargetCursor />}
      {children}
    </EffectsContext.Provider>
  );
}

export const useEffects = () => {
  const context = useContext(EffectsContext);
  if (context === undefined) {
    throw new Error("useEffects must be used within an EffectsProvider");
  }
  return context;
};
