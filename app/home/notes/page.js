"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./notes.css";

export default function Notes() {
  const router = useRouter();

  // Sticky note colors
  const stickyColors = ["blue", "yellow", "green", "pink", "orange", "purple"];

  // States
  const [note, setNote] = useState("");
  const [toDoList, setToDoList] = useState([
    "Click Color YELLOW for today (March 10, 2023)",
    "COFFEEE CLICK for a surprise (March 12, 2023)",
    "Click Color Pink for tomorrow (March 13, 2023)",
    "Don't click the heart unless you want to know a secret of me 😉",
    "Click the Dress for a fashion surprise 👗"
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

        {/* Dress Sticky */}
        <div
          className="sticky dress"
          onClick={handleDressClick}
          title="Dress Designer"
        ></div>

        {/* Coffee Sticky */}
        <div
          className="sticky coffee"
          onClick={handleCoffeeClick}
          title="Spanish Latte"
        >
          <span></span>
        </div>

        {/* Red Heart Sticky */}
        <div
          className="sticky red-heart"
          onClick={handleRedHeartClick}
          title="Confession ❤️"
        ></div>

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
          <div className="bear"></div>
          <div className="dog"></div>
        </div>

      </div>

    </div>
  );
}