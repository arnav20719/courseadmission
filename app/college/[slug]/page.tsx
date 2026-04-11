import { colleges } from "@/data/colleges";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);
}

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const college = colleges.find((c) => c.slug === slug);

  if (!college) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <a className="text-sm font-semibold text-slate-900" href="/colleges">
            ← Back to Colleges
          </a>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">College not found</h1>
          <p className="mt-2 text-slate-600">
            This college slug doesn’t exist yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <a className="text-sm font-semibold text-slate-900" href="/colleges">
            ← Back to Colleges
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="rounded-xl border bg-white p-5">
              <h1 className="text-2xl font-bold text-slate-900">{college.name}</h1>
              <div className="mt-2 text-sm text-slate-600">
                {college.city}, {college.state} • {college.stream} • {college.type}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xs font-semibold text-slate-600">Fees (approx)</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    ₹{formatINR(college.feesMin)} – ₹{formatINR(college.feesMax)} / year
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xs font-semibold text-slate-600">Admission</div>
                  <div className="mt-1 text-sm text-slate-800">
                    Based on eligibility + entrance exam (varies by course).
                  </div>
                </div>
              </div>

              <h2 className="mt-6 text-base font-semibold text-slate-900">About</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{college.about}</p>

              <h2 className="mt-6 text-base font-semibold text-slate-900">Courses Offered</h2>
              <div className="mt-3 space-y-3">
                {college.courses.map((course) => (
                  <div key={course.name} className="rounded-lg border p-3">
                    <div className="text-sm font-semibold text-slate-900">{course.name}</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Duration: {course.duration} • Eligibility: {course.eligibility}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lead form */}
          <aside className="md:col-span-4">
            <div className="rounded-xl border bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Get Counselling</div>
              <p className="mt-1 text-sm text-slate-600">
                Fill details and we will call you back.
              </p>

              <form className="mt-4 space-y-3">
                <input
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Your Name"
                />
                <input
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Mobile Number"
                />
                <input
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Interested Course (optional)"
                />
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Submit
                </button>

                <div className="text-xs text-slate-500">
                  By submitting, you agree to be contacted for admission guidance.
                </div>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}