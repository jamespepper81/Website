
// src/components/landing/WalletHowItWorksSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Create Your Wallet",
    description: "Generate or import your secure BIP39 passphrase. Write it down and store it safely offline.",
  },
  {
    title: "Receive Privately",
    description: "Receive Bitcoin to your wallet. Each transaction can use a new address to protect your privacy.",
  },
  {
    title: "Send with Confidence",
    description: "Send Bitcoin with peace of mind. You are always in full control of your private keys.",
  },
];

export function WalletHowItWorksSection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 relative overflow-hidden bg-background">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">Advanced Technology, <span className="text-primary">Simplified.</span></h2>
            <p className="text-lg text-muted-foreground font-normal">Visualize how BitSleuth obscures transaction trails, ensuring your financial history remains confidential.</p>
          </div>
        </Reveal>
        <div className="relative">
          {/* Connecting line between steps on desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-linear-to-r from-primary/10 via-primary/40 to-primary/10" aria-hidden="true" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 130}>
                <Card className="relative h-full bg-card card-glow-border shadow-xl text-left hover:-translate-y-2 overflow-hidden group">
                  <CardContent className="p-6 pt-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25 mb-5 relative z-10">
                      <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-primary to-[hsl(18_88%_48%)]">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="font-normal text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
