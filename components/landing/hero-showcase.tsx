"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { AnimatedGroup } from "../animation/AnimatedGroup";
import { ReactNode } from "react";
import Description from "./desctiption";
import { Tilt } from "../motion-primitives/tilt";
import { LiquidGlassCard } from "../kokonutui/liquid-glass-card";
import { AnimatedText } from "../animation/AnimatedText";
import { TypingText } from "../ui/typing-text";

interface HeroShowcaseProps {
  heading?: string;
  description?: ReactNode;
  buttons?: {
    primary?: { text: string; url: string };
    secondary?: { text: string; url: string };
  };
}

export function HeroShowcase({
  heading = "Rasidin",
  description = <Description />,
  buttons = {
    primary: { text: "Explore Projects", url: "/projects" },
    secondary: { text: "Get in Touch", url: "/contact" },
  },
}: HeroShowcaseProps) {
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
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        <AnimatedGroup
          preset="blur-slide"
          className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left"
        >
          {/* Heading with animated role */}
          <AnimatedText
            as="h1"
            className="text-2xl font-bold text-pretty whitespace-pre-line lg:text-4xl xl:text-5xl leading-tight dark:[-webkit-text-stroke:1px_var(--color-background)] text-foreground"
          >
            {/* Static Name */}
            <span className="block">{`I'm ${heading}`}</span>

            {/* Animated Role */}
            <span className="inline-flex items-baseline gap-2">
              a
              <span className="min-w-[18ch] inline-flex justify-start">
                <TypingText
                  texts={[
                    "Frontend Developer",
                    "Backend Analyst",
                    "Network Engineer",
                    "UI/UX Designer",
                  ]}
                  className="font-bold text-2xl lg:text-4xl xl:text-5xl whitespace-nowrap inline-flex items-baseline"
                  speed={70}
                  deleteSpeed={40}
                  pauseDuration={1500}
                  loop={true}
                  showCursor={true}
                  cursor="▌"
                  cursorClassName="text-primary font-light scale-x-50"
                />
              </span>
            </span>
          </AnimatedText>

          {/* Description */}
          <AnimatedText
            as="p"
            className="text-foreground/70 mb-8 max-w-xl lg:text-xl font-bold"
            delay={0.12}
          >
            {description}
          </AnimatedText>

          {/* Buttons */}
          <AnimatedGroup
            preset="slide"
            className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            {buttons.primary && (
              <Button
                asChild
                className="cursor-target w-full sm:w-auto text-background rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
            {buttons.secondary && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="cursor-target rounded-full px-8 transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-primary bg-accent text-foreground"
              >
                <Link href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            )}
          </AnimatedGroup>
        </AnimatedGroup>

        <Tilt rotationFactor={8} isRevese>
          <LiquidGlassCard className="p-1 cursor-target">
            <Image
              src="/business-card/business-card-front.png"
              alt="app screen"
              width={2880}
              height={1842}
              className="rounded-2xl"
            />
          </LiquidGlassCard>
        </Tilt>
      </div>
    </motion.section>
  );
}
