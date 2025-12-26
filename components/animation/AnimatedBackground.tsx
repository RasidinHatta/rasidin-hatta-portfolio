"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Iridescence from "@/components/react-bits/Iridescence";
import FloatingLines from "@/components/react-bits/FloatingLines";

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
            className="absolute inset-0 h-full w-full"
          >
            <FloatingLines
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={[10, 15, 20]}
              lineDistance={[8, 6, 4]}
              bendRadius={5.0}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
            />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Iridescence
              color={[1, 1, 1]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
