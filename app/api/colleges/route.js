import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const search = searchParams.get("search") || "";
    const state = searchParams.get("state") || "";
    const stream = searchParams.get("stream") || "";
    const type = searchParams.get("type") || "";
    
    const skip = (page - 1) * limit;
    
    // Build where clause
    let where = {};
    if (search) {
      where.name = { contains: search, mode: "insensitive" };
    }
    if (state) {
      where.state = state;
    }
    if (stream) {
      where.stream = { contains: stream, mode: "insensitive" };
    }
    if (type) {
      where.type = type;
    }
    
    // Get total count for pagination
    const total = await prisma.college.count({ where });
    
    // Get paginated colleges
    const colleges = await prisma.college.findMany({
      where,
      skip,
      take: limit,
      orderBy: { name: "asc" },
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
    
    return Response.json({
      colleges,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}