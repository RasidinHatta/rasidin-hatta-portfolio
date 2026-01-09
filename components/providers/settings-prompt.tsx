"use client";

import { motion } from "framer-motion";
import { Settings, Sparkles, MousePointer2 } from "lucide-react";

export default function SettingsPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg px-6 py-4 backdrop-blur-md shadow-lg max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex gap-2 mt-1">
            <Sparkles className="h-4 w-4 text-yellow-400 flex-shrink-0" />
            <MousePointer2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              Explore Effects
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Click the <Settings className="h-3 w-3 inline mx-1" /> settings button to enable background animations and cursor effects.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
