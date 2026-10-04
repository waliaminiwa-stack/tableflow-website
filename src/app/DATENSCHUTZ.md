# Datenschutzerklärung

Stand: August 2026

## 1. Verantwortlicher

Wali Amini (DesignSub)
Spitzbergenweg 24a
22145 Hamburg
E-Mail: info@table-flow.de
Telefon: +49 162 412 1870

Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) für die Nutzung von TableFlow ist DesignSub. TableFlow wird an Restaurants ("Kunden") lizenziert; jedes Restaurant ist innerhalb seines eigenen Kontos selbst datenschutzrechtlich verantwortlich für die Daten seiner Gäste und Mitarbeiter (Auftragsverarbeitung, siehe Punkt 6).

## 2. Welche Daten wir verarbeiten

**a) Restaurant-Konten (Kunden/Mitarbeiter)**
Bei der Registrierung: Name, E-Mail-Adresse, Passwort (verschlüsselt gespeichert), Restaurantname, Rolle (Inhaber/Küche/Service). Diese Daten werden benötigt, um dir und deinem Team Zugriff auf euer TableFlow-Konto zu geben.

**b) Gästedaten (QR-Bestellsystem)**
Wenn ein Gast über den Tisch-QR-Code bestellt, den Kellner ruft oder die Rechnung anfordert, werden folgende Daten verarbeitet: Bestellinhalte, Tischzuordnung, Sitzungs-ID (technisch, zur Zuordnung der Bestellung, kein Login erforderlich). Bei Reservierungen zusätzlich: Name und Telefonnummer, sofern vom Restaurant-Personal eingetragen.

**c) Server-/Nutzungsdaten**
Beim Aufruf der Anwendung werden automatisch technische Daten verarbeitet (IP-Adresse, Zeitpunkt des Zugriffs, verwendeter Browser), wie es bei jeder Website/Webanwendung technisch notwendig ist, insbesondere zur Absicherung des Betriebs.

## 3. Zwecke und Rechtsgrundlagen

Die Verarbeitung erfolgt zur Erfüllung des Vertrags zwischen dir/deinem Restaurant und DesignSub (Art. 6 Abs. 1 lit. b DSGVO) sowie zur Erfüllung des Bestellvorgangs zwischen Restaurant und Gast, den das Restaurant über TableFlow abwickelt. Technisch notwendige Verarbeitungen (z. B. Absicherung des Betriebs) stützen sich auf berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).

## 4. Speicherdauer

Kontodaten werden gespeichert, solange das Restaurant TableFlow aktiv nutzt, und nach Kündigung im Rahmen gesetzlicher Aufbewahrungspflichten bzw. bis zur Löschung auf Anfrage gelöscht. Bestelldaten einer abgeschlossenen Sitzung werden aktuell unbegrenzt vorgehalten, damit Restaurants ihre eigene Umsatz-/Bestellhistorie einsehen können; [OFFEN: hier sollte perspektivisch eine konkrete Löschfrist definiert werden, z. B. Löschung/Anonymisierung nach handelsrechtlichen Aufbewahrungsfristen].

## 5. Hosting & technische Infrastruktur

TableFlow wird gehostet über:
- **Supabase** (Datenbank, Authentifizierung, Echtzeit-Funktionen) — Serverstandort: Frankfurt am Main, Deutschland (Region eu-central-1). Die Verarbeitung erfolgt somit innerhalb der EU, eine Drittlandübermittlung findet insoweit nicht statt.
- **Vercel** (Anwendungs-Hosting) — [OFFEN: Serverstandort/Region ergänzen]

Mit beiden Anbietern muss ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen werden, sofern nicht bereits durch Nutzung der Plattform automatisch inkludiert (beide bieten dies in der Regel über ihre Dashboards/AGB an — bitte vor Live-Gang prüfen und abschließen).

## 6. Auftragsverarbeitung für Restaurant-Kunden

Da TableFlow im Auftrag des jeweiligen Restaurants personenbezogene Gästedaten verarbeitet (Bestellungen, Reservierungen), ist zwischen DesignSub und jedem Restaurant-Kunden ein Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO erforderlich. [OFFEN: Dieser AVV existiert aktuell noch nicht als Dokument und sollte vor dem ersten zahlenden/produktiven Kunden erstellt und beim Onboarding mit unterzeichnet werden.]

## 7. Cookies und Einwilligungsverwaltung

### Technisch notwendig (keine Einwilligung erforderlich)

Folgende lokale Speichereinträge sind technisch notwendig und erfordern keine Einwilligung (§ 25 Abs. 2 TDDDG):

| Name | Zweck | Anbieter | Speicherdauer |
|------|-------|----------|---------------|
| `tableflow_cookie_consent` | Speichert die Cookie-Einwilligung (Kategorien, Zeitstempel, Version) im Browser-localStorage. Kein Datentransfer zu externen Servern. | table-flow.de (nur lokal) | 12 Monate |

Die Web-App selbst (app.table-flow.de) nutzt ebenfalls nur technisch notwendige Speicherung (Session-Verwaltung, Zoom-/Ansichtseinstellungen im Floor Plan).

### Statistik (nur mit Einwilligung, Art. 6 Abs. 1 lit. a DSGVO)

Aktuell sind **keine** Statistik-Dienste aktiv. Sollten in Zukunft Analyse-Tools eingebunden werden (z. B. Plausible Analytics), geschieht dies ausschließlich nach vorheriger Einwilligung. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden über den Link **„Cookie-Einstellungen"** im Footer (Art. 7 Abs. 3 DSGVO). Auf dieser Website werden **keine** Analyse- oder Marketing-Cookies Dritter eingesetzt; insbesondere kein Google Analytics, keine Meta-Pixel und keine Werbetracker.

### Schriftarten

Die auf dieser Website verwendete Schriftart (Outfit von Google Fonts) wird über den Next.js-Schriftarten-Optimierer bei Build-Zeit heruntergeladen und **selbst gehostet**. Es findet kein Laufzeit-Datenaustausch mit Google-Servern statt.

## 8. Rechte der betroffenen Personen

Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) bezüglich deiner personenbezogenen Daten. Wende dich dazu an: info@table-flow.de. Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren (in Hamburg: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit).

## 9. Datensicherheit

Die Übertragung erfolgt verschlüsselt (TLS/HTTPS). Passwörter werden nicht im Klartext gespeichert, sondern über den Authentifizierungsdienst (Supabase Auth) gehasht. Der Zugriff auf Restaurant-Daten ist technisch durch Datenbankregeln (Row-Level-Security) so beschränkt, dass jedes Restaurant ausschließlich seine eigenen Daten einsehen kann.

---

**Hinweis (nicht Teil der veröffentlichten Erklärung):** Dieser Entwurf deckt die Grundstruktur ab, ersetzt aber keine rechtliche Prüfung. Vor dem ersten echten (auch kostenlosen) Kunden solltest du besonders die mit [OFFEN] markierten Punkte klären — vor allem: Supabase/Vercel-Serverregion eintragen, AVV mit Supabase/Vercel abschließen, und einen eigenen AVV-Vorlagentext für deine Restaurant-Kunden erstellen (da du in deren Auftrag Gästedaten verarbeitest). Für Letzteres empfiehlt sich eine kurze anwaltliche Prüfung, da hier ein echtes Auftragsverhältnis mit Haftungsrelevanz entsteht.
