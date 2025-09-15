
// src/components/landing/WalletHeroSection.tsx
"use client";


export function WalletHeroSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted dark:to-black text-foreground">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title">
            BitSleuth Wallet: Your Bitcoin. Your Keys. Secure, Non-Custodial & Private by Default.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl font-normal">
            Take full control of your Bitcoin with BitSleuth Wallet - a privacy-first, non-custodial wallet designed for security, privacy, and ease of use.
            <br /><br />
            Minimize address reuse and on-chain exposure without compromising features or safety.
            <br />
            No accounts. No tracking. Just you and your keys, coming soon to iOS and Android!
          </p>
        </div>
      </div>
    </section>
  );
}
