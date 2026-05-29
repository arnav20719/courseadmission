"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CollegesPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [filters, setFilters] = useState({
    search: "",
    state: "",
    stream: "",
    type: "",
  });
  const [states, setStates] = useState([]);
  const [streams, setStreams] = useState([]);
  const [types, setTypes] = useState([]);

  // Fetch colleges with pagination
  const fetchColleges = async (page = 1) => {
    setLoading(true);
    const params = new URLSearchParams({
      page,
      limit: 20,
      ...(filters.search && { search: filters.search }),
      ...(filters.state && { state: filters.state }),
      ...(filters.stream && { stream: filters.stream }),
      ...(filters.type && { type: filters.type }),
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

  // Fetch filter options once
  useEffect(() => {
    fetch("/api/colleges?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        const allColleges = data.colleges || [];
        setStates([...new Set(allColleges.map(c => c.state).filter(Boolean))]);
        setStreams([...new Set(allColleges.map(c => c.stream).filter(Boolean))]);
        setTypes([...new Set(allColleges.map(c => c.type).filter(Boolean))]);
      });
    fetchColleges(1);
  }, []);

  // Apply filters
  useEffect(() => {
    fetchColleges(1);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ search: "", state: "", stream: "", type: "" });
  };

  if (loading && colleges.length === 0) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading colleges...</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#1e3a8a" }}>🎓 Colleges</h1>
      <p>Showing {colleges.length} of {pagination.total} colleges</p>

      {/* Search and Filters */}
      <input
        type="text"
        placeholder="🔍 Search colleges by name..."
        value={filters.search}
        onChange={(e) => handleFilterChange("search", e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}
      />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        <select value={filters.state} onChange={(e) => handleFilterChange("state", e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All States ({states.length})</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={filters.stream} onChange={(e) => handleFilterChange("stream", e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All Streams ({streams.length})</option>
          {streams.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={filters.type} onChange={(e) => handleFilterChange("type", e.target.value)} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <option value="">All Types ({types.length})</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <button onClick={clearFilters} style={{ padding: "8px 16px", background: "#6b7280", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Clear Filters
        </button>
      </div>

      {/* Colleges Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {colleges.map((college) => (
          <Link key={college.id} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px", background: "white", cursor: "pointer" }}>
              <h3 style={{ color: "#1e3a8a" }}>{college.name}</h3>
              <p style={{ color: "#666" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#666" }}>🏛️ {college.type}</p>
              <p style={{ color: "#666" }}>📚 {college.stream}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px", flexWrap: "wrap" }}>
          <button
            onClick={() => fetchColleges(pagination.page - 1)}
            disabled={pagination.page === 1}
            style={{ padding: "8px 16px", background: pagination.page === 1 ? "#ccc" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: pagination.page === 1 ? "not-allowed" : "pointer" }}
          >
            ← Previous
          </button>
          <span style={{ padding: "8px 16px", background: "#1e3a8a", color: "white", borderRadius: "8px" }}>
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => fetchColleges(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
            style={{ padding: "8px 16px", background: pagination.page === pagination.totalPages ? "#ccc" : "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: pagination.page === pagination.totalPages ? "not-allowed" : "pointer" }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}