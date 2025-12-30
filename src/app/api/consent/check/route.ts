import { NextResponse } from 'next/server';
import { getConsentCookie } from '@/lib/consent';

export async function GET() {
  const consent = await getConsentCookie();
  
  return NextResponse.json({
    hasConsent: consent !== null,
    consent: consent,
  });
}
