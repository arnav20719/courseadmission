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

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ENGINEERING", link: "/engineering" },
    { name: "MEDICAL", link: "/medical" },
    { name: "OTHER COURSES", link: "/other-courses" },
    { name: "EXAM FEATURE", link: "/exams" },
    { name: "BIHAR CREDIT CARD", link: "/bihar-credit-card" },
    { name: "FREE COUNSELLING", link: "/counselling" },
    { name: "COLLEGES", link: "/colleges" },
    { name: "COMPARE", link: "/compare" },
  ];

  return (
    <>
      {/* Header Bar */}
      <div style={{ background: "#1a1a2e", padding: "12px 20px", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
          
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🎓</div>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>CourseAdmission</span>
              <span style={{ fontSize: "10px", display: "block", color: "#aaa" }}>RG ARNAV EDU CONSULTANCY</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div style={{ flex: 1, maxWidth: "500px", position: "relative" }}>
            <input 
              type="text" 
              placeholder="Search Colleges, Courses, Exams..." 
              style={{ width: "100%", padding: "12px 50px 12px 20px", borderRadius: "50px", border: "none", fontSize: "14px", outline: "none", background: "rgba(255,255,255,0.15)", color: "white" }} 
            />
            <button style={{ position: "absolute", right: "5px", top: "5px", bottom: "5px", padding: "0 20px", background: "linear-gradient(135deg, #ff6b35, #f7931e)", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", cursor: "pointer" }}>
              Go
            </button>
          </div>

          {/* Auth Buttons - TOP BAR */}
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

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}
          >
            <span style={{ width: "22px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
            <span style={{ width: "18px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
            <span style={{ width: "22px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: "20px", padding: "10px 0", overflowX: "auto", whiteSpace: "nowrap", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "10px" }}>
          {menuItems.map((item, i) => (
            <Link key={i} href={item.link} style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>{item.name}</Link>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE MENU */}
      {isMenuOpen && (
        <>
          {/* Menu Panel - RIGHT SIDE */}
          <div style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "280px",
            height: "100%",
            background: "white",
            zIndex: 2001,
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
            overflowY: "auto"
          }}>
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", padding: "25px 20px", color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "40px" }}>🎓</div>
              <h3 style={{ margin: 0, fontSize: "16px" }}>CourseAdmission</h3>
              <p style={{ margin: "5px 0 0", fontSize: "10px", opacity: 0.8 }}>RG ARNAV EDU CONSULTANCY</p>
            </div>

            {/* Close Button */}
            <button onClick={() => setIsMenuOpen(false)} style={{ position: "absolute", top: "15px", left: "15px", background: "rgba(255,255,255,0.2)", border: "none", color: "white", fontSize: "18px", cursor: "pointer", width: "30px", height: "30px", borderRadius: "15px" }}>✕</button>

            {/* User Info */}
            {isLoggedIn && (
              <div style={{ padding: "15px 20px", background: "#f0f9ff", borderBottom: "1px solid #e2e8f0" }}>
                <p style={{ margin: 0, fontWeight: "bold", color: "#1e3a8a" }}>👋 Welcome, {userName}!</p>
              </div>
            )}

            {/* Menu Items */}
            <div style={{ padding: "10px 0" }}>
              {menuItems.map((item, i) => (
                <Link key={i} href={item.link} onClick={() => setIsMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "14px 20px", color: "#333", textDecoration: "none", fontSize: "15px", fontWeight: "500", borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ fontSize: "20px" }}>
                    {item.name === "HOME" && "🏠"}
                    {item.name === "ENGINEERING" && "🎓"}
                    {item.name === "MEDICAL" && "🩺"}
                    {item.name === "OTHER COURSES" && "📚"}
                    {item.name === "EXAM FEATURE" && "📝"}
                    {item.name === "BIHAR CREDIT CARD" && "💰"}
                    {item.name === "FREE COUNSELLING" && "🎯"}
                    {item.name === "COLLEGES" && "🏛️"}
                    {item.name === "COMPARE" && "📊"}
                  </span>
                  {item.name}
                  <span style={{ marginLeft: "auto", color: "#ccc", fontSize: "14px" }}>›</span>
                </Link>
              ))}
            </div>

            {/* Auth Buttons - IN MENU (BLUE) */}
            {!isLoggedIn && (
              <div style={{ padding: "20px", borderTop: "1px solid #e2e8f0", marginTop: "10px" }}>
                <button 
                  onClick={() => { setShowLogin(true); setIsMenuOpen(false); }} 
                  style={{ 
                    width: "100%", 
                    padding: "14px", 
                    background: "#3b82f6", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "10px", 
                    cursor: "pointer", 
                    fontSize: "16px", 
                    fontWeight: "bold", 
                    marginBottom: "12px" 
                  }}
                >
                  🔐 Login
                </button>
                <button 
                  onClick={() => { setShowSignup(true); setIsMenuOpen(false); }} 
                  style={{ 
                    width: "100%", 
                    padding: "14px", 
                    background: "#10b981", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "10px", 
                    cursor: "pointer", 
                    fontSize: "16px", 
                    fontWeight: "bold" 
                  }}
                >
                  ✨ Sign Up
                </button>
              </div>
            )}

            {isLoggedIn && (
              <div style={{ padding: "20px", borderTop: "1px solid #e2e8f0", marginTop: "10px" }}>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                  style={{ 
                    width: "100%", 
                    padding: "14px", 
                    background: "#dc2626", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "10px", 
                    cursor: "pointer", 
                    fontSize: "16px", 
                    fontWeight: "bold" 
                  }}
                >
                  Logout
                </button>
              </div>
            )}

            {/* Footer */}
            <div style={{ padding: "20px", background: "#f8fafc" }}>
              <p style={{ fontSize: "12px", color: "#666", textAlign: "center", margin: 0 }}>
                Need help? <br/>
                📞 +91-8809976942
              </p>
            </div>
          </div>

          {/* Overlay */}
          <div onClick={() => setIsMenuOpen(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000 }} />
        </>
      )}

      <SignupPopup isOpen={showSignup} onClose={() => setShowSignup(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowSignup(false); }} />
      <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowLogin(false); }} />
    </>
  );
}