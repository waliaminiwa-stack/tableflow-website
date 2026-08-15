"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // silent bot drop
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Senden");
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4 10-10" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-emerald-900 mb-2">Nachricht gesendet!</h3>
        <p className="text-sm text-emerald-700">
          Wir melden uns so schnell wie moglich bei dir.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={set("honeypot")}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" required>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Max Mustermann"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10"
          />
        </Field>
        <Field label="E-Mail" required>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="max@beispiel.de"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10"
          />
        </Field>
      </div>

      <Field label="Betreff" required>
        <select
          value={form.subject}
          onChange={set("subject")}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 outline-none transition focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 appearance-none"
        >
          <option value="">Bitte wahlen...</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
          <option value="Technischer Support">Technischer Support</option>
          <option value="Rechnungsfrage">Rechnungsfrage</option>
          <option value="Partnerschaft">Partnerschaft</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </Field>

      <Field label="Nachricht" required>
        <textarea
          value={form.message}
          onChange={set("message")}
          rows={5}
          required
          placeholder="Wie konnen wir helfen?"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error || "Etwas ist schiefgelaufen. Bitte versuche es erneut."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-12 rounded-xl text-sm font-semibold text-white bg-[#FF6B35] hover:brightness-95 transition shadow-[0_4px_14px_-4px_rgba(255,107,53,0.4)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Wird gesendet...
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
        {label}
        {required && <span className="text-[#FF6B35] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
