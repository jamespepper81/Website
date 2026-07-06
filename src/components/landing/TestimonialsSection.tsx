"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Reveal } from "@/components/ui/reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Finally, a tool that makes UTXO management intuitive. The visualization features helped me consolidate my stack without compromising privacy.",
    author: "Alex M.",
    role: "Privacy Advocate",
    initials: "AM",
    avatarBg: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
  },
  {
    id: 2,
    content: "The wallet analyzer is a game changer for my investigations. Being able to trace fund flows visually saves me hours of manual work.",
    author: "Sarah K.",
    role: "Blockchain Analyst",
    initials: "SK",
    avatarBg: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
  },
  {
    id: 3,
    content: "BitSleuth strikes the perfect balance between power and usability. It's the first tool I recommend to newcomers who want to understand their on-chain footprint.",
    author: "David R.",
    role: "Bitcoin Educator",
    initials: "DR",
    avatarBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Trusted by the <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how BitSleuth is helping Bitcoiners regain control of their financial privacy and data.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 120}>
              <Card className="h-full bg-card card-glow-border shadow-xl shadow-black/5 hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-md shadow-primary/25">
                    <Quote className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-8 flex-1 font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                    <Avatar className="h-12 w-12 border-2 border-background shadow-none">
                      <AvatarFallback className={`${testimonial.avatarBg} font-bold`}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
