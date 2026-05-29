"use client";

import { useState } from "react";
import Link from "next/link";

export default function Homepage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    interestedCollege: "",
    budget: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Engineering (B.Tech)",
    "Medical (MBBS)",
    "Management (MBA/BBA)",
    "Computer Applications (BCA/MCA)",
    "Commerce (B.Com/M.Com)",
    "Arts (BA/MA)",
    "Law (LL.B)",
    "Pharmacy (B.Pharm)",
    "Agriculture (B.Sc)",
    "Nursing (B.Sc)",
    "Architecture (B.Arch)",
  ];

  const budgets = [
    "Under ₹50,000/year",
    "₹50,000 - ₹1,00,000/year",
    "₹1,00,000 - ₹2,00,000/year",
    "₹2,00,000 - ₹5,00,000/year",
    "Above ₹5,00,000/year",
    "Not sure / Any budget",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          stream: formData.course,
          message: `Interested College: ${formData.interestedCollege || "Not specified"}, Budget: ${formData.budget || "Not specified"}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", course: "", interestedCollege: "", budget: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <div style={{
        background: "linear-gradient(135deg, #ff6b35, #f7931e)",
        color: "white",
        textAlign: "center",
        padding: "12px",
        fontSize: "14px",
        fontWeight: "600",
      }}>
        🔥 2026 Admissions Going On! Limited Seats Available. Apply Now for Free Counseling 🔥
      </div>

      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "60px 20px",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>
          <div style={{ color: "white" }}>
            <h1 style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}>
              Your Dream College <br/>Starts Here
            </h1>
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "50px", fontSize: "13px" }}>💰 0 Investment</span>
              <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "50px", fontSize: "13px" }}>🎯 100% Free</span>
              <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "50px", fontSize: "13px" }}>📞 Expert Guidance</span>
            </div>
            <p style={{ fontSize: "16px", marginBottom: "32px", opacity: 0.9, lineHeight: "1.6" }}>
              Get personalized guidance from expert counselors. Find the perfect college that matches your profile and budget.
            </p>
            <div style={{ display: "flex", gap: "40px", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "32px" }}>
              <div><div style={{ fontSize: "28px", fontWeight: "700" }}>10,000+</div><div style={{ fontSize: "13px", opacity: 0.8 }}>Students Helped</div></div>
              <div><div style={{ fontSize: "28px", fontWeight: "700" }}>1,200+</div><div style={{ fontSize: "13px", opacity: 0.8 }}>Colleges Listed</div></div>
              <div><div style={{ fontSize: "28px", fontWeight: "700" }}>100%</div><div style={{ fontSize: "13px", opacity: 0.8 }}>Free Guidance</div></div>
            </div>
          </div>

          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #ff6b35, #f7931e)",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: "28px",
              }}>🎓</div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>Get Free Admission Guidance</h2>
              <p style={{ color: "#6b7280", fontSize: "14px" }}>Fill the form. Counselor will call you within 24 hours.</p>
            </div>

            {submitted ? (
              <div style={{ background: "#dcfce7", color: "#166534", padding: "24px", borderRadius: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>Thank You!</h3>
                <p>Our counselor will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", marginBottom: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontSize: "15px" }} />
                <input type="tel" name="phone" placeholder="Mobile Number *" required value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", marginBottom: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontSize: "15px" }} />
                <select name="course" required value={formData.course} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", marginBottom: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontSize: "15px", background: "white" }}>
                  <option value="">Select Course *</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input type="text" name="interestedCollege" placeholder="Interested College (Optional)" value={formData.interestedCollege} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", marginBottom: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontSize: "15px" }} />
                <select name="budget" value={formData.budget} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", marginBottom: "24px", border: "1px solid #e2e8f0", borderRadius: "12px", fontSize: "15px", background: "white" }}>
                  <option value="">Select Budget (per year)</option>
                  {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <button type="submit" disabled={submitting} style={{ width: "100%", padding: "14px", background: submitting ? "#94a3b8" : "linear-gradient(135deg, #ff6b35, #f7931e)", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>
                  {submitting ? "Submitting..." : "Get Free Counseling →"}
                </button>
              </form>
            )}
            <p style={{ fontSize: "11px", color: "#9ca3af", textAlign: "center", marginTop: "16px" }}>🔒 No spam. Your data is safe with us.</p>
          </div>
        </div>
      </div>

      {/* Popular Courses Section - PREMIUM DESIGN */}
      <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              background: "linear-gradient(135deg, #ff6b35, #f7931e)",
              color: "white",
              padding: "6px 20px",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "16px",
            }}>POPULAR COURSES</span>
            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1a1a2e", marginBottom: "12px" }}>Explore Top Courses</h2>
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>With high placement records and growing demand</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px" }}>
            {[
              { name: "Engineering", icon: "⚙️", gradient: "linear-gradient(135deg, #3b82f6, #2563eb)", count: "5,000+ Colleges", bg: "linear-gradient(135deg, #eff6ff, #dbeafe)" },
              { name: "Medical", icon: "🩺", gradient: "linear-gradient(135deg, #10b981, #059669)", count: "1,200+ Colleges", bg: "linear-gradient(135deg, #ecfdf5, #d1fae5)" },
              { name: "Management", icon: "📈", gradient: "linear-gradient(135deg, #f59e0b, #d97706)", count: "5,000+ Colleges", bg: "linear-gradient(135deg, #fffbeb, #fef3c7)" },
              { name: "Computer Applications", icon: "💻", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", count: "2,500+ Colleges", bg: "linear-gradient(135deg, #f5f3ff, #ede9fe)" },
              { name: "Commerce", icon: "💰", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", count: "4,000+ Colleges", bg: "linear-gradient(135deg, #ecfeff, #cffafe)" },
              { name: "Law", icon: "⚖️", gradient: "linear-gradient(135deg, #ef4444, #dc2626)", count: "800+ Colleges", bg: "linear-gradient(135deg, #fef2f2, #fee2e2)" },
              { name: "Pharmacy", icon: "💊", gradient: "linear-gradient(135deg, #ec4899, #db2777)", count: "1,500+ Colleges", bg: "linear-gradient(135deg, #fdf2f8, #fce7f3)" },
              { name: "Agriculture", icon: "🌾", gradient: "linear-gradient(135deg, #84cc16, #65a30d)", count: "800+ Colleges", bg: "linear-gradient(135deg, #f7fee7, #ecfccb)" },
            ].map((course, i) => (
              <Link key={i} href={`/colleges?stream=${course.name}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: course.bg,
                  borderRadius: "24px",
                  padding: "32px 20px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 30px -12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: course.gradient,
                    borderRadius: "50%",
                    opacity: 0.1,
                  }} />
                  <div style={{
                    background: course.gradient,
                    width: "70px",
                    height: "70px",
                    borderRadius: "35px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "32px",
                    boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)",
                  }}>
                    {course.icon}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>{course.name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>{course.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Top Colleges Section */}
      <div style={{ background: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ background: "#fef3c7", color: "#d97706", padding: "6px 20px", borderRadius: "50px", fontSize: "12px", fontWeight: "600", display: "inline-block", marginBottom: "16px" }}>TOP RANKED</span>
            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1a1a2e", marginBottom: "12px" }}>🏆 India's Best Colleges</h2>
            <p style={{ fontSize: "16px", color: "#64748b" }}>Based on NIRF Rankings 2026</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "IIT Bombay", rank: "NIRF #3", fees: "₹2.2L/year", placement: "₹25 LPA", color: "#3b82f6" },
              { name: "IIT Delhi", rank: "NIRF #2", fees: "₹2.2L/year", placement: "₹30 LPA", color: "#3b82f6" },
              { name: "IIT Madras", rank: "NIRF #1", fees: "₹2.2L/year", placement: "₹28 LPA", color: "#3b82f6" },
              { name: "AIIMS Delhi", rank: "NIRF #1", fees: "₹7.7K/year", placement: "₹15 LPA", color: "#10b981" },
              { name: "IIM Ahmedabad", rank: "NIRF #1", fees: "₹23L/year", placement: "₹32 LPA", color: "#f59e0b" },
              { name: "NIT Trichy", rank: "NIRF #8", fees: "₹1.5L/year", placement: "₹22 LPA", color: "#8b5cf6" },
            ].map((college, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: "20px",
                padding: "24px",
                transition: "all 0.3s",
                border: "1px solid #eef2ff",
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 30px -12px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#1a1a2e" }}>{college.name}</h3>
                  <span style={{ background: college.color, color: "white", padding: "4px 14px", borderRadius: "50px", fontSize: "11px", fontWeight: "600" }}>{college.rank}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid #eef2ff" }}>
                  <p style={{ color: "#4b5563", fontSize: "14px" }}>💰 {college.fees}</p>
                  <p style={{ color: "#4b5563", fontSize: "14px" }}>📊 {college.placement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}