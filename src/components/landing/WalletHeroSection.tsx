"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";

const heroPoints = [
  "No accounts. No tracking. Just you and your keys.",
  "Minimize address reuse and on-chain exposure.",
  "Security and privacy without compromising ease of use.",
];

export function WalletHeroSection() {
  return (
    <section className="edge-to-edge-section relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background Gradient - Orange from top */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background/50 to-background z-0" />
      <div className="absolute inset-0 bg-dot-pattern z-0" aria-hidden="true" />
      <div className="hero-orb w-[28rem] h-[28rem] -top-32 -right-32 motion-safe:animate-pulse-glow" aria-hidden="true" />
      <BackgroundBeams intensity="subtle" className="opacity-30" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8 text-center lg:text-left motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-4">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground drop-shadow-xs">
              BitSleuth Wallet: <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-[hsl(20_90%_55%)] to-primary bg-[length:200%_auto] motion-safe:animate-gradient-x">
                Your Bitcoin. Your Keys.
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Take full control of your Bitcoin with BitSleuth Wallet — a privacy-first, non-custodial wallet designed for security, privacy, and ease of use.
            </p>

            <ul className="space-y-3 max-w-2xl mx-auto lg:mx-0 text-left inline-block lg:block">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-medium text-foreground/70">
              Available on the iOS App Store and Android Google Play Store.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="xl" variant="shine" asChild className="group">
                <Link href="/wallet/download">
                  Download Privacy Wallet
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#features">
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Features
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Mockup Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full perspective-1000 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-safe:slide-in-from-right-8">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl -z-10 motion-safe:animate-pulse-glow" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
              <Image
                src="/images/wallet-mockup.png"
                alt="BitSleuth Wallet Mobile App Interface"
                width={600}
                height={1200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
