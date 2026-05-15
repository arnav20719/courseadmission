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

  const fetchLeads = async () => {
    const response = await fetch("/api/leads");
    const data = await response.json();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // FEATURE A: Export to Excel
  const exportToExcel = () => {
    // Create headers
    const headers = ["Name", "Phone", "Stream", "Message", "Date"];
    
    // Create rows from leads data
    const rows = leads.map(lead => [
      lead.name,
      lead.phone,
      lead.stream || "",
      lead.message || "",
      new Date(lead.createdAt).toLocaleString()
    ]);
    
    // Combine headers and rows
    const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n");
    
    // Create download
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <div style={{ padding: "20px", color: "black" }}>Loading...</div>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
        <h1 style={{ color: "black" }}>Admission Inquiries ({leads.length})</h1>
        
        {/* EXPORT BUTTON - FEATURE A */}
        <button
          onClick={exportToExcel}
          style={{
            padding: "10px 20px",
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          📊 Export to Excel
        </button>
      </div>

      {leads.length === 0 ? (
        <p style={{ color: "black" }}>No submissions yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #ccc", color: "black" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #ccc", color: "black" }}>Phone</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #ccc", color: "black" }}>Stream</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #ccc", color: "black" }}>Message</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "1px solid #ccc", color: "black" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px", color: "black" }}>{lead.name}</td>
                  <td style={{ padding: "12px", color: "black" }}>{lead.phone}</td>
                  <td style={{ padding: "12px", color: "black" }}>{lead.stream || "-"}</td>
                  <td style={{ padding: "12px", color: "black" }}>{lead.message || "-"}</td>
                  <td style={{ padding: "12px", color: "black" }}>{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}