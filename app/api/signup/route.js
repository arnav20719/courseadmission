import { prisma } from "@/lib/prisma";
import { otpStore } from "../send-otp/route";

export async function POST(request) {
  try {
    const { name, phone, email, password, course, city, otp } = await request.json();

    // Validate required fields
    if (!name || !phone || !password) {
      return Response.json({ error: "Name, phone, and password are required" }, { status: 400 });
    }

    // Verify OTP
    const storedOtp = otpStore.get(phone);
    if (!storedOtp || !storedOtp.verified) {
      return Response.json({ error: "Phone number not verified. Please verify OTP first." }, { status: 400 });
    }

    if (storedOtp.otp !== otp) {
      return Response.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.lead.findFirst({
      where: {
        OR: [
          { phone: phone },
          { message: { contains: email } }
        ]
      }
    });

    if (existingUser) {
      return Response.json({ error: "User already exists with this phone or email" }, { status: 400 });
    }

    // Create new user
    const user = await prisma.lead.create({
      data: {
        name,
        phone,
        stream: course || null,
        message: `Email: ${email || 'N/A'} | Password: ${password} | City: ${city || 'N/A'} | Verified: Yes`,
      },
    });

    // Clear OTP after successful signup
    otpStore.delete(phone);

    return Response.json({ 
      success: true, 
      message: "Account created successfully!",
      user: { id: user.id, name: user.name, phone: user.phone }
    });
    
  } catch (error) {
    console.error("Signup error:", error);
    return Response.json({ error: "Failed to create account" }, { status: 500 });
  }
}