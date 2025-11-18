// src/app/glossary/mempool/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Inbox, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function MempoolGlossaryPage() {
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
              What Is the Mempool?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              The mempool (memory pool) is a waiting area where unconfirmed Bitcoin transactions are held before being included in a <Link href="/glossary/block" className="text-primary hover:underline">block</Link>. Each node maintains its own mempool, creating a distributed staging area for pending transactions across the network.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Inbox className="mr-2 h-6 w-6 text-primary" />
                    Waiting for Confirmation
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    When you broadcast a transaction, it enters the mempool of nodes across the network. Miners select transactions from their mempool to include in the next block, typically prioritizing those with higher <Link href="/glossary/fee-rate" className="text-primary hover:underline">fee rates</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              How It Works
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Clock className="mr-2 h-6 w-6 text-primary" />
                        Transaction Priority
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      During high network activity, the mempool fills up with pending transactions. Those offering competitive fees get prioritized, while lower-fee transactions may wait longer or use <Link href="/glossary/rbf" className="text-primary hover:underline">RBF</Link> to speed up confirmation.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Fee Market
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      The mempool creates a dynamic fee market where users compete for block space. Monitoring mempool size and composition helps estimate appropriate fees for timely <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmation</Link>.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Each node's mempool may differ slightly due to network propagation delays and different relay policies. Transactions that don't confirm and lack sufficient fees may eventually be dropped from mempools, allowing the <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> to be spent again.
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
