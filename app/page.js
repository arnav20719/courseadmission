"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
    return () => window.removeEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }, []);

  const streams = [
    { name: "Engineering", icon: "⚙️", color: "#3b82f6", count: "5000+ Colleges", link: "/colleges?stream=Engineering" },
    { name: "B.Tech", icon: "💻", color: "#06b6d4", count: "4000+ Colleges", link: "/colleges?stream=B.Tech" },
    { name: "Medical", icon: "🏥", color: "#10b981", count: "1200+ Colleges", link: "/colleges?stream=Medical" },
    { name: "Agriculture", icon: "🌾", color: "#84cc16", count: "800+ Colleges", link: "/colleges?stream=Agriculture" },
    { name: "Pharmacy", icon: "💊", color: "#ef4444", count: "1500+ Colleges", link: "/colleges?stream=Pharmacy" },
    { name: "BBA", icon: "📈", color: "#f59e0b", count: "3000+ Colleges", link: "/colleges?stream=BBA" },
    { name: "BCA", icon: "🖥️", color: "#8b5cf6", count: "2500+ Colleges", link: "/colleges?stream=BCA" },
    { name: "MBA", icon: "🎯", color: "#ff6b35", count: "5000+ Colleges", link: "/colleges?stream=MBA" },
    { name: "B.Sc Nursing", icon: "👩‍⚕️", color: "#ec4899", count: "1000+ Colleges", link: "/colleges?stream=Nursing" },
  ];

  const topColleges = [
    { name: "IIT Bombay", rank: "NIRF #3", fees: "₹2.2L/year", placement: "₹25 LPA", stream: "Engineering" },
    { name: "IIT Delhi", rank: "NIRF #2", fees: "₹2.2L/year", placement: "₹30 LPA", stream: "Engineering" },
    { name: "IIT Madras", rank: "NIRF #1", fees: "₹2.2L/year", placement: "₹28 LPA", stream: "Engineering" },
    { name: "AIIMS Delhi", rank: "NIRF #1", fees: "₹7.7K/year", placement: "₹15 LPA", stream: "Medical" },
    { name: "IIM Ahmedabad", rank: "NIRF #1", fees: "₹23L/year", placement: "₹32 LPA", stream: "Management" },
    { name: "NLSIU Bangalore", rank: "Law #1", fees: "₹2L/year", placement: "₹18 LPA", stream: "Law" },
  ];

  const upcomingExams = [
    { name: "JEE Main 2026", date: "Jan 15 - Apr 15, 2026", registrations: "Open", color: "#ff6b35" },
    { name: "NEET 2026", date: "May 5, 2026", registrations: "Coming Soon", color: "#10b981" },
    { name: "CAT 2026", date: "Nov 24, 2026", registrations: "Expected Soon", color: "#3b82f6" },
    { name: "BITSAT 2026", date: "May 20, 2026", registrations: "Open", color: "#8b5cf6" },
  ];

  const biharScheme = {
    title: "Bihar Student Credit Card",
    description: "Up to ₹4 lakhs education loan at 4% interest",
    features: ["No Collateral", "No Processing Fee", "Repayment after course + 1 year"],
    link: "/bihar-credit-card",
    icon: "🎓",
  };

  const articles = [
    { title: "Top 10 Engineering Colleges in India 2026", reads: "15K reads", link: "/articles/top-engineering-colleges" },
    { title: "NEET 2026: Exam Pattern, Syllabus, Preparation Tips", reads: "22K reads", link: "/articles/neet-2026" },
    { title: "How to Apply for Bihar Student Credit Card?", reads: "8K reads", link: "/bihar-credit-card" },
    { title: "MBA vs MTech: Which is Better for Career?", reads: "12K reads", link: "/articles/mba-vs-mtech" },
  ];

  return (
    <div>
      {/* Hero Section with Large Search */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: scrolled ? "40px 20px" : "60px 20px",
        transition: "all 0.3s",
        textAlign: "center",
        color: "white",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: "bold", marginBottom: "15px" }}>
            Find the right college after 12th, UG, or PG
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "30px", opacity: 0.9 }}>
            Search colleges, compare fees, check exams, and get counselling for admission
          </p>
          
          <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Search for colleges, courses, exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && searchTerm.trim()) {
                  window.location.href = `/colleges?search=${encodeURIComponent(searchTerm)}`;
                }
              }}
              style={{
                width: "100%",
                padding: "16px 20px",
                fontSize: "16px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                color: "#333",
              }}
            />
            <button
              onClick={() => {
                if (searchTerm.trim()) {
                  window.location.href = `/colleges?search=${encodeURIComponent(searchTerm)}`;
                }
              }}
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                bottom: "5px",
                padding: "0 25px",
                background: "#ff6b35",
                color: "white",
                border: "none",
                borderRadius: "50px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Popular Courses - Professional Colorful Cards */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1a1a2e" }}>Popular Courses</h2>
          <p style={{ color: "#666", marginTop: "10px" }}>Explore top courses that students search for the most</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
          {streams.map((stream, i) => (
            <Link key={i} href={stream.link} style={{ textDecoration: "none" }}>
              <div style={{
                background: `linear-gradient(135deg, ${stream.color}15 0%, ${stream.color}05 100%)`,
                padding: "28px 20px",
                borderRadius: "20px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: `1px solid ${stream.color}30`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 20px 35px ${stream.color}40`;
                e.currentTarget.style.border = `1px solid ${stream.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.border = `1px solid ${stream.color}30`;
              }}>
                <div style={{
                  background: `linear-gradient(135deg, ${stream.color}, ${stream.color}dd)`,
                  width: "70px",
                  height: "70px",
                  borderRadius: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  boxShadow: `0 8px 20px ${stream.color}50`,
                }}>
                  <span style={{ fontSize: "32px" }}>{stream.icon}</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", color: stream.color, marginBottom: "8px" }}>{stream.name}</h3>
                <p style={{ color: "#666", fontSize: "13px", fontWeight: "500" }}>{stream.count}</p>
                <div style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `${stream.color}10`,
                  pointerEvents: "none",
                }} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Ranked Colleges Section */}
      <div style={{ background: "#f8f9fa", padding: "50px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "28px" }}>🏆 Top Ranked Colleges</h2>
            <Link href="/colleges" style={{ color: "#ff6b35", textDecoration: "none" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {topColleges.map((college, i) => (
              <Link key={i} href={`/colleges/${college.name.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h3 style={{ fontSize: "18px", color: "#1a1a2e" }}>{college.name}</h3>
                    <span style={{ background: "#ff6b35", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>{college.rank}</span>
                  </div>
                  <p style={{ color: "#666", fontSize: "14px", marginBottom: "5px" }}>💰 {college.fees}</p>
                  <p style={{ color: "#666", fontSize: "14px" }}>📊 Placement: {college.placement}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Exams + Bihar Credit Card Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          
          {/* Upcoming Exams Section */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "24px" }}>📝 Upcoming Exams</h2>
              <Link href="/colleges" style={{ color: "#ff6b35", textDecoration: "none" }}>View All →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {upcomingExams.map((exam, i) => (
                <div key={i} style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                    <h3 style={{ fontSize: "18px", color: exam.color }}>{exam.name}</h3>
                    <span style={{
                      background: exam.registrations === "Open" ? "#10b981" : "#f59e0b",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}>
                      {exam.registrations}
                    </span>
                  </div>
                  <p style={{ color: "#666", fontSize: "14px", marginTop: "10px" }}>📅 {exam.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bihar Credit Card Section */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "24px" }}>🎓 {biharScheme.title}</h2>
              <Link href={biharScheme.link} style={{ color: "#ff6b35", textDecoration: "none" }}>Learn More →</Link>
            </div>
            <Link href={biharScheme.link} style={{ textDecoration: "none" }}>
              <div style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%)",
                padding: "30px",
                borderRadius: "16px",
                color: "white",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>{biharScheme.icon}</div>
                <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "white" }}>{biharScheme.title}</h3>
                <p style={{ marginBottom: "15px", opacity: 0.9, color: "white" }}>{biharScheme.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {biharScheme.features.map((feature, i) => (
                    <span key={i} style={{ background: "rgba(255,255,255,0.2)", padding: "5px 12px", borderRadius: "20px", fontSize: "12px", color: "white" }}>✅ {feature}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div style={{ background: "#f8f9fa", padding: "50px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "24px" }}>📰 Latest Articles</h2>
            <Link href="/articles" style={{ color: "#ff6b35", textDecoration: "none" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {articles.map((article, i) => (
              <Link key={i} href={article.link} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                  <h3 style={{ fontSize: "16px", color: "#1a1a2e", marginBottom: "10px", lineHeight: "1.4" }}>{article.title}</h3>
                  <p style={{ color: "#888", fontSize: "13px" }}>👁️ {article.reads}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}