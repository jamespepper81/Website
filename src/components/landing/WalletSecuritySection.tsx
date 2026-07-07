// src/components/landing/WalletSecuritySection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ValueBadge } from "@/components/ui/value-badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import { Key, Lock, Fingerprint, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: <Key />,
    title: 'Client-Side Keys',
    description: 'Your secret recovery phrase (mnemonic) is generated and stored only on your device. We never have access to your keys or your funds.',
  },
  {
    icon: <Lock />,
    title: 'PIN-Protected Encryption',
    description: 'Your recovery phrase is secured with strong AES encryption, protected by a PIN that only you know.',
  },
  {
    icon: <Fingerprint />,
    title: 'Advanced Two-Factor Authentication (2FA)',
    description: "Add an extra layer of security with passkeys, using your device's biometrics or a hardware security key.",
  },
];

export function WalletSecuritySection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 relative overflow-hidden bg-background">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">Uncompromising <span className="text-primary">Security & Self-Custody</span></h2>
            <p className="text-lg text-muted-foreground font-normal">Your Bitcoin deserves the highest level of protection. We provide enterprise-grade security without compromising on privacy.</p>
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <ValueBadge icon={ShieldCheck} text="Non-Custodial" variant="primary" />
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, idx) => (
            <Reveal key={feature.title} delay={idx * 120}>
              <Card className="h-full bg-card card-glow-border shadow-xl hover:-translate-y-2 group overflow-hidden motion-reduce:transform-none motion-reduce:transition-none">
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
      </div>
    </section>
  );
}
