import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useState, useEffect } from "react";

interface CarouselProps {
  profiles: Profile[];
  speed: number;
  direction?: "ltr" | "rtl";
  variant?: "profile" | "question" | "statement";
  questionPrompts?: string[];
  statementPrompts?: string[];
}

export const ProfileCarousel: React.FC<CarouselProps> = ({
  profiles,
  speed,
  direction = "ltr",
  variant = "profile",
  questionPrompts = [],
  statementPrompts = [],
}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      direction,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed })]
  );

  // Remove the useEffect and state variables for prompt indices

  const getDuplicatedItems = () => {
    if (variant === "profile") {
      return [...profiles, ...profiles];
    }
    if (variant === "question") {
      const duplicated = [...questionPrompts, ...questionPrompts];
      return duplicated.map((prompt, index) => ({ id: index, prompt }));
    }
    const duplicated = [...statementPrompts, ...statementPrompts];
    return duplicated.map((prompt, index) => ({ id: index, prompt }));
  };

  return (
    <div className="overflow-hidden text-sm" ref={emblaRef}>
      <div className="flex gap-4">
        {getDuplicatedItems().map((item, index) => (
          <div key={`${variant}-${index}`} className="flex-[0_0_280px] mx-2">
            <div className="p-4 rounded-xl relative bg-gradient-to-br from-gray-50 to-white/80 backdrop-blur-lg border border-gray-100">
              {variant === "profile" ? (
                // Profile content
                <>
                  <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {(item as Profile).name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 text-clip">
                    {(item as Profile).bio}
                  </p>
                </>
              ) : variant === "question" ? (
                // Question content
                <div className="space-y-1">
                  <div className="text-xs text-blue-400">What's your...</div>
                  <h3 className="text-sm font-medium text-gray-700">
                    {(item as { prompt: string }).prompt}
                  </h3>
                </div>
              ) : (
                // Statement content
                <div className="text-center">
                  <div className="text-sm bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    {(item as { prompt: string }).prompt}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
