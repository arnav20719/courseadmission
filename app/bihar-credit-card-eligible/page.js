"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BiharCreditCardEligiblePage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        const biharColleges = data.filter((college) => college.state === "Bihar");
        setColleges(biharColleges);
        setFilteredColleges(biharColleges);
        const uniqueDistricts = [...new Set(biharColleges.map((c) => c.city).filter(Boolean))];
        setDistricts(uniqueDistricts.sort());
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
      filtered = filtered.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedDistrict) {
      filtered = filtered.filter((c) => c.city === selectedDistrict);
    }
    if (selectedType) {
      filtered = filtered.filter((c) => c.type === selectedType);
    }
    setFilteredColleges(filtered);
  }, [searchTerm, selectedDistrict, selectedType, colleges]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDistrict("");
    setSelectedType("");
  };

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading eligible colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to Home</Link>

      <h1 style={{ fontSize: "32px", color: "#1e3a8a", marginTop: "20px" }}>Bihar Student Credit Card - Eligible Colleges</h1>
      <p>Showing {filteredColleges.length} colleges eligible for education loans up to 4 lakhs.</p>

      <div style={{ display: "flex", gap: "10px", margin: "20px 0", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search college..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", flex: 1 }}
        />
        <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <option value="">All Districts</option>
          {districts.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <option value="">All Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
        </select>
        <button onClick={clearFilters} style={{ padding: "10px 20px", background: "#6b7280", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Clear</button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
        <thead>
          <tr style={{ background: "#1e3a8a", color: "white" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>#</th>
            <th style={{ padding: "10px", textAlign: "left" }}>College Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>District</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Type</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredColleges.map((college, idx) => (
            <tr key={college.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{idx + 1}</td>
              <td style={{ padding: "10px" }}>{college.name}</td>
              <td style={{ padding: "10px" }}>{college.city || "N/A"}</td>
              <td style={{ padding: "10px" }}>
                <span style={{ background: college.type === "Government" ? "#dcfce7" : "#fef3c7", padding: "3px 8px", borderRadius: "12px", fontSize: "12px" }}>
                  {college.type}
                </span>
              </td>
              <td style={{ padding: "10px" }}>
                <a href={`/colleges/${college.slug}`} style={{ color: "#3b82f6" }}>View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredColleges.length === 0 && <p style={{ textAlign: "center", marginTop: "20px" }}>No colleges found.</p>}
    </div>
  );
}