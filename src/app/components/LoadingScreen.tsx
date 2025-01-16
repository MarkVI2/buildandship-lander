import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onTransitionStart }: { onTransitionStart: () => void }) {
  const [currentLetter, setCurrentLetter] = useState('B');
  const [isExiting, setIsExiting] = useState(false);
  const letters = ['B', 'N', 'S'];
  
  useEffect(() => {
    let letterIndex = 0;
    
    const interval = setInterval(() => {
      if (letterIndex < letters.length - 1) {
        letterIndex++;
        setCurrentLetter(letters[letterIndex]);
      } else {
        clearInterval(interval);
        // Shorter wait time for the last letter
        setTimeout(() => {
          setIsExiting(true);
          onTransitionStart();
        }, 200);
      }
    }, 200); // Faster letter switching
    
    return () => clearInterval(interval);
  }, [onTransitionStart]);

  return (
    <motion.div 
      className="fixed inset-0 bg-pink-100 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <span 
          className="absolute text-6xl font-bold text-pink-600 transition-opacity duration-300"
          style={{ opacity: 1 }}
        >
          {currentLetter}
        </span>
      </div>
    </motion.div>
  );
} 