"use client";

import { useState, useEffect } from "react";

export default function UniversalPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("hasSubmitted");
    if (hasSubmitted === "true") return;

    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute("href");
      
      if (href && (href.includes("/colleges/") || href.includes("/engineering") || href.includes("/medical"))) {
        e.preventDefault();
        e.stopPropagation();
        
        setTargetUrl(href);
        const nameElement = link.querySelector("h3") || link.querySelector("h2") || link;
        const name = nameElement?.innerText || "College";
        setCollegeName(name);
        setShowPopup(true);
      }
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => document.removeEventListener("click", handleLinkClick, true);
  }, []);

  // Name validation: minimum 3 characters, only letters and spaces
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 3) return "Name must be at least 3 characters";
    if (name.length > 50) return "Name is too long";
    if (!/^[a-zA-Z\s\.\-]+$/.test(name)) return "Name should only contain letters, spaces, dots, or hyphens";
    return "";
  };

  // Phone validation: exactly 10 digits
  const validatePhone = (phone) => {
    if (!phone.trim()) return "Mobile number is required";
    if (!/^\d{10}$/.test(phone)) return "Mobile number must be exactly 10 digits";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (name === "name") setErrors({ ...errors, name: "" });
    if (name === "phone") setErrors({ ...errors, phone: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    if (nameError || phoneError) {
      setErrors({ name: nameError, phone: phoneError });
      return;
    }
    
    if (!formData.course) {
      alert("Please select a course");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone,
          stream: formData.course,
          message: `Interested in: ${collegeName}`,
        }),
      });

      if (response.ok) {
        localStorage.setItem("hasSubmitted", "true");
        localStorage.setItem("userName", formData.name);
        localStorage.setItem("userPhone", formData.phone);
        
        setShowPopup(false);
        window.location.href = targetUrl;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div style={{
        background: "white",
        padding: "35px",
        borderRadius: "20px",
        maxWidth: "450px",
        width: "90%",
        position: "relative",
        textAlign: "center",
      }}>
        <button
          onClick={() => setShowPopup(false)}
          style={{
            position: "absolute",
            top: "15px",
            right: "20px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <div style={{ fontSize: "48px", marginBottom: "10px" }}>🎓</div>
        <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>Get Admission Guidance</h2>
        <p style={{ color: "#4b5563", marginBottom: "25px" }}>
          Enter details to unlock <strong>{collegeName}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name (min. 3 characters) *"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px",
                border: errors.name ? "1px solid #ef4444" : "1px solid #ddd",
                borderRadius: "10px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
            {errors.name && <p style={{ color: "#ef4444", fontSize: "12px", margin: "5px 0 0 0" }}>{errors.name}</p>}
          </div>

          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit Mobile Number *"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              style={{
                width: "100%",
                padding: "14px",
                border: errors.phone ? "1px solid #ef4444" : "1px solid #ddd",
                borderRadius: "10px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
            {errors.phone && <p style={{ color: "#ef4444", fontSize: "12px", margin: "5px 0 0 0" }}>{errors.phone}</p>}
          </div>

          <select
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "16px",
              background: "white",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select Interested Course *</option>
            <option value="Engineering (B.Tech)">🔧 Engineering (B.Tech)</option>
            <option value="Medical (MBBS)">🩺 Medical (MBBS)</option>
            <option value="Management (MBA/BBA)">📈 Management (MBA/BBA)</option>
            <option value="Computer Applications (BCA/MCA)">💻 Computer Applications (BCA/MCA)</option>
            <option value="Commerce (B.Com/M.Com)">💰 Commerce (B.Com/M.Com)</option>
            <option value="Arts (BA/MA)">🎨 Arts (BA/MA)</option>
            <option value="Law (LL.B)">⚖️ Law (LL.B)</option>
            <option value="Pharmacy (B.Pharm)">💊 Pharmacy (B.Pharm)</option>
          </select>
          
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#94a3b8" : "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Submitting..." : "🔓 Unlock Details →"}
          </button>
        </form>

        <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "20px" }}>
          ✅ We respect your privacy. No spam calls.
        </p>
      </div>
    </div>
  );
}