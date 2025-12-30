'use server';

import { cookies } from 'next/headers';

export interface ConsentPreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
}

const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Sets the consent cookie with HTTP-only, Secure, and SameSite=Strict attributes
 * This provides tamper-resistant storage that cannot be modified by client-side JavaScript
 */
export async function setConsentCookie(consent: ConsentPreferences): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set(CONSENT_COOKIE_NAME, JSON.stringify(consent), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: CONSENT_COOKIE_MAX_AGE,
    path: '/',
  });
}

/**
 * Gets the consent preferences from the HTTP-only cookie
 * Returns null if no consent has been given yet
 */
export async function getConsentCookie(): Promise<ConsentPreferences | null> {
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get(CONSENT_COOKIE_NAME);
  
  if (!consentCookie?.value) {
    return null;
  }
  
  try {
    return JSON.parse(consentCookie.value) as ConsentPreferences;
  } catch {
    return null;
  }
}

/**
 * Checks if analytics consent has been granted
 * This is the tamper-resistant signal used to gate analytics
 */
export async function hasAnalyticsConsent(): Promise<boolean> {
  const consent = await getConsentCookie();
  return consent?.analytics === true;
}

/**
 * Removes the consent cookie
 */
export async function clearConsentCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(CONSENT_COOKIE_NAME);
}
