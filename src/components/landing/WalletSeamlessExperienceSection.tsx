// src/components/landing/WalletSeamlessExperienceSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { Smartphone, QrCode, Palette, BarChart3 } from "lucide-react";

const experienceFeatures = [
  {
    icon: <Smartphone />,
    title: 'Mobile-First Design',
    description: 'A clean, intuitive interface that looks and feels great on your phone.',
  },
  {
    icon: <QrCode />,
    title: 'QR Code Support',
    description: 'Effortlessly send and receive Bitcoin by scanning QR codes.',
  },
  {
    icon: <Palette />,
    title: 'Personalized Theming',
    description: 'Switch between beautiful light and dark modes to match your preference.',
  },
  {
    icon: <BarChart3 />,
    title: 'Helpful Insights',
    description: 'Track your balance and portfolio performance with clear, easy-to-read charts.',
  },
];

export function WalletSeamlessExperienceSection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 relative overflow-hidden bg-background">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">Seamless <span className="text-primary">Experience</span></h2>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto">Experience Bitcoin management that's intuitive, efficient, and tailored to you.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {experienceFeatures.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 100}>
                <Card className="h-full bg-card card-glow-border shadow-xl hover:-translate-y-2 group overflow-hidden">
                  <CardHeader className="flex flex-col items-center text-center p-6">
                    <div className="p-3 mb-4 rounded-2xl bg-primary/15 ring-1 ring-primary/20 group-hover:bg-primary/25 group-hover:ring-primary/40 transition-all duration-300">
                      <div className="text-primary [&>svg]:h-6 [&>svg]:w-6">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="font-display font-bold text-lg text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="font-normal text-center text-muted-foreground leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Right Side - Image */}
          <Reveal from="right" className="relative order-1 lg:order-2">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl -z-10 motion-safe:animate-pulse-glow" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/wallet-dashboard.png"
                alt="BitSleuth Wallet Dashboard"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
