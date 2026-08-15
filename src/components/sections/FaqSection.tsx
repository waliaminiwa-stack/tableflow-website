"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const faqs = [
  {
    q: "Brauche ich ein Kassensystem?",
    a: "Nein. TableFlow ist unabhängig von deinem Kassensystem und funktioniert als eigenständige Lösung über den Browser. Du brauchst lediglich ein Smartphone oder Tablet pro Station.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Du kannst innerhalb weniger Minuten loslegen: Konto erstellen, Tische und Speisekarte anlegen, QR-Codes drucken - fertig. Eine technische Installation oder Einrichtung ist nicht nötig.",
  },
  {
    q: "Gibt es eine Testphase?",
    a: "Ja. Alle Pakete können 14 Tage lang kostenlos getestet werden. Kreditkarte wird erst nach Ablauf der Testphase benötigt. Du kannst jederzeit kündigen.",
  },
  {
    q: "Wie bestellen meine Gäste?",
    a: "Deine Gäste scannen den QR-Code am Tisch mit ihrem Smartphone. Die Speisekarte öffnet sich direkt im Browser - kein App-Download notwendig. Die Bestellung geht sofort an dein Kellner-Dashboard.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja. Es gibt keine Laufzeitverpflichtung. Du kannst dein Abo jederzeit im Kundenportal kündigen oder deinen Plan wechseln.",
  },
  {
    q: "Was ist der Unterschied zwischen Basic und Pro?",
    a: "Basic enthält die digitale Speisekarte, Bestellverwaltung und das Kellner- sowie Küchen-Dashboard für bis zu 15 Tische. Pro ergänzt das um den interaktiven Floor Plan, Reservierungsverwaltung und unbegrenzte Tische.",
  },
  {
    q: "Wie wird bezahlt?",
    a: "Die Abrechnung erfolgt monatlich über Stripe - du kannst mit Kreditkarte, SEPA-Lastschrift oder anderen gängigen Zahlungsmitteln zahlen.",
  },
  {
    q: "Kann ich mehrere Standorte betreiben?",
    a: "Derzeit ist jedes TableFlow-Konto für einen Standort ausgelegt. Für mehrere Standorte kannst du separate Konten anlegen. Kontaktiere uns für Sonderkonditionen.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Haufige Fragen
          </h2>
          <p className="text-lg text-slate-500">
            Hast du weitere Fragen?{" "}
            <a href="/kontakt" className="text-[#FF6B35] hover:underline font-medium">
              Schreib uns
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-[#FF6B35] transition-colors duration-150">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={reduce ? {} : { rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                      open === i
                        ? "border-[#FF6B35] text-[#FF6B35] bg-orange-50"
                        : "border-slate-200 text-slate-400"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
