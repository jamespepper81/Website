"use client";

import Script from "next/script";
import { useEffect, useState, type ReactNode } from "react";

import { CookieConsent } from "@/components/landing/CookieConsent";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

type ProvidersProps = {
  children: ReactNode;
  gaMeasurementId: string;
  nonce?: string | null;
};

export function Providers({ children, gaMeasurementId, nonce }: ProvidersProps) {
  const [isClient, setIsClient] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        const response = await fetch("/api/consent/check");
        const data = await response.json();

        if (data.consent?.analytics === true) {
          setAnalyticsAllowed(true);
        }
      } catch (error) {
        console.error("Error checking cookie consent:", error);
      }
    };

    checkConsent();
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      {children}
      <Toaster />
      {isClient && <CookieConsent />}
      {analyticsAllowed && gaMeasurementId && (
        <>
          <Script
            nonce={nonce ?? undefined}
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          />
          <Script id="google-analytics" nonce={nonce ?? undefined} strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
        </>
      )}
    </ThemeProvider>
  );
}
