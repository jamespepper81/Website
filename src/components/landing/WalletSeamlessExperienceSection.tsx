// src/components/landing/WalletSeamlessExperienceSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
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
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">A <span className="text-primary">Seamless</span> User Experience</h2>
          <p className="text-lg text-muted-foreground font-normal">Experience Bitcoin management that's intuitive, efficient, and tailored to you.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceFeatures.map((feature, idx) => (
            <Card key={idx} className="bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="p-3 mb-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <div className="text-primary [&>svg]:h-6 [&>svg]:w-6">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="font-bold text-lg text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="font-normal text-center text-gray-400 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
