import { motion } from "framer-motion";
import { LiquidGlassCard } from "../kokonutui/liquid-glass-card";
import { Tilt } from "../motion-primitives/tilt";
import { useState } from "react";
import Image from "next/image";

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        className="cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ backfaceVisibility: "hidden" }}>
            <LiquidGlassCard className="p-1 cursor-target">
              <Image
                src="/business-card/business-card-front.png"
                alt="app screen front"
                width={2880}
                height={1842}
                className="rounded-2xl"
              />
            </LiquidGlassCard>
          </div>
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <LiquidGlassCard className="p-1 cursor-target h-full">
              <Image
                src="/business-card/business-card-back.png"
                alt="app screen back"
                width={2880}
                height={1842}
                className="rounded-2xl h-full w-full object-cover"
              />
            </LiquidGlassCard>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

export default BusinessCard;
