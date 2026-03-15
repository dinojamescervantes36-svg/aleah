"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./dress.css";

export default function DressLetter() {
  const router = useRouter();

  const fullLetter = [
  "Hello Alleaaaah! ✨",
  "Alam mo ba, nung I see you doodling, it’s like you’re turning boredom into mini masterpieces? Those sketches of yours… honestly, they make me stop and stare. Seryoso, sino'ng mag-aakala na pagod sa klase could look this creative? Kahit na simple lang, bawat linya at bawat curve ng drawing mo shows your amazing talent.",
  "Keep filling your pages, kasi your ideas are way too fun to keep hidden. Huwag kang mag-alala kung may stress or bad vibes sa araw mo tandaan mo, I’m cheering for you! Ang talent mo isn’t just in making dresses or designs it’s in every little thing you create, kahit doodle lang sa notebook mo. apply ka na haha",
  "So keep sketching, keep dreaming, and keep smiling. Take care, and remember, I’m always rooting for you! ❤️",
  "- dino"
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