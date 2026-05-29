"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ComparePage() {
  const [colleges, setColleges] = useState([]);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });

  const fetchColleges = async (page = 1) => {
    setLoading(true);
    const params = new URLSearchParams({
      page,
      limit: 50,
      ...(searchTerm && { search: searchTerm }),
    });
    
    try {
      const res = await fetch(`/api/colleges?${params}`);
      const data = await res.json();
      setColleges(data.colleges || []);
      setPagination(data.pagination || { page: 1, totalPages: 1, total: 0 });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges(1);
  }, [searchTerm]);

  const addToCompare = (college) => {
    if (selectedColleges.length >= 3) {
      alert("You can compare up to 3 colleges at a time.");
      return;
    }
    if (!selectedColleges.find((c) => c.id === college.id)) {
      setSelectedColleges([...selectedColleges, college]);
    }
  };

  const removeFromCompare = (collegeId) => {
    setSelectedColleges(selectedColleges.filter((c) => c.id !== collegeId));
  };

  const clearComparison = () => {
    setSelectedColleges([]);
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && colleges.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "black" }}>
        Loading colleges...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>
        ← Back to Home
      </Link>

      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px", marginBottom: "10px" }}>
        📊 Compare Colleges
      </h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>
        Select up to 3 colleges to compare fees, courses, location, and more.
      </p>

      {/* Selected Colleges Comparison Table */}
      {selectedColleges.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <h2 style={{ color: "#1f2937" }}>Comparison ({selectedColleges.length}/3)</h2>
            <button onClick={clearComparison} style={{ padding: "8px 16px", background: "#ef4444", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Clear All</button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "12px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#1e3a8a", color: "white" }}>
                  <th style={{ padding: "15px", textAlign: "left", minWidth: "200px" }}>Parameter</th>
                  {selectedColleges.map((college) => (
                    <th key={college.id} style={{ padding: "15px", textAlign: "left", minWidth: "250px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {college.name}
                        <button onClick={() => removeFromCompare(college.id)} style={{ background: "#ef4444", color: "white", border: "none", borderRadius: "5px", padding: "4px 8px", cursor: "pointer", fontSize: "12px" }}>✕</button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "15px", fontWeight: "bold", color: "#1f2937", background: "#f8fafc" }}>📍 Location</td>
                  {selectedColleges.map((college) => (
                    <td key={college.id} style={{ padding: "15px", color: "black" }}>{college.city}, {college.state}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "15px", fontWeight: "bold", color: "#1f2937", background: "#f8fafc" }}>🏛️ Type</td>
                  {selectedColleges.map((college) => (
                    <td key={college.id} style={{ padding: "15px", color: "black" }}>{college.type}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "15px", fontWeight: "bold", color: "#1f2937", background: "#f8fafc" }}>📚 Stream</td>
                  {selectedColleges.map((college) => (
                    <td key={college.id} style={{ padding: "15px", color: "black" }}>{college.stream}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "15px", fontWeight: "bold", color: "#1f2937", background: "#f8fafc" }}>💰 Fees (per year)</td>
                  {selectedColleges.map((college) => (
                    <td key={college.id} style={{ padding: "15px", color: "black" }}>
                      {college.fees_ug_inr ? `₹${college.fees_ug_inr.toLocaleString()}` : "Not available"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* College Selection Section */}
      <div>
        <h2 style={{ color: "#1f2937", marginBottom: "20px" }}>
          {selectedColleges.length === 0 ? "Select Colleges to Compare" : "Add More Colleges (Max 3)"}
        </h2>

        <input
          type="text"
          placeholder="🔍 Search colleges by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {filteredColleges.map((college) => {
            const isSelected = selectedColleges.find((c) => c.id === college.id);
            return (
              <div key={college.id} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", background: "white", opacity: isSelected ? 0.6 : 1 }}>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#1e3a8a" }}>{college.name}</h3>
                <p style={{ color: "#4b5563", marginBottom: "5px" }}>📍 {college.city}, {college.state}</p>
                <p style={{ color: "#4b5563", marginBottom: "5px" }}>🏛️ {college.type}</p>
                <p style={{ color: "#4b5563", marginBottom: "15px" }}>📚 {college.stream}</p>
                {college.fees_ug_inr ? (
                  <p style={{ marginTop: "10px", fontWeight: "bold", color: "#1f2937" }}>💰 ₹{college.fees_ug_inr.toLocaleString()}/year</p>
                ) : (
                  <p style={{ marginTop: "10px", color: "#9ca3af" }}>Fees: Not available</p>
                )}
                {!isSelected ? (
                  <button onClick={() => addToCompare(college)} style={{ width: "100%", padding: "10px", marginTop: "15px", background: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Add to Compare</button>
                ) : (
                  <button disabled style={{ width: "100%", padding: "10px", marginTop: "15px", background: "#9ca3af", color: "white", border: "none", borderRadius: "8px", cursor: "not-allowed" }}>Already Added</button>
                )}
              </div>
            );
          })}
        </div>

        {filteredColleges.length === 0 && !loading && (
          <p style={{ textAlign: "center", marginTop: "40px", color: "#4b5563" }}>No colleges found matching your search.</p>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
            <button onClick={() => fetchColleges(pagination.page - 1)} disabled={pagination.page === 1} style={{ padding: "8px 16px", background: pagination.page === 1 ? "#ccc" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>← Previous</button>
            <span style={{ padding: "8px 16px", background: "#1e3a8a", color: "white", borderRadius: "8px" }}>Page {pagination.page} of {pagination.totalPages}</span>
            <button onClick={() => fetchColleges(pagination.page + 1)} disabled={pagination.page === pagination.totalPages} style={{ padding: "8px 16px", background: pagination.page === pagination.totalPages ? "#ccc" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}