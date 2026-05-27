"use client";

import { useState } from "react";
import Link from "next/link";

export default function WriteReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    course: "",
    rating: "",
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/write-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", college: "", course: "", rating: "", review: "" });
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
          <h2 style={{ color: "#166534", marginBottom: "10px" }}>✅ Thank You for Your Review!</h2>
          <p style={{ color: "#14532d" }}>Your review will help other students make informed decisions.</p>
          <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginTop: "20px" }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginBottom: "10px" }}>⭐ Write a College Review</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Share your college experience to help future students.</p>

      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your Name *</label>
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
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>College Name *</label>
            <input
              type="text"
              name="college"
              required
              value={formData.college}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
              placeholder="Enter college name"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Course Studied *</label>
            <input
              type="text"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
              placeholder="Enter your course name"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Rating (out of 5) *</label>
            <select
              name="rating"
              required
              value={formData.rating}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px", background: "white" }}
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ - Excellent (5/5)</option>
              <option value="4">⭐⭐⭐⭐ - Very Good (4/5)</option>
              <option value="3">⭐⭐⭐ - Good (3/5)</option>
              <option value="2">⭐⭐ - Average (2/5)</option>
              <option value="1">⭐ - Poor (1/5)</option>
            </select>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your Review *</label>
            <textarea
              name="review"
              required
              rows="6"
              value={formData.review}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px", fontFamily: "inherit" }}
              placeholder="Share your experience about academics, placement, faculty, infrastructure, etc..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#94a3b8" : "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
}