"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Cache for colleges data (global variable)
let cachedColleges = null;
let cachedMedicalColleges = null;

export default function MedicalPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If already cached, use it immediately
    if (cachedMedicalColleges) {
      setColleges(cachedMedicalColleges);
      setLoading(false);
      return;
    }

    // If colleges are cached but not filtered
    if (cachedColleges) {
      const filtered = cachedColleges.filter(
        (c) =>
          c.stream &&
          (c.stream.toLowerCase().includes("medical") ||
           c.name.toLowerCase().includes("medical") ||
           c.name.toLowerCase().includes("aiims") ||
           c.name.toLowerCase().includes("hospital") ||
           c.type.toLowerCase().includes("medical"))
      );
      cachedMedicalColleges = filtered;
      setColleges(filtered);
      setLoading(false);
      return;
    }

    // Fetch from API if nothing is cached
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        cachedColleges = data;
        const filtered = data.filter(
          (c) =>
            c.stream &&
            (c.stream.toLowerCase().includes("medical") ||
             c.name.toLowerCase().includes("medical") ||
             c.name.toLowerCase().includes("aiims") ||
             c.name.toLowerCase().includes("hospital") ||
             c.type.toLowerCase().includes("medical"))
        );
        cachedMedicalColleges = filtered;
        setColleges(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading medical colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1e3a8a" }}>🏥 Medical Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Browse {colleges.length} medical colleges</p>

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

      {colleges.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#4b5563" }}>
          No medical colleges found
        </p>
      )}
    </div>
  );
}