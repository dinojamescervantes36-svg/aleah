"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./book.css";

export default function FlipBookCard() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <div className="container">
      
      {/* Close Button */}
      <button
        className="close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      {/* Book Card */}
      <div
        className={`book-card ${opened ? "opened" : ""}`}
        onClick={() => setOpened(!opened)}
      >
        
        {/* Front Page */}
        <div className="page page-front">
          <div className="page-content">
            <div className="emoji">🎉</div>
            <h1>Congratulations!</h1>
            <p>You Did It! 💪</p>

            <div className="subtitle">
              <span className="star">✨</span>
              Your first digital congratulations card!
              <span className="star">✨</span>
            </div>

            <p className="click-text">Click to open the book →</p>
          </div>
        </div>

        {/* Back Page */}
        <div className="page page-back">
          <div className="page-content">
            <h2>You Are Incredible! 👑</h2>

            <div className="message">
              <p>
                I really adore you for being such a strong, independent woman. 
                Your resilience at determination inspire me every single day.
              </p>

              <p>
                💪 You nailed those exams today! I know it was tough, pero alam kong nasurvive mo ‘yan. 
                Gusto ko rin yung way mo nagsasabi, "the less u care, the more u live" haha.
              </p>

              <p>
                Keep shining bright, beautiful soul. You deserve all the
                happiness and success in the world.
              </p>
            </div>

            <div className="signature">
              <p>With all my admiration,</p>
              <p className="from-text">
                From Someone Who Adores You
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Instruction */}
      <div className="flip-instruction">
        ← Click the card to open the book →
      </div>
    </div>
  );
}