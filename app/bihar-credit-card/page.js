 "use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BiharCreditCard() {
  const router = useRouter();

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem("hasSubmittedLead");
    if (!hasSubmitted) {
      router.push("/");
    }
  }, [router]);

  return (
    <div>
      <nav style={{ background: "#1e3a8a", padding: "15px 20px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <h2 style={{ color: "white" }}>🎓 RG ARNAV EDU CONSULTANCY</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link href="/colleges" style={{ color: "white", textDecoration: "none" }}>Colleges</Link>
          <Link href="/bihar-credit-card" style={{ color: "white", textDecoration: "none" }}>Bihar Credit Card</Link>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "36px", color: "#1e3a8a", marginBottom: "10px" }}>🎓 Bihar Student Credit Card</h1>
        <p style={{ fontSize: "18px", color: "#4b5563", marginBottom: "40px" }}>
          Government of Bihar scheme for higher education loans up to ₹4 lakhs
        </p>

        <div style={{ background: "#eff6ff", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Scheme Overview</h2>
          <p style={{ color: "black", marginBottom: "10px" }}>The Bihar Student Credit Card Scheme provides education loans to students from Bihar for pursuing higher education in India and abroad.</p>
          <ul style={{ color: "black", marginTop: "15px" }}>
            <li>✅ Loan amount: Up to ₹4 lakhs</li>
            <li>✅ Interest rate: 4% per annum</li>
            <li>✅ No collateral required</li>
            <li>✅ No processing fee</li>
            <li>✅ Repayment after course completion + 1 year</li>
          </ul>
        </div>

        <div style={{ background: "white", border: "1px solid #e2e8f0", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Eligibility Criteria</h2>
          <ul style={{ color: "black" }}>
            <li>✅ Resident of Bihar (Domicile required)</li>
            <li>✅ Age: 18-25 years</li>
            <li>✅ Passed 10+2 from Bihar board or CBSE/ICSE from Bihar center</li>
            <li>✅ Admission in recognized college/university</li>
            <li>✅ Family income: Less than ₹3 lakhs per annum (priority)</li>
          </ul>
        </div>

        <div style={{ background: "white", border: "1px solid #e2e8f0", padding: "30px", borderRadius: "16px", marginBottom: "30px" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Documents Required</h2>
          <ul style={{ color: "black" }}>
            <li>📄 Domicile certificate of Bihar</li>
            <li>📄 10th and 12th mark sheets</li>
            <li>📄 College admission letter</li>
            <li>📄 Aadhar card</li>
            <li>📄 Income certificate (if applicable)</li>
            <li>📄 Passport size photos</li>
          </ul>
        </div>

        <div style={{ background: "#f3f4f6", padding: "30px", borderRadius: "16px", textAlign: "center" }}>
          <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Need Help?</h2>
          <p style={{ color: "black", marginBottom: "10px" }}>📞 Helpline: 1800-123-4567 (Toll Free)</p>
          <p style={{ color: "black", marginBottom: "10px" }}>📧 Email: support@biharcreditcard.in</p>
          <Link href="/colleges">
            <button style={{ marginTop: "20px", padding: "12px 30px", background: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
              Explore Colleges Eligible for Credit Card →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
