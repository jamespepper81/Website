// src/app/glossary/taproot/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Lock, Eye, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function TaprootGlossaryPage() {
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
              What Is Taproot?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Taproot is a major Bitcoin protocol upgrade activated in November 2021 that enhances privacy, efficiency, and smart contract flexibility. It introduces <Link href="/glossary/schnorr-signature" className="text-primary hover:underline">Schnorr signatures</Link> and enables more complex Bitcoin scripts to appear identical to simple transactions on the blockchain.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Lock className="mr-2 h-6 w-6 text-primary" />
                    Privacy Through Uniformity
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    With Taproot, complex multi-signature setups and smart contracts look the same as regular single-signature transactions. This makes it impossible for outside observers to distinguish between different transaction types, significantly improving privacy.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Improvements
            </h2>

             <div className="mt-8 grid gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Enhanced Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      By making all transactions look similar on-chain, Taproot obscures the details of complex spending conditions, protecting user privacy while maintaining Bitcoin's transparency for verification purposes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Lower Fees & Better Efficiency
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Schnorr signatures enable signature aggregation, reducing the data size of multi-signature transactions. This results in lower <Link href="/glossary/fee-rate" className="text-primary hover:underline">fees</Link> and more efficient use of block space.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Taproot builds on <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> and works alongside <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> to enable more sophisticated Bitcoin applications while keeping the network secure and private. It represents a significant step forward in Bitcoin's evolution.
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
