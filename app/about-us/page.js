"use client";

import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>About RG ARNAV EDU CONSULTANCY</h1>
      
      <div style={{ background: "#eff6ff", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Our Mission</h2>
        <p style={{ lineHeight: "1.8", color: "#333" }}>To empower students across India, especially from Bihar, with authentic information about colleges, courses, exams, and scholarships. We believe every student deserves access to quality education guidance regardless of their financial background.</p>
      </div>

      <div style={{ background: "#dcfce7", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Who We Are</h2>
        <p style={{ lineHeight: "1.8", color: "#333" }}>RG ARNAV EDU CONSULTANCY was founded in 2024 by a team of education counselors with over 10 years of combined experience. We have helped over 1,000+ students secure admissions in their dream colleges across India. Our expertise spans across Engineering, Medical, Management, Law, Commerce, Arts, and various professional courses.</p>
      </div>

      <div style={{ background: "#fef3c7", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>What We Do</h2>
        <ul style={{ lineHeight: "1.8", color: "#333", marginLeft: "20px" }}>
          <li>Provide complete college and course information</li>
          <li>Free admission guidance and counseling</li>
          <li>Bihar Student Credit Card scheme assistance</li>
          <li>College comparison tools to help you make informed decisions</li>
          <li>Entrance exam updates and preparation tips (NEET, JEE, CAT, BITSAT)</li>
          <li>Scholarship information and application support</li>
        </ul>
      </div>

      <div style={{ background: "#fce7f3", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Our Commitment</h2>
        <p style={{ lineHeight: "1.8", color: "#333" }}>We are committed to providing 100% accurate, up-to-date information from official sources (UGC, AICTE, NTA, College websites). We never share your personal data with third parties. All counseling services are completely free for students from economically weaker sections.</p>
      </div>

      <div style={{ background: "#e0e7ff", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Contact Information</h2>
        <p><strong>📞 Phone:</strong> +91-8809976942</p>
        <p><strong>✉️ Email:</strong> rgarnaveducons@gmail.com</p>
        <p><strong>🏢 Office Address:</strong> RG ARNAV EDU CONSULTANCY, Begusarai, Bihar - 851117</p>
        <p><strong>🕒 Working Hours:</strong> Monday to Saturday, 10:00 AM – 7:00 PM</p>
        <p><strong>📱 WhatsApp:</strong> +91-8809976942</p>
      </div>
    </div>
  );
}