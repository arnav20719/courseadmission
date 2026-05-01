console.log("DEBUG: DATABASE_URL loaded =", process.env.DATABASE_URL);import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CollegesPage() {
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
      fees: true,
    },
  });

  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Colleges</h1>
      <p style={{ marginTop: 8, color: "#555" }}>
        Browse {colleges.length} colleges
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
        {colleges.map((c) => (
          <Link
            key={c.id}
            href={`/colleges/${c.slug}`}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 12,
              padding: 16,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>{c.name}</div>

            <div style={{ marginTop: 6, color: "#555" }}>
              {c.city}, {c.state} • {c.type}
            </div>

            <div style={{ marginTop: 6, color: "#555" }}>{c.stream}</div>

            {c.fees ? (
              <div style={{ marginTop: 6, color: "#111" }}>
                Avg Fees (approx): ₹{c.fees.toLocaleString("en-IN")} / year
              </div>
            ) : (
              <div style={{ marginTop: 6, color: "#777" }}>
                Fees: Not available
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}