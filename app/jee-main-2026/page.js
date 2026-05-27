"use client";

import Link from "next/link";

export default function JEEMainPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>JEE Main 2026 – Joint Entrance Examination</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Complete guide for JEE Main 2026 – India's largest engineering entrance exam for NITs, IIITs, and GFTIs.</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Dates (Session 1)</h2>
      <p>January 2026 (First week of January)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Dates (Session 2)</h2>
      <p>April 2026 (First week of April)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Registration Period</h2>
      <p>Session 1: November – December 2025</p>
      <p>Session 2: February – March 2026</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Mode</h2>
      <p>Computer Based Test (CBT) – Online mode only</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Pattern</h2>
      <p>Subjects: Physics, Chemistry, Mathematics</p>
      <p>Total Questions: 75 (25 from each subject)</p>
      <p>Total Marks: 300 marks</p>
      <p>Marking: +4 for correct, -1 for incorrect</p>
      <p>Duration: 3 hours</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Syllabus</h2>
      <p><strong>Physics:</strong> Mechanics, Thermodynamics, Electrodynamics, Optics, Modern Physics</p>
      <p><strong>Chemistry:</strong> Physical Chemistry, Organic Chemistry, Inorganic Chemistry</p>
      <p><strong>Mathematics:</strong> Algebra, Calculus, Coordinate Geometry, Trigonometry, Vectors</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Eligibility</h2>
      <p>10+2 with Physics, Chemistry, Mathematics (PCM)</p>
      <p>Minimum 75% marks (65% for SC/ST) or top 20 percentile in board exams</p>
      <p>No age limit (but class 12 passed in 2024, 2025, or 2026)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Participating Institutes</h2>
      <p>31 NITs + 26 IIITs + 33 GFTIs + 19 IITs (for JEE Advanced qualification)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Top NITs by Cutoff</h2>
      <p>NIT Trichy, NIT Surathkal, NIT Warangal, NIT Calicut, NIT Rourkela, NIT Durgapur, NIT Patna</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Official Website</h2>
      <p><a href="https://jeemain.nta.nic.in" target="_blank" style={{ color: "#3b82f6" }}>jeemain.nta.nic.in</a></p>
    </div>
  );
}