import { prisma } from "@/lib/prisma";
import { otpStore } from "../send-otp/route";

export async function POST(request) {
  try {
    const { phone, otp, newPassword } = await request.json();

    // Find user
    const user = await prisma.lead.findFirst({
      where: { phone: phone }
    });

    if (!user) {
      return Response.json({ error: "No account found with this phone number" }, { status: 404 });
    }

    // If only OTP request
    if (otp === undefined) {
      const storedOtp = otpStore.get(phone);
      if (storedOtp && storedOtp.verified) {
        return Response.json({ success: true, message: "OTP verified. You can now reset password." });
      }
      return Response.json({ error: "OTP not verified" }, { status: 400 });
    }

    // Verify OTP
    const storedOtp = otpStore.get(phone);
    if (!storedOtp || !storedOtp.verified || storedOtp.otp !== otp) {
      return Response.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Update password
    const updatedMessage = user.message?.replace(/Password: [^\s|]+/, `Password: ${newPassword}`);
    
    await prisma.lead.update({
      where: { id: user.id },
      data: { message: updatedMessage }
    });

    otpStore.delete(phone);

    return Response.json({ success: true, message: "Password reset successfully!" });
    
  } catch (error) {
    return Response.json({ error: "Failed to reset password" }, { status: 500 });
  }
}