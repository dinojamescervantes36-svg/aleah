"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./dress.css";

export default function DressLetter() {
  const router = useRouter();

  const fullLetter = [
    "Hello Designer! 🧵",
    "Your vision... you know, I can’t stop thinking about how you translate fabric into dreams.",
    "Even with complex pleats and difficult patterns, you handle every stitch like a master.",
    "Your craft honestly blows me away. ✨",
    "I admire that creative spark in you… but I also want you to know I’m here to support your artistry.",
    "Your talent is draped in excellence… and I'm lucky just to witness that creativity.",
    "Keep creating masterpieces, because they’re absolutely stunning.",
    "- your dress-code companion ❤️"
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

  return (
    <div className="page">

      {/* CARD */}
      <div className="card">

        <button
          className="close"
          onClick={() => router.push("/home/notes")}
        >
          ✕
        </button>

        {/* TEXT */}
        <div className="letter">
          {displayedLetter.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* ILLUSTRATION */}
        <div className="dress">
          <img src="/designer/design_dress.png" alt="dress"/>
        </div>

      </div>

    </div>
  );
}