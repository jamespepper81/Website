import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, BarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background relative">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-[hsl(24_94%_55%)] to-[hsl(18_88%_48%)] px-6 py-14 md:px-16 md:py-20 text-center shadow-2xl shadow-primary/25">
            {/* Decorative pattern & orbs */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-black/10 blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white drop-shadow-sm">
                Ready to explore the chain?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Start analyzing any Bitcoin address in seconds, or take control of your keys with our privacy-first wallet. Free during beta — no registration required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  asChild
                  size="xl"
                  className="group bg-white text-[hsl(20_90%_35%)] hover:bg-white/90 shadow-lg hover:shadow-xl hover:shadow-black/20 font-bold"
                >
                  <Link href="/analyzer">
                    <BarChart className="mr-2 h-5 w-5" />
                    Launch Analyzer
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="group border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white hover:text-white"
                >
                  <Link href="/wallet">
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Get the Wallet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
