import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    
    const college = await prisma.biharCreditCardCollege.findFirst({
      where: { slug: slug },
    });
    
    if (!college) {
      return Response.json({ error: "College not found" }, { status: 404 });
    }
    
    return Response.json(college);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}