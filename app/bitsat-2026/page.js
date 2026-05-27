"use client";

import Link from "next/link";

export default function BITSATPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>BITSAT 2026 – Birla Institute of Technology & Science Admission Test</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>Complete guide for BITSAT 2026 – Entrance exam for BITS Pilani, BITS Goa, and BITS Hyderabad campuses.</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Dates</h2>
      <p>Session 1: May 2026 (Third week of May)</p>
      <p>Session 2: June 2026 (Third week of June)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Registration Period</h2>
      <p>January – March 2026 (Online registration)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Mode</h2>
      <p>Computer Based Test (CBT) – Online mode</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Exam Pattern</h2>
      <p>Subjects: Physics, Chemistry, Mathematics, English, Logical Reasoning</p>
      <p>Total Questions: 130 (60 from PCM, 50 from English + LR, 20 extra)</p>
      <p>Total Marks: 450 marks</p>
      <p>Marking: +3 for correct, -1 for incorrect</p>
      <p>Duration: 3 hours</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Syllabus</h2>
      <p><strong>Physics & Chemistry:</strong> Class 11 and 12 NCERT syllabus</p>
      <p><strong>Mathematics:</strong> Algebra, Calculus, Trigonometry, Coordinate Geometry</p>
      <p><strong>English:</strong> Grammar, Vocabulary, Reading Comprehension</p>
      <p><strong>Logical Reasoning:</strong> Puzzles, Data Sufficiency, Blood Relations</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Eligibility</h2>
      <p>10+2 with Physics, Chemistry, Mathematics (PCM)</p>
      <p>Minimum 75% aggregate in PCM (60% for SC/ST/PwD)</p>
      <p>At least 75% marks in each of Physics, Chemistry, Mathematics</p>
      <p>Class 12 passed in 2025 or 2026</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Participating Institutes</h2>
      <p>BITS Pilani (Pilani Campus)</p>
      <p>BITS Pilani (Goa Campus)</p>
      <p>BITS Pilani (Hyderabad Campus)</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Previous Year Cutoff (Score out of 450)</h2>
      <p>BITS Pilani: 350 – 380</p>
      <p>BITS Goa: 320 – 350</p>
      <p>BITS Hyderabad: 310 – 340</p>

      <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>Official Website</h2>
      <p><a href="https://bitsadmission.com" target="_blank" style={{ color: "#3b82f6" }}>bitsadmission.com</a></p>
    </div>
  );
}