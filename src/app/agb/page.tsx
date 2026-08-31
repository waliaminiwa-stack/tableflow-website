import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB von TableFlow – SaaS-Vertragsbedingungen.",
  robots: { index: false },
  alternates: {
    canonical: "https://www.table-flow.de/agb",
  },
};

export default function AgbPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
        Allgemeine Geschäftsbedingungen (AGB) für TableFlow
      </h1>
      <p className="text-slate-500 mb-8">Stand: 04.08.2026</p>

      <div className="prose prose-slate max-w-none">
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (&bdquo;AGB&ldquo;) gelten für alle Verträge
          zwischen der DesignSub, Wali Amini, Spitzbergenweg 24a, 22145 Hamburg (nachfolgend
          &bdquo;Anbieter&ldquo;) und Unternehmern (§ 14 BGB) über die Nutzung der
          Software-as-a-Service-Lösung &bdquo;TableFlow&ldquo; (nachfolgend &bdquo;Software&ldquo;
          oder &bdquo;Dienst&ldquo;).
        </p>
        <p>
          (2) TableFlow richtet sich ausschließlich an Gewerbetreibende (insbesondere Restaurants,
          Cafés, Bistros) und wird nicht an Verbraucher im Sinne des § 13 BGB angeboten.
        </p>
        <p>
          (3) Abweichende, entgegenstehende oder ergänzende Bedingungen des Kunden werden nicht
          Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich
          schriftlich zu.
        </p>

        <h2>§ 2 Vertragsgegenstand und Leistungsbeschreibung</h2>
        <p>
          (1) Der Anbieter stellt dem Kunden die Software TableFlow als cloudbasierten Dienst (SaaS)
          zur Verwaltung von Restaurantabläufen zur Verfügung, insbesondere: digitale Speisekarte
          mit QR-Code-Bestellung, Kellner- und Küchen-Dashboard, Tischverwaltung, je nach
          gebuchtem Paket zusätzlich Floor Plan und Reservierungsverwaltung, sowie
          Auswertungen/Berichte.
        </p>
        <p>
          (2) Der konkrete Funktionsumfang richtet sich nach dem vom Kunden gewählten Preispaket
          (aktuell &bdquo;Basic&ldquo;, &bdquo;Pro&ldquo; und &bdquo;Business&ldquo;), wie zum
          Zeitpunkt der Buchung auf der Website/in der Anwendung dargestellt.
        </p>
        <p>
          (3) Der Anbieter ist berechtigt, die Software im Rahmen der Weiterentwicklung anzupassen,
          zu erweitern oder einzelne Funktionen zu ändern, sofern dadurch der vertraglich
          geschuldete Kernfunktionsumfang nicht wesentlich eingeschränkt wird und dem Kunden dies
          zumutbar ist.
        </p>

        <h2>§ 3 Registrierung und Zustandekommen des Vertrags</h2>
        <p>
          (1) Der Kunde registriert sich über die Website/Anwendung selbst und legt ein Nutzerkonto
          für sein Restaurant an (&bdquo;Restaurant-Account&ldquo;). Der Vertrag kommt mit
          erfolgreichem Abschluss der Registrierung und Bestätigung durch den Anbieter zustande.
        </p>
        <p>
          (2) Der Kunde ist verpflichtet, bei der Registrierung wahrheitsgemäße und vollständige
          Angaben zu machen und diese im Falle von Änderungen aktuell zu halten.
        </p>
        <p>
          (3) Der Kunde ist für die Vertraulichkeit seiner Zugangsdaten sowie für alle Aktivitäten,
          die unter seinem Account erfolgen, verantwortlich. Bei Verdacht auf unbefugten Zugriff
          ist der Anbieter unverzüglich zu informieren.
        </p>

        <h2>§ 4 Testphase (Trial)</h2>
        <p>
          (1) Neuen Kunden wird eine kostenlose Testphase von 14 Tagen ab Registrierung eingeräumt.
        </p>
        <p>
          (2) Der Kunde hinterlegt bereits bei Registrierung eine Zahlungsmethode (Kreditkarte).
          Eine Berechnung erfolgt jedoch erst nach Ablauf der Testphase.
        </p>
        <p>
          (3) Kündigt der Kunde nicht innerhalb der Testphase, geht das Abonnement automatisch in
          ein kostenpflichtiges Abonnement zum gewählten Paket über.
        </p>
        <p>
          (4) Eine Kündigung während der Testphase ist jederzeit ohne Angabe von Gründen und ohne
          Kosten möglich, spätestens jedoch bis zum letzten Tag der Testphase, über das
          Kunden-Einstellungsmenü bzw. das Stripe-Kundenportal.
        </p>

        <h2>§ 5 Preise und Zahlungsbedingungen</h2>
        <p>
          (1) Es gelten die zum Zeitpunkt des Vertragsschlusses auf der Website/in der Anwendung
          ausgewiesenen Preise, jeweils zzgl. der gesetzlichen Umsatzsteuer, soweit anwendbar.
        </p>
        <p>
          (2) Die Abrechnung erfolgt monatlich im Voraus per Kreditkarte über den
          Zahlungsdienstleister Stripe.
        </p>
        <p>
          (3) Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zur Software nach
          vorheriger Ankündigung (mind. 7 Tage) bis zum Ausgleich des offenen Betrags zu sperren.
        </p>
        <p>
          (4) Der Anbieter behält sich vor, die Preise mit angemessener Ankündigungsfrist
          (mind. 30 Tage) zum nächsten Abrechnungszeitraum anzupassen. Bei Preiserhöhungen steht
          dem Kunden ein Sonderkündigungsrecht zum Zeitpunkt des Inkrafttretens zu.
        </p>

        <h2>§ 6 Laufzeit und Kündigung</h2>
        <p>
          (1) Das Abonnement läuft auf unbestimmte Zeit und verlängert sich automatisch um jeweils
          einen Monat, sofern es nicht gekündigt wird.
        </p>
        <p>
          (2) Der Kunde kann das Abonnement jederzeit zum Ende des laufenden Abrechnungszeitraums
          über das Stripe-Kundenportal bzw. die Kontoeinstellungen kündigen.
        </p>
        <p>
          (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Seiten
          unberührt.
        </p>
        <p>
          (4) Nach Vertragsende werden die Daten des Kunden für einen Übergangszeitraum von 30 Tagen
          zum Export vorgehalten und anschließend gelöscht, soweit keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>§ 7 Pflichten des Kunden</h2>
        <p>
          (1) Der Kunde verpflichtet sich, die Software nur im Rahmen der geltenden Gesetze zu
          nutzen und keine rechtswidrigen, beleidigenden oder Rechte Dritter verletzenden Inhalte
          (z.&thinsp;B. Speisekarten-Texte, Bilder) einzustellen.
        </p>
        <p>
          (2) Der Kunde ist allein verantwortlich für die Richtigkeit der von ihm eingegebenen
          Inhalte (Speisekarten, Preise, Öffnungszeiten, Gästedaten bei Reservierungen etc.).
        </p>
        <p>
          (3) Der Kunde stellt sicher, dass sein Personal, dem er Zugriff auf
          Kellner-/Küchenstationen gewährt, die Software bestimmungsgemäß nutzt und PIN-Zugänge
          nicht an Unbefugte weitergibt.
        </p>

        <h2>§ 8 Verfügbarkeit und Support</h2>
        <p>
          (1) Der Anbieter bemüht sich um eine Verfügbarkeit der Software von im Jahresmittel 99 %,
          ausgenommen Zeiten planmäßiger Wartung sowie Ausfälle, die außerhalb des Einflussbereichs
          des Anbieters liegen (z.&thinsp;B. Ausfälle bei Hosting-/Infrastrukturdienstleistern).
        </p>
        <p>
          (2) Support erfolgt per E-Mail an{" "}
          <a href="mailto:info@table-flow.de">info@table-flow.de</a> zu den üblichen
          Geschäftszeiten. Eine bestimmte Reaktionszeit wird nicht zugesichert, sofern nicht
          gesondert vereinbart.
        </p>

        <h2>§ 9 Haftung</h2>
        <p>
          (1) Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach den
          Vorschriften des Produkthaftungsgesetzes und bei Verletzung von Leben, Körper oder
          Gesundheit.
        </p>
        <p>
          (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten)
          haftet der Anbieter nur auf den vertragstypischen, vorhersehbaren Schaden.
        </p>
        <p>(3) Im Übrigen ist die Haftung für leicht fahrlässige Pflichtverletzungen ausgeschlossen.</p>
        <p>
          (4) Für Datenverlust haftet der Anbieter nur, soweit dieser auch bei ordnungsgemäßer
          Datensicherung durch den Kunden nicht hätte vermieden werden können.
        </p>

        <h2>§ 10 Datenschutz</h2>
        <p>
          Der Anbieter verarbeitet personenbezogene Daten des Kunden und seiner Gäste gemäß der
          Datenschutzerklärung sowie – soweit erforderlich – im Rahmen eines gesondert
          abzuschließenden Auftragsverarbeitungsvertrags (AVV) nach Art. 28 DSGVO.
        </p>

        <h2>§ 11 Vertragsänderungen</h2>
        <p>
          Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern, sofern
          dies zur Anpassung an geänderte Rechtslage, Rechtsprechung oder aus technischen Gründen
          erforderlich ist. Der Kunde wird über Änderungen mindestens 30 Tage vor Inkrafttreten
          informiert; widerspricht er nicht innerhalb von 14 Tagen, gelten die geänderten AGB als
          angenommen. Der Anbieter weist in der Änderungsmitteilung gesondert auf dieses
          Widerspruchsrecht und die Folgen des Schweigens hin.
        </p>

        <h2>§ 12 Schlussbestimmungen</h2>
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
        </p>
        <p>
          (2) Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist,
          soweit gesetzlich zulässig, Hamburg.
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </div>
    </div>
  );
}
