import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { email, phone, password } = await request.json();
    
    let user = null;
    
    if (email) {
      user = await prisma.lead.findFirst({
        where: { message: { contains: email } }
      });
    } else if (phone) {
      user = await prisma.lead.findFirst({
        where: { phone: phone }
      });
    }
    
    if (user && user.message && user.message.includes(password)) {
      return Response.json({ exists: true, name: user.name, phone: user.phone, email: user.email });
    } else if (user && !password) {
      return Response.json({ exists: true, name: user.name, phone: user.phone, email: user.email });
    } else if (user && password) {
      return Response.json({ exists: false, message: "Invalid password" });
    } else {
      return Response.json({ exists: false, message: "No account found. Please sign up first." });
    }
  } catch (error) {
    return Response.json({ exists: false, error: error.message });
  }
}