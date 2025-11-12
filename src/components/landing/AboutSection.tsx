import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Eye, Shield, Bitcoin } from "lucide-react";

export function AboutSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-title">About BitSleuth</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto">
            BitSleuth is built for Bitcoiners who want real transparency. Whether you're tracking
            address reuse, auditing wallets, or exploring the chain, BitSleuth helps you make sense
            of the blockchain. Built by privacy-focused developers who believe in open access to
            Bitcoin data.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3 text-sm">
            <ValueBadge icon={Eye} text="Transparency First" variant="orange" />
            <ValueBadge icon={Shield} text="Privacy Focused" variant="orange" />
            <ValueBadge icon={Bitcoin} text="Bitcoin Native" variant="orange" />
          </div>
        </div>
      </div>
    </section>
  );
}
