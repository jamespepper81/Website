// src/app/glossary/segwit/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Zap, Database } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function SegWitGlossaryPage() {
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
              What Is SegWit (Segregated Witness)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Segregated Witness (SegWit) is a protocol upgrade activated in 2017 that fundamentally changed how transaction data is stored in Bitcoin blocks. It separates (segregates) the digital signature data (witness) from the transaction data, allowing more transactions to fit in each block.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Shield className="mr-2 h-6 w-6 text-primary" />
                    Transaction Malleability Fix
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    SegWit solved a critical issue called transaction malleability, where transaction IDs could be slightly altered before confirmation. This fix was essential for enabling advanced features like the <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Increased Capacity
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      By moving signature data outside the main transaction block, SegWit effectively increases block capacity from 1MB to approximately 4MB, allowing more transactions per block.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Database className="mr-2 h-6 w-6 text-primary" />
                        Lower Fees
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      SegWit transactions are smaller in size, resulting in lower <Link href="/glossary/fee-rate" className="text-primary hover:underline">transaction fees</Link>. Native SegWit addresses (starting with "bc1") offer the most efficient format.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             SegWit is backward compatible, meaning older Bitcoin software can still interact with SegWit-enabled nodes. It paved the way for further improvements like <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> and enhanced Bitcoin's scalability without requiring a hard fork.
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
