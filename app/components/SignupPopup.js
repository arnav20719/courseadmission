"use client";

import { useState } from "react";

export default function SignupPopup({ isOpen, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    course: "",
    city: "",
  });
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [resendTimer, setResendTimer] = useState(0);

  if (!isOpen) return null;

  const validateName = (name) => {
    if (!name) return "Full name is required";
    if (!/^[A-Za-z\s]{3,50}$/.test(name)) return "Use only letters (A-Z)";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) return "Mobile number is required";
    if (!/^[6-9]\d{9}$/.test(phone)) return "Enter 10-digit mobile number starting with 6-9";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) return "Enter valid email";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const sendOtp = async () => {
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setErrors({ phone: phoneError });
      return false;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setSentOtp(data.otp);
        alert(`Your OTP is: ${data.otp} (Demo - In production, this will be sent via SMS)`);
        setStep(2);
        // Start resend timer
        setResendTimer(60);
        const timer = setInterval(() => {
          setResendTimer(prev => {
            if (prev <= 1) clearInterval(timer);
            return prev - 1;
          });
        }, 1000);
      } else {
        alert(data.error || "Failed to send OTP");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setErrors({ otp: "Please enter 6-digit OTP" });
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, otp: otp }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setStep(3);
        setErrors({});
      } else {
        setErrors({ otp: data.error || "Invalid OTP" });
      }
    } catch (error) {
      setErrors({ otp: "Verification failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    if (nameError || emailError || passwordError) {
      setErrors({ name: nameError, email: emailError, password: passwordError });
      return;
    }
    
    if (!formData.course) {
      setErrors({ course: "Please select a course" });
      return;
    }
    
    if (!formData.city) {
      setErrors({ city: "Please select your city" });
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          course: formData.course,
          city: formData.city,
          otp: otp,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("userName", formData.name);
        localStorage.setItem("userPhone", formData.phone);
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("isLoggedIn", "true");
        alert(`Welcome ${formData.name}! Account created successfully.`);
        onSuccess(formData.name);
        onClose();
      } else {
        alert(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000 }} onClick={onClose}>
      <div style={{ background: "white", borderRadius: "24px", maxWidth: "500px", width: "90%", padding: "40px", position: "relative", maxHeight: "90vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} style={{ position: "absolute", top: "15px", right: "20px", background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>✕</button>

        {step === 1 && (
          <>
            <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Create Account</h2>
            <input type="text" placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            {errors.name && <p style={{ color: "red", fontSize: "12px", marginTop: "-5px", marginBottom: "10px" }}>{errors.name}</p>}
            
            <div style={{ display: "flex", gap: "10px" }}>
              <select style={{ width: "30%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}><option>+91</option></select>
              <input type="tel" placeholder="Mobile Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.slice(0,10) })} style={{ width: "70%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            </div>
            {errors.phone && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{errors.phone}</p>}
            
            <button onClick={sendOtp} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Sending..." : "Send OTP →"}</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "10px" }}>Verify OTP</h2>
            <p style={{ textAlign: "center", marginBottom: "20px" }}>OTP sent to {formData.phone}</p>
            <input type="text" placeholder="Enter 6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value.slice(0,6))} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", fontSize: "20px", letterSpacing: "5px" }} />
            {errors.otp && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{errors.otp}</p>}
            
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: "12px", background: "#ddd", border: "none", borderRadius: "8px", cursor: "pointer" }}>Back</button>
              <button onClick={verifyOtp} disabled={loading} style={{ flex: 1, padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Verifying..." : "Verify OTP"}</button>
            </div>
            
            {resendTimer > 0 ? (
              <p style={{ textAlign: "center", marginTop: "15px", fontSize: "12px" }}>Resend OTP in {resendTimer}s</p>
            ) : (
              <button onClick={sendOtp} style={{ width: "100%", marginTop: "15px", padding: "10px", background: "none", border: "none", color: "#ff6b35", cursor: "pointer" }}>Resend OTP</button>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Complete Profile</h2>
            <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            {errors.email && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{errors.email}</p>}
            
            <input type="password" placeholder="Create Password *" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }} />
            {errors.password && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{errors.password}</p>}
            
            <select value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
              <option value="">Select Course *</option>
              <option value="Engineering">Engineering (B.Tech/BE)</option>
              <option value="Medical">Medical (MBBS/BDS)</option>
              <option value="Management">Management (BBA/MBA)</option>
              <option value="Computer">Computer (BCA/MCA)</option>
            </select>
            {errors.course && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{errors.course}</p>}
            
            <select value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
              <option value="">Select City *</option>
              <option value="Patna">Patna</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            {errors.city && <p style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}>{errors.city}</p>}
            
            <button onClick={handleSubmit} disabled={loading} style={{ width: "100%", padding: "12px", background: loading ? "#ccc" : "#ff6b35", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>{loading ? "Creating Account..." : "Complete Sign Up →"}</button>
          </>
        )}
      </div>
    </div>
  );
}