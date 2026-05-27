"use client";

export default function WhatsAppChat() {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <a
        href="https://wa.me/918809976942?text=Hello%2C%20I%20need%20help%20with%20college%20admission"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#25D366",
          color: "white",
          padding: "12px 24px",
          borderRadius: "50px",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontSize: "16px"
        }}
      >
        <span style={{ fontSize: "24px" }}>💬</span>
        Chat on WhatsApp
      </a>
    </div>
  );
}