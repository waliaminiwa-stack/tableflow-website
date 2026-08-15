import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "info@design-sub.de";
const FROM = "TableFlow Kontakt <kontakt@tableflow.de>";

// Simple in-memory rate limit: max 5 requests per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte einige Minuten." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungultige Anfrage." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Alle Pflichtfelder mussen ausgefullt sein." },
      { status: 400 }
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Bitte gib eine gultige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Nachricht zu lang (max. 5000 Zeichen)." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      replyTo: email,
      subject: `[TableFlow Kontakt] ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${htmlEscape(name)}</p>
        <p><strong>E-Mail:</strong> ${htmlEscape(email)}</p>
        <p><strong>Betreff:</strong> ${htmlEscape(subject)}</p>
        <hr />
        <p>${htmlEscape(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

function htmlEscape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
