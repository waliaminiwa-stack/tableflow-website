import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "TableFlow – QR-Bestellsystem ohne Kassensystem für Restaurants",
    template: "%s | TableFlow",
  },
  description:
    "TableFlow: QR-Bestellsystem ohne Kassensystem. Digitale Speisekarte, Kellner-Dashboard, Küchen-Ansicht, Floor Plan & Reservierungen – kein App-Download, DSGVO-konform, ab 9,95 €/Monat.",
  metadataBase: new URL("https://www.table-flow.de"),
  alternates: {
    canonical: "https://www.table-flow.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TableFlow",
    title: "TableFlow – QR-Bestellsystem ohne Kassensystem für Restaurants",
    description:
      "Digitale Speisekarte mit QR-Code, Kellner-Dashboard & Reservierungen. Kein App-Download, kein Kassensystem nötig.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TableFlow – Digitales Bestellsystem für Restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TableFlow – QR-Bestellsystem ohne Kassensystem für Restaurants",
    description:
      "Digitale Speisekarte mit QR-Code, Kellner-Dashboard & Reservierungen. Kein App-Download, kein Kassensystem nötig.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TableFlow",
  url: "https://www.table-flow.de",
  logo: "https://www.table-flow.de/logo-full.svg",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@table-flow.de",
    contactType: "customer support",
    availableLanguage: "German",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
