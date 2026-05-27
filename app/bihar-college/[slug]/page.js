"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BiharCollegeDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (slug) {
      fetch(`/api/bihar-college/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setCollege(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <p>Loading college details...</p>
      </div>
    );
  }

  if (!college) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <p>College not found</p>
        <Link href="/bihar-credit-card">← Back to Bihar Credit Card</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Link href="/bihar-credit-card" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>
        ← Back to Bihar Credit Card Colleges
      </Link>

      <div style={{ background: "white", borderRadius: "16px", padding: "30px", marginBottom: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginBottom: "10px" }}>{college.CollegeName}</h1>
        
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
          <span style={{ background: "#e0e7ff", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
            📍 {college.DistrictName || "Bihar"}
          </span>
          <span style={{ 
            background: college.college_type === "Government" ? "#dcfce7" : "#fef3c7",
            color: college.college_type === "Government" ? "#166534" : "#92400e",
            padding: "5px 12px", borderRadius: "20px", fontSize: "14px"
          }}>
            {college.college_type || college.InstituteType || "Private"}
          </span>
          <span style={{ background: "#f3f4f6", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
            🏛️ {college.University || "Affiliated University"}
          </span>
          {college.Status === "Active" && (
            <span style={{ background: "#dcfce7", color: "#166534", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
              ✅ Active
            </span>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: "5px", borderBottom: "2px solid #e2e8f0", marginBottom: "25px", flexWrap: "wrap" }}>
        <button
          onClick={() => setActiveTab("overview")}
          style={{
            padding: "12px 24px",
            background: activeTab === "overview" ? "#1e3a8a" : "transparent",
            color: activeTab === "overview" ? "white" : "#4b5563",
            border: "none",
            borderRadius: "8px 8px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "overview" ? "bold" : "normal",
          }}
        >
          📋 Overview
        </button>
        <button
          onClick={() => setActiveTab("details")}
          style={{
            padding: "12px 24px",
            background: activeTab === "details" ? "#1e3a8a" : "transparent",
            color: activeTab === "details" ? "white" : "#4b5563",
            border: "none",
            borderRadius: "8px 8px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "details" ? "bold" : "normal",
          }}
        >
          📚 Details
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          style={{
            padding: "12px 24px",
            background: activeTab === "contact" ? "#1e3a8a" : "transparent",
            color: activeTab === "contact" ? "white" : "#4b5563",
            border: "none",
            borderRadius: "8px 8px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "contact" ? "bold" : "normal",
          }}
        >
          📞 Contact
        </button>
      </div>

      <div style={{ background: "white", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        
        {activeTab === "overview" && (
          <div>
            <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>About College</h2>
            <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "30px" }}>
              {college.CollegeName} is located in {college.DistrictName || "Bihar"}, {college.State || "Bihar"}. 
              It is a {college.college_type || "Private"} institution.
              {college.AccreditationType && ` Accredited by ${college.AccreditationType}.`}
              {college.Status === "Active" && " The college is currently active and accepting admissions."}
            </p>

            <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Key Information</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", width: "200px" }}>College Name</td>
                  <td style={{ padding: "12px" }}>{college.CollegeName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>University</td>
                  <td style={{ padding: "12px" }}>{college.University || "N/A"}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>District</td>
                  <td style={{ padding: "12px" }}>{college.DistrictName || "N/A"}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>State</td>
                  <td style={{ padding: "12px" }}>{college.State || "Bihar"}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>Institute Type</td>
                  <td style={{ padding: "12px" }}>
                    <span style={{ 
                      background: college.InstituteType?.includes("Government") ? "#dcfce7" : "#fef3c7",
                      padding: "4px 12px", borderRadius: "20px", fontSize: "13px"
                    }}>
                      {college.InstituteType || college.college_type || "Private"}
                    </span>
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>Status</td>
                  <td style={{ padding: "12px" }}>
                    <span style={{ background: "#dcfce7", color: "#166534", padding: "4px 12px", borderRadius: "20px", fontSize: "13px" }}>
                      {college.Status || "Active"}
                    </span>
                  </td>
                </tr>
                {college.Pincode && (
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px", fontWeight: "bold" }}>Pincode</td>
                    <td style={{ padding: "12px" }}>{college.Pincode}</td>
                  </tr>
                )}
                {college.AccreditationType && (
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px", fontWeight: "bold" }}>Accreditation</td>
                    <td style={{ padding: "12px" }}>{college.AccreditationType}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "details" && (
          <div>
            <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>Courses & Programs</h2>
            <p>This college offers various undergraduate and postgraduate programs.</p>
            <p style={{ marginTop: "15px", color: "#666" }}>For detailed course information, please contact the college directly.</p>
            
            <h2 style={{ color: "#1e3a8a", marginTop: "30px", marginBottom: "15px" }}>Bihar Credit Card Eligibility</h2>
            <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px" }}>
              <p>✅ This college is eligible for <strong>Bihar Student Credit Card Scheme</strong></p>
              <p style={{ marginTop: "10px", fontSize: "14px" }}>Students can avail education loan up to ₹4 lakhs at 0% interest.</p>
              <Link href="/bihar-credit-card" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginTop: "10px" }}>
                Learn more about Bihar Credit Card →
              </Link>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>Contact Information</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", width: "200px" }}>College Name</td>
                  <td style={{ padding: "12px" }}>{college.CollegeName}</td>
                </tr>
                {college.InstituteEmail && (
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px", fontWeight: "bold" }}>Email</td>
                    <td style={{ padding: "12px" }}>
                      <a href={`mailto:${college.InstituteEmail}`} style={{ color: "#3b82f6", textDecoration: "none" }}>
                        {college.InstituteEmail}
                      </a>
                    </td>
                  </tr>
                )}
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>District</td>
                  <td style={{ padding: "12px" }}>{college.DistrictName || "N/A"}</td>
                </tr>
                {college.Pincode && (
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "12px", fontWeight: "bold" }}>Pincode</td>
                    <td style={{ padding: "12px" }}>{college.Pincode}</td>
                  </tr>
                )}
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>State</td>
                  <td style={{ padding: "12px" }}>{college.State || "Bihar"}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: "30px", background: "#f3f4f6", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
              <h3 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Need Help?</h3>
              <p>📞 Bihar Credit Card Helpline: <strong>1800-123-4567</strong></p>
              <p>📧 Email: <strong>support@biharcreditcard.in</strong></p>
              <Link href="/bihar-credit-card">
                <button style={{ marginTop: "15px", padding: "10px 20px", background: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                  Apply for Bihar Credit Card →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}