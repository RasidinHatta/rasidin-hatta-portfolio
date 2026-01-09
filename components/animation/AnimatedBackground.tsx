"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 h-full w-full overflow-hidden`}
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(10, 20, 50, 1) 0%, rgba(30, 10, 50, 1) 25%, rgba(50, 10, 30, 1) 50%, rgba(20, 30, 60, 1) 75%, rgba(10, 20, 50, 1) 100%)"
              : "linear-gradient(135deg, rgba(147, 112, 219, 0.6) 0%, rgba(186, 85, 211, 0.6) 25%, rgba(220, 20, 60, 0.5) 50%, rgba(100, 149, 237, 0.6) 75%, rgba(147, 112, 219, 0.6) 100%)"
          }}
        >
          {/* Animated gradient overlay for depth */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: prefersReducedMotion ? 30 : 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: isDark
                ? "linear-gradient(45deg, rgba(0, 82, 39, 0.3) 0%, rgba(13, 119, 145, 0.3) 100%)"
                : "linear-gradient(45deg, rgba(206, 70, 90, 0.2) 0%, rgba(72, 145, 13, 0.2) 100%)",
              backgroundSize: "200% 200%",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}