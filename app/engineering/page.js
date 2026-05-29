// THIS PAGE LOADS INSTANTLY - NO WAITING
import Link from "next/link";

async function getEngineeringColleges() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3001'}/api/colleges?limit=2000`);
    const data = await res.json();
    const collegesArray = data.colleges || [];
    
    const engineeringColleges = collegesArray.filter((c) => {
      const name = (c.name || "").toLowerCase();
      const stream = (c.stream || "").toLowerCase();
      return (
        stream.includes("engineering") ||
        stream.includes("b.tech") ||
        stream.includes("btech") ||
        name.includes("iit") ||
        name.includes("nit") ||
        name.includes("bits") ||
        name.includes("engineering") ||
        name.includes("technology")
      );
    });
    
    return engineeringColleges;
  } catch (err) {
    console.error("Build error:", err);
    return [];
  }
}

export default async function EngineeringPage() {
  const colleges = await getEngineeringColleges();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#1e3a8a" }}>⚙️ Engineering Colleges</h1>
      <p style={{ marginBottom: "20px", color: "#4b5563" }}>Total {colleges.length} engineering colleges</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {colleges.slice(0, 50).map((college) => (
          <Link key={college.id} href={`/colleges/${college.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px", background: "white", cursor: "pointer" }}>
              <h3 style={{ color: "#1e3a8a", marginBottom: "10px" }}>{college.name}</h3>
              <p style={{ color: "#666", margin: "5px 0" }}>📍 {college.city}, {college.state}</p>
              <p style={{ color: "#666", margin: "5px 0" }}>🏛️ {college.type}</p>
              <p style={{ color: "#666", margin: "5px 0" }}>📚 {college.stream || "Engineering"}</p>
            </div>
          </Link>
        ))}
      </div>

      {colleges.length > 50 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/colleges">
            <button style={{ padding: "10px 24px", background: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
              View All {colleges.length} Engineering Colleges →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}