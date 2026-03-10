"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // initialize router
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="desktop">
      {/* Top Bar */}
      <div className="topbar">
        <span>DeskPage 1.0</span>
        <span>{`${formattedDate}, ${formattedTime}`}</span>
      </div>

      {/* Message Button */}
      <button className="messageBtn">
        <img src="/message.png" alt="message" />
        <p>Message for you</p>
      </button>

      <div className="desktop-content">
        {/* Sidebar */}
        <div className="sidebar">
          <button className="iconBtn">
            <img src="/settings.png" alt="settings" />
            <p>Settings</p>
          </button>

          <button className="iconBtn">
            <img src="/folder.png" alt="files" />
            <p>Files</p>
          </button>

          <button className="iconBtn">
            <img src="/videos.png" alt="videos" />
            <p>Videos</p>
          </button>

          {/* Notes Button with navigation */}
          <button
            className="iconBtn"
            onClick={() => router.push("/home/notes")}
          >
            <img src="/notes.png" alt="notes" />
            <p>Notes</p>
          </button>
        </div>

        {/* Main Desktop Area */}
        <div className="main">
          <img src="/wallpaper.png" alt="cute background" className="wallpaper" />
        </div>
      </div>

      {/* Bottom Dock */}
      <div className="dock"></div>
    </div>
  );
}