import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const colleges = await prisma.college.findMany({
      orderBy: [{ state: "asc" }, { name: "asc" }],
      select: {
        id: true,
        name: true,
        slug: true,
        state: true,
        city: true,
        stream: true,
        type: true,
        fees_ug_inr: true,
      },
    });
    return Response.json(colleges);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}