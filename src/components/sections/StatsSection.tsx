import CountUp from "@/components/animations/CountUp";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const stats = [
  {
    value: 14,
    suffix: " Tage",
    label: "Kostenloser Trial",
    sub: "Ohne Kreditkarte",
  },
  {
    value: 15,
    prefix: "< ",
    suffix: " min",
    label: "Bis zur ersten Bestellung",
    sub: "Einrichtung in Minuten",
  },
  {
    value: 100,
    suffix: " %",
    label: "Browser-basiert",
    sub: "Kein App-Download, keine Hardware",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-3 gap-6 sm:gap-12">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 tabular-nums">
                  <CountUp
                    target={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </p>
                <p className="text-sm font-semibold text-slate-600 mt-1.5">{s.label}</p>
                <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">{s.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
