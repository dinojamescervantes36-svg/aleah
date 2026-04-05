"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./notes.css";

export default function Notes() {
  const router = useRouter();

  // Sticky note colors
  const stickyColors = ["blue", "yellow", "green", "pink", "orange", "purple"];

  // States
  const [note, setNote] = useState("Hey, just checking in on you. Sana okay ka lang. No pressure magreply, take your time kung kailangan mo ng space.\nIf ever mabigat lang lahat or gusto mo lang ng kausap, nandito lang ako. Kahit tahimik lang, okay lang din. You don't have to handle everything alone, ah. Take care lagi.");
  const [toDoList, setToDoList] = useState([
    "Click Color YELLOW for today (March 10, 2023)",
    "COFFEEE CLICK for a surprise (March 12, 2023)",
    "Click Color Pink for tomorrow (March 13, 2023)",
    "Don't click the heart unless you want to know a secret of me 😉",
    "Click the Dress for a fashion surprise 👗",
    "Go for a run and stay consistent 🏃‍♀️",
    "Click 🎉 Congrats for something special",
    "Click 💙 Check-in to see a care message",
    "I have something special for you, click the flower button 🌸",
  ]);

  const [newToDo, setNewToDo] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Handlers
  const handleNoteChange = (e) => setNote(e.target.value);

  const handleAddToDo = () => {
    if (newToDo.trim() === "") return;
    setToDoList([...toDoList, newToDo.trim()]);
    setNewToDo("");
  };

  // Sticky note navigation
  const handleStickyClick = (color) => {
    if (color === "pink") {
      router.push("/pink/strawberry");
    } else {
      router.push(`/flower/${color}`);
    }
  };

  const handleCoffeeClick = () => {
    router.push("/coffee/spanish_latte");
  };

  const handleRedHeartClick = () => {
    router.push("/confession");
  };

  const handleDressClick = () => {
    router.push("/designer/dress");
  };

  const handleRunClick = () => {
    router.push("/running");
  };

  // 🎉 NEW: Congrats handler
  const handleCongratsClick = () => {
    router.push("/congrats");
  };

  // 🌸
  const handleSurpriseClick = () => {
    router.push("/flower/for_you");
  };

  return (
    <div className="notes-container">

      {/* Header */}
      <div className="notes-header">

        <button
          className="back-btn"
          onClick={() => router.push("/home")}
        >
          ← Back
        </button>

        <h2>Notes</h2>

        <span className="date">
          {currentTime.toLocaleDateString("en-US", {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>

      </div>

      {/* Note input */}
      <textarea
        className="note-input"
        value={note}
        onChange={handleNoteChange}
        placeholder="Type your note..."
      />

      {/* Sticky note icons */}
      <div className="sticky-icons">

        {stickyColors.map((color) => (
          <div
            key={color}
            className={`sticky ${color}`}
            onClick={() => handleStickyClick(color)}
          ></div>
        ))}

        {/* Dress */}
        <div
          className="sticky dress"
          onClick={handleDressClick}
          title="Dress Designer"
        ></div>

        {/* Coffee */}
        <div
          className="sticky coffee"
          onClick={handleCoffeeClick}
          title="Spanish Latte"
        >
          ☕
        </div>

        {/* Heart */}
        <div
          className="sticky red-heart"
          onClick={handleRedHeartClick}
          title="Confession ❤️"
        ></div>

        {/* Running */}
        <div
          className="sticky running"
          onClick={handleRunClick}
          title="Running Motivation"
        >
          👟
        </div>

        {/* 🎉 NEW: Congrats */}
        <div
          className="sticky congrats"
          onClick={handleCongratsClick}
          title="Congratulations 🎉"
        >
          🎉
        </div>

        {/* 💙 Check-in */}
        <div
          className="sticky checkin"
          onClick={() => router.push("/checkin")}
          title="Check In Message"
        >
          💙
        </div>

        {/* Surprice */}
        <div
          className="sticky surprise"
          onClick={handleSurpriseClick}
          title="surprise"
        >
          🌸
        </div>

      </div>

      {/* To-Do List */}
      <div className="todo-list">

        <h4>To-Do List</h4>

        <ul>
          {toDoList.map((item, index) => (
            <li
              key={index}
              className={
                item.includes("COFFEEE CLICK")
                  ? "coffee-text"
                  : item.includes("Click Color Pink")
                  ? "pink-text"
                  : item.includes("heart")
                  ? "red-heart-text"
                  : item.includes("Dress")
                  ? "dress-text"
                  : item.includes("run") || item.includes("Run")
                  ? "running-text"
                  : item.includes("Congrats")
                  ? "congrats-text"
                  : item.includes("Check-in")
                  ? "checkin-text"
                  : item.includes("surprise")
                  ? "surprise-text"
                  : item.includes("flower") || item.includes("special")
                  ? "surprise-text"
                  : ""
              }
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="todo-input">

          <input
            type="text"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            placeholder="Add new task..."
          />

          <button onClick={handleAddToDo}>
            Add
          </button>

        </div>

      </div>

      {/* Footer */}
      <div className="notes-footer">

        <span className="time">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        <div className="characters">
          <div className="character-item">🐻</div>
          <div className="character-item">🐕</div>
        </div>

      </div>

    </div>
  );
}