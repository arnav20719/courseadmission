"use client";

import { useState } from "react";

export default function AdmissionForm({ collegeName }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: `${message} - College: ${collegeName}` }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setMessage("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
        <h3 style={{ color: "black", margin: "0 0 10px 0" }}>✅ Thank you!</h3>
        <p style={{ color: "black", margin: 0 }}>We'll contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "black" }}>Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            color: "black",
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            backgroundColor: "white"
          }}
          placeholder="Enter your full name"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "black" }}>Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{
            color: "black",
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            backgroundColor: "white"
          }}
          placeholder="Enter your mobile number"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "black" }}>Message (Optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          style={{
            color: "black",
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            fontFamily: "inherit",
            backgroundColor: "white"
          }}
          placeholder="Any specific questions?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: loading ? "#ccc" : "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}