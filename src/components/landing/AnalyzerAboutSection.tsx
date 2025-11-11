// src/components/landing/AnalyzerAboutSection.tsx
import { BackgroundBeams } from "@/components/ui/background-beams";

export function AnalyzerAboutSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-3xl mx-auto text-center px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-gradient-title">About BitSleuth Analyzer</h2>
        <p className="text-lg text-muted-foreground font-normal">
          The BitSleuth Analyzer is built for Bitcoiners who want real transparency. Whether you're tracking address reuse, auditing wallets for OPSEC risks, or exploring the chain, our AI-powered tools help you make sense of the blockchain. Built by privacy-focused developers who believe in open access to Bitcoin data.
        </p>
      </div>
    </section>
  );
}
