import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, password, stream, message } = body;

    if (!name || !phone) {
      return Response.json({ error: "Name and phone are required" }, { status: 400 });
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

    // Save lead to database
    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        stream: stream || null,
        message: `Email: ${email || 'N/A'} | Password: ${password || 'N/A'} | ${message || ''}`,
      },
    });

    return Response.json({ success: true, message: "Account created successfully!", lead });
  } catch (error) {
    console.error("Error saving lead:", error);
    return Response.json({ error: "Failed to create account" }, { status: 500 });
  }
}

// GET endpoint to fetch all leads (for admin)
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return Response.json(leads);
  } catch (error) {
    return Response.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}