// src/app/glossary/payjoin/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Eye, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function PayJoinGlossaryPage() {
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
              What Is PayJoin?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              PayJoin (also known as P2EP - Pay-to-Endpoint) is a privacy-enhancing Bitcoin transaction type where the receiver contributes one of their own <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> as an additional input to a payment. This breaks the common input ownership heuristic while looking like a normal transaction on the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Two-Party Collaboration
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Unlike <Link href="/glossary/coinjoin" className="text-primary hover:underline">CoinJoin</Link> which requires coordinating many participants, PayJoin only involves the sender and receiver. The receiver contributes an input to the payment transaction, making it impossible for observers to determine the actual payment amount.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Advantages
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Stealth Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      PayJoin transactions look like regular transactions with no distinguishing characteristics. This provides privacy without drawing attention, unlike larger CoinJoin transactions that are more visible.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        UTXO Consolidation
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Receivers can use PayJoin to consolidate their own UTXOs while receiving payment, optimizing their <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> efficiency. This turns a received payment into an opportunity for free UTXO management.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             PayJoin is defined in BIP 78 and supported by increasing numbers of wallets. It requires coordination between sender and receiver but offers superior privacy with minimal overhead. The technique breaks chain analysis assumptions while maintaining plausible deniability through normal-looking transactions.
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
