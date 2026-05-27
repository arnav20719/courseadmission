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
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={{ position: "fixed", bottom: "20px", right: "20px", width: "60px", height: "60px", borderRadius: "30px", background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", color: "white", border: "none", fontSize: "28px", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>💬</button>
      )}

      {isOpen && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", width: "380px", height: "600px", background: "white", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", zIndex: 1001, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          
          <div style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", padding: "15px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong>🎓 Admission Assistant</strong>
              <p style={{ margin: 0, fontSize: "11px", opacity: 0.8 }}>RG ARNAV EDU • Always Free</p>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "15px" }}>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: "12px" }}>
                  <div style={{ maxWidth: "80%", padding: "10px 14px", borderRadius: "18px", background: msg.role === "user" ? "#3b82f6" : "#e5e7eb", color: msg.role === "user" ? "white" : "black", fontSize: "14px", whiteSpace: "pre-line" }}>
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
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#25D366",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "bold",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>💬</span>
                      Chat with Counselor on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            ))}
            {loading && <div style={{ textAlign: "left" }}><div style={{ background: "#e5e7eb", padding: "10px 14px", borderRadius: "18px", display: "inline-block" }}>Typing...</div></div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          <div style={{ padding: "12px 15px", borderTop: "1px solid #e2e8f0", display: "flex", gap: "8px", flexWrap: "wrap", background: "#fff", flexShrink: 0 }}>
            <button onClick={() => { setInput("Bihar Credit Card"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#3b82f6", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>💰 Bihar Credit Card</button>
            <button onClick={() => { setInput("Engineering colleges"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#10b981", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>⚙️ Engineering</button>
            <button onClick={() => { setInput("Medical colleges"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#ef4444", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>🩺 Medical</button>
            <button onClick={() => { setInput("MBA details"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#f59e0b", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>📊 MBA</button>
            <button onClick={() => { setInput("Minimum fees"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#8b5cf6", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>💰 Minimum Fees</button>
            <button onClick={() => { setInput("NEET 2026"); setTimeout(() => sendMessage(), 100); }} style={{ padding: "8px 16px", background: "#06b6d4", border: "none", borderRadius: "20px", fontSize: "13px", fontWeight: "600", cursor: "pointer", color: "white" }}>📝 NEET 2026</button>
          </div>

          <div style={{ padding: "15px", borderTop: "1px solid #e2e8f0", display: "flex", gap: "10px", background: "#fff", flexShrink: 0 }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} placeholder="Ask about colleges, exams..." style={{ flex: 1, padding: "12px", border: "1px solid #ccc", borderRadius: "24px", outline: "none", fontSize: "14px" }} />
            <button onClick={sendMessage} disabled={loading} style={{ padding: "10px 18px", background: loading ? "#94a3b8" : "#3b82f6", color: "white", border: "none", borderRadius: "24px", cursor: loading ? "not-allowed" : "pointer", fontWeight: "bold" }}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}