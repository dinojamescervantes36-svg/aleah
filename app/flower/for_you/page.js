"use client";
import { useEffect } from "react";
import "./for_you.css";

export default function Home() {

  useEffect(() => {
    // remove "not-loaded" after mount for animation
    document.body.classList.remove("not-loaded");
  }, []);

  return (
    <div className="night not-loaded">
      <div className="flowers">

        {/* FLOWER 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i+1}`}></div>
            ))}
          </div>

          <div className="flower__line">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i+1}`}></div>
            ))}
          </div>
        </div>

        {/* FLOWER 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            {[1,2,3,4].map(i => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
            ))}
            <div className="flower__white-circle"></div>

            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i+1}`}></div>
            ))}
          </div>

          <div className="flower__line">
            {[1,2,3,4].map(i => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
            ))}
          </div>
        </div>

        {/* FLOWER 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            {[1,2,3,4].map(i => (
              <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
            ))}
            <div className="flower__white-circle"></div>

            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i+1}`}></div>
            ))}
          </div>

          <div className="flower__line">
            {[1,2,3,4].map(i => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
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

        {/* GRASS */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i+1}`}></div>
            ))}
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i+1}`}></div>
            ))}
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

      </div>
    </div>
  );
}