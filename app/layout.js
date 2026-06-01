"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import SignupPopup from "./components/SignupPopup";
import LoginPopup from "./components/LoginPopup";
import FaqChatbot from "./components/FaqChatbot";
import UniversalPopup from "./components/UniversalPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ========== HEADER COMPONENT ==========
function Header() {
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
      <div className="header">
        <div className="header-top">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">🎓</div>
            <div>
              <span className="logo-text">CourseAdmission</span>
              <span className="logo-sub">RG ARNAV EDU CONSULTANCY</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search Colleges, Courses..." />
            <button>Go</button>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            {isLoggedIn ? (
              <>
                <span style={{ color: "white", fontSize: "13px" }}>Hi, {userName}</span>
                <button onClick={handleLogout} className="btn-login" style={{ background: "#dc2626", color: "white", border: "none" }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} className="btn-login">Login</button>
                <button onClick={() => setShowSignup(true)} className="btn-signup">Sign Up</button>
              </>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Desktop Navigation - Full menu (Laptop only) */}
        <div className="desktop-nav">
          <div className="desktop-nav-links">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Links - Selected links only (Mobile only) */}
        <div className="mobile-nav-links">
          <Link href="/engineering">ENGINEERING</Link>
          <Link href="/medical">MEDICAL</Link>
          <Link href="/colleges">COLLEGES</Link>
          <Link href="/bihar-credit-card">BIHAR CC</Link>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {isMenuOpen && (
        <>
          <div onClick={() => setIsMenuOpen(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 1999 }} />
          <div style={{ 
            position: "fixed", 
            top: 0, 
            right: 0, 
            bottom: 0, 
            width: "280px", 
            background: "white", 
            zIndex: 2000, 
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)", 
            overflowY: "auto" 
          }}>
            <div style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", padding: "25px 20px", color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "40px" }}>🎓</div>
              <h3 style={{ margin: 0, fontSize: "16px" }}>CourseAdmission</h3>
              <p style={{ margin: "5px 0 0", fontSize: "10px", opacity: 0.8 }}>RG ARNAV EDU CONSULTANCY</p>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                style={{ 
                  position: "absolute", 
                  top: "15px", 
                  left: "15px", 
                  background: "rgba(255,255,255,0.2)", 
                  border: "none", 
                  color: "white", 
                  fontSize: "18px", 
                  cursor: "pointer", 
                  width: "30px", 
                  height: "30px", 
                  borderRadius: "15px" 
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

            {menuItems.map((item, i) => (
              <Link key={i} href={item.link} onClick={() => setIsMenuOpen(false)} style={{ display: "block", padding: "14px 20px", color: "#333", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}>
                <span style={{ marginRight: "12px" }}>
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
              </Link>
            ))}

            {!isLoggedIn && (
              <div style={{ padding: "20px", borderTop: "1px solid #e2e8f0", marginTop: "10px" }}>
                <button onClick={() => { setShowLogin(true); setIsMenuOpen(false); }} style={{ width: "100%", padding: "12px", background: "#3b82f6", color: "white", border: "none", borderRadius: "10px", marginBottom: "10px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}>Login</button>
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

// ========== FOOTER COMPONENT ==========
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>📚 Resources</h4>
          <Link href="/careers-after-12th">Careers after 12th</Link>
          <Link href="/courses-after-12th">Courses After 12th</Link>
          <Link href="/ask-question">Ask a Question</Link>
          <Link href="/write-review">✍️ Write a college review</Link>
        </div>
        <div>
          <h4>📝 Important Updates</h4>
          <Link href="/neet-2026">NEET 2026</Link>
          <Link href="/cat-2026">CAT 2026</Link>
          <Link href="/jee-main-2026">JEE Main 2026</Link>
          <Link href="/bitsat-2026">BITSAT 2026</Link>
        </div>
        <div>
          <h4>💰 Bihar Credit Card</h4>
          <Link href="/bihar-credit-card">Scheme Details</Link>
          <Link href="/bihar-credit-card">Eligibility</Link>
          <Link href="/bihar-credit-card">Apply Online</Link>
          <Link href="/bihar-credit-card">Documents Required</Link>
        </div>
        <div>
          <h4>🏢 About Us</h4>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
        <div>
          <h4>📞 Contact</h4>
          <a href="tel:+918809976942">📞 +91-8809976942</a>
          <a href="https://wa.me/918809976942" target="_blank">📱 WhatsApp: 8809976942</a>
          <a href="mailto:rgarnaveducons@gmail.com">✉️ rgarnaveducons@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CourseAdmission - RG ARNAV EDU CONSULTANCY. All rights reserved.</p>
        <p style={{ marginTop: "8px", fontSize: "11px" }}>Helping students find the right college since 2024 | Trusted by 1,000+ students</p>
      </div>
    </footer>
  );
}

// ========== ROOT LAYOUT ==========
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <FaqChatbot />
        <UniversalPopup />
      </body>
    </html>
  );
}