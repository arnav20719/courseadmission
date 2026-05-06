import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdmissionForm from "@/app/components/AdmissionForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollegeDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const college = await prisma.college.findUnique({
    where: { slug },
    include: { courses: true },
  });

  if (!college) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>{college.name}</h1>
      
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
        <span style={{ background: "#e0e7ff", padding: "5px 12px", borderRadius: "20px" }}>
          📍 {college.city}, {college.state}
        </span>
        <span style={{ background: "#dcfce7", padding: "5px 12px", borderRadius: "20px" }}>
          🏛️ {college.type}
        </span>
        <span style={{ background: "#fef3c7", padding: "5px 12px", borderRadius: "20px" }}>
          📚 {college.stream}
        </span>
        {college.fees && (
          <span style={{ background: "#fce7f3", padding: "5px 12px", borderRadius: "20px" }}>
            💰 Fees: ₹{college.fees.toLocaleString()}/year
          </span>
        )}
      </div>

      {college.about && (
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>About College</h2>
          <p style={{ lineHeight: "1.6", color: "#4a5568" }}>{college.about}</p>
        </div>
      )}

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Courses Offered ({college.courses.length})
        </h2>
        {college.courses.map((course) => (
          <div key={course.id} style={{ border: "1px solid #e2e8f0", padding: "15px", marginBottom: "10px", borderRadius: "8px", background: "#fafafa" }}>
            <h3 style={{ marginBottom: "8px" }}>{course.name}</h3>
            {course.duration && <p style={{ marginBottom: "5px" }}>⏱️ Duration: {course.duration}</p>}
            {course.fees && <p>💰 Fees: ₹{course.fees.toLocaleString()}</p>}
          </div>
        ))}
      </div>

      {/* ADMISSION FORM - SHOULD SHOW HERE */}
      <div style={{ border: "2px solid #3b82f6", borderRadius: "16px", padding: "30px", background: "#f0f9ff", marginTop: "20px" }}>
        <AdmissionForm collegeName={college.name} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <a href="/colleges" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to all colleges</a>
      </div>
    </div>
  );
}