"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedBanner from "./components/AnimatedBanner";

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
      <AnimatedBanner />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-grid">
          {/* Left Side */}
          <div>
            <h1>Your Dream College <br/>Starts Here</h1>
            <div className="hero-tags">
              <span className="hero-tag">💰 0 Investment</span>
              <span className="hero-tag">🎯 100% Free</span>
              <span className="hero-tag">📞 Expert Guidance</span>
            </div>
            <p>Get personalized guidance from expert counselors. Find the perfect college that matches your profile and budget.</p>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-number">10,000+</div>
                <div className="hero-stat-label">Students Helped</div>
              </div>
              <div>
                <div className="hero-stat-number">1,200+</div>
                <div className="hero-stat-label">Colleges Listed</div>
              </div>
              <div>
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Free Guidance</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="form-card">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #ff6b35, #f7931e)",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                fontSize: "24px"
              }}>🎓</div>
              <h2>Get Free Admission Guidance</h2>
              <p>Fill the form. Counselor will call you within 24 hours.</p>
            </div>

            {submitted ? (
              <div style={{ background: "#dcfce7", color: "#166534", padding: "24px", borderRadius: "14px", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "8px" }}>✅</div>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>Thank You!</h3>
                <p style={{ fontSize: "12px" }}>Our counselor will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Mobile Number *" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <select name="course" required value={formData.course} onChange={handleChange}>
                    <option value="">Select Course *</option>
                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="interestedCollege" placeholder="Interested College (Optional)" value={formData.interestedCollege} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <select name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select Budget (per year)</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting} className="form-submit">
                  {submitting ? "Submitting..." : "Get Free Counseling →"}
                </button>
              </form>
            )}
            <p style={{ fontSize: "10px", color: "#9ca3af", textAlign: "center", marginTop: "14px" }}>🔒 No spam. Your data is safe with us.</p>
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)", color: "white" }}>POPULAR COURSES</span>
            <h2 className="section-title">Explore Top Courses</h2>
            <p className="section-subtitle">With high placement records and growing demand</p>
          </div>

          <div className="courses-grid">
            {[
              { name: "Engineering", icon: "⚙️", color: "#3b82f6", count: "5,000+ Colleges" },
              { name: "Medical", icon: "🩺", color: "#10b981", count: "1,200+ Colleges" },
              { name: "Management", icon: "📈", color: "#f59e0b", count: "5,000+ Colleges" },
              { name: "Computer Applications", icon: "💻", color: "#8b5cf6", count: "2,500+ Colleges" },
              { name: "Commerce", icon: "💰", color: "#06b6d4", count: "4,000+ Colleges" },
              { name: "Law", icon: "⚖️", color: "#ef4444", count: "800+ Colleges" },
              { name: "Pharmacy", icon: "💊", color: "#ec4899", count: "1,500+ Colleges" },
              { name: "Agriculture", icon: "🌾", color: "#84cc16", count: "800+ Colleges" },
            ].map((course, i) => (
              <Link key={i} href={`/colleges?stream=${course.name}`} className="course-card">
                <div className="course-icon" style={{ background: `linear-gradient(135deg, ${course.color}15, ${course.color}05)` }}>
                  <span style={{ fontSize: "26px" }}>{course.icon}</span>
                </div>
                <div className="course-name" style={{ color: course.color }}>{course.name}</div>
                <div className="course-count">{course.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Top Colleges Section */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: "#fef3c7", color: "#d97706" }}>TOP RANKED</span>
            <h2 className="section-title">🏆 India's Best Colleges</h2>
            <p className="section-subtitle">Based on NIRF Rankings 2026</p>
          </div>

          <div className="colleges-grid">
            {[
              { name: "IIT Bombay", rank: "NIRF #3", fees: "₹2.2L/year", placement: "₹25 LPA", color: "#3b82f6" },
              { name: "IIT Delhi", rank: "NIRF #2", fees: "₹2.2L/year", placement: "₹30 LPA", color: "#3b82f6" },
              { name: "IIT Madras", rank: "NIRF #1", fees: "₹2.2L/year", placement: "₹28 LPA", color: "#3b82f6" },
              { name: "AIIMS Delhi", rank: "NIRF #1", fees: "₹7.7K/year", placement: "₹15 LPA", color: "#10b981" },
              { name: "IIM Ahmedabad", rank: "NIRF #1", fees: "₹23L/year", placement: "₹32 LPA", color: "#f59e0b" },
              { name: "NIT Trichy", rank: "NIRF #8", fees: "₹1.5L/year", placement: "₹22 LPA", color: "#8b5cf6" },
            ].map((college, i) => (
              <div key={i} className="college-card">
                <div className="college-header">
                  <h3 className="college-name">{college.name}</h3>
                  <span className="college-rank" style={{ background: college.color }}>{college.rank}</span>
                </div>
                <div className="college-fees">💰 {college.fees}</div>
                <div className="college-placement">📊 {college.placement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}