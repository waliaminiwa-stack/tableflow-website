"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ConsentRecord, readConsent, writeConsent } from "@/lib/consent";

type ConsentContextValue = {
  consent: ConsentRecord | null;
  bannerVisible: boolean;
  settingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustom: (statistik: boolean) => void;
  openSettings: () => void;
  closeSettings: () => void;
  hasConsent: (category: "statistik") => boolean;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const stored = readConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setBannerVisible(true);
    }
  }, []);

  const save = useCallback((statistik: boolean) => {
    const record = writeConsent(statistik);
    setConsent(record);
    setBannerVisible(false);
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => save(true), [save]);
  const rejectAll = useCallback(() => save(false), [save]);
  const saveCustom = useCallback((statistik: boolean) => save(statistik), [save]);

  const openSettings = useCallback(() => {
    setBannerVisible(false);
    setSettingsOpen(true);
  }, []);

  // Read current consent via state updater to avoid stale closure
  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
    setConsent((current) => {
      if (!current) setBannerVisible(true);
      return current;
    });
  }, []);

  const hasConsent = useCallback(
    (category: "statistik") => consent?.categories[category] === true,
    [consent]
  );

  return (
    <ConsentContext.Provider
      value={{
        consent,
        bannerVisible,
        settingsOpen,
        acceptAll,
        rejectAll,
        saveCustom,
        openSettings,
        closeSettings,
        hasConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be inside ConsentProvider");
  return ctx;
}
