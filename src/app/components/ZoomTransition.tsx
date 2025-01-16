"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import GrowingText from "./GrowingText";

interface ZoomTransitionProps {
  aboutText: string;
}

export default function ZoomTransition({ aboutText }: ZoomTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [1, 2.5, 5]
  );
  
  const opacity = useTransform(scrollYProgress, 
    [0, 0.4], 
    [1, 0]
  );
  
  const y = useTransform(scrollYProgress, 
    [0, 1], 
    ["0%", "0%"]
  );
  
  const aboutTextOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <>
      <div ref={containerRef} className="h-[100vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            style={{ scale, opacity, y }} 
            className="h-full"
          >
            <GrowingText />
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: aboutTextOpacity }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-2xl px-4 z-20"
        >
          <p className="text-white/80 text-xl leading-relaxed">
            {aboutText}
          </p>
        </motion.div>
      </div>
    </>
  );
}