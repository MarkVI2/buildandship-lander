"use client";

import React, { useEffect, useState, useCallback, ReactNode } from "react";
import { useWindowSize } from "react-use";

interface InfiniteCarouselProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  itemWidth?: number;
  gap?: number;
  searchMode?: boolean;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  speed = 20,
  direction = "left",
  itemWidth = 280,
  gap = 24, // 1.5rem = 24px
  searchMode = false,
}) => {
  const [loopNum, setLoopNum] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { width } = useWindowSize();

  const calculateLoopNum = useCallback(() => {
    // If in search mode, don't loop content
    if (searchMode) return 1;

    if (!width) return 1;
    const childrenCount = React.Children.count(children);
    if (childrenCount === 0) return 1;

    const calculatedLoops =
      Math.ceil(width / (childrenCount * (itemWidth + gap))) + 1;
    return Math.max(1, Math.floor(calculatedLoops));
  }, [children, width, itemWidth, gap, searchMode]);

  useEffect(() => {
    setLoopNum(calculateLoopNum());
  }, [calculateLoopNum]);

  // Calculate animation duration based on content width
  const duration = React.useMemo(() => {
    const childrenCount = React.Children.count(children);
    return (childrenCount * itemWidth * loopNum) / speed;
  }, [children, itemWidth, loopNum, speed]);

  // Generate unique animation names to prevent conflicts
  const animationName = React.useMemo(() => {
    const random = Math.random().toString(36).substring(7);
    return `scroll${
      direction.charAt(0).toUpperCase() + direction.slice(1)
    }_${random}`;
  }, [direction]);

  return (
    <div
      className={`relative w-full overflow-hidden group ${
        searchMode ? "pointer-events-none" : ""
      }`}
      onMouseEnter={() => !searchMode && setIsHovered(true)}
      onMouseLeave={() => !searchMode && setIsHovered(false)}
      onTouchStart={() => !searchMode && setIsHovered(true)}
      onTouchEnd={() => !searchMode && setIsHovered(false)}
    >
      <div
        className="inline-flex transition-all duration-300 ease-in-out"
        style={{
          animation: searchMode
            ? "none"
            : `${animationName} ${duration}s linear infinite ${
                isHovered ? "paused" : "running"
              }`,
        }}
      >
        {Array.from({ length: loopNum }, (_, idx) => (
          <div key={idx} className="inline-flex" style={{ gap: `${gap}px` }}>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;
              return React.cloneElement(child);
            })}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes ${animationName} {
          0% {
            transform: translateX(
              ${direction === "left"
                ? "0"
                : `calc(-${itemWidth}px * ${React.Children.count(
                    children
                  )} - ${gap}px * ${React.Children.count(children) - 1})`}
            );
          }
          100% {
            transform: translateX(
              ${direction === "left"
                ? `calc(-${itemWidth}px * ${React.Children.count(
                    children
                  )} - ${gap}px * ${React.Children.count(children) - 1})`
                : "0"}
            );
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
