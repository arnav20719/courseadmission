"use client";

import Link from "next/link";

export default function CoursesPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px" }}>📚 Courses After 12th</h1>
      <p>Complete list of undergraduate courses based on your stream after 12th standard.</p>
      
      <h2 style={{ marginTop: "30px" }}>🔧 Engineering Courses</h2>
      <p>B.Tech - 4 years | Eligibility: 10+2 PCM | Entrance: JEE Main</p>
      <p>B.Arch - 5 years | Eligibility: 10+2 PCM | Entrance: NATA</p>
      
      <h2 style={{ marginTop: "20px" }}>🩺 Medical Courses</h2>
      <p>MBBS - 5.5 years | Eligibility: 10+2 PCB | Entrance: NEET</p>
      <p>BDS - 5 years | Eligibility: 10+2 PCB | Entrance: NEET</p>
      <p>B.Pharm - 4 years | Eligibility: 10+2 PCB/PCM</p>
      
      <h2 style={{ marginTop: "20px" }}>💰 Commerce Courses</h2>
      <p>B.Com - 3 years | Eligibility: 10+2 Commerce</p>
      <p>BBA - 3 years | Eligibility: 10+2 any stream</p>
      <p>CA - 4-5 years | After 10+2</p>
      
      <h2 style={{ marginTop: "20px" }}>🎨 Arts Courses</h2>
      <p>BA - 3 years | Eligibility: 10+2 any stream</p>
      <p>LL.B - 3 or 5 years | Entrance: CLAT</p>
      <p>BJMC - 3 years | Mass Communication</p>
      
      <h2 style={{ marginTop: "20px" }}>💻 IT Courses</h2>
      <p>BCA - 3 years | Eligibility: 10+2 with Maths</p>
      <p>MCA - 2 years | After graduation</p>
    </div>
  );
}