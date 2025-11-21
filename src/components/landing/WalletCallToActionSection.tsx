// src/components/landing/WalletCallToActionSection.tsx
import { BackgroundBeams } from "@/components/ui/background-beams";

export function WalletCallToActionSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted dark:to-black text-foreground relative overflow-hidden">
      <BackgroundBeams intensity="medium" />
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gradient-complementary">
            Get ready to experience a better way to manage<br />
            your Bitcoin.
          </h3>
          <p className="text-lg text-muted-foreground font-normal">
            Stay tuned for the official launch!
          </p>
        </div>
      </div>
    </section>
  );
}
