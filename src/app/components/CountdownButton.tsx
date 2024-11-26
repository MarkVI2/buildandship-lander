import { useState, useEffect } from "react";

interface CountdownButtonProps {
  onComplete: () => void;
}

export default function CountdownButton({ onComplete }: CountdownButtonProps) {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [count, setCount] = useState(3);
  const [buttonState, setButtonState] = useState<
    "locked" | "unlocking" | "unlocked"
  >("locked");
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    // Check if button was pressed before
    const wasButtonPressed = localStorage.getItem("buttonPressed");
    if (wasButtonPressed) {
      setShowArrows(false);
    }
  }, []);

  const handleClick = () => {
    if (isCountingDown) return;

    if (buttonState === "locked") {
      setButtonState("unlocking");
      // Store that button was pressed
      localStorage.setItem("buttonPressed", "true");
      setShowArrows(false);
      setTimeout(() => {
        setButtonState("unlocked");
      }, 300);
    } else if (buttonState === "unlocked") {
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
      {buttonState === "locked" && showArrows && (
        <div className="arrow-container">
          {["left", "right"].map((position) => (
            <svg
              key={position}
              className={`arrow ${position}`}
              width="150"
              height="200"
              viewBox="0 0 150 200"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M75 20 L75 0 L65 15 M75 0 L85 15" /* Arrow head */
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={
                  position === "left"
                    ? "M75 0 C75 80, 20 120, 20 200" /* Left curved path - adjusted curve */
                    : "M75 0 C75 80, 130 120, 130 200" /* Right curved path - adjusted curve */
                }
              />
            </svg>
          ))}
        </div>
      )}
      <div
        className={`
          countdown-button-container 
          ${buttonState} 
          ${buttonState === "locked" ? "active" : ""} 
          ${isCountingDown ? "pressed" : ""}
        `}
        onClick={handleClick}>
        <button className="countdown-button" disabled={isCountingDown}>
          <span>{isCountingDown ? count : "Launch"}</span>
        </button>
      </div>
    </div>
  );
}
