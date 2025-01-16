import { motion } from "framer-motion";

export default function CircularText() {
  return (
    <motion.div 
      className="fixed bottom-8 left-8 w-24 h-24 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
          </defs>
          <text className="text-[0.55rem] uppercase tracking-[0.28em] fill-white/60">
            <textPath xlinkHref="#textCircle">
              Scroll to Discover •
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
} 