"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.table-flow.de";

type Plan = {
  key: string;
  label: string;
  price: string;
  description: string;
  features: { label: string; detail: string }[];
  excluded: { label: string }[];
  cta: string;
  ctaClass: string;
  highlighted?: boolean;
  premium?: boolean;
};

const PLANS: Plan[] = [
  {
    key: "basic",
    label: "Basic",
    price: "9,95",
    description: "Für den Einstieg",
    features: [
      { label: "Digitale Speisekarte & QR-Codes", detail: "Menü online stellen, Gäste scannen direkt am Tisch" },
      { label: "Bestellverwaltung", detail: "Bestellungen annehmen, verwalten und abschließen" },
      { label: "Kellner- & Küchen-Dashboard", detail: "Eigene Ansichten für Service und Küche, PIN-Zugriff ohne Admin-Login" },
      { label: "Bis zu 15 Tische", detail: "Ideal für kleine bis mittlere Restaurants" },
    ],
    excluded: [
      { label: "Interaktiver Floor Plan" },
      { label: "Reservierungsverwaltung" },
    ],
    cta: "Basic starten",
    ctaClass: "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.97]",
  },
  {
    key: "pro",
    label: "Pro",
    price: "19,95",
    description: "Für wachsende Restaurants",
    features: [
      { label: "Alles aus Basic", detail: "Alle Funktionen des Basic-Pakets inklusive" },
      { label: "Interaktiver Floor Plan", detail: "Visuelle Tischübersicht mit Live-Status, Drag & Drop Layout-Editor" },
      { label: "Reservierungsverwaltung", detail: "Reservierungen anlegen, bearbeiten und Tischen zuweisen" },
      { label: "Bis zu 25 Tische", detail: "Für Restaurants mit mehreren Bereichen oder wachsenden Tischzahlen" },
    ],
    excluded: [],
    cta: "Pro starten",
    ctaClass:
      "bg-[#FF6B35] text-white hover:brightness-95 shadow-[0_8px_24px_-8px_rgba(255,107,53,0.45)] hover:shadow-[0_12px_28px_-8px_rgba(255,107,53,0.55)] active:scale-[0.97]",
    highlighted: true,
  },
  {
    key: "business",
    label: "Business",
    price: "49,95",
    description: "Für Restaurants mit eigenem Markenauftritt",
    features: [
      { label: "Alles aus Pro", detail: "Alle Funktionen des Pro-Pakets inklusive" },
      { label: "Eigenes Logo", detail: "Dein Logo statt TableFlow-Branding auf der Gäste-Speisekarte" },
      { label: "Eigene Akzentfarbe", detail: "Buttons und Highlights in deiner Markenfarbe, mit automatischer Kontrastprüfung für gute Lesbarkeit" },
      { label: "Mittagstisch (Wochenplan)", detail: "Wiederkehrender Wochenplan mit Tagesangeboten – nur während eurer Mittagszeiten für Gäste sichtbar" },
      { label: "Unbegrenzte Tische", detail: "Für Restaurants mit vielen Tischen oder mehreren Bereichen" },
    ],
    excluded: [],
    cta: "Business starten",
    ctaClass: "bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.97]",
    premium: true,
  },
];

// ─── Comparison table data ────────────────────────────────────────────────────
// Values verified against app plan gating (src/lib/stripe.js, actions.js,
// branding/route.js, guest/lunch/route.js, SubscriptionContext.jsx).
type CellValue = true | false | string;
type TableRow = { feature: string; basic: CellValue; pro: CellValue; business: CellValue };
type TableCategory = { category: string; rows: TableRow[] };

