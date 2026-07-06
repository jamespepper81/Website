"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Reveal } from "@/components/ui/reveal";
import {
  BarChart,
  ShieldCheck,
  Bitcoin,
  Zap,
  Users,
  BookOpen,
  Clock,
  ArrowRight,
  KeyRound,
  UserX,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const trustItems = [
  { icon: KeyRound, text: "Non-custodial by design" },
  { icon: UserX, text: "No registration required" },
  { icon: Sparkles, text: "Free during beta" },
  { icon: BookOpen, text: "Open educational content" },
];

export function EnhancedHomeHeroSection() {
  return (
    <>
      {/* Main Hero Section with Cinematic Image */}
      <section className="edge-to-edge-section relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-36">
        {/* Background Gradient - Orange from top */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background/50 to-background z-0" />
        <div className="absolute inset-0 bg-dot-pattern z-0" aria-hidden="true" />
        <div className="hero-orb w-[32rem] h-[32rem] -top-40 -right-40 motion-safe:animate-pulse-glow" aria-hidden="true" />
        <BackgroundBeams intensity="subtle" className="opacity-30" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-4">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground drop-shadow-xs">
                  One Brand. <br />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-[hsl(20_90%_55%)] to-primary bg-[length:200%_auto] motion-safe:animate-gradient-x">
                    Two Powerful Tools.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
                  Whether you're analyzing blockchain data or securing your assets with a privacy-first wallet, BitSleuth provides the tools you need for Bitcoin transparency and sovereignty.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                  <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="primary" aria-label="This service focuses exclusively on Bitcoin" />
                  <ValueBadge icon={Zap} text="Free to Use" variant="primary" aria-label="This tool is free to use" />
                  <ValueBadge icon={Users} text="Built by Bitcoiners" variant="primary" aria-label="This product is built by Bitcoiners for the Bitcoin community" />
                </div>
              </div>

              {/* Quick Links to Learning Resources */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="outline" asChild className="group">
                  <Link href="/learn">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Learning Hub
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <Link href="/history">
                    <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Bitcoin History
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Cinematic Image */}
            <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-safe:slide-in-from-right-8 bg-background">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              <Image
                src="/images/hero.png"
                alt="Global Bitcoin Culture"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-0 relative z-20 -mt-24 md:-mt-48">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Reveal delay={0}>
              <Card className="group text-left bg-card/95 backdrop-blur-sm card-glow-border shadow-xl hover:-translate-y-2 h-full overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 rounded-2xl bg-primary/15 ring-1 ring-primary/20 group-hover:bg-primary/25 group-hover:ring-primary/40 transition-all duration-300">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl font-bold text-foreground">Wallet Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-8 font-normal text-base leading-relaxed text-muted-foreground">
                    For analysts & investigators. Visualize transactions, trace fund flows, and detect OPSEC risks with AI-powered insights.
                  </CardDescription>
                  <Button asChild size="xl" className="w-full group/cta">
                    <Link href="/analyzer">
                      Explore Analyzer
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="group text-left bg-card/95 backdrop-blur-sm card-glow-border shadow-xl hover:-translate-y-2 h-full overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 rounded-2xl bg-primary/15 ring-1 ring-primary/20 group-hover:bg-primary/25 group-hover:ring-primary/40 transition-all duration-300">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl font-bold text-foreground">Privacy Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-8 font-normal text-base leading-relaxed text-muted-foreground">
                    For privacy-conscious holders. A secure, non-custodial wallet built to minimize address reuse and on-chain exposure.
                  </CardDescription>
                  <Button asChild size="xl" className="w-full group/cta">
                    <Link href="/wallet">
                      Explore Wallet
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Trust strip */}
          <Reveal delay={200}>
            <div className="mt-10 md:mt-14 border-y border-border/60 py-5">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                {trustItems.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
