"use client";

import { useState } from "react";

export default function ExamsPage() {
  const [selectedCategory, setSelectedCategory] = useState("engineering");

  const examCategories = [
    { id: "engineering", name: "🔧 Engineering", color: "#3b82f6" },
    { id: "medical", name: "🩺 Medical", color: "#10b981" },
    { id: "management", name: "💼 Management", color: "#ff6b35" },
    { id: "computer", name: "💻 Computer Applications", color: "#8b5cf6" },
    { id: "commerce", name: "📊 Commerce & Banking", color: "#f59e0b" },
    { id: "law", name: "⚖️ Law", color: "#ec4899" },
    { id: "design", name: "🎨 Design", color: "#d946ef" },
  ];

  const examsData = {
    engineering: [
      { 
        name: "JEE Main 2026", icon: "📝",
        date: "January Session: Jan 15-31, 2026<br/>April Session: Apr 1-15, 2026",
        registration: "Dec 15, 2025 - Jan 10, 2026",
        eligibility: "10+2 with PCM, 75% for NITs/IIITs (65% for SC/ST)",
        syllabus: "Physics, Chemistry, Mathematics (Class 11 & 12 NCERT)",
        pattern: "90 MCQs, 3 hours, +4 for correct, -1 for incorrect",
        website: "https://jeemain.nta.nic.in",
        colleges: "NITs, IIITs, GFTIs, 3000+ Private Colleges",
        preparation: "NCERT books, Previous 10 year papers, Mock tests"
      },
      { 
        name: "JEE Advanced 2026", icon: "🎯",
        date: "May 24, 2026",
        registration: "April 2026",
        eligibility: "Top 2,50,000 JEE Main rankers",
        syllabus: "JEE Main syllabus + additional topics",
        pattern: "2 papers, 3 hours each, MCQs + Numerical",
        website: "https://jeeadv.ac.in",
        colleges: "23 IITs, IISc Bangalore",
        preparation: "Concept clarity, Advanced problem solving, Previous JEE Advanced papers"
      },
      { 
        name: "BITSAT 2026", icon: "🏛️",
        date: "May 20-30, 2026",
        registration: "Jan - March 2026",
        eligibility: "10+2 with PCM, 75% aggregate",
        syllabus: "NCERT + Higher order thinking",
        pattern: "130 MCQs, 3 hours, +3 for correct, -1 for incorrect",
        website: "https://bitsadmission.com",
        colleges: "BITS Pilani, BITS Goa, BITS Hyderabad",
        preparation: "Speed and accuracy, Time management"
      },
      { 
        name: "VITEEE 2026", icon: "🏫",
        date: "April 15-25, 2026",
        registration: "Nov 2025 - March 2026",
        eligibility: "10+2 with PCM, 60% aggregate",
        syllabus: "11th & 12th NCERT",
        pattern: "125 MCQs, 2.5 hours, +1 for correct",
        website: "https://viteee.vit.ac.in",
        colleges: "VIT Vellore, VIT Chennai, VIT AP, VIT Bhopal",
        preparation: "NCERT, Time management, Mock tests"
      },
      { 
        name: "SRMJEEE 2026", icon: "🎓",
        date: "April - June 2026 (Multiple phases)",
        registration: "Nov 2025 - May 2026",
        eligibility: "10+2 with PCM, 60% aggregate",
        syllabus: "11th & 12th syllabus",
        pattern: "125 MCQs, 2.5 hours",
        website: "https://applications.srmist.edu.in",
        colleges: "SRM University (Kattankulathur, Ramapuram, Vadapalani)",
        preparation: "NCERT, Online mock tests"
      },
      { 
        name: "COMEDK UGET 2026", icon: "⚙️",
        date: "May 10, 2026",
        registration: "Jan - March 2026",
        eligibility: "10+2 with PCM, 45% aggregate",
        syllabus: "2nd PUC syllabus",
        pattern: "180 MCQs, 3 hours",
        website: "https://comedk.org",
        colleges: "150+ Private Engineering Colleges in Karnataka",
        preparation: "NCERT, Previous year papers"
      },
      { 
        name: "WBJEE 2026", icon: "📘",
        date: "April 28, 2026",
        registration: "Dec 2025 - Jan 2026",
        eligibility: "10+2 with PCM, 45% aggregate",
        syllabus: "West Bengal Board + NCERT",
        pattern: "155 MCQs, 2 Papers, 4 hours",
        website: "https://wbjeeb.nic.in",
        colleges: "Jadavpur University, IIEST Shibpur, 30+ Govt Colleges",
        preparation: "State board syllabus focus"
      }
    ],
    medical: [
      { 
        name: "NEET 2026", icon: "🩺",
        date: "May 5, 2026",
        registration: "February - March 2026",
        eligibility: "10+2 with PCB, 50% for General (40% for SC/ST/OBC)",
        syllabus: "Physics, Chemistry, Biology (Botany & Zoology) - NCERT",
        pattern: "200 MCQs, 180 to answer, 3hr 20min, +4 for correct, -1 for incorrect",
        website: "https://neet.nta.nic.in",
        colleges: "AIIMS, JIPMER, All Govt & Private Medical Colleges",
        preparation: "NCERT is the BEST, Daily revisions, Mock tests"
      },
      { 
        name: "AIIMS MBBS", icon: "🏥",
        date: "May 2026 (Same as NEET)",
        registration: "Through NEET only",
        eligibility: "NEET qualified",
        syllabus: "NEET syllabus",
        pattern: "Same as NEET",
        website: "https://aiimsexams.ac.in",
        colleges: "All AIIMS (Delhi, Bhopal, Bhubaneswar, Jodhpur, Patna, etc.)",
        preparation: "Extra focus on AIIMS-specific topics"
      }
    ],
    management: [
      { 
        name: "CAT 2026", icon: "🐱",
        date: "November 24, 2026",
        registration: "August - September 2026",
        eligibility: "Bachelor's degree with 50% (45% for SC/ST)",
        syllabus: "VARC, DILR, Quantitative Aptitude",
        pattern: "66 MCQs, 2 hours, +3 for correct, -1 for incorrect",
        website: "https://iimcat.ac.in",
        colleges: "20 IIMs, 100+ Top B-schools",
        preparation: "Concept clarity, Speed, Mock tests"
      },
      { 
        name: "XAT 2026", icon: "✖️",
        date: "January 4, 2026",
        registration: "August - November 2025",
        eligibility: "Bachelor's degree (any discipline)",
        syllabus: "VA, DM, QA, GK",
        pattern: "100+ MCQs, 3 hours, +1 for correct, -0.25 for incorrect",
        website: "https://xatonline.in",
        colleges: "XLRI, SPJIMR, XIMB, 150+ B-schools",
        preparation: "Decision Making section specially"
      },
      { 
        name: "MAT 2026", icon: "📊",
        date: "Feb, May, Sep, Dec 2026 (4 times a year)",
        registration: "Always open",
        eligibility: "Bachelor's degree",
        syllabus: "Language, Intelligence, Data, Math",
        pattern: "200 MCQs, 2.5 hours",
        website: "https://mat.aima.in",
        colleges: "600+ B-schools (not IIMs)",
        preparation: "Focus on speed and accuracy"
      }
    ],
    computer: [
      { 
        name: "NIMCET 2026", icon: "💻",
        date: "May 2026",
        registration: "March - April 2026",
        eligibility: "BCA/B.Sc/B.Tech with 60%",
        syllabus: "Mathematics, Reasoning, Computer, English",
        pattern: "120 MCQs, 2 hours",
        website: "https://nimcet.in",
        colleges: "NITs for MCA",
        preparation: "Focus on Mathematics and Computer"
      },
      { 
        name: "CUET PG (MCA)", icon: "📘",
        date: "March 2026",
        registration: "January 2026",
        eligibility: "BCA/B.Sc/B.Tech",
        syllabus: "Computer Science, Mathematics",
        pattern: "75 MCQs, 1.5 hours",
        website: "https://cuet.nta.nic.in",
        colleges: "Central Universities for MCA",
        preparation: "Computer fundamentals + Mathematics"
      }
    ],
    commerce: [
      { 
        name: "CUET UG (B.Com)", icon: "📊",
        date: "May 2026",
        registration: "February - March 2026",
        eligibility: "10+2 Commerce/Arts/Science",
        syllabus: "Accountancy, Business Studies, Economics, Maths",
        pattern: "MCQs, 45 minutes per subject",
        website: "https://cuet.samarth.ac.in",
        colleges: "DU, BHU, Allahabad University, 250+ Central/State Universities",
        preparation: "NCERT Commerce books"
      },
      { 
        name: "CA Foundation", icon: "📈",
        date: "June & December 2026",
        registration: "January & July 2026",
        eligibility: "10+2 pass",
        syllabus: "Accounts, Law, Maths, Economics",
        pattern: "4 papers, 200 marks each",
        website: "https://icai.org",
        colleges: "Any (self-study + coaching)",
        preparation: "ICAI study material, Practice manuals"
      }
    ],
    law: [
      { 
        name: "CLAT 2026", icon: "⚖️",
        date: "December 2026",
        registration: "July - November 2026",
        eligibility: "10+2 with 45% (40% for SC/ST)",
        syllabus: "Legal Reasoning, Logical Reasoning, English, GK, Math",
        pattern: "120 MCQs, 2 hours, +1 for correct",
        website: "https://consortiumofnlus.ac.in",
        colleges: "22 NLUs + 50+ Private Law Colleges",
        preparation: "Legal aptitude, Reading newspapers"
      },
      { 
        name: "AILET 2026", icon: "🏛️",
        date: "May 2026",
        registration: "January - April 2026",
        eligibility: "10+2 with 50%",
        syllabus: "English, GK, Legal Reasoning, Logical Reasoning",
        pattern: "150 MCQs, 1.5 hours",
        website: "https://nludelhi.ac.in",
        colleges: "NLU Delhi",
        preparation: "Focus on English and Legal Aptitude"
      }
    ],
    design: [
      { 
        name: "NID DAT 2026", icon: "🎨",
        date: "Prelims: January 2026, Mains: April 2026",
        registration: "September - November 2025",
        eligibility: "10+2 pass",
        syllabus: "Design Aptitude, Creativity, Drawing",
        pattern: "MCQs + Subjective drawing",
        website: "https://nid.edu",
        colleges: "NID Ahmedabad, NID Bengaluru, NID Gandhinagar",
        preparation: "Practice drawing, Creative thinking"
      },
      { 
        name: "UCEED 2026", icon: "🎯",
        date: "January 2026",
        registration: "October - November 2025",
        eligibility: "10+2 pass",
        syllabus: "Visualization, Observation, Design, Drawing",
        pattern: "MCQs + Numerical + Drawing",
        website: "https://uceed.iitb.ac.in",
        colleges: "IIT Bombay, IIT Guwahati, IIT Hyderabad, IIITDM Jabalpur",
        preparation: "Spatial ability, Observation skills"
      }
    ]
  };

  const currentExams = examsData[selectedCategory] || [];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#1a1a2e", marginBottom: "10px" }}>📝 Entrance Exams 2026</h1>
        <p style={{ color: "#666" }}>Complete guide to all entrance exams in India - Dates, Eligibility, Syllabus, Pattern</p>
      </div>

      {/* Category Buttons - ALWAYS VISIBLE with GRAY BACKGROUND */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "12px", 
        justifyContent: "center", 
        marginBottom: "40px",
        background: "white",
        padding: "15px 20px",
        borderRadius: "50px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
      }}>
        {examCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: "10px 22px",
              background: selectedCategory === cat.id ? cat.color : "#e5e7eb",
              color: selectedCategory === cat.id ? "white" : cat.color,
              border: `2px solid ${cat.color}`,
              borderRadius: "40px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Exams List */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
        {currentExams.map((exam, index) => (
          <div key={index} style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 5px 20px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>
            <div style={{
              background: `linear-gradient(135deg, ${selectedCategory === "engineering" ? "#3b82f6" : selectedCategory === "medical" ? "#10b981" : selectedCategory === "management" ? "#ff6b35" : selectedCategory === "computer" ? "#8b5cf6" : selectedCategory === "commerce" ? "#f59e0b" : selectedCategory === "law" ? "#ec4899" : "#d946ef"}, ${selectedCategory === "engineering" ? "#1d4ed8" : selectedCategory === "medical" ? "#059669" : selectedCategory === "management" ? "#ea580c" : selectedCategory === "computer" ? "#6d28d9" : selectedCategory === "commerce" ? "#d97706" : selectedCategory === "law" ? "#be185d" : "#a21caf"}`,
              padding: "20px", color: "white"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
                <div style={{ fontSize: "40px" }}>{exam.icon}</div>
                <div>
                  <h2 style={{ fontSize: "24px", marginBottom: "5px" }}>{exam.name}</h2>
                  <p style={{ opacity: 0.9 }} dangerouslySetInnerHTML={{ __html: `📅 ${exam.date}` }} />
                </div>
              </div>
            </div>
            <div style={{ padding: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>📋 Registration</h3><p style={{ color: "#333" }}>{exam.registration}</p></div>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>✅ Eligibility</h3><p style={{ color: "#333" }}>{exam.eligibility}</p></div>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>📚 Syllabus</h3><p style={{ color: "#333" }}>{exam.syllabus}</p></div>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>📝 Exam Pattern</h3><p style={{ color: "#333" }}>{exam.pattern}</p></div>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>🏛️ Colleges Accepting</h3><p style={{ color: "#333" }}>{exam.colleges}</p></div>
                <div><h3 style={{ color: "#ff6b35", marginBottom: "8px" }}>📖 Preparation Tips</h3><p style={{ color: "#333" }}>{exam.preparation}</p></div>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
                <a href={exam.website} target="_blank" rel="noopener noreferrer" style={{ color: "#ff6b35", textDecoration: "none", fontWeight: "bold" }}>🔗 Official Website: {exam.website} →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div style={{ marginTop: "50px", background: "#f8f9fa", padding: "30px", borderRadius: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>💡 Exam Preparation Tips</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={{ textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px", marginBottom: "10px" }}>📅</div><h3 style={{ color: "#333" }}>Make a Schedule</h3><p style={{ color: "#666", fontSize: "14px" }}>Create daily, weekly, and monthly study plans</p></div>
          <div style={{ textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px", marginBottom: "10px" }}>📚</div><h3 style={{ color: "#333" }}>NCERT First</h3><p style={{ color: "#666", fontSize: "14px" }}>Complete NCERT before moving to reference books</p></div>
          <div style={{ textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px", marginBottom: "10px" }}>🔄</div><h3 style={{ color: "#333" }}>Revision is Key</h3><p style={{ color: "#666", fontSize: "14px" }}>Revise topics at least 3-4 times before exam</p></div>
          <div style={{ textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px", marginBottom: "10px" }}>📝</div><h3 style={{ color: "#333" }}>Mock Tests</h3><p style={{ color: "#666", fontSize: "14px" }}>Take at least 20-30 mock tests before exam</p></div>
        </div>
      </div>
    </div>
  );
}