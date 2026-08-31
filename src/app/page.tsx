import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductTabsSection from "@/components/sections/ProductTabsSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title:
    "TableFlow – QR-Bestellsystem ohne Kassensystem | Digitale Speisekarte mit Kellner-Dashboard",
  description:
    "Digitale Speisekarte & QR-Bestellsystem für Restaurants – ohne Kassensystem, ohne App-Download. Kellner-Dashboard, Küchen-Ansicht, Reservierungen & Floor Plan. DSGVO-konform, ab 9,95 €/Monat, 14 Tage kostenlos testen.",
  alternates: {
    canonical: "https://www.table-flow.de",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TableFlow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.table-flow.de",
  description:
    "QR-Bestellsystem ohne Kassensystem für Restaurants. Digitale Speisekarte, Kellner-Dashboard, Küchen-Ansicht, Floor Plan und Reservierungen – kein App-Download, DSGVO-konform.",
  offers: [
    {
      "@type": "Offer",
      name: "Basic",
      price: "9.95",
      priceCurrency: "EUR",
      description: "Digitale Speisekarte, Kellner- & Küchen-Dashboard, bis zu 15 Tische.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "19.95",
      priceCurrency: "EUR",
      description:
        "Alles aus Basic plus Floor Plan, Reservierungsverwaltung, Bewertungslink, bis zu 25 Tische.",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "49.95",
      priceCurrency: "EUR",
      description:
        "Alles aus Pro plus eigenes Logo, Akzentfarbe, Mittagstisch-Wochenplan, unbegrenzte Tische.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Brauche ich ein Kassensystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. TableFlow ist unabhängig von deinem Kassensystem und funktioniert als eigenständige Lösung über den Browser. Du brauchst lediglich ein Smartphone oder Tablet pro Station.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell kann ich starten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kannst innerhalb weniger Minuten loslegen: Konto erstellen, Tische und Speisekarte anlegen, QR-Codes drucken – fertig. Eine technische Installation oder Einrichtung ist nicht nötig.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine Testphase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle Pakete können 14 Tage lang kostenlos getestet werden. Kreditkarte wird erst nach Ablauf der Testphase benötigt. Du kannst jederzeit kündigen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie bestellen meine Gäste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Gäste scannen den QR-Code am Tisch mit ihrem Smartphone. Die Speisekarte öffnet sich direkt im Browser – kein App-Download notwendig. Die Bestellung geht sofort an dein Kellner-Dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich jederzeit kündigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Es gibt keine Laufzeitverpflichtung. Du kannst dein Abo jederzeit im Kundenportal kündigen oder deinen Plan wechseln.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen den Paketen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic enthält die digitale Speisekarte, Bestellverwaltung und das Kellner- sowie Küchen-Dashboard für bis zu 15 Tische. Pro erweitert dies um interaktiven Floor Plan, Reservierungsverwaltung und Bewertungslink – für bis zu 25 Tische. Business baut auf Pro auf und fügt eigenes Logo, Akzentfarbe sowie den Mittagstisch-Wochenplan für unbegrenzte Tische hinzu.",
      },
    },
    {
      "@type": "Question",
      name: "Wie wird bezahlt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Abrechnung erfolgt monatlich über Stripe – du kannst mit Kreditkarte, SEPA-Lastschrift oder anderen gängigen Zahlungsmitteln zahlen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mehrere Standorte betreiben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derzeit ist jedes TableFlow-Konto für einen Standort ausgelegt. Für mehrere Standorte kannst du separate Konten anlegen. Kontaktiere uns für Sonderkonditionen.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductTabsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
