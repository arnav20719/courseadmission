"use client";

import { useState, useRef, useEffect } from "react";
import { faqData } from "@/app/data/faqData";

export default function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "🎓 Hello! Ask me about colleges, courses, fees, Bihar Credit Card, NEET, JEE, or CAT!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    const allFaqs = [
      ...(faqData.biharCreditCard || []),
      ...(faqData.colleges || []),
      ...(faqData.courses || []),
      ...(faqData.exams || []),
      ...(faqData.general || [])
    ];

    for (const faq of allFaqs) {
      let score = 0;
      for (const keyword of faq.keywords) {
        if (lowerQuestion.includes(keyword)) {
          score += 10;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    }

    if (bestMatch && highestScore > 0) {
      return { type: "answer", content: bestMatch.answer };
    }
    
    return { 
      type: "noanswer", 
      content: "📚 I couldn't find a direct answer. Click the WhatsApp button below to chat with our counselor directly!" 
    };
  };

  const sendMessage = () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const result = findAnswer(input);
      setMessages(prev => [...prev, { role: "assistant", content: result.content, type: result.type }]);
      setLoading(false);
    }, 300);
  };

  return (
    <>
      {/* Chat Button - Responsive */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          style={{ 
            position: "fixed", 
            bottom: "20px", 
            right: "20px", 
            width: "clamp(50px, 8vw, 60px)", 
            height: "clamp(50px, 8vw, 60px)", 
            borderRadius: "30px", 
            background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", 
            color: "white", 
            border: "none", 
            fontSize: "clamp(24px, 5vw, 28px)", 
            cursor: "pointer", 
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
          }}
        >
          💬
        </button>
      )}

      {/* Chat Window - Responsive */}
      {isOpen && (
        <div style={{ 
          position: "fixed", 
          bottom: "20px", 
          right: "20px", 
          width: "clamp(320px, 85vw, 420px)", 
          height: "clamp(500px, 70vh, 650px)", 
          background: "white", 
          borderRadius: "20px", 
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)", 
          zIndex: 1001, 
          display: "flex", 
          flexDirection: "column", 
          overflow: "hidden",
          animation: "slideUp 0.3s ease",
        }}>
          
          {/* Header */}
          <div style={{ 
            background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", 
            padding: "clamp(12px, 4vw, 16px)", 
            color: "white", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            flexShrink: 0,
          }}>
            <div>
              <strong style={{ fontSize: "clamp(14px, 4vw, 16px)" }}>🎓 Admission Assistant</strong>
              <p style={{ margin: 0, fontSize: "clamp(10px, 3vw, 11px)", opacity: 0.8 }}>RG ARNAV EDU • Always Free</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ 
                background: "rgba(255,255,255,0.2)", 
                border: "none", 
                color: "white", 
                fontSize: "18px", 
                cursor: "pointer",
                width: "32px",
                height: "32px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ 
            flex: 1, 
            overflowY: "auto", 
            padding: "clamp(12px, 4vw, 16px)", 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px",
            background: "#fafafa",
          }}>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div style={{ 
                  display: "flex", 
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start", 
                  marginBottom: "8px" 
                }}>
                  <div style={{ 
                    maxWidth: "85%", 
                    padding: "clamp(8px, 3vw, 12px) clamp(12px, 4vw, 16px)", 
                    borderRadius: "20px", 
                    background: msg.role === "user" ? "#3b82f6" : "#e5e7eb", 
                    color: msg.role === "user" ? "white" : "black", 
                    fontSize: "clamp(13px, 3.5vw, 14px)", 
                    whiteSpace: "pre-line",
                    wordBreak: "break-word",
                    lineHeight: "1.5",
                  }}>
                    {msg.content}
                  </div>
                </div>
                
                {/* WhatsApp Button - Shows only when bot can't answer */}
                {msg.role === "assistant" && msg.type === "noanswer" && (
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                    <a
                      href="https://wa.me/918809976942?text=Hello%2C%20I%20need%20help%20with%20college%20admission"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#25D366",
                        color: "white",
                        padding: "clamp(8px, 3vw, 10px) clamp(16px, 5vw, 20px)",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "clamp(13px, 3.5vw, 14px)",
                        fontWeight: "bold",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition: "transform 0.2s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <span style={{ fontSize: "clamp(16px, 4vw, 18px)" }}>💬</span>
                      Chat with Counselor on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "8px" }}>
                <div style={{ 
                  background: "#e5e7eb", 
                  padding: "clamp(8px, 3vw, 12px) clamp(12px, 4vw, 16px)", 
                  borderRadius: "20px", 
                  display: "inline-block",
                  fontSize: "clamp(13px, 3.5vw, 14px)",
                }}>
                  <span style={{ display: "flex", gap: "4px" }}>
                    <span style={{ animation: "pulse 1.4s infinite 0s" }}>●</span>
                    <span style={{ animation: "pulse 1.4s infinite 0.2s" }}>●</span>
                    <span style={{ animation: "pulse 1.4s infinite 0.4s" }}>●</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons - Horizontal scroll on mobile */}
          <div style={{ 
            padding: "clamp(10px, 3vw, 14px) clamp(12px, 4vw, 16px)", 
            borderTop: "1px solid #e2e8f0", 
            display: "flex", 
            gap: "8px", 
            flexWrap: "wrap",
            overflowX: "auto",
            whiteSpace: "nowrap",
            background: "#fff", 
            flexShrink: 0,
          }}>
            {[
              { text: "💰 Bihar Credit Card", color: "#3b82f6", query: "Bihar Credit Card" },
              { text: "⚙️ Engineering", color: "#10b981", query: "Engineering colleges" },
              { text: "🩺 Medical", color: "#ef4444", query: "Medical colleges" },
              { text: "📊 MBA", color: "#f59e0b", query: "MBA details" },
              { text: "💰 Minimum Fees", color: "#8b5cf6", query: "Minimum fees" },
              { text: "📝 NEET 2026", color: "#06b6d4", query: "NEET 2026" },
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(btn.query);
                  setTimeout(() => sendMessage(), 100);
                }}
                style={{
                  padding: "clamp(8px, 3vw, 10px) clamp(12px, 4vw, 16px)",
                  background: btn.color,
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "clamp(12px, 3vw, 13px)",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "white",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "opacity 0.2s, transform 0.1s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                {btn.text}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div style={{ 
            padding: "clamp(12px, 4vw, 16px)", 
            borderTop: "1px solid #e2e8f0", 
            display: "flex", 
            gap: "10px", 
            background: "#fff", 
            flexShrink: 0 
          }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === "Enter" && sendMessage()} 
              placeholder="Ask about colleges, exams..." 
              style={{ 
                flex: 1, 
                padding: "clamp(10px, 3.5vw, 12px) clamp(12px, 4vw, 16px)", 
                border: "1px solid #e2e8f0", 
                borderRadius: "30px", 
                outline: "none", 
                fontSize: "clamp(13px, 3.5vw, 14px)",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}
            />
            <button 
              onClick={sendMessage} 
              disabled={loading} 
              style={{ 
                padding: "clamp(10px, 3.5vw, 12px) clamp(16px, 5vw, 20px)", 
                background: loading ? "#94a3b8" : "#3b82f6", 
                color: "white", 
                border: "none", 
                borderRadius: "30px", 
                cursor: loading ? "not-allowed" : "pointer", 
                fontWeight: "bold", 
                fontSize: "clamp(13px, 3.5vw, 14px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = "#2563eb";
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.background = "#3b82f6";
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}