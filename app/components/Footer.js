"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", color: "white", padding: "40px 20px 20px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
        
        {/* Column 1 - Resources */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", color: "#ff6b35" }}>Resources</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/careers" style={{ color: "#cbd5e1", textDecoration: "none" }}>Careers after 12th</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/courses" style={{ color: "#cbd5e1", textDecoration: "none" }}>Courses After 12th</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/ask-question" style={{ color: "#cbd5e1", textDecoration: "none" }}>Ask a Question</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/write-review" style={{ color: "#cbd5e1", textDecoration: "none" }}>Write a college review</Link></li>
          </ul>
        </div>

        {/* Column 2 - Important Updates / Exams */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", color: "#ff6b35" }}>Important Updates</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/neet-2026" style={{ color: "#cbd5e1", textDecoration: "none" }}>NEET 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/cat-2026" style={{ color: "#cbd5e1", textDecoration: "none" }}>CAT 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/jee-main-2026" style={{ color: "#cbd5e1", textDecoration: "none" }}>JEE Main 2026</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bitsat-2026" style={{ color: "#cbd5e1", textDecoration: "none" }}>BITSAT 2026</Link></li>
          </ul>
        </div>

        {/* Column 3 - Bihar Credit Card */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", color: "#ff6b35" }}>Bihar Credit Card</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none" }}>Scheme Details</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none" }}>Eligibility</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none" }}>Apply Online</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/bihar-credit-card" style={{ color: "#cbd5e1", textDecoration: "none" }}>Documents Required</Link></li>
          </ul>
        </div>

        {/* Column 4 - About Us */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", color: "#ff6b35" }}>About Us</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><Link href="/about-us" style={{ color: "#cbd5e1", textDecoration: "none" }}>About Us</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/contact-us" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contact Us</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/privacy-policy" style={{ color: "#cbd5e1", textDecoration: "none" }}>Privacy Policy</Link></li>
            <li style={{ marginBottom: "10px" }}><Link href="/terms-of-use" style={{ color: "#cbd5e1", textDecoration: "none" }}>Terms of Use</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #333", color: "#cbd5e1" }}>
        <p>📞 Contact: +91-8809976942 | ✉️ Email: rgarnaveducons@gmail.com</p>
        <p>© {new Date().getFullYear()} RG ARNAV EDU CONSULTANCY. All rights reserved.</p>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>Helping students find the right college since 2024 | Trusted by 1,000+ students</p>
      </div>
    </footer>
  );
}