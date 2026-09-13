"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

// ─── Admin Dashboard Mockup ───────────────────────────────────────────────────

const BARS = [
  { h: 55, day: "Mo" },
  { h: 78, day: "Di" },
  { h: 42, day: "Mi" },
  { h: 92, day: "Do" },
  { h: 68, day: "Fr" },
  { h: 58, day: "Sa" },
];

function AdminMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <div className="p-3 h-full flex flex-col gap-2.5">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { val: "1.248", unit: "€", label: "Umsatz" },
          { val: "89", unit: "%", label: "Auslastung" },
          { val: "47", unit: "", label: "Bestellungen" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="rounded-lg bg-slate-50 p-2 text-center"
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-black text-slate-900 tabular-nums leading-tight">
              {s.val}
              <span className="text-[#FF6B35]">{s.unit}</span>
            </p>
            <p className="text-[7.5px] text-slate-400 font-medium mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="flex-1 flex items-end gap-1 pb-1 min-h-0">
        {BARS.map((bar, i) => (
          <div key={bar.day} className="flex-1 flex flex-col items-center gap-0.5 h-full">
            <div className="flex-1 w-full relative">
              <motion.div
                className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-[#FF6B35]/70"
                style={{ height: `${bar.h}%`, transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-[7px] text-slate-400 font-medium shrink-0">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Kellner Ansicht Mockup ───────────────────────────────────────────────────

const TABLES = [
  { num: 1,  label: "Frei",      dot: "bg-slate-200",           bg: "bg-slate-50",    text: "text-slate-400" },
  { num: 2,  label: "Frei",      dot: "bg-slate-200",           bg: "bg-slate-50",    text: "text-slate-400" },
  { num: 3,  label: "2 Best.",   dot: "bg-[#FF6B35] animate-pulse", bg: "bg-orange-50",  text: "text-orange-700" },
  { num: 4,  label: "Frei",      dot: "bg-slate-200",           bg: "bg-slate-50",    text: "text-slate-400" },
  { num: 5,  label: "Belegt",    dot: "bg-blue-400",            bg: "bg-blue-50",     text: "text-blue-700" },
  { num: 7,  label: "Zahlung",   dot: "bg-emerald-400",         bg: "bg-emerald-50",  text: "text-emerald-700" },
];

function KellnerMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="p-3 h-full">
      <div className="grid grid-cols-3 gap-2 h-full">
        {TABLES.map((t, i) => (
          <motion.div
            key={t.num}
            className={`rounded-xl flex flex-col items-center justify-center gap-1 ${t.bg}`}
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.055, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
            <span className={`text-[10px] font-black ${t.text}`}>{t.num}</span>
            <span className={`text-[7.5px] font-medium leading-tight text-center ${t.text}`}>{t.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Küchen Display Mockup ────────────────────────────────────────────────────

const TICKETS = [
  { item: "Pasta Carbonara ×2", table: "Tisch 3", badge: "Neu",     done: false, badgeClass: "bg-orange-50 text-orange-700 border-orange-200" },
  { item: "Margherita Pizza",   table: "Tisch 7", badge: "Dringend", done: false, badgeClass: "bg-red-50 text-red-600 border-red-200" },
  { item: "Espresso",           table: "Tisch 5", badge: null,       done: true,  badgeClass: "" },
  { item: "Tiramisu",           table: "Tisch 2", badge: null,       done: false, badgeClass: "" },
];

function KucheMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="p-3 h-full overflow-hidden">
      <div className="space-y-1.5">
        {TICKETS.map((t, i) => (
          <motion.div
            key={t.item}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
              t.done
                ? "opacity-50"
                : "bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            }`}
            initial={reduce ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: t.done ? 0.5 : 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.07, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                t.done ? "bg-emerald-500" : "border border-slate-200"
              }`}
            >
              {t.done && (
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <path d="M1 3.5l2 2 3-3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-[9px] font-bold truncate leading-tight ${t.done ? "line-through text-slate-400" : "text-slate-800"}`}>
                {t.item}
              </p>
              <p className="text-[7.5px] text-slate-400">{t.table}</p>
            </div>
            {t.badge && (
              <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${t.badgeClass}`}>
                {t.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const screens = [
  { label: "Admin-Dashboard",   desc: "Umsätze, Bestellungen und Tische auf einen Blick.",  title: "Dashboard",        Mockup: AdminMockup },
  { label: "Kellner-Ansicht",   desc: "Tischstatus, offene Bestellungen und Abrechnung.",    title: "Tischübersicht",   Mockup: KellnerMockup },
  { label: "Küchen-Display",    desc: "Live-Ticketsystem für die Küchenstation.",             title: "Offene Tickets",   Mockup: KucheMockup },
];

export default function ScreenshotsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Einfach. Übersichtlich. Schnell.
          </h2>
          <p className="text-lg text-slate-500">
            Jede Rolle hat ihre eigene Ansicht — optimiert für den Arbeitsalltag.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {screens.map(({ label, desc, title, Mockup }) => (
            <StaggerItem key={label}>
              <div className="group">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-52 shadow-sm group-hover:border-slate-300 group-hover:shadow-lg group-hover:shadow-slate-100/80 transition-all duration-250">
                  {/* Chrome bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50/80 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="text-[9px] font-semibold text-slate-400 ml-1 truncate">{title}</span>
                  </div>
                  <div className="h-[calc(100%-28px)]">
                    <Mockup />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-4 mb-1">{label}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
