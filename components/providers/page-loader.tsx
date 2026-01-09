"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (hasVisited) {
      setShouldShow(false);
      return;
    }

    // Mark as visited
    localStorage.setItem("hasVisitedBefore", "true");

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 30;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!shouldShow || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full px-8">
        <motion.div
          className="flex justify-center"
        >
          <Image
            src="/rainbow-cat.gif"
            alt="Loading"
            width={150}
            height={150}
            priority
            unoptimized
            loading="eager"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-3 w-full max-w-xs">
          <motion.p
            className="text-lg font-semibold text-foreground"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.p>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
