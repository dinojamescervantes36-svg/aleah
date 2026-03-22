"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./running.css";

export default function RunningNote() {
  const router = useRouter();

  // Full letter content
  const fullLetter = [
    "Hey Aleah!!",
    "You’ve got that kind of drive not everyone has. Every time you run, you’re showing discipline, focus, and grit. It’s not just about the distance it’s about proving to yourself that you can handle more than most people would even try.",
    "I respect the way you keep going, even when it’s tough. That consistency says a lot about you. Keep pushing forward and chasing what you want, you’ve already shown you’ve got what it takes.",
    "Keep running towards your dreams, because you've already proven you can go the distance. I'm cheering for you every step of the way. 🏃‍♀️✨",
    "- Dino"
  ];

  const [displayedLetter, setDisplayedLetter] = useState([""]); // typed content
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < fullLetter.length) {
      if (charIndex < fullLetter[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedLetter(prev => {
            const newLines = [...prev];
            newLines[lineIndex] += fullLetter[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex(charIndex + 1);
        }, 30); // typing speed in ms
        return () => clearTimeout(timeout);
      } else {
        // move to next line after a short delay
        const timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
          setDisplayedLetter(prev => [...prev, ""]);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="running-container">
      {/* Close Button */}
      <button
        className="running-close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      {/* Letter */}
      <div className="running-letter">
        {displayedLetter.map((line, index) => (
          <h1 key={index}>{line}</h1>
        ))}
      </div>

      {/* Running Illustration */}
      <div className="running-art">
        {/* Running person */}
        <div className="runner">
          <div className="runner-head"></div>
          <div className="runner-body"></div>
          <div className="runner-legs">
            <div className="leg leg-front"></div>
            <div className="leg leg-back"></div>
          </div>
          <div className="runner-arms">
            <div className="arm arm-front"></div>
            <div className="arm arm-back"></div>
          </div>
        </div>

        {/* Motion lines */}
        <div className="motion-lines">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </div>

        {/* Sparkles */}
        <div className="sparkles">
          <span className="sparkle sparkle-1"></span>
          <span className="sparkle sparkle-2"></span>
          <span className="sparkle sparkle-3"></span>
        </div>

        {/* Shadow */}
        <div className="running-shadow"></div>
      </div>
    </div>
  );
}