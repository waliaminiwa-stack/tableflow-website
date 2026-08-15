import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TableFlow - Digitale Speisekarte & Restaurant-Management",
    template: "%s | TableFlow",
  },
  description:
    "TableFlow digitalisiert dein Restaurant: QR-Speisekarte, Bestellverwaltung, Kellner- und Küchen-Dashboard, Floor Plan und Reservierungen - alles in einer Lösung.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TableFlow",
    title: "TableFlow - Digitale Speisekarte & Restaurant-Management",
    description:
      "QR-Bestellung, Kellner-Dashboard, Küchen-Ansicht, Floor Plan und Reservierungen für moderne Restaurants.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TableFlow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TableFlow - Digitale Speisekarte & Restaurant-Management",
    description:
      "QR-Bestellung, Kellner-Dashboard, Küchen-Ansicht, Floor Plan und Reservierungen für moderne Restaurants.",
  },
  metadataBase: new URL("https://www.tableflow.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
