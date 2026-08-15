import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nimm Kontakt mit dem TableFlow-Team auf - wir helfen dir gerne weiter.",
};

export default function KontaktPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Schreib uns
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Hast du Fragen zu TableFlow, benotigst du Hilfe beim Einstieg oder
            mochtest du mehr erfahren? Wir melden uns schnellstmoglich bei dir.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5" stroke="#FF6B35" strokeWidth="1.25" strokeLinecap="round" />
                  <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="#FF6B35" strokeWidth="1.25" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">E-Mail</p>
                <a
                  href="mailto:info@design-sub.de"
                  className="text-sm text-slate-500 hover:text-[#FF6B35] transition-colors"
                >
                  info@design-sub.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="7" r="4" stroke="#FF6B35" strokeWidth="1.25" />
                  <path d="M8 11v4" stroke="#FF6B35" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Antwortzeit</p>
                <p className="text-sm text-slate-500">In der Regel innerhalb von 24 Stunden</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
