// src/app/glossary/rbf/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, RefreshCw, TrendingUp, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function RBFGlossaryPage() {
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
              What Is RBF (Replace-by-Fee)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Replace-by-Fee (RBF) is a Bitcoin protocol feature that allows an unconfirmed transaction to be replaced with a new version that pays a higher fee. This gives users flexibility to adjust fees if their transaction gets stuck in the <Link href="/glossary/mempool" className="text-primary hover:underline">mempool</Link> during periods of network congestion.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <RefreshCw className="mr-2 h-6 w-6 text-primary" />
                    How RBF Works
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    To use RBF, a transaction must be marked as replaceable when first created (using BIP 125 signaling). If it doesn't confirm quickly enough, you can broadcast a replacement transaction spending the same <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> but with a higher <Link href="/glossary/fee-rate" className="text-primary hover:underline">fee rate</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Aspects
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                        Fee Bumping
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      RBF is primarily used to "bump" transaction fees when network conditions change. If you initially set a low fee and your transaction isn't confirming, RBF lets you increase it to compete for block space.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <AlertCircle className="mr-2 h-6 w-6 text-primary" />
                        Zero-Confirmation Considerations
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      RBF transactions should not be accepted for zero-confirmation payments, as they can be replaced before being mined. Merchants should wait for <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmations</Link> when accepting RBF-enabled transactions.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Modern <Link href="/glossary/wallet" className="text-primary hover:underline">wallets</Link> increasingly support RBF by default, as it provides users with more control over transaction confirmation times. An alternative approach is <Link href="/glossary/cpfp" className="text-primary hover:underline">CPFP (Child Pays for Parent)</Link>, where the recipient can speed up confirmation.
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
