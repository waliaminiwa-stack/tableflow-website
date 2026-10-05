"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const tabs = [
  {
    id: "speisekarte",
    label: "Digitale Speisekarte",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5 5h6M5 8h4M5 11h3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    headline: "Deine Speisekarte, immer aktuell",
    description:
      "Erstelle deine digitale Speisekarte in Minuten. Kategorien, Bilder, Preise, Allergene - alles im Admin-Bereich pflegbar. Deine Gäste scannen den QR-Code am Tisch und bestellen direkt, ohne App-Download.",
    highlights: [
      "QR-Code pro Tisch oder für den ganzen Bereich",
      "Sofortige Updates ohne Druckkosten",
      "Bilder, Beschreibungen & Allergenkennzeichnung",
      "Mehrsprachig auf Anfrage",
    ],
    color: "orange",
    mockup: {
      title: "Getränkekarte - Tisch 5",
      items: [
        { name: "Mineralwasser", price: "3,50 €", badge: null },
        { name: "Hauswein (0,2l)", price: "6,90 €", badge: "Beliebt" },
        { name: "Espresso", price: "2,80 €", badge: null },
        { name: "Pasta Carbonara", price: "14,90 €", badge: "Empfohlen" },
      ],
    },
  },
  {
    id: "kellner",
    label: "Kellner-Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.25" />
        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    headline: "Immer den Überblick",
    description:
      "Das Kellner-Dashboard zeigt alle Tische auf einen Blick - offene Bestellungen, Rechnungsanforderungen, neue Gastbestellungen. Einfacher PIN-Zugriff: jeder Mitarbeiter kommt schnell rein, ohne geteilte Admin-Zugangsdaten.",
    highlights: [
      "Live-Status aller Tische",
      "Neue Bestellungen direkt sichtbar",
      "Rechnungen auf Knopfdruck",
      "PIN-Zugriff - kein Passwortstress",
    ],
    color: "blue",
    mockup: {
      title: "Tischübersicht",
      items: [
        { name: "Tisch 1", price: "Frei", badge: null },
        { name: "Tisch 3", price: "2 Bestellungen", badge: "Neu" },
        { name: "Tisch 7", price: "Rechnung angefordert", badge: "Zahlung" },
        { name: "Tisch 9", price: "In Bearbeitung", badge: null },
      ],
    },
  },
  {
    id: "kueche",
    label: "Küchen-Ansicht",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v3M5 3.5C5 5.5 3 6 3 8h10c0-2-2-2.5-2-4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M2 8h12v2a6 6 0 0 1-12 0V8z" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    headline: "Keine Bestellung geht verloren",
    description:
      "Die Küche sieht neue Tickets sofort, sobald ein Gast bestellt. Positionen können einzeln als zubereitet markiert werden. Kein Zettelwirrwarr, kein Missverständnis zwischen Service und Küche.",
    highlights: [
      "Live-Tickets in Echtzeit",
      "Einzelne Positionen abhaken",
      "Prioritaten sichtbar",
      "Kein eigenes Gerät notwendig - läuft im Browser",
    ],
    color: "emerald",
    mockup: {
      title: "Offene Tickets",
      items: [
        { name: "Pasta Carbonara (x2)", price: "Tisch 3", badge: "Neu" },
        { name: "Margherita Pizza", price: "Tisch 7", badge: "Dringend" },
        { name: "Espresso", price: "Tisch 5", badge: null },
        { name: "Tiramisu", price: "Tisch 2", badge: null },
      ],
    },
  },
];

const tabImages: Record<string, { src: string; alt: string }> = {
  speisekarte: {
    src: "/media/rolle-speisekarte.webp",
    alt: "Gast schaut an seinem Tisch auf die digitale Speisekarte im Smartphone",
  },
  kellner: {
    src: "/media/rolle-kellner.webp",
    alt: "Kellner im Restaurant überprüft Bestellungen auf dem Tablet",
  },
  kueche: {
    src: "/media/rolle-kueche.webp",
    alt: "Köche in der Küche bereiten Gerichte nach eingegangenem Ticket vor",
  },
};

const colorMap = {
  orange: {
    tab: "bg-orange-50 text-[#FF6B35] border-[#FF6B35]/30",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    dot: "bg-[#FF6B35]",
    highlight: "text-[#FF6B35]",
  },
  blue: {
    tab: "bg-blue-50 text-blue-600 border-blue-200",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
    highlight: "text-blue-600",
  },
  emerald: {
    tab: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    highlight: "text-emerald-600",
  },
};

export default function ProductTabsSection() {
  const [active, setActive] = useState("speisekarte");
  const reduce = useReducedMotion();
  const tab = tabs.find((t) => t.id === active)!;
  const colors = colorMap[tab.color as keyof typeof colorMap];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Jede Rolle, perfekt unterstützt
          </h2>
          <p className="text-lg text-slate-500">
            TableFlow ist kein einheitliches Tool - jede Station bekommt genau das, was sie braucht.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((t) => {
              const c = colorMap[t.color as keyof typeof colorMap];
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 active:scale-[0.97] ${
                    isActive
                      ? c.tab
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span className={isActive ? colors.highlight : ""}>{t.icon}</span>
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 lg:pt-2">{tab.headline}</h3>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">{tab.description}</p>
                <ul className="space-y-4 border-t border-slate-100 pt-6">
                  {tab.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-base">
                      <span className={`w-5 h-5 rounded-full ${colors.dot} flex items-center justify-center shrink-0`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-slate-700 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Foto mit überlappender UI-Karte: eine ruhige Komposition statt gestapelter Einzelteile */}
            <div className="relative pb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`photo-${active}`}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden rounded-3xl shadow-lg shadow-slate-200/60"
                >
                  <Image
                    src={tabImages[active].src}
                    alt={tabImages[active].alt}
                    width={2000}
                    height={1493}
                    className="w-full object-cover aspect-[16/10]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`mockup-${active}`}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative -mt-12 ml-auto mr-3 sm:mr-5 w-[88%] sm:w-[80%] bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-300/40 overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50/60">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 ml-2">{tab.mockup.title}</span>
                  </div>
                  <div className="p-2.5">
                    {tab.mockup.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between gap-3 py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-800 truncate">{item.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-sm text-slate-400">{item.price}</span>
                          {item.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
