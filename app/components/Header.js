"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true" && name) {
      setUserName(name);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserName("");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/colleges?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const menuItems = [
    { name: "ENGINEERING", link: "/engineering" },
    { name: "MEDICAL", link: "/medical" },
    { name: "OTHER COURSES", link: "/other-courses" },
    { name: "EXAM FEATURE", link: "/exams" },
    { name: "BIHAR CREDIT CARD", link: "/bihar-credit-card" },
    { name: "FREE COUNSELLING", link: "/counselling" },
  ];

  return (
    <>
      <div style={{ background: "#1a1a2e", padding: "12px 20px", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
          
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🎓</div>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>CourseAdmission</span>
              <span style={{ fontSize: "10px", display: "block", color: "#aaa" }}>RG ARNAV EDU CONSULTANCY</span>
            </div>
          </Link>

          <div style={{ flex: 1, maxWidth: "500px", position: "relative" }}>
            <input 
              type="text" 
              placeholder="🔍 Search Colleges, Courses, Exams..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              style={{ width: "100%", padding: "12px 50px 12px 20px", borderRadius: "50px", border: "none", fontSize: "14px", outline: "none", background: "rgba(255,255,255,0.15)", color: "white" }} 
            />
            <button 
              onClick={handleSearch}
              style={{ position: "absolute", right: "5px", top: "5px", bottom: "5px", padding: "0 20px", background: "linear-gradient(135deg, #ff6b35, #f7931e)", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", cursor: "pointer" }}
            >
              Go
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {isLoggedIn ? (
              <>
                <span style={{ color: "white", fontSize: "14px" }}>👋 Welcome, {userName}!</span>
                <button onClick={handleLogout} style={{ background: "#dc2626", color: "white", border: "none", padding: "8px 20px", borderRadius: "25px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} style={{ background: "transparent", border: "1px solid #ff6b35", color: "#ff6b35", padding: "8px 20px", borderRadius: "25px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>Login</button>
                <button onClick={() => setShowSignup(true)} style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", color: "white", border: "none", padding: "8px 20px", borderRadius: "25px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>Sign Up</button>
              </>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: "none", border: "none", color: "white", fontSize: "24px", cursor: "pointer" }}>☰</button>
        </div>

        <div style={{ display: "flex", gap: "20px", padding: "10px 0", overflowX: "auto", whiteSpace: "nowrap", justifyContent: "center" }}>
          {menuItems.map((item, i) => (
            <Link key={i} href={item.link} style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>{item.name} ▼</Link>
          ))}
        </div>
      </div>

      <SignupPopup isOpen={showSignup} onClose={() => setShowSignup(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowSignup(false); }} />
      <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowLogin(false); }} />
    </>
  );
}