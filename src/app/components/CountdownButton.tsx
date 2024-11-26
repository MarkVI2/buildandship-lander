import { useState, useEffect } from 'react';

interface CountdownButtonProps {
  onComplete: () => void;
}

export default function CountdownButton({ onComplete }: CountdownButtonProps) {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [count, setCount] = useState(3);
  const [buttonState, setButtonState] = useState<'locked' | 'unlocking' | 'unlocked'>('locked');

  const handleClick = () => {
    if (isCountingDown) return;

    if (buttonState === 'locked') {
      setButtonState('unlocking');
      setTimeout(() => {
        setButtonState('unlocked');
      }, 300);
    } else if (buttonState === 'unlocked') {
      setIsCountingDown(true);
    }
  };

  useEffect(() => {
    if (isCountingDown && count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (count === 0) {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
      onComplete();
      // Reset after scrolling
      setTimeout(() => {
        setCount(3);
        setIsCountingDown(false);
        setButtonState('locked');
      }, 1000);
    }
  }, [isCountingDown, count, onComplete]);

  return (
    <div className="relative inline-block">
      {buttonState === 'locked' && (
        <div className="arrow-container">
          {['top-right', 'top-left', 'bottom-right', 'bottom-left'].map((position) => (
            <svg 
              key={position}
              className={`arrow ${position}`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12z" />
            </svg>
          ))}
        </div>
      )}
      <div 
        className={`
          countdown-button-container 
          ${buttonState} 
          ${buttonState === 'locked' ? 'active' : ''} 
          ${isCountingDown ? 'pressed' : ''}
        `}
        onClick={handleClick}
      >
        <button
          className="countdown-button"
          disabled={isCountingDown}
        >
          <span>
            {isCountingDown ? count : "Launch"}
          </span>
        </button>
      </div>
    </div>
  );
}