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
      {/* Header */}
      <div style={{
        background: "#1a1a2e",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}>
        {/* Top Row */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(135deg, #ff6b35, #f7931e)",
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}>🎓</div>
            <div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>CourseAdmission</span>
              <span style={{ fontSize: "10px", display: "block", color: "#aaa" }}>RG ARNAV EDU CONSULTANCY</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div style={{
            flex: 1,
            maxWidth: "350px",
            position: "relative",
          }}>
            <input
              type="text"
              placeholder="Search Colleges, Courses..."
              style={{
                width: "100%",
                padding: "10px 45px 10px 16px",
                borderRadius: "50px",
                border: "none",
                fontSize: "14px",
                background: "rgba(255,255,255,0.15)",
                color: "white",
              }}
            />
            <button style={{
              position: "absolute",
              right: "5px",
              top: "4px",
              bottom: "4px",
              padding: "0 16px",
              background: "linear-gradient(135deg, #ff6b35, #f7931e)",
              border: "none",
              borderRadius: "50px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}>Go</button>
          </div>

          {/* Auth Buttons */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {isLoggedIn ? (
              <>
                <span style={{ color: "white", fontSize: "13px" }}>Hi, {userName}</span>
                <button onClick={handleLogout} style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "6px 16px",
                  borderRadius: "40px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} style={{
                  background: "transparent",
                  border: "1px solid #ff6b35",
                  color: "#ff6b35",
                  padding: "6px 16px",
                  borderRadius: "40px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                }}>Login</button>
                <button onClick={() => setShowSignup(true)} style={{
                  background: "linear-gradient(135deg, #ff6b35, #f7931e)",
                  border: "none",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "40px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                }}>Sign Up</button>
              </>
            )}
          </div>

          {/* HAMBURGER MENU BUTTON - ALWAYS VISIBLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <span style={{ width: "22px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
            <span style={{ width: "18px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
            <span style={{ width: "22px", height: "2.5px", background: "white", borderRadius: "2px", display: "block" }}></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          {menuItems.map((item, i) => (
            <Link key={i} href={item.link} style={{
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              padding: "5px 0",
            }}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 1999,
            }}
          />
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: "280px",
            background: "white",
            zIndex: 2000,
            boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
            overflowY: "auto",
          }}>
            <div style={{
              background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
              padding: "25px 20px",
              color: "white",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "40px" }}>🎓</div>
              <h3 style={{ margin: 0, fontSize: "16px" }}>CourseAdmission</h3>
              <p style={{ margin: "5px 0 0", fontSize: "10px", opacity: 0.8 }}>RG ARNAV EDU CONSULTANCY</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  borderRadius: "15px",
                }}
              >
                ✕
              </button>
            </div>

            {isLoggedIn && (
              <div style={{ padding: "15px 20px", background: "#f0f9ff", borderBottom: "1px solid #e2e8f0" }}>
                <p style={{ margin: 0, fontWeight: "bold", color: "#1e3a8a" }}>👋 Welcome, {userName}!</p>
              </div>
            )}

            <div style={{ padding: "10px 0" }}>
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "14px 20px",
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
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

            {!isLoggedIn && (
              <div style={{ padding: "20px", borderTop: "1px solid #e2e8f0", marginTop: "10px" }}>
                <button onClick={() => { setShowLogin(true); setIsMenuOpen(false); }} style={{ width: "100%", padding: "12px", background: "#3b82f6", color: "white", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>Login</button>
                <button onClick={() => { setShowSignup(true); setIsMenuOpen(false); }} style={{ width: "100%", padding: "12px", background: "linear-gradient(135deg, #ff6b35, #f7931e)", border: "none", color: "white", borderRadius: "10px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}>Sign Up</button>
              </div>
            )}

            {isLoggedIn && (
              <div style={{ padding: "20px", borderTop: "1px solid #e2e8f0", marginTop: "10px" }}>
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} style={{ width: "100%", padding: "12px", background: "#dc2626", border: "none", color: "white", borderRadius: "10px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}>Logout</button>
              </div>
            )}

            <div style={{ padding: "20px", background: "#f8fafc", marginTop: "20px" }}>
              <p style={{ fontSize: "12px", color: "#666", textAlign: "center", margin: 0 }}>
                Need help? <br/>📞 +91-8809976942
              </p>
            </div>
          </div>
        </>
      )}

      <SignupPopup isOpen={showSignup} onClose={() => setShowSignup(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowSignup(false); }} />
      <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} onSuccess={(name) => { setUserName(name); setIsLoggedIn(true); setShowLogin(false); }} />
    </>
  );
}