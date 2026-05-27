"use client";

import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>Terms of Use</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Last Updated: May 2026</p>

      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you agree to be bound by these Terms of Use.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>2. Use of Information</h2>
        <p>The information provided on this website is for general guidance purposes only. Always verify details from official college and exam websites before making decisions.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>3. No Guarantee</h2>
        <p>We do not guarantee admission to any college or success in any exam. Our services are limited to providing guidance and information.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>4. User Responsibilities</h2>
        <p>You agree to provide accurate information in all forms. Misuse of our contact forms or providing false information may result in blocking access.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>5. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and code, is the property of RG ARNAV EDU CONSULTANCY and is protected by copyright laws.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>6. Limitation of Liability</h2>
        <p>RG ARNAV EDU CONSULTANCY is not liable for any loss or damage arising from your use of this website or reliance on any information provided.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>7. Changes to Terms</h2>
        <p>We may update these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p>

        <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>8. Contact Us</h2>
        <p>For questions about these Terms, contact us at support@rgarnav.com or call +91-8926078461.</p>
      </div>
    </div>
  );
}