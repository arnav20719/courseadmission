"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CollegesPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setFilteredColleges(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [searchTerm, colleges]);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1e3a8a" }}>🎓 Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Browse {filteredColleges.length} colleges</p>

      <input
        type="text"
        placeholder="🔍 Search colleges by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredColleges.map((college) => (
          <Link key={college.id} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "20px",
                background: "white",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#1e3a8a" }}>{college.name}</h3>
              <p style={{ color: "#4b5563", marginBottom: "5px" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#4b5563", marginBottom: "5px" }}>🏛️ {college.type}</p>
              <p style={{ color: "#4b5563" }}>📚 {college.stream}</p>
              {college.fees ? (
                <p style={{ marginTop: "10px", fontWeight: "bold", color: "#1f2937" }}>
                  💰 ₹{college.fees.toLocaleString()}/year
                </p>
              ) : (
                <p style={{ marginTop: "10px", color: "#9ca3af" }}>Fees: Not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#4b5563" }}>
          No colleges found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}