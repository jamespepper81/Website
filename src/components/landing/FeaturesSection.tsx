import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ValueBadge } from "@/components/ui/value-badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import { BarChart3, Search, Bot, LineChart, ShieldAlert, BookUser, Zap, Bitcoin, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BarChart3,
    title: 'Wallet Visualization',
    description: 'See a clear, interactive graph of all transactions and fund flows.',
  },
  {
    icon: Search,
    title: 'OPSEC Threat Detection',
    description: 'Automatically identify risks like address reuse and peel chains.',
  },
  {
    icon: Bot,
    title: 'AI Wallet Analysis',
    description: 'Ask our AI to summarize wallet activity or explain complex transactions.',
  },
  {
    icon: LineChart,
    title: 'Transaction History Graphs',
    description: 'Track wallet balance and activity over time with detailed charts.',
  },
  {
    icon: ShieldAlert,
    title: 'Privacy Risk Insights',
    description: 'Get actionable reports on potential privacy vulnerabilities in a wallet.',
  },
  {
    icon: BookUser,
    title: 'Ask AI About Any Address',
    description: 'Use natural language to query any Bitcoin address and get instant answers.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4 text-foreground">Your Bitcoin <span className="text-primary">Investigation Toolkit</span></h2>
            <p className="text-lg text-muted-foreground font-normal">Professional-grade tools for analyzing Bitcoin transactions, detecting privacy risks, and uncovering wallet patterns with AI-powered insights.</p>
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <ValueBadge icon={Bitcoin} text="On-Chain Analysis" variant="primary" />
              <ValueBadge icon={Zap} text="Real-Time Data" variant="primary" />
              <ValueBadge icon={Bot} text="AI-Powered" variant="primary" />
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(idx % 3) * 100}>
                <Card className="h-full bg-card card-glow-border shadow-xl hover:-translate-y-1 flex flex-col items-center overflow-hidden group">
                  <CardContent className="p-6 grow flex flex-col items-center">
                    <div className="p-3 rounded-2xl bg-primary/15 ring-1 ring-primary/20 group-hover:bg-primary/25 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 mb-4">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="font-display font-bold text-xl mb-2 text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="font-normal text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
