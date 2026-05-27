"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>Privacy Policy</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Last Updated: May 2026</p>

      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, including your name, phone number, email address, course interest, and college preferences when you fill out forms on our website.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>2. How We Use Your Information</h2>
        <p>We use your information to provide admission guidance, connect you with colleges, send you important updates about exams and admissions, and improve our services.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>3. Data Sharing</h2>
        <p>We do not sell your personal data. We may share your information only with colleges you have shown interest in, strictly for admission purposes.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at support@rgarnav.com for any data-related requests.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>6. Cookies</h2>
        <p>We use cookies to improve your browsing experience. You can disable cookies in your browser settings.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, contact us at support@rgarnav.com or call +91-8926078461.</p>
      </div>
    </div>
  );
}