"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./for_you.css";

export default function ForYou() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="for-you-container">
      {/* Close Button */}
      <button
        className="close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
      </div>

      {/* Main Content */}
      <div className="message-box">
        {/* Decorative petals */}
        <div className="petal petal-1">🌸</div>
        <div className="petal petal-2">🌸</div>
        <div className="petal petal-3">🌸</div>

        {/* Message */}
        <div className={`message-content ${showMessage ? 'show' : ''}`}>
          <h1>This is for you</h1>
          <p>
            Just a little reminder that you're special and deserve 
            all the good things coming your way. 💕
          </p>
          <p>
            Take a moment to breathe, smile, and know that you're 
            appreciated more than you realize.
          </p>
          <p className="signature">✨ Always here for you ✨</p>
          <button
                className="flower-btn"
                 onClick={() => router.push("/flower/this_is/for_you")}
                  >
                  click here I have someting for you
            </button>
        </div>
      </div>
    </div>
  );
}