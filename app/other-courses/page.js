"use client";

import Link from "next/link";
import { useState } from "react";

export default function OtherCoursesPage() {
  const courses = [
    { name: "B.Com", icon: "📊", duration: "3 Years", eligibility: "10+2 Commerce", careers: "CA, CS, CMA, MBA, Banking", color: "#3b82f6" },
    { name: "BCA", icon: "💻", duration: "3 Years", eligibility: "10+2 with Mathematics", careers: "Software Developer, Web Developer, System Analyst", color: "#06b6d4" },
    { name: "BBA", icon: "📈", duration: "3 Years", eligibility: "10+2 any stream", careers: "Marketing, Finance, HR, Entrepreneurship", color: "#f59e0b" },
    { name: "B.Pharm", icon: "💊", duration: "4 Years", eligibility: "10+2 PCB/PCM", careers: "Pharmacist, Drug Inspector, Clinical Research", color: "#ef4444" },
    { name: "LLB", icon: "⚖️", duration: "3 Years", eligibility: "Bachelor's degree", careers: "Lawyer, Legal Advisor, Judge, Corporate Counsel", color: "#8b5cf6" },
    { name: "B.Sc Agriculture", icon: "🌾", duration: "4 Years", eligibility: "10+2 PCB/PCM", careers: "Agricultural Officer, Farm Manager, Research Scientist", color: "#84cc16" },
    { name: "B.Sc Nursing", icon: "👩‍⚕️", duration: "4 Years", eligibility: "10+2 PCB", careers: "Staff Nurse, Nursing Supervisor, Educator", color: "#ec4899" },
    { name: "B.Arch", icon: "🏛️", duration: "5 Years", eligibility: "10+2 with Mathematics", careers: "Architect, Urban Planner, Interior Designer", color: "#ff6b35" },
    { name: "Hotel Management", icon: "🏨", duration: "3-4 Years", eligibility: "10+2 any stream", careers: "Hotel Manager, Chef, Event Planner, Airlines", color: "#10b981" },
    { name: "B.Des", icon: "🎨", duration: "4 Years", eligibility: "10+2 any stream", careers: "Fashion Designer, UI/UX Designer, Product Designer", color: "#d946ef" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCourses = courses.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#1a1a2e", marginBottom: "10px" }}>📚 Other Popular Courses</h1>
        <p style={{ color: "#666" }}>Explore diverse career opportunities beyond Engineering and Medical</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "14px", borderRadius: "50px", border: "1px solid #ddd", fontSize: "16px" }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "24px" }}>
        {filteredCourses.map((course, i) => (
          <div key={i} style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
            transition: "transform 0.3s",
            border: `2px solid ${course.color}20`,
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{
                background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)`,
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}>{course.icon}</div>
              <h3 style={{ fontSize: "22px", color: course.color }}>{course.name}</h3>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <p><strong>⏱️ Duration:</strong> {course.duration}</p>
              <p><strong>📋 Eligibility:</strong> {course.eligibility}</p>
              <p><strong>💼 Career Options:</strong> {course.careers}</p>
            </div>
            <Link href={`/colleges?stream=${course.name}`}>
              <button style={{
                width: "100%",
                padding: "12px",
                background: course.color,
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}>Find Colleges →</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}