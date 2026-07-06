import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function DemoPreviewSection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal from="left" className="text-left space-y-6">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                Try It <span className="text-primary">Yourself</span>
              </h2>
              <p className="text-lg text-muted-foreground font-normal">
                Experience the power of BitSleuth with our live demo or explore
                a real Bitcoin wallet analysis.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="shine" size="xl">
                <a href="https://app.bitsleuth.ai/">Try Live App</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="https://app.bitsleuth.ai/transactions/7247020e42abe2cc3730f277f7f14579db63f0b3c68dfbaf4626d4d4c11704e8">
                  See Example Wallet
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal from="right" className="rounded-lg card-glow-border shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-500 shadow-primary/10">
            <Image
              src="/images/interactive-preview.png"
              width={1200}
              height={600}
              alt="Interactive Preview"
              priority
              data-ai-hint="bitcoin transaction"
              className="w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
