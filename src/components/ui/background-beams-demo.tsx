"use client";

import React from "react";
import { BackgroundBeams } from "./background-beams";
import { Button } from "./button";
import { Input } from "./input";
import { useTheme } from "@/components/theme-provider";

export function BackgroundBeamsDemo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-[40rem] w-full rounded-md bg-gradient-to-br from-background to-muted dark:to-black relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to BitSleuth, the best Bitcoin analysis and wallet tools on the web.
          We provide reliable, scalable, and customizable solutions for
          your Bitcoin needs. Whether you're analyzing transactions,
          securing your assets, or exploring the blockchain, BitSleuth has got you
          covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Input
            type="text"
            placeholder="hi@example.com"
            className="rounded-lg border border-neutral-800 dark:border-neutral-700 focus:ring-2 focus:ring-primary w-full relative z-10 bg-background/50 placeholder:text-neutral-700 dark:placeholder:text-neutral-500"
          />
          <Button className="w-full sm:w-auto shadow-glow">
            Join Waitlist
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Current theme: <span className="font-semibold">{resolvedTheme}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
