// src/app/glossary/csv/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Timer, Lock, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function CSVGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <BackgroundBeams intensity="subtle" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is CSV (CheckSequenceVerify)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              CSV (CheckSequenceVerify) is a Bitcoin script opcode (BIP 112) that enforces relative timelocks, requiring a certain number of blocks to be mined after a <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link> is created before it can be spent. Unlike <Link href="/glossary/cltv" className="text-primary hover:underline">CLTV</Link>'s absolute timelocks, CSV's delays are relative to when the UTXO was confirmed.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Timer className="mr-2 h-6 w-6 text-primary" />
                    Relative Timelocks
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    CSV specifies a delay in blocks (or time) relative to when the transaction creating the UTXO was confirmed. For example, "CSV 144" means the output can't be spent until 144 blocks (~24 hours) after <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmation</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Applications
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Lock className="mr-2 h-6 w-6 text-primary" />
                        Payment Channels
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CSV is essential for the <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link>, enabling unilateral channel closes with delays that give honest parties time to dispute fraudulent states before funds can be claimed.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Security Delays
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CSV enables "cooling off" periods for high-security wallets. Large withdrawals can require a delay, giving time to cancel suspicious transactions before they complete.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             CSV's relative timelocks complement <Link href="/glossary/cltv" className="text-primary hover:underline">CLTV</Link>'s absolute timelocks, together enabling sophisticated Bitcoin <Link href="/glossary/scriptpubkey-scriptsig" className="text-primary hover:underline">scripts</Link>. Both are crucial for Layer 2 solutions, advanced custody, and <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link>-based spending policies.
            </p>
          </article>
        </div>
      </main>
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
      <TermsOfServiceModal 
        isOpen={activeModal === 'terms'} 
        onOpenChange={closeModal}
        onPrivacyClick={openPrivacyModal} 
      />
    </div>
  );
}
