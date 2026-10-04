export const CONSENT_VERSION = 1;
const CONSENT_KEY = "tableflow_cookie_consent";

export type ConsentCategories = {
  notwendig: true;
  statistik: boolean;
};

export type ConsentRecord = {
  version: number;
  timestamp: string;
  categories: ConsentCategories;
};

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(statistik: boolean): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: { notwendig: true, statistik },
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  return record;
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}
