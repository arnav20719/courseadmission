"use client";

import { useState } from "react";

export default function LoginPopup({ isOpen, onClose, onSuccess }) {
  const [step, setStep] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", phone: "", password: "" });
  const [otpData, setOtpData] = useState({ phone: "", otp: "", newPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetStep, setResetStep] = useState(1);
  const [sentOtp, setSentOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  if (!isOpen) return null;

  const handleLogin = async () => {
    setError("");
    if (!loginData.password) {
      setError("Password is required");
      return;
    }
    if (!loginData.email && !loginData.phone) {
      setError("Please enter email or phone number");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("userName", data.name);
        localStorage.setItem("userPhone", data.phone);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("isLoggedIn", "true");
        onSuccess(data.name);
        onClose();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendResetOtp = async () => {
    if (!otpData.phone || otpData.phone.length !== 10) {
      setError("Enter valid 10-digit mobile number");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: otpData.phone }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setSentOtp(data.otp);
        alert(`Your OTP is: ${data.otp} (Demo - In production, this will be sent via SMS)`);
        setResetStep(2);
        setResendTimer(60);
        const timer = setInterval(() => {
          setResendTimer(prev => {
            if (prev <= 1) clearInterval(timer);
            return prev - 1;
          });
        }, 1000);
      } else {
        setError(data.error || "Failed to send OTP");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyResetOtp = async () => {
    if (!otpData.otp || otpData.otp.length !== 6) {
      setError("Enter 6-digit OTP");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: otpData.phone, otp: otpData.otp }),
      });
      
      if (response.ok) {
        setResetStep(3);
        setError("");
      } else {
        const data = await response.json();
        setError(data.error || "Invalid OTP");
      }
    } catch (error) {
      setError("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    if (!otpData.newPassword || otpData.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: otpData.phone,
          otp: otpData.otp,
          newPassword: otpData.newPassword,
        }),
      });
      const data = await response.json();
      
      if (response.ok) {
        alert("Password reset successfully! Please login with your new password.");
        setStep("login");
        setResetStep(1);
        setOtpData({ phone: "", otp: "", newPassword: "" });
      } else {
        setError(data.error || "Failed to reset password");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000 }} onClick={onClose}>
      <div style={{ background: "white", borderRadius: "24px", maxWidth: "450px", width: "90%", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} style={{ position: "absolute", top: "15px", right: "20px", background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>✕</button>

        {step === "login" && (
          <>
            <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Welcome Back!</h2>
            
            <input type="email" placeholder="Email Address" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            
            <div style={{ textAlign: "center", marginBottom: "10px", color: "#999" }}>OR</div>
            
            <input type="tel" placeholder="Mobile Number" value={loginData.phone} onChange={(e) => setLoginData({ ...loginData, phone: e.target.value.slice(0,10) })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            
            <input type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            
            {error && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px", textAlign: "center" }}>{error}</p>}
            
            <button onClick={handleLogin} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Logging in..." : "Login →"}</button>
            
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <button onClick={() => setStep("forgot")} style={{ background: "none", border: "none", color: "#ff6b35", cursor: "pointer", fontSize: "14px" }}>Forgot Password?</button>
            </div>
            
            <p style={{ textAlign: "center", marginTop: "15px", fontSize: "12px" }}>
              Don't have an account? <button onClick={() => { onClose(); setTimeout(() => document.querySelector('.signup-btn')?.click(), 100); }} style={{ color: "#ff6b35", background: "none", border: "none", cursor: "pointer" }}>Sign Up</button>
            </p>
          </>
        )}

        {step === "forgot" && (
          <>
            <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Reset Password</h2>
            
            {resetStep === 1 && (
              <>
                <input type="tel" placeholder="Registered Mobile Number" value={otpData.phone} onChange={(e) => setOtpData({ ...otpData, phone: e.target.value.slice(0,10) })} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px" }} />
                <button onClick={sendResetOtp} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Sending..." : "Send OTP →"}</button>
              </>
            )}
            
            {resetStep === 2 && (
              <>
                <p style={{ textAlign: "center", marginBottom: "15px" }}>OTP sent to {otpData.phone}</p>
                <input type="text" placeholder="Enter OTP" value={otpData.otp} onChange={(e) => setOtpData({ ...otpData, otp: e.target.value.slice(0,6) })} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", fontSize: "18px", letterSpacing: "5px" }} />
                <button onClick={verifyResetOtp} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Verifying..." : "Verify OTP"}</button>
                
                {resendTimer > 0 ? (
                  <p style={{ textAlign: "center", marginTop: "15px", fontSize: "12px" }}>Resend OTP in {resendTimer}s</p>
                ) : (
                  <button onClick={sendResetOtp} style={{ width: "100%", marginTop: "15px", padding: "10px", background: "none", border: "none", color: "#ff6b35", cursor: "pointer" }}>Resend OTP</button>
                )}
              </>
            )}
            
            {resetStep === 3 && (
              <>
                <input type="password" placeholder="New Password (min 6 characters)" value={otpData.newPassword} onChange={(e) => setOtpData({ ...otpData, newPassword: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "8px" }} />
                <button onClick={resetPassword} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Resetting..." : "Reset Password →"}</button>
              </>
            )}
            
            {error && <p style={{ color: "red", fontSize: "12px", marginTop: "15px", textAlign: "center" }}>{error}</p>}
            
            <button onClick={() => { setStep("login"); setResetStep(1); setError(""); }} style={{ width: "100%", marginTop: "15px", padding: "10px", background: "none", border: "none", color: "#666", cursor: "pointer" }}>Back to Login</button>
          </>
        )}
      </div>
    </div>
  );
}