"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./spanish_latte.css";

export default function SpanishLatte() {
  const router = useRouter();

  // Full letter content
  const fullLetter = [
    "Hey A! ☕💛",
    "I hope I remind you of the cozy warmth of a Spanish Latte. Just like that perfect cup of coffee, you deserve to be enjoyed slowly sip by sip, moment by moment. Some days may feel heavy, but even the strongest coffee starts from quiet little moments and you make every moment brighter just by being you.",
    "Remember, there’s someone secretly rooting for you, smiling at every little thing you do. 😉 So take it easy today, laugh a little, and know that you’re truly appreciated more than words can say. 🌸",
    "Take it easy today, A.",
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
    <div className="container">
      {/* Close Button */}
      <button
        className="close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      {/* Letter */}
      <div className="Letter">
        {displayedLetter.map((line, index) => (
          <h1 key={index}>{line}</h1>
        ))}
      </div>

      {/* Coffee Illustration */}
      <div className="coffee-art">
        <div className="steam">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="cup">
          <div className="latte">
            <div className="foam"></div>
            <div className="latte-heart"></div>
          </div>
          <div className="handle"></div>
        </div>

        <div className="saucer"></div>
        <div className="shadow"></div>

        <div className="bean" style={{ top: "-35px", right: "-35px" }}></div>
        <div className="bean" style={{ top: "-20px", right: "-50px" }}></div>
        <div className="bean" style={{ top: "-10px", right: "-20px" }}></div>
        <div className="bean" style={{ top: "0px", right: "-60px" }}></div>
      </div>
    </div>
  );
}