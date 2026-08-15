import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M6 8h10M6 11h7M6 14h4" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Digitale Speisekarte & QR-Bestellung",
    description:
      "Gäste scannen den QR-Code am Tisch und bestellen direkt auf ihrem Smartphone. Kein Extra-Gerät, kein App-Download.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 10h10M4 14h6" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="14" r="4" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M15 14l1.5 1.5L19 12.5" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Kellner-Dashboard",
    description:
      "Offene Tische, Bestellungen und Rechnungen auf einen Blick. PIN-Zugriff ohne Admin-Login für schnellen Schichtwechsel.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6 2 2 6 2 11s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M8 11l2 2 4-4" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Küchen-Ansicht",
    description:
      "Das Küchen-Team sieht neue Bestellungen in Echtzeit, kann Positionen abhaken und direkt kommunizieren.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M6 8h3v3H6zM13 8h3v3h-3zM6 13h10" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Floor Plan",
    description:
      "Visueller Tischplan mit Live-Status. Drag & Drop Layout-Editor, um deinen Gastraum abzubilden. Nur in Pro.",
    pro: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="15" rx="2" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M3 8h16M8 4V6M14 4V6" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="13" r="2" stroke="#FF6B35" strokeWidth="1.5" />
      </svg>
    ),
    title: "Reservierungsverwaltung",
    description:
      "Reservierungen anlegen, bearbeiten und Tischen zuweisen. Überblick für den ganzen Abend. Nur in Pro.",
    pro: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 18l4-4 3 3 4-5 5 6" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 4h16" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Umsatz-Berichte",
    description:
      "Tägliche und monatliche Umsatzübersichten, Top-Gerichte und CSV-Export für deine Buchhaltung.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Alles, was dein Restaurant braucht
          </h2>
          <p className="text-lg text-slate-500">
            Von der digitalen Bestellung bis zum Küchenbildschirm - TableFlow
            verbindet alle Stationen deines Restaurants in einer Lösung.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 hover:-translate-y-1 cursor-default h-full">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                  {f.icon}
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {f.title}
                  </h3>
                  {f.pro && (
                    <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-[#FF6B35] border border-orange-200">
                      Pro
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
