"use client";

import { useState } from "react";
import Link from "next/link";

export default function AskQuestionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/ask-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", course: "", question: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ background: "#dcfce7", padding: "40px", borderRadius: "16px" }}>
          <h2 style={{ color: "#166534", marginBottom: "10px" }}>✅ Question Submitted Successfully!</h2>
          <p style={{ color: "#14532d" }}>Our counselor will answer your question within 24 hours.</p>
          <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginTop: "20px" }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginBottom: "10px" }}>❓ Ask a Question</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Get expert answers to your admission and college-related questions.</p>

      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
              placeholder="Enter your full name"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Mobile Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
              placeholder="Enter your mobile number"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Interested Course *</label>
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px", background: "white" }}
            >
              <option value="">Select Course</option>
              <option value="Engineering (B.Tech)">Engineering (B.Tech)</option>
              <option value="Medical (MBBS)">Medical (MBBS)</option>
              <option value="Management (BBA/MBA)">Management (BBA/MBA)</option>
              <option value="Computer Applications (BCA/MCA)">Computer Applications (BCA/MCA)</option>
              <option value="Commerce (B.Com/M.Com)">Commerce (B.Com/M.Com)</option>
              <option value="Arts (BA/MA)">Arts (BA/MA)</option>
              <option value="Law (LL.B)">Law (LL.B)</option>
              <option value="Pharmacy (B.Pharm)">Pharmacy (B.Pharm)</option>
              <option value="Agriculture (B.Sc)">Agriculture (B.Sc)</option>
            </select>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your Question *</label>
            <textarea
              name="question"
              required
              rows="5"
              value={formData.question}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px", fontFamily: "inherit" }}
              placeholder="Type your question here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#94a3b8" : "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit Question"}
          </button>
        </form>
      </div>
    </div>
  );
}