"use client";

import Link from "next/link";

export default function CoursesAfter12thPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginBottom: "10px" }}>📚 Courses After 12th</h1>
      <p style={{ color: "#4b5563", marginBottom: "40px" }}>Complete guide to undergraduate courses based on your stream after 12th standard.</p>

      {/* Engineering Courses */}
      <div style={{ background: "#eff6ff", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🔧 Engineering & Technology (B.Tech/B.E) - 4 Years</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Computer Science Engineering (CSE)</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Software, AI, ML, Data Science, Cybersecurity</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Electronics & Communication (ECE)</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Chip design, VLSI, Embedded Systems, IoT</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Mechanical Engineering</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Automobile, Robotics, Manufacturing, HVAC</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Civil Engineering</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Construction, Structural, Transportation</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Electrical Engineering (EE)</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Power Systems, Renewable Energy, Electric Vehicles</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Information Technology (IT)</strong>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Networking, Cloud Computing, Database Management</p>
          </div>
        </div>
      </div>

      {/* Medical Courses */}
      <div style={{ background: "#dcfce7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🩺 Medical & Healthcare Courses</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>MBBS (Bachelor of Medicine)</strong>
            <p>Duration: 5.5 Years | Entrance: NEET</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BDS (Bachelor of Dental Surgery)</strong>
            <p>Duration: 5 Years | Entrance: NEET</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BAMS (Ayurveda)</strong>
            <p>Duration: 5.5 Years | Entrance: NEET</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Sc Nursing</strong>
            <p>Duration: 4 Years | Entrance: NEET/State Exam</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Pharm (Pharmacy)</strong>
            <p>Duration: 4 Years | Entrance: GPAT/State</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BPT (Physiotherapy)</strong>
            <p>Duration: 4.5 Years | Entrance: NEET</p>
          </div>
        </div>
      </div>

      {/* Commerce Courses */}
      <div style={{ background: "#fef3c7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>💰 Commerce & Business Courses</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Com (Bachelor of Commerce)</strong>
            <p>Duration: 3 Years | Specialization: Accounting, Finance, Taxation</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BBA (Bachelor of Business Admin)</strong>
            <p>Duration: 3 Years | Specialization: Marketing, HR, Finance</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>CA (Chartered Accountancy)</strong>
            <p>Duration: 4-5 Years | Exams: Foundation, Intermediate, Final</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>CS (Company Secretary)</strong>
            <p>Duration: 2-3 Years | Exams: CSEET, Executive, Professional</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>CMA (Cost & Management Accountant)</strong>
            <p>Duration: 3-4 Years | Institute: ICMAI</p>
          </div>
        </div>
      </div>

      {/* Arts Courses */}
      <div style={{ background: "#fce7f3", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🎨 Arts & Humanities Courses</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BA (Bachelor of Arts)</strong>
            <p>Duration: 3 Years | Specialization: English, History, Political Science, Psychology, Economics</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>LL.B (Bachelor of Laws)</strong>
            <p>Duration: 3 or 5 Years | Entrance: CLAT, AILET, LSAT</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BJMC (Mass Communication)</strong>
            <p>Duration: 3 Years | Career: Journalism, Advertising, PR</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BFA (Fine Arts)</strong>
            <p>Duration: 3-4 Years | Specialization: Painting, Sculpture</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BSW (Social Work)</strong>
            <p>Duration: 3 Years | Career: NGO, Counselor</p>
          </div>
        </div>
      </div>

      {/* Professional Courses */}
      <div style={{ background: "#e0e7ff", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🎯 Professional & Design Courses</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>BCA (Computer Applications)</strong>
            <p>Duration: 3 Years | Career: Software Developer, Web Developer</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Arch (Architecture)</strong>
            <p>Duration: 5 Years | Entrance: NATA, JEE Main Paper 2</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Des (Design)</strong>
            <p>Duration: 4 Years | Specialization: Fashion, Product, Interior</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>Hotel Management (BHM)</strong>
            <p>Duration: 3-4 Years | Entrance: NCHMCT JEE</p>
          </div>
          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            <strong>B.Sc Agriculture</strong>
            <p>Duration: 4 Years | Career: Agricultural Officer, Researcher</p>
          </div>
        </div>
      </div>
    </div>
  );
}