"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{tab.headline}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{tab.description}</p>
                <ul className="space-y-2.5">
                  {tab.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm">
                      <span className={`w-4 h-4 rounded-full ${colors.dot} flex items-center justify-center shrink-0`}>
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

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mockup-${active}`}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100/60 overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/60">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 ml-2">{tab.mockup.title}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {tab.mockup.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-800">{item.name}</span>
                        <div className="flex items-center gap-2">
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
                  <div className="px-4 pb-2" />
                </motion.div>
              </AnimatePresence>

              {/* Annotation bubble: Live-Ticker (top-right) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bubble-top-${active}`}
                  initial={reduce ? false : { opacity: 0, scale: 0.88, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -4 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:flex absolute -top-4 right-0 z-10 flex-col items-end pointer-events-none"
                >
                  <div className="flex items-center gap-2 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.09)] border border-slate-100 px-3.5 py-2">
                    <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="3.5" stroke="#FF6B35" strokeWidth="1.2"/>
                        <path d="M5 3v2.2l1.3 1" stroke="#FF6B35" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Live-Ticker</span>
                  </div>
                  <div className="w-px h-5 bg-gradient-to-b from-orange-300/60 to-transparent mr-7" />
                </motion.div>
              </AnimatePresence>

              {/* Annotation bubble: Kein Zettelchaos (bottom-left) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bubble-bottom-${active}`}
                  initial={reduce ? false : { opacity: 0, scale: 0.88, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 4 }}
                  transition={{ duration: 0.3, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:flex absolute -bottom-4 left-0 z-10 flex-col items-start pointer-events-none"
                >
                  <div className="w-px h-5 bg-gradient-to-t from-slate-200/60 to-transparent ml-7" />
                  <div className="flex items-center gap-2 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.09)] border border-slate-100 px-3.5 py-2">
                    <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3h6M2 5.5h4M2 8h5" stroke="#FF6B35" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Kein Zettelchaos</span>
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
