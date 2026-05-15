import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { email, phone, password } = await request.json();

    let user = null;

    // Find user by email or phone
    if (email) {
      user = await prisma.lead.findFirst({
        where: { message: { contains: email } }
      });
    } else if (phone) {
      user = await prisma.lead.findFirst({
        where: { phone: phone }
      });
    }

    if (!user) {
      return Response.json({ error: "No account found. Please sign up first." }, { status: 404 });
    }

    // Verify password
    if (password && user.message && !user.message.includes(`Password: ${password}`)) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    return Response.json({
      success: true,
      name: user.name,
      phone: user.phone,
      email: user.message?.match(/Email: ([^\s|]+)/)?.[1] || "",
    });
    
  } catch (error) {
    return Response.json({ error: "Login failed. Please try again." }, { status: 500 });
  }
}