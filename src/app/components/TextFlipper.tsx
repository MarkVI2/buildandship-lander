"use client";

interface TextFlipperProps {
    words: string[];
    className?: string;
}

export default function TextFlipper({words, className = ""}: TextFlipperProps) {
    return (
        <div className="relative h-16 overflow-hidden inline-block align-bottom">
            <div className="animate-marquee flex flex-col">
                {[...words, ...words, ...words].map((word, index) => (
                    <span
                        key={index}
                        className={`${className} block text-center`}
                        style={{
                            animationDelay: `${index * 2.5}s`,
                            padding: '0.5rem 0',
                        }}
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
}