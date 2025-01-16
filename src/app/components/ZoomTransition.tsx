"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GrowingText from "./GrowingText";
import { useIsMobile } from "../../utils/useIsMobile";

interface ZoomTransitionProps {
  aboutText: string;
}

export default function ZoomTransition({ aboutText }: ZoomTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isMobile = useIsMobile();

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, isMobile ? 2.5 : 4] // Increase these values to zoom in instead of out
  );

  // Earlier fade out for initial content
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "-10%"] // Add slight upward movement for depth
  );

  const z = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 100] // Add z-axis transform
  );

  // Earlier fade in for about text
  const aboutTextOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.8, 0.9], // Adjusted thresholds
    [0, 1, 1, 0] // Fade in/out values
  );

  return (
    <>
      <div
        ref={containerRef}
        className="h-[300vh] w-full" // Change from 100vh to 200vh to allow scrolling
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            className="h-full w-full flex items-center justify-center"
            style={{
              scale: scale,
              opacity: opacity,
              y: y,
              z: z,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              transformOrigin: "center center",
            }}
          >
            <GrowingText />
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: aboutTextOpacity }}
          className="
            fixed 
            top-1/2 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-1/2 
            text-center 
            w-full
            max-w-[90vw]
            sm:max-w-xl
            md:max-w-2xl
            px-4 
            sm:px-6 
            z-20
          "
        >
          <p
            className="
            text-white/80 
            text-base 
            sm:text-lg 
            md:text-xl 
            leading-relaxed
            sm:leading-relaxed
            md:leading-relaxed
          "
          >
            {aboutText}
          </p>
        </motion.div>
      </div>
    </>
  );
}
