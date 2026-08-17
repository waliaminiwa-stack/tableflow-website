"use client";
import { motion, useReducedMotion } from "motion/react";
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
      { label: "Unbegrenzte Tische", detail: "Für Restaurants mit vielen Tischen oder mehreren Bereichen" },
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
    ],
    excluded: [],
    cta: "Business starten",
    ctaClass: "bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.97]",
    premium: true,
  },
];

export default function PricingSection() {
  const reduce = useReducedMotion();

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

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-slate-400 mt-8">
            Alle Preise zzgl. gesetzlicher MwSt. Plan-Wechsel und Kündigung jederzeit möglich.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
