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
      <div style={{ background: "#1a1a2e", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "15px", flexWrap: "wrap" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🎓</div>
            <div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>CourseAdmission</span>
              <span style={{ fontSize: "10px", display: "block", color: "#aaa" }}>RG ARNAV EDU CONSULTANCY</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div style={{ flex: 1, maxWidth: "350px", position: "relative" }}>
            <input type="text" placeholder="Search Colleges, Courses..." style={{ width: "100%", padding: "10px 45px 10px 16px", borderRadius: "50px", border: "none", fontSize: "14px", background: "rgba(255,255,255,0.15)", color: "white" }} />
            <button style={{ position: "absolute", right: "5px", top: "4px", bottom: "4px", padding: "0 16px", background: "linear-gradient(135deg, #ff6b35, #f7931e)", border: "none", borderRadius: "50px", color: "white", fontWeight: "bold", cursor: "pointer" }}>Go</button>
          </div>

          {/* Auth Buttons */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {isLoggedIn ? (
              <>
                <span style={{ color: "white", fontSize: "13px" }}>Hi, {userName}</span>
                <button onClick={handleLogout} style={{ background: "#dc2626", color: "white", border: "none", padding: "6px 16px", borderRadius: "40px", cursor: "pointer", fontSize: "13px", fontWeight: "500" }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} style={{ background: "transparent", border: "1px solid #ff6b35", color: "#ff6b35", padding: "6px 16px", borderRadius: "40px", cursor: "pointer", fontSize: "13px", fontWeight: "500" }}>Login</button>
                <button onClick={() => setShowSignup(true)} style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", border: "none", color: "white", padding: "6px 16px", borderRadius: "40px", cursor: "pointer", fontSize: "13px", fontWeight: "500" }}>Sign Up</button>
              </>
            )}
          </div>

          {/* HAMBURGER MENU BUTTON */}
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 20px", display: "flex", gap: "24px", overflowX: "auto", whiteSpace: "nowrap", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {menuItems.map((item, i) => (
            <Link key={i} href={item.link} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", fontWeight: "500", padding: "5px 0" }}>{item.name}</Link>
          ))}
        </div>
      </div>

      {/* MOBILE SLIDE MENU - OPENS FROM RIGHT SIDE */}
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

// ========== FOOTER COMPONENT - COMPLETE WITH ALL MISSING ITEMS ==========
function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", color: "white", padding: "50px 20px 20px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "35px" }}>
        
        {/* Column 1 - Resources */}
        <div>
          <h3 style={{ color: "#ff6b35", marginBottom: "18px", fontSize: "18px" }}>📚 Resources</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/careers-after-12th" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Careers after 12th</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/courses-after-12th" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Courses After 12th</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/ask-question" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Ask a Question</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/write-review" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>✍️ Write a college review</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/updates" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Important Updates</Link></li>
          </ul>
        </div>

        {/* Column 2 - Important Updates / Exams */}
        <div>
          <h3 style={{ color: "#ff6b35", marginBottom: "18px", fontSize: "18px" }}>📝 Important Updates</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/neet-2026" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>NEET 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/cat-2026" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>CAT 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/jee-main-2026" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>JEE Main 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bitsat-2026" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>BITSAT 2026</Link></li>
          </ul>
        </div>

        {/* Column 3 - Bihar Credit Card */}
        <div>
          <h3 style={{ color: "#ff6b35", marginBottom: "18px", fontSize: "18px" }}>💰 Bihar Credit Card</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Scheme Details</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Eligibility</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Apply Online</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Documents Required</Link></li>
          </ul>
        </div>

        {/* Column 4 - About Us */}
        <div>
          <h3 style={{ color: "#ff6b35", marginBottom: "18px", fontSize: "18px" }}>🏢 About Us</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/about-us" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>About Us</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/contact-us" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Contact Us</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/privacy-policy" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Privacy Policy</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/terms-of-use" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px" }}>Terms of Use</Link></li>
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div>
          <h3 style={{ color: "#ff6b35", marginBottom: "18px", fontSize: "18px" }}>📞 Contact</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="tel:+918809976942" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                📞 +91-8809976942
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="https://wa.me/918809976942" target="_blank" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                📱 WhatsApp: 8809976942
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="mailto:rgarnaveducons@gmail.com" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                ✉️ rgarnaveducons@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #333" }}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", marginBottom: "8px" }}>
          © {new Date().getFullYear()} CourseAdmission - RG ARNAV EDU CONSULTANCY. All rights reserved.
        </p>
        <p style={{ color: "#9ca3af", fontSize: "12px", marginTop: "8px" }}>
          Helping students find the right college since 2024 | Admission guidance for 50+ courses | Trusted by 1,000+ students
        </p>
      </div>
    </footer>
  );
}

// ========== ROOT LAYOUT ==========
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FaqChatbot />
        <UniversalPopup />
      </body>
    </html>
  );
}