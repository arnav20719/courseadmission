"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CollegesPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [streams, setStreams] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
    
    let apiUrl = "/api/colleges";
    if (searchQuery) {
      apiUrl = `/api/colleges?search=${encodeURIComponent(searchQuery)}`;
    }
    
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setColleges(data);
          setFilteredColleges(data);
          setStates([...new Set(data.map(c => c.state).filter(Boolean))]);
          setStreams([...new Set(data.flatMap(c => c.stream?.split(", ") || []).filter(Boolean))]);
          setTypes([...new Set(data.map(c => c.type).filter(Boolean))]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = colleges;
    if (searchTerm) {
      filtered = filtered.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedState) {
      filtered = filtered.filter(c => c.state === selectedState);
    }
    if (selectedStream) {
      filtered = filtered.filter(c => c.stream && c.stream.includes(selectedStream));
    }
    if (selectedType) {
      filtered = filtered.filter(c => c.type === selectedType);
    }
    setFilteredColleges(filtered);
  }, [searchTerm, selectedState, selectedStream, selectedType, colleges]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedState("");
    setSelectedStream("");
    setSelectedType("");
    window.history.pushState({}, "", "/colleges");
    fetch("/api/colleges")
      .then(res => res.json())
      .then(data => {
        setColleges(data);
        setFilteredColleges(data);
      });
  };

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#1e3a8a" }}>🎓 Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Browse {filteredColleges.length} colleges</p>

      {/* Search Result Info */}
      {searchTerm && (
        <div style={{ marginBottom: "15px", padding: "10px", background: "#e0e7ff", borderRadius: "8px" }}>
          🔍 Showing results for: <strong>"{searchTerm}"</strong> 
          <button 
            onClick={() => {
              setSearchTerm("");
              window.history.pushState({}, "", "/colleges");
              fetch("/api/colleges")
                .then(res => res.json())
                .then(data => {
                  setColleges(data);
                  setFilteredColleges(data);
                });
            }}
            style={{ marginLeft: "10px", padding: "2px 10px", background: "#ff6b35", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Clear
          </button>
        </div>
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search colleges by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
      />

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All States ({states.length})</option>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>

        <select value={selectedStream} onChange={(e) => setSelectedStream(e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All Streams ({streams.length})</option>
          {streams.map(stream => <option key={stream} value={stream}>{stream}</option>)}
        </select>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All Types ({types.length})</option>
          {types.map(type => <option key={type} value={type}>{type}</option>)}
        </select>

        <button onClick={clearFilters} style={{ padding: "8px 16px", background: "#6b7280", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Clear Filters
        </button>
      </div>

      {/* Colleges Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredColleges.map((college) => (
          <Link key={college.id} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "20px",
                background: "white",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#1e3a8a" }}>{college.name}</h3>
              <p style={{ color: "#4b5563", marginBottom: "5px" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#4b5563", marginBottom: "5px" }}>🏛️ {college.type}</p>
              <p style={{ color: "#4b5563" }}>📚 {college.stream}</p>
              {college.fees_ug_inr ? (
                <p style={{ marginTop: "10px", fontWeight: "bold", color: "#1f2937" }}>💰 ₹{college.fees_ug_inr.toLocaleString()}/year</p>
              ) : (
                <p style={{ marginTop: "10px", color: "#9ca3af" }}>Fees: Not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#4b5563" }}>No colleges found matching your criteria</p>
      )}
    </div>
  );
}