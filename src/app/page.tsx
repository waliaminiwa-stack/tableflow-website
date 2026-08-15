import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductTabsSection from "@/components/sections/ProductTabsSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "TableFlow - Digitale Speisekarte & Restaurant-Management",
  description:
    "TableFlow digitalisiert dein Restaurant: QR-Speisekarte, Bestellverwaltung, Kellner- und Küchen-Dashboard, Floor Plan und Reservierungen - ab 9,95 Euro im Monat.",
};

export default function Home() {
  return (
    <>
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
