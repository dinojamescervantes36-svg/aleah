"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./shared-messages.css";

export default function SharedMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

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

    const message = {
      id: Date.now(),
      text: newMessage,
      author: userName,
      category: selectedCategory,
      timestamp: new Date().toLocaleString(),
      createdAt: Date.now(),
    };

    setMessages([message, ...messages]);
    setNewMessage("");
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleSetName = (name) => {
    setUserName(name);
    setShowNameInput(false);
  };

  const filteredMessages =
    activeTab === "all"
      ? messages
      : messages.filter((msg) => msg.category === activeTab);

  const categories = [
    {
      id: "general",
      name: "💭 General Thoughts",
      color: "gradient-purple",
    },
    { id: "running", name: "🏃‍♀️ Running Spirit", color: "gradient-orange" },
    {
      id: "adventure",
      name: "🌍 Adventurous Heart",
      color: "gradient-teal",
    },
  ];

  return (
    <div className="shared-messages-container">
      {/* Header */}
      <div className="sm-header">
        <button
          className="back-button"
          onClick={() => router.push("/home")}
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

          {/* Category Selection */}
          <div className="category-selector">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${
                  selectedCategory === cat.id ? "active" : ""
                } ${cat.color}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
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
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.name.split(" ")[0]} ({messages.filter((m) => m.category === cat.id).length})
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
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`message-card ${message.category}`}
                >
                  <div className="message-header">
                    <span className="message-author">{message.author}</span>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <p className="message-text">{message.text}</p>
                  <div className="message-footer">
                    <span className="message-category">
                      {
                        categories.find((c) => c.id === message.category)
                          ?.name
                      }
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}