import { motion } from "framer-motion";

export default function GrowingText() {
  const text = "BUILD&SHIP";
  const letters = text.split('');
  
  return (
    <div className="text-container">
      <div className="relative inline-block">
        <div className="flex gap-[0.15em]">
          {letters.map((letter, i) => (
            <div key={i} className="relative">
              <span 
                className="text-[8rem] font-bold bg-gradient-to-r from-cyan-200 via-yellow-200 to-cyan-200 text-transparent bg-clip-text bg-[length:300%_100%] animate-gradient tracking-tight"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '6s'
                }}
              >
                {letter}
              </span>
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-black"
                initial={{ height: '100%' }}
                animate={{ height: '0%' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.45, 0, 0.55, 1],
                }}
              />
            </div>
          ))}
        </div>
        <motion.p 
          className="absolute -bottom-16 right-0 text-white/80 text-lg tracking-wide text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          College friends run initiative<br />
          BASED IN HYDERABAD
        </motion.p>
      </div>
    </div>
  );
}