"use client";

import { memo } from "react";
import IntroText from "./intro-text";
import { motion } from "motion/react";
import BusinessCard from "./business-card";

const MemoizedIntroText = memo(IntroText);

export function HeroShowcase() {
  return (
    <motion.section
      className="
          relative overflow-hidden 
          bg-transparent
          transition-colors duration-300
        "
      initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", bounce: 0.32, duration: 0.9 }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 md:gap-10 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-20">
        <MemoizedIntroText />
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <BusinessCard />
        </div>
      </div>
    </motion.section>
  );
}
