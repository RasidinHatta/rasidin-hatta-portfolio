"use client";

import { motion } from "framer-motion";
import { Settings, Sparkles, MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function SettingsPrompt() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="hidden sm:block fixed bottom-20 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg px-4 sm:px-6 py-4 backdrop-blur-md shadow-lg max-w-xs sm:max-w-sm mx-4">
        <div className="flex items-start gap-3">
          <div className="flex gap-2 mt-1 flex-shrink-0">
            <Sparkles className="h-4 w-4 text-yellow-400 flex-shrink-0" />
            <MousePointer2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              Explore Cursor Effect
            </p>
            <p className="text-xs text-muted-foreground mt-1 break-words">
              Click the <Settings className="h-3 w-3 inline mx-1" /> settings button to enable the custom cursor effect.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
