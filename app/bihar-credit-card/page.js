"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BiharCreditCardPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);
  const [showColleges, setShowColleges] = useState(false);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("/api/bihar-eligible-colleges")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setColleges(data);
          setFilteredColleges(data);
          const uniqueStates = [...new Set(data.map((c) => c.State).filter(Boolean))].sort();
          setStates(uniqueStates);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = colleges;
    if (searchTerm) {
      filtered = filtered.filter((c) => 
        c["College Name"].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedState) {
      filtered = filtered.filter((c) => c.State === selectedState);
    }
    if (selectedType) {
      filtered = filtered.filter((c) => c.college_type === selectedType);
    }
    setFilteredColleges(filtered);
  }, [searchTerm, selectedState, selectedType, colleges]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedState("");
    setSelectedType("");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>← Back to Home</Link>

      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px" }}>Bihar Student Credit Card Scheme</h1>

      {/* Section 1: Scheme Overview */}
      <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>1. Scheme Overview</h2>
        <ul>
          <li>Loan Amount: Up to ₹4 lakhs</li>
          <li>Interest Rate: 0% (Government subsidized)</li>
          <li>No Collateral Required</li>
          <li>No Processing Fee</li>
          <li>Repayment after course completion + 1 year</li>
        </ul>
      </div>

      {/* Section 2: How 0% Interest Works */}
      <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>2. How 0% Interest Works</h2>
        <p><strong>Example:</strong> You take ₹3,00,000 loan for 4-year B.Tech</p>
        <ul>
          <li>You repay only ₹3,00,000 (No interest)</li>
          <li>Government pays interest to bank</li>
          <li>No EMI during course + 1 year after completion</li>
          <li>After holiday, repay in 7 years (approx ₹3,571/month)</li>
        </ul>
      </div>

      {/* Section 3: Category-wise Eligibility */}
      <div style={{ background: "white", border: "1px solid #ccc", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>3. Category-wise Eligibility</h2>
        <p><strong>General:</strong> 50% marks, No income limit, Age 18-25</p>
        <p><strong>OBC:</strong> 45% marks, Income less than ₹3 lakhs, Age 18-25</p>
        <p><strong>SC/ST:</strong> 40% marks, Income less than ₹3 lakhs, Age 18-25</p>
        <p><strong>EWS:</strong> 50% marks, Income less than ₹3 lakhs, Age 18-25</p>
        <p><strong>Girls:</strong> 5% relaxation in marks, Age 18-25</p>
      </div>

      {/* Section 4: Academic Fee Breakdown */}
      <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>4. How Academic Fee is Calculated</h2>
        <p><strong>Example:</strong> College academic fee = ₹3,00,000 per year</p>
        <ul>
          <li>Academic Fee: ₹3,00,000 (paid directly to college)</li>
          <li>Laptop/Books: Up to ₹50,000</li>
          <li>Hostel/Mess: Up to ₹60,000</li>
          <li>Travel/Other: Up to ₹30,000</li>
          <li>Total Eligible: ₹4,40,000 → Limited to ₹4,00,000</li>
        </ul>
      </div>

      {/* Section 5: Documents Required */}
      <div style={{ background: "white", border: "1px solid #ccc", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>5. Documents Required</h2>
        <p><strong>Common for All:</strong> Bihar Domicile, 10th & 12th Marksheets, Admission Letter, Aadhar Card, Photos, Bank Passbook</p>
        <p><strong>General:</strong> Income Certificate (for EWS)</p>
        <p><strong>OBC:</strong> OBC Non-Creamy Layer Certificate</p>
        <p><strong>SC/ST:</strong> Caste Certificate</p>
        <p><strong>EWS:</strong> EWS Certificate, Income Certificate</p>
        <p><strong>Girls:</strong> Birth Certificate, Parent Consent Letter</p>
      </div>

      {/* Section 6: Repayment Terms */}
      <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>6. Repayment Terms</h2>
        <p><strong>Example:</strong> ₹3,00,000 loan for 4-year B.Tech</p>
        <ul>
          <li>Course Duration: 4 years → No EMI</li>
          <li>Moratorium: +1 year after course → No EMI</li>
          <li>Total Holiday: 5 years</li>
          <li>Repayment Period: 7 years after holiday</li>
          <li>Monthly EMI after 5 years: approx ₹3,571</li>
        </ul>
      </div>

      {/* Section 7: How to Apply */}
      <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a" }}>7. How to Apply</h2>
        <ol>
          <li>Visit <a href="https://biharcreditcard.in" target="_blank" style={{ color: "#3b82f6" }}>biharcreditcard.in</a></li>
          <li>Register with mobile number and email</li>
          <li>Fill application form</li>
          <li>Upload documents</li>
          <li>Submit and get application number</li>
          <li>Track status online</li>
        </ol>
      </div>

      {/* Section 8: Eligible Colleges List */}
      <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <h2 style={{ color: "#1e3a8a" }}>8. Eligible Colleges Across India ({filteredColleges.length})</h2>
          <button onClick={() => setShowColleges(!showColleges)} style={{ padding: "8px 16px", background: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            {showColleges ? "Hide" : "Show Colleges"}
          </button>
        </div>

        {showColleges && (
          <div style={{ marginTop: "15px" }}>
            {loading ? (
              <p>Loading colleges...</p>
            ) : (
              <>
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
                  <input type="text" placeholder="Search college..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px", flex: 1 }} />
                  <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <option value="">All States ({states.length})</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <option value="">All Types</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                  </select>
                  <button onClick={clearFilters} style={{ padding: "8px 16px", background: "#6b7280", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Clear</button>
                </div>

                {filteredColleges.length === 0 ? (
                  <p>No colleges found.</p>
                ) : (
                  <>
                    {filteredColleges.map((college, idx) => (
                      <div key={college.id} style={{ borderBottom: "1px solid #ddd", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                        <div>
                          <strong>{idx + 1}. {college["College Name"]}</strong>
                          <span style={{ marginLeft: "10px", fontSize: "12px", color: "#666" }}>({college.State || "N/A"})</span>
                          <span style={{ marginLeft: "10px", background: college.college_type === "Government" ? "#dcfce7" : "#fef3c7", padding: "2px 8px", borderRadius: "12px", fontSize: "12px" }}>
                            {college.college_type || "Private"}
                          </span>
                        </div>
                        <a href={`/bihar-college/${college.slug}`} style={{ color: "#3b82f6" }}>View Details →</a>
                      </div>
                    ))}
                    <p style={{ fontSize: "12px", marginTop: "10px" }}>Showing {filteredColleges.length} of {colleges.length} colleges</p>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Section 9: Need Help */}
      <div style={{ background: "#1e3a8a", padding: "20px", borderRadius: "12px", marginTop: "20px", textAlign: "center", color: "white" }}>
        <h2 style={{ color: "white" }}>9. Need Help?</h2>
        <p>Helpline: 1800-123-4567 (Toll Free)</p>
        <p>WhatsApp: +91-8926078461</p>
        <p>Email: support@biharcreditcard.in</p>
        <Link href="/colleges">
          <button style={{ marginTop: "10px", padding: "10px 20px", background: "white", color: "#1e3a8a", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            Explore All Colleges →
          </button>
        </Link>
      </div>
    </div>
  );
}