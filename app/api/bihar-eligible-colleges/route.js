import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const colleges = await prisma.$queryRaw`
      SELECT 
        id,
        "College Name" as college_name,
        "District Name" as district_name,
        "State" as state,
        college_type,
        slug
      FROM "BiharCreditCardCollege"
      WHERE "College Name" IS NOT NULL
      ORDER BY "State" ASC, "College Name" ASC
    `;
    
    const transformed = colleges.map(college => ({
      id: college.id,
      "College Name": college.college_name,
      "District Name": college.district_name,
      "State": college.state,
      college_type: college.college_type,
      slug: college.slug,
    }));
    
    return Response.json(transformed);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}