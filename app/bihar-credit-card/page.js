"use client";

import { useState } from "react";
import Link from "next/link";

export default function BiharCreditCard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", color: "#1a1a2e", marginBottom: "15px" }}>🎓 Bihar Student Credit Card</h1>
        <p style={{ fontSize: "18px", color: "#333", maxWidth: "700px", margin: "0 auto" }}>
          Complete Guide - Loan up to ₹4 Lakhs at 0% Interest | Government of Bihar Scheme
        </p>
      </div>

      {/* Tabs - Blue Color */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "30px" }}>
        <button onClick={() => setActiveTab("overview")} style={{ padding: "10px 20px", background: activeTab === "overview" ? "#3b82f6" : "white", color: activeTab === "overview" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Overview</button>
        <button onClick={() => setActiveTab("courses")} style={{ padding: "10px 20px", background: activeTab === "courses" ? "#3b82f6" : "white", color: activeTab === "courses" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Eligible Courses</button>
        <button onClick={() => setActiveTab("documents")} style={{ padding: "10px 20px", background: activeTab === "documents" ? "#3b82f6" : "white", color: activeTab === "documents" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Documents Required</button>
        <button onClick={() => setActiveTab("process")} style={{ padding: "10px 20px", background: activeTab === "process" ? "#3b82f6" : "white", color: activeTab === "process" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Application Process</button>
        <button onClick={() => setActiveTab("fee")} style={{ padding: "10px 20px", background: activeTab === "fee" ? "#3b82f6" : "white", color: activeTab === "fee" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Fee Details</button>
        <button onClick={() => setActiveTab("colleges")} style={{ padding: "10px 20px", background: activeTab === "colleges" ? "#3b82f6" : "white", color: activeTab === "colleges" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Eligible Colleges</button>
        <button onClick={() => setActiveTab("faq")} style={{ padding: "10px 20px", background: activeTab === "faq" ? "#3b82f6" : "white", color: activeTab === "faq" ? "white" : "#3b82f6", border: "1px solid #3b82f6", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>Frequently Q&A</button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div style={{ background: "#eff6ff", padding: "30px", borderRadius: "20px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#1a1a2e" }}>📋 Scheme Overview</h2>
          <p style={{ color: "#333", lineHeight: "1.6" }}>The Bihar Student Credit Card Scheme provides financial assistance to students for higher education. Loan up to ₹4,00,000 at 0% interest. No collateral required.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
            <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}><div style={{ fontSize: "30px" }}>💰</div><h3 style={{ color: "#333" }}>Up to ₹4 Lakhs</h3></div>
            <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}><div style={{ fontSize: "30px" }}>📉</div><h3 style={{ color: "#333" }}>0% Interest</h3></div>
            <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}><div style={{ fontSize: "30px" }}>🛡️</div><h3 style={{ color: "#333" }}>No Collateral</h3></div>
            <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}><div style={{ fontSize: "30px" }}>⏰</div><h3 style={{ color: "#333" }}>Course + 1 Year</h3></div>
          </div>
        </div>
      )}

      {/* Eligible Courses Tab */}
      {activeTab === "courses" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>📚 Eligible Courses</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Engineering - B.Tech, M.Tech</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Medical - MBBS, BDS, BAMS</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Management - BBA, MBA, B.Com</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Computer - BCA, MCA, B.Sc IT</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Law - LLB, BA LLB, LLM</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Agriculture - B.Sc Agri, M.Sc Agri</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Pharmacy - B.Pharm, M.Pharm</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Design - B.Des, M.Des, B.Arch</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Science - B.Sc, M.Sc</div>
            <div><span style={{ color: "#3b82f6" }}>✅</span> Arts - BA, MA</div>
          </div>
          <p style={{ marginTop: "20px", background: "#fef3c7", padding: "12px", borderRadius: "10px", color: "#92400e" }}>✅ Any professional/technical course of minimum 1 year duration from a recognized institution is eligible.</p>
        </div>
      )}

      {/* Documents Tab */}
      {activeTab === "documents" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>📄 Documents Required</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Domicile Certificate (Bihar)</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> 10th & 12th Mark Sheets</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> College Admission Letter</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Aadhar Card</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Income Certificate</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Caste Certificate (if applicable)</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Passport Size Photos (4-6)</div>
            <div><span style={{ color: "#3b82f6" }}>📎</span> Bank Account Details</div>
          </div>
          <p style={{ marginTop: "20px", background: "#fef3c7", padding: "12px", borderRadius: "10px", color: "#92400e" }}>⚠️ All documents must be self-attested. Original documents required for verification.</p>
        </div>
      )}

      {/* Application Process Tab */}
      {activeTab === "process" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>📝 Application Process</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div><strong style={{ color: "#3b82f6" }}>Step 1:</strong> Fill online application at <a href="https://biharcreditcard.in" target="_blank" style={{ color: "#3b82f6" }}>biharcreditcard.in</a></div>
            <div><strong style={{ color: "#3b82f6" }}>Step 2:</strong> Upload documents & submit</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 3:</strong> Receive approval email</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 4:</strong> Receive agreement details</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 5:</strong> Visit bank with parents (co-applicant)</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 6:</strong> Sign agreement & get receipt</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 7:</strong> Amount transferred to college after 90 days</div>
            <div><strong style={{ color: "#3b82f6" }}>Step 8:</strong> Annual renewal with result, bonafide certificate & signed form</div>
          </div>
        </div>
      )}

      {/* Fee Details Tab */}
      {activeTab === "fee" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>💰 Fee & Loan Details</h2>
          <div style={{ background: "#eff6ff", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
            <h3 style={{ color: "#3b82f6" }}>Maximum Loan Amount: ₹4,00,000</h3>
          </div>
          <div style={{ marginBottom: "15px" }}><strong>Example 1:</strong> College fee ₹5L → Loan ₹4L, You pay ₹1L</div>
          <div style={{ marginBottom: "15px" }}><strong>Example 2:</strong> Academic ₹3L + Hostel ₹1L → Total ₹4L → Full loan coverage</div>
          <div style={{ marginBottom: "15px" }}><strong>Example 3:</strong> Academic ₹3L (No hostel) → ₹3L to college, ₹1L to your account for laptop/books</div>
          <p style={{ marginTop: "15px", background: "#eff6ff", padding: "12px", borderRadius: "10px" }}>📌 Loan transferred in multiple installments as per semester/year. Annual renewal required with result & bonafide certificate.</p>
        </div>
      )}

      {/* Eligible Colleges Tab */}
      {activeTab === "colleges" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>🏛️ Eligible Colleges in Bihar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "10px" }}>
            <div>🏫 IIT Patna, NIT Patna, AIIMS Patna</div>
            <div>🏫 Patna University, Nalanda Medical College</div>
            <div>🏫 Chanakya National Law University</div>
            <div>🏫 Chandragupta Institute of Management</div>
            <div>🏫 Magadh University (Gaya), BRA Bihar University (Muzaffarpur)</div>
            <div>🏫 L.N. Mithila University (Darbhanga)</div>
            <div>🏫 T.M. Bhagalpur University (Bhagalpur)</div>
            <div>🏫 Purnea University, Munger University</div>
            <div>🏫 Muzaffarpur Institute of Technology</div>
            <div>🏫 Bhagalpur College of Engineering</div>
            <div>🏫 Bihar Agricultural University</div>
          </div>
          <p style={{ marginTop: "20px", background: "#f8f9fa", padding: "12px", borderRadius: "10px", textAlign: "center" }}>*500+ colleges in Bihar are eligible. For complete list, visit official website.</p>
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <div style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a2e" }}>❓ Frequently Asked Questions</h2>
          <div style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}><strong style={{ color: "#3b82f6" }}>How much loan can I get?</strong> <span style={{ color: "#333" }}>Up to ₹4,00,000</span></div>
          <div style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}><strong style={{ color: "#3b82f6" }}>What is the interest rate?</strong> <span style={{ color: "#333" }}>0% per annum</span></div>
          <div style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}><strong style={{ color: "#3b82f6" }}>Do I need collateral?</strong> <span style={{ color: "#333" }}>No, no collateral required</span></div>
          <div style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}><strong style={{ color: "#3b82f6" }}>When do I start repayment?</strong> <span style={{ color: "#333" }}>After course completion + 1 year</span></div>
          <div style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid #eee" }}><strong style={{ color: "#3b82f6" }}>Can I check my application status?</strong> <span style={{ color: "#333" }}>Yes, track at biharcreditcard.in</span></div>
          <div><strong style={{ color: "#3b82f6" }}>What if I fail in exam?</strong> <span style={{ color: "#333" }}>Must pass each year to get next installment</span></div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: "40px", textAlign: "center", padding: "20px", background: "#f8f9fa", borderRadius: "12px" }}>
        <p style={{ color: "#666" }}>📌 Official Website: <a href="https://biharcreditcard.in" target="_blank" style={{ color: "#3b82f6" }}>biharcreditcard.in</a></p>
        <p style={{ color: "#666" }}>📞 Helpline: 1800-123-4567 (Toll Free, 10 AM - 6 PM)</p>
        <p style={{ color: "#666" }}>📧 Email: support@biharcreditcard.in</p>
      </div>
    </div>
  );
}