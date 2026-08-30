"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.table-flow.de";

const ORDER_STEPS = [
  {
    status: "Neu",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    dot: "bg-[#FF6B35]",
    pulse: true,
    label: "Bestellung eingegangen",
  },
  {
    status: "In Zubereitung",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
    pulse: false,
    label: "An Küche weitergeleitet",
  },
  {
    status: "Serviert",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    pulse: false,
    label: "Gast bedient",
  },
];

const ORDERS = [
  { id: 47, table: 7, items: ["Pasta Carbonara", "Mineralwasser"] },
  { id: 48, table: 3, items: ["Margherita Pizza", "Hauswein"] },
];

function OrderFlowDemo() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [orderIdx, setOrderIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setStep((s) => {
        if (s === ORDER_STEPS.length - 1) {
          setTimeout(() => setOrderIdx((i) => (i + 1) % ORDERS.length), 300);
          return 0;
        }
        return s + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [reduce]);

  const current = ORDER_STEPS[reduce ? 2 : step];
  const order = ORDERS[orderIdx];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/60">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <span className="text-xs font-semibold text-slate-400 ml-2">Kellner-Dashboard</span>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={order.id}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-bold text-slate-400 uppercase tracking-wide"
              >
                Bestellung #{order.id} - Tisch {order.table}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${order.id}-items`}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mt-1.5 space-y-1"
              >
                {order.items.map((item) => (
                  <p key={item} className="text-sm font-medium text-slate-800">{item}</p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.span
              key={current.status}
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border shrink-0 ${current.color}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${current.dot} ${current.pulse && !reduce ? "animate-pulse" : ""}`} />
              {current.status}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            {ORDER_STEPS.map((s, i) => (
              <div key={s.status} className="flex items-center gap-1.5">
                <motion.div
                  animate={reduce ? {} : { scale: i === step ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    i <= (reduce ? 2 : step) ? s.dot : "bg-slate-200"
                  }`}
                />
                <span className={`text-xs font-medium transition-colors duration-500 ${
                  i <= (reduce ? 2 : step) ? "text-slate-700" : "text-slate-300"
                }`}>
                  {s.label}
                </span>
                {i < ORDER_STEPS.length - 1 && (
                  <svg className="w-3 h-3 text-slate-200 mx-0.5 shrink-0" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.07)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-xs font-semibold text-orange-700">14 Tage kostenlos testen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Dein Restaurant,{" "}
              <span className="text-[#FF6B35]">digital und effizient</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              TableFlow bringt digitale Bestellungen, Kellner-Dashboard und
              Küchenmanagement in ein einziges System - ohne Hardware, ohne
              Kassensystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-white bg-[#FF6B35] hover:brightness-95 transition-all duration-150 shadow-[0_8px_24px_-8px_rgba(255,107,53,0.45)] hover:shadow-[0_12px_28px_-8px_rgba(255,107,53,0.55)] active:scale-[0.97]"
              >
                Kostenlos testen
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-150 active:scale-[0.97]"
              >
                Funktionen entdecken
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Kein Vertrag, keine Kreditkarte im Trial.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <OrderFlowDemo />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#FF6B35]/8 blur-3xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />

            {/* Annotation bubble: Echtzeit-Status (top-right) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.0 }}
              className="hidden sm:flex absolute -top-4 right-0 z-10 flex-col items-end pointer-events-none"
            >
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.09)] border border-slate-100 px-3.5 py-2">
                <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                </span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Echtzeit-Status</span>
              </div>
              <div className="w-px h-5 bg-gradient-to-b from-orange-300/60 to-transparent mr-8" />
            </motion.div>

            {/* Annotation bubble: Kein App-Download (bottom-left) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.15 }}
              className="hidden sm:flex absolute -bottom-4 left-0 z-10 flex-col items-start pointer-events-none"
            >
              <div className="w-px h-5 bg-gradient-to-t from-slate-200/60 to-transparent ml-8" />
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.09)] border border-slate-100 px-3.5 py-2">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Kein App-Download</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
