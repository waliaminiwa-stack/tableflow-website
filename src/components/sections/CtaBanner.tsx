import ScrollReveal from "@/components/animations/ScrollReveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.tableflow.de";

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Bereit, dein Restaurant zu digitalisieren?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Starte noch heute mit 14 Tagen kostenlosem Test - ganz ohne
            Kreditkarte.
          </p>
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#FF6B35] hover:brightness-95 transition-all duration-150 shadow-[0_8px_24px_-8px_rgba(255,107,53,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(255,107,53,0.7)] active:scale-[0.97]"
          >
            Kostenlos testen
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Kein Vertrag. Kein Risiko. Jederzeit kündbar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
