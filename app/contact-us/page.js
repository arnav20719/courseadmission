"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>Contact Us</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>We are here to help you with your admission journey.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
        {/* Contact Information */}
        <div style={{ background: "#eff6ff", padding: "30px", borderRadius: "16px" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>Get in Touch</h2>
          <p><strong>📞 Phone:</strong> <a href="tel:+918809976942" style={{ color: "#3b82f6", textDecoration: "none" }}>+91-8809976942</a></p>
          <p><strong>📱 WhatsApp:</strong> <a href="https://wa.me/918809976942" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>+91-8809976942</a></p>
          <p><strong>✉️ Email:</strong> <a href="mailto:rgarnaveducons@gmail.com" style={{ color: "#3b82f6", textDecoration: "none" }}>rgarnaveducons@gmail.com</a></p>
          <p><strong>🏢 Address:</strong> RG ARNAV EDU CONSULTANCY, Begusarai, Bihar - 851117</p>
          <p><strong>🕒 Working Hours:</strong> Mon-Sat, 10:00 AM – 7:00 PM</p>
        </div>

        {/* Contact Form */}
        <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>Send Us a Message</h2>
          {submitted ? (
            <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
              <p style={{ color: "#166534", fontWeight: "bold" }}>✅ Thank you! We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <input type="tel" name="phone" placeholder="Mobile Number *" required value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <textarea name="message" placeholder="Your Message *" required rows="4" value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", background: loading ? "#94a3b8" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Sending..." : "Send Message"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}