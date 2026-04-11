import { colleges } from "@/data/colleges";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);
}

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-sm font-semibold text-slate-900">
            ← Home
          </a>
          <div className="text-sm font-semibold text-slate-900">Colleges</div>
          <div className="text-sm text-slate-500">Filters (coming)</div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-12">
          {/* Filters */}
          <aside className="md:col-span-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">Filters</div>

              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-600">State</label>
                  <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
                    <option>All States</option>
                    <option>Bihar</option>
                    <option>Uttar Pradesh</option>
                    <option>Delhi</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-600">Stream</label>
                  <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
                    <option>All Streams</option>
                    <option>Engineering</option>
                    <option>Medical</option>
                    <option>Management</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-600">Type</label>
                  <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
                    <option>Govt + Private</option>
                    <option>Govt</option>
                    <option>Private</option>
                  </select>
                </div>

                <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="md:col-span-8">
            <div className="mb-3 text-sm text-slate-600">
              Showing <span className="font-semibold">{colleges.length}</span> colleges
            </div>

            <div className="space-y-4">
              {colleges.map((c) => (
                <a
                  key={c.slug}
                  href={`/college/${c.slug}`}
                  className="block rounded-xl border bg-white p-4 hover:border-blue-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-slate-900">{c.name}</div>
                      <div className="mt-1 text-sm text-slate-600">
                        {c.city}, {c.state} • {c.stream} • {c.type}
                      </div>
                      <div className="mt-2 text-sm text-slate-700">
                        Fees: ₹{formatINR(c.feesMin)} – ₹{formatINR(c.feesMax)} / year
                      </div>
                    </div>

                    <div className="shrink-0 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                      View
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <button className="rounded-lg border bg-white px-3 py-2">Prev</button>
              <div>Page 1</div>
              <button className="rounded-lg border bg-white px-3 py-2">Next</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
