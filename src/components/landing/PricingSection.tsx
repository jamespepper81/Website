import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

interface Plan {
  title: string;
  price: string;
  desc: ReactNode;
  features: string[];
  cta: string;
  href?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const plans: Plan[] = [
  {
    title: 'Free',
    price: '$0/mo',
    desc: <>Basic insights <span className="line-through">& 1 address lookup per day.</span></>,
    features: ['Wallet Analysis', 'Transaction History'],
    cta: 'Get Started',
    href: 'https://app.bitsleuth.ai/',
    featured: true,
  },
  {
    title: 'Pro',
    price: '$9/mo',
    desc: 'For power users and analysts.',
    features: ['Unlimited Lookups', 'AI Chat Analysis', 'OPSEC Threat Detection', 'Export Tools'],
    cta: 'Go Pro',
    comingSoon: true,
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    desc: 'For businesses and teams.',
    features: ['Bulk Address Access', 'Dedicated API', 'Priority Support'],
    cta: 'Contact Sales',
    comingSoon: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">Pricing <span className="text-primary">Plans</span></h2>
            <p className="text-lg text-muted-foreground font-normal">Choose the plan that fits your Bitcoin analysis needs. Start free during our beta period.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={plan.title} delay={idx * 120} className="h-full">
              <Card
                className={`relative flex flex-col h-full text-left overflow-hidden shadow-xl bg-card transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? 'border-2 border-primary/60 shadow-2xl shadow-primary/15'
                    : 'card-glow-border'
                } ${plan.comingSoon ? 'opacity-80' : ''}`}
              >
                {plan.featured && (
                  <Badge className="absolute top-4 right-4 text-xs font-bold py-1 px-3 z-10 bg-primary text-primary-foreground border-none shadow-md shadow-primary/25">
                    FULL ACCESS DURING BETA
                  </Badge>
                )}
                {plan.comingSoon && (
                  <Badge variant="secondary" className="absolute top-4 right-4 text-xs font-bold py-1 px-3 z-10 bg-primary/15 text-primary border border-primary/25">
                    COMING SOON
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-2xl font-bold text-foreground">{plan.title}</CardTitle>
                  <p className="font-display text-3xl text-primary font-bold">{plan.price}</p>
                  <CardDescription className="font-normal text-muted-foreground">{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="grow flex flex-col">
                  <ul className="space-y-2.5 mb-8 grow font-medium text-muted-foreground">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 shrink-0">
                          <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.href ? (
                    <Button asChild variant={plan.featured ? "shine" : "default"} size="xl" className="w-full">
                      <a href={plan.href}>{plan.cta}</a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="xl" className="w-full" disabled>
                      {plan.cta}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
