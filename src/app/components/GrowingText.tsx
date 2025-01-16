import { motion } from "framer-motion";

export default function GrowingText() {
  // Change words array to include spaces around &
  const words = ["BUILD ", "& ", "SHIP"];

  return (
    <div className="text-container px-4 sm:px-6">
      <div className="relative inline-block">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[0.15em] max-w-[90vw] sm:max-w-[95vw]">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="flex gap-[0.15em]">
              {word.split("").map((letter, i) => (
                <div key={`${wordIndex}-${i}`} className="relative">
                  <span
                    className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold bg-gradient-to-r from-cyan-200 via-yellow-200 to-cyan-200 text-transparent bg-clip-text bg-[length:300%_100%] animate-gradient tracking-tight"
                    style={{
                      animationDelay: `${(wordIndex * word.length + i) * 0.1}s`,
                      animationDuration: "6s",
                    }}
                  >
                    {letter}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full bg-black"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{
                      duration: 0.5,
                      delay: (wordIndex * word.length + i) * 0.1,
                      ease: [0.45, 0, 0.55, 1],
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <motion.p
          className="
            absolute 
            -bottom-12 sm:-bottom-16 md:-bottom-20 
            left-0 right-0
            text-center md:text-right
            text-white/80 
            text-xs sm:text-sm md:text-base
            tracking-wider
            w-full md:w-auto
            px-4 md:px-0
            max-w-[90vw] md:max-w-none
            mx-auto md:mx-0
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="block">College friends run initiative</span>
          <span className="block font-medium mt-1">BASED IN HYDERABAD</span>
        </motion.p>
      </div>
    </div>
  );
}
