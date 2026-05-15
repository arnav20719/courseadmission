import { otpStore } from "../send-otp/route";

export async function POST(request) {
  try {
    const { phone, otp } = await request.json();

    const storedOtp = otpStore.get(phone);

    if (!storedOtp) {
      return Response.json({ error: "OTP expired or not found. Please request again." }, { status: 400 });
    }

    if (storedOtp.expiresAt < Date.now()) {
      otpStore.delete(phone);
      return Response.json({ error: "OTP expired. Please request again." }, { status: 400 });
    }

    if (storedOtp.otp !== otp) {
      return Response.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // OTP verified, store verification status
    otpStore.set(phone, { ...storedOtp, verified: true });

    return Response.json({ success: true, message: "OTP verified successfully" });
    
  } catch (error) {
    return Response.json({ error: "Verification failed" }, { status: 500 });
  }
}