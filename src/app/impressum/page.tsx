import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von TableFlow.",
  robots: { index: false },
  alternates: {
    canonical: "https://www.table-flow.de/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Impressum</h1>
      <p className="text-slate-500 mb-8">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

      <div className="prose prose-slate max-w-none">
        <p>
          <strong>DesignSub</strong><br />
          Spitzbergenweg 24a<br />
          22145 Hamburg<br />
          Deutschland
        </p>

        <p>Vertreten durch: Wali Amini</p>

        <p>
          <strong>Produkt:</strong> TableFlow ist ein Produkt von DesignSub.
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 162 412 1870<br />
          E-Mail: <a href="mailto:info@table-flow.de">info@table-flow.de</a>
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          DE457723779
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Wali Amini<br />
          Spitzbergenweg 24a<br />
          22145 Hamburg
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Meine E-Mail-Adresse findest du oben. Ich bin nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </div>
    </div>
  );
}
