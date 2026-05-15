"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LeadPopup from "./components/LeadPopup";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("hasSubmittedLead");
    if (submitted === "true") {
      setHasSubmitted(true);
    }
  }, []);

  const handlePopupSuccess = () => {
    localStorage.setItem("hasSubmittedLead", "true");
    setHasSubmitted(true);
    setShowPopup(false);
  };

  const handleDocumentClick = () => {
    if (!hasSubmitted && !showPopup) {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [hasSubmitted, showPopup]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <LeadPopup isOpen={showPopup} onClose={() => setShowPopup(false)} onSuccess={handlePopupSuccess} />
        <Chatbot />
      </body>
    </html>
  );
}