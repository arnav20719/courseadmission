"use client";

import { useState } from "react";
import Link from "next/link";

export default function NEETPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", phone: "", email: "", query: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>🩺 NEET 2026 – National Eligibility cum Entrance Test</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Complete guide for NEET 2026 – India's largest medical entrance exam for MBBS, BDS, BAMS, BHMS, and other medical courses.</p>

      {/* Key Information Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px" }}>
          <h3 style={{ color: "#1e3a8a" }}>📅 Exam Date</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>May 2026</p>
          <p>First Sunday of May (tentative)</p>
        </div>
        <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px" }}>
          <h3 style={{ color: "#1e3a8a" }}>📝 Application Period</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>February – March 2026</p>
          <p>Online registration opens in February</p>
        </div>
        <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "12px" }}>
          <h3 style={{ color: "#1e3a8a" }}>🎯 Mode of Exam</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>Pen & Paper (Offline)</p>
          <p>Single session – 3 hours 20 minutes</p>
        </div>
        <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "12px" }}>
          <h3 style={{ color: "#1e3a8a" }}>💰 Total Seats</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>1,00,000+</p>
          <p>MBBS + BDS + AYUSH + Nursing seats</p>
        </div>
      </div>

      {/* Exam Pattern */}
      <div style={{ background: "white", padding: "25px", borderRadius: "16px", marginBottom: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>📋 NEET 2026 Exam Pattern</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}><td style={{ padding: "10px", fontWeight: "bold" }}>Subjects</td><td>Physics (45), Chemistry (45), Biology (90)</td></tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}><td style={{ padding: "10px", fontWeight: "bold" }}>Total Questions</td><td>180 Questions</td></tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}><td style={{ padding: "10px", fontWeight: "bold" }}>Total Marks</td><td>720 Marks</td></tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}><td style={{ padding: "10px", fontWeight: "bold" }}>Marking Scheme</td><td>+4 for correct, -1 for incorrect</td></tr>
            <tr><td style={{ padding: "10px", fontWeight: "bold" }}>Duration</td><td>3 hours 20 minutes</td></tr>
          </tbody>
        </table>
      </div>

      {/* Syllabus */}
      <div style={{ background: "#eff6ff", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>📖 NEET 2026 Syllabus (Class 11 & 12)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div><strong>Physics:</strong> Mechanics, Thermodynamics, Optics, Electricity & Magnetism, Modern Physics</div>
          <div><strong>Chemistry:</strong> Physical, Organic, Inorganic – Periodic Table, Chemical Bonding, Hydrocarbons</div>
          <div><strong>Biology:</strong> Botany (Plant Kingdom, Genetics, Ecology) + Zoology (Human Physiology, Reproduction)</div>
        </div>
      </div>

      {/* Eligibility */}
      <div style={{ background: "#dcfce7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>✅ NEET 2026 Eligibility Criteria</h2>
        <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
          <li>Indian citizens, NRIs, OCIs, PIOs, Foreign Nationals can apply</li>
          <li>Minimum age: 17 years as on December 31, 2026</li>
          <li>Maximum age: No upper age limit (as per latest NMC guidelines)</li>
          <li>Qualification: 10+2 with Physics, Chemistry, Biology/Biotechnology</li>
          <li>Minimum marks: 50% for General, 40% for SC/ST/OBC, 45% for PwD</li>
        </ul>
      </div>

      {/* Top Colleges */}
      <div style={{ background: "#fef3c7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🏛️ Top Medical Colleges in India (Based on NEET)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
          <div><strong>AIIMS Delhi</strong> – Cutoff: 99.99+ percentile</div>
          <div><strong>CMC Vellore</strong> – Cutoff: 99.9+ percentile</div>
          <div><strong>JIPMER Puducherry</strong> – Cutoff: 99.8+ percentile</div>
          <div><strong>Maulana Azad Medical College</strong> – Cutoff: 99.8+ percentile</div>
          <div><strong>KGMU Lucknow</strong> – Cutoff: 99.7+ percentile</div>
          <div><strong>Grant Medical College Mumbai</strong> – Cutoff: 99.6+ percentile</div>
          <div><strong>Army College of Medical Sciences</strong> – Cutoff: 99.5+ percentile</div>
          <div><strong>Government Medical College Chandigarh</strong> – Cutoff: 99.4+ percentile</div>
        </div>
      </div>

      {/* Query Form */}
      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>❓ Have Questions About NEET 2026?</h2>
        <p style={{ color: "#4b5563", marginBottom: "20px" }}>Fill the form below. Our expert counselors will guide you.</p>
        
        {submitted ? (
          <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
            <p style={{ color: "#166534", fontWeight: "bold" }}>✅ Thank you! Our counselor will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginBottom: "15px" }}>
              <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <input type="tel" name="phone" placeholder="Mobile Number *" required value={formData.phone} onChange={handleChange} style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }} />
            </div>
            <textarea name="query" placeholder="Your Question about NEET 2026..." rows="3" value={formData.query} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "15px" }} />
            <button type="submit" disabled={loading} style={{ padding: "12px 24px", background: loading ? "#94a3b8" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>{loading ? "Submitting..." : "Submit Query →"}</button>
          </form>
        )}
      </div>
    </div>
  );
}