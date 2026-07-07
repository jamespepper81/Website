"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export function EducationalSection() {
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Educational Resources</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl mb-6">
              Learn About <span className="text-primary">Bitcoin</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore comprehensive guides, historical insights, and educational content to deepen your understanding of Bitcoin and blockchain technology.
            </p>
          </div>
        </Reveal>

        {/* Main Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Learning Hub Card - Featured with Image */}
          <Reveal delay={0}>
            <Card className="group relative bg-card card-glow-border shadow-xl overflow-hidden flex flex-col h-96">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/educational.png"
                  alt="Bitcoin Education"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <CardContent className="h-full flex flex-col justify-end p-8 relative z-10 text-white">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/25 backdrop-blur-xs ring-1 ring-primary/30">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl font-bold">Learning Hub</h3>
                  </div>
                  <p className="text-gray-200 font-medium">Master Bitcoin fundamentals</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-sm text-primary">Fundamentals</div>
                    <div className="text-xs text-gray-300">How it works</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">Security</div>
                    <div className="text-xs text-gray-300">Best practices</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">Usage</div>
                    <div className="text-xs text-gray-300">Getting started</div>
                  </div>
                </div>

                <Button asChild className="w-fit group/cta">
                  <Link href="/learn">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          {/* Bitcoin History Card */}
          <Reveal delay={120}>
            <Card className="group relative bg-card card-glow-border shadow-xl overflow-hidden flex flex-col h-96">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/history.png"
                  alt="Bitcoin History"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <CardContent className="h-full flex flex-col justify-end p-8 relative z-10 text-white">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/25 backdrop-blur-xs ring-1 ring-primary/30">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl font-bold">Bitcoin History</h3>
                  </div>
                  <p className="text-gray-200 font-medium">From whitepaper to phenomenon</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-sm text-primary">Origins</div>
                    <div className="text-xs text-gray-300">The Whitepaper</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">Genesis</div>
                    <div className="text-xs text-gray-300">First Block</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">Impact</div>
                    <div className="text-xs text-gray-300">Global change</div>
                  </div>
                </div>

                <Button asChild className="w-fit group/cta">
                  <Link href="/history">
                    Explore History
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Glossary Callout */}
        <Reveal delay={80}>
          <Card className="relative bg-primary/5 card-glow-border overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="p-5 rounded-2xl bg-primary/10 ring-1 ring-primary/20 shrink-0">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-2xl font-bold mb-3">Bitcoin Terminology Glossary</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Explore our comprehensive glossary of Bitcoin terms, from basic concepts to advanced technical terminology. Perfect for beginners and experts alike.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Blockchain</span>
                    <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Mining</span>
                    <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Wallet</span>
                    <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">UTXO</span>
                    <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-primary/30 font-medium text-primary">+ 15 more</span>
                  </div>
                </div>
                <Button asChild size="xl" className="shrink-0 group/cta">
                  <Link href="/glossary">
                    Browse Glossary
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
