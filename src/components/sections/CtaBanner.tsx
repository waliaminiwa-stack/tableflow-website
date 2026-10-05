import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.table-flow.de";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background photo */}
      <Image
        src="/media/cta-abschluss.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      {/* Dark gradient overlay — ensures WCAG AA contrast for text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/88 to-slate-900/95"
      />

      {/* Ambient blobs for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FF6B35]/15 blur-3xl animate-blob-drift"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl animate-blob-drift-slow"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Bereit, dein Restaurant zu digitalisieren?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Starte noch heute mit 14 Tagen kostenlosem Test - ganz ohne
            Kreditkarte.
          </p>
          <a
            href={`${APP_URL}/register`}
            className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#FF6B35] hover:brightness-95 transition-all duration-150 shadow-[0_8px_24px_-8px_rgba(255,107,53,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(255,107,53,0.7)] active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:[animation:shimmer_0.55s_linear_forwards]"
            />
            Kostenlos testen
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Kein Vertrag. Kein Risiko. Jederzeit kündbar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
