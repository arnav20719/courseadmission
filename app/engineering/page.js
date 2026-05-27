"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function EngineeringPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        const engineeringColleges = data.filter(
          (c) =>
            c.stream &&
            (c.stream.toLowerCase().includes("engineering") ||
              c.name.toLowerCase().includes("iit") ||
              c.name.toLowerCase().includes("nit") ||
              c.name.toLowerCase().includes("bits") ||
              c.name.toLowerCase().includes("iiit"))
        );
        setColleges(engineeringColleges);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading engineering colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1e3a8a" }}>⚙️ Engineering Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Browse {colleges.length} engineering colleges</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {colleges.map((college) => (
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
              {college.fees_ug_inr ? (
                <p style={{ marginTop: "10px", fontWeight: "bold", color: "#1f2937" }}>
                  💰 ₹{college.fees_ug_inr.toLocaleString()}/year
                </p>
              ) : (
                <p style={{ marginTop: "10px", color: "#9ca3af" }}>Fees: Not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}