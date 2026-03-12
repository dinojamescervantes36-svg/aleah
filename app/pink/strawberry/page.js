"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./strawberry.css";

export default function Strawberry() {
  const router = useRouter();

  const fullLetter = [
    "Hello A!🍓",
    "Strawberry… you know, I can’t stop thinking about how strong you are.",
    "Even on rough days, you handle everything like a boss, and it honestly blows me away 😏💪.",
    "I admire that fire in you… but I also want you to know I’m here to lift you up, steal a frown or two,",
    "and make sure my favorite tough strawberry feels as amazing as she truly is.",
    "You’re unstoppable… and I’m lucky just to be near that strength.",
    "Keep being you, because you’re pretty incredible. And if you ever need a break from being so amazing, I’m just a message away 😉.",
    "-your biggest fan💖"
  ];

  const [displayedLetter, setDisplayedLetter] = useState([""]);
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
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
          setDisplayedLetter(prev => [...prev, ""]);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  const strawberries = new Array(20).fill(0);

  return (
    <div className="page">
      {/* Moving strawberries */}
      <div className="strawberry-container">
        {strawberries.map((_, i) => (
          <img
            key={i}
            src="/pink/strawberry.png"
            className="floating-strawberry"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Letter Card */}
      <div className="container">
        <button
          className="close-btn"
          onClick={() => router.push("/home/notes")}
        >
          ✕
        </button>

        <div className="letter">
          {displayedLetter.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Strawberry Illustration */}
        <div className="strawberry-art">
          {/* floating hearts */}
          <div className="berry-hearts">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* strawberry */}
          <div className="strawberry">
            <div className="seeds"></div>
          </div>

          {/* leaves */}
          <div className="leaf leaf1"></div>
          <div className="leaf leaf2"></div>
          <div className="leaf leaf3"></div>

          {/* shadow */}
          <div className="berry-shadow"></div>
        </div>
      </div>
    </div>
  );
}