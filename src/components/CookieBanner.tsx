"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useConsent } from "@/context/ConsentContext";

export default function CookieBanner() {
  const {
    consent,
    bannerVisible,
    settingsOpen,
    acceptAll,
    rejectAll,
    saveCustom,
    openSettings,
    closeSettings,
  } = useConsent();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [statistik, setStatistik] = useState(false);
  const prefersReduced = useReducedMotion();

  // Keep a ref so the Escape handler doesn't read stale consent
  const consentRef = useRef(consent);
  useEffect(() => {
    consentRef.current = consent;
  }, [consent]);

  // Sync native <dialog> open/closed state with context
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (settingsOpen) {
      setStatistik(consentRef.current?.categories.statistik ?? false);
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [settingsOpen]);

  const btnBase =
    "px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer";
  const btnOutline = `${btnBase} border-slate-200 text-slate-700 bg-white hover:border-[#FF6B35] hover:text-[#FF6B35]`;
  const btnPrimary = `${btnBase} border-[#FF6B35] bg-[#FF6B35] text-white hover:bg-[#e85a24] hover:border-[#e85a24]`;

  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            role="region"
            aria-label="Cookie-Einstellungen"
            aria-live="polite"
            initial={prefersReduced ? false : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={prefersReduced ? {} : { y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_40px_-4px_rgba(0,0,0,0.1)]"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    Cookie-Einstellungen
                  </p>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Wir verwenden technisch notwendige Cookies für den Betrieb dieser
                    Website. Mit deiner Zustimmung aktivieren wir außerdem
                    Statistik-Dienste. Mehr in der{" "}
                    <Link
                      href="/datenschutz"
                      className="underline underline-offset-2 hover:text-[#FF6B35] transition-colors"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    und im{" "}
                    <Link
                      href="/impressum"
                      className="underline underline-offset-2 hover:text-[#FF6B35] transition-colors"
                    >
                      Impressum
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-col xs:flex-row sm:flex-row gap-2 shrink-0">
                  <button onClick={openSettings} className={btnOutline}>
                    Einstellungen
                  </button>
                  <button onClick={rejectAll} className={btnOutline}>
                    Nur notwendige
                  </button>
                  <button onClick={acceptAll} className={btnPrimary}>
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Settings dialog (always in DOM; browser controls open attr) ── */}
      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-dialog-title"
        onCancel={(e) => {
          e.preventDefault(); // prevent browser auto-close; we close via state
          closeSettings();
        }}
        className="w-[calc(100%-2rem)] max-w-lg rounded-2xl p-0 border-0 outline-none shadow-2xl m-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100">
          <h2
            id="cookie-dialog-title"
            className="text-base font-bold text-slate-900"
          >
            Cookie-Einstellungen
          </h2>
          <button
            onClick={closeSettings}
            aria-label="Dialog schließen"
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div className="px-6 py-5 space-y-5 overflow-y-auto max-h-[55vh]">
          {/* Notwendig */}
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900">Notwendig</p>
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                Für den Betrieb der Website zwingend erforderlich. Enthält: die
                Speicherung deiner Cookie-Einwilligung im Browser
                (localStorage,{" "}
                <span className="whitespace-nowrap">12 Monate</span>). Es werden
                keine Daten an Dritte übertragen.
              </p>
            </div>
            <span
              aria-label="Immer aktiv"
              className="shrink-0 mt-0.5 inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full"
            >
              Immer aktiv
            </span>
          </div>

          <hr className="border-slate-100" />

          {/* Statistik */}
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900">Statistik</p>
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                Hilft uns zu verstehen, wie Besucher die Website nutzen, damit
                wir sie verbessern können. Aktuell sind keine Statistik-Dienste
                aktiv – die Infrastruktur ist für zukünftige Tools vorbereitet
                (z.&thinsp;B. Plausible Analytics). Keine Weitergabe an
                Werbenetzwerke.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Speicherdauer: bis zu 12 Monate
              </p>
            </div>
            <button
              role="switch"
              aria-checked={statistik}
              onClick={() => setStatistik((v) => !v)}
              className={[
                "shrink-0 mt-0.5 relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2 cursor-pointer",
                statistik ? "bg-[#FF6B35]" : "bg-slate-200",
              ].join(" ")}
            >
              <span className="sr-only">
                {statistik
                  ? "Statistik deaktivieren"
                  : "Statistik aktivieren"}
              </span>
              <span
                className={[
                  "pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
                  statistik ? "translate-x-6" : "translate-x-1",
                ].join(" ")}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row gap-2 px-6 pb-6 pt-4 border-t border-slate-100">
          <button
            onClick={() => saveCustom(statistik)}
            className={`flex-1 ${btnOutline}`}
          >
            Auswahl speichern
          </button>
          <button onClick={acceptAll} className={`flex-1 ${btnPrimary}`}>
            Alle akzeptieren
          </button>
        </div>
      </dialog>
    </>
  );
}
