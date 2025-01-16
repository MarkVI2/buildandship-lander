import { motion } from "framer-motion";

export default function BarTransition({
  onTransitionComplete,
}: {
  onTransitionComplete: () => void;
}) {
  const bars = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 z-50 flex">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-pink-100"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.5,
            ease: [0.45, 0, 0.55, 1],
            delay: i * 0.2,
          }}
          onAnimationComplete={() => {
            if (i === bars.length - 1) {
              onTransitionComplete();
            }
          }}
        />
      ))}
    </div>
  );
}
