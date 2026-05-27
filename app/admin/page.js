"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const exportToExcel = () => {
    const headers = ["Name", "Phone", "Course", "Message", "Date"];
    const rows = leads.map((lead) => [
      lead.name,
      lead.phone,
      lead.stream || "N/A",
      lead.message || "N/A",
      new Date(lead.createdAt).toLocaleString(),
    ]);
    const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading leads...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
        <h1 style={{ color: "#1e3a8a" }}>🎓 Student Leads ({leads.length})</h1>
        <button
          onClick={exportToExcel}
          style={{ padding: "10px 20px", background: "#10b981", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
        >
          📊 Export to Excel
        </button>
      </div>

      {leads.length === 0 ? (
        <p>No leads yet. Submit a test form first.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "12px", overflow: "hidden" }}>
            <thead>
              <tr style={{ background: "#1e3a8a", color: "white" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Phone</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Course</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Message</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "12px" }}>{lead.name}</td>
                  <td style={{ padding: "12px" }}>{lead.phone}</td>
                  <td style={{ padding: "12px" }}>{lead.stream || "N/A"}</td>
                  <td style={{ padding: "12px" }}>{lead.message || "N/A"}</td>
                  <td style={{ padding: "12px" }}>{new Date(lead.createdAt).toLocaleString()}</td>
                  <td style={{ padding: "12px" }}>
                    <a href={`tel:${lead.phone}`} style={{ background: "#3b82f6", color: "white", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", marginRight: "5px", display: "inline-block" }}>📞 Call</a>
                    <a href={`https://wa.me/${lead.phone}`} target="_blank" style={{ background: "#25D366", color: "white", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", display: "inline-block" }}>💬 WhatsApp</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}