"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem("hasSubmittedLead");
    const name = sessionStorage.getItem("userName");
    
    if (!hasSubmitted) {
      router.push("/");
    }
    
    if (name) {
      setUserName(name);
    }
  }, [router]);

  return (
    <div>
      <nav style={{ background: "#1e3a8a", padding: "15px 20px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: "white" }}>🎓 RG ARNAV EDU CONSULTANCY</h2>
          <p style={{ color: "#cbd5e1", fontSize: "12px" }}>Welcome, {userName}!</p>
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link href="/colleges" style={{ color: "white", textDecoration: "none" }}>Colleges</Link>
          <Link href="/bihar-credit-card" style={{ color: "white", textDecoration: "none" }}>Bihar Credit Card</Link>
          <button onClick={() => setShowChatbot(!showChatbot)} style={{ background: "#3b82f6", color: "white", border: "none", padding: "5px 15px", borderRadius: "20px", cursor: "pointer" }}>
            💬 Chatbot
          </button>
        </div>
      </nav>

      <div style={{ background: "#eff6ff", padding: "50px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "15px" }}>
          Find Your Perfect College
        </h1>
        <p style={{ fontSize: "18px", color: "#4b5563", maxWidth: "600px", margin: "0 auto" }}>
          Browse 9+ top colleges, 50+ courses, compare fees, and get expert admission guidance
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "40px" }}>🏛️</div>
          <h3 style={{ color: "black" }}>9+ Colleges</h3>
          <p style={{ color: "#6b7280" }}>Top institutions across India</p>
        </div>
        <div style={{ textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "40px" }}>📚</div>
          <h3 style={{ color: "black" }}>50+ Courses</h3>
          <p style={{ color: "#6b7280" }}>Engineering, Medical, Management & more</p>
        </div>
        <div style={{ textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "40px" }}>💰</div>
          <h3 style={{ color: "black" }}>Fee Comparison</h3>
          <p style={{ color: "#6b7280" }}>Compare fees across colleges</p>
        </div>
        <div style={{ textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "40px" }}>🎯</div>
          <h3 style={{ color: "black" }}>Bihar Credit Card</h3>
          <p style={{ color: "#6b7280" }}>Up to ₹4 Lakhs education loan</p>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "50px 20px", background: "#f3f4f6" }}>
        <Link href="/colleges">
          <button style={{ padding: "15px 40px", fontSize: "18px", background: "#3b82f6", color: "white", border: "none", borderRadius: "50px", cursor: "pointer" }}>
            Explore All Colleges →
          </button>
        </Link>
      </div>

      {showChatbot && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", width: "400px", height: "500px", background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", zIndex: 1000 }}>
          <div style={{ background: "#1e3a8a", padding: "10px", borderRadius: "12px 12px 0 0", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "white" }}>Admission Assistant</span>
            <button onClick={() => setShowChatbot(false)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>✕</button>
          </div>
          <iframe
            src="https://project-s479m.vercel.app"
            style={{ width: "100%", height: "calc(100% - 40px)", border: "none", borderRadius: "0 0 12px 12px" }}
            title="Chatbot"
          />
        </div>
      )}
    </div>
  );
}