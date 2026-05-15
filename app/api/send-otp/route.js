import { prisma } from "@/lib/prisma";

// Store OTPs temporarily (in production, use Redis or database)
const otpStore = new Map();

export async function POST(request) {
  try {
    const { phone } = await request.json();

    if (!phone || phone.length !== 10) {
      return Response.json({ error: "Valid 10-digit phone number required" }, { status: 400 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP with expiration (10 minutes)
    otpStore.set(phone, { otp, expiresAt: Date.now() + 10 * 60 * 1000 });
    
    // In production, send SMS here
    console.log(`OTP for ${phone}: ${otp}`);
    
    // For demo, we'll return the OTP (remove this in production)
    return Response.json({ success: true, otp, message: "OTP sent successfully" });
    
  } catch (error) {
    return Response.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}

export { otpStore };