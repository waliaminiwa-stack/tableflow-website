const screens = [
  {
    label: "Admin-Dashboard",
    description: "Umsatze, Bestellungen und Tische auf einen Blick.",
  },
  {
    label: "Kellner-Ansicht",
    description: "Tischstatus, offene Bestellungen und Abrechnung.",
  },
  {
    label: "Kuchen-Display",
    description: "Live-Ticketsystem fur die Kuchenstation.",
  },
];

export default function ScreenshotsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Einfach. Ubersichtlich. Schnell.
          </h2>
          <p className="text-lg text-slate-500">
            Jede Rolle hat ihre eigene Ansicht - optimiert fur den Arbeitsalltag.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {screens.map((s) => (
            <div key={s.label} className="group">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] flex items-center justify-center mb-4 group-hover:border-slate-300 group-hover:shadow-lg group-hover:shadow-slate-100 transition-all">
                {/* Placeholder - replace with real screenshots */}
                <div className="text-center px-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 mx-auto mb-3 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="16" height="16" rx="2.5" stroke="#94a3b8" strokeWidth="1.25" />
                      <path d="M5 7h10M5 10h6M5 13h4" stroke="#94a3b8" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-slate-400">Screenshot folgt</p>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{s.label}</h3>
              <p className="text-sm text-slate-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
