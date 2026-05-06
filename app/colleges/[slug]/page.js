import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdmissionForm from "@/app/components/AdmissionForm";

export default async function CollegeDetailPage({ params }) {
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
      <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "black" }}>{college.name}</h1>
      
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
        <span style={{ background: "#e0e7ff", padding: "5px 12px", borderRadius: "20px", color: "black" }}>
          📍 {college.city}, {college.state}
        </span>
        <span style={{ background: "#dcfce7", padding: "5px 12px", borderRadius: "20px", color: "black" }}>
          🏛️ {college.type}
        </span>
        <span style={{ background: "#fef3c7", padding: "5px 12px", borderRadius: "20px", color: "black" }}>
          📚 {college.stream}
        </span>
        {college.fees && (
          <span style={{ background: "#fce7f3", padding: "5px 12px", borderRadius: "20px", color: "black" }}>
            💰 Fees: ₹{college.fees.toLocaleString()}/year
          </span>
        )}
      </div>

      {college.about && (
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "black" }}>About College</h2>
          <p style={{ lineHeight: "1.6", color: "black" }}>{college.about}</p>
        </div>
      )}

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "black" }}>
          Courses Offered ({college.courses.length})
        </h2>
        {college.courses.map((course, index) => (
          <div key={index} style={{ border: "1px solid #e2e8f0", padding: "15px", marginBottom: "10px", borderRadius: "8px", background: "#fafafa" }}>
            <h3 style={{ marginBottom: "8px", color: "black" }}>{course.name}</h3>
            {course.duration && <p style={{ marginBottom: "5px", color: "black" }}>⏱️ Duration: {course.duration}</p>}
            {course.fees && <p style={{ color: "black" }}>💰 Fees: ₹{course.fees.toLocaleString()}</p>}
          </div>
        ))}
      </div>

      <div style={{ border: "2px solid #3b82f6", borderRadius: "16px", padding: "30px", background: "#f0f9ff", marginTop: "20px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>📝 Get Admission Guidance</h2>
        <p style={{ color: "black", marginBottom: "20px" }}>Fill the form below. Our counselor will contact you shortly.</p>
        <AdmissionForm collegeName={college.name} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <a href="/colleges" style={{ color: "#3b82f6", textDecoration: "none" }}>← Back to all colleges</a>
      </div>
    </div>
  );
}