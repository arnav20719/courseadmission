"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `Interested in: ${formData.course}`,
        }),
      });

      sessionStorage.setItem("hasSubmittedLead", "true");
      sessionStorage.setItem("userName", formData.name);
      sessionStorage.setItem("userPhone", formData.phone);

      router.push("/dashboard");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ maxWidth: "500px", width: "100%", background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "28px", color: "#1e3a8a", marginBottom: "10px" }}>🎓 RG ARNAV EDU CONSULTANCY</h1>
          <p style={{ color: "#4b5563" }}>Your Gateway to Top Colleges in India</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: "24px", color: "black", marginBottom: "10px", textAlign: "center" }}>Get Free Admission Guidance</h2>
          <p style={{ color: "#6b7280", marginBottom: "30px", textAlign: "center" }}>Fill the form to access 50+ courses and 9+ colleges</p>

          <div style={{ marginBottom: "15px" }}>
            <input type="text" placeholder="Your Full Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "15px", border: "1px solid #ccc", borderRadius: "12px", fontSize: "16px", color: "black", background: "white" }} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input type="tel" placeholder="Mobile Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: "100%", padding: "15px", border: "1px solid #ccc", borderRadius: "12px", fontSize: "16px", color: "black", background: "white" }} />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <select required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} style={{ width: "100%", padding: "15px", border: "1px solid #ccc", borderRadius: "12px", fontSize: "16px", color: "black", background: "white" }}>
              <option value="">Select Course Interested *</option>
              <option value="Engineering (B.Tech)">Engineering (B.Tech)</option>
              <option value="Medical (MBBS)">Medical (MBBS)</option>
              <option value="Management (MBA)">Management (MBA)</option>
              <option value="Computer Applications (BCA/MCA)">Computer Applications (BCA/MCA)</option>
              <option value="Commerce (B.Com/M.Com)">Commerce (B.Com/M.Com)</option>
              <option value="Arts (BA/MA)">Arts (BA/MA)</option>
              <option value="Law (LL.B)">Law (LL.B)</option>
              <option value="Pharmacy (B.Pharm)">Pharmacy (B.Pharm)</option>
              <option value="Agriculture (B.Sc)">Agriculture (B.Sc)</option>
            </select>
          </div>

          <button type="submit" disabled={loading} style={{ width: "100%", padding: "15px", background: loading ? "#94a3b8" : "#3b82f6", color: "white", border: "none", borderRadius: "12px", fontSize: "18px", fontWeight: "bold", cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? "Submitting..." : "Access Colleges & Courses →"}
          </button>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#9ca3af" }}>No spam. Get expert counseling for free.</p>
        </form>
      </div>
    </div>
  );
}