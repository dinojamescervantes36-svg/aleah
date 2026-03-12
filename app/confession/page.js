"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "./confession.css";

export default function LovePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);
  const typingIntervalRef = useRef(null); // store interval ID

  // Typewriter effect with auto-scroll
  const typeWriterLines = (lines, lineIndex = 0, typedMessage = "") => {
    if (lineIndex >= lines.length) return;

    let i = 0;
    const currentLine = lines[lineIndex];

    typingIntervalRef.current = setInterval(() => {
      typedMessage += currentLine.charAt(i);
      setMessage(typedMessage);

      if (messageRef.current) {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
      }

      i++;
      if (i >= currentLine.length) {
        clearInterval(typingIntervalRef.current);
        typedMessage += "\n\n";
        setMessage(typedMessage);

        if (messageRef.current) {
          messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }

        setTimeout(() => typeWriterLines(lines, lineIndex + 1, typedMessage), 1000);
      }
    }, 80);
  };

  const handleSubmit = () => {
    if (!name) {
      setMessage("Please enter your name!");
      return;
    }

    const loveMessage = [
      `Hey ${name} 😊`,
      "My heart has been quietly whispering something to me for a while now, and I think it’s finally time I say it.",
      "I can’t stop noticing how amazing you are. Yes, you’re honestly very attractive, but… it’s more than that. There’s just something about you that stays on my mind.",
      "Hmm.",
      "hmmmm...",
      "uhmmmmmm... 🤔",
      "I think I like you. ❤️",
      "And not just for one reason — for many.",
      "I like your flaws, your imperfections, and the way they make you perfectly you. I love your personality, your vibe, and the way you somehow brighten the space around you. Your style feels effortless, and your smile… it just makes everything better. 😊",
      "That’s actually why I made this little web-app. I wanted to express what I feel in a way that’s personal and real. Every line of code here carries a bit of my thoughts about you. It’s my own way of showing how much you mean to me.💻❤️",
      "But please don’t feel pressured by this, okay? You don’t have to feel the same way, and that’s completely okay. I just wanted to be honest about how I feel, because keeping it inside didn’t feel right anymore.",
      "No matter what, I genuinely hope you’re happy and doing well. Take care. 🌷"
    ];

    setMessage(""); // reset before typing
    typeWriterLines(loveMessage);
  };

  const handleReset = () => {
    // Stop typing if interval is running
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    setName("");
    setMessage("");
  };

  return (
    <div
      className="lovePage"
      style={{
        backgroundImage: "url('/love/lovee.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    >
      {/* NAVBAR */}
      <div className="navbar">
        <a>HOME</a>
        <a>STORE</a>
        <a>❤ HEARTWORKS STUDIO</a>
        <a>GALLERY</a>
      </div>

      {/* CARD */}
      <div className="container">
        <div className="card">
          <h2>PLEASE ENTER YOUR NAME</h2>
          <div className="heart">❤</div>
          <input
            type="text"
            placeholder="YOUR NAME HERE..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="button-group">
            <button onClick={handleSubmit}>SUBMIT</button>
            <button onClick={handleReset} className="reset-btn">RESET</button>
            <button onClick={() => router.push("/home/notes")} className="home-btn">HOME</button>
          </div>

          {message && (
            <p className="message" ref={messageRef}>
              {message}
            </p>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <span>TERMS &nbsp;&nbsp; PRIVACY</span>
        <span>COPYRIGHT INFO 2010</span>
      </div>
    </div>
  );
}