"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function EngineeringPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    fetch("/api/colleges?limit=2000")
      .then((res) => res.json())
      .then((data) => {
        const collegesArray = data.colleges || [];
        
        // Filter engineering colleges by NAME and STREAM
        const engineeringColleges = collegesArray.filter((c) => {
          const name = (c.name || "").toLowerCase();
          const stream = (c.stream || "").toLowerCase();
          return (
            stream.includes("engineering") ||
            stream.includes("b.tech") ||
            stream.includes("btech") ||
            name.includes("iit") ||
            name.includes("nit") ||
            name.includes("bits") ||
            name.includes("engineering") ||
            name.includes("technology")
          );
        });
        
        setColleges(engineeringColleges);
        setFilteredColleges(engineeringColleges);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredColleges(filtered);
    }
  }, [searchTerm, colleges]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>⚙️</div>
          <p style={{ color: "#4b5563" }}>Loading engineering colleges...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1e3a8a" }}>⚙️ Engineering Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Showing {filteredColleges.length} engineering colleges</p>

      <input
        type="text"
        placeholder="🔍 Search engineering colleges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredColleges.slice(0, 50).map((college) => (
          <Link key={college.id} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px", background: "white", cursor: "pointer", transition: "transform 0.2s" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#1e3a8a" }}>{college.name}</h3>
              <p style={{ color: "#666", marginBottom: "5px" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#666", marginBottom: "5px" }}>🏛️ {college.type}</p>
              <p style={{ color: "#666" }}>📚 {college.stream || "Engineering"}</p>
              {college.fees_ug_inr ? (
                <p style={{ marginTop: "10px", fontWeight: "bold", color: "#1f2937" }}>💰 ₹{college.fees_ug_inr.toLocaleString()}/year</p>
              ) : (
                <p style={{ marginTop: "10px", color: "#9ca3af" }}>Fees: Not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredColleges.length === 0 && !loading && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#4b5563" }}>No engineering colleges found</p>
      )}
    </div>
  );
}