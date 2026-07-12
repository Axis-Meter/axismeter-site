"use client";

import { useEffect } from "react";

export const REFERRAL_STORAGE_KEY = "axis_referral_attribution";

export type ReferralAttributionData = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  landingPage: string;
  referrer: string;
  isChatGptReferral: boolean;
};

export function ReferralAttribution() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") ?? "";
    const referrer = document.referrer;
    const hasCampaign = ["utm_source", "utm_medium", "utm_campaign", "utm_content"].some(
      (key) => params.has(key),
    );
    const referrerHostname = safeHostname(referrer);
    const isExternalReferral = Boolean(referrerHostname) && referrerHostname !== window.location.hostname;

    if (!hasCampaign && !isExternalReferral) return;

    const attribution: ReferralAttributionData = {
      utmSource,
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      landingPage: window.location.href,
      referrer,
      isChatGptReferral:
        utmSource.toLowerCase() === "chatgpt.com" || /(^|\.)chatgpt\.com$/i.test(referrerHostname),
    };

    try {
      sessionStorage.setItem(REFERRAL_STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // Attribution is optional; do not interfere with navigation when storage is unavailable.
    }
  }, []);

  return null;
}

function safeHostname(value: string) {
  try {
    return new URL(value).hostname;
  } catch {
    return "";
  }
}
