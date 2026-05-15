"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function EngineeringPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExam, setSelectedExam] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then(res => res.json())
      .then(data => {
        const engineeringColleges = data.filter(c => 
          c.stream && (c.stream.toLowerCase().includes("engineering") || c.name.toLowerCase().includes("iit") || c.name.toLowerCase().includes("nit"))
        );
        setColleges(engineeringColleges);
        setFilteredColleges(engineeringColleges);
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

  const exams = ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEE", "MET"];

  if (loading) {
    return <div style={{ padding: "60px 20px", textAlign: "center" }}>Loading engineering colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#1a1a2e", marginBottom: "10px" }}>🔧 Engineering Colleges in India</h1>
        <p style={{ color: "#666" }}>Browse top engineering colleges, compare fees, check placements and admission details</p>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Search engineering colleges by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "14px", borderRadius: "50px", border: "1px solid #ddd", fontSize: "16px" }}
        />
      </div>

      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>{filteredColleges.length}+</div>
          <div>Engineering Colleges</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #10b981, #059669)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>23</div>
          <div>IITs</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>31</div>
          <div>NITs</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", padding: "20px", borderRadius: "12px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>25+</div>
          <div>IIITs</div>
        </div>
      </div>

      {/* Exams Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>📝 Popular Engineering Entrance Exams</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px" }}>
          {exams.map((exam, i) => (
            <div key={i} style={{ background: "#f8f9fa", padding: "15px", borderRadius: "10px", textAlign: "center", fontWeight: "500" }}>
              {exam}
            </div>
          ))}
        </div>
      </div>

      {/* Colleges List */}
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>🏛️ Top Engineering Colleges</h2>
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