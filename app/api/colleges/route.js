import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const stream = url.searchParams.get("stream");
    const state = url.searchParams.get("state");
    
    let whereCondition = {};
    
    if (search) {
      whereCondition = {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { city: { contains: search, mode: "insensitive" } },
          { state: { contains: search, mode: "insensitive" } },
          { stream: { contains: search, mode: "insensitive" } }
        ]
      };
    }
    
    if (stream && stream !== "undefined" && stream !== "") {
      whereCondition.stream = { contains: stream, mode: "insensitive" };
    }
    
    if (state && state !== "undefined" && state !== "") {
      whereCondition.state = { equals: state };
    }
    
    const colleges = await prisma.college.findMany({
      where: whereCondition,
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
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}