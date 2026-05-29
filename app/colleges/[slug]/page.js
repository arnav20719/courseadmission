"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CollegeDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has submitted the popup before
    const hasSubmitted = localStorage.getItem("hasSubmitted");
    
    if (hasSubmitted !== "true") {
      // User hasn't submitted popup - redirect to colleges page
      window.location.href = "/colleges";
      return;
    }
    
    // User has submitted, show college details
    fetch(`/api/college/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading college details...</div>;
  }

  if (!college) {
    return <div style={{ padding: "40px", textAlign: "center" }}>College not found</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Link href="/colleges" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to Colleges</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px" }}>{college.name}</h1>
      
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        <span style={{ background: "#e0e7ff", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
          📍 {college.city}, {college.state}
        </span>
        <span style={{ background: "#dcfce7", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
          🏛️ {college.type}
        </span>
        <span style={{ background: "#fef3c7", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
          📚 {college.stream}
        </span>
      </div>

      {college.about && (
        <div style={{ marginBottom: "30px" }}>
          <h2>About College</h2>
          <p style={{ lineHeight: "1.6", color: "#4b5563" }}>{college.about}</p>
        </div>
      )}

      {college.fees_ug_inr && (
        <div style={{ marginBottom: "30px" }}>
          <h2>💰 Fee Structure</h2>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#1e3a8a" }}>
            ₹{college.fees_ug_inr.toLocaleString()}/year
          </p>
        </div>
      )}

      {college.courses && college.courses.length > 0 && (
        <div>
          <h2>📚 Courses Offered ({college.courses.length})</h2>
          <div style={{ display: "grid", gap: "10px", marginTop: "15px" }}>
            {college.courses.map((course, idx) => (
              <div key={idx} style={{ border: "1px solid #e2e8f0", padding: "15px", borderRadius: "10px", background: "#f8fafc" }}>
                <h3 style={{ margin: 0, color: "#1e3a8a" }}>{course.name}</h3>
                {course.duration && <p style={{ margin: "5px 0 0", color: "#4b5563" }}>⏱️ Duration: {course.duration}</p>}
                {course.fees && <p style={{ margin: "5px 0 0", color: "#4b5563" }}>💰 Fees: ₹{course.fees.toLocaleString()}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}