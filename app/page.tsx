"use client";

import Iridescence from "@/components/react-bits/Iridescence";
import FloatingLines from "@/components/react-bits/FloatingLines";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  console.log("theme:", resolvedTheme);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="absolute inset-0 z-0">
        {resolvedTheme === "dark" ? (
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[10, 15, 20]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        ) : (
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        )}
      </div>

      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Hello World
      </p>
    </div>
  );
}
