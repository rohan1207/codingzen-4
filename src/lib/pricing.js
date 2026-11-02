"use client";

import { useEffect, useState } from "react";

const INDIA_TZ = new Set(["Asia/Kolkata", "Asia/Calcutta"]);

function timezoneLooksIndia() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return INDIA_TZ.has(tz);
  } catch {
    return false;
  }
}

async function fetchCountryIsIndia() {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 3500);
  try {
    const res = await fetch("https://ipapi.co/country_code/", {
      signal: ctrl.signal,
    });
    if (!res.ok) return null;
    const code = (await res.text()).trim().toUpperCase();
    if (!code || code.length > 3) return null;
    return code === "IN";
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * India → INR at face value.
 * Outside India → USD at 2× the Indian numeric price.
 */
export function useGeoPricing() {
  const [isIndia, setIsIndia] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      if (timezoneLooksIndia()) {
        if (!cancelled) {
          setIsIndia(true);
          setReady(true);
        }
        return;
      }

      const remote = await fetchCountryIsIndia();
      if (cancelled) return;

      if (remote === null) {
        // Non-India timezone + failed lookup → treat as international
        setIsIndia(false);
      } else {
        setIsIndia(remote);
      }
      setReady(true);
    }

    resolve();
    return () => {
      cancelled = true;
    };
  }, []);

  return { isIndia, ready, currency: isIndia ? "INR" : "USD" };
}

export function formatPlanPrice(inrAmount, isIndia) {
  if (isIndia) {
    return {
      symbol: "₹",
      amount: inrAmount.toLocaleString("en-IN"),
      code: "INR",
      label: "INR",
    };
  }
  const usd = inrAmount * 2;
  return {
    symbol: "$",
    amount: usd.toLocaleString("en-US"),
    code: "USD",
    label: "USD",
  };
}
