import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Welcome to AI Solutions!\n\nI'm your AI assistant. Ask me anything about our services, blogs, events or contact information.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "⚠️ Unable to connect to the AI server.",
        },
      ]);
    }

    setLoading(false);
  };

  const quickQuestions = [
    "What services do you provide?",
    "Tell me about your latest blogs.",
    "What upcoming events do you have?",
    "How can I contact AI Solutions?",
  ];

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="chat-container">

          <div className="chat-header">
            <div>
              <h3>AI Solutions</h3>
              <span>AI Assistant</span>
            </div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="message bot typing">
                AI is typing...
              </div>
            )}

            <div ref={messagesEndRef}></div>

          </div>

          <div className="quick-buttons">

            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
              >
                {question}
              </button>
            ))}

          </div>

          <div className="chat-input">

            <input
              value={input}
              placeholder="Type your question..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !loading
                ) {
                  sendMessage();
                }
              }}
            />

            <button
              disabled={loading}
              onClick={() => sendMessage()}
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;