const COMPARISON: TableCategory[] = [
  {
    category: "Bestellungen & Küche",
    rows: [
      { feature: "QR-Code-Bestellung am Tisch",          basic: true,         pro: true,         business: true },
      { feature: "Kellner- & Küchen-Dashboard",           basic: true,         pro: true,         business: true },
      { feature: "Bestellstatus-Verwaltung",              basic: true,         pro: true,         business: true },
      { feature: "Mittagstisch (Wochenplan)",             basic: false,        pro: false,        business: true },
    ],
  },
  {
    category: "Tische & Reservierungen",
    rows: [
      { feature: "Anzahl Tische",                         basic: "15 Tische",  pro: "25 Tische",  business: "Unbegrenzt" },
      { feature: "Interaktiver Floor Plan (Drag & Drop)", basic: false,        pro: true,         business: true },
      { feature: "Reservierungsverwaltung",               basic: false,        pro: true,         business: true },
      { feature: "Tisch-Aktivierungscode",                basic: true,         pro: true,         business: true },
    ],
  },
  {
    category: "Branding & Speisekarte",
    rows: [
      { feature: "Eigenes Logo auf der Speisekarte",      basic: false,        pro: false,        business: true },
      { feature: "Eigene Akzentfarbe",                    basic: false,        pro: false,        business: true },
      { feature: "Hintergrundbild (Speisekarte)",         basic: false,        pro: false,        business: true },
    ],
  },
  {
    category: "Support & Sonstiges",
    rows: [
      { feature: "14 Tage Gratis-Testzeitraum",           basic: true,         pro: true,         business: true },
      { feature: "E-Mail-Support",                        basic: true,         pro: true,         business: true },
      { feature: "Kein Vertrag, jederzeit kündbar",       basic: true,         pro: true,         business: true },
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500 mx-auto" viewBox="0 0 20 20" fill="none">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="w-5 h-5 text-slate-300 mx-auto" viewBox="0 0 20 20" fill="none">
      <path d="M6 10h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <DashIcon />;
  return <span className="text-sm font-semibold text-slate-700">{value}</span>;
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[540px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="sticky left-0 z-10 bg-white py-4 pl-6 pr-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400 w-[44%]">
              Funktion
            </th>
            <th className="py-4 px-4 text-center font-bold text-slate-700 w-[18%]">Basic</th>
            <th className="py-4 px-4 text-center font-bold text-[#FF6B35] w-[18%]">
              <span className="inline-flex items-center gap-1.5">
                Pro
                <span className="text-[9px] font-bold bg-orange-50 text-[#FF6B35] border border-orange-200 px-1.5 py-0.5 rounded-full leading-none">
                  Empfohlen
                </span>
              </span>
            </th>
            <th className="py-4 px-4 text-center font-bold text-slate-700 w-[18%]">Business</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((cat) => (
            <>
              <tr key={`cat-${cat.category}`} className="border-t border-slate-100 bg-slate-50/70">
                <td
                  colSpan={4}
                  className="sticky left-0 z-10 bg-slate-50/70 py-2.5 pl-6 text-[11px] font-bold uppercase tracking-wider text-slate-400"
                >
                  {cat.category}
                </td>
              </tr>
              {cat.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-t border-slate-100 transition-colors hover:bg-slate-50/60 ${
                    i === cat.rows.length - 1 ? "" : ""
                  }`}
                >
                  <td className="sticky left-0 z-10 bg-white py-3.5 pl-6 pr-4 font-medium text-slate-700 leading-snug hover:bg-slate-50/60">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Cell value={row.basic} />
                  </td>
                  <td className="py-3.5 px-4 text-center bg-orange-50/30">
                    <Cell value={row.pro} />
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Cell value={row.business} />
                  </td>
                </tr>
              ))}
            </>
          ))}
          <tr className="border-t border-slate-200">
            <td className="sticky left-0 z-10 bg-white py-5 pl-6" />
            <td className="py-5 px-4 text-center">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.97] transition-all"
              >
                Basic starten
              </a>
            </td>
            <td className="py-5 px-4 text-center bg-orange-50/30">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-xs font-semibold bg-[#FF6B35] text-white hover:brightness-95 shadow-[0_4px_12px_-4px_rgba(255,107,53,0.5)] active:scale-[0.97] transition-all"
              >
                Pro starten
              </a>
            </td>
            <td className="py-5 px-4 text-center">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.97] transition-all"
              >
                Business starten
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function PricingSection() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-lg text-slate-500">
            14 Tage gratis testen - ohne Kreditkarte. Kein Vertrag, jederzeit
            kündbar.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.key}>
              <motion.div
                whileHover={reduce ? {} : {
                  y: -6,
                  boxShadow: plan.highlighted
                    ? "0 24px 48px -12px rgba(255,107,53,0.18)"
                    : plan.premium
                    ? "0 24px 48px -12px rgba(15,23,42,0.16)"
                    : "0 24px 48px -12px rgba(15,23,42,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`rounded-2xl p-8 flex flex-col h-full transition-shadow ${
                  plan.highlighted
                    ? "bg-white border-2 border-[#FF6B35]/25"
                    : plan.premium
                    ? "bg-white border-2 border-slate-800/15"
                    : "bg-white border border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {plan.label}
                  </span>
                  {plan.highlighted && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-[#FF6B35] border border-orange-200">
                      Empfohlen
                    </span>
                  )}
                  {plan.premium && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                      Premium
                    </span>
                  )}
                </div>

                <p className="text-4xl font-extrabold text-slate-900 mt-1">
                  {plan.price}&nbsp;
                  <span className="text-base font-medium text-slate-400">€/Monat</span>
                </p>
                <p className="text-sm text-slate-500 mt-1 mb-6">{plan.description}</p>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 leading-snug">{f.label}</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{f.detail}</p>
                      </div>
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-400 line-through leading-snug">{f.label}</p>
                        <p className="text-[11px] text-[#FF6B35] font-semibold mt-0.5">Ab Pro verfügbar</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${APP_URL}/register`}
                  className={`w-full h-11 rounded-xl text-sm font-semibold transition-all duration-150 inline-flex items-center justify-center ${plan.ctaClass}`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Toggle button */}
        <ScrollReveal delay={0.15} className="flex justify-center mt-10">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors group"
            aria-expanded={open}
          >
            {open ? "Weniger anzeigen" : "Alle Funktionen vergleichen"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </ScrollReveal>

        {/* Expandable comparison table */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="comparison"
              initial={reduce ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduce ? {} : { opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-8 max-w-5xl mx-auto">
                <ComparisonTable />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-slate-400 mt-8">
            Alle Preise zzgl. gesetzlicher MwSt. Plan-Wechsel und Kündigung jederzeit möglich.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
