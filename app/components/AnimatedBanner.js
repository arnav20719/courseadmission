"use client";

import { useState, useEffect } from "react";

export default function AnimatedBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const messages = [
    "📢 Admission Going On! Apply for 2026 Batch",
    "🎓 Get Free Counselling from Expert Counselors",
    "📚 Admission Guide: Step-by-step help for your career"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="animated-banner">
      <div className="banner-text">{messages[currentIndex]}</div>
    </div>
  );
}