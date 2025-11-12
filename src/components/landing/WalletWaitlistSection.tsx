// src/components/landing/WalletWaitlistSection.tsx
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WalletJoinWaitlistSection } from './WalletJoinWaitlistSection';

export function WalletWaitlistSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted dark:to-black text-foreground relative overflow-hidden">
      <BackgroundBeams />
      <div className="container max-w-4xl mx-auto relative z-10">
        <WalletJoinWaitlistSection />
      </div>
    </section>
  );
}
