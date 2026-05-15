"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounsellingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    city: "",
    preferredTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  const counsellingTypes = [
    { 
      icon: "🎓", 
      title: "Career Counselling", 
      desc: "Get guidance on choosing the right career path based on your interests, strengths, and market demand. Our experts help you explore various career options after 10th, 12th, and graduation.",
      details: "• Identify your strengths and interests\n• Explore career options in Engineering, Medical, Management, Law, Design, Commerce\n• Understand job market trends and future opportunities\n• Get personalized career roadmap",
      color: "#3b82f6" 
    },
    { 
      icon: "📚", 
      title: "Course Selection", 
      desc: "Expert advice on selecting the best course for your future. We help you compare different courses, their curriculum, career prospects, and return on investment.",
      details: "• Compare B.Tech vs B.E. vs B.Sc\n• MBA vs M.Tech vs M.Com\n• MBBS vs BDS vs BAMS\n• BCA vs B.Sc CS vs B.Tech CS\n• BBA vs B.Com vs BA Economics",
      color: "#10b981" 
    },
    { 
      icon: "🏛️", 
      title: "College Selection", 
      desc: "Find the perfect college matching your preferences, budget, location, and academic goals. Get detailed information about colleges across India.",
      details: "• Compare IITs, NITs, IIITs, BITS, VIT, SRM, LPU\n• AIIMS, CMC, Maulana Azad Medical College\n• IIMs, XLRI, SPJIMR, FMS, NMIMS\n• NLUs, Jindal Global Law School\n• NID, NIFT, IIT Design schools",
      color: "#ff6b35" 
    },
    { 
      icon: "📝", 
      title: "Admission Process", 
      desc: "Step-by-step guidance through the entire admission process including application forms, entrance exams, counseling, and document verification.",
      details: "• JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE\n• NEET, AIIMS, JIPMER\n• CAT, XAT, MAT, CMAT, GMAT, SNAP\n• CLAT, AILET, LSAT India\n• NID DAT, UCEED, NIFT Entrance",
      color: "#8b5cf6" 
    },
    { 
      icon: "💰", 
      title: "Scholarship Guidance", 
      desc: "Information about scholarships and financial aid options from government, private organizations, and colleges to fund your education.",
      details: "• Bihar Student Credit Card (₹4 lakh loan at 4%)\n• National Scholarship Portal (NSP)\n• Merit-cum-Means Scholarship\n• PMSSS for J&K students\n• College-specific merit scholarships",
      color: "#f59e0b" 
    },
    { 
      icon: "📖", 
      title: "Exam Preparation", 
      desc: "Tips and strategies for entrance exam preparation including study plans, mock tests, time management, and stress management techniques.",
      details: "• JEE Main/Advanced: Physics, Chemistry, Mathematics\n• NEET: Physics, Chemistry, Biology\n• CAT: VARC, DILR, Quantitative Aptitude\n• CLAT: Legal Reasoning, Logical Reasoning, English\n• NID DAT: Design Aptitude, Creativity, Drawing",
      color: "#ec4899" 
    },
  ];

  const experts = [
    { 
      name: "Dr. Arnav Kumar", 
      role: "Career Counselor & Education Consultant", 
      experience: "15+ years", 
      image: "👨‍🏫", 
      bio: "PhD in Educational Psychology. Has guided over 10,000+ students in career selection. Expert in Engineering, Medical, and Management streams.",
      expertise: ["Career Planning", "Stream Selection", "Personality Assessment"],
      color: "#3b82f6" 
    },
    { 
      name: "Prof. Rajesh Singh", 
      role: "Senior Education Advisor", 
      experience: "20+ years", 
      image: "👨‍🎓", 
      bio: "Former admission committee member at IIT Delhi. Specializes in IITs, NITs, BITS, and top private engineering colleges admission guidance.",
      expertise: ["IIT/NIT Admissions", "JEE Preparation", "College Selection"],
      color: "#10b981" 
    },
    { 
      name: "Ms. Priya Sharma", 
      role: "College Admission Expert", 
      experience: "12+ years", 
      image: "👩‍🏫", 
      bio: "MBA from IIM Ahmedabad. Expert in MBA admissions, CAT preparation, and B-school selection. Has helped 5000+ students get into top B-schools.",
      expertise: ["MBA Admissions", "CAT/GMAT Prep", "B-school Selection"],
      color: "#ff6b35" 
    },
  ];

  const faqs = [
    { q: "Is the counselling free?", a: "Yes, our initial counselling session is completely free. We provide guidance on career options, course selection, and college choices at no cost." },
    { q: "How long does the counselling session take?", a: "A typical counselling session lasts 30-45 minutes. We ensure all your queries are addressed thoroughly." },
    { q: "Can I get counselling for my parents?", a: "Absolutely! Parents are welcome to join the counselling session. We believe parental guidance is crucial for career decisions." },
    { q: "Do you provide guidance for study abroad?", a: "Yes, we have specialized counselors for study abroad programs in USA, UK, Canada, Australia, and Germany." },
  ];

  if (submitted) {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>✅</div>
        <h1 style={{ fontSize: "32px", color: "#1a1a2e", marginBottom: "10px" }}>Request Submitted Successfully!</h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>Our counselling team will contact you within 24 hours.</p>
        <Link href="/">
          <button style={{ padding: "12px 30px", background: "#ff6b35", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", color: "#1a1a2e", marginBottom: "15px" }}>🎯 Free Career Counselling</h1>
        <p style={{ fontSize: "18px", color: "#666", maxWidth: "700px", margin: "0 auto" }}>
          Get expert guidance for your career and college admissions. Our experienced counselors are here to help you make the right decision for your future.
        </p>
      </div>

      {/* Counselling Types with Details */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>What We Offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "25px" }}>
          {counsellingTypes.map((item, i) => (
            <div key={i} style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              border: `2px solid ${item.color}20`,
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{
                background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px auto",
                fontSize: "28px",
              }}>{item.icon}</div>
              <h3 style={{ fontSize: "20px", marginBottom: "10px", textAlign: "center", color: item.color }}>{item.title}</h3>
              <p style={{ color: "#666", marginBottom: "15px", fontSize: "14px", lineHeight: "1.5" }}>{item.desc}</p>
              <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                <p style={{ color: "#333", fontSize: "13px", whiteSpace: "pre-line" }}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experts Section */}
      <div style={{ marginBottom: "60px", background: "#f8f9fa", padding: "40px", borderRadius: "24px" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "10px" }}>Our Expert Counselors</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>Meet our team of experienced education professionals</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {experts.map((expert, i) => (
            <div key={i} style={{ background: "white", padding: "25px", borderRadius: "16px", textAlign: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <div style={{
                background: `linear-gradient(135deg, ${expert.color}, ${expert.color}dd)`,
                width: "80px",
                height: "80px",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px auto",
                fontSize: "40px",
              }}>{expert.image}</div>
              <h3 style={{ fontSize: "20px", marginBottom: "5px" }}>{expert.name}</h3>
              <p style={{ color: "#ff6b35", marginBottom: "5px", fontWeight: "bold" }}>{expert.role}</p>
              <p style={{ color: "#666", marginBottom: "10px", fontSize: "14px" }}>{expert.experience} experience</p>
              <p style={{ color: "#666", fontSize: "13px", marginBottom: "15px", lineHeight: "1.5" }}>{expert.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                {expert.expertise.map((skill, idx) => (
                  <span key={idx} style={{ background: `${expert.color}20`, color: expert.color, padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>Frequently Asked Questions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#f8f9fa", padding: "20px", borderRadius: "12px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#ff6b35" }}>{faq.q}</h3>
              <p style={{ color: "#666" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Counselling Form */}
      <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "10px" }}>📝 Request a Free Counselling Session</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>Fill the form below. Our expert counselor will contact you shortly.</p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Full Name *</label>
            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px" }} />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Mobile Number *</label>
            <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.slice(0,10) })} placeholder="Enter 10-digit mobile number" style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px" }} />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Email Address *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email address" style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px" }} />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Interested Course *</label>
            <select required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px", background: "white" }}>
              <option value="">Select Course</option>
              <option value="Engineering (B.Tech/BE)">Engineering (B.Tech/BE)</option>
              <option value="Medical (MBBS/BDS)">Medical (MBBS/BDS)</option>
              <option value="Management (BBA/MBA)">Management (BBA/MBA)</option>
              <option value="Computer Applications (BCA/MCA)">Computer Applications (BCA/MCA)</option>
              <option value="Commerce (B.Com/M.Com)">Commerce (B.Com/M.Com)</option>
              <option value="Arts (BA/MA)">Arts (BA/MA)</option>
              <option value="Law (LLB/LLM)">Law (LLB/LLM)</option>
              <option value="Design (B.Des/M.Des)">Design (B.Des/M.Des)</option>
            </select>
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your City *</label>
            <select required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px", background: "white" }}>
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Patna">Patna</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Preferred Call Time</label>
            <select value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })} style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px", background: "white" }}>
              <option value="">Select Time Slot</option>
              <option value="Morning (10 AM - 12 PM)">Morning (10 AM - 12 PM)</option>
              <option value="Afternoon (2 PM - 4 PM)">Afternoon (2 PM - 4 PM)</option>
              <option value="Evening (5 PM - 7 PM)">Evening (5 PM - 7 PM)</option>
            </select>
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#333" }}>Your Query / Message</label>
            <textarea rows="3" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your career concerns..." style={{ width: "100%", padding: "14px", border: "1px solid #ddd", borderRadius: "12px", fontSize: "16px", fontFamily: "inherit" }} />
          </div>
          
          <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "12px", fontSize: "18px", fontWeight: "bold", cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? "Submitting..." : "Request Free Counselling →"}
          </button>
          
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#999" }}>By submitting, you agree to our Terms & Privacy Policy</p>
        </form>
      </div>
    </div>
  );
}