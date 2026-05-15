"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MedicalPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then(res => res.json())
      .then(data => {
        const medicalColleges = data.filter(c => 
          c.stream && (c.stream.toLowerCase().includes("medical") || c.name.toLowerCase().includes("aiims") || c.name.toLowerCase().includes("medical"))
        );
        setColleges(medicalColleges);
        setFilteredColleges(medicalColleges);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = colleges;
    if (searchTerm) {
      filtered = filtered.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredColleges(filtered);
  }, [searchTerm, colleges]);

  if (loading) {
    return <div style={{ padding: "60px 20px", textAlign: "center" }}>Loading medical colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#1a1a2e", marginBottom: "10px" }}>🩺 Medical Colleges in India</h1>
        <p style={{ color: "#666" }}>Browse top medical colleges, check fees, NEET cutoffs and admission details</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Search medical colleges by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "14px", borderRadius: "50px", border: "1px solid #ddd", fontSize: "16px" }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "linear-gradient(135deg, #10b981, #059669)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>{filteredColleges.length}+</div>
          <div>Medical Colleges</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>20+</div>
          <div>AIIMS</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>1,50,000+</div>
          <div>MBBS Seats</div>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>📝 NEET 2026 Information</h2>
        <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "12px" }}>
          <p><strong>Exam Date:</strong> May 5, 2026</p>
          <p><strong>Application Period:</strong> February - March 2026</p>
          <p><strong>Mode:</strong> Offline (Pen & Paper)</p>
          <p><strong>Total Questions:</strong> 200 MCQs (180 to be answered)</p>
          <p><strong>Subjects:</strong> Physics, Chemistry, Biology (Botany & Zoology)</p>
        </div>
      </div>

      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>🏛️ Top Medical Colleges</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "20px" }}>
        {filteredColleges.map((college, i) => (
          <Link key={i} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.3s",
              border: "1px solid #eee",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <h3 style={{ fontSize: "18px", color: "#1a1a2e", marginBottom: "8px" }}>{college.name}</h3>
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "5px" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#666", fontSize: "14px" }}>🏛️ {college.type}</p>
              {college.fees_ug_inr && <p style={{ color: "#ff6b35", fontWeight: "bold", marginTop: "10px" }}>💰 Fees: ₹{college.fees_ug_inr.toLocaleString()}/year</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}