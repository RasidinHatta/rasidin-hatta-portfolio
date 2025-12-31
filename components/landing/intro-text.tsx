import React from "react";
import { AnimatedGroup } from "../animation/AnimatedGroup";
import { AnimatedText } from "../animation/AnimatedText";
import { TypingText } from "../ui/typing-text";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Description from "./desctiption";

interface IntroTextProps {
    heading?: string;
    description?: React.ReactNode;
    buttons?: {
        primary: {
            text: string;
            url: string;
        };
        secondary: {
            text: string;
            url: string;
        };
    };
}

const IntroText = ({
  heading = "Rasidin",
  description = <Description />,
  buttons = {
    primary: { text: "Explore Projects", url: "/projects" },
    secondary: { text: "Get in Touch", url: "/contact" },
  },
}: IntroTextProps) => {
  return (
    <AnimatedGroup
      preset="blur-slide"
      className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left"
    >
      {/* Heading with animated role */}
      <AnimatedText
        as="h1"
        className="text-2xl font-bold text-pretty whitespace-pre-line lg:text-4xl xl:text-5xl leading-tight text-foreground"
      >
        {/* Static Name */}
        <span className="block">{`I'm ${heading}`}</span>

        {/* Animated Role */}
        <span className="inline-flex items-baseline gap-2">
          a
          <span className="min-w-[18ch] inline-flex justify-start">
            <TypingText
              texts={[
                "Full Stack Developer",
                "Network Engineer",
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
  );
};

export default IntroText;
