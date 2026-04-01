"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./checkin.css";

export default function CheckIn() {
  const router = useRouter();

  const fullLetter = [
    "Hey, just checking in on you. 💙",
    "Sana okay ka lang.",
    "No pressure magreply, take your time kung kailangan mo ng space.",
    "If ever mabigat lang lahat or gusto mo lang ng kausap, nandito lang ako.",
    "Kahit tahimik lang, okay lang din.",
    "You don't have to handle everything alone, ah.",
    "Take care lagi. 🌸"
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
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="checkin-container">
      <button
        className="close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      <div className="checkin-letter">
        {displayedLetter.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="checkin-decoration">
        <div className="heart-float">💙</div>
        <div className="heart-float">🌸</div>
        <div className="heart-float">✨</div>
      </div>
    </div>
  );
}