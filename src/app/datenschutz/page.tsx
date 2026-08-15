import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von TableFlow.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
        Datenschutzerklärung
      </h1>
      <p className="text-slate-500 mb-8">Stand: August 2026</p>

      <div className="prose prose-slate max-w-none">
        <h2>1. Verantwortlicher</h2>
        <p>
          Wali Amini (DesignSub)<br />
          Spitzbergenweg 24a<br />
          22145 Hamburg<br />
          E-Mail: <a href="mailto:info@design-sub.de">info@design-sub.de</a><br />
          Telefon: +49 162 412 1870
        </p>
        <p>
          Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) für die Nutzung von
          TableFlow ist DesignSub. TableFlow wird an Restaurants (&bdquo;Kunden&ldquo;) lizenziert;
          jedes Restaurant ist innerhalb seines eigenen Kontos selbst datenschutzrechtlich
          verantwortlich für die Daten seiner Gäste und Mitarbeiter (Auftragsverarbeitung, siehe
          Punkt 6).
        </p>

        <h2>2. Welche Daten wir verarbeiten</h2>
        <p>
          <strong>a) Restaurant-Konten (Kunden/Mitarbeiter)</strong><br />
          Bei der Registrierung: Name, E-Mail-Adresse, Passwort (verschlüsselt gespeichert),
          Restaurantname, Rolle (Inhaber/Küche/Service). Diese Daten werden benötigt, um dir und
          deinem Team Zugriff auf euer TableFlow-Konto zu geben.
        </p>
        <p>
          <strong>b) Gästedaten (QR-Bestellsystem)</strong><br />
          Wenn ein Gast über den Tisch-QR-Code bestellt, den Kellner ruft oder die Rechnung
          anfordert, werden folgende Daten verarbeitet: Bestellinhalte, Tischzuordnung,
          Sitzungs-ID (technisch, zur Zuordnung der Bestellung, kein Login erforderlich). Bei
          Reservierungen zusätzlich: Name und Telefonnummer, sofern vom Restaurant-Personal
          eingetragen.
        </p>
        <p>
          <strong>c) Server-/Nutzungsdaten</strong><br />
          Beim Aufruf der Anwendung werden automatisch technische Daten verarbeitet (IP-Adresse,
          Zeitpunkt des Zugriffs, verwendeter Browser), wie es bei jeder Website/Webanwendung
          technisch notwendig ist, insbesondere zur Absicherung des Betriebs.
        </p>

        <h2>3. Zwecke und Rechtsgrundlagen</h2>
        <p>
          Die Verarbeitung erfolgt zur Erfüllung des Vertrags zwischen dir/deinem Restaurant und
          DesignSub (Art. 6 Abs. 1 lit. b DSGVO) sowie zur Erfüllung des Bestellvorgangs zwischen
          Restaurant und Gast, den das Restaurant über TableFlow abwickelt. Technisch notwendige
          Verarbeitungen (z.&thinsp;B. Absicherung des Betriebs) stützen sich auf berechtigtes
          Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>4. Speicherdauer</h2>
        <p>
          Kontodaten werden gespeichert, solange das Restaurant TableFlow aktiv nutzt, und nach
          Kündigung im Rahmen gesetzlicher Aufbewahrungspflichten bzw. bis zur Löschung auf Anfrage
          gelöscht. Bestelldaten einer abgeschlossenen Sitzung werden aktuell unbegrenzt
          vorgehalten, damit Restaurants ihre eigene Umsatz-/Bestellhistorie einsehen können; eine
          konkrete Löschfrist wird perspektivisch definiert (z.&thinsp;B. Löschung/Anonymisierung
          nach handelsrechtlichen Aufbewahrungsfristen).
        </p>

        <h2>5. Hosting &amp; technische Infrastruktur</h2>
        <p>TableFlow wird gehostet über:</p>
        <ul>
          <li>
            <strong>Supabase</strong> (Datenbank, Authentifizierung, Echtzeit-Funktionen) &mdash;
            Serverstandort: Frankfurt am Main, Deutschland (Region eu-central-1). Die Verarbeitung
            erfolgt somit innerhalb der EU, eine Drittlandübermittlung findet insoweit nicht statt.
          </li>
          <li>
            <strong>Vercel</strong> (Anwendungs-Hosting)
          </li>
        </ul>
        <p>
          Mit beiden Anbietern ist ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO
          abgeschlossen.
        </p>

        <h2>6. Auftragsverarbeitung für Restaurant-Kunden</h2>
        <p>
          Da TableFlow im Auftrag des jeweiligen Restaurants personenbezogene Gästedaten verarbeitet
          (Bestellungen, Reservierungen), ist zwischen DesignSub und jedem Restaurant-Kunden ein
          Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO erforderlich. Dieser wird im Rahmen
          des Onboardings bereitgestellt und abgeschlossen.
        </p>

        <h2>7. Cookies</h2>
        <p>
          TableFlow verwendet aktuell nur technisch notwendige Cookies/lokale Speicherung
          (z.&thinsp;B. Session-Verwaltung für die Anmeldung, Zoom-/Ansichtseinstellungen im Floor
          Plan). Es werden keine Analyse- oder Marketing-Cookies eingesetzt.
        </p>

        <h2>8. Rechte der betroffenen Personen</h2>
        <p>
          Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
          (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und
          Widerspruch (Art. 21) bezüglich deiner personenbezogenen Daten. Wende dich dazu an:{" "}
          <a href="mailto:info@design-sub.de">info@design-sub.de</a>. Du hast außerdem das Recht,
          dich bei einer Datenschutzaufsichtsbehörde zu beschweren (in Hamburg: Der Hamburgische
          Beauftragte für Datenschutz und Informationsfreiheit).
        </p>

        <h2>9. Datensicherheit</h2>
        <p>
          Die Übertragung erfolgt verschlüsselt (TLS/HTTPS). Passwörter werden nicht im Klartext
          gespeichert, sondern über den Authentifizierungsdienst (Supabase Auth) gehasht. Der
          Zugriff auf Restaurant-Daten ist technisch durch Datenbankregeln (Row-Level-Security) so
          beschränkt, dass jedes Restaurant ausschließlich seine eigenen Daten einsehen kann.
        </p>
      </div>
    </div>
  );
}
