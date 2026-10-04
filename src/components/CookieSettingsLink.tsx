"use client";

import { useConsent } from "@/context/ConsentContext";

export default function CookieSettingsLink() {
  const { openSettings } = useConsent();
  return (
    <button
      onClick={openSettings}
      className="text-sm text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
    >
      Cookie-Einstellungen
    </button>
  );
}
