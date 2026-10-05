import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  pro?: boolean;
  business?: boolean;
  /** Breite Karte mit Foto (Bild und Text nebeneinander ab lg) */
  wide?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Bildseite der breiten Karte ab lg */
  imageSide?: "left" | "right";
  preview?: React.ReactNode;
};

/* ---------- Mini-Vorschauen: füllen Karten mit Substanz statt Leerraum ---------- */

function PreviewBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="mt-auto pt-5"
    >
      <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">{children}</div>
    </div>
  );
}

function Chip({ tone, children }: { tone: "orange" | "dark" | "slate" | "red"; children: React.ReactNode }) {
  const tones = {
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    dark: "bg-slate-900 text-white border-slate-900",
    slate: "bg-white text-slate-600 border-slate-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${tones[tone]}`}>
      {children}
    </span>
  );
}

function WaiterPreview() {
  return (
    <PreviewBox>
      <div className="flex flex-wrap gap-2">
        <Chip tone="orange">Tisch 3 · Neu</Chip>
        <Chip tone="dark">Tisch 7 · Zahlung</Chip>
        <Chip tone="slate">Tisch 5 · Belegt</Chip>
      </div>
    </PreviewBox>
  );
}

function KitchenPreview() {
  const rows = [
    { name: "Pasta Carbonara ×2", table: "Tisch 3", badge: <Chip tone="orange">Neu</Chip> },
    { name: "Margherita Pizza", table: "Tisch 7", badge: <Chip tone="red">Dringend</Chip> },
  ];
  return (
    <PreviewBox>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-700 truncate">{r.name}</span>
            <span className="flex items-center gap-2 shrink-0">
              <span className="text-slate-400">{r.table}</span>
              {r.badge}
            </span>
          </li>
        ))}
      </ul>
    </PreviewBox>
  );
}

function ReservationPreview() {
  const rows = [
    { time: "19:00", info: "4 Personen · Tisch 6" },
    { time: "20:30", info: "2 Personen · Tisch 2" },
  ];
  return (
    <PreviewBox>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.time} className="flex items-center gap-3 text-xs">
            <span className="font-bold text-[#FF6B35] tabular-nums">{r.time}</span>
            <span className="font-medium text-slate-600">{r.info}</span>
          </li>
        ))}
      </ul>
    </PreviewBox>
  );
}

function ReportPreview() {
  const bars = [40, 62, 48, 80, 100, 72, 56];
  return (
    <PreviewBox>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Heute</p>
          <p className="text-lg font-black text-slate-900 leading-tight">1.248 €</p>
        </div>
        <div className="flex items-end gap-1.5 h-10">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`w-2.5 rounded-sm ${i === 4 ? "bg-[#FF6B35]" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </PreviewBox>
  );
}

function LunchPreview() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr"];
  return (
    <PreviewBox>
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {days.map((d, i) => (
            <span
              key={d}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                i === 2 ? "bg-[#FF6B35] text-white" : "bg-white border border-slate-200 text-slate-500"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <span className="text-[11px] font-semibold text-slate-500">Sichtbar 11:30–14:00</span>
      </div>
    </PreviewBox>
  );
}

/* ---------- Inhalte ---------- */

const features: Feature[] = [
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
    wide: true,
    imageSide: "left",
    imageSrc: "/media/feature-qr.webp",
    imageAlt: "QR-Code-Aufsteller auf einem Restauranttisch",
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
    preview: <WaiterPreview />,
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
      "Visueller Tischplan mit Live-Status. Drag & Drop Layout-Editor, um deinen Gastraum abzubilden und jederzeit zu sehen, welcher Tisch gerade wie belegt ist.",
    pro: true,
    wide: true,
    imageSide: "right",
    imageSrc: "/media/feature-floorplan.webp",
    imageAlt: "Tische eines Restaurants von oben gesehen",
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
    preview: <KitchenPreview />,
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
      "Reservierungen anlegen, bearbeiten und Tischen zuweisen. Überblick für den ganzen Abend.",
    pro: true,
    preview: <ReservationPreview />,
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
    preview: <ReportPreview />,
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
    preview: <LunchPreview />,
  },
];

/*
 * Raster ab lg (3 Spalten), jede Zeile gleich hoch, kein Leerraum:
 *   Zeile 1: Speisekarte (2 Spalten, Foto links)  + Kellner-Dashboard
 *   Zeile 2: Floor Plan (2 Spalten, Foto rechts)  + Küchen-Ansicht
 *   Zeile 3: Reservierungen + Umsatz-Berichte + Mittagstisch
 */
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

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <StaggerItem
              key={feature.title}
              className={
                feature.wide
                  ? "sm:col-span-2 lg:col-span-2"
                  : index === features.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : undefined
              }
            >
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { wide, imageSrc, imageSide = "left" } = feature;

  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-1 cursor-default h-full overflow-hidden flex flex-col ${
        wide ? (imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row") : ""
      }`}
    >
      {imageSrc && (
        <div
          className={`relative overflow-hidden shrink-0 aspect-[3/2] lg:aspect-auto ${
            wide ? "lg:w-[46%] lg:min-h-[280px]" : ""
          }`}
        >
          <Image
            src={imageSrc}
            alt={feature.imageAlt ?? ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 400px"
          />
        </div>
      )}

      <div className={`flex-1 flex flex-col min-w-0 ${wide ? "p-6 lg:p-8" : "p-6"}`}>
        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:scale-105 transition-[background-color,transform] duration-250 shrink-0">
          {feature.icon}
        </div>
        <div className="flex items-start gap-2 mb-2 flex-wrap">
          <h3 className={`font-bold text-slate-900 leading-snug ${wide ? "text-lg" : "text-base"}`}>
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
        <p className={`text-slate-500 leading-relaxed ${wide ? "text-sm sm:text-base" : "text-sm"}`}>
          {feature.description}
        </p>
        {feature.preview}
      </div>
    </div>
  );
}
