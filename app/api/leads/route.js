import { prisma } from "@/lib/prisma";

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, stream, message } = body;

    if (!name || !phone) {
      return Response.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: { name, phone, stream: stream || null, message: message || null },
    });

    return Response.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return Response.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}