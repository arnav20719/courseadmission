"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>
      
      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginBottom: "20px" }}>🚀 Careers After 12th</h1>
      <p style={{ color: "#4b5563", marginBottom: "40px" }}>Complete guide to career options based on your stream after 12th standard.</p>

      {/* Science Stream - PCM */}
      <div style={{ background: "#eff6ff", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🔬 Science Stream (PCM - Physics, Chemistry, Maths)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🏛️ Engineering (B.Tech/B.E)</h3>
            <p><strong>Duration:</strong> 4 Years</p>
            <p><strong>Entrance Exams:</strong> JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEE, COMEDK</p>
            <p><strong>Top Colleges:</strong> IITs, NITs, BITS Pilani, VIT, SRM, DTU, NSIT</p>
            <p><strong>Average Salary:</strong> ₹4-8 LPA (₹15-25 LPA for IITs)</p>
            <p><strong>Job Roles:</strong> Software Engineer, Civil Engineer, Mechanical Engineer, Data Scientist, AI/ML Engineer</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🏛️ Architecture (B.Arch)</h3>
            <p><strong>Duration:</strong> 5 Years</p>
            <p><strong>Entrance Exams:</strong> NATA, JEE Main Paper 2</p>
            <p><strong>Top Colleges:</strong> SPA Delhi, IIT Kharagpur, CEPT Ahmedabad, JJ School of Architecture</p>
            <p><strong>Average Salary:</strong> ₹3-6 LPA</p>
            <p><strong>Job Roles:</strong> Architect, Urban Planner, Interior Designer, Landscape Architect</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>✈️ Merchant Navy (B.Sc Nautical Science)</h3>
            <p><strong>Duration:</strong> 3 Years + Training</p>
            <p><strong>Entrance Exams:</strong> IMU CET, JEE Main</p>
            <p><strong>Top Colleges:</strong> Indian Maritime University, TS Chanakya, AMET University</p>
            <p><strong>Average Salary:</strong> ₹8-15 LPA (Tax-free)</p>
            <p><strong>Job Roles:</strong> Deck Officer, Marine Engineer, Captain, Port Manager</p>
          </div>
        </div>
      </div>

      {/* Science Stream - PCB */}
      <div style={{ background: "#dcfce7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🩺 Science Stream (PCB - Physics, Chemistry, Biology)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🩺 MBBS (Doctor)</h3>
            <p><strong>Duration:</strong> 5.5 Years (4.5 + 1 year internship)</p>
            <p><strong>Entrance Exams:</strong> NEET</p>
            <p><strong>Top Colleges:</strong> AIIMS, CMC Vellore, JIPMER, Maulana Azad Medical College</p>
            <p><strong>Average Salary:</strong> ₹6-12 LPA (₹15-30 LPA for specialists)</p>
            <p><strong>Job Roles:</strong> Physician, Surgeon, Pediatrician, Gynecologist, Medical Officer</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>💊 BDS (Dentist)</h3>
            <p><strong>Duration:</strong> 5 Years (4 + 1 year internship)</p>
            <p><strong>Entrance Exams:</strong> NEET</p>
            <p><strong>Top Colleges:</strong> Maulana Azad Institute of Dental Sciences, Manipal College of Dental Sciences</p>
            <p><strong>Average Salary:</strong> ₹4-8 LPA</p>
            <p><strong>Job Roles:</strong> Dentist, Orthodontist, Dental Surgeon, Oral Pathologist</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🥼 B.Pharm (Pharmacy)</h3>
            <p><strong>Duration:</strong> 4 Years</p>
            <p><strong>Entrance Exams:</strong> GPAT, BITSAT, NIPER JEE</p>
            <p><strong>Top Colleges:</strong> NIPER, BITS Pilani, Jamia Hamdard, Manipal College of Pharmaceutical Sciences</p>
            <p><strong>Average Salary:</strong> ₹3-6 LPA</p>
            <p><strong>Job Roles:</strong> Pharmacist, Clinical Research Associate, Drug Inspector, Quality Control Officer</p>
          </div>
        </div>
      </div>

      {/* Commerce Stream */}
      <div style={{ background: "#fef3c7", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>💰 Commerce Stream</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>📊 Chartered Accountancy (CA)</h3>
            <p><strong>Duration:</strong> 4-5 Years</p>
            <p><strong>Exams:</strong> CA Foundation, CA Intermediate, CA Final</p>
            <p><strong>Top Institutes:</strong> ICAI, Regional Coaching Centers</p>
            <p><strong>Average Salary:</strong> ₹7-12 LPA (₹20-30 LPA experienced)</p>
            <p><strong>Job Roles:</strong> Auditor, Tax Consultant, Finance Manager, CFO, Investment Banker</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🏦 Bachelor of Commerce (B.Com)</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p><strong>Specializations:</strong> Accounting, Finance, Banking, Taxation, E-Commerce</p>
            <p><strong>Top Colleges:</strong> SRCC, Hindu College, Loyola College, Christ University</p>
            <p><strong>Average Salary:</strong> ₹3-5 LPA (₹6-10 LPA after MBA)</p>
            <p><strong>Job Roles:</strong> Accountant, Financial Analyst, Banking Officer, Tax Consultant, Auditor</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>🎯 Company Secretary (CS)</h3>
            <p><strong>Duration:</strong> 2-3 Years</p>
            <p><strong>Exams:</strong> CSEET, CS Executive, CS Professional</p>
            <p><strong>Top Institutes:</strong> ICSI</p>
            <p><strong>Average Salary:</strong> ₹5-10 LPA</p>
            <p><strong>Job Roles:</strong> Company Secretary, Legal Advisor, Compliance Officer</p>
          </div>
        </div>
      </div>

      {/* Arts Stream */}
      <div style={{ background: "#fce7f3", padding: "25px", borderRadius: "16px", marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>🎨 Arts/Humanities Stream</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>📖 Bachelor of Arts (BA)</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p><strong>Specializations:</strong> English, History, Political Science, Psychology, Sociology, Economics, Geography</p>
            <p><strong>Top Colleges:</strong> DU colleges, JNU, BHU, Presidency University, Loyola College</p>
            <p><strong>Average Salary:</strong> ₹2-5 LPA (₹5-10 LPA after MA)</p>
            <p><strong>Job Roles:</strong> Civil Services, Teacher, Journalist, Social Worker, Content Writer, Psychologist</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>⚖️ Bachelor of Laws (LL.B)</h3>
            <p><strong>Duration:</strong> 3 Years (after graduation) or 5 Years (integrated)</p>
            <p><strong>Entrance Exams:</strong> CLAT, AILET, LSAT India, DU LLB Entrance</p>
            <p><strong>Top Colleges:</strong> NLU Delhi, NALSAR Hyderabad, NLSIU Bangalore, GLC Mumbai</p>
            <p><strong>Average Salary:</strong> ₹5-10 LPA (₹15-30 LPA in corporate law)</p>
            <p><strong>Job Roles:</strong> Lawyer, Legal Advisor, Judge, Corporate Counsel, Public Prosecutor</p>
          </div>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1e3a8a" }}>📺 Mass Communication & Journalism</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p><strong>Entrance Exams:</strong> IPU CET, SET, JMI Entrance, IIMC Entrance</p>
            <p><strong>Top Colleges:</strong> IIMC, XIC Mumbai, AJK MCRC, Symbiosis Pune, Asian College of Journalism</p>
            <p><strong>Average Salary:</strong> ₹3-6 LPA</p>
            <p><strong>Job Roles:</strong> Journalist, News Anchor, PR Specialist, Digital Marketing Manager, Content Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
}