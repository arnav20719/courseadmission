"use client";

import { useState } from "react";

export default function TestPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <button onClick={() => setShowPopup(true)} style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Click to Test Popup
      </button>

      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}>
          <div style={{ background: "white", padding: "40px", borderRadius: "24px", maxWidth: "400px", textAlign: "center" }}>
            <h2>Popup is Working!</h2>
            <p>If you see this, popup functionality works.</p>
            <button onClick={() => setShowPopup(false)} style={{ padding: "10px 20px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}