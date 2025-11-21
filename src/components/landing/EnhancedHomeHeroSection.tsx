"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { BlockchainAnimation } from "@/components/ui/blockchain-animation";
import { WalletShieldAnimation } from "@/components/ui/wallet-shield-animation";
import { 
  BarChart, 
  ShieldCheck, 
  Bitcoin, 
  Zap, 
  Users, 
  BookOpen, 
  Clock,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export function EnhancedHomeHeroSection() {
  return (
    <>
      {/* Main Hero Section with Animation */}
      <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/95 to-muted dark:to-black text-foreground relative overflow-hidden">
        <BackgroundBeams intensity="subtle" />
        
        {/* Blockchain Animation Background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
          <BlockchainAnimation />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4 animate-in fade-in duration-700">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-complementary drop-shadow-sm">
                  One Brand. Two Powerful Bitcoin Tools.
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-normal leading-relaxed">
                  Whether you're analyzing blockchain data or securing your assets with a privacy-first wallet, BitSleuth provides the tools you need for Bitcoin transparency and sovereignty.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                  <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="complementary" />
                  <ValueBadge icon={Zap} text="Free to Use" variant="complementary" />
                  <ValueBadge icon={Users} text="Built by Bitcoiners" variant="complementary" />
                </div>
              </div>

              {/* Quick Links to Learning Resources */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" variant="outline" asChild className="group hover:border-complementary hover:text-complementary">
                  <Link href="/learn">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Learning Hub
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group hover:border-complementary hover:text-complementary">
                  <Link href="/history">
                    <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Bitcoin History
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Wallet Shield Animation */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <WalletShieldAnimation className="w-full h-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="group text-left bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-complementary/70 hover:shadow-lg hover:shadow-complementary/20 transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-complementary/10 group-hover:bg-complementary/20 transition-colors">
                  <BarChart className="h-8 w-8 text-complementary"/>
                </div>
                <CardTitle className="text-2xl font-bold">Wallet Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 font-normal text-base leading-relaxed">
                  For analysts & investigators. Visualize transactions, trace fund flows, and detect OPSEC risks with AI-powered insights.
                </CardDescription>
                <Button asChild className="w-full group-hover:shadow-md transition-shadow bg-complementary hover:bg-complementary/90 text-complementary-foreground">
                  <Link href="/analyzer">Explore Analyzer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-left bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-complementary/70 hover:shadow-lg hover:shadow-complementary/20 transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-complementary/10 group-hover:bg-complementary/20 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-complementary"/>
                </div>
                <CardTitle className="text-2xl font-bold">Privacy Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 font-normal text-base leading-relaxed">
                  For privacy-conscious holders. A secure, non-custodial wallet built to minimize address reuse and on-chain exposure.
                </CardDescription>
                <Button asChild className="w-full group-hover:shadow-md transition-shadow bg-complementary hover:bg-complementary/90 text-complementary-foreground">
                  <Link href="/wallet">Explore Wallet</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
