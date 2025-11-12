
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export function DemoPreviewSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-primary/10 relative overflow-hidden">
      <BackgroundBeams />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Try It Yourself</h2>
          <p className="text-lg text-muted-foreground font-normal">Experience the power of BitSleuth with our live demo or explore a real Bitcoin wallet analysis.</p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <Button asChild size="lg">
            <a href="https://app.bitsleuth.ai/">Try Live App</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://app.bitsleuth.ai/transactions/7247020e42abe2cc3730f277f7f14579db63f0b3c68dfbaf4626d4d4c11704e8">See Example Wallet</a>
          </Button>
        </div>
        <div className="rounded-lg border shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-glow">
            <Image 
                src="/images/interactive-preview.png"
                width={1200}
                height={600}
                alt="Interactive Preview"
                priority
                data-ai-hint="bitcoin transaction"
                className="w-full"
            />
        </div>
      </div>
    </section>
  );
}
