"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./shared-messages.css";

export default function SharedMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMood, setSelectedMood] = useState("happy");
  const [customMoodName, setCustomMoodName] = useState("");
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [showMoodPicker, setShowMoodPicker] = useState(false);

  // Mood themes with colors and emojis
  const moodThemes = {
    happy: {
      emoji: "😊",
      name: "Happy",
      color: "#FFD700",
      bgGradient: "linear-gradient(135deg, #FFF8DC, #FFE4B5)",
      borderColor: "#FFB347",
    },
    love: {
      emoji: "💕",
      name: "Love",
      color: "#FF1493",
      bgGradient: "linear-gradient(135deg, #FFE4E1, #FFC0CB)",
      borderColor: "#FF69B4",
    },
    thoughtful: {
      emoji: "🤔",
      name: "Thoughtful",
      color: "#4169E1",
      bgGradient: "linear-gradient(135deg, #E0FFFF, #B0E0E6)",
      borderColor: "#6495ED",
    },
    excited: {
      emoji: "🎉",
      name: "Excited",
      color: "#FF6347",
      bgGradient: "linear-gradient(135deg, #FFE4E1, #FF7F50)",
      borderColor: "#FF4500",
    },
    calm: {
      emoji: "😌",
      name: "Calm",
      color: "#20B2AA",
      bgGradient: "linear-gradient(135deg, #F0FFFF, #AFEEEE)",
      borderColor: "#3CB371",
    },
    sad: {
      emoji: "😢",
      name: "Sad",
      color: "#4169E1",
      bgGradient: "linear-gradient(135deg, #E6E6FA, #DDA0DD)",
      borderColor: "#9370DB",
    },
    grateful: {
      emoji: "🙏",
      name: "Grateful",
      color: "#32CD32",
      bgGradient: "linear-gradient(135deg, #F0FFF0, #90EE90)",
      borderColor: "#228B22",
    },
    inspired: {
      emoji: "✨",
      name: "Inspired",
      color: "#FFB6C1",
      bgGradient: "linear-gradient(135deg, #FFF0F5, #FFB6C1)",
      borderColor: "#FF69B4",
    },
  };

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("sharedMessages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.log("Error loading messages");
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("sharedMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleAddMessage = () => {
    if (!newMessage.trim()) return;
    if (!userName.trim()) {
      alert("Please enter your name first");
      return;
    }

    const moodLabel = customMoodName || moodThemes[selectedMood].name;

    const message = {
      id: Date.now(),
      text: newMessage,
      author: userName,
      mood: selectedMood,
      moodLabel: moodLabel,
      moodEmoji: moodThemes[selectedMood].emoji,
      timestamp: new Date().toLocaleString(),
      createdAt: Date.now(),
    };

    setMessages([message, ...messages]);
    setNewMessage("");
    setCustomMoodName("");
  };

  const handleDeleteMessage = (id) => {
    const confirmed = window.confirm("Are you sure you want to permanently delete this message? This cannot be undone.");
    if (confirmed) {
      const updatedMessages = messages.filter((msg) => msg.id !== id);
      setMessages(updatedMessages);
      // Ensure it's saved to localStorage immediately
      localStorage.setItem("sharedMessages", JSON.stringify(updatedMessages));
    }
  };

  const handleSetName = (name) => {
    setUserName(name);
    setShowNameInput(false);
  };

  const filteredMessages =
    activeTab === "all"
      ? messages
      : messages.filter((msg) => msg.mood === activeTab);



  return (
    <div className="shared-messages-container">
      {/* Header */}
      <div className="sm-header">
        <button
          className="back-button"
          onClick={() => router.push("/home/notes")}
        >
          ← Back
        </button>
        <div className="header-content">
          <h1 className="sm-title">Our Messages</h1>
          <p className="sm-subtitle">A space for our thoughts & feelings ✨</p>
        </div>
      </div>

      {/* Name Input Modal */}
      {showNameInput && (
        <div className="name-modal-overlay">
          <div className="name-modal">
            <h2>What's your name?</h2>
            <p>So your messages can be signed with your love 💕</p>
            <input
              type="text"
              placeholder="Enter your name..."
              maxLength="30"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSetName(e.target.value);
                }
              }}
              autoFocus
            />
            <button
              onClick={(e) => {
                const input = e.target.previousElementSibling;
                handleSetName(input.value);
              }}
              className="name-submit-btn"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="sm-content">
        {/* Message Composer */}
        <div className="message-composer">
          <div className="composer-header">
            <h3>Share Your Thoughts</h3>
            {userName && <span className="user-badge">Signed as: {userName}</span>}
          </div>

          {/* Mood Selection */}
          <div className="mood-selector">
            <label>How are you feeling?</label>
            <div className="mood-grid">
              {Object.entries(moodThemes).map(([key, mood]) => (
                <button
                  key={key}
                  className={`mood-btn ${selectedMood === key ? "active" : ""}`}
                  onClick={() => {
                    setSelectedMood(key);
                    setCustomMoodName("");
                  }}
                  style={{
                    borderColor: mood.borderColor,
                    backgroundColor: selectedMood === key ? mood.bgGradient : "transparent",
                  }}
                  title={mood.name}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <span className="mood-label">{mood.name}</span>
                </button>
              ))}
            </div>

            {/* Custom Mood Name */}
            <div className="custom-mood">
              <input
                type="text"
                placeholder="Or name your mood... (optional)"
                value={customMoodName}
                onChange={(e) => setCustomMoodName(e.target.value.slice(0, 20))}
                maxLength="20"
              />
              {customMoodName && (
                <span className="custom-mood-preview">
                  {moodThemes[selectedMood].emoji} {customMoodName}
                </span>
              )}
            </div>
          </div>

          {/* Text Area */}
          <textarea
            className="message-textarea"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write something from your heart..."
            maxLength="500"
          />

          <div className="composer-footer">
            <span className="char-count">
              {newMessage.length}/500
            </span>
            <button
              className="send-btn"
              onClick={handleAddMessage}
              disabled={!newMessage.trim()}
            >
              Send Message 💌
            </button>
          </div>
        </div>

        {/* Messages Display */}
        <div className="messages-section">
          <div className="messages-header">
            <h3>Messages Wall</h3>
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All ({messages.length})
              </button>
              {Object.entries(moodThemes).map(([key, mood]) => (
                <button
                  key={key}
                  className={`tab-btn ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                  style={{
                    borderBottomColor: activeTab === key ? mood.borderColor : "transparent",
                  }}
                >
                  {mood.emoji} ({messages.filter((m) => m.mood === key).length})
                </button>
              ))}
            </div>
          </div>

          {filteredMessages.length === 0 ? (
            <div className="empty-state">
              <p>No messages yet...</p>
              <span>Start sharing your thoughts 💝</span>
            </div>
          ) : (
            <div className="messages-grid">
              {filteredMessages.map((message) => {
                const moodTheme = moodThemes[message.mood];
                return (
                  <div
                    key={message.id}
                    className="message-card"
                    style={{
                      background: moodTheme.bgGradient,
                      borderLeftColor: moodTheme.borderColor,
                    }}
                  >
                    <div className="message-header">
                      <span className="message-author">{message.author}</span>
                      <span className="message-time">{message.timestamp}</span>
                    </div>
                    <p className="message-text">{message.text}</p>
                    <div className="message-footer">
                      <span className="message-mood">
                        {message.moodEmoji} {message.moodLabel}
                      </span>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteMessage(message.id)}
                        title="Delete message"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}