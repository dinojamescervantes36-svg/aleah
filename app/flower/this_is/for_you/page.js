"use client";

import { useEffect } from "react";
import "./this_is.css";

export default function Home() {
  useEffect(() => {
    document.body.classList.remove("not-loaded");
  }, []);

  return (
    <div className="night not-loaded">

      {/* ⭐ STARS */}
      <div className="stars">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* 🌠 SHOOTING STARS */}
      <div className="shooting-stars">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="flowers">

        {/* FLOWER 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`} />
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`} />
            ))}
          </div>

          <div className="flower__line">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
            ))}
          </div>
        </div>

        {/* FLOWER 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`} />
            ))}
            <div className="flower__white-circle"></div>
          </div>

          <div className="flower__line">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
            ))}
          </div>
        </div>

        {/* FLOWER 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`} />
            ))}
            <div className="flower__white-circle"></div>
          </div>

          <div className="flower__line">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
            ))}
          </div>
        </div>

        {/* LONG STEM */}
        <div className="grow-ans" style={{ "--d": "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {/* FRONT LEAVES */}
        <div className="grow-ans" style={{ "--d": "2.8s" }}>
          <div className="flower__g-front">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flower__g-front__leaf-wrapper">
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
            <div className="flower__g-front__line"></div>
          </div>
        </div>

      </div>
    </div>
  );
}