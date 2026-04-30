"use client";

import { useState, useEffect } from "react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  stream: string | null;
  message: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      const response = await fetch("/api/leads");
      const data = await response.json();
      setLeads(data);
      setLoading(false);
    }
    fetchLeads();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px", color: "black" }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "black" }}>Admission Inquiries ({leads.length})</h1>
      {leads.length === 0 ? (
        <p style={{ color: "black" }}>No submissions yet.</p>
      ) : (
        <div>
          {leads.map((lead: Lead) => (
            <div key={lead.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", borderRadius: "8px", background: "white" }}>
              <p style={{ color: "black" }}><strong>Name:</strong> {lead.name}</p>
              <p style={{ color: "black" }}><strong>Phone:</strong> {lead.phone}</p>
              <p style={{ color: "black" }}><strong>Stream:</strong> {lead.stream || "N/A"}</p>
              <p style={{ color: "black" }}><strong>Message:</strong> {lead.message || "N/A"}</p>
              <p style={{ color: "black" }}><strong>Submitted:</strong> {new Date(lead.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}