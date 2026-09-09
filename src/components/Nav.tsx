"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence, useReducedMotion } from "motion/react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.table-flow.de";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 24));
  }, [scrollY]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm shadow-slate-100/60"
          : "bg-white/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-full.svg"
            alt="TableFlow"
            width={160}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/#features", label: "Funktionen" },
            { href: "/#pricing", label: "Preise" },
            { href: "/#faq", label: "FAQ" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-150"
          >
            Anmelden
          </a>
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-[#FF6B35] hover:brightness-95 transition-all duration-150 shadow-[0_4px_14px_-4px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_20px_-4px_rgba(255,107,53,0.5)] active:scale-[0.97]"
          >
            Kostenlos starten
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1"
          >
            {[
              { href: "/#features", label: "Funktionen" },
              { href: "/#pricing", label: "Preise" },
              { href: "/#faq", label: "FAQ" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`${APP_URL}/login`}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 text-center border border-slate-200 hover:bg-slate-50 transition-colors duration-150"
              >
                Anmelden
              </a>
              <a
                href={`${APP_URL}/register`}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white text-center bg-[#FF6B35] hover:brightness-95 transition-[filter,transform] duration-150 active:scale-[0.98]"
              >
                Kostenlos starten
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
