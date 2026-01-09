"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LightPillar from "../react-bits/LightPillar";

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-background" />;

  const isDark = resolvedTheme === "dark";

  // Reduce animation intensity if user prefers reduced motion
  const pillarProps = prefersReducedMotion ? {
    intensity: 0.4,
    rotationSpeed: 0.3,
    glowAmount: 0.003,
    pillarWidth: 4.5,
    pillarHeight: 0.35,
    noiseIntensity: 0.3,
    pillarRotation: 30,
  } : {
    intensity: 0.8,
    rotationSpeed: 0.6,
    glowAmount: 0.006,
    pillarWidth: 4.5,
    pillarHeight: 0.35,
    noiseIntensity: 0.5,
    pillarRotation: 30,
  };

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 h-full w-full ${
            isDark ? "bg-[#040103]" : "bg-[#9575c7]"
          }`}
        >
          <LightPillar
            topColor={isDark ? "#005227" : "#ce465a"}
            bottomColor={isDark ? "#0d7791" : "#48910d"}
            {...pillarProps}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}