"use client";

import Link from "next/link";

export default function CoursesPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px" }}>📚 Courses After 12th</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Complete list of undergraduate courses based on your stream after 12th standard.</p>

      <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>🔧 Engineering & Technology</h2>
        <p><strong>B.Tech/B.E</strong> - 4 years | Eligibility: 10+2 PCM | Entrance: JEE Main</p>
        <p><strong>B.Arch</strong> - 5 years | Eligibility: 10+2 PCM | Entrance: NATA</p>
        <p><strong>BCA</strong> - 3 years | Eligibility: 10+2 with Mathematics</p>
      </div>

      <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>🩺 Medical & Healthcare</h2>
        <p><strong>MBBS</strong> - 5.5 years | Eligibility: 10+2 PCB | Entrance: NEET</p>
        <p><strong>BDS</strong> - 5 years | Eligibility: 10+2 PCB | Entrance: NEET</p>
        <p><strong>B.Pharm</strong> - 4 years | Eligibility: 10+2 PCB/PCM</p>
        <p><strong>B.Sc Nursing</strong> - 4 years | Eligibility: 10+2 PCB</p>
      </div>

      <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>💰 Commerce & Business</h2>
        <p><strong>B.Com</strong> - 3 years | Eligibility: 10+2 Commerce</p>
        <p><strong>BBA</strong> - 3 years | Eligibility: 10+2 any stream</p>
        <p><strong>CA</strong> - 4-5 years | After 10+2 | Exams: Foundation, Intermediate, Final</p>
        <p><strong>CS</strong> - 2-3 years | After 10+2</p>
      </div>

      <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>🎨 Arts & Humanities</h2>
        <p><strong>BA</strong> - 3 years | Eligibility: 10+2 any stream</p>
        <p><strong>LL.B</strong> - 3 or 5 years | Entrance: CLAT, AILET</p>
        <p><strong>BJMC</strong> - 3 years | Mass Communication & Journalism</p>
      </div>

      <div style={{ background: "#e0e7ff", padding: "20px", borderRadius: "12px" }}>
        <h2 style={{ color: "#1e3a8a" }}>💻 Computer Applications & IT</h2>
        <p><strong>BCA</strong> - 3 years | Eligibility: 10+2 with Mathematics</p>
        <p><strong>MCA</strong> - 2 years | After graduation (BCA/B.Sc CS)</p>
        <p><strong>B.Sc IT</strong> - 3 years | Eligibility: 10+2 with Mathematics</p>
      </div>
    </div>
  );
}