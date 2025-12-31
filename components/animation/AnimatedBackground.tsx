"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Iridescence from "@/components/react-bits/Iridescence";
import FloatingLines from "@/components/react-bits/FloatingLines";
import LightPillar from "../react-bits/LightPillar";

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-background" />;
  }

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full bg-[#040103]"
          >
            <LightPillar
              topColor="#005227"
              bottomColor="#0d7791"
              intensity={0.8}
              rotationSpeed={0.6}
              interactive
              glowAmount={0.006}
              pillarWidth={4.5}
              pillarHeight={0.35}
              noiseIntensity={0.5}
              pillarRotation={30}
            />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full bg-[#9575c7]"
          >
            <LightPillar
              topColor="#ce465a"
              bottomColor="#48910d"
              intensity={0.8}
              rotationSpeed={0.6}
              interactive
              glowAmount={0.006}
              pillarWidth={4.5}
              pillarHeight={0.35}
              noiseIntensity={0.5}
              pillarRotation={30}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
