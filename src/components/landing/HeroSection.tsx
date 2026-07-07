
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Bitcoin, Search, Lock, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";
import { validateBitcoinAddress, sanitizeBitcoinAddress } from "@/lib/bitcoin-validation";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!address) {
      toast({
        title: "Address Required",
        description: "Please enter a Bitcoin address to analyze",
        variant: "destructive",
      });
      return;
    }

    const sanitizedAddress = sanitizeBitcoinAddress(address);
    const validation = validateBitcoinAddress(sanitizedAddress);
    
    if (!validation.isValid) {
      toast({
        title: "Invalid Address",
        description: validation.error || "Please enter a valid Bitcoin address",
        variant: "destructive",
      });
      return;
    }

    // Use window.location.assign() for better CSP compatibility
    window.location.assign(`https://app.bitsleuth.ai/address/${encodeURIComponent(sanitizedAddress)}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <section className="edge-to-edge-section relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background Gradient - Orange from top */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background/50 to-background z-0" />
      <div className="absolute inset-0 bg-dot-pattern z-0" aria-hidden="true" />
      <div className="hero-orb w-[28rem] h-[28rem] -top-32 -left-32 motion-safe:animate-pulse-glow" aria-hidden="true" />
      <BackgroundBeams intensity="subtle" className="opacity-30" />
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-4">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground">
            BitSleuth Analyzer: Analyze <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-[hsl(20_90%_55%)] to-primary bg-[length:200%_auto] motion-safe:animate-gradient-x">Bitcoin Wallets</span> Like a Pro
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl font-normal">
            Visualize transactions, trace flows, and spot OPSEC risks with AI-powered insights. Advanced analytics, visualized insights, and total transparency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative grow">
              <Bitcoin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Paste any BTC Address"
                className="h-12 p-3 pl-10 rounded-xl w-full max-w-md bg-background/70 border-border/60 shadow-sm focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40 transition-shadow focus:shadow-lg focus:shadow-primary/10"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button variant="shine" size="xl" className="w-full sm:w-auto" onClick={handleAnalyze}>
              <Search className="mr-2 h-5 w-5" />
              Analyze Wallet
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <ValueBadge icon={CheckCircle} text="No Registration" variant="primary" />
            <ValueBadge icon={Lock} text="100% Private" variant="primary" />
            <ValueBadge icon={Zap} text="Instant Analysis" variant="primary" />
          </div>
        </div>
        <div className="relative motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-safe:slide-in-from-right-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 motion-safe:animate-pulse-glow"></div>
          <Card className="shadow-2xl bg-card/80 backdrop-blur-xs card-glow-border overflow-hidden transform hover:scale-[1.03] transition-transform duration-500 shadow-primary/10">
            <CardContent className="p-0">
              <Image
                src="/images/dashboard-preview.png"
                width="600"
                height="400"
                alt="BitSleuth Dashboard Preview"
                data-ai-hint="bitcoin analytics dashboard"
                className="w-full object-cover"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
