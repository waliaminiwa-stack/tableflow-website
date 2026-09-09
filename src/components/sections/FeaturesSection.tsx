import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  pro?: boolean;
  business?: boolean;
  large?: boolean;
  decorative?: "qr" | "calendar";
};

function QrDecoration() {
  const pattern = [
    1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,
    1,0,1,1,1,0,1,
    1,0,1,0,1,0,1,
    1,0,1,1,1,0,1,
    1,0,0,0,0,0,1,
    1,1,1,1,1,1,1,
  ];
  return (
    <div className="hidden lg:grid grid-cols-7 gap-[3px] opacity-[0.06] select-none pointer-events-none shrink-0">
      {pattern.map((cell, i) => (
        <div key={i} className={`w-3.5 h-3.5 rounded-[2px] ${cell ? "bg-slate-900" : ""}`} />
      ))}
    </div>
  );
}

function CalendarDecoration() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr"];
  return (
    <div className="hidden lg:flex items-end gap-1.5 opacity-[0.07] select-none pointer-events-none">
      {days.map((day, i) => (
        <div key={day} className="flex flex-col items-center gap-1">
          <div className={`w-9 rounded-lg ${i === 2 ? "h-16 bg-[#FF6B35]" : "h-10 bg-slate-900"}`} />
          <span className="text-[9px] font-bold text-slate-600">{day}</span>
        </div>
      ))}
    </div>
  );
}

const features: Feature[] = [
  // Row 1: span-2 + span-1
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M6 8h10M6 11h7M6 14h4" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Digitale Speisekarte & QR-Bestellung",
    description:
      "Gäste scannen den QR-Code am Tisch und bestellen direkt auf ihrem Smartphone. Kein Extra-Gerät, kein App-Download — die Speisekarte öffnet sich sofort im Browser und Änderungen sind in Echtzeit sichtbar.",
    large: true,
    decorative: "qr",
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
  // Row 2: span-1 + span-1 + span-1
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
      "Visueller Tischplan mit Live-Status. Drag & Drop Layout-Editor, um deinen Gastraum abzubilden.",
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
  // Row 3: span-1 + span-2
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
      "Reservierungen anlegen, bearbeiten und Tischen zuweisen. Überblick für den ganzen Abend.",
    pro: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="16" rx="2" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M2 7h18" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 7v12M11 7v12M16 7v12" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
        <circle cx="11" cy="12" r="2.5" stroke="#FF6B35" strokeWidth="1.5" />
        <path d="M10 12l1 1 1.5-1.5" stroke="#FF6B35" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mittagstisch (Wochenplan)",
    description:
      "Wiederkehrender Wochenplan mit Tagesangeboten — automatisch nur während eurer Mittagszeiten für Gäste sichtbar. Kein manuelles Ein- und Ausschalten.",
    business: true,
    large: true,
    decorative: "calendar",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Alles, was dein Restaurant braucht
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Von der digitalen Bestellung bis zum Küchenbildschirm — TableFlow verbindet alle Stationen in einer Lösung.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: Speisekarte (span-2) + Kellner */}
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <FeatureCard feature={features[0]} />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard feature={features[1]} />
          </StaggerItem>

          {/* Row 2: Küche + Floor + Berichte */}
          <StaggerItem>
            <FeatureCard feature={features[2]} />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard feature={features[3]} />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard feature={features[4]} />
          </StaggerItem>

          {/* Row 3: Reservierung + Mittagstisch (span-2) */}
          <StaggerItem>
            <FeatureCard feature={features[5]} />
          </StaggerItem>
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <FeatureCard feature={features[6]} />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-1 cursor-default h-full ${
        feature.large ? "p-8" : "p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-4 h-full">
        <div className="flex flex-col h-full min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:scale-105 transition-[background-color,transform] duration-250 shrink-0">
            {feature.icon}
          </div>
          <div className="flex items-start gap-2 mb-2 flex-wrap">
            <h3 className={`font-bold text-slate-900 leading-snug ${feature.large ? "text-lg" : "text-base"}`}>
              {feature.title}
            </h3>
            {feature.pro && (
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-[#FF6B35] border border-orange-200">
                Pro
              </span>
            )}
            {feature.business && (
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                Business
              </span>
            )}
          </div>
          <p className={`text-slate-500 leading-relaxed ${feature.large ? "text-sm sm:text-base" : "text-sm"}`}>
            {feature.description}
          </p>
          {feature.large && (
            <div className="mt-auto pt-6 flex items-end justify-end">
              {feature.decorative === "qr" && <QrDecoration />}
              {feature.decorative === "calendar" && <CalendarDecoration />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
