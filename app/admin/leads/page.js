"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading signups...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1a1a2e" }}>📋 Student Signups</h1>
      <p style={{ marginBottom: "20px", color: "#666" }}>Total: {leads.length} students have signed up</p>
      
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <thead>
            <tr style={{ background: "#3b82f6", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Phone</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Course/Stream</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Email/Password</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px", color: "#333" }}>{lead.name}</td>
                <td style={{ padding: "12px", color: "#333" }}>{lead.phone}</td>
                <td style={{ padding: "12px", color: "#333" }}>{lead.stream || "-"}</td>
                <td style={{ padding: "12px", color: "#333", fontSize: "12px" }}>{lead.message?.substring(0, 60)}...</td>
                <td style={{ padding: "12px", color: "#333" }}>{new Date(lead.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {leads.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#666" }}>No signups yet. Ask students to sign up!</p>
      )}
    </div>
  );
}