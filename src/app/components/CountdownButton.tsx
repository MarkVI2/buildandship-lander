import { useState, useEffect } from "react";

interface CountdownButtonProps {
  onComplete: () => void;
}

export default function CountdownButton({ onComplete }: CountdownButtonProps) {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [count, setCount] = useState(3);
  const [buttonState, setButtonState] = useState<"locked" | "unlocked">(
    "locked"
  );

  const handleClick = () => {
    if (isCountingDown) return;

    if (buttonState === "locked") {
      setButtonState("unlocked");
      setIsCountingDown(true);
    }
  };

  useEffect(() => {
    if (isCountingDown && count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 830);

      return () => clearTimeout(timer);
    }

    if (count === 0) {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
      onComplete();
      // Reset after scrolling
      setTimeout(() => {
        setCount(3);
        setIsCountingDown(false);
        setButtonState("locked");
      }, 1000);
    }
  }, [isCountingDown, count, onComplete]);

  return (
    <div className="relative inline-block">
      {buttonState === "locked" && (
        <div className="arrow-container">
          {["left", "right", "side-left", "side-right"].map((position) => (
            <svg
              key={position}
              className={`arrow ${position}`}
              width="150"
              height="200"
              viewBox="0 0 150 200"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M75 00 L75 0 L65 15 M75 0 L85 15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={
                  position.includes("left")
                    ? "M75 0 C75 80, 20 120, 20 200"
                    : "M75 0 C75 80, 130 120, 130 200"
                }
              />
            </svg>
          ))}
        </div>
      )}
      <button
        className={`
          countdown-button
          ${buttonState} 
          ${buttonState === "locked" ? "active" : ""} 
          ${isCountingDown ? "pressed" : ""}
        `}
        onClick={handleClick}
        disabled={isCountingDown}>
        <span>{isCountingDown ? count : "Launch"}</span>
      </button>
    </div>
  );
}
