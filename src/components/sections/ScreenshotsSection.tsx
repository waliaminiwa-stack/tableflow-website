"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import Image from "next/image";

// ─── Kellner code-mockup (populated) ─────────────────────────────────────────

const WAITER_TABLES = [
  { num: "03", zone: "Terrace", status: "Besetzt",         sCls: "bg-blue-500/20 text-blue-300",     guests: 4, dur: "28 Min", items: 3, total: "34,50 €" },
  { num: "05", zone: "Indoor",  status: "Essen fertig",    sCls: "bg-emerald-500/20 text-emerald-300",guests: 2, dur: "41 Min", items: 5, total: "62,00 €" },
  { num: "07", zone: "Terrace", status: "Kellner gerufen", sCls: "bg-orange-500/20 text-orange-300",  guests: 6, dur: "15 Min", items: 2, total: "24,90 €" },
  { num: "12", zone: "Indoor",  status: "Rechnung",        sCls: "bg-purple-500/20 text-purple-300",  guests: 3, dur: "67 Min", items: 7, total: "89,50 €" },
];

function WaiterScreen() {
  return (
    <div className="bg-white h-full flex flex-col overflow-hidden">
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 shrink-0">
        <div>
          <p className="font-bold text-slate-900 text-sm">Kellner</p>
          <p className="text-[11px] text-slate-400">Wali Restaurant</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-600">Katrin</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-600 font-semibold">Live</span>
        </div>
      </header>

      <div className="grid grid-cols-5 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50 shrink-0">
        {[
          { v: "2", l: "Kellner-Rufe",    c: "text-orange-500" },
          { v: "1", l: "Rechnungen",       c: "text-blue-500"   },
          { v: "1", l: "Essen fertig",     c: "text-emerald-500"},
          { v: "4", l: "Besetzte Tische",  c: "text-slate-700"  },
          { v: "3", l: "Freie Tische",     c: "text-slate-400"  },
        ].map(s => (
          <div key={s.l} className="py-2 text-center">
            <p className={`text-sm font-black ${s.c}`}>{s.v}</p>
            <p className="text-[9px] text-slate-400 leading-tight px-1">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-1.5 px-3 py-2 border-b border-slate-100 overflow-x-auto shrink-0">
        {["Alle", "Besetzt", "Reserviert", "Kellner gerufen", "Rechnung", "Essen fertig"].map((c, i) => (
          <span key={c} className={`shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}>{c}</span>
        ))}
      </div>

      <div className="flex-1 p-3 overflow-auto min-h-0">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Aktive Tische · 4</p>
        <div className="grid grid-cols-2 gap-2">
          {WAITER_TABLES.map(t => (
            <div key={t.num} className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-black text-slate-900">{t.num}</span>
                  <span className="text-[10px] text-slate-400">{t.zone}</span>
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${t.sCls}`}>{t.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-1 mb-1.5">
                <div><p className="text-[9px] text-slate-400">Gäste</p><p className="text-xs font-bold text-slate-700">{t.guests}</p></div>
                <div><p className="text-[9px] text-slate-400">Dauer</p><p className="text-xs font-bold text-orange-600">{t.dur}</p></div>
              </div>
              <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                <span className="text-[9px] text-slate-400">{t.items} Artikel</span>
                <span className="text-xs font-black text-slate-900">{t.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Küche code-mockup (populated) ───────────────────────────────────────────

const KUE_NEU = [
  { tisch: "Tisch 3", tag: "Nachbestellung", tCls: "bg-orange-500/25 text-orange-300", items: "3× Vitello Tonnato",  time: "11:56" },
  { tisch: "Tisch 7", tag: "Neu",            tCls: "bg-blue-500/25 text-blue-300",     items: "2× Pizza Margherita", time: "12:03" },
];
const KUE_PREP = [
  { tisch: "Tisch 5", items: "1× Spaghetti Carbonara",      time: "11:49" },
  { tisch: "Tisch 1", items: "4× Hauswein · 2× Espresso",   time: "11:44" },
];
const KUE_DONE = [
  { tisch: "Tisch 9", items: "2× Pizza Funghi",  time: "11:38" },
  { tisch: "Tisch 2", items: "1× Tiramisu",      time: "11:30" },
];

function KitchenCol({ label, dot, count, children }: {
  label: string; dot: string; count: number; children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1d1d1d] rounded-xl p-2.5 flex flex-col gap-2 min-h-0 overflow-auto">
      <div className="flex items-center justify-between shrink-0">
        <span className="flex items-center gap-1.5 text-xs font-bold text-white">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />{label}
        </span>
        <span className="text-[10px] bg-white/10 text-slate-300 rounded-full px-1.5 py-0.5">{count}</span>
      </div>
      {children}
    </div>
  );
}

function KitchenScreen() {
  return (
    <div className="bg-[#111] h-full flex flex-col overflow-hidden">
      <header className="flex items-center justify-between px-4 py-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-bold text-white">Küchenmonitor</span>
          <span className="text-xs text-slate-400">Wali Restaurant</span>
        </div>
        <span className="text-xs text-slate-400">Katrin</span>
      </header>

      <div className="flex-1 grid grid-cols-3 gap-2 p-2 min-h-0 overflow-hidden">
        <KitchenCol label="Neu" dot="bg-blue-400" count={KUE_NEU.length}>
          {KUE_NEU.map(t => (
            <div key={t.tisch} className="bg-[#2a2a2a] rounded-lg p-2 border border-white/5 shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">{t.tisch}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${t.tCls}`}>{t.tag}</span>
              </div>
              <p className="text-[10px] text-slate-300 mb-1.5">{t.items}</p>
              <button className="w-full text-[9px] font-bold py-1 rounded-md bg-emerald-500 text-white">Zubereitung starten</button>
            </div>
          ))}
        </KitchenCol>

        <KitchenCol label="In Zubereitung" dot="bg-orange-400" count={KUE_PREP.length}>
          {KUE_PREP.map(t => (
            <div key={t.tisch} className="bg-[#2a2a2a] rounded-lg p-2 border border-white/5 shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">{t.tisch}</span>
                <span className="text-[9px] text-slate-400">{t.time}</span>
              </div>
              <p className="text-[10px] text-slate-300 mb-1.5">{t.items}</p>
              <button className="w-full text-[9px] font-bold py-1 rounded-md bg-white/10 text-white">Als fertig markieren</button>
            </div>
          ))}
        </KitchenCol>

        <KitchenCol label="Fertig" dot="bg-emerald-400" count={KUE_DONE.length}>
          {KUE_DONE.map(t => (
            <div key={t.tisch} className="bg-[#2a2a2a] rounded-lg p-2 border border-white/5 opacity-60 shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-400">{t.tisch}</span>
                <span className="text-[9px] text-slate-500">{t.time}</span>
              </div>
              <p className="text-[10px] text-slate-500 line-through">{t.items}</p>
              <p className="text-[9px] text-emerald-400 mt-1">✓ Serviert</p>
            </div>
          ))}
        </KitchenCol>
      </div>
    </div>
  );
}

// ─── Feature data ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    eyebrow: "Digitale Speisekarte",
    heading: "Alles im Blick,\nnichts vergessen.",
    body: "Menü, Preise und Fotos in Echtzeit gepflegt — sofort für Gäste sichtbar, sobald du speicherst.",
    bullets: ["7 Kategorien, 33 Gerichte strukturiert", "Sofort sichtbar via QR-Code am Tisch", "Fotos, Beschreibungen, Preise & Allergene"],
    img: "/screenshots/speisekarte.png",
  },
  {
    eyebrow: "Admin-Dashboard",
    heading: "Zahlen, die\nwirklich zählen.",
    body: "Umsatz, Stoßzeiten und Live-Aktivität auf einer Seite — kein Raten, nur Fakten.",
    bullets: ["Umsatz heute, diese Woche, dieser Monat", "Stoßzeiten-Chart für bessere Personalplanung", "Live-Aktivität: jede Bestellung in Echtzeit"],
    img: "/screenshots/dashboard.png",
  },
  {
    eyebrow: "Kellner-Dashboard",
    heading: "Tische im Griff,\nohne Hektik.",
    body: "Alle Tische, ihr Status und offene Bestellungen — auf einem Blick, ohne Zurückfragen.",
    bullets: ["Status pro Tisch: Besetzt, Kellner gerufen, Rechnung", "Gäste, Dauer und Bestellwert sofort sichtbar", "Floor Plan für räumliche Übersicht"],
    img: null,
  },
  {
    eyebrow: "Küchenmonitor",
    heading: "Kein Ticket\ngeht verloren.",
    body: "Neue Bestellungen erscheinen sofort. Drei Spalten machen den Status unmissverständlich klar.",
    bullets: ["Echtzeit-Tickets ohne Zettelwirtschaft", "Nachbestellungen und Prioritäten markiert", "Läuft im Browser — kein extra Gerät nötig"],
    img: null,
  },
] as const;

const RANGES = [
  [0,    0.05, 0.22, 0.27],
  [0.25, 0.30, 0.47, 0.52],
  [0.50, 0.55, 0.72, 0.77],
  [0.75, 0.80, 0.98, 1.00],
] as const;

// ─── Slide wrappers (hooks at component top level) ────────────────────────────

function TextSlide({ progress, range, feature }: {
  progress: MotionValue<number>;
  range: readonly [number, number, number, number];
  feature: typeof FEATURES[number];
}) {
  const [a, b, c, d] = range;
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, b, c, d], [28, 0, 0, -28]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="text-xs font-semibold text-[#FF6B35] uppercase tracking-widest mb-3">{feature.eyebrow}</p>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.06] mb-4 whitespace-pre-line">
        {feature.heading}
      </h3>
      <p className="text-base text-slate-400 leading-relaxed mb-6 max-w-sm">{feature.body}</p>
      <ul className="space-y-2.5">
        {feature.bullets.map(b => (
          <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
            <span className="w-4 h-4 rounded-full bg-[#FF6B35]/20 flex items-center justify-center shrink-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ScreenSlide({ progress, range, feature, idx }: {
  progress: MotionValue<number>;
  range: readonly [number, number, number, number];
  feature: typeof FEATURES[number];
  idx: number;
}) {
  const [a, b, c, d] = range;
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const scale = useTransform(progress, [a, b, c, d], [0.95, 1, 1, 0.95]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      {feature.img ? (
        <Image
          src={feature.img}
          alt={feature.eyebrow}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={idx === 0}
        />
      ) : idx === 2 ? (
        <WaiterScreen />
      ) : (
        <KitchenScreen />
      )}
    </motion.div>
  );
}

function DotIndicator({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const [a, b, c, d] = RANGES[index];
  const opacity = useTransform(progress, [a, b, c, d], [0.25, 1, 1, 0.25]);
  const scaleVal = useTransform(progress, [a, b, c, d], [1, 1.5, 1.5, 1]);
  return <motion.div style={{ opacity, scale: scaleVal }} className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ScreenshotsSection() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#FF6B35] uppercase tracking-widest mb-3">Das echte Produkt</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">Jede Ansicht. Jede Rolle.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.eyebrow}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white relative mb-4 shadow-lg">
                  {f.img ? (
                    <Image src={f.img} alt={f.eyebrow} fill className="object-cover object-top" sizes="25vw" />
                  ) : i === 2 ? <WaiterScreen /> : <KitchenScreen />}
                </div>
                <p className="text-xs font-semibold text-[#FF6B35] uppercase tracking-widest mb-1">{f.eyebrow}</p>
                <p className="text-sm text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-slate-950 flex items-center">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(255,107,53,0.07),transparent_55%)] pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Eyebrow + dots */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-[#FF6B35] uppercase tracking-widest mb-1.5">Das echte Produkt</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Jede Ansicht. Jede Rolle.</h2>
            </div>
            <div className="flex gap-2 items-center">
              {FEATURES.map((_, i) => (
                <DotIndicator key={i} progress={scrollYProgress} index={i} />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="relative h-72">
              {FEATURES.map((f, i) => (
                <TextSlide key={f.eyebrow} progress={scrollYProgress} range={RANGES[i]} feature={f} />
              ))}
            </div>

            {/* Right: screen */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] border border-white/8">
              {FEATURES.map((f, i) => (
                <ScreenSlide key={f.eyebrow} progress={scrollYProgress} range={RANGES[i]} feature={f} idx={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
