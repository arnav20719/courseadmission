export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-slate-900">CourseAdmission</div>
              <div className="text-sm text-slate-500">
                RG ARNAV EDU CONSULTANCY
              </div>
            </div>

            <a
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              href="/colleges"
            >
              Browse Colleges
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Find the right college after 12th, UG, or PG
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Search colleges, compare fees, check exams, and get counselling for admission.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">College Listings</div>
            <div className="mt-1 text-sm text-slate-600">
              Filters by state, city, stream, course, fees.
            </div>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Entrance Exams</div>
            <div className="mt-1 text-sm text-slate-600">
              Notifications, eligibility, and important dates.
            </div>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Schemes & State Admissions</div>
            <div className="mt-1 text-sm text-slate-600">
              Bihar Student Credit Card + state-wise admission guidance.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}