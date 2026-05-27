"use client";

import Link from "next/link";

export default function CATPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>CAT 2026 – Common Admission Test</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Complete guide for CAT 2026 – India's most prestigious MBA entrance exam for IIMs and top B-schools.</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Date</h2>
      <p>November 2026 (Last week of November)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Registration</h2>
      <p>August – September 2026 (Online registration)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Pattern</h2>
      <p>Sections: VARC, DILR, QA (Total 66 questions, 198 marks)</p>
      <p>Marking: +3 for correct, -1 for incorrect</p>
      <p>Duration: 2 hours (40 minutes per section)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Syllabus</h2>
      <p>VARC: Reading Comprehension, Para Jumbles, Vocabulary</p>
      <p>DILR: Data Tables, Graphs, Puzzles, Seating Arrangement</p>
      <p>QA: Arithmetic, Algebra, Geometry, Number System</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Eligibility</h2>
      <p>Bachelor's degree with 50% marks (45% for SC/ST/PwD)</p>
      <p>Final year students can apply | No age limit</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Top IIMs</h2>
      <p>IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, IIM Kozhikode, IIM Indore, IIM Mumbai</p>
    </div>
  );
}